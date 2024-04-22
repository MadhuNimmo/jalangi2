
import re
import os
import sys
import glob
import json
import pandas as pd
from mergeData import mf


# Function to sort the dataframe in alphatical order
def sort_df(df, column_name):
    sorted_df = df.sort_values(by=column_name)
    return sorted_df

# Function to extract numeric values from a string using regex
def extract_numeric_value(string):
    match = re.search(r'\d+\.?\d*', string)
    if match:
        return float(match.group())
    return None

benchmarks = []
working_benchmarks = []

if len(sys.argv) != 2:
        print("Usage: python script.py <directory_path>")
        sys.exit(1)

# Get directory path from command-line argument
directory_path = sys.argv[1]
outFile_path = []

def get_working_benchmarks(file_paths):
    cnt = 0
    data = []
     # Iterate over each file
    for file_path in file_paths:
        with open(file_path, 'r') as file:
            content = json.load(file)
            benchmark = ((file_path.split("/")[-2]).split(".json")[0]).split("_")[1]
            try:
                # Extract analysis time
                analysis_time = content["exec time"]

                # Extract precision, recall, and max rounds
                call_site_precision = content["total avg precision"]
                call_site_recall = content["total avg recall"]
                data.append({
                        'Benchmark' : benchmark,
                        'Analysis Time (ms)': analysis_time,
                        'Precision (%)': call_site_precision,
                        'Recall (%)': call_site_recall
                })
            except:
                cnt+=1
                print("Exception: ",file_path)
    print("Total no of Exceptions: ",cnt)
    df = pd.DataFrame(data)
    df = df.sort_values('Benchmark', key=lambda x: x.str.lower())
    df = df.reset_index(drop=True)
    for i in range(0, len(df)-1):
        if "-" not in df['Benchmark'][i]:
                word = df['Benchmark'][i+1]
                result = word.split("-")
                if (df['Benchmark'][i].lower() == result[0].lower()) and (len(result) > 0):
                        df.iloc[[i, i+1]] = df.iloc[[i+1, i]]
        output_path=directory_path+'/web{}.xlsx'.format("unbounded")
        # Check if the file already exists
        if os.path.exists(output_path):
                # Remove the file if it exists
                os.remove(output_path)
    # Write the DataFrame to an Excel file
    df.to_excel(output_path, index=False)
    outFile_path.append(output_path)
    print('Data written to '+output_path)
    return working_benchmarks


def get_data(file_paths,benchmarks):
    data = []
    cnt = 0
     # Iterate over each file
    for file_path in file_paths:
         with open(file_path, 'r') as file:
            content = json.load(file)
            benchmark = ((file_path.split("/")[-2]).split(".json")[0]).split("_")[1]
            try:
                # Extract analysis time
                analysis_time = content["exec time"]

                # Extract precision, recall, and max rounds
                call_site_precision = content["total avg precision"]
                call_site_recall = content["total avg recall"]
                data.append({
                        'Benchmark' : benchmark,
                        'Analysis Time (ms)': analysis_time,
                        'Precision (%)': call_site_precision,
                        'Recall (%)': call_site_recall
                })
            except:
                cnt+=1
                print("Exception: ",file_path)
    print("Total no of Exceptions: ",cnt)
    return data
def main():
    temp_file_path = glob.glob(directory_path + '**/Metrics1_OPT.json',recursive=True)
    working_benchmarks = get_working_benchmarks(temp_file_path)
    data = []
    for x in range(0, 6):
        file_paths = glob.glob(directory_path + "**/Metrics1_BND{}.json".format(x))
        data = get_data(file_paths,working_benchmarks)
        # Create a DataFrame from the extracted data
        df = pd.DataFrame(data)
        df = df.sort_values('Benchmark', key=lambda x: x.str.lower())
        df = df.reset_index(drop=True)
        for i in range(0, len(df)-1):
                if "-" not in df['Benchmark'][i]:
                        word = df['Benchmark'][i+1]
                        result = word.split("-")
                        if (df['Benchmark'][i].lower() == result[0].lower()) and (len(result) > 0):
                                df.iloc[[i, i+1]] = df.iloc[[i+1, i]]
                output_path= directory_path+'/web_BND{}.xlsx'.format(x)
                # Check if the file already exists
                if os.path.exists(output_path):
                        # Remove the file if it exists
                        os.remove(output_path)
        # Write the DataFrame to an Excel file
        df.to_excel(output_path, index=False)
        outFile_path.append(output_path)
        print('Data written to '+output_path)
main()
mf(outFile_path, directory_path+'/WebData.xlsx')
outFile_path=[]
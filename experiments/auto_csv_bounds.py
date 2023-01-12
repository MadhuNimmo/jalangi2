import numpy as np
import pandas as pd
import json
import os
import sys
import re

target = sys.argv[1]
out_path = target
metrics3_dict = {}
metrics_results = ['Bound','Precision', 'Recall']
first = True
for subdir, dirs, files in os.walk(target):
    framework = subdir.split('/')[len(subdir.split('/')) - 1]
    if len(framework)>1 :
        metrics3_dict[framework]= []
        for file in files:
                if file.endswith('.json') and 'Metrics' in file:
                        with open(os.path.join(target, subdir, file), "r") as framework_res_json:
                                data = json.load(framework_res_json)
                        if file.startswith('Metrics3_BND'):
                                bnd_num = re.search(r"Metrics3\_BND(\d+).json",file).group(1)
                                bnd_prec = data['total avg precision']
                                bnd_recall = data['total avg recall']
                                list_of_bnd = [bnd_num,bnd_prec, bnd_recall]
                                metrics3_dict[framework].extend([list_of_bnd])

print(metrics3_dict)


'''met1_df = pd.DataFrame.from_dict(metrics1_dict, orient='index', dtype=None, columns=metrics_results)
met2_df = pd.DataFrame.from_dict(metrics2_dict, orient='index', dtype=None, columns=metrics_results)'''
for framework in metrics3_dict:
        met3_df = pd.DataFrame.from_dict(metrics3_dict, dtype=None, columns=metrics_results)
'''met1_df = met1_df[['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']]
met2_df = met2_df[['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']]'''
#met3_df = met3_df[['Bound','Precision', 'Recall']]

'''met3_bnd_pre_avg = met3_df['Bound'].astype(int).mean()
met3_bnd_pre_avg = met3_df['Precision'].astype(float).mean()
met3_bnd_rec_avg = met3_df['Recall'].astype(float).mean()
met3_df_avg = pd.DataFrame([[met3_bnd_pre_avg, met3_bnd_rec_avg]], columns=['Precision', 'Recall'], index=['mean'])
met3_df = met3_df.append(met3_df_avg)


writer = pd.ExcelWriter(out_path +'/metrics_output.xlsx')

met3_df.to_excel(writer,
             sheet_name='Final(EntryPointEdgeReach)')

writer.save()'''

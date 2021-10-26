import pandas as pd
import json
import csv
import sys

new_list=[]
filename1 = sys.argv[1]
filename2 = sys.argv[2]
with open(filename1) as f1:
  data = json.load(f1)
for key, value in data.items():
        for val in value:
                new_list.append([key,val])
  
with open(filename2, 'w') as f:
    writer = csv.writer(f)
    writer.writerows(new_list)
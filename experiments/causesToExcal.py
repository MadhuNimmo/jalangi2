import pandas as pd
import json
import csv
import sys

new_list=[]
filename1 = sys.argv[1]
filename2 = sys.argv[2]
with open(filename1) as f1:
  data = json.load(f1)
for item in data:
        if type(item["reasons"]) == unicode:
                new_list.append([item["source"],item["destination"],item["reasons"]])
        elif len(item["reasons"])>0:
                new_list.append([item["source"],item["destination"],item["reasons"][0]])
                reasons = item["reasons"]
                for x in range(1,len(reasons)):
                        new_list.append(["","",reasons[x]])
        else:
                new_list.append([item["source"],item["destination"],""])

  
with open(filename2, 'w') as f:
    writer = csv.writer(f)
    writer.writerows(new_list)
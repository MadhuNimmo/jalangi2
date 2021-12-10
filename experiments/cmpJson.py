import json
import sys

cnt=0

filename1 = sys.argv[1]
filename2 = sys.argv[2]

with open(filename1) as f1:
  data = json.load(f1)
with open(filename2) as f2:
  data2 = json.load(f2)
new = {}
for key1, value1 in data.items():
          flag = False
          for key2, value2 in data2.items():
              if(key1==key2 or str(key2) in str(key1)):
                  print(key1,key2)
                  for item1 in value1:
                    for item2 in value2:
                      if(item1==item2 or (str(item2) in str(item1))):
                          flag=True
          if(flag==False):
              print(key1,value1)
              if(key1 in new):
                  new[key1].append(value1)
              else:
                  new[key1]=[]

                              
print(new)        
#if two json obs are same
'''a, b = json.dumps(data1, sort_keys=True), json.dumps(data2, sort_keys=True)
print(a == b)'''
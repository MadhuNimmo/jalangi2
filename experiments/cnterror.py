import json
import sys
cnt=0
filename1 = sys.argv[1]
data=[]
'''with open(filename1) as f1:
  data = json.load(f1)'''
f = open(filename1,"r")
data1 = f.read()
data = json.loads(data1)
rslt=[]
#reasons where all paths are found
for item in data:
        #print(x for x in items["reasons"])
        #reslt = ( for x in item['reasons'])
        cnt=0
        for x in item['reasons']:
                if str(x).startswith("Path found between:"):
                        cnt+=1
        if(cnt==len(item['reasons'])):
                rslt.append(item)
print(len(rslt))
print(rslt)

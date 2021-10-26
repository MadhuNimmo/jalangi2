import json
import sys
#filename='/Users/madhurimachakraborty/Documents/js-acg-examples-master/Knockout_test_results/StatWala.json'

cnt=0
cnt2=0
#item_dict = json.loads(filename)

#import json
filename1 = sys.argv[1]
#filename2 = sys.argv[2]
#out_key = filename2.read().split('\n')
'''out_key = [line.rstrip('\n') for line in open(filename2)]'''

with open(filename1) as f1:
  data = json.load(f1)

#print(len(data))
listy = []
'''with open(filename2) as f2:
  data2 = json.load(f2)'''

'''for out in out_key:'''
'''for key,value in data.items():
    if ("app.js") in key or ("base.js") in key:
        #print(key)
        for k,v in value.items():
            cnt+=len(v)'''
for key,value in data.items():
        for k,v in value.items():
            cnt+=len(v)
'''for key, value in data.items():
      cnt+=len(value) 
      for item in value:
                if(item == "Var(/Users/UserXYZ/Documents/todomvc-master/examples/angularjs/node_modules/angular/angular.js@1633:48390-48494, %ssa_val 16)"):
                          listy.append(key)
                #print(key.find("jquery.js")>-1 & item.find("jquery.js")>-1)
                #if((key.find("app.js")>-1 & item.find("base.js")>-1)==True):
                          #cnt2+=1
listy2=[]
for key, value in data.items():
          if(key=="Var(/Users/UserXYZ/Documents/todomvc-master/examples/angularjs/node_modules/angular/angular.js@7750:270474-289480, [childTranscludeFn])"):
                    for item in value:
                              if(item in set(listy)):
                                        listy2.append(item)'''
print(cnt)
'''print(cnt2)
print(len(listy))
print(len(listy2))'''
'''for key1,value1 in data1.items():
        for key2,value2 in data2.items():
            if(key1==key2 or key1 in key2 ):
              for k1,v1 in value1.items():
                  for k2,v2 in value2.items():
                      if(v1!=v2):
                          print(key1,value1)
                          print(nimmo)'''
            
#if two json obs are same
'''a, b = json.dumps(data1, sort_keys=True), json.dumps(data2, sort_keys=True)
print(a == b)'''
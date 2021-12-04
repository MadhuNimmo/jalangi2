import sj
import sys

status = 0
encoding = 'utf-8'

def test(prefix, file, rest):
    sj.create_and_cd_jalangi_tmp()
    ana = sj.execute_return_np(sj.JALANGI_SCRIPT+' --inlineIID --inlineSource --analysis ../src/js/sample_analyses/ChainedAnalyses.js --analysis ../src/js/runtime/SMemory.js --analysis ../src/js/sample_analyses/pldi16/TraceAll.js '+prefix+file+'.js '+rest, savestderr=True)
    
    if 'analysis exception!!!' in str(ana, encoding):
        print(ana)
        print("{} failed".format(file))
    else:
        print("{} passed".format(file))

    sj.cd_parent()

with open('tests/unit/unitTests.txt','r') as fp:
    for line in fp:
        args = line.split()
        if len(args) == 2:
            rest = args[1]
        else:
            rest = ''
        test('../tests/unit/',args[0], rest)

exit(status)

from subprocess import call

def call_fail(l):
    if call(l) != 0:
        print "{} failed".format(" ".join(l))
        exit(1)


call_fail(["python", "experiments/func_test.py"])

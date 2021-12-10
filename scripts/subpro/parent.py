import subprocess

p = subprocess.run(["python", "/home/anon/jalangi2/scripts/subpro/child.py"], capture_output=True)
print(p)
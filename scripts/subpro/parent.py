import subprocess

p = subprocess.run(["python", "/Users/madhurimachakraborty/Documents/jalangi2/scripts/subpro/child.py"], capture_output=True)
print(p)
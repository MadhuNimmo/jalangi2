import subprocess
import sys
import os

print('Number of arguments:', len(sys.argv), 'arguments.')
print('Argument List:', str(sys.argv))
print(sys.argv[1].split('=')[1])
print(sys.argv[2].split('=')[1])
print(sys.argv[3].split('=')[1])
print(sys.argv[4].split('=')[1])
print(sys.argv[5].split('=')[1])
print(sys.argv[6].split('=')[1])
print(sys.argv[7].split('=')[1])

path_to_todomvc = sys.argv[1].split('=')[1]
path_to_todomvc_frameworks =  path_to_todomvc + 'examples/'
path_to_jalangi = sys.argv[2].split('=')[1]
path_to_experiments = sys.argv[2].split('=')[1] + 'experiments/'
path_to_wala_acg = sys.argv[3].split('=')[1]
path_to_wala_propsrc = sys.argv[4].split('=')[1]
outpath = sys.argv[5].split('=')[1]
chosen_frameworks = (sys.argv[6].split('=')[1]).split(',')
typ_scg = sys.argv[7].split('=')[1]
list_of_exercised_frameworks = []
if chosen_frameworks[0].lower() == 'all':
    list_of_exercised_frameworks = ["angularjs", "backbone", "knockback", "knockoutjs", "canjs", "react", "mithril", "vue", "vanillajs", "jquery"]
else:
    list_of_exercised_frameworks.extend(chosen_frameworks)

for framework in list_of_exercised_frameworks:
    path_to_current_framework = path_to_todomvc_frameworks + framework + "/"
    # print(path_to_current_framework)
    print(f'Executing scripts for {framework}')

    out_path = f'{outpath}todo_{framework}'
    #full_out_path = out_path + '/'
    cd_walaacg= path_to_wala_acg#f'cd {path_to_wala_acg}'
    #os.chdir(path_to_wala_acg)
    opt_cmd = f'{path_to_wala_acg}gradlew run --args="{path_to_current_framework} {out_path} {typ_scg}"'
    cd_walapropsrc= path_to_wala_propsrc
    propsrc_cmd = f'{path_to_wala_propsrc}gradlew run --args="{path_to_current_framework} {out_path}"'
    cd_jalangiexp = path_to_jalangi
    pupserv_cmd = f'node --max-old-space-size=8192 {path_to_experiments}pupServ.js {path_to_todomvc}examples/{framework}/ {out_path}/DCG.json'
    stat_dyn_diff_cmd = f'node {path_to_experiments}metrics/StatVSDynDiffCallee.js {out_path}/DCG.json {out_path}/SCG_{typ_scg}.json {path_to_todomvc}examples/{framework}/ {out_path}/'
    metric1_cmd = f'node {path_to_experiments}metrics/metric1.js {out_path}/DCG.json {out_path}/SCG_{typ_scg}.json {path_to_todomvc}examples/{framework}/ {outpath}analysis_results.json {framework}'
    metric2_cmd = f'node {path_to_experiments}metrics/metric2.js {out_path}/DCG.json {out_path}/SCG_{typ_scg}.json {path_to_todomvc}examples/{framework}/ {outpath}analysis_results.json {framework}'
    metric3_cmd = f'node {path_to_experiments}metrics/metric3.js {out_path}/DCG.json {out_path}/SCG_{typ_scg}.json {path_to_todomvc}examples/{framework}/ {outpath}analysis_results.json {framework}'
    pupserv2_cmd = f'node --max-old-space-size=8192 {path_to_experiments}pupServ2.js {path_to_todomvc}examples/{framework}/ {out_path}/todo_{framework}_trace.json {out_path}/calleeMap.json'
    parse_call_cmd = f'node --max-old-space-size=4096 {path_to_experiments}parse_call.js {out_path}/diff.json {out_path}/todo_{framework}_trace.json  {path_to_todomvc}examples/{framework}/ {out_path}/FG_{typ_scg}.json {out_path}/SCG_{typ_scg}.json {out_path}/DCG_EDIT.json {typ_scg}'
    find_prop_reasons_cmd = f'node {path_to_experiments}findPropReasons.js {out_path}/StaticProps.json {out_path}/todo_{framework}_props.json {out_path}'
    count_cmd = f'node {path_to_experiments}count.js {out_path}/todo_{framework}_causes.json {out_path}'
    cnterror_cmd = f'python {path_to_experiments}cnterror.py {out_path}/todo_{framework}_causes.json'''
    list_of_cmds = [cd_walaacg, opt_cmd, cd_walapropsrc, propsrc_cmd,cd_jalangiexp, pupserv_cmd, metric1_cmd, metric2_cmd, metric3_cmd, stat_dyn_diff_cmd, pupserv2_cmd, parse_call_cmd, find_prop_reasons_cmd, count_cmd, cnterror_cmd]
    #[cd_jalangiexp, parse_call_cmd, find_prop_reasons_cmd, count_cmd, cnterror_cmd]
    # [cd_jalangiexp, stat_dyn_diff_cmd, pupserv2_cmd, parse_call_cmd, find_prop_reasons_cmd, count_cmd, cnterror_cmd]
    #[cd_walaacg, opt_cmd, cd_walapropsrc, propsrc_cmd,cd_jalangiexp, pupserv_cmd, stat_dyn_diff_cmd, pupserv2_cmd, parse_call_cmd, find_prop_reasons_cmd, count_cmd, cnterror_cmd]
    for cmd in list_of_cmds:
        #print("Here: "+os.getcwd())
        if os.path.isdir(cmd):
            os.chdir(cmd)
        else:
            print('Executing command ' + cmd)
            process = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
            output, error = process.communicate()
            print(output.strip())
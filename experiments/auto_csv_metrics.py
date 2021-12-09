import numpy as np
import pandas as pd
import json
import os
import sys
import openpyxl

target = sys.argv[1]
metrics1_dict = {}
metrics2_dict = {}
metrics3_dict = {}
metrics_results = ['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']
first = True
for subdir, dirs, files in os.walk(target):
    print(subdir)
    if 'Optimistic' in subdir and first:
        metrics_results = ['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']
        first = False

    if 'Pessimistic' in subdir and first:
        metrics_results = ['Pessimistic Precision', 'Pessimistic Recall', 'Optimistic Precision', 'Optimistic Recall']
        first = False

    framework = subdir.split('/')[len(subdir.split('/')) - 1]
    for file in files:
        print(file)
        if file.endswith('.json') and 'Metrics' in file:
            print('Loading json....')
            with open(os.path.join(target, subdir, file), "r") as framework_res_json:
                data = json.load(framework_res_json)

            if file.startswith('Metrics1'):
                if file.endswith('_OPT.json'):
                    opt_prec = data['total avg precision']
                    opt_recall = data['total avg recall']
                    list_of_opt = [opt_prec, opt_recall]
                    if framework in metrics1_dict:
                        metrics1_dict[framework].extend(list_of_opt)
                    else:
                        metrics1_dict[framework] = list_of_opt


                if file.endswith('_PES.json'):
                    pes_prec = data['total avg precision']
                    pes_recall = data['total avg recall']
                    list_of_pes = [pes_prec, pes_recall]
                    if framework in metrics1_dict:
                        metrics1_dict[framework].extend(list_of_pes)
                    else:
                        metrics1_dict[framework] = list_of_pes

            if file.startswith('Metrics2'):
                if file.endswith('_OPT.json'):
                    opt_prec = data['total avg precision']
                    opt_recall = data['total avg recall']
                    list_of_opt = [opt_prec, opt_recall]
                    if framework in metrics2_dict:
                        metrics2_dict[framework].extend(list_of_opt)
                    else:
                        metrics2_dict[framework] = list_of_opt


                if file.endswith('_PES.json'):
                    pes_prec = data['total avg precision']
                    pes_recall = data['total avg recall']
                    list_of_pes = [pes_prec, pes_recall]
                    if framework in metrics2_dict:
                        metrics2_dict[framework].extend(list_of_pes)
                    else:
                        metrics2_dict[framework] = list_of_pes
            
            if file.startswith('Metrics3'):
                if file.endswith('_OPT.json'):
                    opt_prec = data['total avg precision']
                    opt_recall = data['total avg recall']
                    list_of_opt = [opt_prec, opt_recall]
                    if framework in metrics3_dict:
                        metrics3_dict[framework].extend(list_of_opt)
                    else:
                        metrics3_dict[framework] = list_of_opt


                if file.endswith('_PES.json'):
                    pes_prec = data['total avg precision']
                    pes_recall = data['total avg recall']
                    list_of_pes = [pes_prec, pes_recall]
                    if framework in metrics3_dict:
                        metrics3_dict[framework].extend(list_of_pes)
                    else:
                        metrics3_dict[framework] = list_of_pes

print(metrics1_dict)
print(metrics2_dict)
print(metrics3_dict)

met1_df = pd.DataFrame.from_dict(metrics1_dict, orient='index', dtype=None, columns=metrics_results)
met2_df = pd.DataFrame.from_dict(metrics2_dict, orient='index', dtype=None, columns=metrics_results)
met3_df = pd.DataFrame.from_dict(metrics3_dict, orient='index', dtype=None, columns=metrics_results)
met1_df = met1_df[['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']]
met2_df = met2_df[['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']]
met3_df = met3_df[['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall']]

met1_opt_pre_avg = met1_df['Optimistic Precision'].astype(float).mean()
met1_opt_rec_avg = met1_df['Optimistic Recall'].astype(float).mean()
met1_pes_pre_avg = met1_df['Pessimistic Precision'].astype(float).mean()
met1_pes_rec_avg = met1_df['Pessimistic Recall'].astype(float).mean()
met1_df_avg = pd.DataFrame([[met1_opt_pre_avg, met1_opt_rec_avg, met1_pes_pre_avg, met1_pes_rec_avg]], columns=['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall'], index=['mean'])
met1_df = met1_df.append(met1_df_avg)
print(met1_df_avg)

met2_opt_pre_avg = met2_df['Optimistic Precision'].astype(float).mean()
met2_opt_rec_avg = met2_df['Optimistic Recall'].astype(float).mean()
met2_pes_pre_avg = met2_df['Pessimistic Precision'].astype(float).mean()
met2_pes_rec_avg = met2_df['Pessimistic Recall'].astype(float).mean()
met2_df_avg = pd.DataFrame([[met2_opt_pre_avg, met2_opt_rec_avg, met2_pes_pre_avg, met2_pes_rec_avg]], columns=['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall'], index=['mean'])
met2_df = met2_df.append(met2_df_avg)

met3_opt_pre_avg = met3_df['Optimistic Precision'].astype(float).mean()
met3_opt_rec_avg = met3_df['Optimistic Recall'].astype(float).mean()
met3_pes_pre_avg = met3_df['Pessimistic Precision'].astype(float).mean()
met3_pes_rec_avg = met3_df['Pessimistic Recall'].astype(float).mean()
met3_df_avg = pd.DataFrame([[met3_opt_pre_avg, met3_opt_rec_avg, met3_pes_pre_avg, met3_pes_rec_avg]], columns=['Optimistic Precision', 'Optimistic Recall', 'Pessimistic Precision', 'Pessimistic Recall'], index=['mean'])
met3_df = met3_df.append(met3_df_avg)


writer = pd.ExcelWriter('metrics_output.xlsx')

met1_df.to_excel(writer,sheet_name='Final(CallSite)')  
met2_df.to_excel(writer,
             sheet_name='Final(EntryPointNodeReach)')  
met3_df.to_excel(writer,
             sheet_name='Final(EntryPointEdgeReach)')

writer.save()

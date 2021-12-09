import numpy as np
import pandas as pd
import json
import os
import sys
import openpyxl

target = sys.argv[1]
analysis_type = sys.argv[2].lower()
results_dict = {}

for subdir, dirs, files in os.walk(target):
    for file in files:
        print(analysis_type)
        print(subdir.lower())
        if file.endswith('.json') and 'resultCount' in file and analysis_type in subdir.lower():
            print('Loading json....')
            with open(os.path.join(target, subdir, file), "r") as framework_res_json:
                data = json.load(framework_res_json)

            num_missed_edges = data['Totals']['Number of edges']
            num_missed_paths = data['Totals']['Number of missed paths']
            avg_missed_paths_per_edge = data['Totals']['Average number of missed path/edge']

            num_entry_point_edge = data['Total Reason Count']['Entry point Edge'] if 'Entry point Edge' in data['Total Reason Count'] else 0
            num_calls_to_unmodelled_native_functions = data['Total Reason Count']['Calls to unmodelled native functions'] if 'Calls to unmodelled native functions' in data['Total Reason Count'] else 0
            num_calls_from_unmodelled_native_functions = data['Total Reason Count']['Calls from unmodelled native functions'] if 'Calls from unmodelled native functions' in data['Total Reason Count'] else 0
            num_use_of_eval = data['Total Reason Count']['Use of Eval'] if 'Use of Eval' in data['Total Reason Count'] else 0
            num_eval_via_new_function = data['Total Reason Count']['Eval via New Function'] if 'Eval via New Function' in data['Total Reason Count'] else 0
            num_creation_via_function_constructor = data['Total Reason Count']['Creation via Function Constructor'] if 'Creation via Function Constructor' in data['Total Reason Count'] else 0
            num_dynamic_property_access = data['Total Reason Count']['Dynamic Property Access between'] if 'Dynamic Property Access between' in data['Total Reason Count'] else 0
            num_use_of_with = data['Total Reason Count']['Use of With'] if 'Use of With' in data['Total Reason Count'] else 0
            num_calls_involving_bounded_functions = data['Total Reason Count']['Calls involving bounded functions'] if 'Calls involving bounded functions' in data['Total Reason Count'] else 0
            num_dynamic_trace_could_not_be_filtered = data['Total Reason Count']['Dynamic Trace could not be filtered partially'] if 'Dynamic Trace could not be filtered partially' in data['Total Reason Count'] else 0
            num_source_not_found = data['Total Reason Count']['Source not found'] if 'Source not found' in data['Total Reason Count'] else 0
            num_destination_not_found = data['Total Reason Count']['Destination not found'] if 'Destination not found' in data['Total Reason Count'] else 0
            num_source_destination_not_found = num_source_not_found + num_destination_not_found
            num_path_missing_interdependent_call = data['Total Reason Count']['Path missing for interdependent call between'] if 'Path missing for interdependent call between' in data['Total Reason Count'] else 0
            num_multiple_levels_of_native_func = data['Total Reason Count']['Multiple levels of Native functionality involved'] if 'Multiple levels of Native functionality involved' in data['Total Reason Count'] else 0
            num_path_missing_due_to_unknown_reasons = data['Total Reason Count']['Path missing between'] if 'Path missing between' in data['Total Reason Count'] else 0
            #num_parameter_pass_via_apply = 0
            num_wala_bug = 0
            num_calls_to_getters_setter = data['Total Reason Count']['Call to Getter/Setter'] if 'Call to Getter/Setter' in data['Total Reason Count'] else 0
            num_path_missed_due_to_parameter_pass = data['Total Reason Count']['Path missed due to Parameter Pass'] if 'Path missed due to Parameter Pass' in data['Total Reason Count'] else 0
            num_path_missing_func_return = (data['Total Reason Count']['Path missing for Function Return between'] if 'Path missing for Function Return between' in data['Total Reason Count'] else 0) if analysis_type == 'pes' else None#For pes
            num_edge_all_paths = 0
            num_edge_max_num_paths = data['Edge with maximum no of paths']['paths']
            num_edge_max_num_missed_paths = data['Edge with maximum no of missed paths']['missedPaths']
            framework_data_row = [num_entry_point_edge, num_calls_to_unmodelled_native_functions, num_calls_from_unmodelled_native_functions, num_use_of_eval, num_eval_via_new_function, num_creation_via_function_constructor, num_dynamic_property_access, num_use_of_with, num_calls_involving_bounded_functions, num_dynamic_trace_could_not_be_filtered, num_source_destination_not_found, num_path_missing_interdependent_call, num_multiple_levels_of_native_func, num_path_missing_due_to_unknown_reasons, num_wala_bug, num_calls_to_getters_setter, num_path_missed_due_to_parameter_pass, num_path_missing_func_return,num_missed_edges, num_missed_paths, None, avg_missed_paths_per_edge, '', num_edge_all_paths, num_edge_max_num_paths, num_edge_max_num_missed_paths ]
            results_dict[file.split('.')[0]] = framework_data_row

frameworks = ['Canjs', 'Knockback', 'Knockoutjs', 'React', 'Angularjs', 'Backbone', 'Mithril', 'Jquery', 'Vue', 'Vanillajs']
reasons_results = ['Entry point edge', 'Calls to unmodelled native functions', 'Calls from unmodelled native functions', 'Use of Eval', 'Eval via New Function', 'Creation via Function Constructor', 'Dynamic Property Access', 'Use of With', 'Calls involving bounded functions', 'Dynamic Trace could not be filtered', 'Source/Destination not found', 'Path missing due to interdependent call', 'Multiple levels of Native functionality involved', 'Path missing due to unknown reasons','WALA bug(Finally)(repeat at count)', 'Calls to Getters/Setters', 'Path missed due to parameter pass/2', 'Path missing for Function Return between', 'missed edges', 'missed paths', 'Effectiveness', 'Average number of missed path/edge', 'Notes', 'Any edge with all paths as found', 'Edge with maximum number of paths', 'Edge with maximum number of missed paths']
res_df = pd.DataFrame.from_dict(results_dict, orient='index', dtype=None, columns=reasons_results)
print(res_df.head())
res_df.to_csv(analysis_type + '_root_causes.csv')


res_df.to_excel(analysis_type + "_root_causes_output.xlsx",
             sheet_name=analysis_type.upper() + ' Root Causes')  
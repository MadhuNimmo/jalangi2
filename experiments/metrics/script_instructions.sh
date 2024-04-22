#!/bin/bash

# Define benchmarks
benchmarks=(angularjs backbone canjs jquery knockoutjs knockback mithril react vanillajs vue)

# Define paths
top_level_directory=/ # Change this to the desired top-level directory
jalangi_path=$top_level_directory/jalangi2/
wala_acg_path=$top_level_directory/WALA-ACG/
todomvc_path=$top_level_directory/todomvc/
out_path=$top_level_directory/jalangi2/RawWebData/

# Create output directory if it doesn't exist
mkdir -p $out_path

# Generating Unbounded Static Call Graphs for Web Apps
cd $wala_acg_path
for benchmark in "${benchmarks[@]}"
do
    echo "Generating SCG for benchmark $benchmark Unbounded"
    output=$(./gradlew run --args="$todomvc_path/examples/$benchmark/ $out_path/todo_$benchmark/ OPT")
    exec_time=$(echo "$output" | grep -oE 'call graph extraction took ([0-9]+([.][0-9]+)?) seconds' | awk '{print $5}')
    json="{\"exec time\":${exec_time}}"
    echo "$json" > $out_path/todo_$benchmark/Metrics1_OPT.json
    wait
done

# Generating Bounded Static Call Graphs for Web Apps
for benchmark in "${benchmarks[@]}"
do
    for j in {0..5}
    do
        echo "Generating SCG for benchmark $benchmark for Bound $j"
        output=$(./gradlew run --args="$todomvc_path/examples/$benchmark/ $out_path/todo_$benchmark/ BND $j")
        exec_time=$(echo "$output" | grep -oE 'call graph extraction took ([0-9]+([.][0-9]+)?) seconds' | awk '{print $5}')
        json="{\"exec time\":${exec_time}}"
        echo "$json" > $out_path/todo_$benchmark/Metrics1_BND$j.json
    done
done

# Running Metrics for Web Apps
for benchmark in "${benchmarks[@]}"
do
    filedir="$out_path/todo_${benchmark}"
    for f in `ls $filedir`
    do
        if [[ $f == SCG_BND*.json ]] || [[ $f == SCG_OPT.json ]]
        then
            echo "Running Metrics for benchmark $benchmark -> file $f"
            node $jalangi_path/experiments/metrics/metric1.js $out_path/todo_$benchmark/todo_${benchmark}_DCG.json $filedir/${f} $todomvc_path/examples/$benchmark/ $out_path/analysis_results.json $benchmark
        fi
    done
done

# Collect Metrics data into xslx
python3 $jalangi_path/experiments/metrics/collectData.py $out_path
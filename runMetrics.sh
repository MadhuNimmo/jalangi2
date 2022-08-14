#!/bin/bash
#FILES="/Users/madhurimachakraborty/Documents/CutOffExp/todo_mithril/"
#str=(angularjs vue jquery canjs react mithril)
#str=(backbone knockoutjs knockback)
str=(vanillajs)
for i in "${str[@]}"
do
filedir="/Users/madhurimachakraborty/Documents/todoMetrics_RerunOld/todo_$i/"
for f in `ls $filedir`
do
if [[ $f == *SCG* ]]
then
echo "Running Metrics for benchmark $i -> file $f"
#node --max-old-space-size=8192 metric3.js /Users/madhurimachakraborty/Documents/CutOffExp/todo_${i}_DCG.json $filedir$f /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/CutOffExp/analysis_results.json $i
node --max-old-space-size=8192 experiments/metrics/metric1.js  ${filedir}DCG.json $filedir$f /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/todoMetrics_RerunOld/analysis_results.json $i
wait
node --max-old-space-size=8192 experiments/metrics/metric2.js  ${filedir}DCG.json $filedir$f /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/todoMetrics_RerunOld/analysis_results.json $i
wait
node --max-old-space-size=8192 experiments/metrics/metric3.js  ${filedir}DCG.json $filedir$f /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/todoMetrics_RerunOld/analysis_results.json $i
wait
fi
done
done
#!/bin/bash
#FILES="/Users/madhurimachakraborty/Documents/CutOffExp/todo_mithril/"
#str=(angularjs vue jquery canjs)
#str=(backbone knockoutjs knockback)
str=(vanillajs mithril react)
for i in "${str[@]}"
do
filedir="/Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/"
for f in `ls $filedir`
do
if [[ $f == *SCG* ]]
then
echo "Running Metrics for benchmark $i -> file $f"
node experiments/metrics/StatVSDynDiffCallee.js /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/DCG.json /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/SCG_PES.json /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/
wait
node --max-old-space-size=8192 experiments/pupServ2.js /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/todo_${i}_trace.json /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/calleeMap.json
wait
node --max-old-space-size=4096 experiments/parse_call.js /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/diff.json /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/todo_${i}_trace.json  /Users/madhurimachakraborty/Documents/todomvc-master/examples/$i/ /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/FG_PES.json /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/SCG_PES.json /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/DCG_EDIT.json PES
wait
node experiments/count.js /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i/todo_${i}_causes.json /Users/madhurimachakraborty/Documents/todoResults_RerunPES/todo_$i
wait
fi
done
done
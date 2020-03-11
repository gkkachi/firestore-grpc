#!/bin/bash

rm -rf proto
mkdir proto
wget https://github.com/googleapis/googleapis/archive/master.zip && unzip -q master.zip
mv googleapis-master/google proto
find proto -type f -not -name '*.proto' -delete
rm -rf googleapis-master master.zip

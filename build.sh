#!/bin/bash

tag=$(git describe --tags --abbrev=0)
branch=$(git rev-parse --abbrev-ref HEAD)

# Clean up old builds
rm -rf olariv2*.zip



# Create folders
if [[ $tag =~ ^v.*$ ]]; then
  now=$tag
  git checkout $tag
else
  now=$(date +%y-%m-%d)
fi
name1="olariv2-$now"
name2="olariv2-ai1ec-$now"
mkdir $name1
mkdir $name2

# Build
./node_modules/.bin/gulp build

#Copying required resources
cp -r build/ $name1/
cp -r build-ai1ec/ $name2/

cp LICENSE $name1/
cp README.md $name1/

cp LICENSE $name2/
cp README.md $name2/


#creating zipfiles

zip -r "$name1.zip" $name1/*
zip -r "$name2.zip" $name2/*

#cleaning up

rm -r $name1
rm -r $name2

if [[ $tag =~ ^v.*$ ]]; then
  git checkout $branch
fi


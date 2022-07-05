#!/bin/bash
echo "Starting dependencies installation"

# Installs dependencies in api folder
echo -e "\n***************************"
echo "Installing dependencies in ./api folder"
echo "Please wait..."
cd ./api
npm install
echo -e "\n-------"
echo "Automatically fixing vulnerability issues"
echo "Please wait..."
npm audit fix
cd ..

# Installs dependencies in react-ui folder
echo -e "\n***************************"
echo "Installing dependencies in ./react-ui folder"
echo "Please wait..."
cd ./react-ui
npm install
echo -e "\n-------"
echo "Automatically fixing vulnerability issues"
echo "Please wait..."
npm audit fix
cd ..

echo "Done"
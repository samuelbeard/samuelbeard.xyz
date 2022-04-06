---
date: "2021-04-27"
title: "My Go-To NPX Packages"
tags: ['Coding', 'Web Development', 'Linux']
---


### Get a notification when a long running terminal task is complete.
```
npx okimdone npm install
```

### Check npm packages to see if they are out of date
```
npx npm-check

**Options**
-u - Interactive Updates
-y - Update everything
-s - Skip unused
-g - Global
```

### Add things to .gitignore automatically
```
npx goops
```
### Make cool writing for terminals
```
npx figlet-cli <text>
```
### Check node_modules folders on your machine
```
npx npkill
```
### Copy a react component smartly
```
npx generact
```
### Show .json files in the terminal all pretty like
```
npx fx package.json
```
### Show and manage system status
```
npx vtop
```
### See your current networks password
```
npx wifi-password-cli
```
### Make your localhost accessible to the world
```
npx localtunnel --port 8000

**Example**
`npm run develop` on a gatsby site
`npx localtunnel --port 8000` will give you a URL to access from anywhere.
```
### Generate an image of your code. This can take a while as it opens chrome.
```
npx carbon-now-cli <file>

••Options**
-s - Line to start from
-e - Line to end on
-i - Interactive (Asks a lot of questions)
```

# Auto version updater
 A script to update the version number of your flutter project's pubspec.yaml file, done with JavaScript.
 
 ---
## Setup

 1. Clone this project.  <br>
	`git clone https://github.com/Novak-Fenocchio/Flutter-auto-update-version.git`
 <br> <br>
 2.  Download libraries: <br>
 `npm install`
  <br> <br>
 3.  Set env var:  <br>
    You need to define your pubspect.yaml's path, of your app.  the var is called "pubspecPath"
<br> <br>
 1.  Run script:  <br>
 `node index.js`
<br> <br>
 ---

## Use in git hook

The main utility use for this script is in a git hook, in my case, in a pre-commit hook. To set this up, you can follow the instructions in this blog post, written by me. 

https://medium.com/@martin_feno/how-to-update-the-number-version-automatically-in-a-flutter-app-265ed5e3eee4

# Phonegap Development Setup

Guide on how to setup a mac osx in order to start developing phonegap applications. I'm using it to build android apps but the same development environment can be used to develop iOS applications also.

### prerequisites:

- NodeJS - [my instruction guide](https://github.com/b-rucel/code-snippets/tree/master/mac.node_setup)
- android SDK ver: [24.3.4](http://dl.google.com/android/android-sdk_r24.3.4-macosx.zip) 




If you want to download other versions: [android sdk](http://developer.android.com/sdk/index.html) * just get the SDK Tools, unless you want to run that IDE.

<br />

Please refer to phonegap's documentation to get the extra help you might need.

[Phonegap Android Guide](http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide)

[Phonegap iOS Guide](http://docs.phonegap.com/en/edge/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)



<br /><br />

set up system path for sdk tools: i use .bash_profiles

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools


install cordova cli tool

    npm install -g cordova
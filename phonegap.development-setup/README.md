# Phonegap Development Setup

Guide on how to setup a mac osx in order to start developing phonegap applications. I'm using it to build android apps but the same development environment can be used to develop iOS applications also.

Please refer to phonegap's documentation to get the extra help you might need.

[Phonegap Android Guide](http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide)

[Phonegap iOS Guide](http://docs.phonegap.com/en/edge/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide)
<br /><br />


### prerequisites:
- NodeJS - [my instruction guide](https://github.com/b-rucel/code-snippets/tree/master/mac.node_setup)
- android SDK ver: [latest SDK](http://developer.android.com/sdk/index.html)

I just use the SDK Tools instead of entire IDE. I'm using
[24.3.4](http://dl.google.com/android/android-sdk_r24.3.4-macosx.zip) at the time of this writing.
<br /><br />

unzip the contents of the file android-sdk_r24.3.4-macosx.zip

open terminal

    cd ~/Desktop/
    mv android-sdk-macosx ~/android



set up system path for sdk tools: i use .bash_profiles

    export PATH=${PATH}:~/android/platforms:~/android/tools



after that I ran the android SDK manager from cli

    ~/android/tools/android


[photo]

install java first

[photo]

SDK manager window opens then you can choose which android version SDK tools you want to download

[photo]


make sure java and ant are executable


install apache ant

    brew install ant

[photo]


install cordova cli tool

    npm install -g cordova


[photo]




 

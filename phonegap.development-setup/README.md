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

![] (01%20-%20android%20SDK.png "android SDK download")
<br /><br />

unzip the contents of the file android-sdk_r24.3.4-macosx.zip

open terminal

    cd ~/Desktop/
    mv android-sdk-macosx ~/android



set up system path for sdk tools: i use .bash_profiles

    export PATH=${PATH}:~/android/platforms:~/android/tools



after that I ran the android SDK manager from cli

    ~/android/tools/android


More requirements to install when I ran android: 
![] (https://raw.githubusercontent.com/b-rucel/code-snippets/master/phonegap.development-setup/02%20-%20run%20android%20SDK.png "Java SE 6 runtime needed")



install java first



SDK manager window opens then you can choose which android version SDK tools you want to download

![] (03%20-%20choose%20android%20version.png "android SDK manager")

![] (04%20-%20install%20android%20.png "android SDK runtime")

![] (05%20-%20install%20results.png "android SDK install results")


make sure java and ant are executable


install apache ant

    brew install ant

![] (06%20-%20brew%20install%20ant.png "android SDK runtime")



install cordova cli tool

    npm install -g cordova


[photo]




 

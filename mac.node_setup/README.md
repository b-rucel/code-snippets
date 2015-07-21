# Installing Node.js
<br />

#### Introduction

Installing and managing node.js can be done easily if you use nvm, which stands for _node version manager_. Sometimes you will run across node apps that will require different version numbers to run correctly. Easy way to manage different active versions of node in a single system is to use nvm. In this guide, we'll show you how to get started with NVM and Node.js on a Mac OSX.

Using nvm, you can install multiple, self-contained versions of Node.js which will allow you to control your environment easier. It will give you on-demand access to the newest versions of Node.js, but will also allow you to target previous releases that your app may depend on.

#### Installing NVM
> pre-requisites
* Xcode Command Line Tools
* git

Installing nvm is super simple, just download and execute the install script provided via cURL or wget: `you might want to check the version number`

    curl https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash

You can check the installation with:

    which node
    node --version
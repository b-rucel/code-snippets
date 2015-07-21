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

Terminal Output:

![Installing NVM](https://github.com/b-rucel/code-snippets/blob/master/mac.node_setup/install.nvm.png "Installing NVM")

    admins-air-2:code-snippets bruce$ 
    admins-air-2:code-snippets bruce$ curl https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100  7149  100  7149    0     0   7478      0 --:--:-- --:--:-- --:--:--  7478
    => Downloading nvm from git to '/Users/bruce/.nvm'
    => Cloning into '/Users/bruce/.nvm'...
    remote: Counting objects: 3796, done.
    remote: Compressing objects: 100% (9/9), done.
    remote: Total 3796 (delta 2), reused 0 (delta 0), pack-reused 3787
    Receiving objects: 100% (3796/3796), 882.61 KiB | 690.00 KiB/s, done.
    Resolving deltas: 100% (2194/2194), done.
    Checking connectivity... done.
    Note: checking out 'v0.11.1'.
     
    You are in 'detached HEAD' state. You can look around, make experimental
    changes and commit them, and you can discard any commits you make in this
    state without impacting any branches by performing another checkout.
     
    If you want to create a new branch to retain commits you create, you may
    do so (now or later) by using -b with the checkout command again. Example:
     
      git checkout -b new_branch_name
     
    HEAD is now at 7a423b7... v0.11.1
    Deleted branch master (was f2d31b0).

    => Appending source string to /Users/bruce/.bashrc
    => Close and reopen your terminal to start using nvm


You can check the installation with:

    nvm
    
output

![NVM Command](https://github.com/b-rucel/code-snippets/blob/master/mac.node_setup/nvm.png "NVM Command")

    Node Version Manager

    Usage:
      nvm help                              Show this message
      nvm --version                         Print out the latest released version of nvm
      nvm install [-s] <version>            Download and install a <version>, [-s] from source. Uses .nvmrc if available
      nvm uninstall <version>               Uninstall a version
      nvm use <version>                     Modify PATH to use <version>. Uses .nvmrc if available
      nvm run <version> [<args>]            Run <version> with <args> as arguments. Uses .nvmrc if available for <version>
      nvm current                           Display currently activated version
      nvm ls                                List installed versions
      nvm ls <version>                      List versions matching a given description
      nvm ls-remote                         List remote versions available for install
      nvm deactivate                        Undo effects of `nvm` on current shell
      nvm alias [<pattern>]                 Show all aliases beginning with <pattern>
      nvm alias <name> <version>            Set an alias named <name> pointing to <version>
      nvm unalias <name>                    Deletes the alias named <name>
      nvm reinstall-packages <version>      Reinstall global `npm` packages contained in <version> to current version
      nvm unload                            Unload `nvm` from shell
      nvm which [<version>]                 Display path to installed node version. Uses .nvmrc if available

    Example:
      nvm install v0.10.32                  Install a specific version number
      nvm use 0.10                          Use the latest available 0.10.x release
      nvm run 0.10.32 app.js                Run app.js using node v0.10.32
      nvm exec 0.10.32 node app.js          Run `node app.js` with the PATH pointing to node v0.10.32
      nvm alias default 0.10.32             Set default node version on a shell

    Note:
      to remove, delete, or uninstall nvm - just remove ~/.nvm, ~/.npm, and ~/.bower folders
    
    
#### Installing Node.js

![Installing Node.js](https://github.com/b-rucel/code-snippets/blob/master/mac.node_setup/install.node.png "Installing Node.js")

    admins-air-2:code-snippets bruce$ nvm install v0.10.0
    ######################################################################## 100.0%
    Now using node v0.10.0 (npm v1.2.14)

    admins-air-2:code-snippets bruce$ which node
    /Users/bruce/.nvm/v0.10.0/bin/node

    admins-air-2:code-snippets bruce$ node --version
    v0.10.0

    admins-air-2:code-snippets bruce$ nvm install v0.12.2
    ######################################################################## 100.0%
    Now using node v0.12.2 (npm v2.7.4)

    admins-air-2:code-snippets bruce$ which node
    /Users/bruce/.nvm/versions/node/v0.12.2/bin/node

    admins-air-2:code-snippets bruce$ node --version
    v0.12.2


#### Switching Versions

    admins-air-2:code-snippets bruce$ nvm use 0.10.0
    Now using node v0.10.0 (npm v1.2.14)

    admins-air-2:code-snippets bruce$ nvm use 0.12.2
    Now using node v0.12.2 (npm v2.7.4)    


Now you can freely switch between node versions. ^^


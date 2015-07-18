# Setting up node the proper way (I think so at least) ...

> Using NVM

It saves a lot of hassels imho, by using nvm to have the freedom to choose between version numbers and settings to try out experimental stuff.

You must download nvm first ..

    curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash

    node --version



    brucelim: ~ $ curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash
      % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                     Dload  Upload   Total   Spent    Left  Speed
    100  3329  100  3329    0     0  10316      0 --:--:-- --:--:-- --:--:-- 10338
    => Downloading nvm from git to '/home/brucelim/.nvm'
    => Cloning into '/home/brucelim/.nvm'...
    remote: Counting objects: 3761, done.                                                                                                                                                                     
    remote: Total 3761 (delta 0), reused 0 (delta 0), pack-reused 3761                                                                                                                                        
    Receiving objects: 100% (3761/3761), 866.28 KiB | 1.03 MiB/s, done.
    Resolving deltas: 100% (2173/2173), done.
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
     
    => Appending source string to /home/brucelim/.profile
    => Close and reopen your terminal to start using nvm



    brucelim: ~ $ nvm install v0.12.2
    ######################################################################## 100.0%
    Now using node v0.12.2


    admins-air-2:code-snippets bruce$ 
    admins-air-2:code-snippets bruce$ node --version
    v0.12.2
    admins-air-2:code-snippets bruce$ nvm install v0.8.16
    ######################################################################## 100.0%
    Now using node v0.8.16 (npm v1.1.69)




# switching versions

    admins-air-2:code-snippets bruce$ nvm use v0.12.2
    Now using node v0.12.2 (npm v2.7.4)
    


# checking node install path
    
    admins-air-2:code-snippets bruce$ which node
    /Users/bruce/.nvm/versions/node/v0.12.2/bin/node



Now you can freely switch between node versions. ^^











    




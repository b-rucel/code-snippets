# Installing Brew on Mac

Homebrew — The missing package manager for OS X.

  - MAC OS X 10.9.5 Maverick
  - Ruby

    ruby -v
    ruby 2.0.0p481 (2014-05-08 revision 45883) [universal.x86_64-darwin13]

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    ==> This script will install:
/usr/local/bin/brew
/usr/local/Library/...
/usr/local/share/man/man1/brew.1
==> The following directories will be made group writable:
/usr/local/.
==> The following directories will have their group set to admin:
/usr/local/.

Press RETURN to continue or any other key to abort
==> /usr/bin/sudo /bin/chmod g+rwx /usr/local/.

WARNING: Improper use of the sudo command could lead to data loss
or the deletion of important system files. Please double-check your
typing when using sudo. Type "man sudo" for more information.

To proceed, enter your password, or type Ctrl-C to abort.

Password:
==> /usr/bin/sudo /usr/bin/chgrp admin /usr/local/.
==> /usr/bin/sudo /bin/mkdir /Library/Caches/Homebrew
==> /usr/bin/sudo /bin/chmod g+rwx /Library/Caches/Homebrew
==> Downloading and installing Homebrew...
remote: Counting objects: 3662, done.
remote: Compressing objects: 100% (3494/3494), done.
remote: Total 3662 (delta 36), reused 652 (delta 28), pack-reused 0
Receiving objects: 100% (3662/3662), 2.97 MiB | 1.92 MiB/s, done.
Resolving deltas: 100% (36/36), done.
From https://github.com/Homebrew/homebrew
 * [new branch]      master     -> origin/master
HEAD is now at fd73dac hayai: add 0.1.0 bottle.
==> Installation successful!
==> Next steps

Run `brew help` to get started
admins-air-2:code-snippets bruce$ brew
Example usage:
  brew [info | home | options ] [FORMULA...]
  brew install FORMULA...
  brew uninstall FORMULA...
  brew search [foo]
  brew list [FORMULA...]
  brew update
  brew upgrade [--all | FORMULA...]
  brew pin/unpin [FORMULA...]

Troubleshooting:
  brew doctor
  brew install -vd FORMULA
  brew [--env | config]

Brewing:
  brew create [URL [--no-fetch]]
  brew edit [FORMULA...]
  https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Formula-Cookbook.md

Further help:
  man brew
  brew home
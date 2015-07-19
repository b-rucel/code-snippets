# Bash snippets

<br />
> __count number of files in directory__

    ls -l | grep -v ^l | wc -l

<br />
> __find info about url__

    dig brucelim.com
    host brucelim.com

<br />
> __generate random password (ubuntu)__

    cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 10 | head -n 4

<br />
> __generate random password (osx)__

    cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9-_!@#$%^&*()_+{}|:<>?=' | fold -w 10 | head -n 4

<br />
> __special chars__

    'a-zA-Z0-9-_!@#$%^&*()_+{}|:<>?='
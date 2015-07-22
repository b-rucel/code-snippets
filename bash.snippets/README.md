# Bash snippets

<br /><br />
> __count number of files in directory__

    ls -l | grep -v ^l | wc -l


<br /><br />
> __find info about url__

    dig brucelim.com
    host brucelim.com


<br /><br />
> __generate random password (ubuntu)__

    cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 10 | head -n 4


<br /><br />
> __generate random password (osx)__

    cat /dev/urandom | LC_CTYPE=C tr -dc 'a-zA-Z0-9-_!@#$%^&*()_+{}|:<>?=' | fold -w 10 | head -n 4


<br /><br />
> __special chars__

    'a-zA-Z0-9-_!@#$%^&*()_+{}|:<>?='


<br /><br />
> __find files modified last 24 hours__
    
    find . -mtime 0


<br /><br />
> __tar result from find__

    tar -czf `date -I`.tar.gz $(find . -name *.h)


<br /><br />
> __tar git modified files__

    tar cvzf filename.tar.gz --files-from <(git ls-files -m)


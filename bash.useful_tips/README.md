# Bash tips and tricks

<br />
> __help and man command__

Two most useful commands if you want to start learning about bash and other commands

    help ls
    man ls
    info ls



<br />
> __Command Substitution__

To use command substitution, enclose any command that generates output to standard output inside parentheses and precede the opening parenthesis with a dollar sign, $(command). Command substitution is useful when assigning a value to a variable. 

Alternative to piping output you can do command subsititution.


    $ date +%d-%b-%Y
    12-Mar-2004

    $ today=$(date +%d-%b-%Y)

    $ echo $today
    12-Mar-2004



<br />
> __rm commands__


delete all the files except .c and .py files.

    rm !(*.c|*.py)




<br />
> _sed_

    sed -i '1s/^/line to insert\n/' path/to/file/you/want/to/change.txt




<br />

> _controls_

* CTRL+a jump to the beginning of line
* CTRL+e jump to to the end of line
* CTRL+w will delete a word backwards
* CTRL+z pause a command
* CTRL+l clear the screen
* CTRL+d exit current shell
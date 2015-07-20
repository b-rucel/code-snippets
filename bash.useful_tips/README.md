Bash tips




Command Substitution

To use command substitution, enclose any command that generates output to standard output inside parentheses and precede the opening parenthesis with a dollar sign, $(command). Command substitution is useful when assigning a value to a variable. 

Alternative to piping output you can do command subsititution.


$ date +%d-%b-%Y
12-Mar-2004

$ today=$(date +%d-%b-%Y)

$ echo $today
12-Mar-2004
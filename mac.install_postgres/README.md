> use homebrew to install postgres

    brew install postgres


> starting postgres server
> 
> start at login

    ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents


> to just start

    postgres -D /usr/local/var/postgres

> to connect to server

    /usr/local/bin/psql postgres

Use that for right now, we will fix it later

    CREATE USER dbuser WITH PASSWORD 'dbpass';
    CREATE DATABASE example;

— grant on databases
    GRANT ALL PRIVILEGES ON DATABASE example to dbuser;

— grant on tables
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dbuser;

    \connect example;

    \dt


    admins-air-2:code-snippets bruce$ /usr/local/bin/psql postgres
    psql (9.4.4)
    Type "help" for help.

    postgres=# CREATE USER dbuser WITH PASSWORD 'dbpass';
    CREATE ROLE
    postgres=# CREATE DATABASE example;
    CREATE DATABASE
    postgres=# GRANT ALL PRIVILEGES ON DATABASE example to dbuser;
    GRANT
    postgres=# GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dbuser;
    GRANT
    postgres=# \connect example;
    You are now connected to database "example" as user "bruce".
    example=# \dt
    No relations found.
    example=# 



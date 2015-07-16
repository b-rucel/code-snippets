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
    GRANT ALL PRIVILEGES ON TABLE example TO dbuser;
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO dbuser;
    ALTER TABLE example OWNER TO dbuser;
[Stack Overflow Example][stackoverflow]

Many to many relationship join returns duplicated data for certain columns.

Use string_agg and json_agg to combine unique data to single rows to remove duplicate columns.

    SELECT
        c.id,
        c.fname,
        c.lname,
        string_agg(p.name, ', ') products,
        json_agg(cp.account_info) product_info
    FROM
        customers c
    INNER JOIN
        customers_products cp
    ON
        c.id = cp.customers_id
    INNER JOIN
        products p
    ON
        p.id = cp.products_id
    GROUP BY
        c.id, c.fname, c.lname
    ORDER BY
        c.id;

[stackoverflow]:http://stackoverflow.com/questions/30514554/postgresql-join-statement-duplicate-row-data-combine-to-single-row
--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: customers; Type: TABLE; Schema: public; Owner: dbuser; Tablespace: 
--

CREATE TABLE customers (
    id integer NOT NULL,
    fname character varying(50),
    lname character varying(50)
);


ALTER TABLE customers OWNER TO dbuser;

--
-- Name: customers_products; Type: TABLE; Schema: public; Owner: dbuser; Tablespace: 
--

CREATE TABLE customers_products (
    id integer NOT NULL,
    customers_id integer,
    products_id integer,
    account_info json
);


ALTER TABLE customers_products OWNER TO dbuser;

--
-- Name: products; Type: TABLE; Schema: public; Owner: dbuser; Tablespace: 
--

CREATE TABLE products (
    id integer,
    name character varying(128)
);


ALTER TABLE products OWNER TO dbuser;

--
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY customers (id, fname, lname) FROM stdin;
1	Thomas	Jefferson
2	Benjamin	Franklin
\.


--
-- Data for Name: customers_products; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY customers_products (id, customers_id, products_id, account_info) FROM stdin;
1	1	1	{"account_number":"000001", "date":"05/28/15"}
2	1	2	{"account_number":"000002", "date":"05/28/15"}
3	2	1	{"account_number":"000003", "date":"05/28/15"}
4	2	3	{"account_number":"000004", "date":"05/28/15"}
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dbuser
--

COPY products (id, name) FROM stdin;
1	checking
2	savings
3	credit card
\.


--
-- PostgreSQL database dump complete
--


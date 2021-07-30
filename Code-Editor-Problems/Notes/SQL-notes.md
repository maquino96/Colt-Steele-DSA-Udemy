SQL - Structured Query Language
-- been around for a long time
-- designed to work with relational databases

// Creating a database

CREATE DATABASE name_of_db;
DROP DATABASE name_of_db;  // notice how each line is ended with a semi-colon

// Making tables

CREATE TABLE table_name(
	property_name type NOT NULL,  // NOT NULL ensures that something is inputted
	property_2_name type, 
);

CREATE TABLE customers (
	id INT NOT NULL AUTO_INCREMENT, // automatically increments id
    firstName VARCHAR(255), // 255 is the max # of characters for this input
    lastName VARCHAR(255), 
    email VARCHAR(255),
    address  VARCHAR(255),
    city VARCHAR(255),
    state  VARCHAR(255),
    zipcode VARCHAR(255),
    PRIMARY KEY(id) // unique value, usually attached to the id
);

// Inserting data

INSERT INTO table ( property1, property2, property3) VALUES (value_for_prop1, value_for_prop2, value_for_prop3)

INSERT INTO customers ( firstName, lastName, email) VALUES (‘Matt’, ‘Aquino’, ‘mattaquino@gmail.com’)

//columns only have to be specified once. Multiple rows can be separated by commas after values and the final row can ends with a semicolon.






// Update a record

UPDATE table
SET column = ‘new_value’
WHERE id = specified_id // if where is not indicated, the entire column’s values will be updated

//Delete a row

DELETE FROM table 
WHERE id = specified_id

// Altering tables

ALTER TABLE name_of_table ADD new_column_name TYPE; e.g. VARCHAR(255), INT

ALTER TABLE name_of_table 

//changing column type
MODIFY COLUMN (Possibly ALTER COLUMN) existing_column_name TYPE; e.g. INT(11)

	//deleting a column
ALTER TABLE name_of_table
DROP COLUMN name_of_column_to_be_deleted;

// Selecting data
	//select all columns
SELECT * FROM name_of_table; // an asterisk is a placeholder for ALL columns
	//select certain columns
SELECT property1, property2, FROM name_of_table;
	//select specific rows
SELECT * FROM name_of_table WHERE unique_selector (e.g. primary_key / id) = value; 
	//sort values of a certain column 
SELECT * FROM name_of_table ORDER BY property; // ASC // DESC 
	//select distinct values in a column
SELECT DISTINCT property FROM name_of_table;

SELECT * FROM table WHERE property < value // special case with integers

// ‘%’ is a wild card and can be considered any string e.g.( %n: ends in ‘n’, %n%: contains n)

NOT LIKE // see LIKE 

SQL Operators


// Indexes
-- only put them on columns that will be searched up consistently

CREATE INDEX name_of_index
ON name_of_table(property);

DROP INDEX name_of_index ON name_of_table;

// Defining Relationships and Foreign Keys
	//adding the 2 tables below, we now have customers, products, and orders
CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
prod_name VARCHAR(255), // 255 is the max # of characters for this input
price INT, 
PRIMARY KEY(id) 
);
CREATE TABLE orders (
	id INT NOT NULL AUTO_INCREMENT, 
    order_number INT,
    product_id INT, // will matchup to the products id
    customer_id INT, // will matchup to the customers id
    order_date DATETIME default CURRENT_TIMESTAMP, // automatically inserts date
    PRIMARY KEY(id), 
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

// prevents corruption of the database 
e.g. If a product is chosen to be deleted but there are rows dependent on that product then the database won’t allow you to delete that product until the rows related to that product have been modified. 

// Joins
Used to combine row from two or more tables based on a common field between them
Types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN

	//Inner Join  -- return all rows where there is at least one match in both tables
SELECT table1.property, table1.property2, table_2.property1, table_2.property2
FROM table1
INNER JOIN table2
ON table1.id = table2.foreign_key
ORDER BY table.property



	//Left Join -- return rows from the left table with the matching rows from the right able
//Right Join is similar with orders and customers properties switched


	//Inner Join with multiple tables




// Aliases
SELECT firstName AS ‘First Name’, lastName AS ‘Last Name’ FROM customers;
	//changes column headers to a more readable format

	//combining two columns 
SELECT CONCAT(firstName, ‘ ‘, lastName) AS ‘Name’, CONCAT(address, ‘ ‘, city, ‘ ‘, state) AS ‘Address’ FROM customers;

	//can also be done for tables

// SQL Aggregate Functions

	//AVG -- returns the average of all rows for the specified column

	//COUNT -- returns the number of rows for the specified column

	//MAX and MIN -- self explanatory
	//SUM -- sum of all rows
	// GROUP BY example
//HAVING
  


	//UCASE and LCASE -- uppercase and lowercase



# Retail-Database-Webapp

Team: Alexander Qiu, Kelly Phalen, Pranav Phadke, Jason Zhang <br /> 
CS3200 Section: 1:35pm - 3:15pm Tuesdays and Fridays

## Problem Statement:
 In the modern era where technology is becoming increasing integrated into our daily lives, many small
business owners do not have the time or resources to invest in learning how to manage such tools. "[A]bout 
twenty percent of business startups fail in the first year. About half succumb to business failure within
five years. By year 10, only about 33% survive" (source1). A large factor that contributes to this failure
is their inability to keep up with the technological demands of today. "According to a survey by AT&T,
75 percent of small business owners are eager to embrace new technology, but 30 percent of them find it
hard to adopt" (source2). This demonstrates that while there is a demand, there are not enough proper 
resources to fulfill this demand of using new technology. Specifically, one issue that business owners
go through is organizational issues regarding product inventory and orders/order history. Additionally,
a business may want to know who they have hired and who their current/past customers are, as well as 
which products they ordered/used. Our Retail Store Database editor aims to solve this issue and promote 
success among small businesses.

source1: https://www.zenbusiness.com/blog/why-small-businesses-fail/ <br />
source2: https://www.electronicsb2b.com/industry-buzz/investing-in-these-technologies-in-2020-is-a-do-or-die-for-small-businesses/

## Solution Statement:
 In recent times, businesses have started to realize that their employees do not have to be on site 
at all times. Our Retail Store Database editor allows employees/managers to access and manually edit 
details about the businesses product logistics. Through our application, one has the ability
to list all users, products, and orders related to the business. They can also create or delete said
users, products, and orders. Furthemore, one can click on an individual listed item to view additional 
attributes regarding the said item. By clicking on an individual item, one has the ability to update
attributes or delete the item as a whole. <br />
 The database our program uses to store all said information is implemented via MySQL. Then, through
the use of the Java Spring framework, it relies on a repository to access data from the MySQL database
and a DAO to read the information from the repository. Finally, it uses React to create a CRUD based
interactive editor for the database.

## User
 Potential use cases for this software: managers, company analysts, and executives for the retail 
company that operate any retail store monitored by this application. We target an audience that 
can make decisions while having access to data of purchases, product stock, and users. This 
especially can be good for small business owners who have limited resources, since there are 
no price barriers in the way and limited technological experience is required to use our application. <br />
 For example, say a manager wanted to contact a set of customers who bought a certain faulty product.
Finding all customers for this recall would be fairly time consuming if done without our application
(for example, using paper book-keeping). Through our application, one could easily find all customers who 
purchased a specific product by querying the product in our application and instantly getting a list 
of customers.

## Domain Objects 
 One domain object we implemented is a User. A user consists of the following attributes: id, first name,
last name, username, password, email, date of birth, and role (customer, manager, or employee). A user
in terms of the problem at hand should have a mapping to the orders they have made. This leads to our second
domain object, an order. An order item consists of the following attributes: id and associated customer id.
A user can have many orders while a single order can only be associated with one user, thus this is a 
one to many relationship from users to orders. Regarding a user's role, in terms of this application's use,
a customer user will be making orders for themself while an employee/manager will be making orders
for the store. Orders are made for specific products, which leads to our last domain object, products. 
A product item consists of the following attributes: id, name, price, and quantity. The store will keep
track of certain products they have in quantity. A customer-user can create an order based off of the products the
store has in inventory, while an employee/manager-user can create an order based off of products the store
needs to restock. Furthermore, there can be many products associated to one order and one order can consist of 
many products. Thus, this is a many-to-many relationship that is refified through a product-orders class,
containing an id, quantity, product id, and order id.

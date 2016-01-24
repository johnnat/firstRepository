// OBJECT OVERVIEW encapsulation, aggregation, inheritance, polymorphism

// EXAMPLE #1 How to create object

var book = new Object();

book.subject = "Perl";
book.author  = "Mohtashim";

document.write("EXAMPLE #1" + "</br>" + "</br>");
document.write("Book subject: " + book.subject + "</br>");
document.write("Book author: " + book.author + "</br>");

// EXAMPLE #2 Object passed to function

function customer(firstName, lastName)
{
	this.firstName = firstName;
	this.lastName = lastName;
}

var newCustomer = new customer("John Nathaniel", "Ong");

document.write("</br>" + "EXAMPLE #2" + "</br></br>");
document.write("First Name: " + newCustomer.firstName + "</br>");
document.write("Last Name: " + newCustomer.lastName + "</br></br>");

// EXAMPLE #3 Defining Object for an Object

function addPrice(amount)
{
	this.price = amount;
}

function book3(title, author)
{
	this.title = title;
	this.author = author;
	this.addPrice = addPrice; // Assign that method as property.
}

var myBook = new book3("Perl", "Mohtashim");
myBook.addPrice(100);

document.write("EXAMPLE #3" + "</br></br>");
document.write("Book title: " + myBook.title + "</br>");
document.write("Book author: " + myBook.author + "</br>");
document.write("Book price: " + myBook.price);

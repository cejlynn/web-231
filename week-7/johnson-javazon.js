/*
========================================== 
    Assignment Name: 7.2 - Javazon
    Author: Caitlynne Johnson
    Date: 12/3/2022
    Description: Script for Javazon
==========================================
*/

/*
; Classes
; ====================================================================================== 
*/

// Product class
class Products {
  constructor(id, description, price, quantity) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.totalValue = this.price * this.quantity; //Multiplication for totalValue
    this.totalValue = this.totalValue.toFixed(2); //totalValue to 2 decimal points
  } 
}

// Services class
class Services {
  constructor(id, description, hourlyRate, min) {
    this.id = id;
    this.description = description;
    this.hourlyRate = hourlyRate.toFixed(2);
    this.min = min;
  }
}

// Employees class
class Employees {
  constructor(id, firstName, lastName, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary.toFixed(2);
  }
}

/*
; Objects from classes
; ====================================================================================== 
*/

// Create new product objects from Products class and assigned to 5 separate variables
const product1 = new Products("9781118008188", "HTML and CSS: Deesign and Build Websites",22.26, 10);
const product2 = new Products("9781491952023", "JavaScript: The Definitive Guide 7/E", 41.33, 7, 289.31);
const product3 = new Products("9781449331818", "Learning JavaScript Design Patterns 1/E", 25.99, 3, 77.79);
const product4 = new Products("978149195441", "Express in Action: Writing, building, and testing Node.js applications 1/E", 34.91, 3, 104.73);
const product5 = new Products("9781491954461", "MongoDB The Definitive Guide", 33.70, 8, 269.60);

// Create new services objects from Services class and assigned to 3 separate variables
const service1 = new Services("100", "Website Design", 150.0001, 25); //Test of hourlyRate.toFixed(2)
const service2 = new Services("101", "DevOps Consulting", 125.00, 50);
const service3 = new Services("102", "Database Design", 125.00, 15);

//Output test - expected output 150.00
console.log("Test hourlyRate.toFixed(2) = " + service1.hourlyRate);

// create new employees objects from Employees class and assigned to 5 separate variables
const employee1 = new Employees("1007", "Beethoven", "Ludwig", 13.99);
const employee2 = new Employees("1008", "Bach", "Johann", 22.30);
const employee3 = new Employees("1009", "Mozart", "Wolfgang", 19.50);
const employee4 = new Employees("1010", "Brahms", "Johannes", 12.00);
const employee5 = new Employees("1011", "Haydn", "Joseph", 32.50);

/*
; Obj literals for table header
; ====================================================================================== 
*/

// Obj literal for products table header
const productHeader = {
    id: "Product ID",
    description: "Description",
    price: "Price",
    quantity: "Quantity",
    totalValue: "Total Value"
}

// Obj literal for services table header
const serviceHeader = {
    id: "Service ID",
    description: "Description",
    hourlyRate: "Hourly Rate",
    min: "Minimum Billable hours"
}

// Obj literal for employees table header
const employeeHeader = {
    id: "Employee ID",
    firstName: "First Name",
    lastName: "Last Name",
    salary: "Salary"
}

/*
; Variables declared
; ====================================================================================== 
*/

// Bind variables to divs
let products = document.getElementById("products");
let services = document.getElementById("services");
let employees = document.getElementById("employees");

/*
; Styles for display
; ====================================================================================== 
*/

// Change initial value to display none for divs, products, services, employees
products.style.display = "none";
services.style.display = "none";
employees.style.display = "none";


/*
; Button
; ====================================================================================== 
*/

// Register onclick event
document.getElementById("btnDisplayListing").onclick = function() {

  // Capture inputted value from txtMySelectList id & assign to variable choice
  let choice = document.getElementById("txtMySelectList").value;


/*
; Product Table
; ====================================================================================== 
*/

  // Bind obj literal productHeader to products table header
  // Note: id, description, price, quantity
  document.getElementById("txtProductIDProductsHeader").innerHTML = productHeader.id;
  document.getElementById("txtDescriptionProductsHeader").innerHTML = productHeader.description;
  document.getElementById("txtPriceProductsHeader").innerHTML = productHeader.price;
  document.getElementById("txtQuantityProductsHeader").innerHTML = productHeader.quantity;
  document.getElementById("txtTotalValueProductsHeader").innerHTML = productHeader.totalValue;

  // Bind product objects to product table
  document.getElementById("txtProductIDProducts1").innerHTML = product1.id;
  document.getElementById("txtDescriptionProducts1").innerHTML = product1.description;
  document.getElementById("txtPriceProducts1").innerHTML = product1.price;
  document.getElementById("txtQuantityProducts1").innerHTML = product1.quantity;
  document.getElementById("txtTotalValueProducts1").innerHTML = product1.totalValue;

  // Output test - expected output 222.60
  console.log("Test totalValue = quantiy * price & totalValue.toFixed(2) = " + product1.totalValue); 

  document.getElementById("txtProductIDProducts2").innerHTML = product2.id;
  document.getElementById("txtDescriptionProducts2").innerHTML = product2.description;
  document.getElementById("txtPriceProducts2").innerHTML = product2.price;
  document.getElementById("txtQuantityProducts2").innerHTML = product2.quantity;
  document.getElementById("txtTotalValueProducts2").innerHTML = product2.totalValue;

  document.getElementById("txtProductIDProducts3").innerHTML = product3.id;
  document.getElementById("txtDescriptionProducts3").innerHTML = product3.description;
  document.getElementById("txtPriceProducts3").innerHTML = product3.price;
  document.getElementById("txtQuantityProducts3").innerHTML = product3.quantity;
  document.getElementById("txtTotalValueProducts3").innerHTML = product3.totalValue;

  document.getElementById("txtProductIDProducts4").innerHTML = product4.id;
  document.getElementById("txtDescriptionProducts4").innerHTML = product4.description;
  document.getElementById("txtPriceProducts4").innerHTML = product4.price;
  document.getElementById("txtQuantityProducts4").innerHTML = product4.quantity;
  document.getElementById("txtTotalValueProducts4").innerHTML = product4.totalValue;

  document.getElementById("txtProductIDProducts5").innerHTML = product5.id;
  document.getElementById("txtDescriptionProducts5").innerHTML = product5.description;
  document.getElementById("txtPriceProducts5").innerHTML = product5.price;
  document.getElementById("txtQuantityProducts5").innerHTML = product5.quantity;
  document.getElementById("txtTotalValueProducts5").innerHTML = product5.totalValue;

/*
; Service Table
; ====================================================================================== 
*/  

  // Bind obj literal serviceHeader to employees table header
  // Note: id, description, hourlyRate, min
  document.getElementById("txtServiceIDServicesHeader").innerHTML = serviceHeader.id;
  document.getElementById("txtDescriptionServicesHeader").innerHTML = serviceHeader.description;
  document.getElementById("txtHourlyRateServicesHeader").innerHTML = serviceHeader.hourlyRate;
  document.getElementById("txtMinServicesHeader").innerHTML = serviceHeader.min;

  // Bind services objects to services table
  document.getElementById("txtServiceIDServices1").innerHTML = service1.id;
  document.getElementById("txtDescriptionServices1").innerHTML = service1.description;
  document.getElementById("txtHourlyRateServices1").innerHTML = service1.hourlyRate;
  document.getElementById("txtMinServices1").innerHTML = service1.min;

  document.getElementById("txtServiceIDServices2").innerHTML = service2.id;
  document.getElementById("txtDescriptionServices2").innerHTML = service2.description;
  document.getElementById("txtHourlyRateServices2").innerHTML = service2.hourlyRate;
  document.getElementById("txtMinServices2").innerHTML = service2.min;

  document.getElementById("txtServiceIDServices3").innerHTML = service3.id;
  document.getElementById("txtDescriptionServices3").innerHTML = service3.description;
  document.getElementById("txtHourlyRateServices3").innerHTML = service3.hourlyRate;
  document.getElementById("txtMinServices3").innerHTML = service3.min;

/*
; Employee Table
; ====================================================================================== 
*/

  // Bind employee obj literal to employees table header
  // Note: id, firstName, lastName, salary
  document.getElementById("txtEmployeeIDEmployeesHeader").innerHTML = employeeHeader.id;
  document.getElementById("txtLastNameEmployeesHeader").innerHTML = employeeHeader.firstName;
  document.getElementById("txtFirstNameEmployeesHeader").innerHTML = employeeHeader.lastName;
  document.getElementById("txtSalaryEmployeesHeader").innerHTML = employeeHeader.salary;

  // Bind employees objects to employees table
  document.getElementById("txtEmployeeIDEmployees1").innerHTML = employee1.id;
  document.getElementById("txtLastNameEmployees1").innerHTML = employee1.firstName;
  document.getElementById("txtFirstNameEmployees1").innerHTML = employee1.lastName;
  document.getElementById("txtSalaryEmployees1").innerHTML = employee1.salary;

  document.getElementById("txtEmployeeIDEmployees2").innerHTML = employee2.id;
  document.getElementById("txtLastNameEmployees2").innerHTML = employee2.firstName;
  document.getElementById("txtFirstNameEmployees2").innerHTML = employee2.lastName;
  document.getElementById("txtSalaryEmployees2").innerHTML = employee2.salary;

  document.getElementById("txtEmployeeIDEmployees3").innerHTML = employee3.id;
  document.getElementById("txtLastNameEmployees3").innerHTML = employee3.firstName;
  document.getElementById("txtFirstNameEmployees3").innerHTML = employee3.lastName;
  document.getElementById("txtSalaryEmployees3").innerHTML = employee3.salary;

  document.getElementById("txtEmployeeIDEmployees4").innerHTML = employee4.id;
  document.getElementById("txtLastNameEmployees4").innerHTML = employee4.firstName;
  document.getElementById("txtFirstNameEmployees4").innerHTML = employee4.lastName;
  document.getElementById("txtSalaryEmployees4").innerHTML = employee4.salary;

  document.getElementById("txtEmployeeIDEmployees5").innerHTML = employee5.id;
  document.getElementById("txtLastNameEmployees5").innerHTML = employee5.firstName;
  document.getElementById("txtFirstNameEmployees5").innerHTML = employee5.lastName;
  document.getElementById("txtSalaryEmployees5").innerHTML = employee5.salary;


/*
; Switch case
; ====================================================================================== 
*/

  // Switch case to choose between divs from option select against string values
  switch(choice) {

    case "products": // Expected output products div

      // Change display to block for products div
      products.style.display = "block";
      services.style.display = "none";
      employees.style.display = "none";

      console.log("switch case - products selected"); //Output test
      
      break;

    case "services": // Expected output services div

      // Change display to block for services div
      products.style.display = "none";
      services.style.display = "block";
      employees.style.display = "none";

      console.log("switch case - service selected"); //Output test

      break;

    case "employees": // Expected output employees div

      // Change display to block for employees div
      products.style.display = "none";
      services.style.display = "none";
      employees.style.display = "block";

      console.log("switch case - employees selected"); //Output test

      break;

    default:

      // All divs no display if select is selected
      products.style.display = "none";
      services.style.display = "none";
      employees.style.display = "none";

      console.log("no value selected"); //Output test for select option

  }
}
# 0x00. ES6 Basics

This is a project that covers the fundamentals of ES6 syntax and concepts, including let and const, template literals, arrow functions, default parameters, and more.

## Tasks
### 0. Const or let?
- Modify
	* function <font color="red">taskFirst</font> to instantiate variables using **const**
	* function <font color="red">tasNext</font>  to instantiate variables using **let**

### 1. Block Scope
- Given what you’ve read about **var** and hoisting, modify the variables inside the function <font color="red">taskBlock</font>  so that the variables aren’t overwritten inside the conditional block.

### 2. Arrow functions
- Rewrite the following standard function to use ES6’s arrow syntax of the function **add** (it will be an anonymous function after)

### 3. Parameter defaults
- Condense the internals of the following function to 1 line - without changing the name of each function/variable.

### 4. Rest parameter syntax for functions
- Modify the following function to return the number of arguments passed to it using the rest parameter syntax

### 5. The wonders of spread syntax
- Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

### 6. Take advantage of template literals
- Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

### 7. Object property value shorthand syntax
- Notice how the keys and the variable names are the same?
- Modify the following function’s **budget** object to simply use the keyname instead.

### 8. No need to create empty objects before adding in properties
- Rewrite the <font color="red">getBudgetForCurrentYear</font> function to use ES6 computed property names on the **budget** object

### 9. ES6 method properties
- Rewrite <font color="red">getFullBudgetObject</font> to use ES6 method properties in the **fullBudget** object

### 10. For...of Loops
- Rewrite the function <font color="red">appendToEachArrayValue</font> to use ES6’s **for...of** operator. And don’t forget that **var** is not ES6-friendly.

## 11. Iterator
- Write a function named <font color="red">createEmployeesObject</font> that will receive two arguments:
	* **departmentName** (String)
	* **employees** (Array of Strings)

### 12. Let's create a report object
- Write a function named <font color="red">createReportObject</font> whose parameter, **employeesList**, is the return value of the previous function <font color="red">createEmployeesObject</font>.

### 13. Iterating through report objects
- Write a function named <font color="red">createIteratorObject</font>, that will take into argument a report Object created with the previous function <font color="red">createReportObject</font>.

### 14. Iterate through object
- Finally, write a function named <font color="red">iterateThroughObject</font>. The function’s parameter <font color="red">reportWithIterator</font> is the return value from <font color="red">createIteratorObject</font>.


// Create an empty object user
let user = {};
// add property name with name = john
let user = { name: "John" };
// add property name with surname = smith
user.surname = "Smith";
// change the value of name to pete
user.name = "pete";
// remove the property name from object
delete user.name;
// the above line deletes user.name


// sum all salaries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

alert(salaries.John + salaries.Ann + salaries.Pete);


// add comments to the lines of customers per hour and cookies per hour.
// Use the same code in about me to code totalDailyCookies. Ex: you have this totalDailyCookies.

let seattle = {
    maxCustomers:65,
    minCustomers:23,
    avgeCookie: 6.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calcustomersPerHour: function(){
        // calculate customers
        for(i=0; i < hours.length; i++){ // We are iterating through the calculation for each number.
       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1 ) * this.minCustomers)); // This helps us
    
    }
    console.log(this.customersPerHour);
    },

    calCookiesPerHour: function(){
        // calculate cookies per hour
        // let result = this.customersPerHour[0]  * this.avgeCookie
        // console.log(result);

        for(i=0; i < this.customersPerHour.length; i++){ 

            this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgeCookie));
        }
        console.log(this.cookiesPerHour);
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));
const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

let ul = document.createElement('ul'); //unordered list

function render(hours) {
// rendering the hours 
for(i=0; i < hours.length; i++){
    // create a list element
    let li = document.createElement('li'); // crate a li item

    li.textContent = `${hours[i]} cookies go here`;
    

    // append list to ul
    ul.append(li);

}
cookieContainer.append(ul); // adding our ul to our div
}

render(hours); //call our function!

seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
seattle.calcustomersPerHour();
seattle.calCookiesPerHour();



let totalDailyCookies = this.customersPerHour + this.CookiesPerHour;

alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);



// add comments to the lines of customers per hour and cookies per hour.
// Use the same code in about me to code totalDailyCookies. Ex: you have this totalDailyCookies.

let tokyo = {
    maxCustomers:3,
    minCustomers:24,
    avgeCookie: 1.2,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calcustomersPerHour: function(){
        // calculate customers
        for(i=0; i < hours.length; i++){ // We are iterating through the calculation for each number.
       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1 ) * this.minCustomers)); // This helps us
    
    }
    console.log(this.customersPerHour);
    },

    calCookiesPerHour: function(){
        // calculate cookies per hour
        // let result = this.customersPerHour[0]  * this.avgeCookie
        // console.log(result);

        for(i=0; i < this.customersPerHour.length; i++){ 

            this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgeCookie));
        }
        console.log(this.cookiesPerHour);
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));
const hours2 = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieContainer2 = document.getElementById('cookies-sold'); // this is where my div container is

let ul2 = document.createElement('ul'); //unordered list

function render(hours) {
// rendering the hours 
for(i=0; i < hours.length; i++){
    // create a list element
    let li = document.createElement('li'); // crate a li item

    li.textContent = `${hours[i]} cookies go here`;
    

    // append list to ul
    ul.append(li);

}
cookieContainer.append(ul); // adding our ul to our div
}

render(hours); //call our function!

seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
seattle.calcustomersPerHour();
seattle.calCookiesPerHour();



let totalDailyCookies2 = this.customersPerHour + this.CookiesPerHour;

alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);



// add comments to the lines of customers per hour and cookies per hour.
// Use the same code in about me to code totalDailyCookies. Ex: you have this totalDailyCookies.

let Dubai = {
    maxCustomers:38,
    minCustomers:11,
    avgeCookie: 3.7,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calcustomersPerHour: function(){
        // calculate customers
        for(i=0; i < hours.length; i++){ // We are iterating through the calculation for each number.
       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1 ) * this.minCustomers)); // This helps us
    
    }
    console.log(this.customersPerHour);
    },

    calCookiesPerHour: function(){
        // calculate cookies per hour
        // let result = this.customersPerHour[0]  * this.avgeCookie
        // console.log(result);

        for(i=0; i < this.customersPerHour.length; i++){ 

            this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgeCookie));
        }
        console.log(this.cookiesPerHour);
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));
const hours3 = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieContainer3 = document.getElementById('cookies-sold'); // this is where my div container is

let ul3 = document.createElement('ul'); //unordered list

function render(hours) {
// rendering the hours 
for(i=0; i < hours.length; i++){
    // create a list element
    let li = document.createElement('li'); // crate a li item

    li.textContent = `${hours[i]} cookies go here`;
    

    // append list to ul
    ul.append(li);

}
cookieContainer.append(ul); // adding our ul to our div
}

render(hours); //call our function!

seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
seattle.calcustomersPerHour();
seattle.calCookiesPerHour();



let totalDailyCookies3 = this.customersPerHour + this.CookiesPerHour;

alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);




// add comments to the lines of customers per hour and cookies per hour.
// Use the same code in about me to code totalDailyCookies. Ex: you have this totalDailyCookies.

let paris = {
    maxCustomers:38,
    minCustomers:20,
    avgeCookie: 2.3,
    cookiesPerHour: [],
    customersPerHour: [],
    totalDailyCookies: 0,

    calcustomersPerHour: function(){
        // calculate customers
        for(i=0; i < hours.length; i++){ // We are iterating through the calculation for each number.
       this.customersPerHour.push(Math.floor(Math.random(this.minCustomers - this.maxCustomers + 1 ) * this.minCustomers)); // This helps us
    
    }
    console.log(this.customersPerHour);
    },

    calCookiesPerHour: function(){
        // calculate cookies per hour
        // let result = this.customersPerHour[0]  * this.avgeCookie
        // console.log(result);

        for(i=0; i < this.customersPerHour.length; i++){ 

            this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgeCookie));
        }
        console.log(this.cookiesPerHour);
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));
const hours4 = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let cookieContainer4 = document.getElementById('cookies-sold'); // this is where my div container is

let ul4 = document.createElement('ul'); //unordered list

function render(hours) {
// rendering the hours 
for(i=0; i < hours.length; i++){
    // create a list element
    let li = document.createElement('li'); // crate a li item

    li.textContent = `${hours[i]} cookies go here`;
    

    // append list to ul
    ul.append(li);

}
cookieContainer.append(ul); // adding our ul to our div
}

render(hours); //call our function!

seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
seattle.calcustomersPerHour();
seattle.calCookiesPerHour();



let totalDailyCookies4 = this.customersPerHour + this.CookiesPerHour;

alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);

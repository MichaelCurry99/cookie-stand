  // add comments to the lines of customers per hour and cookies per hour.
// Use the same code in about me to code totalDailyCookies. Ex: you have this totalDailyCookies.

const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; //hours set here

let seattle = {
    cityName: 'Seattle',
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

// render(hours); //call our function!

// seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
seattle.calcustomersPerHour();
seattle.calCookiesPerHour();




// alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);


let tokyo = {
    cityName: 'Tokyo',
    maxCustomers:24,
    minCustomers:3,
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

// let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is


// render(hours); //call our function!

// seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
tokyo.calcustomersPerHour();
tokyo.calCookiesPerHour();



// let totalDailyCookies = this.customersPerHour + this.CookiesPerHour;

// alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);



let dubai = {
    cityName: 'Dubai',
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


        for(i=0; i < this.customersPerHour.length; i++){ 

            this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgeCookie));
        }
        console.log(this.cookiesPerHour);
    },

}


// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));

// let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is





// render(hours); //call our function!

// seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
dubai.calcustomersPerHour();
dubai.calCookiesPerHour();

let paris = {
    cityName4: 'Paris',
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

// let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is




paris.calcustomersPerHour();
paris.calCookiesPerHour();


// seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);


let lima = {
    cityName: 'Lima',
    maxCustomers:16,
    minCustomers:2,
    avgeCookie: 4.6,
    cookiesPerHour: [], // this is where the code is stored
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
// console.log(lima.cookiesPerHour);

        }
        
    },

}
lima.calcustomersPerHour();
lima.calCookiesPerHour();

// console.log(Math.random(seattle.maxCustomers * seattle.minCustomers));

// let cookieContainer = document.getElementById('cookies-sold'); // this is where my div container is

function render(hours) {
     // this is where my div container is
    // let ul = document.createElement('ul');
     //unordered list
    // rendering the hours 
let cookieContainer = document.getElementById('table-element');

for(i=0; i < hours.length; i++){
    // create a list element
    let th = document.createElement('th'); // create a li item

    th.textContent = `${hours[i]}`;
    

    // append list to ul
    cookieContainer.append(th);

}

// renderCookieData() DO NOT CALL A FUNCTION BEFORE IT IS MADE
function renderCookieData(cookiedata){
    // We need the reference to our table element
 let cookieContainer = document.getElementById('table-element'); // table element is stored here
    // We need to create a table row element
let tr = document.createElement('tr');
    // We need to create a table data element
    // We need to loop through our cookie data
for(i=0; i < cookiedata.length; i++){  // helps to iterate the data in cookie data
    // We need to add the cookie data to our td element
let td = document.createElement('td');

    td.textContent = `${cookiedata[i]}`; //makes text show on browser NOT RENDERED YET

    // We need to attach our td element to our tr element
    

    // We need to attach our tr element to our cookie container element
    tr.append(td); // attaching towards the table data ('td') to table row ('tr')

}
    cookieContainer.append(tr); // attaching towards the cookiedata to table row ('tr')

}


renderCookieData(seattle.cookiesPerHour);
renderCookieData(tokyo.cookiesPerHour);
renderCookieData(dubai.cookiesPerHour);
renderCookieData(paris.cookiesPerHour);

renderCookieData(lima.cookiesPerHour);

// call our renderCookieData function!

//let h2 = document.createElement('h5');
//h2.textContent = this.cityName =`${'Lima'}`;
//cookieContainer.append(h2);
//cookieContainer.append(ul); // adding our ul to our div
}

// render(hours); //call our function!

// seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
render(hours); //call our function!

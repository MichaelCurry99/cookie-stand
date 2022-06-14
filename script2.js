 const hours = ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
let h2 = document.createElement('h2');
h2.textContent = `${tokyo.cityName}`;
cookieContainer.append(h2);
cookieContainer.append(ul); // adding our ul to our div
}

render(hours); //call our function!

// seattle.calcustomersPerHour();

// let result = seattle.customersPerHour[0] * seattle.avgeCookie;
// console.log(result);
tokyo.calcustomersPerHour();
tokyo.calCookiesPerHour();



let totalDailyCookies = this.customersPerHour + this.CookiesPerHour;

alert(`There is a total of ${this.customersPerHour + this.CookiesPerHour}!`);


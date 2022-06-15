'use strict';

// create some factories
   function factory(nameOffactory,location,yrsOfOps){
    
    this.name=nameOfFactory;
    this.loc = location;
    this.yrs = yrsOfOps;

    //methods
    this.description = function(){
        document.write(`
        <div>
        <p>${this.name}</p>
        <p>${this.loc}</p>
        <p>${this.yrs}</p>
          I am trading with ${objectToBePassedIn.name} at ${objectToBePassedIn.loc} for ${objectToBePassedIn.yrs} years
        </div>
        `)
       console.log (this.addMeToTheList())
    }
    this.addToTheList = function(){
        factoryArray.push(this)
    }
   }
   let walMart = new factory('WalmartSuper','Knoxville,CA',2022);
   let walReds = new factory('WalmartSuper','Knoxville,CA',2022);
   let walBang = new factory('WalmartSuper','Knoxville,CA',2022);
   let walSocket = new factory('WalmartSuper','Knoxville,CA',2022);

   walMart.description(walReds)
   walReds.description(walBang)
   walBang.description(walSocket)
   walSocket.description(walMart)
//    let walmartFac = new factory('ul','men','2000')
//    walmartFac.name;
// create different cities

// function that handle communication between these factories
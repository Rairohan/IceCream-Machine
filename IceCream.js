let stocks = {//objects created as stocks
    Fruits:["Strawberry","Grapes","Banana","Apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","Cup","Sticks"],
    Toppings:["Chocolates","Sprinkles"]
}
let is_open = false; // assigned a boolean flag to is_open
let order = (time,work)=>{ // order function that takes in time and work as arguments work is also a callback function
    return new Promise( (resolve,reject)=>{ //returns promise which is either resolve or reject
        if(is_open){//checks is is_open is true if yes executes this
            setTimeout(()=>{
                resolve( work())//Waits for the given time, then executes the work() function and resolves the promise.
            },time)          
        }
        else{ //if is_open is false then
            reject(`Sorry the shop is closed!`)
        }
})
}
order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected `))//calls order passes time here 2000,
//  and the work function( passing of whole function instead of work() enables reusablity)
                                                                 
.then(()=> {return order(1000,()=>console.log("Prodcution has stared"))})//after the first order call then another other call
.then(()=>{ return order(2000,()=>console.log(`${stocks.Fruits[0]} is being cut`))})
.then(()=>{ return order(2000, ()=>console.log(`${stocks.Liquid[0]} was selected`))})
.then(()=>{ return order(1000,()=>console.log("Machine has been started"))})
.then(()=>{return order(2000,()=>console.log(`${stocks.Holder[1]} was taken`))})
.then(()=>{return order(3000,()=>console.log(`${stocks.Toppings[0]} was selected`))})
.then(()=>{return order(2000,()=>console.log(`Ice-cream is being served`))})

.catch(()=>console.log("Customer Left"))//catch for catching the reject error thrown


.finally(()=>console.log("Thank You for visiting!,Day ended Shop is closed"))//finally, executed even if resolve or reject
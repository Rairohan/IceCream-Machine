let stocks = {//objects created as stocks
    Fruits:["Strawberry","Grapes","Banana","Apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","Cup","Sticks"],
    Toppings:["Chocolates","Sprinkles"]
}
let is_open = true;
let order = (time,work)=>{
    return new Promise( (resolve,reject)=>{
        if(is_open){
            setTimeout(()=>{
                resolve( work())
            },time)            
        }
        else{
            reject(console.log(`Sorry the shop is closed!`))
        }
})
}
order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected `))

.then(()=> {return order(1000,()=>console.log("Prodcution has stared"))})
.then(()=>{ return order(2000,()=>console.log(`${stocks.Fruits[0]} is being cut`))})
.then(()=>{ return order(2000, ()=>console.log(`${stocks.Liquid[0]} was selected`))})
.then(()=>{ return order(1000,()=>console.log("Machine has been started"))})
.then(()=>{return order(2000,()=>console.log(`${stocks.Holder[1]} was taken`))})
.then(()=>{return order(3000,()=>console.log(`${stocks.Toppings[0]} was selected`))})
.then(()=>{return order(2000,()=>console.log(`Ice-cream is being served`))})

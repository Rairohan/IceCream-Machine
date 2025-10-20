let stocks = {//objects created as stocks
    Fruits:["Strawberry","Grapes","Banana","Apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","Cup","Sticks"],
    Toppings:["Chocolates","Sprinkles"]
}


let order = (Fruit_name,call_production) => { //arrow fuction which takes arguments
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]}`)//the fruit_name hold a value later used here which acts as a index num
        call_production()//callback
    },2000)//delay of 2 secs
  
}
let production = () => {
   console.log("Production has started!")
}
order(0,production)//calling order fucntion
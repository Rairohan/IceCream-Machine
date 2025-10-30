let stocks = {//objects created as stocks
    Fruits:["Strawberry","Grapes","Banana","Apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","Cup","Sticks"],
    Toppings:["Chocolates","Sprinkles"]
}


let order = (Fruit_num,call_production) => { //arrow fuction which takes arguments
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_num]} has been selected `)//the fruit_num hold a value later used here which acts as a index num
        call_production()//callback
    },2000)//delay of 2 secs
  
}
let production = () => {
    setTimeout(()=>
    {
         console.log("Production has started!")
         setTimeout(()=>{
             console.log("Fruit have been chopped")
             setTimeout(()=>{
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were selected`)
                setTimeout(()=>{
                    console.log(`Machine has started !`)
                    setTimeout(()=>{
                        console.log(`${stocks.Holder[0]} was selected`)
                        setTimeout(()=>{
                            console.log(`${stocks.Toppings[1]} was selected`)   
                            setTimeout(()=>{
                                console.log("Ice Cream was served")
                            },2000)
                        },3000)
                    },2000)
                },1000)
             },1000)
         },2000)          
    },1000)
  
}
order(0,production)//calling order fucntion
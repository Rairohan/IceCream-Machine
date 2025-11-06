let stocks = {
    Fruits:["Strawberry","Grapes","Banana","Apple"],
    Liquid:["Water","Ice"],
    Holder:["Cone","Cup","Sticks"],
    Toppings:["Chocolates","Sprinkles"]
}
 let is_open = true //Boolean flag
function time(ms){ //time function takes in ms which is millisec
    return new Promise((resolve,reject)=>{
        if(is_open) 
        {
            setTimeout(()=>{ 
                resolve() //sends resolve after ms 
            },ms)
        }
        else{
            reject("Shop is close")
        }
    })
}
async function Kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected by the customer `)

        await time(2000)
        console.log(`Cutting the selected fruit`)

        await time(1000)
        console.log(`${stocks.Liquid[0]} was prefered by the customers`)

        await time(1000)
        console.log(`Machine has been started`)

        await time(2000)
        console.log(`${stocks.Holder[2]} was selected`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} was selected`)

        await time(2000)
        console.log(`Ice Cream was served to the customer`)
    }
    catch(error){
        console.log("Customer Left!")
    }
    finally{
        console.log("Day ended, Shop closed")
    }
}
Kitchen()
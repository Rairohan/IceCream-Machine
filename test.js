let closet = {
    Top:["shirt","t-shirt"],
    Bottom:["pants","trouser"],
    Shoes:["sportswear","boots"]
}
let is_available = true
let change = (time,wear)=>{
    return new Promise ((resolve,reject)=>{
        if(is_available){
            setTimeout(()=>{
                resolve(wear())
            },time)
        }
        else{
            reject("Nothing available")
        }
    })
}
change(2000, ()=>console.log(`${closet.Top[1]} was selected`))

.then(()=>{ return change(1000,()=>console.log(`${closet.Bottom[1]} was also selected`))})
.then(()=>{ return change(2000,()=>console.log(`${closet.Shoes[0]} was also selected`))})

.catch(()=>console.log("Closet empty"))
.finally(()=>console.log("Dressed up "))
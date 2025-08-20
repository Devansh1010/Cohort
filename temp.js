// const products = [
//     {name: "laptops", stock: 40},
//     {name: "mobiles", stock: 70},
//     {name: "keyboards", stock: 90},
//     {name: "mouse", stock: 60},
// ]

// const leastStockProduct = products.reduce((LeastProduct, product) =>(product.stock <LeastProduct.stock ? product : LeastProduct))

// // console.log(leastStockProduct)

// console.log(console.createTask("Hi"))

function pataNhi(fn, delay){
    let myId = null
    // console.log(...arguments)
    return (...args) => {
        if(myId === null){
            fn(...args);
            myId = setTimeout(()=>{
                myId = null
            }, delay)
        }
    }
}


const x = pataNhi(()=>{
    console.log("Hi")
}, 20)
x()
x()
x()
x()
x()
x()

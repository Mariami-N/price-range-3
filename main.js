let contaner=document.querySelector(".contaner")
let products = [["Apple", 2.4], ["Banana", 1.8], ["Cherry", 3], ["Peach", 1.2], ["Watermelon", 0.7], ["Melon", 1], ["Plum", 3.2]]
    

    products.forEach((prod) => {

    let box = document.createElement("div");
    box.classList.add("box");
    contaner.appendChild(box);

    let fruit = document.createElement("h1");
    box.appendChild(fruit);
    fruit.innerHTML=prod[0];

    let price = document.createElement("p");
    box.appendChild(price);
    price.innerHTML=prod[1];
    })

    let low = document.querySelector(".low")
    let high = document.querySelector(".high")
    let az = document.querySelector(".az")
    let za = document.querySelector(".za")
    let h2 = document.querySelector("h2")
    let min = document.querySelector(".min")
    let max = document.querySelector(".max")
    let filter=document.querySelector(".filter")
 

low.addEventListener("click", function (){
    products.sort((a, b) => a[1] - b[1]);
    console.log(products)
})
 
high.addEventListener("click", function (){
    products.sort((a,b) => b[1]- a[1]);
    console.log(products)
})

az.addEventListener("click", function (){    
    products.sort();
    console.log(products)
})

za.addEventListener("click", function() {
    products.sort((a, b) => {
        if (a < b) return 1; 
        if (a > b) return -1; 
        return 0; 
    }); 
      console.log(products); 
    });

filter.addEventListener("click", function(){
    // products.filter(function(x){ return x.Price >= 0.7 && x.Price <= 3.2})
    console.log(products)
    
})
     
    


    
    

    
   




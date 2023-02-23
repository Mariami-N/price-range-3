let container=document.querySelector(".container")
let products = [["Apple", 2.4], ["Banana", 1.8], ["Cherry", 3], ["Peach", 1.2], ["Watermelon", 0.7], ["Melon", 1], ["Plum", 3.2]]
    
let min1 = document.querySelector(".min1")
let max1 = document.querySelector(".max1")

let boxes = document.createElement("div")
container.appendChild(boxes)
boxes.classList.add("boxes")


let prod

    products.forEach((prod) => {

    let box = document.createElement("div");
    box.classList.add("box");
    boxes.appendChild(box);

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
    boxes.innerHTML=" "

    products.forEach(prod => {
        let box2 = document.createElement("div");
        box2.classList.add("box2")
        boxes.appendChild(box2);
        box2.innerHTML = `<h1>${prod[0]}</h1><p>${prod[1]}</p>`;
      });
})
 
high.addEventListener("click", function (){
    products.sort((a,b) => b[1]- a[1]);
    console.log(products)
    boxes.innerHTML=" "

    products.forEach(prod => {
        let box2 = document.createElement("div");
        box2.classList.add("box2")
        boxes.appendChild(box2);
        box2.innerHTML = `<h1>${prod[0]}</h1><p>${prod[1]}</p>`;
    })
});

az.addEventListener("click", function (){    
    products.sort();
    console.log(products)
    boxes.innerHTML=" "

    products.forEach(prod => {
        let box2 = document.createElement("div");
        box2.classList.add("box2")
        boxes.appendChild(box2);
        box2.innerHTML = `<h1>${prod[0]}</h1><p>${prod[1]}</p>`;
    })
})

za.addEventListener("click", function() {
    products.sort((a, b) => {
        if (a < b) return 1; 
        if (a > b) return -1; 
        return 0; 
    }); 
    boxes.innerHTML=" "

    products.forEach(prod => {
        let box2 = document.createElement("div");
        box2.classList.add("box2")
        boxes.appendChild(box2);
        box2.innerHTML = `<h1>${prod[0]}</h1><p>${prod[1]}</p>`;
    })
    });
     
                filter.addEventListener("click", function () {
                    boxes.innerHTML = " ";
                let filtered = products.filter((smth) => smth[1] >= min1.value && smth[1]<=max1.value);
                filtered.forEach(prod => {
                    let box2 = document.createElement("div");
                    box2.classList.add("box2");
                    boxes.appendChild(box2);
                    box2.innerHTML = `<h1>${prod[0]}</h1><p>${prod[1]}</p>`;})
                })
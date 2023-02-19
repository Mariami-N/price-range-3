let contaner=document.querySelector(".contaner")
products = [["Apple", 2.4], ["Banana", 1.8], ["Cherry", 3], ["Peach", 1.2], ["Watermelon", 0.7], ["Melon", 1], ["Plum", 3.2]]


// for(let i=1; i<products.length; i++){
//     console.log(products[i]);
//         for(let a=0; a<products[i].length; a++){
//             console.log(products[i][0])
//     }}
    
    products.forEach((fruits) => {
    // console.log(fruits);

    let box = document.createElement("div");
    box.classList.add("box");
    contaner.appendChild(box);

    let fruit = document.createElement("h1");
    box.appendChild(fruit);
    fruit.innerHTML=fruits[0];

    let price = document.createElement("p");
    box.appendChild(price);
    price.innerHTML=fruits[1];
    })
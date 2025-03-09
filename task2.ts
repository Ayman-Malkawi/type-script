// interface person {

//     name: string;

//     age: number;

// };

// const personn: person[] = [
//     { name: "ayman", age: 28 },
//     { name: "bilal", age: 17 },
//     { name: "khaled", age: 25 }

// ]

// for (const key of personn) {
//     // console.log(key)

//     if (key['age'] >= 18) {
//         console.log(key)


//     } else {

//         console.log("Minor")
//     }
  
// }




// taskkkk222

// interface Teacher {
// name :string;
// subjects:string []

// }

// const teach:Teacher[]=[

// {name:"ayman",subjects:["c++,autocad,c#"]},
// { name:"bilal",subjects:["math,php,sql"]}

// ]


// for (let i =0;i<teach.length;i++){

//    if(teach[i].name == 'ayman')
//    {
       
//     for(let x = 0 ; x < teach[i].subjects.length; x++)
//     {
//         console.log(teach[i].subjects[x]);
//     }
//    }
// }


// taskkkkkkkkk33333333

// interface Product {

//     name?:string;
//     price?:number;
//     quantity?:number



// }

// const Products:Product[]=[

// {name:"phone",price:100,quantity:3},

// {name:"labtop",price:150,quantity:7}

// ]
// Products.forEach(Product=> {

// if (Product.quantity>5) {
//     Product.price *=0.85

// } });
// console.log(Products)




// task44444444


 
interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

document.getElementById("product-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const product: Product = {
        name: (document.getElementById("name") as any).value,
        description: (document.getElementById("description") as any).value,
        price: parseFloat((document.getElementById("price") as any).value),
        quantity: parseInt((document.getElementById("quantity") as any).value),
    };

    localStorage.setItem("product", JSON.stringify(product));

    document.getElementById("product-card")!.innerHTML = `
        <div class="card">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <p>Quantity: ${product.quantity}</p>
        </div>
    `;
});
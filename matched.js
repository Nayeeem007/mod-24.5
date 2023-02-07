const numbers = [45, 65, 69, 67, 39];

// for(let i = 0; i <numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//      console.log(number);
// }


const products = [
    {id : 1, name: 'Walton Phone', price : 16000},
    {id : 2, name: 'Walton Phone', price : 22000},
    {id : 3, name: 'iPhone', price : 100000},
    {id : 4, name: 'Lenovo Laptop', price : 82000},
    {id : 5, name: 'Walton Phone', price : 12000},
    {id : 6, name: 'Realme C3 Phone', price : 10000},
    {id : 7, name: 'Realme phone', price : 21800},
    {id : 81, name: 'HP phone', price : 47000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products , 'phone');
console.log(result);
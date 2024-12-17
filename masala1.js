function sortingProducts(arr){
    // here a and b actual objects 
    return arr.sort((a, b) => a.price - b.price);
}
drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}, 
    {name: "apple", price: 20}
  ]

  console.log(sortingProducts(drinks));
  

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


function getUniquePrducts(){
    ans = Object.values(listOfProducts.reduce(function(r, e) {
   var key = e.productName 
   if (!r[key]) 
     r[key] = e;
   else {
     r[key].quantity += e.quantity;
    
   }
   
   return r;
 }, {}))
 
 return ans
 }
 
 console.log(getUniquePrducts())

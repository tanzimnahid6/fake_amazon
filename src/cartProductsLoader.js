import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader= async ()=>{
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()

  //if cart data is in db ,you have to use async await
  
    const storedCart = getShoppingCart()
    const savedCart = [];
    console.log(storedCart);
    for(const id in storedCart){
        const addedProducts = products.find(pd=>pd.id===id)
        if(addedProducts){
            const quantity = storedCart[id]
            addedProducts.quantity = quantity
            savedCart.push(addedProducts)
        }
    }

//if you need to return two things in s function ,here is the way 1.as a arry 2.as a object
//1. return [savedCart,products]----->as a array
//2. return {savedCart,products}----->as a object
    
    return savedCart

}
export default cartProductsLoader
const cart = []; //empty array to store values
let total = 0;

//eevent triggered when buttons clicked
document.getElementById("addtocart05").addEventListener("click", function addToCart(){

    cart.push(5);//Pushs Value onto the end of the array

    document.getElementById("alert").innerHTML = "iTunes £5 was added to cart!";//will inform the user that their item has been added to cart

updateTotal();//will run the function to tally new total
})

document.getElementById("addtocart10").addEventListener("click", function addToCart(){

    cart.push(10);
    
    document.getElementById("alert").innerHTML = "iTunes £10 was added to cart!";

updateTotal();
})

document.getElementById("addtocart15").addEventListener("click", function addToCart(){

    cart.push(15);
    
    document.getElementById("alert").innerHTML = "iTunes £15 was added to cart!";

updateTotal();
})

//function will calculate total of array
function updateTotal(){

    let total = 0;//will reset total to 0 each time the function is called

    // will loop through the array adding each value on to total
    for (let i = 0; i < cart.length; i++){
        
        total += cart[i];
         
    }

    document.getElementById("total").innerHTML = "£" + total;//writes to dom the total 
    console.log(cart, total)
};

//removes all the values with in the array
document.getElementById("emptycart").addEventListener("click", function emptyCart(){

   cart.splice(0, cart.length)
    
updateTotal();//updates new total
})
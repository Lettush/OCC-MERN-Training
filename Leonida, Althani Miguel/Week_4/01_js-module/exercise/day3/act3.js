
//access the ul tag for added product
const myCart = document.getElementById("cart-items");


//access the span tag that shows the total amount
let totalAmount = document.getElementById("total-amount");

//access the ul tag where added items are placed
const addedItem = document.querySelector(".list-group");

//access the list of items
//querySelectorAll : used to access all elements with the same class name or tag name. this is an array
const listItem = document.querySelectorAll(".list-group-item");

//access product name value (used as unique id)
//querySelectorAll : used to access all elements with the same class name or tag name. this is an array
const productName = document.querySelectorAll(".product-name");

//access all product price values
const productPrice = document.querySelectorAll(".product-price");

//access the checkout button
const checkoutButton = document.getElementById("checkout-btn")

//access to the Add to Cart buttons
const addToCartButton = document.querySelectorAll("#addBtn")



//add event listener to the Add to Cart buttons
addToCartButton[0].addEventListener("click", addToCart);
addToCartButton[1].addEventListener("click", addToCart);
addToCartButton[2].addEventListener("click", addToCart);


//add event listener to UL tag
addedItem.addEventListener("click", deleteProduct)



const productQuantities = {};



//function for add to cart button
function addToCart(event) {

    //prevents browser from automatically refreshing
    event.preventDefault(0);


    //captures the button clicked
    const elementClicked = event.target;


    //initializes the index of the button clicked
    let clickedElementIndex = -1;


    //finding the index of the clicked element within the addToCartButton object
    for (let i = 0; i < addToCartButton.length; i++) {
        if (elementClicked === addToCartButton[i]) {
            clickedElementIndex = i;
            break;
        }
    }

    if (clickedElementIndex !== -1) {

        //captures the product name text of a product
        const productNameText = productName[clickedElementIndex].innerText;

        //captures the price of a product
        const productPriceValue = parseInt(productPrice[clickedElementIndex].getAttribute("value"));

        //captures the current value of the total amount
        let totalAmountInt = parseInt(totalAmount.innerText);

        //Check if product is already in the cart
        if (productQuantities[productNameText]) {

            //Product is in the cart

            //increments the product inside the productQuantities array
            productQuantities[productNameText]++;
            updateProductQuantity(productNameText);

        } else {

            //product is not yet in the cart


            totalAmount.innerText = totalAmountInt.toString();
            productToCart(productNameText, productPriceValue);

            //assigns a value if product is added for the first time
            productQuantities[productNameText] = 1;
        }

        //captures the current total Amount
        totalAmountInt = parseInt(totalAmount.innerText);

        //current total amount + added product price
        totalAmountInt = totalAmountInt + productPriceValue;

        //sets the total amount label with current total amount
        totalAmount.innerText = totalAmountInt;
        console.log(totalAmountInt)

    }


}



function productToCart(productNameText, productPriceValue) {

    // Create a new list item for the product
    const addedProductLi = document.createElement('li');
    addedProductLi.classList.add("addedProduct-list");

    const addedProductName = document.createElement("span");
    addedProductName.classList.add("addedProduct-name");
    addedProductName.innerText = productNameText;
    addedProductLi.appendChild(addedProductName);

    const addedProductPrice = document.createElement("span");
    addedProductPrice.classList.add("addedProduct-price");
    addedProductPrice.innerText = "Price: $" + productPriceValue;
    addedProductPrice.setAttribute("value",productPriceValue);
    addedProductLi.appendChild(addedProductPrice);

    const addedProductDeleteButton = document.createElement("button");
    addedProductDeleteButton.classList.add("delete-button");
    addedProductDeleteButton.innerHTML = "Remove";
    addedProductDeleteButton.setAttribute("assoc-product", productNameText)
    addedProductLi.appendChild(addedProductDeleteButton);

    const addedProductNumber = document.createElement("span");
    addedProductNumber.classList.add("addedProduct-number");
    addedProductNumber.innerText = "1";
    addedProductLi.appendChild(addedProductNumber);

    myCart.appendChild(addedProductLi);

}



function updateProductQuantity(productNameText) {

    //access all the product names and returns as an array/object
    const addedProductNames = document.querySelectorAll(".addedProduct-name");

    //access all the product quantities and returns as an array/object
    const addedProductQuantities = document.querySelectorAll(".addedProduct-number");

    for (let i = 0; i < addedProductNames.length; i++) {

        if (addedProductNames[i].textContent === productNameText) {
            addedProductQuantities[i].innerText = productQuantities[productNameText]; //productQuantities[productNameText] is a number
            break;
        }
    }
}

function deleteProduct(event) {

    event.preventDefault();

    //e.target : captures the element that was clicked on the webpage
    const clickedElement = event.target;


    if (clickedElement.classList[0] === "delete-button") {

        //Find the associated product name
        const productNameText = clickedElement.getAttribute("assoc-product");

        //finding the quantity of the product to be deleted
        const productQuantity = productQuantities[productNameText]

        if (productQuantity > 1) {

            //decerement product quantity if value is greater than 1
            productQuantities[productNameText]--;
            updateProductQuantity(productNameText);

        } else {

            //if product quantity is 1, delete the list tag
            clickedElement.parentElement.remove();
            delete productQuantities[productNameText];

        }
        
        //capture the current total amount 
        let totalAmountInt = parseInt(totalAmount.innerText);

        //capture the price of the product
        const localPriceProduct = parseInt(clickedElement.previousSibling.getAttribute("value"));

        //calculate the current total amount
        totalAmountInt -= localPriceProduct;

        totalAmount.innerText = totalAmountInt;
         
    }

}
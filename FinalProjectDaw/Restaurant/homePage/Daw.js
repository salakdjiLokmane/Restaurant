$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        }
    });
});
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Get the Cart modal
var cartModal = document.getElementById("CartModal");
// Get the button that opens the cartModal
var btn1 = document.getElementById("add-to-cart-button");
// Get the <span> element that closes the cartModal
var span1 = document.getElementsByClassName("closeCart")[0];
// When the user clicks the button, open the cartModal
btn1.onclick = function () {
    cartModal.style.display = "block";
}
// When the user clicks on <span> (x), close the cartModal
span1.onclick = function () {
    cartModal.style.display = "none";
}

// When the user clicks anywhere outside of the cartModal, close it
window.onclick = function (event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
}
var cartItems = 0;

function addToCart(productName, imageUrl, priceProduct) {
    // Create an object to store the product details
    var product = {
        name: productName,
        image: imageUrl,
        price: priceProduct
    };
    // Store the product in the shopping cart (you can use cookies, local storage, or send the data to a server)
    // Here, we'll just log the product details to the console

    console.log("Product added to cart:", product);
    // Increment the cartItems counter

    cartItems++;
    // Update the cart button with the cartItems count and add a small image
    var cartButton = document.getElementById("myCartButtun");
    cartButton.innerHTML = `<div style="display: inline-flex">
                        <img
                        src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                        id="add-to-cart-button"
                        style="max-height: 1.9cm;max-width: 1.9cm;margin: 0 0 0 0 ; border-radius: 50px">
                        <p style="font-size: 30px;color: white;margin: 10px 0 0 9px ">${cartItems} </p>
                        </div>`;
}

function viewCart() {
    if (cartItems > 0) {
        // Redirect the user to the CartPage
        window.location.href = "../Cart/Cart.html";
    }
    // Function to view the cart
    console.log("Viewing cart");
}




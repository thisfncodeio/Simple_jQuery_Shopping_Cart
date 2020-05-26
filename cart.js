$(document).ready(function () {
    $(".product-img").each(function () {
        // console.log($(this));

        // Create a button element
        const btn = $("<button>Add to cart</button>");
        $(this).on("mouseenter", () => {
            console.log($(this))

            //Add the buttons class
            btn.addClass("purchase-btn");
            
            // Add the button to the page
            $(this).append(btn);

            // Position the button over the img

        });

        $(this).on("mouseleave", () => {
            console.log("out!");
            $("button").remove();
        });
    });
});

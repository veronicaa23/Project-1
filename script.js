document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const memeContainer = document.createElement("section");
    memeContainer.classList.add("meme-container");  
    document.body.appendChild(memeContainer);

    form.addEventListener("submit", function (e){
        e.preventDefault();

        // Get the values from the form
        const topText = document.getElementById("topText").value.trim(); // trim() removes whitespace from both ends of a string
        const bottomText = document.getElementById("bottomText").value.trim();
        const imageUrl = document.getElementById("imageUrl").value.trim(); 

        //Validation
        if (!imageUrl) {
            alert("Please enter a valid image URL.");
            return;
        }

        //Creating Meme Elements
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Meme Image";

        const topTextDiv = document.createElement("div");
        topTextDiv.classList.add("top-text");
        topTextDiv.textContent = topText;

        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.classList.add("bottom-text");
        bottomTextDiv.textContent = bottomText;

        //Creating a remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Meme";
        removeButton.classList.add("remove-button");

        //Remove Meme functionality
        removeButton.addEventListener("click", function() {
            memeContainer.removeChild(memeDiv);
        });

        //Appending elements
        memeDiv.appendChild(removeButton);
        memeDiv.appendChild(img);
        if (topText) memeDiv.appendChild(topTextDiv);
        if (bottomText) memeDiv.appendChild(bottomTextDiv);
        memeContainer.appendChild(memeDiv);

        // Clear the form
        form.reset();
    });
});


// create popup with the image
let ourGallery = document.querySelectorAll(".about .container .projects .content .project-card img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // create overlay element
        let overlay = document.createElement("div");

        // add class to overlay 
        overlay.className = 'popup-overlay';

        // append overlay to the bady
        document.body.appendChild(overlay);

        // create the popup
        let popupBox = document.createElement("div");

        // add class to overlay 
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // create heading
            let imgHeading = document.createElement("h3");

            // create text heading
            let imgText = document.createTextNode(img.alt);

            // append the text to the heading
            imgHeading.appendChild(imgText);

            // append heading to popup
            popupBox.appendChild(imgHeading);

        };

        // create the imags
        let popupImage = document.createElement("img");

        // set image source
        popupImage.src = img.src;

        // add image to popup
        popupBox.appendChild(popupImage);

        // append the popup box to body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);


    });

});

// close popup 
document.addEventListener('click', (e) => {

    if (e.target.className == 'close-button') {

        // remove the popup
        e.target.parentNode.remove();

        // remove overlay
        document.querySelector(".popup-overlay").remove();

    };

});
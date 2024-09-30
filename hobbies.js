document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.activity-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const imageId = 'popupImage-' + this.id; // Construct the image ID
            const image = document.getElementById(imageId);
            image.style.display = 'block'; // Show the image

            // Hide the image after 1 second (1000 milliseconds)
            setTimeout(function() {
                image.style.display = 'none'; // Hide the image
            }, 1000);
        });
    });
});

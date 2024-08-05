// script.js

// Implement filters for the Clothing & Apparel section
document.addEventListener('DOMContentLoaded', function () {
    const filterSelects = document.querySelectorAll('.filters select');
    filterSelects.forEach(select => {
        select.addEventListener('change', filterItems);
    });

    function filterItems() {
        const sizeFilter = document.querySelector('.filters select:nth-child(1)').value;
        const colorFilter = document.querySelector('.filters select:nth-child(2)').value;
        const priceFilter = document.querySelector('.filters select:nth-child(3)').value;

        const items = document.querySelectorAll('#clothing-apparel .items-grid div');

        items.forEach(item => {
            let match = true;

            if (sizeFilter && item.dataset.size !== sizeFilter) {
                match = false;
            }

            if (colorFilter && item.dataset.color !== colorFilter) {
                match = false;
            }

            if (priceFilter && item.dataset.price !== priceFilter) {
                match = false;
            }

            item.style.display = match ? 'block' : 'none';
        });
    }
});

// Handle the contact form submission
document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;

    if (name && email && message) {
        // You can add functionality to send the form data to the server here
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        event.target.reset();
    } else {
        alert('Please fill out all fields.');
    }
});

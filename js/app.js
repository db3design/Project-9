// Global Variables
const cardContainer = document.getElementById('cards-container');

const overlayContainer = document.getElementById('overlay');

const url = 'https://randomuser.me/api/?results=12';

var obj;

// Helper fetch function
function getData(url) {
    return fetch(url)
        .then(res => res.json())
}

getData(url)
.then(data => obj = data.results)
.then(function displayUsers () {

    
    obj.forEach((element) => {

        // create card, give it card class, and append it to the card container
        var card = document.createElement('DIV');
        card.classList.add('card');
        cardContainer.appendChild(card);

        // adds click event listener to all card elements
        card.addEventListener('click', function () {
            
            // shows overlay container
            overlayContainer.style.cssText = 'display: initial;';

            // hides overlay container
            var close = document.getElementById('close');
            close.addEventListener('click', function () {
                overlayContainer.style.cssText = 'display: none;';
            });
            
            // creates modal and appends it to the overlay container
            var modal = document.createElement('DIV');
            modal.classList.add('modal');
            overlayContainer.appendChild(modal);

            // creates image and appends it to the modal
            var image = document.createElement('IMG');
            image.setAttribute('src', element.picture.large );
            modal.appendChild(image);

            var name = document.createElement('h3');
            name.innerHTML = element.name.first + " " + element.name.last;
            modal.appendChild(name);

            var email = document.createElement('P');
            email.innerHTML = element.email;
            modal.appendChild(email);

            var cell = document.createElement('P');
            cell.innerHTML = element.cell;
            modal.appendChild(cell);

            var address = document.createElement('P');
            address.innerHTML = element.location.street.number + ' ' + element.location.street.name + ', ' + element.location.city + ', ' + element.location.state + ', ' + element.location.postcode;
            modal.appendChild(address);

            var birthday = document.createElement('P');
            birthday.innerHTML = element.dob.age;
            modal.appendChild(birthday);
        });

        // creates card container, gives it a class, and adds it to the card container
        var imageContainer = document.createElement('DIV');
        imageContainer.classList.add('imageContainer');
        card.appendChild(imageContainer);

        // creates image with object value and append it to the card container
        var image = document.createElement('IMG');
        image.setAttribute('src', element.picture.large );
        imageContainer.appendChild(image);


        // creates div to hold content and appends it to the card
        var contentContainer = document.createElement('DIV');
        contentContainer.classList.add('contentContainer');
        card.appendChild(contentContainer);

        // creates h3 sets it to first and last name value and append it to the card
        var name = document.createElement('h3');
        name.innerHTML = element.name.first + " " + element.name.last;
        contentContainer.appendChild(name);

        // create paragraph element for the email element, set its value to element.email 
        var email = document.createElement('P');
        email.innerHTML = element.email;
        contentContainer.appendChild(email);


        var city = document.createElement('P');
        city.innerHTML = element.location.city;
        contentContainer.appendChild(city);
        });

        

})
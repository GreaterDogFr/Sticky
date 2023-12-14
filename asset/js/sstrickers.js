
fetch('../asset/data/stickers.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `

            <img src="../asset/img/${element.Images}" class="card-img-top stick" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class="card-text">${element.Price}€</p>
                <a href="#" class="btn btn-primary">Acheter</a>
            `
            
            document.querySelector('#parent').appendChild(card)
        });
    });



    
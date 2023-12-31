fetch('./asset/data/stickers.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img id="imgCard" src="../asset/img/${element.Images}" class="card-img-top stick" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.Price}€</p>
                    <button onclick="addToCart(${element.Id_Stickers},'${element.Reference}','${element.Images}', '${element.name}', ${element.Price})" class="btn btn-primary">Acheter</button>
                    <button class="btn btn-light"><i class="bi bi-suit-heart"></i> Favoris</button>
                </div>`;

            // Ajoutez un gestionnaire d'événements pour le clic sur l'image
            card.querySelector("img").addEventListener('click', function () {
                // Ouvrez une nouvelle page HTML générée en JavaScript
                const newPage = window.open('', '_blank');
                newPage.document.write(`
                    <html>
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
                                integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
                            <link rel="stylesheet" href="asset/css/style.css">
                            <link rel="stylesheet" href="./asset/css/stylejs.css">
                        </head>
                        <body>
                            <nav class="navbar navbar-expand-md navp">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">Sticky</a>

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse spacenav" id="navbarSupportedContent">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="index.html">Accueil</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="Produit.html">Nos Stickers</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Stickers Personalisé</a>
                                        </li>
                                    </ul>
                                    <!-- <button>Panier</button> -->
                                    <button class="btn btn-outline nav-item cartButton" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                        Panier
                                    </button>
                                </div>
                            </div>
                        </nav>
                        <!-- Offcanvas -->
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanv Fas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    Some text as placeholder. In real life you can have the elements you have chosen. Like,
                                    text, images, lists, etc.
                                </div>
                            </div>
                        </div>
                        <div id="boxe">
                            <div class="imgProduit">
                                <img src="../asset/img/${element.Images}" class="card-img-top stick" alt="...">
                                <title>${element.name}</title>
                                <div class="infoProduit">
                                <p>Prix: ${element.Price}€</p>
                                <p>Description: ${element.description}</p>
                                <div class="button">
                                <a href="#" class="btn btn-primary">Acheter</a>
                                    <button class="btn btn-light"><i class="bi bi-suit-heart"></i> Favoris</button>
                                </div>
                                </div>
                                
                            </div>
                            

                        </div>

                            <footer class="bottom py-3 produitf">
                                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Accueil</a></li>
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">A propos de nous</a></li>
                                <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQ</a></li>
                                </ul>
                                <p class="text-center text-body-secondary">© 2023 Sticky, Inc</p>
                            </footer>
                            <script src="../asset/js/sstrickers.js"></script>
                            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" defer></script>

                        </body>

                    </html>
                `);
            });

            document.querySelector('#parent').appendChild(card);
        });

    });

//panier

const cartItemsList = document.getElementById('cartItems')

const cart = []

function addToCart(productId, productRef, productImg, productName, productPrice) {
    const existingItem = cart.find(item => item.id === productId)

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, ref: productRef, img: productImg, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
    console.log(cart)
}

function updateCart() {
    cartItems.innerHTML = ""

    cart.forEach(item => {
        const ItemPriceTotal = item.quantity * item.price
        const cartItem = document.createElement('div')
        cartItem.innerHTML = `
        <img class="previewCartImg" src=../asset/img/${item.img}>
        <span>${item.name}</span>
        <span>REF${item.ref}</span>
        <span>
            <input class="itemQuantity" type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id},this.value)"></input>
        </span>
        <span>Prix: ${item.price}€</span>
        </br>
        <span>Sous-total: ${ItemPriceTotal}€ </span>
        <button onclick="deleteItemCart(${item.id})">[X]</button>
        `
        //TODO: insérer classe boostrap
        cartItemsList.appendChild(cartItem)

    })

    const totalPriceCart = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)

    const totalPrice = document.createElement('div');
    totalPrice.classList.add('cart-total');
    totalPrice.textContent = `Total du panier : ${totalPriceCart}€`;
    cartItemsList.appendChild(totalPrice);

    const buyCart = document.createElement('button');
    buyCart.innerHTML = `Acheter`
    //TODO: insérer classe bootstrap
    cartItemsList.appendChild(buyCart);
}

function updateQuantity(itemId, newQuantity) {
    const itemIndex = cart.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        newQuantity = Math.max(1, parseInt(newQuantity));

        cart[itemIndex].quantity = newQuantity;
        updateCart();
    }
}

function deleteItemCart(itemId) {
    const newCart = cart.filter(item => item.id !== itemId);

    updateCart(newCart);
}
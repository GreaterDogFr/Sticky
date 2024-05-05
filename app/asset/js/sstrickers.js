fetch('./asset/data/stickers.json')
    .then((response) => response.json())
    .then((json) => {
        var panier = [];

        json.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="../asset/img/${element.Images}" class="card-img-top stick" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.Price}€</p>
                    <button href="#" class="btn btn-primary ajouter-panier-btn">Acheter</button>
                    <button class="btn btn-light"><i class="bi bi-suit-heart"></i> Favoris</button>
                </div>`;

            card.querySelector("img").addEventListener('click',function(){
                openProductPage(element);
            }); 
            card.querySelector('.ajouter-panier-btn').addEventListener('click', function (event) {
                event.preventDefault();  
                addToCart(element);
            });
            

            document.querySelector('#parent').appendChild(card);
        });

       
        var panierButton = document.createElement('button');
        panierButton.setAttribute('type', 'button');
        panierButton.classList.add('btn', 'btn-primary');
        panierButton.setAttribute('data-toggle', 'modal');
        panierButton.setAttribute('data-target', '#panierModal');
        panierButton.textContent = 'Voir le panier';

        document.querySelector('.spacenav').appendChild(panierButton);

        
        var panierModal = document.createElement('div');
        panierModal.classList.add('modal', 'fade');
        panierModal.setAttribute('id', 'panierModal');
        panierModal.setAttribute('tabindex', '-1');
        panierModal.setAttribute('role', 'dialog');
        panierModal.setAttribute('aria-labelledby', 'panierModalLabel');
        panierModal.setAttribute('aria-hidden', 'true');
        panierModal.innerHTML = `
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="panierModalLabel">Panier</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <!-- Ici affichés les éléments du panier -->
                        <ul id="panier-liste-modal"></ul>
                        <p>Total du panier: <span id="total-panier-modal">0</span> €</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-danger" id="emptycart">Vider le panier</button>
                    </div>
                </div>
            </div>
        `;
        panierModal.querySelector("#emptycart").addEventListener("click",viderPanier);
        document.body.appendChild(panierModal);
        
        var panierListeModal = document.getElementById('panier-liste-modal');
        var totalPanierModal = document.getElementById('total-panier-modal');

        function addToCart(element) {
            console.log("element",element);
            var existingItem = panier.findIndex(item => item.element.numero === element.numero);
        
            console.log("existingItem",existingItem);
            if (existingItem !== -1) {
                
                panier[existingItem].quantity++;
            } else {
                
                panier.push({element, quantity: 1 });
            }
            console.log("panier",panier);
            
            displayCart();
        }
        
        function viderPanier() { 
            panier = [];
            console.log("panier",panier);
            displayCart();
         }

        function displayCart() {
            
            panierListeModal.innerHTML = '';

            
            panier.forEach(item => {
                console.log("item",item);   
                var listItem = document.createElement('li');
                listItem.textContent = `${item.element.name} - Quantité : ${item.quantity}`;
                panierListeModal.appendChild(listItem);
            });

          
            var total = panier.reduce((acc, item) => acc + item.element.Price * item.quantity, 0);
            totalPanierModal.textContent = `Total: €${total.toFixed(2)}`;
        } 

        function openProductPage(element) {
    
            const newPage = window.open('', '_blank');
            newPage.document.write(`
                <html>
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
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
                            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#panierModal">
                    Voir le panier
                </button>
        
                <!-- La modal -->
                <div class="modal fade" id="panierModal" tabindex="-1" role="dialog"
                    aria-labelledby="panierModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="panierModalLabel">Panier</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <!-- Ici affichés les éléments du panier -->
                                <ul id="panier-liste-modal"></ul>
                                <p>Total du panier: <span id="total-panier-modal">0</span> €</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                <button type="button" class="btn btn-danger" onclick="viderPanier">Vider le
                                    panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
        
                <div id="boxe">
                    <div class="imgProduit">
                        <img src="../asset/img/${element.Images}" class="card-img-top stick" alt="...">
                        <title>${element.name}</title>
                        <div class="infoProduit">
                            <p>Prix: ${element.Price}€</p>
                            <p>Description: ${element.description}</p>
                            <div class="button">
                                <button href="#" class="btn btn-primary" onclick="addToCart('${element.name}', ${element.Price})">Acheter</button>
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
                <script src="asset/js/sstrickers.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous
                "></script>
                <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                </body>
                </html>
`);
}
    });

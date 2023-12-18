//TODO: Ne pas oublier le disclaimer des placeholder
//TODO: page sticker : Affichage des cartes, et de tous les stickers
//TODO: page sticker : pagination et filtres


 // Ajoutez un gestionnaire d'événements pour le clic sur l'image
            card.addEventListener('click', function () {
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
                                // <div class="button">
                                //     <a href="#" class="btn btn-primary">Acheter</a>
                                //     <button class="btn btn-light"><i class="bi bi-suit-heart"></i> Favoris</button>
                                // </div>
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
function idioma(){
    let idioma =document.getElementById('idioma').value
    if( idioma == "en"){
        document.getElementById('todo').innerHTML =`<body class="theme-light" id="todo" >
        <main id="todo">
            <script src="./js/app.js"></script>
            <section class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <select name="" id="idioma" class="form-select" onchange="idioma()">
                                <option value="">Seleccionar Idioma</option>
                                <option value="es" id="espa">Español</option>
                                <option value="en" id="ingle" >Ingles</option>
                                
                            </select>
                        </div>
                        <div class="col-md-6">
                            <select name="" id="tema" class="form-select" onchange="theme()">
                                <option value="">Seleccionar Theme</option>
                                <option value="claro">Claro</option>
                                <option value="oscuro">Obscuro</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-1.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$8.900</span>
                                    <h2 class="name-product">BBQ Crunch</h2>
                                    <p class="description-product">1 BBQ Crunch Sandwich (1 breaded chicken fillet)</p><br><br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-2.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 15.900</span>
                                    <h2 class="name-product">Kentucky Sandwich</h2>
                                    <p class="description-product"> Kentucky burger / sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter)</p> <br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-3.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 16.900</span>
                                    <h2 class="name-product">Big Box Nuggets</h2>
                                    <p class="description-product">1 Sand. bbq crunch (1 breaded chicken fillet) + 1 small potato + 1 pet soda 400ml</p> <br> <br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-4.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 16.900o</span>
                                    <h2 class="name-product">Combo BBQ Crunch</h2>
                                    <p class="description-product">1 Kentucky coronel sandwich (1 filete de pechuga de pollo apanado, ensalada coleslaw, bbq y mantequilla)</p> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="row mt-5">
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-5.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 21.900</span>
                                    <h2 class="name-product">Combo Kentucky Sandwich</h2>
                                    <p class="description-product">1 Kentucky hamburger/sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter) + 1 small potato + 1 pet soda 400ml</p> <br> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-6.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 22.900 </span>
                                    <h2 class="name-product">Combo Kentucky Coronel Sandwich </h2>
                                    <p class="description-product">1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, Coleslaw Salad, BBQ and butter) + 1 Small Potato + 1 PET Soda 400ml</p> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-7.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 23.900 </span>
                                    <h2 class="name-product">Sandwich Crispy BBQ</h2>
                                    <p class="description-product">1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese, BBQ Sauce) </p> <br> <br> <br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-8.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 29.900 </span>
                                    <h2 class="name-product">Combo Sandwich Crispy BBQ</h2>
                                    <p class="description-product">1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese + BBQ Sauce) + 1 Small Potato + 1 Pet Soda 400ml </p> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                    </div>
                    <div class="col-md-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                    </div>
                    <div class="col-md-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                    </div>
                </div>
            </div>
        </footer>
    </body>`
    localStorage.setItem('idioma','ingles');    
}else{
    document.getElementById('todo').innerHTML =`<body class="theme-light" id="todo" >
    <main id="todo">
        <script src="./js/app.js"></script>
        <section class="mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <select name="" id="idioma" class="form-select" onchange="idioma()">
                            <option value="">Seleccionar Idioma</option>
                            <option value="es" id="espa">Español</option>
                            <option value="en" id="ingle" >Ingles</option>
                            
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select name="" id="tema" class="form-select" onchange="theme()">
                            <option value="">Seleccionar Theme</option>
                            <option value="claro">Claro</option>
                            <option value="oscuro">Obscuro</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-1.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$8.900</span>
                                <h2 class="name-product">BBQ Crunch</h2>
                                <p class="description-product">1 Sandwich BBQ Crunch(1 filete de pollo apanado) </p><br><br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-2.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 15.900</span>
                                <h2 class="name-product">Kentucky Sandwich</h2>
                                <p class="description-product">1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) </p>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-3.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 16.900</span>
                                <h2 class="name-product">Big Box Nuggets</h2>
                                <p class="description-product">1 Sand. bbq crunch (1 filete de pollo apanado) + 1 papa pequeña + 1 gaseosa pet 400ml</p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-4.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 16.900o</span>
                                <h2 class="name-product">Combo BBQ Crunch</h2>
                                <p class="description-product">1 Kentucky coronel sandwich (1 filete de pechuga de pollo apanado, ensalada coleslaw, bbq y mantequilla)  </p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-5.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 21.900</span>
                                <h2 class="name-product">Combo Kentucky Sandwich</h2>
                                <p class="description-product">1 Kentucky hamburguesa /sandwich (1 filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) + 1 papa pequeña + 1 gaseosa pet 400ml </p> <br> <br>    
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-6.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 22.900 </span>
                                <h2 class="name-product">Combo Kentucky Coronel Sandwich </h2>
                                <p class="description-product">1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml  </p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-7.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 23.900 </span>
                                <h2 class="name-product">Sandwich Crispy BBQ</h2>
                                <p class="description-product">1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar, Salsa BBQ) </p> <br> <br> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-8.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 29.900 </span>
                                <h2 class="name-product">Combo Sandwich Crispy BBQ</h2>
                                <p class="description-product">1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar + Salsa BBQ) + 1 Papa Pequeña + 1 Gaseosa Pet 400ml  </p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                </div>
                <div class="col-md-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                </div>
                <div class="col-md-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                </div>
            </div>
        </div>
    </footer>
</body>`
localStorage.setItem('idioma','español');

}

}
function theme(){  
    let tema =document.getElementById('tema').value
    if (tema == "oscuro"){
        document.getElementById('todo').classList.add('dark-theme');
        document.getElementById('todo').classList.remove('theme-light');
        localStorage.setItem('tema','oscuro');
    
    }else  {
        document.getElementById('todo').classList.add('theme-light');
        document.getElementById('todo').classList.remove('dark-theme');
        localStorage.setItem('tema','claro');

        
    
    }

}
if(localStorage.getItem('tema')== 'oscuro'){
    document.getElementById('todo').classList.add('dark-theme');
    document.getElementById('todo').classList.remove('theme-light');
 }else{
    document.getElementById('todo').classList.add('theme-light');
    document.getElementById('todo').classList.remove('dark-theme');

 }

 if(localStorage.getItem('idioma') == 'ingles'){
    document.getElementById('todo').innerHTML =`<body class="theme-light" id="todo" >
        <main id="todo">
            <script src="./js/app.js"></script>
            <section class="mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <select name="" id="idioma" class="form-select" onchange="idioma()">
                                <option value="">Seleccionar Idioma</option>
                                <option value="es" id="espa">Español</option>
                                <option value="en" id="ingle" >Ingles</option>
                                
                            </select>
                        </div>
                        <div class="col-md-6">
                            <select name="" id="tema" class="form-select" onchange="theme()">
                                <option value="">Seleccionar Theme</option>
                                <option value="claro">Claro</option>
                                <option value="oscuro">Obscuro</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-1.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$8.900</span>
                                    <h2 class="name-product">BBQ Crunch</h2>
                                    <p class="description-product">1 BBQ Crunch Sandwich (1 breaded chicken fillet)</p><br><br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-2.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 15.900</span>
                                    <h2 class="name-product">Kentucky Sandwich</h2>
                                    <p class="description-product"> Kentucky burger / sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter)</p> <br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-3.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 16.900</span>
                                    <h2 class="name-product">Big Box Nuggets</h2>
                                    <p class="description-product">1 Sand. bbq crunch (1 breaded chicken fillet) + 1 small potato + 1 pet soda 400ml</p> <br> <br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-4.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 16.900o</span>
                                    <h2 class="name-product">Combo BBQ Crunch</h2>
                                    <p class="description-product">1 Kentucky coronel sandwich (1 filete de pechuga de pollo apanado, ensalada coleslaw, bbq y mantequilla)</p> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="row mt-5">
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-5.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 21.900</span>
                                    <h2 class="name-product">Combo Kentucky Sandwich</h2>
                                    <p class="description-product">1 Kentucky hamburger/sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter) + 1 small potato + 1 pet soda 400ml</p> <br> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-6.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 22.900 </span>
                                    <h2 class="name-product">Combo Kentucky Coronel Sandwich </h2>
                                    <p class="description-product">1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, Coleslaw Salad, BBQ and butter) + 1 Small Potato + 1 PET Soda 400ml</p> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-7.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 23.900 </span>
                                    <h2 class="name-product">Sandwich Crispy BBQ</h2>
                                    <p class="description-product">1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese, BBQ Sauce) </p> <br> <br> <br>
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mt-5">
                            <div class="card h-100">
                                <img src="./images/hamburguesa-8.webp" alt="" class="img-fluid">
                                <div class="card-body">
                                    <span class="price">$ 29.900 </span>
                                    <h2 class="name-product">Combo Sandwich Crispy BBQ</h2>
                                    <p class="description-product">1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese + BBQ Sauce) + 1 Small Potato + 1 Pet Soda 400ml </p> <br> 
                                    <button class="button-buy">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                    </div>
                    <div class="col-md-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                    </div>
                    <div class="col-md-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                    </div>
                </div>
            </div>
        </footer>
    </body>`
    localStorage.setItem('idioma','ingles');
 }else{
    document.getElementById('todo').innerHTML =`<body class="theme-light" id="todo" >
    <main id="todo">
        <script src="./js/app.js"></script>
        <section class="mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <select name="" id="idioma" class="form-select" onchange="idioma()">
                            <option value="">Seleccionar Idioma</option>
                            <option value="es" id="espa">Español</option>
                            <option value="en" id="ingle" >Ingles</option>
                            
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select name="" id="tema" class="form-select" onchange="theme()">
                            <option value="">Seleccionar Theme</option>
                            <option value="claro">Claro</option>
                            <option value="oscuro">Obscuro</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-1.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$8.900</span>
                                <h2 class="name-product">BBQ Crunch</h2>
                                <p class="description-product">1 Sandwich BBQ Crunch(1 filete de pollo apanado) </p><br><br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-2.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 15.900</span>
                                <h2 class="name-product">Kentucky Sandwich</h2>
                                <p class="description-product">1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) </p>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-3.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 16.900</span>
                                <h2 class="name-product">Big Box Nuggets</h2>
                                <p class="description-product">1 Sand. bbq crunch (1 filete de pollo apanado) + 1 papa pequeña + 1 gaseosa pet 400ml</p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-4.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 16.900o</span>
                                <h2 class="name-product">Combo BBQ Crunch</h2>
                                <p class="description-product">1 Kentucky coronel sandwich (1 filete de pechuga de pollo apanado, ensalada coleslaw, bbq y mantequilla)  </p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-5.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 21.900</span>
                                <h2 class="name-product">Combo Kentucky Sandwich</h2>
                                <p class="description-product">1 Kentucky hamburguesa /sandwich (1 filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) + 1 papa pequeña + 1 gaseosa pet 400ml </p> <br> <br>    
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-6.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 22.900 </span>
                                <h2 class="name-product">Combo Kentucky Coronel Sandwich </h2>
                                <p class="description-product">1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml  </p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-7.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 23.900 </span>
                                <h2 class="name-product">Sandwich Crispy BBQ</h2>
                                <p class="description-product">1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar, Salsa BBQ) </p> <br> <br> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 mt-5">
                        <div class="card h-100">
                            <img src="./images/hamburguesa-8.webp" alt="" class="img-fluid">
                            <div class="card-body">
                                <span class="price">$ 29.900 </span>
                                <h2 class="name-product">Combo Sandwich Crispy BBQ</h2>
                                <p class="description-product">1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar + Salsa BBQ) + 1 Papa Pequeña + 1 Gaseosa Pet 400ml  </p> <br>
                                <button class="button-buy">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                </div>
                <div class="col-md-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                </div>
                <div class="col-md-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, similique?
                </div>
            </div>
        </div>
    </footer>
</body>`
localStorage.setItem('idioma','español')
 }



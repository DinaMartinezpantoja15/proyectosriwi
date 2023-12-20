function tema(){
  let fondo=document.getElementById("tema").value
  if (fondo == "oscuro"){
    document.getElementById("main").classList.remove("theme-light")
    document.getElementById("main").classList.add("theme-dark")
    localStorage.setItem("lastname", "oscu");
  }
  else{
    document.getElementById("main").classList.remove("theme-dark")
    document.getElementById("main").classList.add("theme-light")
    localStorage.setItem("lastname", "clear");
    


  }
}

if(localStorage.getItem("lastname")=="oscu"){
    document.getElementById("main").classList.remove("theme-light")
    document.getElementById("main").classList.add("theme-dark")
    localStorage.setItem("lastname", "oscu");

}else{
    document.getElementById("main").classList.remove("theme-dark")
    document.getElementById("main").classList.add("theme-light")
    localStorage.setItem("lastname", "clear");

}
//cambiar idioma

function idioma(){
  let idioma = document.getElementById("idioma").value;
  if (idioma == "en"){
    document.getElementById("card1").innerHTML=`<div id="card1">
    <span class="price">$ 8.900</span>
    <h2 class="name-product">BBQ Crunch</h2>
    <p class="description-product">BBQ crunch sandwich (1 breaded chicken fillet) </p>
    <button class="button-buy">buy</button>
    </div>`
    document.getElementById("card2").innerHTML=`<div id="card2" >
    <span class="price">$ 15.900</span>
    <h2 class="name-product">kentucky Sandwich</h2>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    document.getElementById("card3").innerHTML=`<div id="card3" >
    <span class="price">$ 15.900</span>
    <h2 class="name-product">Combo BBQ Crunch</h2>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    document.getElementById("card4").innerHTML=`<div id="card4"  >
    <span class="price">$ 16.900</span>
    <h2 class="name-product">kentucky Coronel Sandwich</h2>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    document.getElementById("card5").innerHTML=`<div id="card5" >
    <span class="price">$ 21.900</span>
    <h2 class="name-product">Combo Kentucky Sandwich</h3>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    document.getElementById("card6").innerHTML=`<div id="card6">
    <span class="price">$ 22.900</span>
    <h2 class="name-product">Sandwich Crispy BBQ</h2>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    document.getElementById("card7").innerHTML=`<div id="card7">
    <span class="price">$ 22.900</span>
    <h2 class="name-product">Sandwich Crispy BBQ</h2>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    document.getElementById("card8").innerHTML=`<div id="card7"
    <span class="price">$ 22.900</span>
    <h2 class="name-product">Sandwich Crispy BBQ</h2>
    <p class="description-product">1 Kentucky hamburger/Samdwich (1 breaded chicken breast fillet and pickles) </p>
    <button class="button-buy">Buy</button>
    </div>`
    localStorage.setItem("lastname","ingles");







  }
  else{
    document.getElementById("main").innerHTML=`
    <main>
        <section class="mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <select name="" onchange="idioma()"      id="idioma" class="form-select select dist">
                            <option  class="select select dist" value=""  >Seleccionar Idioma</option>
                            <option value="es">Español</option>
                            <option value="en">Ingles</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select name=""  onchange="tema()" id="tema" class="form-select">
                            <option value="">Seleccionar Theme</option>
                            <option value="Claro">Claro</option>
                            <option value="oscuro">dark</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
        <section>
          <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2" >
                        <img src="./images/hamburguesa-1.webp" alt="" class="img-fluid">
                        <div id="card1"  class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-2.webp" alt="" class="img-fluid">
                        <div id="card2"   class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-3.webp" alt="" class="img-fluid">
                        <div id="card3" class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-4.webp" alt="" class="img-fluid">
                        <div id="card4" class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-5.webp" alt="" class="img-fluid">
                        <div id="card5" class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-6.webp" alt="" class="img-fluid">
                        <div id="card6"class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-7.webp" alt="" class="img-fluid">
                        <div id="card7" class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
                             <button class="button-buy">Comprar</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 mt-5">
                    <div class="card p-2">
                        <img src="./images/hamburguesa-8.webp" alt="" class="img-fluid">
                        <div id="card8" class="card-body">
                             <span class="price">$ 27.900</span>
                             <h2 class="name-product">Big Box Nuggets</h2>
                             <p class="description-product">5 Nuggets + 5 Hot Wings (Las alitas picantes hot wings equivalen a un trozo de ala) + 1 Ensalada Coleslaw Personal + 1 Papa Pequeña+ 1 Gaseosa Pet 400 ml  + 1 Salsa BBQ </p>
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
            <div class="row end">
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
        <script src="./js/app.js"></script>
     </footer>`
     localStorage.setItem("lastname","español");

  }

}

if(localStorage.getItem("lastname")=="ingles"){
    document.getElementById("main").classList.remove("theme-light")
    document.getElementById("main").classList.add("theme-dark")
    localStorage.setItem("lastname", "oscu");

}else{
    document.getElementById("main").classList.remove("theme-dark")
    document.getElementById("main").classList.add("theme-light")
    localStorage.setItem("lastname", "clear");

}


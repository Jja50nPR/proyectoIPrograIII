$(document).ready(function(){
    
  if(localStorage.getItem('spcs')){
        spcs = JSON.parse(localStorage.getItem('spcs'));
        spcs.forEach(spc => {
            valor++;
    
        $("#setQtt").click(function(){
        let quantity = $("#quantity").val();
        quantity = parseInt(quantity);
        if(quantity<=0){
        alert("Please put a number that would be more than 0 , thanks")
        }else{
            img = document.getElementById("name").textContent
            quantityA = quantity;
            price = document.getElementById("price").value;
            price = parseInt(price);
            total = price * quantity;
            quantityA = quantityA.toString();
            price = price.toString();
            total = total.toString();
            let spc = {
                'img' : img,
                'quantityA' : quantityA,
                'price' : price,
                'total' : total
            }

            let spcs = [];
            let prices = [];
            let imgs = [];
            let quantities = [];
            let totals = [];
            if(localStorage.getItem('spcs')){
                spcs = JSON.parse(localStorage.getItem('spcs'))
            }

            if(localStorage.getItem('prices')){
                prices = JSON.parse(localStorage.getItem('prices'))
            }

            if(localStorage.getItem('imgs')){
                imgs = JSON.parse(localStorage.getItem('imgs'))
            }

            if(localStorage.getItem('quantities')){
                quantities = JSON.parse(localStorage.getItem('quantities'))
            }

            if(localStorage.getItem('totals')){
                totals = JSON.parse(localStorage.getItem('totals'))
            }
            
            spcs.push(spc);
            prices.push(price);
            imgs.push(img);
            quantities.push(quantityA);
            totals.push(total);
            localStorage.setItem('spcs' , JSON.stringify(spcs));
            localStorage.setItem('prices' , JSON.stringify(prices));
            localStorage.setItem('imgs' , JSON.stringify(imgs));
            localStorage.setItem('quantities' , JSON.stringify(quantities));
            localStorage.setItem('totals' , JSON.stringify(totals));


            alert("You have ordered " + quantityA + " please check your cart")
            let inputValor = document.getElementById("quantity");
            inputValor.value = "0";
            
            
        }

    });
           
                        

        });

        
    }

    if(localStorage.getItem('prices')){
        prices = JSON.parse(localStorage.getItem('prices'));
        prices.forEach(price =>{
            
        })
    }

    if(localStorage.getItem('totals')){
        totals = JSON.parse(localStorage.getItem('totals'));
        totals.forEach(total => {

        })
    }

    if(localStorage.getItem('imgs')){
        imgs = JSON.parse(localStorage.getItem('imgs'));
        imgs.forEach(img =>{

        })
    }

    if(localStorage.getItem('quantities')){
        quantities = JSON.parse(localStorage.getItem('quantities'));
        quantities.forEach(quantityA =>{

        })
    }

       

    if(localStorage.getItem('rows')){
        
        for(let i = 0 ; i < valor; i++){
        rows = JSON.parse(localStorage.getItem('rows'));
        rows.forEach(row => { 
        
          document.getElementById("table").insertRow(1).innerHTML = `<td data-label="#"></td><td data-label="#">${imgs[i]}</td><td data-label="Product">Ship Your Idea</td><td id="prc" data-label="Pricr">${prices[i]}</td><td data-label="Quantity"><input id=quantityB value=${quantities[i]}  style="width: 40px; height: 50px; margin:5px;" type="text" aria-label="Sizing example input"aria-describedby="inputGroup-sizing-sm"></td><td id="ttl" data-label="Total">${totals[i]}</td>`

          
           info = parseInt(totals[i])
           totales = parseInt(totales)
           totales = totales + info
           totales = totales.toString();
           cambiarB(totales);             



        if(valorB == valor){
            bandera=false;
            }else{
            bandera=true;
            }

           

        valorB++;


        
        });

       


            
        }
    }


    $("#setQtt").click(function(){
        let quantity = $("#quantity").val();
        quantity = parseInt(quantity);
        if(quantity<=0){
        alert("Please put a number that would be more than 0 , thanks")
        }else{
            img = document.getElementById("name").textContent
            quantityA = quantity;
            price = document.getElementById("price").value;
            price = parseInt(price);
            total = price * quantity;
            quantityA = quantityA.toString();
            price = price.toString();
            total = total.toString();
            let spc = {
                'img' : img,
                'quantityA' : quantityA,
                'price' : price,
                'total' : total
            }

            let spcs = [];
            let prices = [];
            let imgs = [];
            let quantities = [];
            let totals = [];
            if(localStorage.getItem('spcs')){
                spcs = JSON.parse(localStorage.getItem('spcs'))
            }

            if(localStorage.getItem('prices')){
                prices = JSON.parse(localStorage.getItem('prices'))
            }

            if(localStorage.getItem('imgs')){
                imgs = JSON.parse(localStorage.getItem('imgs'))
            }

            if(localStorage.getItem('quantities')){
                quantities = JSON.parse(localStorage.getItem('quantities'))
            }

            if(localStorage.getItem('totals')){
                totals = JSON.parse(localStorage.getItem('totals'))
            }
            
            spcs.push(spc);
            prices.push(price);
            imgs.push(img);
            quantities.push(quantityA);
            totals.push(total);
            localStorage.setItem('spcs' , JSON.stringify(spcs));
            localStorage.setItem('prices' , JSON.stringify(prices));
            localStorage.setItem('imgs' , JSON.stringify(imgs));
            localStorage.setItem('quantities' , JSON.stringify(quantities));
            localStorage.setItem('totals' , JSON.stringify(totals));

            alert("You have ordered " + quantityA + " please check your cart")
            let inputValor = document.getElementById("quantity");
            inputValor.value = "0";
            
            
        }

    });

   $("#probar").click(function(){

       if(bandera!=true){

            for(let i = 0 ; i < valor; i++){
            let row = document.getElementById("table").insertRow(1).innerHTML =  '<td data-label="#"></td><td data-label="#"><img id="img" src="img/Checkout/Sacai x Nike Blazer Mid _Black_Grey_.png" alt="product"></td><td data-label="Product">Ship Your Idea</td><td id="prc" data-label="Pricr">$517</td><td data-label="Quantity"><button onclick="restarCantidad()"  type="button" class="btn btn-primary">-</button><input id=quantityB value="0"  style="width: 40px; height: 50px; margin:5px;" type="text" aria-label="Sizing example input"aria-describedby="inputGroup-sizing-sm"><button onclick="sumarCantidad()" type="button" class="btn btn-primary">+</button></td><td id="ttl" data-label="Total"></td>';
       
        
            let rows =[];

             if(localStorage.getItem('rows')){
            rows = JSON.parse(localStorage.getItem('rows'))
            }

            rows.push(row);
            localStorage.setItem('rows' , JSON.stringify(rows));

            

        }

       let numeroRow = valor;

       let totales = 0;

        prices.forEach(price => {
            totals.forEach(total =>{
                quantities.forEach(quantityA =>{
                    imgs.forEach(img => {


                        document.getElementById("table").deleteRow(numeroRow);
                        document.getElementById("table").insertRow(numeroRow).innerHTML = `<td data-label="#"></td><td data-label="#">${img}</td><td data-label="Product">Ship Your Idea</td><td id="prc" data-label="Pricr">${price}</td><td data-label="Quantity"><input id=quantityB value=${quantityA}  style="width: 40px; height: 50px; margin:5px;" type="text" aria-label="Sizing example input"aria-describedby="inputGroup-sizing-sm"></td><td id="ttl" data-label="Total">${total}</td>`

                        let info = parseInt(total)
                        totales = totales + info
                        totales = totales.toString();
                        cambiarB(totales);



                    })
                })
            })
            numeroRow--;
            location.reload();
            
           })
 

        }else{
            alert("The cart is already updated")
            location.reload();
        }

       



        
       
    });

    


    
});


let bandera ;
let valorB =0;
let img ;
let quantityA;
let price;
let total;
let quantityB;
let valor = 0;
let totales = 0;
let info = 0;






function deleteRow(){
    valor = 0;
    valorB = 0;
    localStorage.removeItem('prices');
    localStorage.removeItem('spcs');
    localStorage.removeItem('rows');
    localStorage.removeItem('totals');
    localStorage.removeItem('imgs');
    localStorage.removeItem('quantities');
    location.reload();
}




function cambiar(){
    let inputValor = document.getElementById("quantityB");
    inputValor.value = quantityB;
}

function cambiarB(total){
    let inputValor = document.getElementById("finalA");
    inputValor.innerHTML = total;
    let inputValorB = document.getElementById("finalB");
    inputValorB.innerHTML = total;
 
}


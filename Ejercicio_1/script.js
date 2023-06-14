let estado =" rojo"
rojo();

function rojo() {
   
    document.write (`<img src="rojo.jpg" >`);
    document.close();
    setTimeout(verde,2000);
 
  
}

function verde() {
   
    document.write (`<img src="verde.jpg" >`);
    document.close();
    setTimeout(amarillo,2000);
    
}

function amarillo() {
   
    document.write (`<img src="amarillo.jpg" >`);
    document.close();
    setTimeout(rojo,2000);
    
    
}
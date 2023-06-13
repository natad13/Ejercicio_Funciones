let estado =" rojo"
rojo();

function rojo() {
   
    estado ="rojo";
    //document.write(` <h1>El semaforo esta en ${estado} </h1> `);
    document.write (`<img src="rojo.jpg" >`);
    document.close();
    setTimeout(verde,2000);
   //verde();
  
}

function verde() {
    
    estado ="verde";
    //document.write(` <h1>El semaforo esta en ${estado} </h1> `);
    document.write (`<img src="verde.jpg" >`);
    document.close();
    setTimeout(amarillo,2000);
    //amarillo();
}

function amarillo() {
   
    estado ="amarillo";
    //document.write(` <h1>El semaforo esta en ${estado} </h1> `);
    document.write (`<img src="amarillo.jpg" >`);
    document.close();
    setTimeout(rojo,2000);
    //rojo();
    
}
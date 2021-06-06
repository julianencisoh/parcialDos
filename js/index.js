const funcionPrincipal = document.getElementById('contenedorDePeliculas');

var conteoEstrellas = firebase.database().ref('puntuaciones/peliculas/Mank');
conteoEstrellas.on('value', (snapshot) => {
  const data = snapshot.val();
  if (data == null){
        let nombrePeliUno = {
        nombre: "Mank",
        promedio: 0,
    }

    database.ref('puntuaciones/peliculas/'+"Mank").set(nombrePeliUno);
    let nombrePeliDos = {
        nombre: "Minari",
        promedio: 0,
    }

    database.ref('puntuaciones/peliculas/'+"Minari").set(nombrePeliDos);
    let nombrePeliTres = {
        nombre: "Nomadland",
        promedio: 0,
    }

    database.ref('puntuaciones/peliculas/'+"Nomadland").set(nombrePeliTres);
    let nombrePeliCuatro = {
        nombre: "Sound of Metal",
        promedio: 0,
    }

    database.ref('puntuaciones/peliculas/'+"Sound of Metal").set(nombrePeliCuatro);
    let nombrePeliCinco = {
        nombre: "The Father",
        promedio: 0,
    }

    database.ref('puntuaciones/peliculas/'+"The Father").set(nombrePeliCinco);
    
}});


database.ref('puntuaciones/peliculas').on('value', function(data){

    funcionPrincipal.innerHTML = '';
    
    data.forEach(
        peliculasDisponibles => {
            let contenidoCartelera = peliculasDisponibles.val();
            let peliculas = new Peliculas(contenidoCartelera);
            
            funcionPrincipal.appendChild(peliculas.render());

        }

    );
});


database.ref('puntuaciones/recuento').on('value', function(data){

    data.forEach(
           disponibles=>{
            let nombrePelicula = disponibles.key;
            database.ref('puntuaciones/recuento/'+nombrePelicula).on('value', function (dataa){
                let conteo = 0;
                let resultados = 0;
                let ramaChildren = 0;
                let promedio = 0;
                let recuentochild=0;
                
                dataa.forEach(
                     function (user){

                        ramaChildren = user.numChildren();
                        let valor = user.val();

                        conteo = valor.punto;
                        
                        resultados = conteo + resultados; 
                        recuentochild = ramaChildren + recuentochild;
                     }
                );
                promedio = (resultados/recuentochild);
                                
                let nuevaCalificacion = {
                    nombre: nombrePelicula,
                    promedio: promedio,
                }
               
               database.ref('puntuaciones/peliculas/'+nombrePelicula).set(nuevaCalificacion);

            });

        }

    );
});
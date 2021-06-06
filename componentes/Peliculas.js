class Peliculas{

    constructor(peliculas){
    
        this.peliculas = peliculas; 
    
    }
    
    render =()=>{
    
        let componentes = document.createElement ('div');
        componentes.id = "contenedorprincipal";
    
    
        let compDos= document.createElement('div');
        compDos.id = "contenedorsegundo";
    
    
        let estrellasCon = document.createElement('div');
        estrellasCon.id = "contenedorstar";
    
        let TitularPelis =document.createElement('h2');
        TitularPelis.innerHTML = this.peliculas.nombre;
    
        let calificaciones = document.createElement('h2');
        calificaciones.innerHTML = this.peliculas.promedio;
    
        let unaEstrella = document.createElement('button');
        unaEstrella.innerHTML ='<img src="imagenes/'+"llena"+'.png">';
    
        let dosEstrellas = document.createElement('button');
        dosEstrellas.innerHTML ='<img src="imagenes/'+"llena"+'.png">';
    
        let tresEstrellas = document.createElement('button');
        tresEstrellas.innerHTML ='<img src="imagenes/'+"llena"+'.png">';
    
        let cuatroEstrellas = document.createElement('button');
        cuatroEstrellas.innerHTML ='<img src="imagenes/'+"llena"+'.png">';
    
        let cincoEstrellas = document.createElement('button');
        cincoEstrellas.innerHTML ='<img src="imagenes/'+"llena"+'.png">';
    
        unaEstrella.addEventListener('click', ()=>{

            let espacioVotacion = {
                punto: 1,
            }
    
            database.ref('puntuaciones/recuento/'+this.peliculas.nombre).push().set(espacioVotacion);
            alert("votacion Exitosa");
        });
    
        dosEstrellas.addEventListener('click', ()=>{
    
            let espacioVotacion = {
                punto: 2,
            }
    
            database.ref('puntuaciones/recuento/'+this.peliculas.nombre).push().set(espacioVotacion);
            alert("votacion Exitosa");
        });
    
        tresEstrellas.addEventListener('click', ()=>{
    
            let espacioVotacion = {
                punto: 3,
            }
    
            database.ref('puntuaciones/recuento/'+this.peliculas.nombre).push().set(espacioVotacion);
            alert("votacion Exitosa");
        });
    
        cuatroEstrellas.addEventListener('click', ()=>{
    
            let espacioVotacion = {
                punto: 4,
            }
    
            database.ref('puntuaciones/recuento/'+this.peliculas.nombre).push().set(espacioVotacion);
            alert("votacion Exitosa");
        });
    
        cincoEstrellas.addEventListener('click', ()=>{
    
            let espacioVotacion = {
                punto: 5,
            }
    
            database.ref('puntuaciones/recuento/'+this.peliculas.nombre).push().set(espacioVotacion);
            alert("votacion Exitosa");
        });
    
        compDos.appendChild(TitularPelis);
        compDos.appendChild(calificaciones);
    
        estrellasCon.appendChild(unaEstrella);
        estrellasCon.appendChild(dosEstrellas);
        estrellasCon.appendChild(tresEstrellas);
        estrellasCon.appendChild(cuatroEstrellas);
        estrellasCon.appendChild(cincoEstrellas);
    
        componentes.appendChild(compDos);
        componentes.appendChild(estrellasCon);
    
        return componentes;
    
    }
    
    }
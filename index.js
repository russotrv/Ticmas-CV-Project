const API_URL = 'https://randomuser.me/api/';

fetch(`${API_URL}`)
    .then(response => response.json())
    .then((person) =>{
        //Obtengo la información personal que necesito para crear el CV 
        let name = person["results"][0].name; //Array con title, first, last;
        let city = person["results"][0]["location"].city;
        let state = person["results"][0]["location"].state;
        let country = person["results"][0]["location"].country;
        let email = person["results"][0].email;
        let age = person["results"][0]["dob"].age;
        let cellPhone = person["results"][0].cell;
        let picture = person["results"][0].picture; //Array con 3 tamaños de fotos;
    
       //Envio la info a la funcion que la va a pintar en la web
    pintarInfoPersona(name,city,state,country,email,age,cellPhone,picture);
    })

// Ceacion de variables que contendran los CONTENEDORES en los que se va a rellenar la informacion     
let imgContainer = document.querySelector('.img-container');
let foto = document.querySelector('#foto-persona');
let presentacion = document.querySelector('#presentacion');
let fragmPresentacion = document.createDocumentFragment();
let infoPersonal = document.querySelector('.info-personal-container');
let dataDetalle = document.querySelector('.data-detalle');
let dataContacto = document.querySelector('.data-contacto');

let pintarInfoPersona = (n,c,s,co,e,a,cp,p) => {
    //Inserta la foto de la persona
    let perfil = p["large"];
    foto.setAttribute("src", perfil);

    //-- PRESENTACION --
    //Agrega la info de presentacion
    let h1 = document.createElement('h1');
    h1.innerHTML = `Hola, soy ${n.title} ${n.last}`;
    let h2 = document.createElement('h2');
    h2.innerHTML = `aquí va mi profesión`;

    fragmPresentacion.appendChild(h1);
    fragmPresentacion.appendChild(h2);
    presentacion.appendChild(fragmPresentacion);

    //-- INFORMACION PERSONAL --
    //Crea listas con la info de contacto    
    let ulDetalle = document.createElement('ul');
    //nombre completo - edad - ciudad/estado/pais
    let liNombre = document.createElement('li');
    let liCiudad = document.createElement('li');
    let liEdad = document.createElement('li');

    liNombre.appendChild(document.createTextNode(`Nombre: ${n.first} ${n.last}`));
    liCiudad.appendChild(document.createTextNode(`Residencia: ${c}, ${s}, ${co}`));
    liEdad.appendChild(document.createTextNode(`Edad: ${a} años`));

    ulDetalle.append(liNombre,liCiudad,liEdad);
    dataDetalle.appendChild(ulDetalle);
    
    //email - celular
    let ulContacto = document.createElement('ul');
    let liEmail =  document.createElement('li');
    let liCell = document.createElement('li');

    liEmail.appendChild(document.createTextNode(`Email: ${e}`));
    liCell.appendChild(document.createTextNode(`Celular: ${cp}`));

    ulContacto.append(liEmail,liCell);
    dataContacto.appendChild(ulContacto);
};

let dataPersonal = document.querySelector('.data-personal');
let btnDataPersonal = document.querySelector('#info-personal');
btnDataPersonal.addEventListener('click', ()=>{
    dataPersonal.classList.toggle('ocultar');
});

//Contenido relacionado a las EXPERIENCIAS 
let expContainer = document.querySelector('#lista-experiencia');

let agregarExperiencia = (exp) =>{
    let li = document.createElement('li');

    li.appendChild(document.createTextNode(`${exp}`));
    expContainer.appendChild(li);
}

agregarExperiencia("Ut congue venenatis laoreet. Maecenas egestas dictum neque, quis congue nunc aliquam quis. Quisque eu dui et nunc condimentum posuere quis in nisl. Etiam eu tristique est. Fusce at sem eget ex dignissim gravida sed id nibh. Vivamus vel ullamcorper enim. Cras augue urna, consectetur sed ipsum nec, vulputate viverra erat. Proin non dapibus risus. Suspendisse nec ultricies velit. Donec posuere ipsum dui, et interdum augue rhoncus sit amet. Praesent in tristique nunc. In hendrerit pellentesque pulvinar. Pellentesque volutpat sodales pulvinar.");
agregarExperiencia("Duis dapibus eu tortor at mattis. Integer lacinia, nibh non gravida tempus, ante sem feugiat sapien, sed bibendum metus augue ac urna. Vestibulum eget massa quis nunc posuere suscipit et non neque. Nunc eget risus lobortis mi vulputate vestibulum pretium quis nunc. Aenean vulputate euismod venenatis. Ut cursus varius eros. Integer a magna ultrices, rutrum tortor a, lacinia lectus. Integer placerat urna a venenatis ornare. Fusce porttitor ultricies eros, placerat vestibulum ex pretium a.");
agregarExperiencia("Aliquam lobortis turpis nec purus pharetra, nec finibus enim ullamcorper. Suspendisse leo nisl, vulputate non consectetur sit amet, gravida interdum lacus. Morbi vitae efficitur libero. Proin molestie gravida diam, ac gravida dui ullamcorper a. Maecenas egestas tortor eu risus fringilla efficitur. Vestibulum sagittis blandit semper. Aliquam a egestas arcu.");
agregarExperiencia("Phasellus fringilla est quis placerat bibendum. Nam nec metus nec nibh consequat laoreet vitae maximus sem. Pellentesque ut enim non odio elementum ultricies. Aliquam finibus nisi tellus, sit amet congue velit hendrerit feugiat. Phasellus fermentum urna et fermentum euismod. Phasellus auctor dui at libero vulputate, in feugiat neque dignissim. Aenean tempor ultrices felis, a aliquam elit molestie nec. Praesent rhoncus placerat eros nec dapibus. Mauris imperdiet felis libero, a cursus leo venenatis sed. Praesent et ex venenatis, vehicula sem pulvinar, efficitur ipsum.");
agregarExperiencia("Donec tortor quam, dignissim eget ex sed, aliquet pharetra mauris. Fusce vel consequat nulla. Quisque euismod justo sed turpis varius ullamcorper. Pellentesque ultricies, arcu vitae lobortis euismod, mi est vulputate lorem, sit amet pellentesque ante elit quis ipsum. Quisque venenatis aliquam eros, id ornare mauris tempor vel. Donec imperdiet non ligula vitae venenatis. Duis volutpat sem fermentum, consequat mauris dapibus, fermentum tellus.");

//Contenido relacionado a las HABILIDADES

let habPersonal = document.querySelector('#hab-personales');
let habInformaticas = document.querySelector('#hab-informaticas');

let agregarHabPers = (habP) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${habP}`));
    habPersonal.appendChild(li);
}

let agregarHabInf = (habI) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${habI}`));
    habInformaticas.appendChild(li);
}

for(let i = 0; i < 5; i++){
    agregarHabPers(`Hab. Personal ${i}`);
}

for(let i = 0; i < 6; i++){
    agregarHabInf(`Hab. Informática ${i}`);
}


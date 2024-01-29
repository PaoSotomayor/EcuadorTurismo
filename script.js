import {
    galapagos, banos, mompiche, quilotoa, quito, mindo, cuenca, ingapirca,
    panecillo, cuicocha, otavalo, montanita, losfrailes, puertolopez
} from './ciudades.js'

let links = document.querySelectorAll('a')
let titleById = document.getElementById('title')
let subtitleById = document.getElementById('subtitle')
let paragraphById = document.getElementById('paragraph')
let descriptionById = document.getElementById('description')

//add click event
links.forEach(function (link) {
    link.addEventListener('click', function () {
        //remove active class
        links.forEach(function (link) {
            link.classList.remove('active')
        });
        //add active class
        this.classList.add('active')
        //get content
        let content = getContent(this.textContent)

        titleById.innerHTML = content.title
        subtitleById.innerHTML = content.subtitle
        paragraphById.innerHTML = content.paragraph
        descriptionById.innerHTML = content.description


        let imageElement = document.getElementById('imagen');
        imageElement.src = content.image;

    })
});

function getContent(link) {
    let content = {
        'Galápagos': galapagos,
        'Baños': banos,
        'Mompiche': mompiche,
        'Quilotoa': quilotoa,
        'Quito': quito,
        'Mindo': mindo,
        'Cuenca': cuenca,
        'Ingapirca': ingapirca,
        'El Panecillo': panecillo,
        'Cuicocha': cuicocha,
        'Otavalo': otavalo,
        'Montañita': montanita,
        'Los Frailes': losfrailes,
        'Puerto López': puertolopez

    };
    return content[link]
}

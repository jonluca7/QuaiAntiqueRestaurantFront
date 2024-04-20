const galerieImages = document.getElementById("allImages");

// Récupérer les informations des images
let titre = '<img src=x onerror="window.location.replace(\'https://google.com\')">'
let imgSource = "../Images/food1.jpg"
let monImage = getImage(titre , imgSource);

galerieImages.innerHTML = monImage;


function getImage(titre , urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return `<div class="col p-3">
            <div class="image-card text-white">
            <img  class="w-100 rounded" src="${urlImage}"/>
                <p class="titre-image">${titre}</p>
                <div class="action-images-buttons" data-show="admin">
                    <button type="button" class="btn btn-outline-light"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-outline-light"><i class="bi bi-trash-fill"></i></button>
                </div>
            </div>	
        </div> `;
}
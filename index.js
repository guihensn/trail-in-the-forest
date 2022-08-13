let basePath = "assets/images/"
let currentImage = 0;

let images = [
    {
        src : basePath + "forest-1.png",
        phrase : "Night and animals"
    },
    {
        src : basePath + "forest-2.png",
        phrase : "Sunset and trees"
    },
    {
        src : basePath + "forest-3.png",
        phrase : "River and mountains"
    },
    {
        src : basePath + "forest-4.png",
        phrase : "Exotic animals"
    },
    {
        src : basePath + "forest-5.png",
        phrase : "Adventure and mistery"
    }
]

let imageEl = document.querySelector(".content__image");
let textEl = document.querySelector(".content__text");
updateImage();

function updateImage(){
    let image = images[currentImage];
    imageEl.src = image.src;
    textEl.innerHTML = image.phrase;
}

function nextImage(){
    currentImage = (currentImage + 1) % images.length;
    updateImage();
}

function previusImage(){
    currentImage = (currentImage - 1);

    if(currentImage < 0){
        currentImage = images.length - 1;
    }

    updateImage();
}
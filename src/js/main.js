const panoImage = document.querySelector(".pano-image");
const jardines = "https://i.imgur.com/lulDsY8.jpg";

const panorama = new PANOLENS.ImagePanorama(jardines);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

const panoImage2 = document.querySelector(".cocina");
const oliver = "https://i.imgur.com/y00M0iZ.jpg";

const panorama2 = new PANOLENS.ImagePanorama(oliver);
const viewer2 = new PANOLENS.Viewer({
    container: panoImage2
});

viewer2.add(panorama2);
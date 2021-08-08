const panoImage = document.querySelector(".pano-image");
const miamiPano = "https://i.imgur.com/PMb8eLN.jpg?1";

const panorama = new PANOLENS.ImagePanorama(miamiPano);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

const panoImage2 = document.querySelector(".cocina");
const jardines = "https://i.imgur.com/y00M0iZ.jpg";

const panorama2 = new PANOLENS.ImagePanorama(jardines);
const viewer2 = new PANOLENS.Viewer({
    container: panoImage2
});

viewer2.add(panorama2);
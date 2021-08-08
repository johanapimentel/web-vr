const panoImage = document.querySelector(".pano-image");
const miamiPano = "https://i.imgur.com/y00M0iZundefined.jpg";

const panorama = new PANOLENS.ImagePanorama(miamiPano);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

const panoImage2 = document.querySelector(".cocina");
const jardines = "https://i.imgur.com/E5nbVIBundefined.jpg";

const panorama2 = new PANOLENS.ImagePanorama(jardines);
const viewer2 = new PANOLENS.Viewer({
    container: panoImage2
});

viewer2.add(panorama2);
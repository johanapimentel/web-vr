const panoImage = document.querySelector(".pano-image");
const jardines = "https://i.ibb.co/N6vDMBL/jardines360-2k.jpg";



const panorama = new PANOLENS.ImagePanorama(jardines);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

const panoImage2 = document.querySelector(".cocina");
const oliver = "https://i.ibb.co/CBpyfvM/oliverversion5.png";

const panorama2 = new PANOLENS.ImagePanorama(oliver);
const viewer2 = new PANOLENS.Viewer({
    container: panoImage2
});

viewer2.add(panorama2);

// const panoImage3 = document.querySelector(".cocina");
// const oliver2 = "https://i.ibb.co/CBpyfvM/oliverversion5.png";

// const panorama3 = new PANOLENS.ImagePanorama(oliver2);
// const viewer3 = new PANOLENS.Viewer({
//     container: panoImage3
// });

// viewer3.add(panorama3);
/*$("#slideshowleft > div:gt(0)").hide();

setInterval(function () {
  $("#slideshowleft > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshowleft");
}, 3000);*/
const images = [
  "../images/floaties.jpg",
  "../images/sun_lake.jpg",
  "../images/pontoon_2.jpg",
];
//grab element that image will be in
const imgElement = document.querySelector(".slideshowleft img");
//every 10 sec change image
let index = 0;
setInterval(() => {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }
  console.log(index);
  imgElement.src = images[index];
}, 5000);

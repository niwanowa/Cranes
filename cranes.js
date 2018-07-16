var img = new Array();

img[0] = new Image();
img[0].src = "img/dog1.jpg";
img[1] = new Image();
img[1].src = "img/dog2.jpg";
img[2] = new Image();
img[2].src = "img/dog3.jpg";
img[3] = new Image();
img[3].src = "img/dog4.jpg";
img[4] = new Image();
img[4].src = "img/dog5.jpg";

var photo_cnt = 0;

function changeIMG(){
  photo_cnt++;

  if(photo_cnt == 5){
    photo_cnt = 0;
  }

  document.getElementById("photos").src=img[photo_cnt].src;
}
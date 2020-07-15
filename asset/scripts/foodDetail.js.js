function changeImage() {
  var a = document.getElementById('colo2-heart');
  // var b = document.getElementsByClassName('heart-class')[0];
  b.innerHTML =
    ' <i class="fa fa-heart" style="color:rgb(141, 84, 64);"  aria-hidden="true">';
}

function showItem() {
  var a = (document.getElementById('show-content').style.display = 'block');
  //  var b = document.getElementById('top-food-list').innerHTML += a;
}
function LessItem() {
  var a = (document.getElementById('show-content').style.display = 'none');
  //  var b = document.getElementById('top-food-list').innerHTML += a;
}

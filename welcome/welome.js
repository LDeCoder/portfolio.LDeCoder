function myFavoriteColor() {
  var checkBox = document.getElementById("color1");
  var text = document.getElementById("text");

  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}


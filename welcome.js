function myFavoriteColor() {
  var checkBox1 = document.getElementById("color1");
  var checkBox2 = document.getElementById("color2");
  var checkBox3 = document.getElementById("color3");
  var text = document.getElementById("text");

  if (checkBox1.checked == true) {
    text.style.display = "block";
    text.style.color = "green";
    alert("You chose green.");
  } else if (checkBox2.checked == true) {
    text.style.display = "block";
    text.style.color = "purple";
    alert("You chose purple.");
  } else if (checkBox3.checked == true) {
    text.style.display = "block";
    text.style.color = "blue";
    alert("You chose blue.");
  } else {
    text.style.display = "none";
  }
}

// function myAlert() {
//   alert("I voted.");
// }


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var collB = document.getElementsByClassName("collapsibleButton");
var x;

for (x = 0; x < collB.length; x++) {
  collB[x].addEventListener("click", function() {
    this.classList.toggle("active");
    var contentButton = this.nextElementSibling;
    if (contentButton.style.maxHeight){
      contentButton.style.maxHeight = null;
    } else {
      contentButton.style.maxHeight = contentButton.scrollHeight + 100 + "px";
    } 
  });
}
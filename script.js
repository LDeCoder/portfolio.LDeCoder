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

function myDiv() {
  var x = document.getElementById("def");

  // console.log("moused over.");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myResp() {
  var x = document.getElementById("responsibility");

  // console.log("moused over.");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myDev() {
  var x = document.getElementById("developer");

  // console.log("moused over.");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myAch() {
  var x = document.getElementById("achiever");

  // console.log("moused over.");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myBel() {
  var x = document.getElementById("belief");

  // console.log("moused over.");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myPos() {
  var x = document.getElementById("positivity");

  // console.log("moused over.");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// // to avoid the error, the parameter [sendResponse] is necessary!
// chrome.runtime.onmouseover.addListener(function(msg, sender, sendResponse) {
//   // do something ...

//   // this line seems meaningless but you have to invoke it to avoid error.
//   sendResponse({damn: true});
// });
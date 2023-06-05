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

// function myDiv() {
//   var x = document.getElementById("def");
//   // var y = document.getElementById("contactMe")

//   // console.log("moused over.");

//   if (x.style.display === "none") {
//     x.style.display = "block";
//     // y.style.display = "none";
//   } else {
//     x.style.display = "none";
//     // y.style.display = block;
//   }
// }

// function myResp() {
//   var x = document.getElementById("responsibility");

//   // console.log("moused over.");

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function myDev() {
//   var x = document.getElementById("developer");

//   // console.log("moused over.");

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function myAch() {
//   var x = document.getElementById("achiever");

//   // console.log("moused over.");

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// function myBel() {
//   var x = document.getElementById("belief");

//   // console.log("moused over.");

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// function myPos() {
//   var x = document.getElementById("positivity");

//   // console.log("moused over.");

//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function theShow() {
  var f = document.getElementById("box4x");
  var i = document.getElementById("box15");
  var r = document.getElementById("box5y");
  var e = document.getElementById("box14");
  var w = document.getElementById("box6z");
  var o = document.getElementById("box13");
  var r = document.getElementById("box7y");
  var k = document.getElementById("box12");
  var s = document.getElementById("box8x");
  var h = document.getElementById("box11");
  var oo = document.getElementById("box9z");
  var ww = document.getElementById("box10");


  if (1 + 1 == 2) {
    f.style.animation = "revRotationX 5s 2";
    i.style.animation = "revRotationXY 1s 5";
    r.style.animation = "revRotationX 5s 2";
    e.style.animation = "revRotationXY 1s 5";
    w.style.animation = "revRotationX 5s 2";
    o.style.animation = "revRotationXY 1s 5";
    r.style.animation = "revRotationX 5s 2";
    k.style.animation = "revRotationXY 1s 5";
    s.style.animation = "revRotationX 5s 2";
    h.style.animation = "revRotationXY 1s 5";
    oo.style.animation = "revRotationX 5s 2";
    ww.style.animation = "revRotationXY 1s 5";
  }

}


// // to avoid the error, the parameter [sendResponse] is necessary!
// chrome.runtime.onmouseover.addListener(function(msg, sender, sendResponse) {
//   // do something ...

//   // this line seems meaningless but you have to invoke it to avoid error.
//   sendResponse({damn: true});
// });
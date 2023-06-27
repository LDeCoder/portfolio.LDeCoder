
// all - html pages

const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
};
const getTheme = () => {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
};

getTheme();
  
// index-html page



// home-html page
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



function theShow() {
  var f = document.getElementById("box4x");
  var i = document.getElementById("box15");
  var r = document.getElementById("box5y");
  var e = document.getElementById("box14");
  var w = document.getElementById("box6z");
  var o = document.getElementById("box13");
  var rr = document.getElementById("box7y");
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
    rr.style.animation = "revRotationX 5s 2";
    k.style.animation = "revRotationXY 1s 5";
    s.style.animation = "revRotationX 5s 2";
    h.style.animation = "revRotationXY 1s 5";
    oo.style.animation = "revRotationX 5s 2";
    ww.style.animation = "revRotationXY 1s 5";
  }

}


// tSize();

// function tSize() {

//   var nw = window.innerWidth * 0.25 + "px solid transparent";
//   var nw2 = window.innerWidth * 0.275 + "px solid transparent";
//   var nw3 = window.innerWidth * 0.3 + "px solid transparent";

//   var nx = document.getElementById("triangle");
//   var nx2 = document.getElementById("triangle2");
//   var nx3 = document.getElementById("triangle3");

//   var nb = window.innerHeight * 0.35 + "px solid red";
//   var nb2 = window.innerHeight * 0.35 + "px solid green";
//   var nb3 = window.innerHeight * 0.35 + "px solid purple";

//   nx.style.borderLeft = nw;
//   nx.style.borderBottom = nb;
//   nx2.style.borderLeft = nw2;
//   nx2.style.borderBottom = nb2;
//   nx3.style.borderLeft = nw3;
//   nx3.style.borderBottom = nb3;
// }


// strengths-html page

myResp();
myDev();
myAch();
myBel();
myPos();


function myResp() {
  var x = document.getElementById("responsibility");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myDev() {
  var x = document.getElementById("developer");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myAch() {
  var x = document.getElementById("achiever");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myBel() {
  var x = document.getElementById("belief");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function myPos() {
  var x = document.getElementById("positivity");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}







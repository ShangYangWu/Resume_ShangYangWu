window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("navbar").style = "background-color:rgb(56, 140, 232,1)";
  } else {
    document.getElementById("navbar").style = "background-color:rgb(56, 140, 232,0)";
  }
}

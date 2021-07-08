var uName;
document.addEventListener("DOMContentLoaded", function () {
  topNav = document.querySelector("#top_nav");
  document.querySelector("#top_header_menubtn>#button").addEventListener("click", function () {
      topNav.style.width = "100%";
      topNav.style.paddingLeft = "30px";
      topNav.style.paddingRight = "30px";
  });
  document.getElementById("close").addEventListener("click", function () {
      topNav.style.width = "0%";
      topNav.style.padding = "0px";
  });

  items = document.getElementsByClassName("item");
  for (i = 0; i < items.length; i++) {
      items[i].addEventListener('click', function (e) {
          e.preventDefault();
          var parameters = location.search.substring(1).split("&");
  	      var param1 = parameters[0].split("=");
  	      param1 = parseFloat(unescape(param1[1]));
  	      var param2 = parameters[1].split("=");
	        param2 = parseInt(unescape(param2[1]));
	        var param3 = parameters[2].split("=");
	        param3 = unescape(param3[1]);
	        uName = param3; 
          var url = "product_details.html?param1="+param1+"&param2="+param2+"&param3="+uName;
          window.location.href = url;
      });
  }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    var element = document.getElementById("firstImg");
  element.classList.add("mySlides");
  showSlides(slideIndex += n);
  infiniteLoop();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function infiniteLoop(){
    //var i = 1;
    //for(i=1;i<100;i++){
    //  clearInterval(myVar);
      myVar = setTimeout(delayDone, 2500);
      var parameters = location.search.substring(1).split("&");
  	  var param1 = parameters[0].split("=");
  	  param1 = parseFloat(unescape(param1[1]));
  	  var param2 = parameters[1].split("=");
	    param2 = parseInt(unescape(param2[1]));
	    var param3 = parameters[2].split("=");
      param3 = unescape(param3[1]);
      var cart = document.getElementById("cartvalue").text;
      var cart01 = cart.split("$")[0];
      document.getElementById("cartvalue").text = cart01 +"$" +param1;
      if(param3 == 'name'){
        uName = "LOGIN/REGISTER";
      }else{
        uName = param3; 
      }
      document.getElementById("login").text = uName;
    //}
}

function aboutUs(){
  var parameters = location.search.substring(1).split("&");
  var param1 = parameters[0].split("=");
  param1 = parseFloat(unescape(param1[1]));
  var param2 = parameters[1].split("=");
  param2 = parseInt(unescape(param2[1]));
  var param3 = parameters[2].split("=");
  param3 = unescape(param3[1]);
  var url = "AboutUs.html?param1="+param1+"&param2="+param2+"&param3="+param3;
  window.location.href = url;
}

function delayDone(){
  plusSlides(1);
}

function totalSum(){
  alert("Calculaion total");
}

function callHomeIndex(){
  var parameters = location.search.substring(1).split("&");
  var param1 = parameters[0].split("=");
  param1 = parseFloat(unescape(param1[1]));
  var param2 = parameters[1].split("=");
  param2 = parseInt(unescape(param2[1]));
  var param3 = parameters[2].split("=");
  param3 = unescape(param3[1]);
  uName = param3;
  var url = "../index.html?param1="+param1+"&param2="+param2+"&param3="+uName;
  window.location.href = url;
}
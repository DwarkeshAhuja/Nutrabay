var totalPriceOfCart;
var totalProducts;
var uName;

document.addEventListener("DOMContentLoaded", function(){
  topNav = document.querySelector("#top_nav");
  document.querySelector("#top_header_menubtn>#button").addEventListener("click", function(){
      topNav.style.width = "100%";
      topNav.style.paddingLeft = "30px";
      topNav.style.paddingRight = "30px";
  });
  document.getElementById("close").addEventListener("click", function(){          
      topNav.style.width = "0%";
      topNav.style.padding = "0px";
  }); 

  items = document.getElementsByClassName("item");
  for(i=0;i<items.length;i++){
      items[i].addEventListener('click', function(e){
          e.preventDefault();
          fetchUrlParam();
          urllink = "product_details.html?param1="+totalPriceOfCart+"&param2="+totalProducts+"&param3="+uName;
          window.location.href =urllink;
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
}

// Thumbnail image controls
function currentSlide(n) {
    var element = document.getElementById("firstImg");
    element.classList.add("mySlides");
    showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function totalSum(){
  var cart = document.getElementById("cartvalue").text;
  var cart01 = cart.split("$")[0];
  var total = parseFloat(cart.split("$")[1]);
  var price = document.getElementById("price").textContent;
  var cost = parseFloat(price.split("$")[1]);
  var sum = total + cost;
  totalPriceOfCart = sum;
  document.getElementById("cartvalue").text = cart01 +"$" +totalPriceOfCart;
  fetchUrlParam();
}

function buySuccess(){
  var parameters = location.search.substring(1).split("&");
  var param1 = parameters[0].split("=");
  param1 = parseFloat(unescape(param1[1]));
  var param2 = parameters[1].split("=");
  param2 = parseInt(unescape(param2[1]));
  var param3 = parameters[2].split("=");
  param3 = unescape(param3[1]);
  var url = "Cart.html?param1="+param1+"&param2="+param2+"&param3="+param3;
  window.location.href = url;
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

function fetchUrlParam(){
  var parameters = location.search.substring(1).split("&");
  var param1 = parameters[0].split("=");
  param1 = parseFloat(unescape(param1[1]));
  var param2 = parameters[1].split("=");
  param2 = parseInt(unescape(param2[1]));
  var param3 = parameters[2].split("=");
  param3 = unescape(param3[1]);
	uName = param3; 
  var cart = document.getElementById("cartvalue").text;
  var cart01 = cart.split("$")[0];
  var total = parseFloat(cart.split("$")[1]);
  var price = document.getElementById("price").textContent;
  var cost = parseFloat(price.split("$")[1]);
  if(total != 0 && total != totalPriceOfCart){
    totalPriceOfCart = param1+total;
    totalProducts = param2+(totalPriceOfCart/cost);
    document.getElementById("cartvalue").text = cart01 +"$" +totalPriceOfCart;
    document.getElementById("login").text = uName;
  }else{
    if(totalPriceOfCart == 0 || totalPriceOfCart == undefined){
      totalPriceOfCart = param1;
    }
    totalProducts = param2;
    document.getElementById("cartvalue").text = cart01 +"$" +totalPriceOfCart;
    document.getElementById("login").text = uName;
  }
}

function fetchUrlParamAbout(){
  var parameters = location.search.substring(1).split("&");
  var param1 = parameters[0].split("=");
  param1 = parseFloat(unescape(param1[1]));
  var param2 = parameters[1].split("=");
  param2 = parseInt(unescape(param2[1]));
  var param3 = parameters[2].split("=");
  param3 = unescape(param3[1]);
	uName = param3; 
  var cart = document.getElementById("cartvalue").text;
  var cart01 = cart.split("$")[0];
  document.getElementById("cartvalue").text = cart01 +"$" +param1;
  document.getElementById("login").text = uName;
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
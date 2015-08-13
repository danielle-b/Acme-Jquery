// Using JQuery Selectors To Find:
//ACME Tag 
$("img");
//Navigation Links 
$("ul");
// Headers 
$("h1");
//Big Picture of the Anvil 
$("#anvil");


$(document).ready(function(){
  $("li").find("a").eq(0).html("GOOGLE");
  $("li").find("a").eq(0).attr("href", "http://www.google.com/");
});

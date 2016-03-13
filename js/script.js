
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  //var xmlhttp1 = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    //&& xmlhttp1.readyState == 4 && xmlhttp1.status == 200
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "data/api_match_plats.xml", true);
  xmlhttp.send();
  //xmlhttp1.open("GET", "data/api_match_plats.xml", true);
  //xmlhttp1.send();

}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  //var xmlDoc1 = xmlhttp1.responseXML;

var kommun = "";
  var yrke = "";
  var kommun1 = "";
  var yrke1 = "";
  var kommun2 = "";
  var yrke2 = "";

  var x = xmlDoc.getElementsByTagName("matchningdata");
  //var annonsId = xmlDoc.getElementsByTagName("matchningdata");


  kommun += " " + x[0].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue;
  yrke += " " + x[0].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;

  //document.getElementById("demo").innerHTML = table;
  document.getElementById("kommun").innerHTML = kommun;
  document.getElementById("yrke").innerHTML = yrke;



  kommun1 += " " + x[1].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue;
  yrke1 += " " + x[1].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;

  //document.getElementById("demo").innerHTML = table;
  document.getElementById("kommun1").innerHTML = kommun1;
  document.getElementById("yrke1").innerHTML = yrke1;


  kommun2 += " " + x[2].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue;
  yrke2 += " " + x[2].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;

  //document.getElementById("demo").innerHTML = table;
  //document.getElementById("kommun2").innerHTML = kommun2;
 //document.getElementById("yrke2").innerHTML = yrke2;



}
/*
function getNumApartment(xml){
  var i;
  var xmlDoc1 = xml.responseXML;



}

*/

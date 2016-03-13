
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
  var selection = document.getElementById("housing-selection");
  var nrOfRooms = selection.options[selection.selectedIndex].value;

  //var annonsId = xmlDoc.getElementsByTagName("matchningdata");


  if(nrOfRooms == 1)
  {
    kommun += " " + x[0].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue + " 154 apartments with " + nrOfRooms + " room available";
  }
  else 
  {
    kommun += " " + x[0].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue + " 358 apartments with " + nrOfRooms + " rooms available";
  }
  yrke += " " + x[0].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;

  //document.getElementById("demo").innerHTML = table;
  document.getElementById("kommun").innerHTML = kommun;
  document.getElementById("yrke").innerHTML =  yrke;
  document.getElementById("yrkeom").innerHTML = yrke;

if(nrOfRooms ==1)
{
   kommun1 += " " + x[1].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue + " 154 apartments with " + nrOfRooms + " room available";
}
else
{
   kommun1 += " " + x[1].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue + " 358 apartments with " + nrOfRooms + " rooms available";
}
 
  yrke1 += " " + x[1].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;

  //document.getElementById("demo").innerHTML = table;
  document.getElementById("kommun1").innerHTML ="<img height = '40px;' width = '40px;' src=\'img/ikon_housing-01.png\'>" + kommun1;
  document.getElementById("yrke1").innerHTML = "<img height = '40px;' width = '40px;' src=\'img/ikon_work-01.png\'>" + yrke1;
  document.getElementById("yrke1om").innerHTML = yrke1;

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

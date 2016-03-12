


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  //var xmlhttp1 = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    //&& xmlhttp1.readyState == 4 && xmlhttp1.status == 200
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200 ) {
      myFunction(xmlhttp);
      getNumApartment(xmlhttp1);
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


  var table="<tr><th>Annonsrubrik</th><th>Yrkesbenämning</th><th>Kommun</th><th>Länk</th></tr>";

  var x = xmlDoc.getElementsByTagName("matchningdata");
  //var annonsId = xmlDoc.getElementsByTagName("matchningdata");


  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("arbetsplatsnamn")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("annonsurl")[0].childNodes[0].nodeValue +
    "</td></tr>";

    //annonsId[i].getElementsByTagName("annonsid")[0].childNodes[0].nodeValue;

  }

  document.getElementById("demo").innerHTML = table;

}
/*
function getNumApartment(xml){
  var i;
  var xmlDoc1 = xml.responseXML;



}

*/

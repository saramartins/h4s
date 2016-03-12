
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


  var table="<tr><th>Annonsrubrik</th><th>Yrkesbenämning</th><th>Kommun</th><th>Länk</th></tr>";
  var kommun = "";
  var yrke = "";
  var url = "";

  var x = xmlDoc.getElementsByTagName("matchningdata");
  //var annonsId = xmlDoc.getElementsByTagName("matchningdata");

/*
  for (i = 0; i <x.length; i++) { 

    kommun += " " + x[i].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue;
    yrke += " " + x[i].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;


  

  }
*/


  kommun += " " + x[3].getElementsByTagName("kommunnamn")[0].childNodes[0].nodeValue;
  yrke += " " + x[3].getElementsByTagName("annonsrubrik")[0].childNodes[0].nodeValue;
  url += " " + x[3].getElementsByTagName("annonsurl")[0].childNodes[0].nodeValue;

  //document.getElementById("demo").innerHTML = table;
  document.getElementById("kommun").innerHTML = kommun;
  document.getElementById("yrke").innerHTML = yrke;
  document.getElementById("url").innerHTML = url;

}
/*
function getNumApartment(xml){
  var i;
  var xmlDoc1 = xml.responseXML;



}

*/

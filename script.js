
JSONTest = function() {
 //variabeln jsonObj innehåller den json frågan som används i anropet till SCBs API. Det är alltså denna fråga du skall kopiera från SCB när du i Statistik databasen klickat på "API för denna tabell"
var jsonObj = 
{
  "query": [
    {
      "code": "Region",
      "selection": {
        "filter": "item",
        "values": [
          "0043"
        ]
      }
    },
    {
      "code": "Agarkategori",
      "selection": {
        "filter": "item",
        "values": [
          "TOT"
        ]
      }
    },
    {
      "code": "Lagenhetstyp",
      "selection": {
        "filter": "item",
        "values": [
          "2RK"
        ]
      }
    },
    {
      "code": "ContentsCode",
      "selection": {
        "filter": "item",
        "values": [
          "BO0303J1"
        ]
      }
    },
    {
      "code": "Tid",
      "selection": {
        "filter": "item",
        "values": [
          "2015"
        ]
      }
    }
  ],
  "response": {
    "format": "json"
  }
};
var resultDiv = $("#resultDivContainer");
//jQuery AJAX method 	
$.ajax({
 	 url:"http://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy",
	 type: "GET",
	 data: JSON.stringify(jsonObj),  //skapa en textsträng av vår JSON-formaterad fråga
	 dataType: "json",
	success: function(obj){		//Ta emot JSON objektet från SCB 	 
		console.log("success");
		 switch (obj) {
                case true:
                    processResponse(obj);
                    break;
                default:
                    resultDiv.html(obj);
            }
	},
  	error: function (errorMessage) {
	console.log("Något gick fel.");
	
	}
  
  }); //slut på $.ajax method

}//slut på init function	



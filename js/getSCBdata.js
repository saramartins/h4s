var resultDiv = $("#resultDivContainer");
//jQuery AJAX method 	
$.ajax({
 	 url:"http://api.scb.se/OV0104/v1/doris/sv/ssd/BE/BE0101/BE0101A/BefolkningNy",
	 type: "GET",
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



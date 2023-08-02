export function useFirebase(fbObject) {

//HOME PAGE
	if (document.getElementById("homeCredit") != null) {

		//MAIN NOTICE
		document.getElementById("homeNotice").innerHTML = fbObject[0].notices.homePage;
	}

//PRODUCTS PAGE
	else if (document.getElementById("productCredit") != null) {

		//NOTICES
		document.getElementById("racquetsNotice").innerHTML = fbObject[0].notices.racquetsAndDemos;
		document.getElementById("shoesAndApparelNotice").innerHTML = fbObject[0].notices.shoesAndApparel;
		document.getElementById("stringingNotice").innerHTML = fbObject[0].notices.stringing;


		//SHOES AND APPAREL

		var apparelContent = fbObject[0].shoesAndApparel.apparelContent;
		for (i in apparelContent){
			document.getElementById("apparelContent").innerHTML += "<p>" + apparelContent[i] + "</p>";
		}

		var shoesContent = fbObject[0].shoesAndApparel.shoesContent;
		for (i in shoesContent){
			document.getElementById("shoesContent").innerHTML += "<p>" + shoesContent[i] + "</p>";
		}

		//STRINGING

		var stringingContent = fbObject[0].stringingInfo;
		document.getElementById("stringBrandContent").innerHTML = stringingContent.brands;
		document.getElementById("stringRacquetContent").innerHTML = stringingContent.racquets;
		document.getElementById("stringTimeContent").innerHTML = stringingContent.turnAroundTime;
		document.getElementById("stringCSContent").innerHTML = stringingContent.csStringers;
		document.getElementById("stringMRTContent").innerHTML = stringingContent.mrtStringers;
		document.getElementById("stringLaborCost").innerHTML = stringingContent.laborCost;
		document.getElementById("stringMaterialCost").innerHTML = stringingContent.stringCost;
	
		//RACQUETS
		var racquetSaleContent = fbObject[0].racquetsForSale;
		var demoList = [];
		for (i in racquetSaleContent){
			console.log(racquetSaleContent[i]);
			document.getElementById("racquetsForSaleContent").innerHTML += "<li>" + racquetSaleContent[i].sport + ": " + racquetSaleContent[i].brands + "</li>";
		}

		var demoInfo = fbObject[0].demoInfo;
		document.getElementById("demoSportsContent").innerHTML = demoInfo.sports;
		document.getElementById("demoPriceContent").innerHTML = demoInfo.price;
		document.getElementById("demoTimeContent").innerHTML = demoInfo.timeFrame;

		//MORE EQUIPMENT
		var moreEquipment = fbObject[0].moreEquipment;
		for (i in moreEquipment) {

			document.getElementById("moreEquipmentContent").innerHTML += "<div class=\"modalListTitle\">" + moreEquipment[i].title + "</div>";
			document.getElementById("moreEquipmentContent").innerHTML += moreEquipment[i].content;
		}

	}


}
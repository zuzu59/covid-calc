/*
zf201120.1457
sources:
https://www.20min.ch/fr/story/dix-a-table-calculez-le-risque-dattraper-le-virus-883979398256
https://covid19risk.biosci.gatech.edu/ (voir l'onglet tutorial)
*/

console.log("toto")

//https://dev.to/itsjjpowell/retrieving-files-with-the-fetch-api-i5l

var incidence = []

fetch('https://static.dwcdn.net/data/BL20V.csv?v=1605854400000')

.then(response => response.text()) 
.then(csvString => {
//  console.log(csvString)

  //Split the csv into rows
  const rows = csvString.split('\n');
  for (row of rows) {
    rr = row.replace(/"([0-9]*),([0-9.]*)"/, "$1$2").split(",")
    incidence[rr[0]] = parseFloat(rr[rr.length-3])
  }
  console.log("incidence VD: ", incidence["VD"])
  console.log("incidence NE: ", incidence["NE"])
  console.log("incidence VS: ", incidence["VS"])

  console.log("titi")
  rows1 = rows.map((row) => {
    rr = row.split(",")
    return({
      'cantonInitiale': rr[0],
      'cantonName': rr[1],
      'incidence': rr[rr.length-2]
    })
  })

  var cantonSelect='<select class="canton">'
  for (row of rows1){
    cantonSelect = cantonSelect + '<option value="' + row.cantonInitiale + '">' + row.cantonName + '</option>'
  }
  cantonSelect = cantonSelect + '</selec>'

  $('.cantondiv').append(cantonSelect)
  $('#canton1 select option[value=VD]')[0].selected=true
  $('#canton2 select option[value=NE]')[0].selected=true
  $('#canton3 select option[value=VS]')[0].selected=true
})

function covid_calc(){

  console.log($("#canton1 .canton")[0].value)
  console.log($("#canton1 .nbper")[0].value)
  console.log($("#canton2 .canton")[0].value)
  console.log($("#canton2 .nbper")[0].value)
  console.log($("#canton3 .canton")[0].value)
  console.log($("#canton3 .nbper")[0].value)

  bias = $("#bias .bias_value")[0].value

  aucun_malade_1 = Math.pow(1-(bias*incidence[$("#canton1 .canton")[0].value] /100000), $("#canton1 .nbper")[0].value)
  aucun_malade_2 = Math.pow(1-(bias*incidence[$("#canton2 .canton")[0].value] /100000), $("#canton2 .nbper")[0].value)
  aucun_malade_3 = Math.pow(1-(bias*incidence[$("#canton3 .canton")[0].value] /100000), $("#canton3 .nbper")[0].value)
  aucun_malade_4 = Math.pow(1-(bias*incidence[$("#canton4 .canton")[0].value] /100000), $("#canton4 .nbper")[0].value)

  console.log(aucun_malade_1)
  console.log(aucun_malade_2)
  console.log(aucun_malade_3)
  console.log(aucun_malade_4)

  aucun_malade = aucun_malade_1 * aucun_malade_2 * aucun_malade_3 * aucun_malade_4
  au_moins_un_malade = 1 - aucun_malade

  chance = "Vous avez " + parseInt(au_moins_un_malade*100) + "% de malchance d'avoir au moins un malade du covid lors de votre repas !<br>"
  console.log(chance )

  $('#chance')[0].innerHTML= chance

}


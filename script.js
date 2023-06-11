function spracujDatum() {
  var birthdateInput = document.getElementById("birthdate");
  var birthdate = moment(birthdateInput.value, "YYYY-MM-DD");
  var today = moment();
  
  var nextBirthday = moment(birthdate).year(today.year());
  if (nextBirthday.isBefore(today)) {
    nextBirthday.add(1, 'years');
  }
  
  var daysUntilBirthday = nextBirthday.diff(today, "days");
  console.log("Počet dní do najbližších narodenín: " + daysUntilBirthday);
  
  var season = getSeason(birthdate.month());
  console.log("Ročné obdobie: " + season);
}
function getSeason(month) {
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "ZIMA";
    case 2:
    case 3:
    case 4:
      return "JAR";
    case 5:
    case 6:
    case 7:
      return "LETO";
    case 8:
    case 9:
    case 10:
      return "JESEŇ";
    default:
      return "Neznáme";
  }
}
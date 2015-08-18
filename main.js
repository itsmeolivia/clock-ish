function hourString(num) {
  if (num < 10)
    return " " + num + "ish";
  return num + "ish";
}


function update() {

  var now = new Date();
  var lowerHour = now.getHours() % 12;
  var upperHour = lowerHour + 1;
  if (lowerHour === 0)
    lowerHour = 12;

  var minute = now.getMinutes();
  var lowerOpacity = 1 - (minute / 60);
  var upperOpacity = minute / 60;

  $("#lower").text(hourString(lowerHour));
  $("#upper").text(hourString(upperHour));

  $("#lower").css("opacity", lowerOpacity);
  $("#upper").css("opacity", upperOpacity);

}

setInterval(update, 1000);
update();

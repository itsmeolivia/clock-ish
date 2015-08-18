function hour_string(num) {
  if (num < 10)
    return " " + num + "ish";
  return num + "ish";
};


function update() {

  var now = new Date();
  var lower_hour = now.getHours() % 12;
  var upper_hour = lower_hour + 1;
  if (lower_hour === 0)
    lower_hour = 12;



  $("#lower").text(hour_string(lower_hour));
  $("#upper").text(hour_string(upper_hour));

};

update();

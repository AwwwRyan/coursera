(function () {
  var names = [
    "Yaakov",
    "John",
    "amaan",
    "aryan",
    "tisha",
    "urvish",
    "rohan",
    "rish",
    "sarah",
    "sara",
  ];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter == "j") {
      byeSpeaker(names[i]);
    } else {
      helloSpeaker(names[i]);
    }
  }
})();

var body = document.querySelector("body");
var moodSelect = document.querySelector("#moods");

moodSelect.addEventListener("change", function (e) {
  var mood = e.target.value;
  if (mood === "happy") {
    body.classList.add("happy");
    body.classList.remove("sad");
    body.classList.remove("passionate");
  } else if (mood === "sad") {
    body.classList.add("sad");
    body.classList.remove("happy");
    body.classList.remove("passionate");
  } else if (mood === "passionate") {
    body.classList.add("passionate");
    body.classList.remove("happy");
    body.classList.remove("sad");
  }
});

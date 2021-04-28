document.addEventListener('DOMContentLoaded', function () {
  // Load the time since birthdate
  var years_old = new Date("1997-10-16").getTime()
  var today = new Date().getTime()

  var ms = today - years_old
  var m = Math.floor(ms / 60000)
  var h = Math.floor(m / 60)
  var d = Math.floor(h / 24)
  var y = Math.floor(d / 365)

  document.getElementById("years-old").innerText = y + " year old"
});
window.addEventListener('scroll', function () {
  // Hide arrow button when scrolling down the page
  var scrollPosition = window.scrollY
  var logoContainer = document.getElementsByClassName('arrow')[0]
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled')
  else logoContainer.classList.remove('arrow--scrolled')
})

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
})

/* document.addEventListener('DOMContentLoaded', function () {
  new Date().getFullYear()
  document.getElementById("current-year").innerHTML = new Date().getFullYear();
}); */

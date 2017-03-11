window.onload = function(){
  loadHome()
  var services = document.getElementById('services')
  var home = document.getElementById('home')
  var calender = document.getElementById('calender')
  services.addEventListener('click', loadServices)
  home.addEventListener('click', loadHome)
  calender.addEventListener('click', loadCalender)
}

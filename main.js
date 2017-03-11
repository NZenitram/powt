window.onload = function(){
  loadHome()
  var services = document.getElementById('services')
  var home = document.getElementById('home')
  services.addEventListener('click', loadServices)
  home.addEventListener('click', loadHome)
}

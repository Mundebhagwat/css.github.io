document.addEventListener('DOMContentLoaded', function() {
document.getElementById("loginButton").addEventListener("click", function() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        window.location.href = "login.html";
    }, 500);
});
document.getElementById("registeration").addEventListener("click", function(){
    document.getElementById('loading').style.display = 'block';
    setTimeout(function(){
        window.location.href = "registration.html";
    } ,500)
})
// dashboard
document.getElementById("dash").addEventListener("click", function() {
  document.getElementById('loading').style.display = 'block';
  setTimeout(function() {
      window.location.href = "crops.html";
  }, 500); 
});
// burger
function toggleMenu() {
    let menu = document.querySelector('.burger-menu');
    let icon = document.querySelector('.burger-icon');
    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      icon.classList.remove('open');
    } else {
      menu.classList.add('active');
      icon.classList.add('open');
    }
  }
});
  
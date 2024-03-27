document.getElementById("loginButton").addEventListener("click", function() {
    // Display loading animation
    document.getElementById('loading').style.display = 'block';

    // Navigate to page1.html after a slight delay to allow the loading animation to display
    setTimeout(function() {
        window.location.href = "login.html";
    }, 500); // Adjust the delay time as needed
});
document.getElementById("registeration").addEventListener("click", function(){
    document.getElementById('loading').style.display = 'block';
    setTimeout(function(){
        window.location.href = "registration.html";
    } ,500)
})
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
  
(function (){
    var button = document.getElementById('toggle-menu');
    button.addEventListener('click', function(e){
        e.preventDefault();
        var menu = document.getElementById('main-menu');
        menu.classList.toggle('is-open');
    });
})();


var acc = document.getElementsByClassName("questions__list");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
(function (){
    var button = document.getElementById('toggle-menu');
    button.addEventListener('click', function(e){
        e.preventDefault();
        var menu = document.getElementById('main-menu');
        menu.classList.toggle('is-open');
    });
})();
function SearchRenderer() {

}

SearchRenderer.prototype.fadeIn = function(query) {
    console.log(query);
    document.getElementsByClassName('search')[0].classList.remove('search--faded');
    document.getElementsByClassName('search__query')[0].innerHTML = '"' + query + '"';
};

SearchRenderer.prototype.fadeOut = function() {
    document.getElementsByClassName('search')[0].classList.add('search--faded');
};
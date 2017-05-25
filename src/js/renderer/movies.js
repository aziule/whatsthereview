function MoviesRenderer(el) {
    if (!el instanceof HTMLElement) {
        throw 'el must be an HTMLElement';
    }

    this.el = el;
}

MoviesRenderer.prototype.render = function() {
    
}
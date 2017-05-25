function ErrorRenderer(el) {
    if (!el instanceof HTMLElement) {
        throw 'el must be an HTMLElement';
    }

    this.el = el;
}

ErrorRenderer.prototype.render = function() {
    
}
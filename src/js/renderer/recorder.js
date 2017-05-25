function RecorderRenderer(el) {
    if (!el instanceof HTMLElement) {
        throw 'el must be an HTMLElement';
    }

    this.el = el;
}

RecorderRenderer.prototype.record = function() {
    
}
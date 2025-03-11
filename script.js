function scrollToElement() {
    var element = document.getElementById('whimsicalDinosaurImage');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
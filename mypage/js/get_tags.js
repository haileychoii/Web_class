window.addEventListener('load', function() {
    var all_elements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(all_elements, function(el) {
        var includePath = el.dataset.includepath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});
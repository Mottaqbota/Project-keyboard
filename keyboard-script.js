window.addEventListener('keydown', function(event) {
    var keycaps = document.getElementsByClassName('keycaps');
    var capsLock = document.getElementById('capsLock');
    var keyPressed = event.key.toLowerCase();
    if (event.getModifierState("CapsLock")) {
        capsLock.style.display = 'block'
        console.log("Caps Lock está ativado");
    } else {
        capsLock.style.display = 'none'
        console.log("Caps Lock está desativado");
    }

    Array.from(keycaps).forEach(function(keycap) {
        if (keycap.textContent.toLowerCase() === keyPressed) {
            keycap.classList.add('active-keycap');
            setTimeout(function() {
                keycap.classList.remove('active-keycap');
            }, 200);
        }
    });
});

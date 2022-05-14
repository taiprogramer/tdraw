// Script for fullscreen mode
document.addEventListener('DOMContentLoaded', () => {
    // Add page loaded, check fullscreen state.
    let fullscreenMode = localStorage.getItem('fullscreen')
    if (fullscreenMode != null) {
        setFullScreen(fullscreenMode)
    }

    document.querySelector('#fullscreen').onchange = function () {
        // if checkbox is checked then hide the option form,
        // else display it.
        if (this.checked) {
            setFullScreen('true')
        } else {
            setFullScreen('false')
        }
    }

    function setFullScreen(mode) {
        if (mode == 'true') {
            document.querySelector('.form-inline').classList.add('collapse')
            // Save checkbox state to localStorage
            localStorage.setItem('fullscreen', 'true')
            // Update UI
            document.querySelector('#fullscreen').checked = true
        } else if (mode == 'false') {
            document.querySelector('.form-inline').classList.remove('collapse')
            localStorage.setItem('fullscreen', 'false')
            document.querySelector('#fullscreen').checked = false
        }
    }
})

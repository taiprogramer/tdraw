document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#takepicture').onclick = () => {
        const savepicturePanel = document.querySelector('#savepicture-panel')
        savepicturePanel.style.display = 'block'
    }
    document.querySelector('#screenshot').onclick = () => {
        let fileName = document.querySelector('#fileName').value
        if (fileName != '') {
            let commitFileName = fileName + '.png'
            if (document.querySelector('#transparent').checked) {
                saveSvgAsPng(document.querySelector('#draw'), commitFileName)
            } else {
                let bgColor = document.querySelector('#bgcolor-picker').value
                saveSvgAsPng(document.querySelector('#draw'), commitFileName, {
                    backgroundColor: bgColor,
                })
            }
            document.querySelector('#savepicture-panel').style.display = 'none'
        }
    }
    document.querySelector('#cancel-save').onclick = function () {
        this.parentElement.style.display = 'none'
    }
})

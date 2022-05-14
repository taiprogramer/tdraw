document.addEventListener('DOMContentLoaded', () => {
    getUserConfig()
    document.querySelector('#thickness-picker').onchange = storeUserConfig
    document.querySelector('#delaytime-picker').onchange = storeUserConfig
    document.querySelector('#color-picker').onchange = function () {
        storeUserConfig()
        const foreColor = this.value
        this.style.color = foreColor
    }
    document.querySelector('#bgcolor-picker').onchange = function () {
        storeUserConfig()
        const bgColor = this.value
        document.querySelector('#draw').style.backgroundColor = bgColor
        this.style.backgroundColor = bgColor
    }
    let command = ''
    document.addEventListener('keydown', (event) => {
        command += event.key
        if (command.length == 4) {
            switch (command) {
                case 'Altc':
                    document.querySelector('#commit').click()
                    break
                case 'Alts':
                    document.querySelector('#takepicture').click()
                    break
                case 'Altn':
                    document.querySelector('#erase').click()
                    break
                case 'Altx':
                    document.querySelector('#cancel-save').click()
                    break
            }
            command = ''
        } else if (command.length > 4) {
            command = ''
        }
    })
    document.addEventListener('keyup', (event) => {
        command = ''
    })
})

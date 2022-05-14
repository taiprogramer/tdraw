const colorDict = {
    red: 0,
    green: 1,
    blue: 2,
    yellow: 3,
    black: 4,
    white: 5,
    maroon: 6,
    olive: 7,
    lime: 8,
    aqua: 9,
    teal: 10,
    navy: 11,
    fuchsia: 12,
    purple: 13,
    silver: 14,
    gray: 15,
}
const thicknessDict = { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 7: 6, 8: 7 }
const timeDelayDict = { 10: 0, 50: 1, 100: 2, 200: 3 }
function getUserConfig() {
    let foreColorIndex = 4
    let bgColorIndex = 5
    let thicknessIndex = 2
    let timeDelayIndex = 1
    const userConfig = JSON.parse(localStorage.getItem('userConfig'))
    if (userConfig != null) {
        foreColorIndex = userConfig.foreColorIndex
        thicknessIndex = userConfig.thicknessIndex
        timeDelayIndex = userConfig.timeDelayIndex
        bgColorIndex = userConfig.bgColorIndex
        updateUI(foreColorIndex, thicknessIndex, timeDelayIndex, bgColorIndex)
    }
}
function storeUserConfig() {
    const foreColor = document.querySelector('#color-picker').value
    const thickness = document.querySelector('#thickness-picker').value
    const timeDelay = document.querySelector('#delaytime-picker').value
    const bgColor = document.querySelector('#bgcolor-picker').value
    const userConfig = {
        foreColorIndex: colorDict[foreColor],
        thicknessIndex: thicknessDict[thickness],
        timeDelayIndex: timeDelayDict[timeDelay],
        bgColorIndex: colorDict[bgColor],
    }
    localStorage.setItem('userConfig', JSON.stringify(userConfig))
}
function updateUI(
    foreColorIndex,
    thicknessIndex,
    timeDelayIndex,
    bgColorIndex
) {
    document.querySelector('#color-picker').getElementsByTagName('option')[
        foreColorIndex
    ].selected = 'selected'
    document.querySelector('#thickness-picker').getElementsByTagName('option')[
        thicknessIndex
    ].selected = 'selected'
    document.querySelector('#delaytime-picker').getElementsByTagName('option')[
        timeDelayIndex
    ].selected = 'selected'
    document.querySelector('#bgcolor-picker').getElementsByTagName('option')[
        bgColorIndex
    ].selected = 'selected'
    const foreColor = document
        .querySelector('#color-picker')
        .getElementsByTagName('option')[foreColorIndex].value
    const bgColor = document
        .querySelector('#bgcolor-picker')
        .getElementsByTagName('option')[bgColorIndex].value
    document.querySelector('#color-picker').style.color = foreColor
    document.querySelector('#bgcolor-picker').style.backgroundColor = bgColor
    document.querySelector('#draw').style.backgroundColor = bgColor
}

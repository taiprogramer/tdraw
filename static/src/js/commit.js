document.addEventListener('DOMContentLoaded', () => {
    getCommit()
    document.querySelector('#commit').onclick = () => {
        addCommit()
        showNotify('Commit successfully!')
    }
})
function addCommit() {
    let picture = document.querySelector('#draw').innerHTML
    document.querySelector('#erase').click()
    localStorage.setItem('picture', picture)
    getCommit()
}
function getCommit() {
    let picture = localStorage.getItem('picture')
    if (picture != null) document.querySelector('#draw').innerHTML = picture
}

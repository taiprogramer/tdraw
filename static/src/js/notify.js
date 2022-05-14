function showNotify(content) {
    const alertDiv = document.querySelector('.alert')
    alertDiv.innerHTML = content
    alertDiv.id = 'anim-notify'
    alertDiv.addEventListener('animationend', () => {
        alertDiv.id = 'default-notify'
    })
}

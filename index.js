window.addEventListener('mousemove', event => {
    console.log(event.pageX, event.pageY)
    const item = document.createElement('div')
    item.className = 'item'
    item.style.left = event.pageX - 40 + 'px'
    item.style.top = event.pageY - 40 +'px'
    document.body.appendChild(item)
    setTimeout(() => {
        item.remove()
    }, 2000);
})

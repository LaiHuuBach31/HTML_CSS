

var check = true
function onMenu() {
    if (check) {
        document.getElementById('menuFood_1024').classList.add('display_block')
        document.getElementById('menuFood_icon').classList.add('change-icon')
        check = false
    } else {
        document.getElementById('menuFood_1024').classList.remove('display_block')
        document.getElementById('menuFood_icon').classList.remove('change-icon')
        check = true
    }
}
function onNav() {

    document.getElementById('nav_1024').classList.add('onNav')
    document.getElementById('box_contentmenu').classList.add('onNav')
}
function closeNav() {
    document.getElementById('nav_1024').classList.remove('onNav')
    document.getElementById('box_contentmenu').classList.remove('onNav')

}
function onAbout() {
    if (check) {
        document.getElementById('about_1024').classList.add('display_block')
        document.getElementById('about_icon').classList.add('change-icon')
        check = false
    } else {
        document.getElementById('about_1024').classList.remove('display_block')
        document.getElementById('about_icon').classList.remove('change-icon')
        check = true
    }
}
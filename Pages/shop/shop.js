var check = true
function clickIcon() {
    if (check) {
        document.getElementById('icon').classList.add('change_icon')
        document.getElementById('filter').classList.add('none_sort')
        check = false
    } else {
        document.getElementById('icon').classList.remove('change_icon')
        document.getElementById('filter').classList.remove('none_sort')
        check = true
    }

}
function clickIcon1() {
    if (check) {
        document.getElementById('icon1').classList.add('change_icon')
        document.getElementById('menu_food').classList.add('none_sort')
        check = false
    } else {
        document.getElementById('icon1').classList.remove('change_icon')
        document.getElementById('menu_food').classList.remove('none_sort')
        check = true
    }

}
function clickIcon2() {
    if (check) {
        document.getElementById('icon2').classList.add('change_icon')
        document.getElementById('menu_drink').classList.add('none_sort')
        check = false
    } else {
        document.getElementById('icon2').classList.remove('change_icon')
        document.getElementById('menu_drink').classList.remove('none_sort')
        check = true
    }

}
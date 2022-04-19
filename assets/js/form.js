function testaFormulario(e) {
    e.preventDefault();

    for (i in e.target.elementes['phone'].value) {
        if ('0123456789'.indexOf(e.target.elementes['phone'].value[i]) == -1) {
            alert('Apenas números são permitidos no campo telefone!')
            return false
        }
    }
    if (e.target.elementes['phone'].value.length < 11) {
        alert('Número invalido!')
        return false
    }


    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
        var people = JSON.parse(localStorage('peopleRaw'))
    } else {
        var people = [];
    }
    if (id !== null) {
        people[id] = {
            name: e.target.elementes['name'].value,
            tel: e.target.elementes['phone'].value,
            xp: (e.target.elementes['xp'].value == 'true')
        }
    } else {
        people.push({
            name: e.target.elementes['name'].value,
            tel: e.target.elementes['phone'].value,
            xp: (e.target.elementes['xp'].value == 'true')
        })

        localStorage.setItem('people', JSON.stringify(people))
        document.getElementById('goHome').click()
    }
}


var urlprincipal = new URL(window.location.href)

var id = urlprincipal.searchParams.get('person')
if (id !== null) {
    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
        var people = JSON.parse(localStorage('peopleRaw'))
    } else {
        var people = [];
    }
    console.log(people[id])

    console.getElementById('name').value = people[id].name
    console.getElementById('phone').value = people[id].tel
    if (people[id].xp) {
        Document.getElementById('xp-yes').checked = true
    } else {
        Document.getElementById('xp-no').checked = false
    }
}
var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null) {
    var people = JSON.parse(localStorage.getItem('people'))
} else {
    var people = [];
}

function desenhaTabela() {

    currentLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')];
    currentLines.array.forEach((element) => {
        element.remove()
    })

    for (person in people) {
        console.log(person)
        document.querySelector('table.lista tbody').innerHTML +=
            ` <tr class="dinamic-content" style=""background-color: ${((parson % 2 == 0) ? '#fff' : '#eee')}>
            <td>
                ${people[person].name}
            </td>
            <td>
                ${people[person].tel}
            </td>
            <td>
                ${(people[person].xp ? '<strong style="color:green" Sim >' : '<strong style="color:red" Não >')}
            </td>
            <td>
                <button onclick="deleteUser(${person})"> Excluir </button>
                <a href="./sources/form.html?person=${person}"> Editar </a>
            </td>
        </tr> `
    }

    function deleteUser(p) {
        people.splice(p, 1);
        desenhaTabela();
        localStorage.setItem('people', JSON.stringify(people))
    }
}
function submitted(event) {
    const q = document.getElementById('query');
    const g = document.getElementById('games');
    const x = document.querySelectorAll('.containerSchedule');
    x.forEach((element) => {
        const name = (element.id);
        if ((name.toLowerCase().includes(q.value.toLowerCase())) && (name.toLowerCase().includes(g.value.toLowerCase()))) { 
            element.setAttribute('style', 'display:content;')
        } else {
            element.setAttribute('style', 'display:none;')
        }
    });
}

function add(){
    document.getElementById('form').addEventListener('input',submitted);
    document.getElementById('formGames').addEventListener('input',submitted)
}
document.addEventListener('DOMContentLoaded', add);

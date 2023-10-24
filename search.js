function submitted(event) {
    const q = document.getElementById('query');
    const x = document.querySelectorAll('.containerSchedule');
    x.forEach((element) => {
        const name = (element.id);
        if (name.toLowerCase().includes(q.value.toLowerCase())) {
            element.setAttribute('style', 'display:content;')
        } else {
            element.setAttribute('style', 'display:none;')
        }
    });
    
    const q = document.getElementById('games');
    const g = document.querySelectorAll('.game');
    g.forEach((element) => {
        const name = (element.value);
        if (name.toLowerCase().includes(q.value.toLowerCase())) {
            element.setAttribute('style', 'display:content;')
        } else {
            element.setAttribute('style', 'display:none;')
        }
    });
    

}

function add(){
    const f = document.getElementById('form');
    f.addEventListener('input',submitted);
}
document.addEventListener('DOMContentLoaded', add);

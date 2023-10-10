const f = document.getElementById('form');
const q = document.getElementById('query');
function submitted(event) {
    const x = document.querySelectorAll('.containerSchedule');
    x.forEach((element) => {
        const name = (element.id);
        if (!name.toLowerCase().includes(q.value.toLowerCase())) {
            element.setAttribute('style', 'display:none;')
        } else {
            element.setAttribute('style', 'display:content;')
        }
    });

}

function add(){
    const f = document.getElementById('form');
    const q = document.getElementById('query');
    f.addEventListener('input',submitted);
}
document.addEventListener('DOMContentLoaded', add);

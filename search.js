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
    f.addEventListener('input',submitted);
}
document.addEventListener('DOMContentLoaded', add);

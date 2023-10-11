function update(){
    const q = document.querySelectorAll('.leaderboard')
    const game = document.getElementById('games');
    const div = document.getElementById('divisions');
    const regions = document.getElementById('regions');
    const x = (game.value+div.value+regions.value);
    q.forEach((element) => {
        if(element.className.replace('leaderboard ','') === x){
            element.style = 'display: content;'
        }
        else{
            element.style = 'display: none;'
        }
    });
}
function add(){
    document.getElementById('games').addEventListener('input',update);
    document.getElementById('divisions').addEventListener('input',update);
    document.getElementById('regions').addEventListener('input',update);
}

document.addEventListener('DOMContentLoaded', add);

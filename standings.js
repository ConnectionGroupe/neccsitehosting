function update(){
    const game = document.getElementById('games');
    const div = document.getElementById('divisions');
    const regions = document.getElementById('regions');
    const comp_stag = (game.value+div.value+regions.value);
    document.querySelectorAll('.leaderboard').forEach((element) => {
        if(element.className.replace('leaderboard ','') === comp_stag){
            element.style = 'display: content;'
        }
        else{
            element.style = 'display: none;'
        }
    });

    document.querySelectorAll(".dp").forEach((element) => {
        if(element.className === game.value+' dp'){
            element.style = 'display: content;'

        }
        else{

            element.style = 'display: none;'
        }
    });

    document.querySelectorAll(".dp").forEach((element) => {
        if(element.className === game.value+div.value+' dp'){
            element.style = 'display: content;'

        }
        else{
            element.style = 'display: none;'
        }
    });
}

function add(){
    document.getElementById('games').addEventListener('input',fix);
    document.getElementById('divisions').addEventListener('input',update);
    document.getElementById('regions').addEventListener('input',update);
}

function fix(){
    document.getElementById('divisions').selectedIndex=0
    document.getElementById('regions').selectedIndex=0
    update()
}

document.addEventListener('DOMContentLoaded', add);

function formatEpochTime(epochTime) {
    const date = new Date(epochTime * 1000);
    const offset = (date.getTimezoneOffset() / 60);
    const hours = ((date.getHours()+5-offset).toString().padStart(2, '0')) ;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    if (hours > 12) {
        return `${hours % 12 === 0 ? 12 : hours % 12}:${minutes} PM`;
    }
    else {
        return `${hours % 12 === 0 ? 11 : hours % 12}:${minutes} AM`;
    }
}
function updateClassDate() {
    const classDateElements = document.querySelectorAll('.dateTime');

    classDateElements.forEach((element) => {
        const epochTime = parseInt(element.textContent);
        if (!isNaN(epochTime)) {
            element.textContent = formatEpochTime(epochTime);
        }
    });
}
document.addEventListener('DOMContentLoaded', updateClassDate);


window.onscroll = function() {stickFunc()};

var navbar = document.getElementById("topSchedule");

var sticky = navbar.offsetTop;

function stickFunc() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

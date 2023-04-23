function currentTime() {
    const clockFace = {
        1: { full: "🕐", half: "🕜" },
        2: { full: "🕑", half: "🕝" },
        3: { full: "🕒", half: "🕞" },
        4: { full: "🕓", half: "🕟" },
        5: { full: "🕔", half: "🕠" },
        6: { full: "🕕", half: "🕡" },
        7: { full: "🕖", half: "🕢" },
        8: { full: "🕗", half: "🕣" },
        9: { full: "🕘", half: "🕤" },
        10: { full: "🕙", half: "🕥" },
        11: { full: "🕚", half: "🕦" },
        12: { full: "🕛", half: "🕧" }
    };

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours === 0) {
        hours = 12;
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    let clockElement = document.getElementById("clock");

    if (minutes < 30) {
        clockElement.innerText = clockFace[hours].full;
    } else {
        clockElement.innerText = clockFace[hours].half;
    }

    let timeout = setTimeout(function () {
        currentTime();
    }, 1000);
}

currentTime();

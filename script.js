const endDate = "04 December 2024 12:00 PM" ;

document.getElementById("endDate").innerHTML = endDate;
const inputs= document.querySelectorAll("input")

/* DATE OBJECTS */

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    console.log(end , now)
    const diff = (end - now)/1000;

    if (diff <0)
        return;

    console.log(diff);
    inputs[0].value = (Math.floor(diff/3600/24));
    inputs[1].value = (Math.floor(diff/3600) % 24);
    inputs[2].value = (Math.floor(diff/3600) % 60);
    inputs[3].value = (Math.floor(diff%60));
    // convert this diff ms into days
}

clock();
setInterval(
    ()=>{
        clock();
    },1000
)

// 1 day = 24 hrs
// 1 hrs = 60 minutes
// 60 minutes = 3600 seconds
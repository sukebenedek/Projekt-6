var listeners = {};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function toTransparent(element){
    //0-90
    //document.getElementById("HoldTXT").style.color = "#F0F8FF";
    
    
    element.addEventListener('mouseover', function(event){
        listeners[`${element}`] = true
    });
    
    element.addEventListener('mouseleave', function(event){
        listeners[`${element}`] = false
    });
}

async function troll() {
    return
    random = Math.random();
    console.log(random);
    while (random > 0.1) {
        console.log(random)
        random = Math.random();
        await sleep(1000)
    };
    console.log("xd");
    alert("ACHTUNG!");
}


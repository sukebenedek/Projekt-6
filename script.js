function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
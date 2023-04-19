var listeners = [];
var framesOfAnimation = 24;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*function sinColorInfection(color,step){
    color = color.substring(1);
    //white -> black color = "#FF FF FF"
    console.log(color)
    
    let NewColor = "";
    for (let i = 0; i < 3; i++) {
        let colorToConvert = color.length > 2 ? color.substring(i,i+2) : color;

        let colorToConvertInt = parseInt(colorToConvert,16)

        //convertedColor = Math.sin((step/framesOfAnimation)*Math.PI/2)*colorToConvertInt
        convertedColor = Math.sin((step/framesOfAnimation)*Math.PI/2)*colorToConvertInt
        convertedColor = Math.floor(convertedColor)

        NewColor = NewColor + convertedColor.toString(16);
        color = color.substring(2);
    };

    console.log("xd",NewColor)
    return "#" + NewColor;
}*/

function sinColorInfection(color,step,ToAppear){
    color = color.substring(1);
    //console.log(color)
    
    let NewColor = color.substring(0,6);
    let colorToConvert = color.length > 6 ? color.substring(6) : "FF";

    let colorToConvertInt = parseInt(colorToConvert,16)

    //convertedColor = Math.sin((step/framesOfAnimation)*Math.PI/2)*colorToConvertInt
    convertedColor = Math.sin((step/framesOfAnimation)*Math.PI/2)*colorToConvertInt
    if (convertedColor >= 253.5){
        convertedColor = 255;
    }
    convertedColor = Math.floor(convertedColor)

    if(!ToAppear){
        convertedColor = 255 - convertedColor
    }

    if (convertedColor < 10){
        NewColor = NewColor + "0" + convertedColor
    }
    else{
        NewColor = NewColor + convertedColor.toString(16);
    }

    color = color.substring(2);

    //console.log(NewColor)
    return "#" + NewColor;
}



async function transparentAnimation(element){ //fícsör, hogy vibrál a szín xd
    /*while(listeners.includes(element)){
        
        await sleep(0.1)
    }*/
    for (let j = 0; j <= framesOfAnimation; j++) {
        if (!listeners.includes(element)){
            break
        }
        element.style.color = sinColorInfection("#FFFFFF",j,false)
        
        await sleep(10)
    }
    for (let j = 0; j <= framesOfAnimation; j++) {
        element.style.color = sinColorInfection("#FFFFFF",j,true)
        
        await sleep(10)
    }
    
    //element.style.color = "#111111"
    //sinColorInfection("#FFFFFF",10)
    return
}

async function toTransparent(element){
    //0-90
    //document.getElementById("HoldTXT").style.color = "#F0F8FF";
    
    element.addEventListener('mouseover', function(event){
        listeners.push(element);
        transparentAnimation(element);
    });
    
    element.addEventListener('mouseleave', function(event){
        index = listeners.indexOf(element);
        listeners.splice(index,1);
    });

    listeners.push(element);
    transparentAnimation(element);
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


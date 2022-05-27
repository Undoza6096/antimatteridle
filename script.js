let antimatter = 100000000000;
let antimattergenerator1 = 0;
let cost1 = 10;
let mulitiplergenerator1 = 0.5;
let antimattergenerator2 = 0;
let cost2 = 100;
let mulitiplergenerator2 = 0.5;
let antimattergenerator3 = 0;
let cost3 = 1000000;
let mulitiplergenerator3 = 0.5;

document.getElementById('tickGame').onclick = () => {
    antimatter = antimatter + antimattergenerator1 * mulitiplergenerator1;
    document.getElementById('antimatter').innerText = "You Have " + antimatter + " Antimatter.";
    if (antimattergenerator2 > 0) {
        antimattergenerator1 = antimattergenerator1 + antimattergenerator2 * mulitiplergenerator2
        document.getElementById('geneartor1').innerText = antimattergenerator1;
    }
    if (antimattergenerator3 > 0) {
        antimattergenerator2 = antimattergenerator2 + antimattergenerator3 * mulitiplergenerator3
        document.getElementById('geneartor2').innerText = antimattergenerator2;
    }
    
};

document.getElementById('achievement1').onclick = () => {
    alert("Reach 1 AG1.")
};

document.getElementById('achievement2').onclick = () => {
    alert("Reach 100 antimatter.")
};

document.getElementById('title').onclick = () => {
    document.getElementById('titleget').innerText = "Antimatter Idle:" + antimatter;
};

document.getElementById('cost1').onclick = () => {
    if (antimatter > (cost1) - 1) {
        antimatter = antimatter - cost1;
        antimattergenerator1 = antimattergenerator1 + 1;
        mulitiplergenerator1 = mulitiplergenerator1 * 2;
        cost1 = cost1 * 1000
        document.getElementById('cost1').innerText = "Cost:" + cost1;
        document.getElementById('geneartor1').innerText = antimattergenerator1;
    }
}

document.getElementById('cost2').onclick = () => {
    if (antimatter > (cost2) - 1) {
        antimatter = antimatter - cost2;
        antimattergenerator2 = antimattergenerator2 + 1;
        mulitiplergenerator2 = mulitiplergenerator2 * 2;
        cost2 = cost2 * 100
        document.getElementById('cost2').innerText = "Cost:" + cost2;
        document.getElementById('geneartor2').innerText = antimattergenerator2;
    }
}

document.getElementById('cost3').onclick = () => {
    if (antimatter > (cost3) - 1) {
        antimatter = antimatter - cost3;
        antimattergenerator3 = antimattergenerator3 + 1;
        mulitiplergenerator3 = mulitiplergenerator3 * 2;
        cost3 = cost3 * 10000
        document.getElementById('cost3').innerText = "Cost:" + cost3;
        document.getElementById('geneartor3').innerText = antimattergenerator3;
    }
}

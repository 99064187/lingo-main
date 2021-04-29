var container2=document.getElementById("container2");
var button=document.getElementById("button");
var randomWoord;
var woordletters=[];
var inputletters=[];
var pogingen=0;
var woordletterskopie=[];
for(var j=1; j<=5; j++){
	for(var i=1; i<=5; i++){
		var block= document.createElement("div");
		container2.appendChild(block);
		block.id= "woord" + j + "letter" +i;
	}
}

function random(){
	randomWoord=words[Math.floor (Math.random()*words.length)];
	console.log(randomWoord);
}

function eersteLetter(){
	var block1=document.getElementById("woord1letter1").innerHTML="<h1></h1>"+randomWoord[0];
}

function woordSplit(woord){
	woordletters = randomWoord.split("");
    for(var i=0;i<randomWoord.length;i++)
	woordletterskopie= woordletters.slice(0,5);
	console.log(woordletterskopie);
	inputletters=woord.split("");
	for(var i=0; i<woord.length; i++){
		console.log(inputletters[i]);
	}
}

function woordCheck(woord){
    pogingen++
    woordSplit(woord);
    if(pogingen>=5){
        alert("verloren teveel pogingen");
        location.reload();
    }
    if(woord==randomWoord){
        alert("goed geraden");
        location.reload();
    }


    //woordSplit(woord);
    for(var i=0; i<inputletters.length; i++){
        document.getElementById("woord" + pogingen + "letter" +(i+1)).innerHTML="<h1></h1>"+ inputletters[i];

        if(inputletters.includes(woordletters[i])){
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.backgroundColor="yellow";
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.borderRadius="50%";
            console.log(woordletters[i] + "geel");
            woordletters[i] = "";
        }
    }


    for(var i=0; i<inputletters.length; i++){
        document.getElementById("woord" + pogingen + "letter" +(i+1)).innerHTML="<h1></h1>"+ inputletters[i];

        if(inputletters[i] == woordletters[i]){
            document.getElementById("woord" + pogingen + "letter" +(i+1)).style.backgroundColor="green";
            console.log(woordletters[i]);
            console.log(woordletters[i] + "groen");
        }
        woordletters[i] = null;
    }

    


}
random();
eersteLetter();

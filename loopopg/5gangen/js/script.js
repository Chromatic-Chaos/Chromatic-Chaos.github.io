function gangmed(){
        tal1=
        document.getElementById("tall1").value;
        tal2=
        document.getElementById("tall2").value;
    
        document.getElementById("resultat").innerHTML = tal1*tal2;
        }
function delmed(){
    tal1=
    document.getElementById("tall1").value;        
    tal2=
    document.getElementById("tall2").value;
    document.getElementById("resultat").innerHTML = tal1/tal2;
}
function minus(){
    tal1=
    document.getElementById("tall1").value;        
    tal2=
    document.getElementById("tall2").value;
    document.getElementById("resultat").innerHTML = tal1-tal2;
}

isNaN()


//Det som er under er mislykkete forsøk på å få addering til å fungere. Jeg har ingen aning hvorfor det ikke fungerer


function minus(){
    tal1=
    document.getElementById("tall1").value;        
    tal2=
    document.getElementById("tall2").value;
    document.getElementById("resultat").innerHTML = tal1+tal2;
}

function plus(a,b){ 
    a=document.getElementById("tall1").value;
    b=document.getElementById("tall2").value;
    return a + b ; document.getElementById("resultat").innerHTML
}
/*
    liste=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    for (i =0; i < liste.length; i++){
        tall=liste[i]*5;
        console.log(tall);
}*/

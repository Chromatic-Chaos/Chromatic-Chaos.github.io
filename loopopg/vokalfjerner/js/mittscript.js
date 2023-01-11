function fjernVokal(str){
    let modifisertstreng = "";
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] !=="a" &&
            str[i] !=="e" &&
            str[i] !=="i" &&
            str[i] !=="o" &&
            str[i] !=="u" &&
            str[i] !=="y" 
        ) {
            modifisertstreng += str[i]
        }
    }
    return modifisertstreng;
}
console.log(fjernVokal("en setning som skal endres.")) 


function fjernVokal(str){
    vokaler = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"]
    let modifisertstreng = "";
    for (let i = 0; i < str.length; i++) {
        if (!vokaler.includes(str[i]))  {
            modifisertstreng += str[i]
        }
    }
    return modifisertstreng;
}
console.log(fjernVokal("en setning som skal endres.")) 

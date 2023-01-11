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
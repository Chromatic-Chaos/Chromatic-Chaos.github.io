const str =["en streng med tekst hvor vokalene skal fjernes."]

for(let i = 0; i < str.length; i++){
    const tom = str.replace(/[aeiou]/gi,'')
}


console.log(tom);

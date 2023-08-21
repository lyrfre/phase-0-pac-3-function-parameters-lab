function introduction(name) {
    return `Hi, my name is ${name}.`
}

function introductionWithLanguage(name, language) {
    return`Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional(name,language) {
    let lang

    if (language === undefined) {
        lang = "JavaScript"
    } else {
        lang = language 
    }
    // switch (language){
    //     case language :
    //         lang = language
    //         break
    //     default:
    //         lang = "JavaScript"
    //         break
    // }

    let intro = `Hi, my name is ${name} and I am learning to program in ${lang}.`
    return intro
}

console.log(introductionWithLanguageOptional("Gracie", ))
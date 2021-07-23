function introduction(name) {
    return `Hi, my name is ${name}.`;
} 
/*console.log(introduction("Nancy"));
console.log(introduction("Josh"));*/

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
//console.log(introductionWithLanguage("Nancy", "React"));


function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
//console.log(introductionWithLanguageOptional("Nancy"));

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
//console.log(introductionWithLanguageOptional("Nancy"));
//console.log(introductionWithLanguageOptional("Nancy", "React"));
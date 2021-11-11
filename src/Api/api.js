export default function dictionaryApi(lan,word){
    return `https://api.dictionaryapi.dev/api/v2/entries/${lan}/${word}`
}
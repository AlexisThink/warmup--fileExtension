function getFileExtension(string){
var newArray = string.split(".");
var sizeArray = newArray.length;

if (newArray.length >= 2){
    return newArray[sizeArray-1]
} else {
    return "NOT VALID"
}
}



console.assert(getFileExtension("logos.sketch") === "sketch")
console.assert(getFileExtension("avatar.png") === "png")
console.assert(getFileExtension("noextension") === "NOT VALID")
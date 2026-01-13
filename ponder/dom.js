
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    if (codeValue == "html") {
        console.log("detected html");
        document.getElementById("topics").innerHTML = "html"
    } else if (codeValue == "css") {
        console.log("detected css");
        document.getElementById("topics").innerHTML = "css"
    } else if (codeValue == "js") {
        console.log("detected javascript")
        document.getElementById("topics").innerHTML = "js"
    }
})
                
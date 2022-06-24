window.onload = function() {
    fetch("website_text.json")
    .then(response => response.json())
    .then(data => dataReady(data))
}

function dataReady(data) {
    console.log(data);
    document.querySelector("#short-txt").innerHTML = data.section1;
    document.querySelector(".zbinv").innerHTML = data.section2.p1;
    document.querySelector(".zbinv").innerHTML = data.section2.p1;
    document.querySelector(".celtext > h4").innerHTML = data.section3.celtext;
    
    

    
}
const image = document.getElementById("appear");

function show(){
    //show on click
    // image.style.display = "block";

    //toggle back and forth
    if(image.style.display === "none"){
        image.style.display = "block";
    } else {
        image.style.display = "none"
    }
}
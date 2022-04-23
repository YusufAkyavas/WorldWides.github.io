var coll = document.getElementsByClassName("collapsible"); //turns the element of the collapsible object to a variable
var i; //initalises the variable i

for (i = 0; i < coll.length; i++) { //for loop to check if the length is above 0
    coll[i].addEventListener("click", function() { //creates event listener to use the for loop
        this.classList.toggle("active");
        var collapsiblecontent = this.nextElementSibling; //brings the collapsed content to the next element aka the non collapsed
        if (collapsiblecontent.style.display === "block") { // formatting from here on
            collapsiblecontent.style.display = "none";
        } else {
            collapsiblecontent.style.display = "block";
        }
    });
}
//basically stolen from https://www.w3schools.com/howto/howto_js_collapsible.asp

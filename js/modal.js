// blog filling
var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
"Non exercitationem suscipit alias consequuntur iusto autem " +
"dolor vel iste officia harum pariatur hic, qui accusamus dolores! " +
"Eveniet odio saepe sapiente soluta! "

// put in some filling, and again, and again...
document.getElementById("first").innerHTML = str.repeat(8);  
document.getElementById("second").innerHTML = str.repeat(9);
document.getElementById("third").innerHTML = str.repeat(9);

// a few lines for zooming the picture. Design in modal.css
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
modal.style.display = "block";
modalImg.src = this.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}
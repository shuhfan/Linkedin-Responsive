// function myFunction(){
//     var moreText = document.getElementById("more")
//     var btnText = document.getElementById("myBtn");

//     if (moreText.style.display === none) 
//       {
//         btnText.innerHTML = "Read less"; 
//         moreText.style.display = "inline";
//       } else {
//         moreText.style.display = none;
//         btnText.innerHTML = "Read more"; 
//       }
// }

function myFunction() {
    // var x = document.getElementById("more");
    if (more.style.display === "none") {
      more.style.display = "inline";
      myBtn.innerHTML = "show less"
    } else {
      more.style.display = "none";
      myBtn.innerHTML = "show more"
    }
  }
  


$(document).ready(function(){
    $("#signin-form").validate({
        rules:{
            id:{
                required: true,
                minlength:4
            },
            pass:{
                required: true,
                minlength:6
            }
        },
    })
})
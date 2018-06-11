// Validating Empty Field
function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
document.getElementById('inputID').style.display = "none";

}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
document.getElementById('inputID').style.display = "block";
    
}
function setImg (){
    document.getElementById('imgSource').src="../Navbar_Pictures/arrow_white.png";    
}
function retImg(){
    
    document.getElementById('imgSource').src="../Navbar_Pictures/arrow_orange.png";
    
}



function setImg2 (){
    document.getElementById('us2ImgSource').src="../Navbar_Pictures/arrow_white.png";    
}
function retImg2(){
    
    document.getElementById('us2ImgSource').src="../Navbar_Pictures/arrow_orange.png";
    
}



function setImg3 (){
    document.getElementById('us3ImgSource').src="../Navbar_Pictures/arrow_white.png";    
}
function retImg3(){
    
    document.getElementById('us3ImgSource').src="../Navbar_Pictures/arrow_orange.png";
    
}




function setImg4(){
    document.getElementById('us4ImgSource').src="../Navbar_Pictures/arrow_white.png";    
}
function retImg4(){
    
    document.getElementById('us4ImgSource').src="../Navbar_Pictures/arrow_orange.png";
    
}





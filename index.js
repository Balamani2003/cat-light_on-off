function switchoff(){
    document.getElementById("off-bulb").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-eye").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent="Switched off";
    document.getElementById("off").style.backgroundColor="grey";
    document.getElementById("on").style.backgroundColor="green";
 

}
function switchon(){
    document.getElementById("off-bulb").src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-eye").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent="Switched on";
    document.getElementById("on").style.backgroundColor="grey";
    document.getElementById("off").style.backgroundColor="red";
    
}
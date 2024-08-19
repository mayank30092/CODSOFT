var icon = document.getElementByIdName("icon");

 icon.onClick = function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.toggle("dark")){
        icon.src ="sun.png";
    }else{
        icon.src="moon.png";
    }
 }
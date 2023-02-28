let menubtn = document.getElementById("wrap-menu");
console.log(menubtn)
let navitem = document.getElementById("navitem");
let innerconatiner= document.getElementById("innercontainer");

menubtn.addEventListener("click",()=>{
    if(navitem.style.display!='none'){
        navitem.style.display='none';
        innerconatiner.style.display='none';
    }
    else{
        navitem.style.display='block';
        innerconatiner.style.display='block';
        innerconatiner.style.flexDirection="row";
    }
})
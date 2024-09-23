window.onload=function(){
    const accountMenu=document.getElementById("account");
    accountMenu.onmouseover=()=>{
        const dropdown=document.getElementById("account-menu");
        dropdown.style.display="flex";
    }

    // accountMenu.onmouseout=(e)=>{
        
    //     const dropdown=document.getElementById("account-menu");
    //     dropdown.style.display="none";
    // }

    //Open carts
    const cartBtn=document.getElementById("cart");
    cartBtn.onclick=()=>{
        const overlay=document.getElementById("cart-overlay");
        const carList=document.getElementById("cart-list");
          overlay.style.display="block";  
          carList.style.animation="cartlist 0.4s linear forwards"; 
    }

    const closeCart=document.getElementById("close-cart");
    closeCart.onclick=()=>{
        const cartList=document.getElementById("cart-list");
        cartList.style.animation="cartlistclose 0.4s linear forwards"; 
        const overlay=document.getElementById("cart-overlay");
        setTimeout(()=>{
            overlay.style.display="none";
        },400)
    }

    //Increase and decrease qnt
    const increaseQnt=document.getElementsByClassName("increase-qnt");
    for(let btn of increaseQnt){ 
        btn.onclick=()=>{
            const div=btn.parentElement;
            const label=div.getElementsByClassName("qnt")[0];
            const text=Number(label.innerHTML);
            label.innerHTML=text+1;
        }
    }

    const decreaseQnt=document.getElementsByClassName("decrease-qnt");
    for(let btn of decreaseQnt){
        btn.onclick=()=>{
            const div=btn.parentElement;
            const label=div.getElementsByClassName("qnt")[0];
            const text=Number(label.innerHTML);
            if(text != 0) label.innerHTML=text-1;
        }
    }

    setInterval(()=>{
        const time = new Date().toLocaleTimeString('en-US', { hour12: false }).split(":");
        const hour=document.getElementById("hour");
        const minute=document.getElementById("minute");
        const second=document.getElementById("second");
        hour.innerHTML=time[0];
        minute.innerHTML=time[1];
        second.innerHTML=time[2];
    },1000)

}
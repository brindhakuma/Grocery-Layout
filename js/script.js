
 const eleven = document.getElementById("roja");
    const roja = document.getElementById("counting");
    eleven.addEventListener("click",function(){
       if(roja.style.display === "block"){
            roja.style.display = "none";
       }else{
            roja.style.display = "block";
       }
    })


    //  const heat = document.querySelectorAll(".granules");
    // heat.forEach((item)=>{
    //     item.addEventListener("click",function(){
    //         if(item.src.includes("30")){
    //             item.src="images/icons8-heart-31.png";
    //         }else{
    //             item.src="images/icons8-heart-30.png";
    //         }
    //     })
    // })

    const loved = document.getElementById("loved");
    loved.addEventListener("click",function(){
        loved.value = "Brownie Birthday Cake"
    })

     const action = document.getElementById("action");
const rely = document.getElementById("rely");
const closeRely = document.getElementById("closeRely");

action.addEventListener("click", (e) => {
    e.stopPropagation();      // prevents auto close
    rely.style.display = "block";
});

closeRely.addEventListener("click", () => {
    rely.style.display = "none";
});

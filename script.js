const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")
let second = 0
let minute = 0
let intervl = null
start.addEventListener("click",()=>{
    if(intervl===null){
        intervl=setInterval(() => {
            second+=1
            if(second<10){
                sec.textContent = "0" + second
            }
            else{
                sec.textContent = second;
            }
            if(second==60){
                minute+=1
                if(minute<10)min.textContent = "0"+minute
                else min.textContent=minute
                second = 0;
                sec.textContent = "00";
            }
            
    
        },1000);
    }
    
});
stop.addEventListener("click",()=>{
     if(intervl!==null){
        clearInterval(intervl);
        intervl=null
     }
});

reset.addEventListener("click",()=>{
    if(intervl!==null){
        clearInterval(intervl);
        intervl=null
     }
     second = 0;
     minute = 0;
     sec.textContent="00";
     min.textContent="00";
})


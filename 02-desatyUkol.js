
let buttonD = document.querySelectorAll(".buttonDabel");
let textDabel = document.querySelector(".dabel");

let promena = true;

buttonD.forEach(button => {
    button.addEventListener("click",  (e) => {
        document.body.style.backgroundImage = "url('./image/dabel.jpg')" ;
        
            if(promena) { 
            let originalTextDabel = textDabel.innerText; 
            let textJezisek = document.querySelector(".jezisek");
            textDabel.innerText = textJezisek.innerText; 
            textJezisek.innerText = originalTextDabel; 
            promena = false
            }else {

            }

    });
 
});



let buttonJ = document.querySelectorAll(".buttonJezisek");
let textJezisek = document.querySelector(".jezisek");

buttonJ.forEach(button => {
    button.addEventListener("click", (e) => {
        document.body.style.backgroundImage = "url('./image/jezisek.jpg')"

            if(promena === false) { 
            let originalTextJ = textJezisek.innerText; 
            let textDabel = document.querySelector(".dabel");
            textJezisek.innerText = textDabel.innerText; 
            textDabel.innerText = originalTextJ; 
            promena = true    
        }


    });
});



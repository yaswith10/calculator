let buttons = document.getElementsByTagName("button");
let clickAudio = new Audio("click.wav");
let str = "";
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",()=>{
        clickAudio.play();
        if(button.innerHTML == "AC"){
            str = "";
            console.log(str);
            document.querySelector("input").value = str;
        }
        else if(button.innerHTML == "DEL"){
            str = str.slice(0,str.length-1);
            document.querySelector("input").value = str;
        }
        else if(button.innerHTML == "="){
            try {
                str = eval(str);
                console.log(str);
                document.querySelector("input").value = str;
            } catch (error) {
                document.querySelector("input").value = "Invalid format";
            }  
        }
        else if(button.innerHTML == "^"){
            str = str + '**';
            console.log(str);
            document.querySelector("input").value = str;
        }
        
        // else if(button.innerHTML == "()"){
        //     let brace = '*(';
        //     for(let i = 0; i<str.length;i++){
        //         if(str.charAt(i) == '(') brace = ')*';
        //         if(str.charAt(i) == ')') brace = '*(';
        //     }
        //     str = str + brace;
        //     document.querySelector("input").value = str;
        // }
        else{
            str = str + button.innerHTML;
            console.log(str);
            document.querySelector("input").value = str;
        }
        
    })
})
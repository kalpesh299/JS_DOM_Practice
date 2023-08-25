const selectedoption=document.getElementById("style_option");

const main=document.querySelector(".main");


selectedoption.addEventListener("change",()=>{
let prop=selectedoption.value;

switch(prop){
    case "color" :
        main.style.color="red";
        break;
    case "backgroundColor":
        main.style.backgroundColor="blue";
        break;
        case "Padding":
            main.style.Padding="10px"; 
            break;
            case "fontSize":
                main.style.fontSize="80px";
                break;
                case "fontWeight":
                    main.style.fontWeight="100";
                    break;
}


})



let show=document.querySelector("#show");
let showbmi=document.querySelector("#showbmi");
let inpheart=document.querySelector("#inpheart").value;
let inpheart1=document.querySelector("#inpheart1").value;
let showbp=document.querySelector("#showbp");


let formfilll=()=>{
    let inpname=document.querySelector("#inpname").value;
    let inpage=document.querySelector("#inpage").value;
    let inpweight=document.querySelector("#inpweight").value;
    let inpheight=document.querySelector("#inpweight").value;
    let inpsugar=document.querySelector("#inpsugar").value;
    let inpheart=document.querySelector("#inpheart").value;
    let inpheart1=document.querySelector("#inpheart1").value;

    let errname=document.querySelector("#errname");
    let errage=document.querySelector("#errage");
    let errweight=document.querySelector("#errweight");
    let errheight=document.querySelector("#errheight");
    let errsugar=document.querySelector("#errsugar");
    let errheart=document.querySelector("#errheart");
    let errheart1=document.querySelector("#errheart1");



    if(inpname==""){
        errname.innerHTML="This field must be filled";
        return false;
    }
    
    if(inpage==""){
        errage.innerHTML="This field must be filled";
        return false;
    }
    if(inpweight==""){
        errweight.innerHTML="This field must be filled";
        return false;
    }
    if(inpheight==""){
        errheight.innerHTML="This field must be filled";
        return false;
    }
    if(inpsugar==""){
        errsugar.innerHTML="This field must be filled";
        return false;
    }
    if(inpheart==""){
        errheart.innerHTML="This field must be filled";
        return false;
    }
    if(inpheart1==""){
        errheart1.innerHTML="This field must be filled";
        return false;
    }
    




    location.href="ShowFitness.html";
return false;
   
    
}


// For BMI 

let bmi=()=>{
    let inpweight=document.querySelector("#inpweight").value; 
    let inpheight=document.querySelector("#inpheight").value; 
    let show=document.querySelector("#show");
    let showbmi=document.querySelector("#showbmi");

    showbmi.innerHTML= `BMI= ${(inpweight/(inpheight*inpheight))}`
    let bmi=(inpweight/(inpheight*inpheight));

    if(inpweight=="" && inpheight==""){
        show.innerHTML="Please enter your height and weight.";
        showbmi.innerHTM="";
    }
    else if(bmi<=18.5){
        show.innerHTML="You are underweight";
        showdia.innerHTML="";
        showbp.innerHTML="";
    }
    else if(bmi <=18.5 && bmi<=24.9){
        show.innerHTML="You are healthy";
        showdia.innerHTML="";
        showbp.innerHTML="";
    }
    else if(bmi <=25 && bmi<=29.9){
        show.innerHTML="You are overweight";
        showdia.innerHTML="";
        showbp.innerHTML="";
    }


   

  

    return false;
    
}



 // For Insulin level 

let sugar=()=>{
    let inpsugar=document.querySelector("#inpsugar").value;
    let showdia=document.querySelector("#showdia");

    if(inpsugar==""){
        showdia.innerHTML="Please enter insulin level.";
    }
    else if(inpsugar<=70){

        showdia.innerHTML="Sugar level is low";
        showbmi.innerHTML= "";
        show.innerHTML= "";
        showbp.innerHTML="";

        }

    else if(inpsugar<=140 && inpsugar>=70){

    showdia.innerHTML="Sugar level is normal";
    showbmi.innerHTML= "";
    show.innerHTML= "";
    showbp.innerHTML="";

    }
    else if(inpsugar>=140){
        showdia.innerHTML="Sugar level is high";
        showbmi.innerHTML= "";
        show.innerHTML= "";
        showbp.innerHTML="";
    }

    return false;
}




//For Blood Pressure

let cbp=()=>{

    let inpheart=document.querySelector("#inpheart").value;
    let inpheart1=document.querySelector("#inpheart1").value;

    if(inpheart==""){
        showbp.innerHTML="Please enter your blood pressure.";
    }
    else if(inpheart<=120 && inpheart1<=80){
        showbp.innerHTML="You are healthy";
        showbmi.innerHTML= "";
        showdia.innerHTML= "";
        show.innerHTML= "";
    }
    else if(inpheart>=120 && inpheart1>=80){
        showbp.innerHTML="You have hypertension";
        showbmi.innerHTML= "";
        showdia.innerHTML= "";
        show.innerHTML= "";
        
  
    }









    return false;
}



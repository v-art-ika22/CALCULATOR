function addvalue(val){
    document.getElementById("display").value+=val;
    changeButton();
}
function clearDisplay(){
      document.getElementById("display").value="";
      changeButton();

}
function calculate(){
    try{
        let result = eval(document.getElementById("display").value);
        if(isNaN(result)){
            throw "Invalid Expression";
        }
        document.getElementById("display").value = result;
    }
    catch{
        alert("Invalid Expression");
        document.getElementById("display").value = "";
    }
    
}

function deleteValueLast(){
    document.getElementById("display").value=document.getElementById("display").value.slice(0,-1);
    changeButton();
}
document.querySelector("input").oninput= changeButton;
/*function changeButton(){
    document.querySelector(".btn").textContent="X";

}*/
function changeButton() {
    let display = document.getElementById("display").value;

    if(display.length > 0){
        document.querySelector(".btn").textContent = "X";
       
    } else {
        document.querySelector(".btn").textContent = "C";
         
     

}

    }

document.querySelector(".btn").addEventListener("click", () => {
   if( document.querySelector(".btn").textContent === "X")  {
  
        deleteValueLast()

    }else { 
        clearDisplay()

    };
})
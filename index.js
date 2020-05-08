var fruits = ['mangue','raisin','figue','kiwi'];
var fruits = document.getElementById("store").innerHTML=fruits;


function myFonction() {
    var result = false;
    var fruit = document.getElementById("check").value;
    for (i = 0 ; i < fruits.length; i++ ){
    
        if (fruit == fruits[i]) {
            console.log("fruits "+fruits[i]);
            console.log("fruit "+fruit);
             result=true;
             fruits.splice(i,1);
        }
    }

    if (result==true){
        alert("Ok!");

    }else {
        alert("Indisponible");
    }

    document.getElementById("store").innerHTML=fruits;
    

}

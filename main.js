
menuListaArray=["Pizza Vegetariana",
                   "Pizza de Frango",
                   "Pizza Portuguesa",
                   "Pizza Quatro Queijos",
                   "Pizza Calabresa",
                   "Pizza Extravaganza"];
function getMenu(){
    var htmldata=" ";
    menuListaArray.sort();
    for(var i=0;i<menuListaArray.length;i++){
        htmldata=htmldata+ menuListaArray[i]+'<br>'
    }
    document.getElementById("displayMenu").innerHTML=htmldata;
}

function addItem (){
    var htmldata;
    var imgtags=' <img id="im1" src="images/pizzaImg.png" />'
    var item=document.getElementById("addItem").value;
    menuListaArray.sort();
    htmldata=""
    for(var i=0;i<menuListaArray.length;i++){
        htmldata=htmldata+imgtags+menuListaArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML=htmldata

}
function addTop(){
    var item=document.getElementById("addItem").value;
    menuListaArray.push(Item);
        addItem();
}
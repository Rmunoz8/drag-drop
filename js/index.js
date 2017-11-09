window.onload = function (){

    document.getElementById("pez").addEventListener("dragstart", jugar = (e) =>{
        e.dataTransfer.effecAllowed = 'move';
        e.dataTransfer.setData("Data", e.target.id);
        e.dataTransfer.setDragImage(e.target, 20, 35);
        e.target.style.opacity = '0.5';
        console.log("Arrastra");

    }, false);

    document.getElementById("pez").addEventListener("dragend", fin = (e) =>{

        e.target.style.opacity = '';
        e.dataTransfer.clearData("Data");
        console.log("Fin Arrastre");

    }, false);

    document.getElementById("contenedor").addEventListener("dragenter", entra = (e) =>{

        e.target.style.border = '3px dotted #555';
        console.log("Entra");

    }, false);

    document.getElementById("contenedor").addEventListener("dragleave", sale = (e) =>{

        e.target.style.border = '';
        console.log("Sale");

    }, false);


    document.getElementById("contenedor").addEventListener("dragover", estaDentro = (e) =>{
        console.log("Está dentro");
    }, false);


    document.getElementById("contenedor").addEventListener("drop", soltar = (e) =>{

          console.log("Drop");
//
        var id = e.dataTransfer.getData("Data");
        this.appendChild(document.getElementById(id));
        e.preventDefault();

//        let elementoArrastrado = e.dataTransfer.getData("Data");
//        e.target.appendChild(document.getElementById(elementoArrastrado));
//        e.target.style.border = '';
//
//        tamContX = $('#'+e.target.id).width();
//        tamContY = $('#'+e.target.id).height();
//
//        tamElemX = $('#'+elementoArrastrado).width();
//        tamElemY = $('#'+elementoArrastrado).height();
//
//        posXCont = $('#'+e.target.id).position().left;
//        posYCont = $('#'+e.target.id).position().top;
//
//        x = e.layerX;
//        y = e.layerY;
//
//        if(posXCont + tamContX <= x + tamElemX){
//            x = posXCont + tamContX - tamElemX;
//        }
//
//        if(posYCont + tamContY <= y + tamElemY){
//            y = posYCont + tamContY - tamElemY;
//        }
//
//        document.getElementById(elementoArrastrado).style.position = "absolute";
//        document.getElementById(elementoArrastrado).style.left = x + "px";
//        document.getElementById(elementoArrastrado).style.top = y + "px";


    }, false);

}

window.onload = function (){
    console.log("Hola");


    document.getElementById("pez").addEventListener("dragstart", jugar = (e) =>{
        e.dataTransfer.effecAllowed = 'move';
        e.dataTransfer.setData("Data", e.target.id);
        e.dataTransfer.setDragImage(e.target, 0, 0);
        e.target.style.opacity = '0.5';

    }, false);

    document.getElementById("pez").addEventListener("dragend", fin = (e) =>{

        e.target.style.opacity = '';
        e.dataTransfer.clearData("Data");

    }, false);


//    function start(e){
//        console.log("FunciónStart");
//        console.log(this);
//        e.dataTransfer.effecAllowed = 'move';
//        e.dataTransfer.setData("Data", e.target.id);
//        e.dataTransfer.setDragImage(e.target, 0, 0);
//        e.target.style.opacity = '0.4';
//    }
}

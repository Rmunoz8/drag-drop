window.onload = function (){
    console.log("Hola");


    document.getElementById("pez").addEventListener("dragstart", jugar = (e) =>{
        console.log("FunciónStart");
        console.log(e);
        e.dataTransfer.effecAllowed = 'move';
        e.dataTransfer.setData("Data", e.target.id);
        e.dataTransfer.setDragImage(e.target, 0, 0);
        e.target.style.opacity = '0.4';

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

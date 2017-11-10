window.onload = function(){


    var dragged;

  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {

      dragged = event.target;
      dragged.style.opacity = 0.5;

  }, false);

  document.addEventListener("dragend", function( event ) {

      event.target.style.opacity = "";

  }, false);

  document.addEventListener("dragover", function( event ) {

      event.preventDefault();

  }, false);

  document.addEventListener("dragenter", function( event ) {

      console.log("target:"+event.target.id +  "/ dragged:" +dragged.id );
      if(event.target.id == "hueco1" && dragged.id == "figura1"){
          console.log("entra");
          document.getElementById("corrector").style.backgroundColor = "#5cb85c";
      }
       if(event.target.id == "hueco2" && dragged.id == "figura2"){
        document.getElementById("corrector").style.backgroundColor = "#5cb85c";
      }
      if(event.target.id == "hueco3" && dragged.id == "figura3"){
        document.getElementById("corrector").style.backgroundColor = "#5cb85c";
      }
      if(event.target.id == "hueco4" && dragged.id == "figura4"){
        document.getElementById("corrector").style.backgroundColor = "#5cb85c";
      }
  }, false);

  document.addEventListener("dragleave", function( event ) {

        if(event.target.id == "contenedor"){
            document.getElementById("corrector").style.backgroundColor = "#DE1A0D";
        }


  }, false);

  document.addEventListener("drop", function( event ) {

      event.preventDefault();

      if ( event.target.id == "hueco1" && dragged.id == "figura1") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("con1").appendChild( dragged );
          document.getElementById("hueco1").parentNode.removeChild(event.target);
          document.getElementById("figura1").setAttribute("draggable", false);
      }

      if ( event.target.id == "hueco4" && dragged.id == "figura4") {
            dragged.parentNode.removeChild( dragged );
            document.getElementById("con4").appendChild( dragged );
            document.getElementById("hueco4").parentNode.removeChild(event.target);
            document.getElementById("figura4").setAttribute("draggable", false);


      }

      if ( event.target.id == "hueco3" && dragged.id == "figura3") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("con3").appendChild( dragged );
          document.getElementById("hueco3").parentNode.removeChild(event.target);
          document.getElementById("figura3").setAttribute("draggable", false);

      }
      if ( event.target.id == "hueco2" && dragged.id == "figura2") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("con2").appendChild( dragged );
          document.getElementById("hueco2").parentNode.removeChild(event.target);
          document.getElementById("figura2").setAttribute("draggable", false);

      }


      if ( event.target.id == "inicial" ) {
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);

}

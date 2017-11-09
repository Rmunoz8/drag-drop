window.onload = function(){


    var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {

      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";

  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();

  }, false);

  document.addEventListener("dragenter", function( event ) {
//      console.log("Entra?");
      // highlight potential drop target when the draggable element enters it
      console.log(event.target.id);
      if ( event.target.id == "contenedor" ) {

      }


      if ( event.target.id == "inicial" ) {

      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.id == "contenedor" ) {

      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.id == "pezS" && dragged.id == "pez") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("contenedor").appendChild( dragged );
          document.getElementById("pezS").parentNode.removeChild(event.target);

      }

      if ( event.target.id == "perroS" && dragged.id == "perro") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("contenedor").appendChild( dragged );
          document.getElementById("perroS").parentNode.removeChild(event.target);

      }

      if ( event.target.id == "gatoS" && dragged.id == "gato") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("contenedor").appendChild( dragged );
          document.getElementById("gatoS").parentNode.removeChild(event.target);

      }
      if ( event.target.id == "loroS" && dragged.id == "loro") {
          dragged.parentNode.removeChild( dragged );
          document.getElementById("contenedor").appendChild( dragged );
          document.getElementById("loroS").parentNode.removeChild(event.target);

      }

//
        if ( event.target.id == "inicial" ) {
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
//


  }, false);

}

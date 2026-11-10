window.onload = function() {

    const fotos = document.querySelector("div");

    fotos.addEventListener("click",(e) =>{
        console.log(e.target.tagname);

        if(e.target.tagName === "IMG"){

            const fondoNeg = fondoNegro();
            console.log("Seleccionaste una imagen");
            console.log(e.target.src);

            const imagenMini = e.target.src;
            const nomArchivo = imagenMini.substr(imagenMini.length -10,10);
            console.log("Nombre archivo: ", nomArchivo);
            const imagenGrande = "imagenes/" + nomArchivo;
            const imagen = document.createElement("img");

            imagen.id = "imagen";
            imagen.src = imagenGrande;
            imagen.style.display = "block";
            imagen.style.position = "absolute";
            
            imagen.addEventListener("load", function(){
                centrar(this);
                fondoNeg.appendChild(imagen);
            }, false);

            imagen.addEventListener("click", (e) => {
                if(fondoNeg){
                    fondoNeg.parentNode.removeChild(fondoNeg);
                }
            }, false)

        } else {
            console.log("Lo sentimos no seleccionaste una imagen");
        }

    }, false);

    function fondoNegro() {
        
        const fondoNeg = document.createElement("div");
        fondoNeg.id = "fondo";
        document.body.appendChild(fondoNeg);
        
        fondoNeg.style.position = "absolute";
        fondoNeg.style.top = 0;
        fondoNeg.style.background = "rgba(0,0,0,0.5)"

        fondoNeg.style.width = window.innerWidth+"px";
        fondoNeg.style.height = window.innerHeight+"px";
        fondoNeg.style.top = fotos.scrollTop+"px";
        fondoNeg.style.left = fotos.scrollLeft+"px";

        console.log(fotos.scrollTop, fotos.scrollLeft);
        return fondoNeg;
        
    }
}

const centrar = (image) => {
    const xx = (window.innerWidth - image.width) / 2;
    const yy = (window.innerHeight - image.width) / 2;

    image.style.top = yy+"px";
    image.style.left = xx+"px";

    return image;
}


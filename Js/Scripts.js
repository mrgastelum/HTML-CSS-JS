if (window.addEventListener) {
    var codigo = "";
    window.addEventListener("keydown", function (e) {

        if (e.key!='Enter') {
		codigo += e.key;
        console.log/(e.keyCode)
        }

        if (e.keyCode == 13) {
            Buscar(codigo);
			codigo = "";
			setTimeout(() => {
				window.location.reload();
			},6000)
        }
		 
    }, true);
}

function Buscar(codigo) {
	//alert(codigo);
	//alert('http://127.0.0.1/html/api/index2.php?codigo='+codigo);
    var request = new XMLHttpRequest(request);
      request.open("GET","http://127.0.0.1/html/api/index2.php?codigo="+codigo, true);
	  
	  
	  
    //   request.open("GET", "http://localhost/api/index2.php?codigo=" + Codigo, true);
      request.responseType = 'json';
      request.send();
      request.onload = () => {
        //alert ('xentro');
		//alert('nombre= '+request.response.Nombre);
		
		
       console.log(request.response.Status);
       console.log(request.response.Nombre);
       console.log(request.response.Precio);
       console.log(request.response.Imagen);
  
        if (request.response.Status == 200) {
            const LabelStatus = document.getElementById('LblStatus');
            const LabelName = document.getElementById('LblNombre');
            const LabelPrecio = document.getElementById('LblPrecio');
            const ImgProducto = document.getElementById('img');
            LabelName.textContent = "Nombre: " + request.response.Nombre;
            LabelPrecio.textContent = "Precio: $" + request.response.Precio;
            ImgProducto.src = '' + request.response.Imagen;
        }
        if (request.response.Status == 300) {
            const LabelStatus = document.getElementById('LblStatus');
            const LabelName = document.getElementById('LblNombre');
            const LabelPrecio = document.getElementById('LblPrecio');
            const ImgProducto = document.getElementById('img');
            LabelName.textContent = "Producto no encontrado";
            LabelPrecio.textContent = "Busque de nuevo";
            ImgProducto.src = './img/no encontrado.jpg';
        }
    };
}

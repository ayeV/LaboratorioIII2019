function Anuncio(titulo, transaccion, descripcion, precio, num_wc, num_estacionamiento, num_dormitorio, id = null) {

    this.Titulo = titulo;
    this.Transaccion = transaccion;
    this.Descripcion = descripcion;
    this.Precio = '$' + precio;
    this.CantBaños = num_wc;
    this.CantEstacionamientos = num_estacionamiento;
    this.CantDormitorios = num_dormitorio;
  //  this.active = true;
    if (id != null)
        this.id = id;
}
function Persona(){
    var nombre;
    var apellido;
    
    this.GetNombre = function (){ return nombre;}
    this.GetApellido = function (){ return apellido;}
    this.edad = 24;
    
    this.Inicializar = function(){
        nombre = "Benito";
        apellido = "Bodoque";
    }
    
}
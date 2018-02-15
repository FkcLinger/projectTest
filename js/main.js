function arroz_con_pollo(){
    alert("Yabal pide comida.");
}

//window.addEventListener('load',onLoadPage);

$(document).ready(onLoadPage);

function onLoadPage(){
    
    var buton = $("#btnComida");
    buton.on('click',function(){
    
    if(validateElement()){
    
        var name = $("#txtnombre").val();
        var apellido = $("#txtapellido").val();
        var edad = $("#txtedad").val();
        
        var html="";
        html += "<tr>"
        html += "<td class='class_name'>"+name+"</td>"
        html += "<td class='class_apellido'>"+apellido+"</td>"
        html += "<td class='class_edad'>"+edad+"</td>"
        html += "<td><button class='btnDelete'>Eliminar</button></td>"
        html += "<td><button class='btnInfo'>Ver Info</button></td>"
        html += "</tr>"
        $("#table_person").append(html);
    }
});
    
    $(document).on('click','.btnDelete',function(){
       $(this).parent().parent().remove();
    });
    
    $(document).on('click','.btnInfo',function(){
        var selector = $(this).parent().parent();
        var name = selector.find('.class_name').html();
        alert(name);
    });

    var persona = new Persona();
    persona.Inicializar();
    //alert("Nombres: " + persona.GetNombre() + " " + persona.GetApellido() + " tiene " + persona.edad + " years.");
    
    $(".mi_clase").css('background-color','red');
}

function validateElement(){
    var isValid = false;
    
    var name = $("#txtnombre").val().trim();
    var apellido = $("#txtapellido").val().trim();
    var isValid = name.length > 0 && apellido.length > 0;
    
    name.length > 0 
        ? $('#val_input_name').addClass('hide')
        : toastr.info('Name is a mandatory field!');
        
    apellido.length > 0 
        ? $('#val_input_lastname').addClass('hide')
        : toastr.info('Last name is a mandatory field!');
    
    return(isValid);
}
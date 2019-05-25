jQuery.validator.addMethod("arrobaNoInicio", function (value, element) {
    if (value.indexOf("@.") == 0) {
        return true
    } else {
        return false
    }
}, "Tem que ter arroba no começo")

if (idade==""){ 
alert('Preencha o campo com sua idade');
cad.idade.focus();
return false;

}





jQuery.validator.addMethod("cep", function(value, element) {
  return this.optional(element) || /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/.test(value);
}, "Por favor, digite um CEP válido");
    

    $("#formCadastro").validate({
        rules: {
            

            email: {
                required: true,
                email: true
            },
            idade: {
                required: true,
                min: 1,
                max: 100
            },
            naturalidade:{
                required: true,
                min: 1,
                max:50
            }
            

            

        },
        submitHandler: function (form) {
            alert("Cadastrado com sucesso")
        }
    })



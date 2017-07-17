$(function($){

  $('#addItem').click(function(){
    console.log('click');


    let html = `
    <div class=\"col-sm-12\">
      <div class=\"form-group col-sm-12\">
        <label for=\"componente_nome\" class=\"col-sm-2 control-label\"> Nome: </label>
        <div class=\"col-sm-10\">
          <input type=\"text\" class=\"form-control\" placeholder=\"Digite o nome.\" name=\"nome_lista[]\"/>
        </div>
      </div>
      <div class=\"form-group col-sm-12\">
        <label for=\"componente_quantidade\" class=\"col-sm-2 control-label\"> Numero: </label>
        <div class=\"col-sm-10\">
          <input type=\"text\" class=\"form-control\" placeholder=\"Digite o numero\" name=\"num_lista[]\"/>
        </div>
      </div>
      <div class=\"form-group col-sm-12\">
        <label for=\"componente_quantidade\" class=\"col-sm-2 control-label\"> Kilometro: </label>
        <div class=\"col-sm-10\">
          <input type=\"text\" class=\"form-control\" placeholder=\"Ex.: 12 km\" name=\"km_lista[]\"/>
        </div>
      </div>
      <div class=\"form-group col-sm-12\">
        <label for=\"componente_quantidade\" class=\"col-sm-2 control-label\"> Show GEO: </label>
        <div class=\"col-sm-2\">
          <select class=\"form-control\" name="showgeo_lista[]"><option value=\"false\">Não exibir</option><option selected value=\"true\">Exibir</option></select>
        </div>
        <div class=\"col-sm-4\">
          <input type=\"text\" class=\"form-control\" placeholder=\"Latitude\" name=\"latitude_lista[]\"/>
        </div>
        <div class=\"col-sm-4\">
          <input type=\"text\" class=\"form-control\" placeholder=\"Longitude\" name=\"longitude_lista[]\"/>
        </div>
      </div>
    </div> <hr />`;

    $('#novo_item').append(html);
    console.log(html)
    return false;
  })

})

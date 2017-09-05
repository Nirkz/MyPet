

$(document).on('pagecreate', '#AddNewAnimal', function () {






    $('#btnAddNewAnimal').tap(function () {
        alert("sadsd");
        var NewAnimal =
            {               
                userID: localStorage.getItem("UserID"),
                name: $("#inNewName").val(),
                year: $("#inNewDate").val(),
                weight: $("#inNewWeight").val(),
                hieght: $("#inNewHeight").val(),
                type: $("#inNewType").val(),
                race: $("#inNewRace").val(),
                sex: $("#inNewSex").val(),
                description: $("#inNewDescript").val(),
                diseases: $("#inNewDiseases").val(),
                treatments: $("#inNewTreatments").val(),
                vaccines: $("#inNewVaccines").val()
            };

        NewAnimal.weight = (NewAnimal.weight == "") ? 0 : NewAnimal.weight;
        NewAnimal.hieght = (NewAnimal.hieght == "") ? 0 : NewAnimal.hieght;

        alert(NewAnimal.name + " " + NewAnimal.year + " " + NewAnimal.weight + " " + NewAnimal.hieght + " " + NewAnimal.type + " " + NewAnimal.race + " " + NewAnimal.description + " " + NewAnimal.diseases + " " + NewAnimal.treatments + " " + NewAnimal.vaccines + " ")
     
        AddNewAnimal(NewAnimal)
    });
})



function AddNewAnimal(AnimalObj)
{
    $.ajax({
        url: WebServiceURL + "/AddNewAnimal",
        dataType: "json",
        type: "POST", //use only POST!
        data: JSON.stringify(AnimalObj),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, exception) {
            //alert("errornir: " + JSON.stringify(jqXHR)); //all the erro…
            alert(formatErrorMessage(jqXHR, exception));
        },
        success: function (data) {

            alert(data.d);
        }
    });
}
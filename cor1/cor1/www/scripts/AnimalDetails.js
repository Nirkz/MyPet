$(document).on('pagecreate', '#AnimalDetails', function () {
    GetAnimalDetails()
    EditAndSave()
    Delete()
    AddPhoto()
})




function GetAnimalDetails() {

    var AnimalID =
        {
            animalID: sessionStorage.getItem('AnimalID')
        }


    $.ajax({
        url: WebServiceURL + "/GetAnimalDetailsUsingClass",
        dataType: "json",
        type: "POST",
        data: JSON.stringify(AnimalID),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, exception) {

            alert(formatErrorMessage(jqXHR, exception));
        },

        success: function (data) {
            var AnimalObj = JSON.parse(data.d)

            $("#Name").val(AnimalObj.Name)
            $("#Date").val(AnimalObj.Date)
            $("#Height").val(AnimalObj.Height)
            $("#Weight").val(AnimalObj.Weight)
            $("#Sex").val(AnimalObj.Sex)
            $("#Type").val(AnimalObj.Type)
            $("#Race").val(AnimalObj.Race)
            $("#Description").val(AnimalObj.Description)
            $("#Vaccines").val(AnimalObj.Vaccines)
            $("#Treatments").val(AnimalObj.Treatments)
            $("#Diseases").val(AnimalObj.Diseases)

        }
    });

}

function EditAndSave() {
    $('#btnSaveChanges').tap(function () {

        var saveAnimal =
            {
                animalID: sessionStorage.getItem('AnimalID'),
                name: $("#Name").val(),
                year: $("#Date").val(),
                weight: $("#Weight").val(),
                hieght: $("#Height").val(),
                type: $("#Type").val(),
                race: $("#Race").val(),
                sex: $("#Sex").val(),
                description: $("#Description").val(),
                diseases: $("#Vaccines").val(),
                treatments: $("#Treatments").val(),
                vaccines: $("#Diseases").val()
            }

        $.ajax({
            url: WebServiceURL + "/SaveAnimal",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(saveAnimal),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {

                alert(formatErrorMessage(jqXHR, exception));
            },

            success: function (data) {

                alert(data.d)
                GetAnimalDetails()
            }
        });

    })

}

function Delete()
{
    $('#btnDelete').tap(function () {
        var AnimalID =
            {
                animalID: sessionStorage.getItem('AnimalID')
            }

        $.ajax({
            url: WebServiceURL + "/DeleteAnimal",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(AnimalID),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {

                alert(formatErrorMessage(jqXHR, exception));
            },
            success: function (data) {

                alert(data.d)
                $.mobile.changePage('MyAnimals.html');
            }
        });

    })
    
}

function AddPhoto()
{
    $('#btnAddPhoto').tap(function () {
        alert("1")
        picname = " "
        alert("2")
        navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
            quality: 15,
            destinationType: Camera.DestinationType.FILE_URI
        });


    })

}

//כאשר הכול עובד טוב נשלח מסלול התמונה במכשיר 
function onCameraSuccess(imageURI) {
    //$('#myImage2').attr('src', imageURI);
    alert("3")
    uploadPhoto(imageURI);// פונקציה העלה

}

function uploadPhoto(imageURI) {
    //   Load(); // Start the spinning "working" animation
    var options = new FileUploadOptions(); // PhoneGap object to allow server upload
    options.fileKey = "file";
    options.fileName = picname; // file name
    options.mimeType = "image/jpeg"; // file type
    var params = {}; // Optional parameters
    params.value1 = "test";
    params.value2 = "param";
    options.params = params; // add parameters to the FileUploadOptions object
    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI("http://ruppinmobile.ac.il.preview26.livedns.co.il/site09/WebServerImages/ReturnValue.ashx"), win, fail, options); // Upload
}

function fail(error) {
    Alert_msg("An error has occurred: Code = " + error.code);
}

function onCameraFail(message) {
    Alert_msg('Failed because: ' + message);
}


function win(r) {
    var path = r.response;

    //$('#myImage2').attr("src", "http://ruppinmobile.ac.il.preview26.livedns.co.il/site09/WebServerImages/" + picname + ".jpg");




    var add_photo =
        {
            this_pro_photo_id: sessionStorage.Pro_ID,
            photo_path: "http://ruppinmobile.ac.il.preview26.livedns.co.il/site09/WebServerImages/" + picname + ".jpg",
            photo_num: Pic_num
        }
    //$.ajax({
    //    url: WebServiceURL + "/Add_photo_path",
    //    dataType: "json",
    //    type: "POST",
    //    data: JSON.stringify(add_photo),
    //    contentType: "application/json; charset=utf-8",
    //    error:
    //    function (jqXHR, exception) {
    //        Alert_msg(formatErrorMessage(jqXHR, exception));
    //    },

    //    success: function (data) {

    //        Alert_msg("יש לך תמונה חדשה")
    //    }
    //});
}






















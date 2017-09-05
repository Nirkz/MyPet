
$(document).on('pagecreate', '#MyAnimals', function () {

    PageRefresh()
    OnAnimalClick()
})



function PageRefresh() {

    var UserObj =
        {
            userID: localStorage.getItem("UserID")
        }

    $.ajax({
        url: WebServiceURL + "/GetUserAnimalsUsingClass",
        dataType: "json",
        type: "POST", //use only POST!
        data: JSON.stringify(UserObj),
        contentType: "application/json; charset=utf-8",
        error: function (jqXHR, exception) {
            //alert("errornir: " + JSON.stringify(jqXHR)); //all the erro…
            alert(formatErrorMessage(jqXHR, exception));
        },
        success: function (data) {
            $(".MyAnimals").empty();
            var res = data.d;
            var i;
            var arr = new Array();
            for (i = 0; res[i] != null; i++) {
                arr[i] = JSON.parse(res[i]);
            }
            for (j = 0; j < i; j++) {

                $('<div class="AnimalFrame"  AnimalID=" ' + arr[j].AnimalID + '"> <a class="AnimalName">' + arr[j].Name + ' </a> </div>').appendTo(".MyAnimals")

            }

        }
    });
}


function OnAnimalClick() {
    $('.MyAnimals').on('click', function (event) {
        if (event.target.className == "AnimalFrame") {
            sessionStorage.setItem("AnimalID", $(event.target).attr('AnimalID'))
            $.mobile.changePage('AnimalDetails.html');
        }

    })


}
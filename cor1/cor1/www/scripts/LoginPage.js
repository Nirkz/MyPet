
$(document).on('pageshow', '#LoginPage', function () {


    $('#txtName').val("meir");
    $('#txtPass').val("m10");

    $('#btnLogin').tap(function () {
   
        //e.preventDefault();
        
        localStorage.setItem("UserName", $('#txtName').val());
        localStorage.setItem("UserPass", $('#txtPass').val());

        var UserJSObj =
            {
                name: $('#txtName').val(),
                password: $('#txtPass').val()
            };

        alert(UserJSObj.name)
        alert(UserJSObj.password)
       
        $.ajax({
            url: WebServiceURL + "/LoginUserUsingClass",
            dataType: "json",
            type: "POST", //use only POST!
            data: JSON.stringify(UserJSObj),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                //alert("errornir: " + JSON.stringify(jqXHR)); //all the erro…
                alert(formatErrorMessage(jqXHR, exception));
            },
            //async: false,
            success: function (data) {

                alert(data.d);
                var UserObj = JSON.parse(data.d); //or data["d"]
                if (UserObj != null) {
                    alert(UserObj.UserID)
                    localStorage.setItem("UserID", UserObj.UserID); 
                    localStorage.setItem("UserMail", UserObj.UserID);
                    localStorage.setItem("UserPhone", UserObj.UserID);
                    localStorage.setItem("Login", "true");
                    $.mobile.changePage('MainPage.html');
                }
                else {
                    alert('login failed!');
                }
            }
        });
    });
});



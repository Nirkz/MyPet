$(document).on('pagecreate', '#Sign_inPage', function () {
    $('#Sign_in').tap(function () {
        var UserSignIn =
            {
                name: $('#txtName').val(),
                password: $('#txtPass').val(),
                mail: $('#txtMail').val(),
                phone: $('#txtPhone').val()
            };
        $.ajax({
            url: WebServiceURL + "/SignInUserUsingClass",
            dataType: "json",
            type: "POST", //use only POST!
            data: JSON.stringify(UserSignIn),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {      
                alert(formatErrorMessage(jqXHR, exception));
            },
            success: function (data) { 
                var UserObj = JSON.parse(data.d); 
                if (UserObj != null) {
                
                }
                else {
                    
                }
            }
        });
    });
});
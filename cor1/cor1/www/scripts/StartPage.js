


//$(document).on("pagechange", function (e) {


//        if (localStorage.getItem("Login") == "true") {
//            $.mobile.changePage('MainPage.html');
//            e.preventDefault()
//        }

//    $('#Login').tap(function () {
//        $.mobile.changePage('LoginPage.html');

//    })

//    $('#SignIn').tap(function () {

//        $.mobile.changePage('Sign_inPage.html');

//    })

//});


















$(document).on('pagebeforechange', function (e, data) {
    
    if (data.toPage[0].id == "StartPage")
    {
        if (localStorage.getItem("Login") == "true") {
            $.mobile.changePage('MainPage.html');
            e.preventDefault()            
        }
    }

    $('#Login').tap(function () {
        $.mobile.changePage('LoginPage.html');

    })

    $('#SignIn').tap(function () {

        $.mobile.changePage('Sign_inPage.html');

    })

});





$(document).on('pagecreate', '#ProfilePage', function () {
   
    PageRefresh()
    EditProfile()
 

});

function PageRefresh()
{
    $("#txtMail").val(localStorage.getItem("UserMail"))
    $("#txtPhone").val(localStorage.getItem("UserPhone"))
}
function EditProfile()
{
    
    $('#btnEditProfile').tap(function () {
        var editUser =
            {
                userID: localStorage.getItem("UserID"),
                userNewMail: $("#txtMail").val(),
                userNewPhone: $("#txtPhone").val()
            }
        $.ajax({
            url: WebServiceURL + "/EditProfile",
            dataType: "json",
            type: "POST",
            data: JSON.stringify(editUser),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                alert(formatErrorMessage(jqXHR, exception));
            },
            success: function (data) {

                var UserObj = JSON.parse(data.d)
                localStorage.setItem("UserMail", UserObj.Email);
                localStorage.setItem("UserPhone", UserObj.Phone);
                alert("success")
                PageRefresh()
            }
        });
    })


}

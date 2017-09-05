
$(document).on('pagecreate', '#MainPage', function () {
  
    //$.mobile.changePage('MyAnimals.html');
    $('#ClearLS').tap(function () {
        localStorage.clear();
    })

   
});
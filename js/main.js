$(document).ready(function(){
    

    $(".button-collapse").sideNav();


    $('.modal').modal();

    $('.datepicker').pickadate({
       selectMonths: true, // Creates a dropdown to control month
       selectYears: 100 // Creates a dropdown of 15 years to control year
     });

    // This code runs on the registration form to 
    // autoselect the combine when queryparams are passed through from clicking 'register' on an upcoming combine section
    function getUrlVars(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var urlVars = getUrlVars();

    if (urlVars.combine != undefined){
    	$('#combine-select').val(urlVars.combine)
    }

    $('select').material_select();



});

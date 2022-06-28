// The userInterface logic


$(document).ready( function(){
    $("#openApp").click( function(){
        const age = parseInt(prompt("enter your age"));
        // const gender = $("#gender").val();



        // first if statement: only when the user is 18 or older should we give the user permission to our site
        if(age >= 18){
            $("#app").show();
            $(".hed").hide();
        }else{
            $(".not18").show();
            $("button#openApp").hide();
        }

        $("#opening").show();        
        

        $("#opening").submit( function(event){
            event.preventDefault();

            let firstname = $("#name1").val();
            let lastname = $("#name2").val();
            let place = $("#place").val();
            let gender = $("#gender").find(":selected").val();;
            let email = $("#email").val();
            let ageRange = $("#ageRange").find(":selected").val();
            let relationshipStatus = $("#relationshipStatus").val();

            if(gender === 'man'){
                $(".man1").hide();
            $(".woman1").show();
        }
            else {
                $(".woman1").hide();
                $(".man1").show();
                
            }

            if(ageRange ==='millenial'){
                $(".woman2").hide();
                $(".man3").show();
            }
            else{
                $(".man3").hide();
                $(".woman2").show();
            }

        });
    });


});
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

        
        

        $("#opening").submit( function(event){
            event.preventDefault();

            let firstname = $("#name1").val();
            let lastname = $("#name2").val();
            let place = $("#place").val();
            let gender = $("#gender").val();
            let email = $("#email").val();
            let ageRange = $("#ageRange").val();
            let relationshipStatus = $("#relationshipStatus").val();

            if(gender = 'male'){
                $(".woman2").show();
            }
            else if(relationshipStatus = 'respect'){
                $(".man3").show();
            }
            else if(ageRange === 'millenial' || gender === 'female'){
                $(".woman1").show();
            }
            else if(gender === 'female' && relationshipStatus === 'toxic'){
                $(".man1").show();
            }
            else{
                alert("Dear user please fill in your info");
            }
        });
    });


});
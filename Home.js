
function contentAnimation() {

    $('#login').click(function () {
        $(".login").hide('200');
        $(".account").show('500');

    })

    $('#create').click(function () {
        $(".login").hide('200');
        $(".account").show('500');
    })

}

$(document).ready(function () {
    $('.account').hide();


    contentAnimation();

    $('.login').click(function () {

        $.ajax({

            data: {
                "Username": $(".userName").val(),
            }


        })
    })

    $('.create').click(function () {

        $.ajax({


            data: {
                "Username": $(".newUN").val(),
                "Password": $(".newPW").val(),
                "EmailAdd": $(".emailAddress").val(),
            },

            success: function (createAccount) {
                alert(Message);
            }
        })
    })
});


$(function () {
    $("#copyButton").click(function () {
        let codigoACopiar = document.getElementById('newPassword');
        let seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        let res = document.execCommand('copy');
        window.getSelection().removeRange(seleccion);

        $("#msgCopyDone").removeClass("hidden");

        setTimeout(function () {
            $("#msgCopyDone").addClass("hidden");
        }, 5000)
    });

    $('#passwordForm').on('submit', function (event) {
        event.preventDefault();

        let longPassword = $('#longPassport').val();
        let typePassword = $('#typePassword').val();

        $.ajax({
            url: "/new-password",
            type: "POST",
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                longPassword: longPassword,
                typePassword: typePassword,
            },
            success: function (response) {
                $("#newPassword").text(response['password'])
                $('#securityLevelBar').attr('aria-valuenow', response['securitylevel']).css('width', response['securitylevel']+'%');
                console.log(response['securitylevel']);
            },
        });
    });
});

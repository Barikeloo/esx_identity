$(function () {
    $('body').hide()
    $('.container').hide()
    const audio = document.querySelector('audio');
    audio.volume = 0.02;
    $('#muted').hide()
    $('#unmuted').click(function () {
        $('#unmuted').hide()
        $('#muted').show()
        audio.pause();
    });
    $('#muted').click(function () {
        $('#muted').hide()
        $('#unmuted').show()
        audio.play();
    });

    window.addEventListener('message', function (event) {
        if (event.data.type == "enableui") {
            audio.play();
            $('.container').show()
            $('body').show()
        }
    });

    $(".btn-go").click(function () {
        var date = $("#fecha").val();
        var dateCheck = new Date($("#fecha").val());

        if (dateCheck == "Invalid Date") {
            date == "invalid";
        }
        else {
            const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateCheck)
            const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(dateCheck)
            const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dateCheck)
            var formattedDate = `${mo}/${da}/${ye}`;
            $.post('https://bk_identity/register', JSON.stringify({
                firstname: $("#nombre").val(),
                lastname: $("#apellidos").val(),
                dateofbirth: formattedDate,
                sex: $("input[type='radio'][name='sex']:checked").val(),
                height: $("#altura").val(),
                nationality : $('#nacionalidad').val()
            }));
            $('body').remove()
            $('.container').remove()
        }
    });
});
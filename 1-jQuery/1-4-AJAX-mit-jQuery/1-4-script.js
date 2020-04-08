$(document).ready(function () {
    $('input:button').on('click', function () {
        let input = $(this).val();

        $.get(input + '.json', function (data, status) {
            if (status === 'success') {
                $('#titel').html(data.name);
                let string = data.state + ' with a metropolitan area of over ' + data.residents + '. ' + data.remark;
                if (data.capital) {
                    $('#inhalt').html(data.name + ' is the capital of ' + string);
                } else {
                    $('#inhalt').html(data.name + ' is a city in ' + data.state + string);
                }
            } else {
                console.log('Es ist ein Fehler aufgetreten!\n' + status);
            }
        });

    });
});
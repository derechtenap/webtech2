$(document).ready(function() {
    $('[data-info="b1"]').hide().fadeIn(2000);
    $('[data-info="b2"]').hide().slideDown(2000);

    $(document).click(function () {
        $('[data-info="b3"]').toggle('explode', {
            mode: "hide",
            pieces: 8
        }, 2000);
    });
});
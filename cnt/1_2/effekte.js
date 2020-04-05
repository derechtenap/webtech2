$(document).ready(function() {
    $('#jq_ani').click(function() {
        $('.fade').fadeIn(2000);
        $('.slide').slideDown(2000);
        // Veraltet? Gibt es Explode noch? --> https://api.jquery.com/category/effects/
        $('.explode').explode();
    });
});
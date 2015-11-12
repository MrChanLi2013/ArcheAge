$(function () {
    $("#js-calculate-btn").click(function () {
        $("#js-calculate-form").ajaxSubmit({
            target: "#calculateResult",
            success: function () {
                $('#calculateResult').fadeIn('slow');
            }
        })
    });

    $.post("/category/all",{}, function (data) {
        $('#category').html(data);
    });

    $.post("/level/all",{}, function (data) {
        $('#level').html(data);
    });
});
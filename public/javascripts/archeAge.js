$(function () {
    $("#js-calculate-btn").click(function () {
        console.info(111222);
        $("#js-calculate-form").ajaxSubmit({
            target: "#calculateResult",
            success: function () {
                $('#calculateResult').fadeIn('slow');
            }
        })
    });
});
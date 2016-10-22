$(function () {

    $.ajax({
        type: "post",
        dataType: "text",
        cache: false,
        url: '/endereco/index-pagination',
        async: true,
        data: {
        },
        beforeSend: function () {

            $('#endereco-pagination').html(
                '<div class="row"><div class="col-md-12 text-center"><p><img src="/assets/img/carregando.gif"><p></div></div>'
            );
        },
        success: function (data) {

            $('#endereco-pagination').html(data);
        }
    });
});
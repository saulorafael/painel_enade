$(function () {

    $.ajax({
        type: "post",
        dataType: "text",
        cache: false,
        url: '/pessoa_vinculo/index-pagination',
        async: true,
        data: {
        },
        beforeSend: function () {

            $('#pessoa-vinculo-pagination').html(
                '<div class="row"><div class="col-md-12 text-center"><p><img src="/assets/img/carregando.gif"><p></div></div>'
            );
        },
        success: function (data) {

            $('#pessoa-vinculo-pagination').html(data);
        }
    });
});
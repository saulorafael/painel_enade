$(function () {

    $.ajax({
        type: "post",
        dataType: "text",
        cache: false,
        url: '/perfil-controller-action/index-pagination',
        async: true,
        data: {
        },
        beforeSend: function () {

            $('#perfil-controller-action-pagination').html(
                '<div class="row"><div class="col-md-12 text-center"><p><img src="/assets/img/carregando.gif"><p></div></div>'
            );
        },
        success: function (data) {

            $('#perfil-controller-action-pagination').html(data);
        }
    });
});
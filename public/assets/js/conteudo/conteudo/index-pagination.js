$(function () {

    // NOTE: $.tablesorter.theme.bootstrap is ALREADY INCLUDED in the jquery.tablesorter.widgets.js
    // file; it is included here to show how you can modify the default classes
    $.tablesorter.themes.bootstrap = {
        // these classes are added to the table. To see other table classes available,
        // look here: http://getbootstrap.com/css/#tables
        table: 'table table-bordered',
        caption: 'caption',
        header: 'bootstrap-header', // give the header a gradient background
        footerRow: '',
        footerCells: '',
        icons: '', // add "icon-white" to make them white; this icon class is added to the <i> in the header
        sortNone: 'bootstrap-icon-unsorted',
        sortAsc: 'icon-chevron-up glyphicon glyphicon-chevron-up', // includes classes for Bootstrap v2 & v3
        sortDesc: 'icon-chevron-down glyphicon glyphicon-chevron-down', // includes classes for Bootstrap v2 & v3
        active: '', // applied when column is sorted
        hover: '', // use custom css here - bootstrap class may not override it
        filterRow: '', // filter row class
        even: '', // odd row zebra striping
        odd: ''  // even row zebra striping
    };

    // call the tablesorter plugin and apply the uitheme widget
    $("#tablesorterConteudo").tablesorter({
        // this will apply the bootstrap theme if "uitheme" widget is included
        // the widgetOptions.uitheme is no longer required to be set
        theme: "bootstrap",
        widthFixed: true,
        headerTemplate: '{content} {icon}', // new in v2.7. Needed to add the bootstrap icon!

        // widget code contained in the jquery.tablesorter.widgets.js file
        // use the zebra stripe widget if you plan on hiding any rows (filter widget)
        widgets: ["uitheme", "zebra"],
        widgetOptions: {
            // using the default zebra striping class name, so it actually isn't included in the theme variable above
            // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
            zebra: ["even", "odd"],
            // reset filters button
            filter_reset: ".reset"

                    // set the uitheme widget to use the bootstrap theme class names
                    // this is no longer required, if theme is set
                    // ,uitheme : "bootstrap"

        },
        headers: {
            0: {sorter: false}
        }
    });

    $(".imprimir-conteudo").click(function () {

        var divPrint = $('.divPrint');
        $('#printSection').addClass('printSection');
        $('#printSection').html(divPrint.html());
        window.print();
        $('#printSection').removeClass('printSection');
        $('#printSection').html('');
    });

    $('.conteudo-acoes-group .btn-excluir').off('click').on('click', function () {

        var id = $(this).attr('rel');
        $("#modal-conteudo-excluir-id").val(id);
        $('#modal-conteudo-excluir').modal('show');
    });

    $('#btn-conteudo-excluir-confirm').off('click').on('click', function () {

        $('#modal-conteudo-excluir').modal('hide');
        var id = $("#modal-conteudo-excluir-id").val();
        window.location.href = '/conteudo/excluir/' + id;
    });
});
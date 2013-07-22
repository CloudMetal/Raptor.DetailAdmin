// sidebar arrow injection
jQuery.fn.tablerize = function () {
    return this.each(function () {
        var table = $('<table>');
        var tbody = $('<tbody>');
        $(this).find('li').each(function (i) {
            var values = $(this).html().split('*');
            if (i == 0) {
                var thead = $('<thead>');
                var tr = $('<tr>');
                $.each(values, function (y) {
                    tr.append($('<th>').html(values[y]));
                });
                table.append(thead.append(tr));
            } else {
                var tr = $('<tr>');
                $.each(values, function (y) {
                    tr.append($('<td>').html(values[y]));
                });
                tbody.append(tr);
            }
        });
        $(this).after(table.append(tbody)).remove();
    });
};

$(function () {
    $('#dashboard-menu > li.active > a').append('<div class="pointer"><div class="arrow"></div><div class="arrow_border"></div></div>');
});
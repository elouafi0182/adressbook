$(document).ready(function () {

    $.ajax({
        url: 'http://api.randomuser.me/?results=1&seed=foobar',
        dataType: 'json',
        success: function (data) {
            for ( var i = 0; i < data.results.length; i++ ) {
                console.log(data.results[i].name.first);
                $('#example tbody').append("<tr></tr>");
                $('#example tbody tr:last-of-type')
                    .append("<td>" + "<IMG SRC='" +  data.results[i].picture.medium + "'></td>")
                    .append("<td>" + data.results[i].name.first + " " + data.results[i].name.last + "</td>")
                    .append("<td>" + data.results[i].email + "</td>")
                    .append("<td>" + data.results[i].cell + "</td>");
            }
        }
    });

});


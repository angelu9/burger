$(function() {

    $('.devour').on('click', function(event) {

        var id = $(this).data('id');
        var devoured = $(this).data('devoured');

        var devouredObj = {
            newDevoured: devoured
        };

        console.log(id);
        console.log(devoured);

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredObj
        }).then(function() {

            location.reload();

        });

    });


    $('.add-burger').on('submit', function(event) {

        event.preventDefault();

        var newBurger = {
            name: $('#burger').val().trim()
        };

        if(newBurger.name == '') {
           return alert('Please enter a burger name.');
        }else{

            $.ajax('/api/burgers', {
                type: 'POST',
                data: newBurger
            }).then(function() {
                location.reload();
            });
        }
    });


    $('.delete').on('click', function(event) {

        var id = $(this).data('id');

        console.log(id);

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(function() {
            location.reload();
        });

    });



















});
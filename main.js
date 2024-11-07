$(document).ready(function () {
    const inputTarefa = $('#tarefa');
    const listaTarefa = $('#lista-tarefa');
    const form = $('#form-tarefa');

    form.on('submit', function (e) {
        e.preventDefault();


        const tarefa = inputTarefa.val().trim();
        if (tarefa) {
            const li = $('<li></li>').text(tarefa);
            listaTarefa.append(li);
        }

        inputTarefa.val('');
    });

    listaTarefa.on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});


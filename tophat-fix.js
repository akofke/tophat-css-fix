javascript:(function () {
    $('<style>')
        .prop('type', 'text/css')
        .html('.question_description code {padding: 0;}')
        .appendTo('head');
}());

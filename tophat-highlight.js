javascript:(function () {
    $('<style>')
        .prop('type', 'text/css')
        .html('.question_description code {padding: 0; display: inline !important; border: none;}')
        .appendTo('head');

    $('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/default.min.css">').appendTo('head');
    $.getScript("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js", function() {
        hljs.configure({'languages':['java']});
        $('.question_description code').each(function(i, block) {
            hljs.highlightBlock(block);
        })
    });
}());

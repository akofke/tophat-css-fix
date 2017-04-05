Bookmarklet to make reading code questions on TopHat more bearable.

The first bookmarklet does the bare minimum to make it not overlap, by removing some padding. The second
one also pulls in the [highlight.js](https://highlightjs.org/) library to make it pretty (but unfortunately
only works for the current question).

**To install**, copy this code, create a new bookmark, and paste it into the URL or Location field.

```js
javascript:(function () {$('<style>').prop('type', 'text/css').html('.question_description code {padding: 0;}').appendTo('head');}());
```
or, with highlighting

```js
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
```

Then just click the bookmark when the tophat question appears. It should persist between questions,
but will have to be applied again if you refresh or leave the site. 



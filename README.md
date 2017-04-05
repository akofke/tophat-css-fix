Bookmarklet to fix overlap in TopHat code questions. 

To install, copy this code, create a new bookmark, and paste it into the URL field.

```js
javascript:(function () {$('<style>').prop('type', 'text/css').html('.question_description code {padding: 0;}').appendTo('head');}());
```

Then just click the bookmark when the tophat question appears. It should persist between questions,
but will have to be applied again if you refresh or leave the site.

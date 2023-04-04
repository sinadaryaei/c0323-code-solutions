# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
Check the code.

- What is a "model"?
It's used to represent data or application.

- Which "document" is being referred to in the phrase Document Object Model?
HTML and HTML documents.

- What is the word "object" referring to in the phrase Document Object Model?
The structure of the document and the behavior of the document.

- What is a DOM Tree?
HTML tree-like representaiton of the HTML elments on the webpage.

- Give two examples of `document` methods that retrieve a single element from the DOM.
getElementByid(), queryselector

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
queryselector all.

- Why might you want to assign the return value of a DOM query to a variable?
Assign it a variable so you can reference the variable without going to the DOM tree.

- What `console` method allows you to inspect the properties of a DOM element object?
console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
It won't reference the HTML because the elments because they haven't been created yet. And
it would return null.

- What does `document.querySelector()` take as its argument and what does it return?
It takes a string form as css selector and returns the first element that matches.

- What does `document.querySelectorAll()` take as its argument and what does it return?
It takes a css selector format and returns a node list.

## Notes

All student notes should be written here.

Always put script tag the body.
The only time you would load it on top of the head elment if your loading
a jQuery library.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

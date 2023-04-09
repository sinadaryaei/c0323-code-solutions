# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
event.target refers to the element that triggered the event.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
Once the event is triggered the event will bubble up to the document. And the listener will listen to any decendents.

- What DOM element property tells you what type of element it is?
TagName property.

- What does the `element.closest()` method take as its argument and what does it return?
Takes CSS seletor as its arguemtn and returns the closest ancestor element that matches the selector.

- How can you remove an element from the DOM?
Remove() method.

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
To avoid adding event listener to every new clickable DOM element you add event delegation.

## Notes

All student notes should be written here.


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

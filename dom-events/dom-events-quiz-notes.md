# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
We log things to the console to help with debugging and to see what's happening when the code is running.

- What is the purpose of events and event handling?
It allows us to trigger actions when something happens in the browser. Hovering over button, user clicking.
Its the process of creating functions to respond to the events.

- Are all possible parameters required to use a JavaScript method or function?
No, not all are required to use JavaScript method or function, some may be option or have default values.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
The ```addEventListener``` method of element objects.

- What is a callback function?
```Interview question.```
A callback function is a function that is passed as an argument to another function, and is executed by that function at a later time. Callback functions are commonly used in event handling and asynchronous programming.

- What object is passed into an event listener callback when the event fires?
An event object is passed into an event listener callback when the event fires.

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
Using the console log and also referring to the JavaScript documentation.

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
So, the difference between the two code snippets is that the first one waits for the event to happen before calling the function, while the second one calls the function immediately without waiting for the event to happen.



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

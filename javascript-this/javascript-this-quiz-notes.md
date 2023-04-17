# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
“This” keyword refers to a calling object.
- What does it mean to say that `this` is an "implicit parameter"?
 It's an implicit parameter, meaning that it is available in a function's code block even though it was never included in the function's parameter list or declared with var.

- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
The value of this is determined when the function is called, not when it is defined.

- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
We don't know until it's called.

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
It's-a-me, Mario!

- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
It's-a-me, undefined!

- How can you tell what the value of `this` will be for a particular function or method **definition**?
The value of this is determined at call time.

- How can you tell what the value of `this` is for a particular function or method **call**?
The value of this can be recognized as "the object to the left of the dot" when the function is called (as a method).

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```

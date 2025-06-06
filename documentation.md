# Project Documentation – UCD JavaScript Project

## How to access

To access the login screen, enter "admin" as the username and "1234" as the password.

## Design Decisions

- **Canvas Animation**: Used the `<canvas>` element to simulate a loading screen after login, creating a more dynamic experience.
- **Simple UI**: Designed the layout to be clean and easy to use, focusing on function over decoration.
- **Modular Code**: Separated logic for login, animation, and task management to keep the code readable and maintainable.

## Development Process

1. Created the HTML structure for the login screen and to-do list section.
2. Wrote JavaScript to validate login credentials and trigger the canvas animation.
3. Built the to-do list with functions to:
   - Add tasks
   - Mark tasks as done (with a strikethrough)
   - Delete tasks
4. Styled everything with CSS for a modern look.

## Challenges Faced

-Login logic: Had to ensure the login didn’t reload the page and flowed smoothly to the next interface. 
-Canvas: Took some experimenting to make the canvas appear only after login and disappear after the animation.
-Task list events: Ensuring tasks respond correctly to clicks and toggles needed clear event binding.


## JavaScript Interactivity

Before this project, I wasn’t sure how to transition from a login screen to the main content. Through this example, I learned how to do it using JavaScript, and applied it in my project.

```javascript
function checkLogin() {
  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (name === "admin" && password === "1234") {
    document.getElementById("login").style.display = "none";
    showCanvas();
  } else {
    alert("Wrong credentials");
  }
}

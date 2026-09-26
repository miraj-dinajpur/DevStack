# Dev Stack Builder

A simple React website where users can explore different web development technologies and create their own technology stack by adding and removing technologies.

## Live Website

[Dev Stack Builder](https://my-dev-stack-reactapp.netlify.app)

## About The Project

I built this project as a React assignment to practice working with components, props, state, JSON data, responsive design, and user interactions.

The website shows different technologies with their category, difficulty level, rating, description, and other information. Users can add technologies to their own stack and remove them whenever they want.

## Technologies I Used

* React.js
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* Vite
* JSON

## Main Features

* Responsive navbar for desktop and mobile devices
* Technology cards with category, difficulty, rating, and description
* Users can add technologies to their own stack
* Duplicate technologies cannot be added
* Users can remove individual technologies or remove all technologies
* Toast notifications for add, remove, duplicate add, and remove all actions
* Technology information is loaded from a JSON file
* Loading state while the data is being loaded
* Responsive design for mobile, tablet, and desktop

## Project Structure

Some of the main components used in this project are:

* `App.tsx`
* `Nav`
* `Banner`
* `Technologies`
* `AvailableTechnologies`
* `AvailableTechnologiesCard`
* `type.ts`
* `data.json`

## How It Works

The technology data is stored in a JSON file. I fetch the data and display it using React components.

Each technology is shown in a card. When the user clicks **Add to Stack**, that technology is added to the stack section.

If a technology is already added, its button becomes disabled and the user gets a warning notification.

The stack also has a remove button for each technology and a **Remove All** button to clear the complete stack.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:**

JSX is a JavaScript extention. It is a syntax that let us write HTML-like code inside JavaScript.It is used in react because it makes easier to write and design the UI.

---

### 2. What is the difference between props and state?

**Answer:**

Props are like argument which is used to pass data from one component to another component. It has unidirectional relationship like parent to child.
State is used to manage a component to make changes while rendering, if any change happens inside the component. It allows us to design UI and update UI according to user behavior.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**

useState is used to store and update data in a component. In this project, I used it to store technologies which is added to stack by the user . Also I used here to store the button status to make button active and disable.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**

useEffect is used to run some code after the component renders. I haven't used it to fetch the technology data from the JSON file when the website loads because I used only `use()` hook.It is used for the sideeffect of API calls.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**

A unique key porps is used to pass the list with an identity that React can understand.It is used as a props.

---

### 6. What is conditional rendering? Show one place you used it.

**Answer:**

Conditional rendering means showing different UIs depending on conditions.
I used it in the Your Stack section. When no technology is selected, it shows an empty message. When technologies are added, it shows the selected technologies.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:**

A parent component can pass data to a child component using props. A child can send something back to the parent by calling a function that the parent passes to the child through props. I used useState, where I passed the data and function to child component and child component updated the data which rendered successfully inside UI.

## Author

**Name:** Md. Mahmudul Hasan Miraj

**Project:** Dev Stack Builder

**Take Love**

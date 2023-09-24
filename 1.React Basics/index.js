// import React from "react"
// import ReactDOM from "react-dom/client"

// In vanilla JS we create elements with .createElement but in react we have this method
// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// this is the old way to redering in react 17
// ReactDOM.render(navbar, document.getElementById("root"))

// new way in react 18.2
// ReactDOM.createRoot(document.getElementById('root')).render(navbar);

// above method can also be done this way
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

// JSX returns plain javascript objects
// -------------Thought experiment-------
const page = (
    <div>
        <h1>My awesome website in react</h1>
        <h3>Reasons I love react</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

// this will return a JS object as JSON (which is a string)
// document.getElementById('root').append(JSON.stringify(page))
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(page)
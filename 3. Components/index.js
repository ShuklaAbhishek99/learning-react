// Conventions to follow while creating a react component
// 1. name of fucntion as PascalCase
// 2. while using component wrap it up like this <TemporaryName />


// we can make functions and this will work like components
// a function that returns the react elements is considered as component (UI), like below
// 1. Challenge 1
// function TemporaryName() {
//     return (
//         <div>
//             <img src="react-logo.png" height="40px" width="40px" />
//             <h1>Fun facts about React</h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on Github</li>
//                 <li>Is maintained by Facebook/Meta</li>
//                 <li>Powers thousand of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'))
// // this is how to include the component
// root.render(<TemporaryName />)


// 2. Challenge 2
// function TemporaryName2() {
//     return (
//         <div>
//             <header>
//                 <nav>
//                     <img src="react-logo.png" width="40px" />
//                     <h1>I'm exicted to learn react beacuse:</h1>
//                     <ol>
//                         <li>Was first released in 2013</li>
//                         <li>Was originally created by Jordan Walke</li>
//                         <li>Has well over 100k stars on Github</li>
//                         <li>Is maintained by Facebook/Meta</li>
//                         <li>Powers thousand of enterprise apps, including mobile apps</li>
//                     </ol>
//                 </nav>
//             </header>
//             <footer>
//                 <small>&copy; 2023 Shukla development. All rights reserved</small>
//             </footer>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<TemporaryName2 />)


// 3. Challenge 3
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="react-logo.png" width="40px" />
//                 <h1>I'm exicted to learn react beacuse:</h1>
//                 <ol>
//                     <li>Was first released in 2013</li>
//                     <li>Was originally created by Jordan Walke</li>
//                     <li>Has well over 100k stars on Github</li>
//                     <li>Is maintained by Facebook/Meta</li>
//                     <li>Powers thousand of enterprise apps, including mobile apps</li>
//                 </ol>
//             </nav>
//         </header>
//     )
// }

// function TemporaryName3() {
//     return (
//         <div>
//             {/* we can also include components like this */}
//             <Header/>
//             <footer>
//                 <small>&copy; 2023 Shukla development. All rights reserved</small>
//             </footer>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<TemporaryName3 />)


// 4. Challenge 4
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="img"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2021 Shukla development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />)

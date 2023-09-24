const page = (
    <div>
        <img src="react-logo.png" height="40px" width="40px"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook/Meta</li>
            <li>Powers thousand of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(page)
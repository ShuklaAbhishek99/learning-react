// import Header from './components/Header.js'
// import Footer from './components/Footer.js'
// import MainContent from './components/MainContent.js'

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

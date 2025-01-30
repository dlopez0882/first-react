// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById("root"))

function Header() {
    return (
        <header className="header">
            <img src="../src/assets/react.svg" className="nav-logo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <main>
            <h1>
                Reason I am excited to learn React
            </h1>
            <ol>
                <li className="main-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li className="main-list-item">itsed do eiusmod tempor incididunt ut labore et dolore magna aliquaem2</li>
                <li className="main-list-item">Ut enim ad minim veniam</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <small>&copy; 2025 test development. All rights reserved.</small>
        </footer>
        
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

root.render(
    <Page />
)
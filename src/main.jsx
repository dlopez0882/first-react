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
        <header>
            <img src="../src/assets/react.svg" width="40%" alt="React logo" />
        </header>
    )
}

function Page() {
    return (
        <>
            <Header />
            <h1>
                Reason I am excited to learn React
            </h1>
            <main>
                <ol>
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                </ol>
            </main>
        </>
    )
}

root.render(
    <Page />
)
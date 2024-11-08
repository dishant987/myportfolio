
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.jsx'

createRoot(document.getElementById('root')).render(

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <App />
    </ThemeProvider>


)

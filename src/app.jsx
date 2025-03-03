import ReactDOM from 'react-dom/client'
import './app.css'

const tech = 'React and Vite'

function App() {
  return <h1 className="font-mono text-4xl">Hello {tech}!</h1>
}

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)

root.render(<App />)

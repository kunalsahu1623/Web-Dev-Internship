import './index.css'
import { AddingTailwind } from './AddingTailwind';
// External CSS
function App() {
    return (
        <div>
            {/* Internal CSS */}
            <style>
                {`p{
                   color:blue;
                }`}
            </style>
            { /* Inline CSS */}
            <h1 style={{ color: "blue" }} >my react is working</h1>
            <p>This is my p tag</p>
            <h2>This is my External CSS</h2>
            <AddingTailwind/>
        </div>
    )
}

export { App };
import { VariableInJsx } from "./VariableInJsx.js"
import { ConditionInJsx } from "./ConditionInJsx.js"
import { FunctionInJsx } from "./FunctionInJsx.js"

function App() {
    return (
        <div>
            {/* inside curly braces we write javascript expression */}
            <h1>react is working</h1>
            <VariableInJsx/>
            <ConditionInJsx/>
            <FunctionInJsx/>
        </div>
    )
}

export { App } ;
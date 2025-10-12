import { add } from './utils/add.js'
import { subtract} from './utils/subtract.js'

console.log(add(1,2));
console.log(subtract(2,1));

const App = () => <h1>React without cra</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
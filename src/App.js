/* Styles */
import './App.css';
/* Components */
import Card from './Card';

function App() {
    return (
    <div className="app-main">
        <Card name="JB" age={20} gender="Male"/>
        <Card name="John" age={20} gender="Male"/>
        <Card name="Benedict" age={20} gender="Male"/>
        <Card name="John Benedict" age={20} gender="Male"/>
    </div>
    );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './extra.css'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

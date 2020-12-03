import './style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import RainingPage from './components/RainPage/RainingPage'



function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' render={(rp) => <RainingPage {...rp}/> }></Route>
      </Switch>
      
    </div>
  );
}

export default App;

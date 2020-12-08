import './style/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import RainingPage from './components/RainPage/RainingPage'
import ModernPage from './components/Modern/ModernPage'


function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path='/' render={(rp) => <RainingPage {...rp}/> }></Route>
        <Route exact path='/modern' render={(rp) => <ModernPage {...rp}/>}></Route>
      </Switch>
      
    </div>
  );
}

export default App;

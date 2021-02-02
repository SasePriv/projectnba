import React, {useState, useEffect} from 'react'
import {Route, Switch, BrowserRouter } from 'react-router-dom'
import PlayerList from './pages/PlayerList/playerList'
import PlayerMatches from  './pages/PlayerMatches/playerMatches'
import PlayerDetail from './pages/PlayerDetail/playerDetail'
import Axios from 'axios'
import './App.css';

const App = () => {

  const [dataNBA, setDataNBA] = useState([])

  const dataHeightsNBA = async() => {

    const data = await Axios.get('https://mach-eight.uc.r.appspot.com/');
    
    if(!data){
      console.log("Error fetching data")
    }else{      
      setDataNBA(data.data.values)
    }

  }

  useEffect(() => {
    dataHeightsNBA();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/" exact render={props => (<PlayerList {...props} dataNBA={dataNBA} />)} />

          <Route path="/playermatches" render={props => (<PlayerMatches {...props} dataNBA={dataNBA} />)} />

          <Route path="/playerdetail/:name" render={props => (<PlayerDetail {...props} dataNBA={dataNBA} />)} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

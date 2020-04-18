import React from 'react';
import './styles.scss';
import Players from './Components/Players'
import Navbar from './Components/Navbar'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        players: []
    };
  }

  componentDidMount() {
     fetch(`http://localhost:5000/api/players`)
     .then(res=>res.json())
     .then(player =>{
         console.log('tarik', player)
         this.setState({players: player})
     })
     .catch(err =>{
      console.log("Err: ", err);
     })
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        {this.state.players.map(woman => (
          <Players key={woman.id}
          name={woman.name}
          country={woman.country}
          searches={woman.searches}
          /> 
        ))}
      </div>  
    )
  }
}

export default App;

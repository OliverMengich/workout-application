import React from 'react';
import './App.css';
import HomePage from './pages/Homepage.component';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        day: '',
        workout: '',
    }
  }
  
   componentDidMount() {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var date = new Date();
    var todayDate = date.getDay();
    switch (todayDate) {
      case 1:
        this.setState({ day: days[0], workout: 'Leg and Quads', index: 0})
        break;
      case 2:
        this.setState({ day: days[1], workout: 'Chest and Forearm', index: 1 })
        break;
      case 3:
        this.setState({ day: days[2], workout: 'Back', index: 2})
        break;
      case 4:
        this.setState({ day: days[3], workout: 'Biceps and Shoulders', index: 3})
        break;
      case 5:
        this.setState({ day: days[4], workout: 'Triceps and Abs', index: 4})
        break;
      default:
        break;
    }
  }
  render() {
    
    return (
      <div className="App">
          <HomePage { ...this.state } />
         
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import * as Icon from 'react-bootstrap-icons';
import Column1 from './components/Column1'; 
import Column2 from './components/Column2';
import Column3 from './components/Column3';
import { Component } from 'react/cjs/react.production.min';
import { Col, Tabs, Tab } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();

    this.state ={
      width: window.innerWidth
    };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

  render() {
    if(this.state.width >= 768){
      return(
        <div className="App" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>  
          <Column1/>
          <Column2/>
          <Column3/>
        </div>
      );
    }

    if(this.state.width < 768){
      return(
        <Tabs className='col-12 main-tab'>
          <Tab className='tab-1'eventKey='Column1'title="Home">
            <Column1 />
          </Tab>
          <Tab className='tab-2' eventKey='Column2' title='Column2'>
            <Column2 />
          </Tab>
          <Tab className='tab-3' eventKey='Column3' title="Column3">
            <Column3 />
          </Tab>
        </Tabs>
      )
    }
  }
}

export default App;

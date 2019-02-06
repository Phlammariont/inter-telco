import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Drawer from "./components/drawer";
import Slides from "./components/slides";

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            openFirst: false,
            openSecond: false,
            openThird: false,
            currentIndex: 0,
            slidesInfo: [
                {titulo: 'mi primer texto', imageRigth: true},
                {titulo: 'mi segundo texto'},
                {titulo: 'mi tercer texto'}
            ]
        }
    }

    showDrawer = (drawer) => {
        return () => {
            this.setState({
                ['open' + drawer]: true
            })

            console.log("click")
        }

    }

    next = () => {
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })
    }

    prev = () => {
        this.setState({
            currentIndex: this.state.currentIndex - 1
        })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <Fab color="primary" aria-label="Add" onClick={this.next}>
                <AddIcon />1
            </Fab>
            <Slides content={this.state.slidesInfo[this.state.currentIndex]}/>
            <Fab color="primary" aria-label="Add" onClick={this.prev}>
                <AddIcon />1
            </Fab>
        </header>
        <main>
            <Fab color="primary" aria-label="Add" onClick={this.showDrawer('First')}>
                <AddIcon />1
            </Fab>
            <Fab color="secondary" aria-label="Add" onClick={this.showDrawer('Second')}>
                <AddIcon />2
            </Fab>
            <Fab color="primary" aria-label="Add" onClick={this.showDrawer('Third')}>
                <AddIcon />3
            </Fab>
            <Drawer open={this.state.openFirst} texto={'mi primer drawer'} withCosito={true}/>
            <Drawer open={this.state.openSecond} texto={'mi segundo drawer'}/>
            <Drawer open={this.state.openThird} texto={'mi tercer drawer'}/>
        </main>
      </div>
    );
  }
}

export default App;

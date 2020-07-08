import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import NameCard from './components/NameCard'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments:['第一条留言','第二条留言']
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }

  render(){
    let {comments} = this.state
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        <DigitalClock />
        <CommentList comments={this.state.comments}/>
        <CommentBox handleSubmit={this.handleSubmit} commmentsLength={comments.length}/>
      </div>
    )
  } 
}

export default App;

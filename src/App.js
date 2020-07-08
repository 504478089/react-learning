import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ThemeContext from './theme-context'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'

const themes = {
  light:{
    classnames:'btn btn-primary',
    bgColor:'#eeeeee',
    secondaryBgColor:'#fff',
    color:'#000'
  },
  dark:{
    classnames:'btn btn-light',
    bgColor:'#5a6268',
    secondaryBgColor:'#999',
    color:'#fff'
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      comments:['第一条留言','第二条留言'],
      theme:'light'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }

  handleSubmit(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  changeTheme(theme){
    this.setState({
      theme
    })
  }
  render(){
    let {comments} = this.state
    return (
      <ThemeContext.Provider  value={themes[this.state.theme]}>
        <ThemeContext.Consumer>
           {
             theme=>{
               return(
                <div className="App" style={{backgroundColor:theme.bgColor,color:theme.color}}>
                  <a href="#theme-switcher" 
                    className="btn btn-light"
                    onClick={()=>{this.changeTheme('light')}}
                  >
                    浅色主题
                  </a>
                  <a href="#theme-switcher" 
                    className="btn btn-secondary"
                    onClick={()=>{this.changeTheme('dark')}}
                  >
                    深色主题
                  </a>
                  <DigitalClock />
                  <CommentList comments={this.state.comments}/>
                  <CommentBox handleSubmit={this.handleSubmit} commmentsLength={comments.length}/>
                </div>
               )
             }
           }
        </ThemeContext.Consumer>
        
      </ThemeContext.Provider>
    )
  } 
}

export default App;

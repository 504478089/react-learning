import React from 'react'
import ThemeContext from '../theme-context'
class DigitalClock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date:new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                date:new Date()
            })
        }, 1000);
    }
    componentDidUpdate(currentProps,currentState){
        
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return (
            <ThemeContext.Consumer>
                {
                    theme =>{
                        return (
                            <div style={{textAlign:'right',backgroundColor:theme.bgColor,color:theme.color}}>
                                <h4>{this.state.date.toLocaleTimeString()}</h4>
                                
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
            
        )
    }
}
export default DigitalClock
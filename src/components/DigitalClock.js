import React from 'react'

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
            <div style={{textAlign:'right'}}>
                <h4>{this.state.date.toLocaleTimeString()}</h4>
                
            </div>
        )
    }
}
export default DigitalClock
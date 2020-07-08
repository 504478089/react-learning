import React from 'react'

class NameCard extends React.Component{
    render(){
        const {name,number} = this.props
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                </ul>
            </div>
        )
    }
}
export default NameCard
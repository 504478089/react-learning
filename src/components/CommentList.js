
import React from 'react'
import ThemeContext from '../theme-context'
/**
 * @必传参数 comments Array
 * @留言内容组件
 * @class CommentList
 * @extends {React.Component}
 */
class CommentList extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            
        }
    }
    render(){
        const {comments} = this.props
        console.log(this.props)
        return (
            <ThemeContext.Consumer>
                {
                    theme =>{
                        return(
                            <div className="commont-list-component mb-3" style={{textAlign:'left',backgroundColor:theme.bgColor,color:theme.color}}>
                                <label>评论列表</label>
                                <ul className="list-group">
                                    {
                                        this.props.comments.map((comment,index)=>{
                                            return <li key={index} className="list-group-item" style={{backgroundColor:theme.secondaryBgColor}}>{comment}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                }
            </ThemeContext.Consumer>
            
        )
    }
}
export default CommentList
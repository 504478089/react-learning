
import React from 'react'
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
            <div className="commont-list-component mb-3" style={{textAlign:'left'}}>
                <label>评论列表</label>
                <ul className="list-group">
                    {
                        this.props.comments.map((comment,index)=>{
                            return <li key={index} className="list-group-item">{comment}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default CommentList
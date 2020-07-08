import React from 'react'

class Welcome extends React.Component {
    render() {
        const todoList = ['第一项','第二项']
        const isLogin = true
        return (
            <div>
                <h1>Hello React!</h1>
                {
                    todoList.map((item)=>{
                    return <li>{item}</li>
                    })
                }
                {isLogin?<p>已经登录</p>:<p>请登录</p>}
            </div>
        )
    }
}

export default Welcome

/** jsx是一种语法糖 -React.createElement()
 *  jsx编译后生成ReactElement 对象
 */



/** 
<div className="shopping-list">
  <h1>Shopping List for {props.name}</h1>
  <ul>
    <li>Instagram</li>
    <li>WhatsApp</li>
    <li>Oculus</li>
  </ul>
</div>; 
*/

/**
React.createElement("div", {
  className: "shopping-list"
}, React.createElement("h1", null, "Shopping List for ", props.name), React.createElement("ul", null, React.createElement("li", null, "Instagram"), React.createElement("li", null, "WhatsApp"), React.createElement("li", null, "Oculus"))); */
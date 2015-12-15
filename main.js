import React from 'react'
import ReactDOM from 'react-dom'

/* Create components with React.createClass() */
// const MyCounterComponent = React.createClass({
//
//   getInitialState: function() {
//     return {
//       clicks: 0
//     }
//   },
//
//   handleClick: function() {
//     console.log('This is', this)
//     this.setState({
//       clicks: this.state.clicks + 1
//     })
//   },
//
// 	render: function() {
// 		return (
//       <div>
//         Number of clicks: { this.state.clicks }
//         <div>
//           <button onClick={this.handleClick}> Click me! </button>
//         </div>
//       </div>
//     )
// 	}
// })

/* Create components with ES6 classes */
// class MyCounterComponent extends React.Component {
//
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       clicks: 0
//     }
//   }
//
//   handleClick(){
//     console.log('This is', this)
//     this.setState({
//       clicks: this.state.clicks + 1
//     })
//   }
//
// 	render() {
// 		return (
//       <div>
//         Number of clicks: { this.state.clicks }
//         <div>
//           <button onClick={this.handleClick}> Click me! </button>
//         </div>
//       </div>
//     )
// 	}
// }

/* Create components with ES7 property initializers */
// class MyCounterComponent extends React.Component {
//
//   state = { clicks: 0 }
//
//   handleClick = () => {
//     console.log('This is', this)
//     this.setState({
//       clicks: this.state.clicks + 1
//     })
//   }
//
// 	render() {
// 		return (
//       <div>
//         Number of clicks: { this.state.clicks }
//         <div>
//           <button onClick={this.handleClick}> Click me! </button>
//         </div>
//       </div>
//     )
// 	}
// }


const root = document.getElementById("app")
ReactDOM.render(React.createElement(MyCounterComponent), root);

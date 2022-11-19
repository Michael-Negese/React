import React , {Component} from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome Visitor",
            button:<button onClick= {() =>this.changeMessage()}>Subscribe</button>,
            button2:<button onClick= {() =>this.changeMessagebutton()}>Subscribed</button>
        }
    } 
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing',
            button:<button onClick= {() =>this.changeMessage()}>Subscribed</button>
        })
    }
    changeMessagebutton(){
        this.setState({
            message: 'Welcome vistors',
            button:<button onClick= {() =>this.changeMessage()}>Subscribe</button>
        })
    }
  render() {
        return (
        <div>
            <h1>
               {this.state.message}
                   </h1>
                   {/* <button onClick= {() =>this.changeMessage()}>Subscribe</button> */}
                    {this.state.button}
                   
        </div>   

        )
            
}
}

export default Message;
import React , {Component} from "react";

class Welcome extends Component {
    render() {
        return <h1>{this.props.Name} A.K.A {this.props.marvelName}</h1>    
            
}
}

export default Welcome;
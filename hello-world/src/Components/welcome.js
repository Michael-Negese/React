import React , {Component} from "react";

class Welcome extends Component {
    
    render() {
        const {Name,marvelName} = this.props;
        return <h1>{Name} A.K.A {marvelName}</h1>    
            
}
}

export default Welcome;
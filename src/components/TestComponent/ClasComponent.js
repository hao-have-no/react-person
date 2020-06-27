import React, {Component} from 'react';

class ClasComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }

    componentDidMount(){
        this.timerId=setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000);
    }

    componentWillMount(){
        clearInterval(this.timerId);
    }

    componentDidUpdate(){
        console.log('update timer');
    }

    render() {
        return (
            <div>
               <h3>ClasComponent</h3>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default ClasComponent;
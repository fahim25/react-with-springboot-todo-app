import React, { Component  } from 'react'
import PropTypes  from 'prop-types';
import './Counter.css'


class Counter extends Component{

    constructor(){
        super();
        this.state = {
            counter : 0
        }

    };

    render(){
        return (
            <div className="counter mt-10">
              <CounterButton by={1} incermentMethod={this.incerment} decermentMethod={this.decerment} />
              <CounterButton by={5} incermentMethod={this.incerment} decermentMethod={this.decerment}/>
              <CounterButton by={10} incermentMethod={this.incerment} decermentMethod={this.decerment}/>
               <span className='count'>{this.state.counter}</span>
               <div>
                    <button className='reset' onClick={this.reset}>Reset</button>
               </div>
            </div>
        );
    }

    reset = () =>{
        this.setState({
            counter: 0
        });
    }


    incerment = (by) =>{
        // console.log(`Incerment by - ${by}`);
        this.setState({
            counter: this.state.counter + by,
            // secondCounter: this.state.secondCounter + 1
        });
        
    } 

    decerment = (by) =>{
        this.setState({
            counter: this.state.counter - by,
            // secondCounter: this.state.secondCounter + 1
        });
        
    } 




}


class CounterButton extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0,
            // secondCounter: 100
        }

        this.incerment = this.incerment.bind(this);
        this.decerment = this.decerment.bind(this);

    };

  render = (props) =>{
        return (
            <div className='counter'>
                <button onClick={this.incerment}>+{this.props.by}</button>
                <span> </span>
                <button className='mt-1' onClick={this.decerment}>-{this.props.by}</button>
                {/* <span className='count'>{this.state.secondCounter}</span> */}
            </div>
        )
    }

    incerment = () =>{
        this.setState({
            counter: this.state.counter + this.props.by,
            // secondCounter: this.state.secondCounter + 1
        });
        this.props.incermentMethod(this.props.by)
    }  

    decerment = () =>{
        this.setState({
            counter: this.state.counter - this.props.by,
            // secondCounter: this.state.secondCounter + 1
        });
        this.props.decermentMethod(this.props.by)
    }

}


CounterButton.defaultProps={
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}
  


export default Counter

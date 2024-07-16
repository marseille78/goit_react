import { Component } from 'react';

import "./Counter.css";

class Counter extends Component {

    static defaultProps = {
        initialValue: 10,
    };

    /* static propTypes = {
        // 
    }; */

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = (e) => {
        this.setState(({value}) => {
            return ({
                value: value + 1,
            });
        });
    };
    
    handleDecrement = (e) => {
        this.setState(({value}) => {
            return ({
                value: value - 1,
            });
        });
    };

    render() {
        const {value} = this.state;

        return (
            <div className='Counter'>
                <span className="Counter__value">{value}</span>

                <div className="Counter__controls">
                    <button type='button' onClick={this.handleIncrement}>Увеличить на 1</button>
                    <button type='button' onClick={this.handleDecrement}>Уменьшить на 1</button>
                </div>
            </div>
        );
    }
}

export default Counter;
import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {index, number, increase, descrease} = this.props;
        return (
            <div>
                <button onClick={() => descrease(index)}>-</button>
                <input value={number}/>
                <button onClick={() => increase(index)}>+</button>
            </div>
        )
    }
}

export default Counter;
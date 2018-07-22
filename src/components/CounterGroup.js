import React, {Component} from 'react';
import Counter from "./Counter";

class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.amount = React.createRef();
    }

    handleInput = (ev, amount) => {
        if (ev.keyCode == 13) {
            this.props.handleEnter(amount);
            this.amount.current.value = "";
        }
    }

    render() {
        const {amount, numbers, increase, descrease} = this.props;
        const items = [];

        for (let i = 0; i < amount; i++) {
            items.push(<Counter
                index={i}
                number={numbers[i]}
                increase={increase}
                descrease={descrease}
            />)
        }
        return (
            <div>
                <input type="text" ref={this.amount}
                       onKeyDown={(ev) => this.handleInput(ev, this.amount.current.value)}/>
                {items}
            </div>

        )
    }
}

export default CounterGroup;
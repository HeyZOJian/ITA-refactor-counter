import CounterGroup from "../components/CounterGroup";
import {connect} from "react-redux";
import {increase, descrease,init} from "../actions";

const mapStateToProps = (state, props) => {
    return {
        amount: state.amount,
        numbers: state.numbers,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        increase: (index) => {
            dispatch(increase(index))
        },
        descrease: (index) => {
            dispatch(descrease(index))
        },
        handleEnter: (amount) => {
            dispatch(init(amount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
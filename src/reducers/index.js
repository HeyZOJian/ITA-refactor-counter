const initState = {
    amount: 0,
    numbers: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'INIT': {
            const numbers = [];
            for (let i = 0; i < action.amount; i++) {
                numbers.push(0);
            }
            const newState = [...state];
            newState.amount=action.amount;
            newState.numbers = numbers;
            return newState;
        }
        case 'INCREASE':{
            const numbers = state.numbers.concat();
            numbers[action.index]+=1;
            return Object.assign({}, state, state.numbers=numbers);
        }
        case 'DESCREASE':
            const numbers = state.numbers.concat();
            numbers[action.index]-=1;
            return Object.assign({}, state, state.numbers=numbers);
        default:
            return state;
    }
}
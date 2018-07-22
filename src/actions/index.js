export const increase=(index)=>{
    return {
        type:'INCREASE',
        index
    }
}

export const descrease = (index)=>{
    return{
        type:'DESCREASE',
        index
    }
}

export const init = (amount)=>{
    return {
        type:'INIT',
        amount
    }
}
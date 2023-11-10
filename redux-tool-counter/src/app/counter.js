import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    value: 0
}
const counterSlices = createSlice({

    name: 'counter',
    initialState,
    reducers:{
        increment: (state)=>{

            state.value += 1;
            if(state.value > 20){
                state.value = 20;
            }
        },
        decrement: (state)=>{
            
            state.value -= 1;
            if(state.value < 0){
                state.value = 0;
            }
        },
        incrementByVal: (state, actions)=>{
            state.value += actions.payload;
            if(state.value > 50){
                state.value = 0;
            }
        },
        deccrementByVal: (state, actions)=>{
            state.value -= actions.payload;
            if(state.value < 0){
                state.value = 50;
            }
        },
        conditionalUpdate: (state, actions)=>{
            if(actions.payload.condition){
                state.value = actions.payload.new_value
            }

        }

    }
});

export const {increment, decrement, conditionalUpdate, incrementByVal, deccrementByVal} = counterSlices.actions;
export default counterSlices.reducer;
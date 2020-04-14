import {useCallback, useReducer} from 'react';

const formReducer = (state, action) => {
    // ngubah state make reducer
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

export const useForm = (initialInputs, initialFormValidity) => {
    // state apakah true(isValid) ato false(!isValid)
    const [formState,
        dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });

    // fetch ke object= id, data sama validation
    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid: isValid, inputId: id});
    }, []);

    return [formState, inputHandler];
};

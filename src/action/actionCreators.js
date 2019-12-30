import { ADD_ITEM, REMOVE_ITEM } from "./actionType";

export const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM: {
            const id = Math.floor(Math.random() * 1000)
            return [
                ...state,
                {
                    id: id,
                    items: action.payload,
                    isEdit: false
                }
            ]
        }
        case REMOVE_ITEM: {
            return  state.filter(val => val.id !== action.payload);
        }

        default:
            return state;
    }
}

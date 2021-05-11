export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '_INIT_'})
    const subscribes = []

    return {
        getState() {
            return state
        },
        subscribe(callback) {
            subscribes.push(callback)
        },
        dispatch(action) {
            state =  rootReducer(state, action)
            subscribes.forEach(sub => sub())
        }
    }
}
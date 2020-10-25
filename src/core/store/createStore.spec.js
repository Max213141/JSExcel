import {createStore} from "./createStore";

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return {...state, count: state.count+1}
    }
    return state
}

describe('Test', () =>{
    let store
    let handler

    beforeEach(() => {
        store = createStore(reducer, initialState)
        handler = jest.fn()
    })

    test('CreateStore should return store obj', ()=>{
        expect(store).toBeDefined()
        expect(store.dispatch).toBeDefined()
        expect(store.subscribe).toBeDefined()
        expect(store.getState).toBeDefined()
    })

    test('should return obj as a state', ()=>{
        expect(store.getState()).toBeInstanceOf(Object)
    })

    test('should return default state', ()=>{
        expect(store.getState()).toEqual(initialState)
    })

    test('should change state if action exist', () =>{
        store.dispatch({type: 'ADD'})
        expect(store.getState().count).toBe(1)
    })

    test('should change state if action not exist', () =>{
        store.dispatch({type: 'NOT_EXIST'})
        expect(store.getState().count).toBe(0)
    })

    test('should call subscriber function', () =>{
        store.subscribe(handler)

        store.dispatch({type: 'ADD'})

        expect(handler).toHaveBeenCalled()
        expect(handler).toHaveBeenCalledWith(store.getState())
    })

    test('should not call sub if unsubscribe', () =>{
        const unsub = store.subscribe(handler)

        unsub.unsubscribe()

        store.dispatch({type: 'ADD'})

        expect(handler).not.toHaveBeenCalled()
    })

    test('should dispatch in async way', () =>{
        return new Promise( resolve => {
            setTimeout(() => {
                store.dispatch({type: 'ADD'})
            }, 500)

            setTimeout(() => {
                expect(store.getState().count).toBe(1)
                resolve()
            }, 1000)
        })
    })
})
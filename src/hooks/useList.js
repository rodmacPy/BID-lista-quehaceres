import { useEffect, useReducer } from "react"
import { listReducer } from "../components/"

const init = () => {
    return JSON.parse(localStorage.getItem('lists') || JSON.stringify([]))
}

export const useList = () => {
    const [lists, dispatch] = useReducer(listReducer, [], init)
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(lists))
    }, [lists])

    const handleNewList = (list) => {
        dispatch({
            type: '[LIST] Add item',
            payload: list
        })
    }

    const handleRemoveItem = (id) => {
        dispatch({
            type: '[LIST] Remove item',
            payload: id
        })
    }

    const handleToggleItem = (id) => {
        dispatch({
            type: '[LIST] Toggle item',
            payload: id
        })
    }

    return {
        lists,
        handleNewList,
        handleRemoveItem,
        handleToggleItem,
        listCount: lists.length,
        pendingListCount: lists.filter(list => !list.done).length
    }
}

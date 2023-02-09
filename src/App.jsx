
import { ListAdd } from "./components/ListAdd"
import { ListApp } from "./components/ListApp"
import { useList } from "./hooks/useList"


export const App = () => {
    const {handleNewList, handleRemoveItem, handleToggleItem, listCount, lists, pendingListCount} = useList()
    return (
        <>
            <h1>Lista Quehaceres: {listCount} <small>Pendientes: {pendingListCount}</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <ListApp 
                    lists={lists} 
                    onRemoveItem={handleRemoveItem} 
                    onToggleItem={handleToggleItem}/>
                </div>

                <div className='col-5'>
                    <h4>Agregar Lista</h4>
                    <hr />
                    <ListAdd onNewList={handleNewList} />

                </div>
            </div>
        </>
    )
}

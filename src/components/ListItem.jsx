export const ListItem = ({ list, onRemoveItem, onToggleItem }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className={`align-self-center ${list.done ? 'text-decoration-line-through' : ''}`}>
                {list.description}
            </span>

            <div className='d-flex gap-3'>
                <input
                    className="form-check-input align-self-center"
                    type="checkbox"
                    checked={(list.done) ? 1 : 0}
                    value={list.id}
                    onChange={() => onToggleItem(list.id)}
                >
                </input>

                <button
                    className='btn btn-danger'
                    onClick={() => onRemoveItem(list.id)}
                >
                    Borrar
                </button>

            </div>
        </li>
    )
}

import { ListItem } from './'

export const ListApp = ({ lists, onRemoveItem, onToggleItem }) => {
    return (
        <ul className='list-group'>
            {
                lists.map(list => (
                    <ListItem
                        key={list.id}
                        list={list}
                        onRemoveItem={onRemoveItem}
                        onToggleItem={onToggleItem}
                    />
                ))
            }
        </ul>
    )
}

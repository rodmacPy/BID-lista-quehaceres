import { useForm } from '../hooks/'

export const ListAdd = ({ onNewList }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    })
    const onFormSubmit = (event) => {
        event.preventDefault();
        if ( description.length <= 1) return;
        
        const newList = {
            id: new Date().getTime() + 1,
            description: description,
            done: false,
        }
        onNewList(newList)
        onResetForm()
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                placeholder='¿Qué tarea hay que hacer?'
                className='form-control'
                name='description'
                value={description}
                onChange={onInputChange}
            />

            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    )
}

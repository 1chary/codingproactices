// Write your code here

import './index.css'

const TodoItem = props => {
  const {element, deleteToDo} = props
  const {id, title} = element

  const onDelete = () => {
    deleteToDo(id)
  }

  return (
    <li className="item">
      <p className="title">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

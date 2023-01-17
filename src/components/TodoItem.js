import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const handleEditing = () => {
    console.log('edit mode activated');
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input type="text" className={styles.textInput} />
    </li>
  );
}

export default TodoItem;

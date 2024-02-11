import { useDispatch } from "react-redux";
import { create } from "../reducers/anecdoteReducer";
import {
  addNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const onCreateAnecdote = (e) => {
    e.preventDefault();
    console.log("e", e);
    const value = e.target.anecdote.value;
    console.log("input value", value);
    dispatch(create(value));
    dispatch(addNotification(`${value} created!`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };
  return (
    <form onSubmit={onCreateAnecdote}>
      <h2>create new</h2>
      <div>
        <input name="anecdote" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};
export default AnecdoteForm;

import { useDispatch } from "react-redux";
import { create, createAnecdote } from "../reducers/anecdoteReducer";
import {
  addNotification,
  removeNotification,
  setNotification,
} from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdote";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const onCreateAnecdote = async (e) => {
    e.preventDefault();
    console.log("e", e);
    const value = e.target.anecdote.value;
    console.log("input value", value);
    dispatch(createAnecdote(value));
    dispatch(setNotification(`Anecdote ${value} created!`));
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

import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const onCreateAnecdote = (e) => {
    e.preventDefault();
    console.log("e", e);
    const value = e.target.anecdote.value;
    console.log("input value", value);
    dispatch(createAnecdote(value));
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

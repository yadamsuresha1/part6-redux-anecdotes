import { useDispatch, useSelector } from "react-redux";
import { vote, voteAnecdote } from "../reducers/anecdoteReducer";
import {
  addNotification,
  removeNotification,
  setNotification,
} from "../reducers/notificationReducer";
import anecdote from "../services/anecdote";

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes
      .filter((anecdote) => anecdote.content.toLowerCase().includes(filter))
      .sort((a, b) => b.votes - a.votes);
  });

  const vote = (anecdote) => {
    dispatch(
      voteAnecdote({
        ...anecdote,
        votes: anecdote.votes + 1,
      })
    );
    dispatch(setNotification(`Anecdote "${anecdote.content}" voted!`));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;

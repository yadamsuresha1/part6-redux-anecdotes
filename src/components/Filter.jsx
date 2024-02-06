import { useDispatch } from "react-redux";
import { filterBy } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const filterValue = event.target.value;
    dispatch(filterBy(filterValue));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;

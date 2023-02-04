import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterContacts } from 'redux/selectors';
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContacts);

  const onFilterChange = query => {
    dispatch(setFilter(query));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={evt => onFilterChange(evt.target.value)}
      />
    </FilterLabel>
  );
};

import { setSearchInput } from '../data/secondReducer';
import styles from './TaskItem.module.css';
import { debounce } from './utils';
import { store } from '../data/store';
import { setSort, setFilter } from '../data/firstReducer';

let debouncedSearch = debounce((inputValue) => store.dispatch(setSort(inputValue), 1000));

export const SortButtons = ({
  openFilters,
  sortByAlphabet,
  sortById,
  useDispatch,
  useSelector,
}) => {
  const value = useSelector((state) => state.helperState.searchInput);
  const dispatch = useDispatch();

  // Состояние для переключения элементов интерфейса
  const filters = useSelector((state) => state.todoState.filters);

  function sortById() {
    const toggler = filters.byId === 'asc' ? 'desc' : 'asc';
    dispatch(setFilter({ ...filters, byId: toggler }));
    dispatch(setSort(`?_sort=id&_order=${toggler}`));
  }

  function sortByAlphabet() {
    const toggler = filters.byAlphabet === 'asc' ? 'desc' : 'asc';
    dispatch(setFilter({ ...filters, byAlphabet: toggler }));
    dispatch(setSort(`?_sort=title&_order=${toggler}`));
  }

  return (
    <>
      <div className={styles.search}>
        <input
          id="newTask"
          type="text"
          value={value}
          onChange={({ target }) => {
            debouncedSearch('?q=' + target.value);
            dispatch(setSearchInput(target.value));
          }}
        />
        <button type="submit"> Поиск </button>
      </div>
      <div className={styles.SortButtons}>
        <button onClick={openFilters}>Готово</button>
        <button onClick={sortByAlphabet}>
          По алфавиту {filters.byAlphabet === 'asc' ? '▼' : '▲'}
        </button>
        <button onClick={sortById}>По дате {filters.byId === 'asc' ? '▼' : '▲'}</button>
      </div>
    </>
  );
};

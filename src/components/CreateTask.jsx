import { SortButtons } from './SortButtons';
import { toggleIsOpenFilters } from '../data/secondReducer';

export function CreateTask({
  createTask,
  sortByAlphabet,
  sortById,
  useDispatch,
  useSelector,
}) {
  const isOpenFilters = useSelector((state) => state.helperState.isOpenFilters);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title: e.target.newTask.value,
    };

    e.target.newTask.value = '';
    createTask(payload);
  };

  function openFilters() {
    dispatch(toggleIsOpenFilters());
  }

  return (
    <>
      {isOpenFilters ? (
        <SortButtons
          sortById={sortById}
          sortByAlphabet={sortByAlphabet}
          openFilters={openFilters}
          useDispatch={useDispatch}
          useSelector={useSelector}
        />
      ) : (
        <>
          <form onSubmit={onSubmit}>
            <input id="newTask" type="text" />
            <button type="submit">Создать</button>
          </form>
          <button onClick={openFilters} type="submit">
            Сортировка
          </button>
        </>
      )}
    </>
  );
}

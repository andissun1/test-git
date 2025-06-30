import styles from './components.module.css';

<<<<<<< HEAD
function deleteSortStyles(target) {
=======
export function getValueByPath(object, path) {
  const str = path.split('.').reduce((acc, item) => acc[item], object);
  return str;
}

export function setArrowOnSort(target, sortBy) {
>>>>>>> DynamicTable123
  let titles = target.closest('tr').children;
  for (let title of titles) {
    title.classList.remove(styles.arrowUp, styles.arrowDown);
  }
<<<<<<< HEAD
}

export default function sortUsers(data, setData, { target }, columnName) {
  let newData = { ...data };

  if (data.sorted === columnName) {
    newData.users.reverse();

    target.classList.remove(styles.arrowUp);
    target.classList += styles.arrowDown;
    newData.sorted = '';
  } else {
    if (columnName === 'profession') {
      newData.users = data.users.sort((a, b) =>
        a[columnName].name > b[columnName].name ? 1 : -1
      );
    } else {
      newData.users = data.users.sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1));
    }

    newData.sorted = columnName;
    deleteSortStyles(target);
    target.classList += styles.arrowUp;
  }

  setData(newData);
=======

  if (sortBy.order === 'asc') {
    target.classList.add(styles.arrowDown);
  } else if (sortBy.order === 'desc') {
    target.classList.add(styles.arrowUp);
  }
}

export function getSortedUsers(data, sortBy) {
  const sortUsers = data.users.slice().sort((a, b) => {
    const aValue = getValueByPath(a, sortBy.path);
    const bValue = getValueByPath(b, sortBy.path);

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortBy.order === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortBy.order === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return sortUsers;
>>>>>>> DynamicTable123
}

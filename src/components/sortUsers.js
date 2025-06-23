import styles from './components.module.css';

function deleteSortStyles(target) {
  let titles = target.closest('tr').children;
  for (let title of titles) {
    title.classList.remove(styles.arrowUp, styles.arrowDown);
  }
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
}

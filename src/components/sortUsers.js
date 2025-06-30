import styles from './components.module.css';

export function getValueByPath(object, path) {
  const str = path.split('.').reduce((acc, item) => acc[item], object);
  return str;
}

export function setArrowOnSort(target, sortBy) {
  let titles = target.closest('tr').children;
  for (let title of titles) {
    title.classList.remove(styles.arrowUp, styles.arrowDown);
  }

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
}

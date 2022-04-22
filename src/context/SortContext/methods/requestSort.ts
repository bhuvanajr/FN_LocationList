export const requestSort = (sortConfig, setSortConfig, sortkey) => {
  let direction = 'ascending';
  if (sortConfig && sortConfig.key === sortkey && sortConfig.direction === 'ascending') {
    direction = 'descending';
  }
  setSortConfig({ sortkey, direction });
};

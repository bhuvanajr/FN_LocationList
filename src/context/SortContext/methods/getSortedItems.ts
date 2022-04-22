//currently works for string
//TODO: should be able to take compare functions depending on the sort-key
export const getSortedItems = (sortConfig: any, items: any) => {
  let sortableItems = [...items];
  if (sortConfig !== null) {
    sortableItems.sort((a, b) => {
      if (sortConfig!.direction === 'ascending') return a[sortConfig!.key].localeCompare(b[sortConfig!.key]);
      if (sortConfig!.direction === 'descending') return b[sortConfig!.key].localeCompare(a[sortConfig!.key]);
      return 0;
    });
  }
  return sortableItems;
};

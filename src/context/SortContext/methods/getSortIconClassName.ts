export const getSortIconClassName = (sortkey, sortConfig) => {
  if (!sortConfig) {
    return;
  }
  return sortConfig.key === sortkey ? sortConfig.direction : undefined;
};

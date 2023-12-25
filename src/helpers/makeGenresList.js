export const makeGenresList = array => {
  return array
    .map(({ name }) => {
      return name;
    })
    .join(', ');
};

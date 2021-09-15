export const getPages = (pagesCount: number) => {
  const pagesArray = [];

  let pageCount = 0;
  for (let i = 1; i < pagesCount; i += 30) {
    pageCount++;
    pagesArray.push(pageCount);
  }
  return pagesArray;
};

export const getUserExtendsByPage = (page: number) => {
  let limit = page * 30;
  let offset = limit - 30;
  return { limit, offset };
};

export const pagination = (rawData, page, numbers) => {
   const start = (page - 1) * numbers;
   const end = start + numbers;

   const data = rawData.slice(start, end);
   const totalPage = Math.ceil(rawData.length / numbers);

   return {
      data,
      totalPage,
      page,
   };
};

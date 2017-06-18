export function getRandomDate() {
  const start = new Date(2010, 1, 1);
  const end = new Date(2017, 5, 1);
  const random = new Date(start.getTime() + Math.random() * (end - start));
  const randomYear = random.getFullYear();
  let randomMonth = (random.getMonth()+1).toString();
  if(randomMonth.length < 2) randomMonth = '0'+randomMonth;
  let randomDay = random.getDate().toString();
  if (randomDay.length < 2) randomDay = '0'+randomDay;
  const randomDate = `${randomYear}-${randomMonth}-${randomDay}`;
  return randomDate;
}

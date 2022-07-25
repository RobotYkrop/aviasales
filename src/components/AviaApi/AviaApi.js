export const getApi = async () => {
  const res = await fetch('https://aviasales-test-api.kata.academy/search');
  if (!res.ok) {
    throw new Error('Не найден API' + `${res.status}`);
  }
  return await res.json();
};

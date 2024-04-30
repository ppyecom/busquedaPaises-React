
const getCountrieExternApi = async(countrie) => {
  const url = `https://restcountries.com/v3.1/name/${countrie}`;
  const resp = await fetch(url);
  const data = await resp.json();


  return data;
}

export default getCountrieExternApi
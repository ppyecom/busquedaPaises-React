/*https://pixabay.com/api/?key=43627122-1e6989e964235fecefccaa14e&q=yellow+flowers&image_type=photo*/
const getPhoto = async(object) => {
  const url = `https://pixabay.com/api/?key=43627122-1e6989e964235fecefccaa14e&q=${object}&image_type=photo&per_page=3`;
  const resp = await fetch(url);
  const data = await resp.json();

    return data;
}

export default getPhoto
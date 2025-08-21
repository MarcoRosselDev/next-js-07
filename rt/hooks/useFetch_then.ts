const useFetchT = (url: string) => {
  fetch(url)
    .then(d => d.json())
    .then(d => console.log(d)) // d = data
    .catch(e => console.log(e)) // e = error
}

export { useFetchT }
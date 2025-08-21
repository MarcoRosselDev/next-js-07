const useFetchS = async (url: string) => {
  try {
    const d = await fetch(url)
    const i = await d.json()
    console.log(i);
  } catch (error) {
    console.log(error);
  }
}

export { useFetchS }
async function getData() {
  const response = await fetch("Data.json")
  const data = await response.json()

  console.log("Data is:", data)
}

getData()
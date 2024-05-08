import { useEffect, useState } from "react"

export function createDoc(url, newDoc) {
  const [data, setData] = useState({})
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  if(url && data) {
    axios.post("http://localhost:3001" + url, newDoc, {
      headers: {
        "Authorization": token
      }
    })
      .then((response) => setData(response?.data))
      .catch((err) => console.log(err))
  }

  return { data }
}
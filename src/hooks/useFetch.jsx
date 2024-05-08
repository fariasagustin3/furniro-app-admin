import { useEffect, useState } from "react";
import axios from 'axios'

export function useFetch(url, page) {
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [token])

  useEffect(() => {
    if(page && token) {
      axios.get(`http://localhost:3001/${url}?page=${page}`, {
        headers: {
          "Authorization": token
        }
      })
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    } else if(token) {
      axios.get(`http://localhost:3001/${url}`, {
        headers: {
          "Authorization": token
        }
      })
        .then((response) => setData(response.data))
        .catch((err) => console.log(err));
    }
  }, [token, page])

  return { data }
}

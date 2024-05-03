import { useEffect, useState } from "react";
import axios from 'axios'

export function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/${url}`)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [])

  return { data }
}

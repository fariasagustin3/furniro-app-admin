import { useState } from "react"

export function createDoc(url, newDoc) {
  const [data, setData] = useState({})

  if(url && data) {
    axios.post("http://localhost:3001" + url, newDoc, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFndXN0aW4iLCJmdWxsTmFtZSI6IkFndXN0aW4iLCJlbWFpbCI6ImFndXNAZ21haWwuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNzE0Njg0MTI5fQ.KML8tAJESr1ovnvP1BpmJ1ABe6vwAoVvBGXE939VFx4"
      }
    })
      .then((response) => setData(response?.data))
      .catch((err) => console.log(err))
  }

  return { data }
}
import { useState } from 'react'
import data from '../data/member.json'

const Member = () => {
  const [isActiveMember,setIsActiveMember] = useState(false)
  const filteredData = isActiveMember ? data.filter(item => item.status === "mem") : data
  return (
<>
    <label htmlFor="">
      Active Member <input type="checkbox" name="" onChange={() => setIsActiveMember(!isActiveMember)} />
    </label>
    {filteredData.map((item, index) => (
      <div key={index}>
        <h1>{item.nama}</h1>
        <h4>Generasi {item.generasi}</h4>
        <p>Status: {item.status === 'exmem' ? 'Ex Member' : item.status === "mem" ? "Member Aktif" : ""}</p>
      </div>
    ))}
  </>
  )
}

export default Member

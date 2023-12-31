// import { useState } from 'react'

interface dataMember {
  nama : string;
  generasi : number;
  status: string;
}

const Member = ({ data }: { data: dataMember[] }) => {
  // const [isActiveMember,setIsActiveMember] = useState(false)
  const filteredData = data.filter(item => item.status === "mem").sort((a,b) => a.nama.localeCompare(b.nama))
  return (
<>
    <select name="" id="" defaultValue={""}>
      <option disabled value={""}>Select Member</option>
    {filteredData.map((item, index) => (
      <option key={index} value={item.nama}>{item.nama}</option>
    ))}
    </select>
  </>
  )
}

export default Member

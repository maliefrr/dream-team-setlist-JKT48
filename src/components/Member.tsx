import data from '../data/member.json'

const Member = () => {
  return (
<>
    {data.map((item, index) => (
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

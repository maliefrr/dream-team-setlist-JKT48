import Member from "./components/Member"
import { useState } from 'react';
import data from './data/member.json'
import "./style.css"

function App() {
  const [numPlayersSetlist, setNumPlayersSetlist] = useState(0);
  const [numPlayersTeam, setNumPlayersTeam] = useState(0);
  // const handleNumPlayersChange = (event) => {
  //   const inputValue = event.target.value;
  //   setNumPlayers(inputValue);
  // };

  const playDreamSetlist = () => {
    const table = [];
    for (let i = 0; i <= 16; i++) {
      const row = [];
      for (let j = 0; j <= numPlayersSetlist; j++) {
        row.push(<td key={`${i}-${j}`}>{i === 0 && j > 0 ? <input type="text" name={`Player${j}`} className='form-control' placeholder={`Input nama Player ${j}`}/> : j === 0 && i > 0? `${i}` : i >= 5 && i <= 9 ? <div className='unitsong'></div> : i === 13 ? <div className='encore'></div> : <div className='groupsong'></div>}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };
  const playDreamTeam = () => {
    const table = [];
    for (let i = 0; i <= 16; i++) {
      const row = [];
      for (let j = 0; j <= numPlayersTeam; j++) {
        row.push(<td key={`${i}-${j}`}>{i === 0 && j > 0 ? <input type="text" name={`Player${j}`} className='form-control' placeholder={`Input nama Player ${j}`}/> : j === 0 && i > 0? `${i}` : j === 0 && i === 0 ? <div className='groupsong'></div> : <div className="groupsong"><Member data={data}/></div>}</td>);
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };

  return (
    <>
    <div>
        <button
          onClick={() => {
            const input = prompt('Masukkan jumlah pemain:');
            const num = parseInt(input as string, 10);
            if (!isNaN(num)) {
              setNumPlayersSetlist(num);
            } else {
              alert('Jumlah pemain harus berupa angka.');
            }
            if(num > 6) {
              alert("Player tidak boleh lebih dari 6")
            }
            setNumPlayersTeam(0)
          }}
          className='btn btn-primary'
        >
          Dream Setlist
        </button>

        <button
          onClick={() => {
            const input = prompt('Masukkan jumlah pemain:');
            const num = parseInt(input as string, 10);
            if (!isNaN(num)) {
              setNumPlayersTeam(num);
            } else {
              alert('Jumlah pemain harus berupa angka.');
            }
            if(num > 6) {
              alert("Player tidak boleh lebih dari 6")
            }
            setNumPlayersSetlist(0)
          }}
          className='btn btn-primary'
        >
          Dream Team
        </button>


        {numPlayersSetlist > 0 && numPlayersSetlist <= 6 && (
                <table className='table'>
                  <tbody>{playDreamSetlist()}</tbody>
                </table>
              )}

        {numPlayersTeam > 0 && numPlayersTeam <= 6 && (
                <table className='table'>
                  <tbody>{playDreamTeam()}</tbody>
                </table>
              )}
      </div>
    </>
  )
}

export default App

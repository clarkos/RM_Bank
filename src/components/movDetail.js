import data from "../bankInfo.json"
import Form from 'react-bootstrap/Form';

// export const MovDetail = ({account, id}) => {
export const MovDetail = () => {
  let detail;
  try {
    detail = data[5].movements[1]
    console.log(detail);
  } catch (error) {
    console.log(error.message)
  }

  return (
    <div className="container">
      {/* <h2>intentando leer el error</h2> */}
      <h2>Detail for movement #<strong>{detail.id}</strong></h2>
      <>
        Type & Status: {detail.type} - <strong>{detail.state.toUpperCase()}</strong> <br />
        date: {detail.date === "" && <em>undefined movement date</em>} <br />
        Movement detail: <br/>
        <Form.Control type="text" placeholder={detail.detail} readOnly />
      </>
    </div>
  )
}
/* 

    "accountId": 82601,
    "ownerId": 1,
    "ownerName": "Rick Sanchez",
    "password": "RickSanchez",
    "avatar": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "address": "Citadel of Ricks",
    "from": "Earth (C-137)",
    "balance": "9958.59",
    "movements": [
                  {
                    "id": "8145",
                    "date": "",
                    "type": "debit",
                    "dueTo": "payment",
                    "state": "accepted",
                    "detail": "una operacion generada aleatoriamente"
                  }
    ],
    "haveLoans": []

*/
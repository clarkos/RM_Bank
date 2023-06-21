//import data from "../bankInfo.json";
import axios from "axios";
import { accountNumber, newBalance, newMovements } from "./numberGen";

export default async function ClientsGen() {
  
  console.log("iniciando la importacion");
  let preJson = [];

  const options = {
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
    params: { page: '3'},
  };

  let apiData = [];

  await axios
    .request(options)
    .then((response) => {
      console.log("se hizo la llamada, listo para procesar la respuesta");
      response.data.results.forEach((element) => {
        console.log("agregando elemento");
        apiData.push(element);
      });
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(apiData);
  console.log("cargando info en objeto para agregar a Json");

  apiData.forEach((el) => {
    let newAccount = {
      accountId: accountNumber(826, el.id),
      ownerId: el.id,
      ownerName: el.name,
      password: el.name.replace(/\s/g, ""),
      avatar: el.image,
      address: el.location.name,
      from: el.origin.name,
      balance: newBalance(),
      movements: [],
      haveLoans: [],
    };

    console.log(`cargando cliente nro ${el.id}`);
    newAccount.movements = newMovements();
    preJson.push(newAccount);
  });

  let count = preJson.length;
  console.log(JSON.stringify(preJson));

  console.log(`el array tiene ${count} clientes cargados`);

  return preJson;
}

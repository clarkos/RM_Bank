export const accountNumber = (total, id) => {
  let account = "";
  let filler = "";
  switch (toString(id).length) {
    case 1:
      filler = "000";
      break;
    case 2:
      filler = "00";
      break;
    default:
      filler = "0";
      break;
  }

  account = parseInt(`${total}${filler}${id}`);
  return account;
};

export const newBalance = () => {
  let newAmount = 0;
  let aleatory = 0;

  aleatory = Math.random() * 10000;
  newAmount = aleatory.toFixed(2);
  return newAmount;
};

export const newMovements = () => {
  const types = ["credit", "debit"];
  const states = ["accepted", "rejected", "in process"];
  let arr = [];

  for (let i = 0; i <= 15; i++) {
    let obj = {
      id: (Math.random() * 10000).toFixed(),
      date: "",
      type: types[Math.floor(Math.random() * types.length)],
      dueTo: "",
      state: states[Math.floor(Math.random() * states.length)],
      detail: "una operacion generada aleatoriamente",
    };
    if (obj.type === "credit") {
      obj.dueTo = "income";
    } else obj.dueTo = "payment";
    arr.push(obj);
  }

  return arr;
};

/*
const newLoan = () => {
  /* 
"loans": [
    {
      "Id": "",
      "adqAccount": "",
      "status": "",
      "adqDate": "",
      "capital": "",
      "interest": "",
      "qttyOfPayments": "",
      "balance": "",
      "remaining": {
        "remPayments": "",
        "amount": "",
        "expires": ""
      }
    }
  ]
*

  let obj = {};
  return obj;
}; */

// module.exports = { ApiCall, accountNumber, newBalance, newMovements, newLoan };

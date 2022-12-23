export const MOVEMENT = 'MOVEMENT';
// export const DEPOSIT = 'DEPOSIT';
// export const WITHDRAW = 'WITHDRAW';
// export const PAYMENT = 'PAYMENT';
// export const TRANSFER = 'TRANSFER';


export const movement = (payload) => {
  return {
    type: MOVEMENT,
    payload: {
      ...payload,
    }
  }
};

/* export const deposit = (payload) => {
  return {
    type: DEPOSIT,
    payload: {
      ...payload,
    }
  }
};

export const withdraw = (payload) => {
  return {
    type: WITHDRAW,
    payload: {
      ...payload,
    }
  }
};

export const transfer = (payload) => {
  return {
    type: TRANSFER,
    payload: {
      ...payload,
    }
  }
};

export const payment = (payload) => {
  return {
    type: PAYMENT,
    payload: {
      ...payload,
    }
  }
}; */
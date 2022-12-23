export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const PAYMENT = 'PAYMENT';
export const TRANSFER = 'TRANSFER';
export const ALERT = 'ALERT';


export const alert = (payload) => {
  return {
    type: ALERT,
    payload: {
      ...payload,
    }
  }
};

export const deposit = (payload) => {
  return {
    type: DEPOSIT,
    payload: {
      ...payload,
    }
  }
};

export const withdraw = (payload) => {
  return {
    type: DEPOSIT,
    payload: {
      ...payload,
    }
  }
};

export const transfer = (payload) => {
  return {
    type: DEPOSIT,
    payload: {
      ...payload,
    }
  }
};

export const payment = (payload) => {
  return {
    type: DEPOSIT,
    payload: {
      ...payload,
    }
  }
};
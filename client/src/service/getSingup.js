import {ENDPOINT} from './config_service';

export const SingUp = ({username, password, email, name, phone}) => {
  return fetch(`${ENDPOINT}/singup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password, email, name, phone})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { jwt } = res
    return jwt
  })
}
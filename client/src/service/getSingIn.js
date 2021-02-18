
import {ENDPOINT} from './config_service';

export const SingIn = ({username, password}) => {
  return fetch(`${ENDPOINT}/singin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username, password})
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { jwt } = res
    return jwt
  })
}
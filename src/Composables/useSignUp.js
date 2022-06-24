import {ref} from 'vue';
import { projectAuth } from '../configs/firebase'
const error = ref(null);
const isPending = ref(false);
function signUp(email, password, fullName) {
  error.value = null;
  try {
    const response = projectAuth.createUserWithEmailAndPassword(email, password)
    if(!response) throw new Error('Loi tai ....');
    return response;
  } catch (err) {
    console.error(err);
    err.value = err.message
  }

}
export function useSignUp() {

}
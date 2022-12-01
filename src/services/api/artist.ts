import { collection, query, where, getDocs } from 'firebase/firestore'
import { firestore } from '../firebase'

export async function getArtistByUsername<T>(username: string) {
  let result: T | undefined

  const usersReference = collection(firestore, 'user')
  const userQuery = query(usersReference, where('username', '==', username))

  const querySnapshot = await getDocs(userQuery)

  if (querySnapshot.size <= 0) throw new Error(`Artist with username ${username} not found`)

  querySnapshot.forEach((item) => {
    result = item.data() as T
  })

  return result
}

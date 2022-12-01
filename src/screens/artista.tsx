import { useState, useEffect, useMemo } from 'react'
import { getArtistByUsername } from '../services/api/artist'
import { useParams } from 'react-router-dom'

import AlbumList from '../components/AlbumList'
import MusicList from '../components/MusicList'
import PixIcon from '../components/PixIcon'

import type { Album, Music, User } from '../services/firebase.d'

export default function Artista() {
  const { id } = useParams()
  const [user, setUser] = useState<User>()

  const musicCount = useMemo(() => {
    if (!user) return 0

    let result = 0
    user.albums.forEach((album) => (result += album.musics.length))

    return result
  }, [user])

  useEffect(() => {
    async function findUser() {
      const user = await getArtistByUsername<User>(id?.replace('@', '')!)
      setUser(user)
    }

    findUser()
  }, [])

  // TODO: Grab this data from Firebase
  const followers = 10000

  if (!user) return null

  return (
    <div className='bg-neutral-800 h-full'>
      <div className='relative'>
        <img
          className='w-full h-64 object-cover pointer-events-none select-none'
          src='https://images.alphacoders.com/971/thumb-1920-971290.jpg'
          alt='banner'
        />
        <div className='flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 absolute top-24 md:top-36 inset-x-0 md:inset-x-auto md:left-8'>
          <img
            src='https://i.guim.co.uk/img/media/c1f430159c3e7e58c9b46098efde3dee7ba7d830/0_196_2515_1509/master/2515.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f554bca9c12ca49c79264bce18b42472'
            className='w-48 h-48 rounded-lg shadow-lg pointer-events-none select-none'
            alt='profile'
          />
          <div className='flex flex-col h-min bg-black/40 p-4 rounded-xl text-white'>
            <h1 className='text-4xl font-bold'>{user.name}</h1>
            <span className='text-lg font-semibold'>{followers.toLocaleString()} seguidores</span>
            <div className='flex space-x-2 mt-4'>
              <button className='w-full py-2 px-3 bg-violet-800 hover:bg-violet-700 rounded-md font-semibold'>
                Seguir
              </button>
              <button className='py-2 px-3 bg-violet-800 hover:bg-violet-700 rounded-md'>
                <PixIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white mt-52 md:mt-24 p-4'>
        <h1 className='font-bold text-2xl mb-4'>Populares</h1>
        {musicCount > 0 ? (
          user.albums.map((item, index) => (
            <MusicList key={index} data={item.musics} coverUrl={item.coverUrl} author={user.name} />
          ))
        ) : (
          <h1 className='text-lg text-neutral-600 font-semibold'>
            Você ainda não publicou nenhuma música...
          </h1>
        )}
      </div>
      <div className='text-white mt-4 md:mt-2 p-4'>
        <h1 className='font-bold text-2xl mb-4'>Álbuns</h1>
        <AlbumList data={user.albums} />
      </div>
    </div>
  )
}

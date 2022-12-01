import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AlbumList from '../components/AlbumList'
import MusicList from '../components/MusicList'
import AlbumCreatorModal from '../components/modals/AlbumCreatorModal'
import UploadMusicModal from '../components/modals/UploadMusicModal'
import { PlusIcon } from '@heroicons/react/20/solid'

import { AuthContext } from '../context/auth'

export default function Perfil() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const [uploadVisible, setUploadVisible] = useState(false)
  const [albumCreatorVisible, setAlbumCreatorVisible] = useState(false)

  const musicCount = useMemo(() => {
    if (!user) return 0

    let result = 0
    user.albums.forEach((album) => (result += album.musics.length))

    return result
  }, [user])

  const profileLetters = useMemo(() => {
    if (!user) return

    const splittedName = user.name.split(' ')
    const firstLetters = splittedName.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.charAt(0).toUpperCase().substring(0, 2),
      ''
    )

    return firstLetters
  }, [user])

  useEffect(() => {
    if (!localStorage.getItem('uid')) navigate('/login')
  }, [localStorage])

  if (!user) return null

  return (
    <div className='bg-neutral-800 h-full'>
      <div className='relative'>
        {user.bannerPhotoUrl && (
          <img
            className='w-full h-64 object-cover pointer-events-none select-none'
            src={user.bannerPhotoUrl}
          />
        )}
        <div className='w-full h-64 select-none pointer-events-none bg-violet-900'></div>
        <div className='flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 absolute top-24 md:top-36 inset-x-0 md:inset-x-auto md:left-8'>
          <img
            src={user.profilePhotoUrl}
            className={`w-48 h-48 rounded-lg shadow-lg pointer-events-none object-cover select-none ${
              !user.profilePhotoUrl && 'hidden'
            }`}
            alt='profile'
          />
          <div
            className={`w-48 h-48 flex justify-center items-center rounded-lg shadow-lg select-none bg-violet-800 ${
              user.profilePhotoUrl && 'hidden'
            }`}
          >
            <span className='text-white font-bold text-7xl'>{profileLetters}</span>
          </div>
          <div className='flex flex-col h-min bg-black/40 p-4 rounded-xl text-white'>
            <h1 className='text-4xl font-bold'>{user.name}</h1>
            <span className='text-lg text-neutral-300 font-semibold'>@{user.username}</span>
            <div className='flex space-x-2 mt-4'>
              <button className='w-full button-primary font-semibold'>Editar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white mt-52 md:mt-24 p-4'>
        <div className='flex items-center mb-4'>
          <h1 className='font-bold text-2xl'>
            Suas Músicas&nbsp;
            <span className='text-neutral-500 font-semibold'>
              ({musicCount} {musicCount === 1 ? 'música' : 'músicas'})
            </span>
          </h1>
          <button
            className='button-primary ml-4'
            title={
              user.albums.length <= 0
                ? 'Crie ao menos um álbum antes de enviar músicas'
                : 'Clique para enviar uma nova música'
            }
            disabled={user.albums.length <= 0}
            onClick={() => {
              setUploadVisible(true)
              document.body.style.overflow = 'hidden'
            }}
          >
            <PlusIcon className='w-5 h-5' />
          </button>
        </div>
        {/* TODO: Make this thing better */}
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
        <div className='flex items-center mb-4'>
          <h1 className='font-bold text-2xl'>Seus Álbuns</h1>
          <button
            className='button-primary ml-4'
            onClick={() => {
              setAlbumCreatorVisible(true)
              document.body.style.overflow = 'hidden'
            }}
          >
            <PlusIcon className='w-5 h-5' />
          </button>
        </div>
        {user.albums.length > 0 ? (
          <AlbumList data={user.albums} />
        ) : (
          <h1 className='text-lg text-neutral-600 font-semibold'>
            Você ainda não publicou nenhum álbum...
          </h1>
        )}
      </div>
      <UploadMusicModal user={user} visible={uploadVisible} setVisible={setUploadVisible} />
      <AlbumCreatorModal
        user={user}
        visible={albumCreatorVisible}
        setVisible={setAlbumCreatorVisible}
      />
    </div>
  )
}

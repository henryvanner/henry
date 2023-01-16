import Image from 'next/image'
import HomeIllustration from '../public/Home_illustration.svg'

export default function Home() {
  return (
    <div className='Home'>
      <h1 className='Home__Name'>HENRY AQUINO</h1>
      <h2 className='Home__ProfessionTitle'>Informatic Engineer</h2>
      <Image
        className='Home__Illustration'
        src={HomeIllustration}
        alt='Funcy Desktop'
      />
    </div>
  )
}

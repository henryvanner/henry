import Image from 'next/image'
import HomeIllustration from '../public/Home_illustration.svg'

export default function Home() {
  return (
    <div className='Home'>
      <div className='Home__HeadingsAndIllustration'>
        <div>
          <h1 className='Home__Name'>HENRY AQUINO</h1>
          <h2 className='Home__ProfessionTitle'>Informatic Engineer</h2>
        </div>
        <Image
          className='Home__Illustration'
          src={HomeIllustration}
          alt='Funcy Desktop'
        />
      </div>
      <div className='Home__Buttons'>
        <button className='Button Button--red'>PROJECTS</button>
        <button className='Button Button--blue'>CURRICULUM</button>
      </div>
    </div>
  )
}

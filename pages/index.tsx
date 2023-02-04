import Image from 'next/image'
import HomeIllustration from '../public/Home_illustration.svg'
import Wave1Illustration from '../public/Wave_1_illustration.png'
import Wave2Illustration from '../public/Wave_2_illustration.png'
import Wave3Illustration from '../public/Wave_3_illustration.png'

export default function Home() {
  return (
    <div className='Paper'>
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
        <div className='Home__WavesIllustration'>
          <Image
            className='Home__WaveIllustration'
            src={Wave1Illustration}
            alt='Waves'
          />
          <Image
            className='Home__WaveIllustration Home__WaveIllustration--middle'
            src={Wave2Illustration}
            alt='Waves'
          />
          <Image
            className='Home__WaveIllustration'
            src={Wave3Illustration}
            alt='Waves'
          />
        </div>
      </div>
    </div>
  )
}

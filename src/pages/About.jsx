// import img
import WomanImg from '../img/about/woman.png'
// import link
import { Link } from 'react-router-dom'

const About = () => {
  return <section className="section">
    <div className="container mx-auto h-full relative">
      {/* text & img wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-0 text-center lg:text-left lg:pt-16'>
        {/* iamge */}
        <div className='lg:relative lg:left-32 flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img className='max-w-md' src={WomanImg} alt="" />
        </div>
        {/* text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='lg:mx-0 mx-auto'>Lorem ipsum <b>dolor sit</b> amet consectetur, adipisicing elit. Sed sit, dolore at unde nostrum non adipis Lorem ipsum dolor sit amet. <b>Dolor sit</b> Lorem ipsum dolor sit amet.</p>
          <br />
          <br />
          <p className='mb-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, doloremque?</p>
          <Link to={'/portfolio'} className='btn max-w-sm mx-auto lg:mx-0'>View my work</Link>
        </div>
      </div>
    </div>
  </section>;
};

export default About;

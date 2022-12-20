import abtus from '../components/image/About-us.png'
import Image from 'next/image'
export const About = () => {
  return (
    <div className='abt-main max-w-7xl mx-auto mt-10 mb-16'>
        <div id='abts-us' className='flex items-center'> 


         <div className="w-1/2 mr-12">
         <Image className="" src={abtus.src} alt="Avatar" width={700} height={447} />
            
            </div>       



            <div className='w-1/2 ml-12'>
            <h2 className='text-xls font-extrabold font-Quicksand mb-2 mt-4'>About Us </h2>
            <p className='mb-2'> Idamen Systems’s solutions are fit for a variey of use cases and cuts across all sectors, providing private and public cloud services, as well as managed hosting to ensure reliability and performance. We do this by providing 
cloud-native solutions that are tailored to the unique needs of each customer and by providing superior customer service. </p>

            </div>

        </div>












    </div>







  )
}

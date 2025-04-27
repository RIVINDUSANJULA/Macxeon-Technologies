import Image from 'next/image';
import S1 from '../cs/home/slide1'
import S2 from '../cs/home/slide2'
import S3 from '../cs/home/slide3'
import S4 from '../cs/home/slide4'
import Form1 from '../cs/home/form1'


import cet1 from '@/public/CEYLONTEA.png'
import cet2 from '@/public/ISO-2.png'
import cet3 from '@/public/OZONE.png'
import cet4 from '@/public/SGS.png'
import cet5 from '@/public/SLS.png'

export default function Page() {
  return (
    <div className="bg-white">
      <S1/>
      <S2/>
      <S3/>
      <div className="flex flex-col items-center justify-center text-center mt-5">
        <h2 className="text-[#013D45] font-[400] text-[56px] leading-[56px] font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans','Arial','sans-serif']">Our Collection.</h2>
        <p className="text-[#909090] font-light text-[20px] leading-[32px] font-[Arial,Helvetica,sans-serif] w-[610px] mt-10">Each tea purchase comes with organically and ethically grown loose LIYONTA tea, carefully <br /> blended to create the perfect cup.</p>
        {/* {<S3/>} */}
      </div>
      <div className=""><S4/></div>
      <div className='self-center mt-12 mb-15'>
        <h2 className="text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans','Arial',sans-serif] text-center align-middle self-center">Featured Products.</h2>
        <p className="text-[#909090] font-light text-[20px] leading-[32px] my-[20px] h-[64px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center">Each tea purchase comes with organically and ethically grown loose LIYONTA <br/> tea, carefully blended to create the perfect cup.</p>
      </div>
      <div>
        <h2 className="text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-['Trebuchet_MS','Lucida_Sans_Unicode','Lucida_Grande','Lucida_Sans','Arial',sans-serif] text-center align-middle self-center">Our Standards.</h2>
        <p className="text-[#909090] font-light text-[20px] leading-[32px] my-[20px] h-[64px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center pb-30">We are committed to delivering excellence in every product, with trusted <br/> certifications that ensure quality and reliability.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-15 mx-[120px] mb-35'>
          <Image
            src={cet1}
            alt="Ceylon Tea"
            className="p-[20px]"
          />
          <Image
            src={cet2}
            alt="ISO"
            className="p-[20px]"
          />
          <Image
            src={cet3}
            alt="Ozone Friendly Pure Ceylone Tea"
            className="p-[20px]"
          />
          <Image
            src={cet4}
            alt="SGS"
            className="p-[20px]"
          />
          <Image
            src={cet5}
            alt="SLS"
            className="p-[20px]"
          />
      </div>
      <div className="w-full bg-[url('/liyonta_tea_homepage_contact_us.webp')] bg-no-repeat bg-cover  text-center align-middle self-center">
          <h2 className="text-white box-border font-normal leading-normal text-center align-middle self-center pt-10 text-7xl">Reach Us.</h2>
          <p className="text-white font-light text-[20px] leading-[32px] my-[20px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center">We&apos;re just a message away. Share your thoughts, inquiries, or feedback; we&apos;d love to <br/> connect with you.</p>
          <Form1/>
      </div>
    </div>
      
  );
}
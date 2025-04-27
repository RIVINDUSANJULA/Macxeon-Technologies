import Image from 'next/image'

import cet1 from '@/public/CEYLONTEA.png'
import cet2 from '@/public/ISO-2.png'
import cet3 from '@/public/OZONE.png'
import cet4 from '@/public/SGS.png'
import cet5 from '@/public/SLS.png'


import comp1 from '@/public/forbes-walker.webp'
import comp2 from '@/public/DIMO.webp'
import comp3 from '@/public/CIC.webp'
import comp4 from '@/public/bartely.webp'

import side1 from '@/public/tea_picker_woman_s_asian_hands_close_up_pretty_tea_picking_girl_plantation_4-1024x682.webp'
import side2 from '@/public/unrecognizable_woman_pouring_tea_into_glasses_1-1024x684.webp'
import side3 from '@/public/elevated_view_assortment_dry_tea_paper_bag_1-1024x684.webp'

import found from '@/public/Mr.-Ronnie-Liyanage.png'

import S1 from '../cs/about/slide1'
import S2H from '../cs/home/slide2'
import Form1 from '../cs/home/form1'




const page = () => {
  return (
    <div className='bg-white'>
      <S1/>
      <div className='flex flex-col items-center text-center text-[#909090] text-[20px] mb-7'>
        <p className='mt-8'>Since 2005, Liyonta Tea has been a proud steward of Sri Lanka&apos;s rich tea <br/> heritage, bringing the finest handpicked teas from the lush highlands of Ceylon <br/> to tea lovers around the world. With every blend, we celebrate the artistry, <br/> dedication, and timeless traditions that make Ceylon tea a global treasure.</p>
        <p className='mt-8'>Over the years, our unwavering commitment to quality has defined who we are. <br/> From the delicate plucking of leaves to the precise crafting of bold and aromatic <br/> flavors, every step of our journey reflects a passion for excellence. At Liyonta <br/> Tea, we believe tea is more than a beverage—it&apos;s an experience that connects <br/> people and honors traditions passed down through generations.</p>
        <p className='mt-8'>Rooted in sustainability and ethical practices, our journey is as much about <br/> preserving the environment as it is about supporting local communities. By <br/> prioritizing eco-friendly farming methods and fair partnerships with growers, we <br/> ensure that every cup of Liyonta Tea tells a story of care and responsibility.</p>
        <p className='mt-8'>Whether you savor the bold intensity of our brews or the gentle complexity of <br/> our aromatic blends, Liyonta Tea invites you to indulge in an unforgettable <br/> experience. Join us in celebrating the harmony of quality, flavor, and tradition <br/> that defines every sip.</p>
      </div>
      <div className='a3'>
        <S2H/>
      </div>
      <div className='mt-25'>
        <h2 className="text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-serif text-center align-middle self-center">Our Standards.</h2>
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
      <div className='grid grid-cols-2 grid-rows-3 gap-4 bg-[#f7f5f1] mb-25'>
        <Image
            src={side1}
            alt=""
            className=""
          />
        <div>
          <h2 className='text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-serif text-center align-middle self-center pt-23'>Careful Selection of Tea Leaves.</h2>
          <p className='text-[#909090] font-light text-[20px] leading-[32px] my-[20px] h-[64px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center pt-30'>At Liyonta Tea, we take pride in sourcing only the finest tea leaves from reputable growers in Sri Lanka. Our tea experts meticulously inspect each batch to ensure it meets our stringent quality standards.</p>
        </div>
        <div className=''>
          <h2 className='text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-serif text-center align-middle self-center pt-23'>Stringent Quality <br/> Control Measures.</h2>
          <p className='text-[#909090] font-light text-[20px] leading-[32px] my-[20px] h-[64px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center pt-30'>From the moment the tea leaves are harvested to the final packaging process, we implement rigorous quality control measures at every step. This includes thorough testing for purity, aroma, flavor, and appearance to guarantee a consistently exceptional product.</p>
        </div>
        <Image
            src={side2}
            alt=""
            className=""
          />
        <Image
            src={side3}
            alt=""
            className=""
          />
        <div>
          <h2 className='text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-serif text-center align-middle self-center pt-23'>Crafting Flavorful Experiences.</h2>
          <p className='text-[#909090] font-light text-[20px] leading-[32px] my-[20px] h-[64px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center pt-30'>We understand the importance of freshness in delivering an unparalleled tea experience. That&apos;s why we prioritize quick processing and careful packaging to preserve the natural flavors and aroma of our teas, ensuring that every cup is as delightful as the first.</p>
        </div>


      </div>
      <div className='a6'></div>
      <div className='a7'>
        <h2 className="text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-serif text-center align-middle self-center" >Our Partners.</h2>
        <p className="text-[#909090] font-light text-[20px] leading-[32px] my-[20px] h-[64px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center pb-30">We are committed to delivering excellence in every product, with trusted <br/> certifications that ensure quality and reliability.</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   ml-[120px] mr-[120px]'>
          <Image
            src={comp1}
            alt="Forbes and Walker"
            className="p-[20px]"
          />
          <Image
            src={comp2}
            alt="DIMO"
            className="p-[20px]"
          />
          <Image
            src={comp3}
            alt="CIC"
            className="p-[20px]"
          />
          <Image
            src={comp4}
            alt="B"
            className="p-[20px]"
          />
        </div>
        
      </div>
      <div className='flex flex-col items-center text-center'>
        <h2 className="text-[#013D45] font-normal text-[56px] leading-[56px] h-[56px] font-serif text-center align-middle self-center mt-10">A Note From Our Founder.</h2>
        <Image
            src={found}
            alt="Founder"
            className="w-[232px] h-[232px]"
          />
        <h2 className="font-serif font-extrabold text-9xl text-[#013d45] mt-7">&ldquo;</h2>
        <p className='max-w-4xl text-center text-[#909090] font-light text-[18px] leading-relaxed'>Liyonta Tea is produced in an award winning tea factory in Southern province in Sri Lanka. We combine the traditional methods of producing tea and latest technological methods to bring a quality product to the tea market. The factory utilises modern, environmentally friendly technologies to produce this quality tea with a view to minimising damage to the environment.</p>
        <p className='text-[#54595f] text-[14px] font-bold font-[Arial,Helvetica,sans-serif] text-center align-middle self-center mt-5 mb-5'>Ronnie Liyanage, Founder.</p>
      </div>
      <div className="w-full bg-[url('/liyonta_tea_homepage_contact_us.webp')] bg-no-repeat bg-cover  text-center align-middle self-center">
        <h2 className="text-white box-border font-normal leading-normal text-center align-middle self-center pt-10 text-7xl">Reach Us.</h2>
        <p className="text-white font-light text-[20px] leading-[32px] my-[20px] font-[Arial,Helvetica,sans-serif] text-center align-middle self-center">We&apos;re just a message away. Share your thoughts, inquiries, or feedback; we&apos;d love to <br/> connect with you.</p>
        <Form1/>
      </div>
    </div>
  )
}

export default page

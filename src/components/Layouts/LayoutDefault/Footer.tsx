import { Link } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
const Footer = () => {
    return (
        <footer>
            <div className='bg-gradient-to-r from-slate-900 to-red-900 pt-8 md:pt-14 shrink-0 text-gray-400 '>
                <div className='  2xl:px-20 font-bold  pb-8 flex md:pb-14 sm:gap-10 justify-center items-center flex-col sm:flex-row md:gap-8  sm:flex-wrap md:items-start   md:justify-between px-12 '>
                    <div className='flex sm:flex-col sm:items-center '>
                        <div className=' sm:pb-4'>
                            <Link className="hidden sm:flex text-2xl text-gray-100" to='/'>PORTAL</Link>
                        </div>
                        <div className='text-xl flex gap-4'>
                            <Link to='/login'>
                                <div className='border-2 border-gray-700 px-2 py-2 rounded-full flex items-center justify-center'>
                                    <TiSocialFacebook size={25} />
                                </div>
                            </Link>
                            <Link to='/login'>
                                <div className='border-2 border-gray-700 px-2 py-2 rounded-full'>
                                    <AiOutlineYoutube size={25} />
                                </div>
                            </Link>
                            <Link to='/login'>
                                <div className='border-2 border-gray-700 px-2 py-2 rounded-full'>
                                    <TiSocialLinkedin size={25} />
                                </div>

                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-col gap-2 text-sm font-semibold'>
                        <div className='text-base text-gray-100 pb-2'>About Us</div>
                        <Link to='/'>Home</Link>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>All Jobs</Link>
                        <Link to='/'>FAQ</Link>
                    </div>
                    <div className='hidden md:flex flex-col gap-2 text-sm font-semibold'>
                        <div className='text-base text-gray-100 pb-2'>Campaign</div>
                        <Link to='/'>IT Story</Link>
                        <Link to='/'>Writing contest</Link>
                    </div>
                    <div className='hidden md:flex flex-col gap-2 text-sm font-semibold'>
                        <div className='text-base text-gray-100 pb-2'>Terms & Conditions</div>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Operating Regulation</Link>
                        <Link to='/'>Complant Handling</Link>
                        <Link to='/'>Press</Link>
                    </div>
                    <div className='flex flex-col gap-2 text-sm font-semibold mt-6 md:mt-0'>
                        <div className='hidden md:flex text-base text-gray-100 pb-2'>Contact us at:</div>
                        <a href='tel:0985600072' className='flex flex-wrap justify-center md:justify-normal items-center gap-2'>
                            <FiPhone />
                            <span>Phone: 0985 600 072</span></a>
                        <a href='https://www.gmail.com' target='_blank' className='flex items-center gap-2'>
                            <HiOutlineMail />
                            <span>Email: lxthanh235@gmail.com</span></a>
                    </div>
                </div>
                <div className='pt-[0.25px] bg-gray-700'></div>

                <div className='text-xs font-semibold flex justify-center items-center py-3'>Copyright @stillxthahn</div>
            </div>
        </footer>
    )
}

export default Footer
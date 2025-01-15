import React from 'react';
import { FaFacebookMessenger, FaSearchLocation, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const navigationList = [
        {title: "მომსახურებები", to:'services'},
        {title: "გალერეა", to:'gallery'},
        {title: "დაანგარიშება", to:''},
        {title: "ჩემი პროექტი", to:'track/0'},
        {title: "სტატიები", to:''},
        {title: "კონტაქტი", to:''},
        {title: "ინფორმაცია", to:''},
    ];
    const contacts = [
        { color: "00FF00", icon: <FaWhatsapp size={45} color='#00FF00' />, title: "Whatsapp", link: "https://whatsapp.com" },
        { color: "0000FF", icon: <FaFacebookMessenger size={45} color='#0000FF' />, title: "Messenger", link: "https://facebook.com" },
        { color: "00115F", icon: <FaTelegram size={45} color='#00115F' />, title: "Phone", link: "tel:593933399" }
    ]
    return (
        <header className='py-3 w-full flex flex-col sticky'>
            <div className='w-full px-5 flex justify-between items-center'>
                <Link to={'/'}>
                    <img src='https://picsum.photos/100' className='w-[100px] aspect-square' alt='...' />
                </Link>
                <div className='bg-gray-100 rounded-3xl p-2 flex items-center gap-x-2'>
                    <FaSearchLocation size={30} /> <span>ქ.ბათუმი სელიმ ხიმშიაშვილის ქ.N1</span>
                </div>
                <div className='flex flex-col'>
                    <div className='flex gap-x-3'>
                        {contacts.map((contact, _id) => (
                            <Link to={contact.link} key={_id}>
                                <div className="bg-gray-100 w-fit p-2 flex items-center justify-center aspect-square rounded-full hover:border-2" style={{ borderColor: contact.color }} >
                                    {contact.icon}
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className='w-full mt-2'>
                        ტელეფონი: <Link className='underline' to="tel:555555555">+995 555555555</Link>
                    </div>
                </div>
            </div>
            <div className='w-full h-[70px] flex items-center justify-around bg-slate-800 text-white py-2'>
                {navigationList.map((nav, _id) => (
                    <Link to={nav.to} key={_id} className='h-full flex items-center justify-center px-3 border-x-2'>
                        {nav.title}
                    </Link>
                ))}
            </div>

        </header>
    );
};

export default Header;

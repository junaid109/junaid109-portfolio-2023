import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header(props: Props) {
    return (
        <header className="sticky top-0 p-5 flex-items-start justify-between max-w-7xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}  
                transition={{ delay: 0.5, duration: 0.5 }}

                        
            className="flex flex-row items-center">
                <SocialIcon url="https://www.linkedin.com/in/andrew-lee-0b0b1b1b9/"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://www.facebook.com/andrew.lee.581"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="twitter.com/andrewlee_"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="instagram.com/andrewlee_"
                    fgColor='gray'
                    bgColor='transparent' />

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
             className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className="cursor-pointer"
                    network='email'
                    url="mailto:info@simamdigital.com"
                    fgColor='gray'
                    bgColor='transparent' />

                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Get in touch with me 
                    </p>

            </motion.div>
        </header>
    )
}

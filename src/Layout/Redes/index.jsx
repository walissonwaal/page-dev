import React from 'react';
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'

const Index = () => {
  return (
      <ul className='flex gap-4 text-lg'>
        <li className='text-secondary hover:text-green-500 duration-150 cursor-pointer'><BsLinkedin /></li>
        <li className='text-secondary hover:text-green-500 duration-150 cursor-pointer'><BsGithub /></li>
        <li className='text-secondary hover:text-green-500 duration-150 cursor-pointer'><BsInstagram /></li>
      </ul>
  );
}

export default Index;

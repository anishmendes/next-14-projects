"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pictures = [
    {
        title:'No Toilet Paper',
      picture: '/assets/svg/washroom-feedback/No Toilet Paper.svg',
    },
    {
        title:'No Hand Soap',
      picture: '/assets/svg/washroom-feedback/No Hand Soap.svg',
    },
    {
        title:'Litter Bin Full',
      picture: '/assets/svg/washroom-feedback/LitterBin Full.svg',
    },
    {
        title:'Bad Smell',
      picture: '/assets/svg/washroom-feedback/Bad Smell.svg',
    },
    {
        title:'Dirty/Wet Floor',
     picture: '/assets/svg/washroom-feedback/Dirty Wet Floor.svg',
    },
    {
        title:'Dirty Toilet Bowl',
     picture: '/assets/svg/washroom-feedback/Dirty Toilet Bowl.svg',
    },
    {
        title:'Choke Basin',
     picture: '/assets/svg/washroom-feedback/Choke Basin.svg',
    },
    {
        title:'Hand Dryer',
     picture: '/assets/svg/washroom-feedback/Hand Dryer.svg',
    },
    {
        title:'Blinking Light',
     picture: '/assets/svg/washroom-feedback/Blinking Light.svg',
    },
    {
        title:'Dirty Mirror',
     picture: '/assets/svg/washroom-feedback/Dirty Mirror.svg',
    },
    {
        title:'Faulty Tap',
     picture: '/assets/svg/washroom-feedback/Faulty Trap.svg',
    },
    {
        title:'Faulty Flush',
     picture: '/assets/svg/washroom-feedback/Faulty Flush.svg',
    },
    {
        title:'No water',
     picture: '/assets/svg/washroom-feedback/No water.svg',
    },
    {
        title:'No ventilation',
     picture: '/assets/svg/washroom-feedback/No ventilation.svg',
    },
    {
        title:'Security',
     picture: '/assets/svg/washroom-feedback/Security.svg',
    },
  ];



const WashroomIssue = () => {
    return (
      <div  className='mt-20 flex items-center justify-center flex-col -mb-[100px]'>
     <div className="text-center mt-4 text-3xl">
          Washroom Issue
        </div>

        <div className='flex  flex-wrap border border-black justify-center items-center gap-4 my-8'>
        {pictures.length > 0 &&
            pictures.map((picture, index) => {
              return (
                <div  className="w-[18%] border flex-col border-black flex justify-center items-center" key={index}>
                  <Image className="w-full"
                    src={picture.picture}
                    alt="Issues pictures are here..."
                    height={100}
                    width={100}
                  />
                  <div >{picture.title}</div>
             </div>
        );
    })}
    </div>
     
<button class="bg-slate-800  text-white font-bold py-2 px-8 rounded w-96">
    Submit
</button> 
    </div>
 
 );
};

export default WashroomIssue

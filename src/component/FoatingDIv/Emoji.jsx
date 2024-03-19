import React from 'react';

const Emoji = ({image}) => {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 w-fit p-2 rounded-md bg-[#DDF8FE]'>
                <img src={image} className='w-8'/>
                
            </div>
        </div>
    );
};

export default Emoji;
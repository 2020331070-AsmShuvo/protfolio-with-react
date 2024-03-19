import React from 'react';

const FloatingDiv2 = ({image, text}) => {
    return (
        <div>
            <div className='flex justify-center items-center gap-2 w-fit p-2 rounded-md bg-[#DDF8FE]'>
                <img src={image} className='w-8'/>
                <span>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default FloatingDiv2;
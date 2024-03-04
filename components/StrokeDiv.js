import React from 'react';

const StrokeDiv = ({ children }) => {
    return (
    <div className='stroke-header-wrapper'>
        <div id='stroke-1'></div>
        <div id='stroke-2'></div>
        <div id='stroke-3'></div>
        <div id='stroke-4'></div>

        <style jsx>{`
            .stroke-header-wrapper{
                width: 100%;
                height: 8px;
                display: flex;
            }

            .stroke-header-wrapper div{
                width: 100%;
            }

            .stroke-header-wrapper div:hover{
                width: 150%;
            }

            #stroke-1{
                background-color: var(--R1);
            }

            #stroke-2{
                background-color: var(--Y1);
            }

            #stroke-3{
                background-color: var(--B1);
            }

            #stroke-4{
                background-color: var(--G1);
            }
        `}</style>
    </div>
    );
};

export default StrokeDiv ;
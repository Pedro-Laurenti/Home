import React from 'react';

const Button1 = ({ children }) => {
    return (
        <a className="btn-header">
        <h3>{children}</h3>
        <style jsx>{`
            .btn-header{
                background-color: var(--B1);
                border: 2px solid var(--BL4);
                border-radius: 15px;
                width: 250px;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .btn-header:hover{
                background-color: var(--BL4);
                border: 2px solid var(--B1);
                color: var(--B1)!important;
                cursor: pointer;
            }

            .btn-header h3{
                color: var(--BL4);
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .btn-header h3:hover{
                color: var(--B1);
            }
        `}</style>
        </a>
    );
};

export default Button1;
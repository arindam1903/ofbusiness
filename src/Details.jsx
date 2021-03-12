import React from 'react';

export default function Details(){

    return(

        <div className='detail-container'>
            <div className='repo-name'>
                <h2>facebook / create-react-app</h2>
            </div>
            <div className='repo-button'>
                <div className='watch'>
                    Watch
                </div>
                <div className='watch'>
                    Unstar
                </div>
                <div className='watch'>
                    Fork
                </div>
            </div>
        </div>
    );
}
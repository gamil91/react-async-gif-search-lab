import React from 'react';

const GifList = ({ list }) => {
    return (
        <ul >
            {list.map(gif => 
                <li><img src={gif} alt="true"/></li>
            )}
        </ul>
    );
}

export default GifList;


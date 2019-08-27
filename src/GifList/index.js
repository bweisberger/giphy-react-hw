import React from 'react';

const GifList = (props)=>{
    // console.log(props.gifs)
        const gifs = props.gifs.map((gif, i)=>{
            return  <a href={gif.url}>
                        <li key={gif.id}>
                            <img alt={gif.slug} src={gif.images.downsized.url}/>
                        </li>
                    </a>
        })
    return gifs;
}

export default GifList;
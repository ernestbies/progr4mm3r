import React from "react";
import {BsMusicNoteBeamed, FaLaptopCode, IoGameController, IoTvOutline} from "react-icons/all";

const HobbyItem = ({id, image, quote, name, text, color, keywords}) => {
    return (
        <div className={'carousel-hobby-item'} key={id}>
            <img
                alt={name}
                src={image}
                className={'carousel-hobby-img'}
            />
            <div className={'carousel-content'}>
                <div style={{display: 'flex', textAlign: 'center', alignItems: 'center'}}>
                    <div style={{width: 5, height: 30, backgroundColor: color}}/>
                    <p style={{paddingLeft: 7, fontFamily: 'Open Sans', margin: 0}}>{name}</p>
                </div>
                <p style={{
                    fontSize: 14,
                    fontFamily: 'Open Sans',
                    fontStyle: 'italic',
                    paddingTop: 10
                }}>{quote}</p>
                <p style={{
                    fontSize: 12,
                    fontFamily: 'Open Sans',
                    marginTop: 20,
                    maxWidth: 500,
                    wordBreak: 'break-word'
                }}>{text}</p>
                <div style={{marginBottom: 15}}>
                    {
                        name.includes('Program') ? <FaLaptopCode size={20} color={color} style={{marginRight: 10}}/> :
                            name.includes('Esports') ? <IoGameController size={20} color={color} style={{marginRight: 10}}/> :
                                name.includes('Music') ? <BsMusicNoteBeamed size={20} color={color} style={{marginRight: 10}}/> :
                                    name.includes('Cinema') ? <IoTvOutline size={20} color={color} style={{marginRight: 10}}/> : <div/>
                    }
                    <span style={{fontFamily: 'Press Start', fontSize: 8}}>{keywords.map(e => e.toUpperCase() + '. ')}</span>
                </div>
            </div>
        </div>
    )
}

export default HobbyItem;

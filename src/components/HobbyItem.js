import React from "react";
import {FaLaptopCode, IoGameController, IoTvOutline} from "react-icons/all";

const HobbyItem = ({id, image, quote, name, text, color, keywords}) => {
    return (
        <div className={'carousel-item'} style={{display: 'flex'}} key={id}>
            <img
                alt={name}
                src={image}
                style={{opacity: 0.5, flex: 1, width: '100%'}}
            />
            <div style={{margin: 40, textAlign: 'left', flex: 1}}>
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
                <div>
                    {
                        name.includes('Program') ? <FaLaptopCode size={20} color={color} style={{marginRight: 10}}/> :
                            name.includes('Esports') ?
                                <IoGameController size={20} color={color} style={{marginRight: 10}}/> :
                                <IoTvOutline size={20} color={color} style={{marginRight: 10}}/>
                    }
                    <span style={{fontFamily: 'Press Start', fontSize: 8}}>{keywords.map(e => e.toUpperCase() + '. ')}</span>
                </div>
            </div>
        </div>
    )
}

export default HobbyItem;

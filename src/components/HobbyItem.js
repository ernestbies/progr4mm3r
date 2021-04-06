import React from "react";

const HobbyItem = ({image, quote, name, text, color}) => {
    return (
        <div style={{display: 'flex'}}>
            <img
                alt={''}
                className={'d-block w-50'}
                src={image}
                style={{opacity: 0.5, flex: 1}}
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
                <p style={{fontSize: 12, fontFamily: 'Open Sans', marginTop: 30, marginRight: 100}}>{text}</p>
            </div>
        </div>
    )
}

export default HobbyItem;

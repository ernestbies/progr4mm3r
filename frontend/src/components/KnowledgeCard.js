import React, {useState} from "react";
import knowledge from "../utils/knowledge";

const KnowledgeCard = ({type}) => {

    const [item] = useState(knowledge[type]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 25,
            border: '1px solid #FFFFFF90',
            background: 'transparent',
            padding: 20,
            width: 330,
            height: 600,
            margin: 20
        }}>
            <div style={{
                flex: 2,
                marginTop: -20,
                marginLeft: -20,
                marginRight: -20,
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                backgroundColor: '#FFFFFF90',
                position: 'relative'
            }}>
                <img alt={'technology'} src={item.image} style={{width: 90, height: 75, marginTop: 20}}/>
                <p style={{
                    fontFamily: 'Open Sans',
                    fontWeight: 300,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -5,
                    fontSize: 20,
                    color: 'black'
                }}>{item.name}</p>
            </div>
            <div style={{
                marginLeft: -20,
                marginRight: -20,
                backgroundColor: item.color,
            }}>
                <p style={{
                    margin: 'auto',
                    textAlign: 'center',
                    fontSize: 15,
                    color: 'white',
                    fontFamily: 'Open Sans',
                    fontWeight: 300,
                }}>
                    {item.technology_stack.join(" · ")}
                </p>
            </div>
            <div style={{
                flex: 6,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                marginRight: -20,
                marginLeft: -20,
                marginBottom: -20,
                backgroundColor: 'rgba(0,0,0,0.7)'
            }}>
                <p style={{
                    fontSize: 11,
                    fontWeight: 300,
                    textAlign: 'justify',
                    fontFamily: 'Open Sans',
                    margin: 10
                }}>{item.text} {
                    type === 'backend'
                    && <a target={'_blank'} rel={'noreferrer'}
                          href={'http://mediabrowser-server.herokuapp.com/documentation'}
                          style={{fontSize: 11, color: 'orange'}}>Click here to see the docs for my API server
                        built with Hapi.js
                    </a>
                }
                </p>

                {
                    type === 'frontend' &&
                    <div style={{
                        flex: 1,
                        paddingTop: 35,
                        height: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <img alt={'js'} style={{width: 25, height: 25}} src={'images/languages/language-js.png'}/>
                        <img alt={'html'} style={{width: 25, height: 25}} src={'images/languages/html.png'}/>
                        <img alt={'css'} style={{width: 25, height: 25}} src={'images/languages/css.png'}/>
                        <img alt={'react'} style={{width: 25, height: 25}} src={'images/technologies/reactjs.png'}/>
                        <img alt={'rn'} style={{width: 25, height: 25}} src={'images/technologies/reactnative.png'}/>
                        <img alt={'java'} style={{width: 25, height: 25}} src={'images/languages/language-java.png'}/>
                        <img alt={'nb'} style={{width: 25, height: 25}} src={'images/platforms/netbeans.png'}/>
                        <img alt={'intellij'} style={{width: 25, height: 25}} src={'images/platforms/intellij.png'}/>
                    </div>
                }
                {
                    type === 'backend' &&
                    <div style={{
                        height: 30,
                        paddingTop: 35,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <img alt={'js'} style={{width: 25, height: 25}} src={'images/languages/language-js.png'}/>
                        <img alt={'node'} style={{width: 25, height: 25}} src={'images/technologies/nodejs.png'}/>
                        <img alt={'hapi'} style={{width: 25, height: 25}} src={'images/technologies/hapijs.png'}/>
                        <img alt={'jwt'} style={{width: 25, height: 25}} src={'images/technologies/jwt.png'}/>
                        <img alt={'java'} style={{width: 25, height: 25}} src={'images/languages/language-java.png'}/>
                        <img alt={'spring'} style={{width: 25, height: 25}} src={'images/technologies/spring.png'}/>
                        <img alt={'uml'} style={{width: 25, height: 25}} src={'images/technologies/uml.png'}/>
                    </div>
                }
                {
                    type === 'databases' &&
                    <div style={{
                        height: 30,
                        paddingTop: 35,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <img alt={'sql'} style={{width: 25, height: 25}} src={'images/languages/language-sql.png'}/>
                        <img alt={'postgresql'} style={{width: 25, height: 25}}
                             src={'images/languages/language-plpgsql.png'}/>
                        <img alt={'mongodb'} style={{width: 25, height: 25}} src={'images/technologies/mongodb.png'}/>
                        <img alt={'mongoose'} style={{width: 25, height: 25}} src={'images/technologies/mongoose.png'}/>
                        <img alt={'sqlite'} style={{width: 25, height: 25}} src={'images/technologies/sqlite.png'}/>
                        <img alt={'tdm'} style={{width: 25, height: 25}} src={'images/technologies/tdm.png'}/>
                    </div>
                }
                {
                    type === 'testing' &&
                    <div style={{
                        height: 30,
                        paddingTop: 35,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <img alt={'js'} style={{width: 25, height: 25}} src={'images/languages/language-js.png'}/>
                        <img alt={'jest'} style={{width: 25, height: 25}} src={'images/technologies/jest.png'}/>
                        <img alt={'java'} style={{width: 25, height: 25}} src={'images/languages/language-java.png'}/>
                        <img alt={'junit'} style={{width: 25, height: 25}} src={'images/technologies/junit.png'}/>
                        <img alt={'groovy'} style={{width: 25, height: 25}}
                             src={'images/languages/language-groovy.png'}/>
                        <img alt={'spock'} style={{width: 25, height: 25}} src={'images/technologies/spock.png'}/>
                        <img alt={'git'} style={{width: 25, height: 25}} src={'images/technologies/git.png'}/>
                    </div>
                }
            </div>
        </div>
    );
}

export default KnowledgeCard;

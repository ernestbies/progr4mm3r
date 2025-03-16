import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import contact from '../../utils/data/contact';
import {
    MenuItem,
    StyledColoredMenuText,
    StyledMenu,
    StyledMenuLink,
    StyledMenuText,
    StyledMenuWrapper,
} from './Menu.styles';

const Menu = () => {
    return (
        <StyledMenu>
            <MenuItem style={{ marginBottom: 10 }}>
                <StyledMenuLink
                    href={'mailto:' + contact.email}
                    target={'_blank'}
                >
                    <FaRegEnvelope
                        style={{ width: 25, height: 25, color: 'white' }}
                    />
                </StyledMenuLink>
            </MenuItem>
            <MenuItem style={{ marginBottom: 10 }}>
                <StyledMenuLink
                    href={'https://github.com/ernestbies'}
                    target={'_blank'}
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{ width: 25, height: 25, color: 'white' }}
                    />
                </StyledMenuLink>
            </MenuItem>
            <MenuItem expandable>
                <FontAwesomeIcon
                    icon={faDiscord}
                    style={{ width: 25, height: 25, color: 'white', flex: 1 }}
                />
                <StyledMenuWrapper href={'/#contact'}>
                    <StyledMenuText>
                        {'Discord: '}
                        <StyledColoredMenuText>
                            {contact.discord}
                        </StyledColoredMenuText>
                    </StyledMenuText>
                </StyledMenuWrapper>
            </MenuItem>
        </StyledMenu>
    );
};

export default Menu;

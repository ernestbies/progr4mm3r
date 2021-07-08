import styled from 'styled-components';

export const UnreleasedProjectDiv = styled.div`
    display: flex;
    height: ${({height}) => height ?? '350px'};
    background-color: ${({backgroundColor}) => backgroundColor ?? '#0D0D0D'};
    align-items: center;
    justify-content: center;
    text-align: center;
`;

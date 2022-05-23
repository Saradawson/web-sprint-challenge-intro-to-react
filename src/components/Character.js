import React from 'react';
import styled from 'styled-components';

const StyledCharacterCard = styled.div`
    width: 95%;
    background: rgba(255,255,255,0.5);
    display: flex;
    flex-direction: column;
    margin: 1%;
    border: 4mm ridge rgba(211, 220, 50, .6);
`
const StyledName = styled.h3`
    margin: 1%;
    background: rgba(255, 255, 255, 0.5);
    padding:1%
`
const StyledInfoCard = styled.div`
    display: flex;
    flex-direction: column;
    
`

const StyledInfo = styled.h4`
    margin: 1%;
    text-align: left;
`

const Character = ({ character }) => {
    return(
    <StyledCharacterCard className='character-card'>
    <StyledName>
      {character.name}
    </StyledName>
    <StyledInfoCard className='info'>
      <StyledInfo>gender: {character.gender}</StyledInfo>
      <StyledInfo>hair color: {character.hair_color}</StyledInfo>
      <StyledInfo>height: {character.height}</StyledInfo>
      <StyledInfo>mass: {character.mass}</StyledInfo>
      <StyledInfo>skin shade: {character.skin_color}</StyledInfo>
    </StyledInfoCard>
    </StyledCharacterCard>
    )
}

export default Character;
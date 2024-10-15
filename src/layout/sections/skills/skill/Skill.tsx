import React from 'react';
import { styled } from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
    iconId: string
    title: string
    descritpion: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={"props.iconId"}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.descritpion}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 33%;
    background-color: yellow;
`

const SkillTitle = styled.h3`

`

const SkillText = styled.p`

`
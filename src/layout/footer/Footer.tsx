import React from 'react';
import { styled } from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Dzmitry</Name>
            <FlexWrapper direction={"column"} align={"center"}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                        <Icon iconId={"telegram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                        <Icon iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                        <Icon iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>  
            </FlexWrapper>                  
            <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer `
    background-color: #ffd8a5;
    min-height: 20vh;
`

const Name = styled.span `

`

const SocialList = styled.ul `
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li `

`

const SocialLink = styled.a `

`

const Copyright = styled.small `

`
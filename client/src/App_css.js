import styled from '@emotion/styled';
import {Link as LinkRoute} from 'react-router-dom'

export const Header = styled.header`
                                 display: flex;
                                 justify-content: center;
                                 align-items: center;
                                 margin: 0px;
                                 padding: 0px;
`

export const Link = styled(LinkRoute)`
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    text-decoration: none;
                                    margin: 0px;
                                    padding: 0px;
`

export const Img = styled.img`
                             width: 100%;
                             max-width: 60px;
                             max-height: 60px;
                             border-radius: 50%;
                             margin: 0px;
`
export const H1 = styled.h1`
                           color: var(--theme-title);
`

export const Div = styled.div`
                             background-color: var(--brand-color_4);
                             border: 3px solid var(--brand-color_15);
                             border-radius: 10px;
                             margin: 10px;
                             width: 95%;
`

/* export const Main = styled.main`
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin: 0px;
                                padding: 0px;
` */

export const Section = styled.section`
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin: 0px;
                                padding: 0px;
`
import styled from '@emotion/styled';
import {Link as LinkRouter} from "react-router-dom";
export const Link = styled(LinkRouter)`
                                    margin-top: 15px;
                                    padding: 10px;
                                    color: var(--brand-color_1);
                                    font-size: 18px;
                                    font-weight: bold;
                                    text-decoration: none;
                                    cursor: pointer;

                                    &:hover{
                                        color: var(--brand-color_4); 
                                    }
`
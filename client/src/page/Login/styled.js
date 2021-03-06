import styled from '@emotion/styled';

export const Form = styled.form`
                             display: flex;
                             flex-direction: column;
                             justify-content: center; 
                             align-items: center;
                             background-color: var(--brand-color_4);
                             border: 3px solid var(--brand-color_15);
                             border-radius: 10px;
                             margin: 10px;
                             width: 95%;
                             height: 350px;
`

export const SpanLink = styled.span`
                                    margin-top: 15px;
                                    padding: 10px;
                                    color: var(--brand-color_5);
                                    font-size: 18px;
                                    font-weight: bold;
                                    text-decoration: none;
                                    cursor: pointer;

                                    &:hover{
                                        color: var(--brand-color_1); 
                                    }
`

export const DivInput = styled.div`
                                   display: flex;
                                   flex-direction: column;
                                   justify-content: center;
                                   align-items: center;
`

export const Input = styled.input`
                                   display: inline-block;
                                   width: 220px;
                                   margin: 5px 0px;
                                   padding: 5px;
                                   background-color: whitesmoke;
                                   border-radius: 10px;
                                   height: 28px;
`

export const Button = styled.button`
                                   display: inline-block;
                                   margin: 5px;
                                   width: 230px;
                                   margin: 5px 0px;
                                   padding: 5px;
                                   background-color: var(--brand-color_10);
                                   color: whitesmoke;
                                   letter-spacing: 3px;
                                   border-radius: 10px;
                                   height: 40px;
                                   border: 2px solid var(--brand-color_1);
                                   font-weight: bold;
                                   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                                   font-size: 18px;

                                   &:hover{
                                    background-color: var(--brand-color_8); 
                                    color: var(--brand-color_1);
                                   }
`

export const Span = styled.span`
                                color: whitesmoke;
                                font-weight: bold;
                                margin-top: 5px;
                                text-align: center'
`

export const SpanError = styled.span`
                                color: red;
                                font-weight: bold;
                                margin-top: 5px;
                                text-align: center'
`

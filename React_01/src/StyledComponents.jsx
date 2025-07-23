import styled from 'styled-components';
export function StyledComponent(){

    const Heading = styled.h3({

        color: "red",
        border: " 2px solid black",
        padding: "1px"

    })

    const Btn = styled.button`
        color: red;
        border: 2px solid black;
        padding: 2px;

    `; 

    return(
        <>

            <Heading>This is my styled compo</Heading>
            <Btn>Login</Btn>
        </>
    )


}
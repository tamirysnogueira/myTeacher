import { styled } from "@mui/material";

export const ListaStyled = styled('ul')`
    width: 100%;
    max-width: 900px;

    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme}) => theme.spacing(9)};

    ${({theme}) => theme.breakpoints.down('md')} { //estilizar em dispositivos móveis
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(8)};
    }

`;

export const ListaVazia = styled('h2')`
    text-align: center;

    padding: ${({theme}) => theme.spacing(20, 0)};


`;

export const ListItem = styled('li')`
    list-style: none;

`;

export const Informations = styled('div')`


`;

export const Image = styled('img')`
    width: 100%;

`;

export const Name = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)}; //espaçamento a cada 8 pixels, por exemplo: 2 = 2 * 8 = 16px

`;


export const Value = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main}; //Pegando a cor a partir do que definimos em theme, através de propriedades

`;

export const Description = styled('p')`
    word-break: break-word; //quebrar a linha

`;
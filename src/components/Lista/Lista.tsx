import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Description, Image, Informations, ListaStyled, ListaVazia, ListItem, Name, Value } from "./Lista.style"

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                {props.professores.map(professor => ( 
                    <ListItem key={professor.id}>
                        <Image src={professor.image} alt="Imagem Professor"/>
                        <Informations>
                            <Name>{professor.name}</Name>
                            <Value>{professor.value_hour.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Value>
                            <Description>{professor.description}</Description>
                            <Button sx={{ width: '70%' }}> Marcar aula </Button>
                        </Informations>
    
                    </ListItem>
    
                ))}
            </ListaStyled>
            ) : (
                <ListaVazia>Nehum item encontrado</ListaVazia>
            )
        
            }


        </div>

        /*  currency: tipo da moeda  */
    )
}

export default Lista
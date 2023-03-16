import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  
  const professores: Professor[] = [
    {
      id: 1,
      name: 'Tamirys',
      description: 'blablabla',
      value_hour: 150,
      image: 'https://github.com/tamirysnogueira.png'
    }
  ]


  return (
    //propriedade sx de Box, serve para dar comportamentos de uma forma direta
    <Box sx={{backgroundColor: 'secondary.main'}}> 
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home

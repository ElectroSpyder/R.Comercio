import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import style from './Item.module.css'

export default function Item({nombre, precio, descripcion, img}) {

  return (
    <Card maxW='sm' mb='4'>   
    <CardBody>        
    <Image className={style.imgEjemplo} src={img} alt={nombre} />
    <Heading size='md' mt='4'>{nombre}</Heading>
    <Text color='blue.600' fontSize='2x1'>${precio}</Text>
    
    </CardBody>
    <Divider mt='4' />
    <CardFooter mt='4e:
    e' > 
      <ButtonGroup spacing='2' alignItems='center'>
        <Button alignItems='center' mt='4' variant='ghost' colorScheme='yellow'>
          Detalle
        </Button>
      </ButtonGroup>
    </CardFooter>
</Card>
  )
}
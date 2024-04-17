import { Card, CardBody, CardHeader, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Item({nombre, precio, descripcion, img}) {

  return (
    <Card>
    <CardHeader>
        <Heading size='md'>Reporte de producto</Heading>
    </CardHeader>
    <CardBody>        
    <Image src={img} alt={nombre} borderRadius='lg' />
    <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        <Text>{descripcion}</Text>
        <Text color='blue.600' fontSize='2x1'>{precio}</Text>
    </Stack>
    </CardBody>      
</Card>
  )
}
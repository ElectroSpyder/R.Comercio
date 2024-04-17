import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

export const ItemList = ({products}) => {
 
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'}>
      {
        products.map((x) => (
          <Box key={x.id}>
            <Item {...x} />
          </Box>
        ))
      }
    </Flex>
  )
}

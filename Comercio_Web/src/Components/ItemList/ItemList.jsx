import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

export const ItemList = ({products}) => {
 
  return (
    <Flex direction='column' wrap='wrap' justify='center' align='center'>
      {
        products.map((x) => (
          <Box key={x.id} mt='4' width='80%'>
            <Item {...x} />
          </Box>
        ))
      }
    </Flex>
  )
}

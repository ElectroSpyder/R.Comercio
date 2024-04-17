import React, { useEffect, useState } from 'react'
import { getProductByCategory, getProducts } from '../../data/asyncMok'
import { Box, Heading } from '@chakra-ui/react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { RingLoader } from 'react-spinners'

export const ItemListContainer = ({title}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect( () => {
    const data = categoryId ? getProductByCategory(categoryId) : getProducts()

    data.then((el) => setProducts(el))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [categoryId])

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };


  return (
    <Box>
      <Heading textAlign={'center'} mt={4} color={'red'}> {title}</Heading>
      {
        loading ? <div style={style}> <RingLoader  color="#36d7b7" /> </div>
        :
        <ItemList products = {products} />
      }      
    </Box>   
  )
}

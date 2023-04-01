import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity'

const Categories = () => {

    const [categories , setCategories ] = useState([])

    useEffect(() => {
      client.fetch(`*[_type=="category"]`).then((data)=>{
        setCategories(data)
      })
    }, [])
    

  return (
    <ScrollView
        horizontal
        contentContainerStyle={{
            paddingTop:10
        }}
        showsHorizontalScrollIndicator={false}
    >
      {categories.map((category)=>(
        <CategoryCard 
        key={category._id}
        imgUrl={urlFor(category.image).width(200).url()}
        title={category.name}
        />
        ))}
    

    </ScrollView>
  )
}

export default Categories
import { View, Text, ScrollView } from 'react-native'
import React, { useState , useEffect } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({id ,title , description }) => {

  const [restaurants , setRestaurants] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "featured" &&  _id == $id]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }[0]` , {id}).then(data => {
      setRestaurants(data?.restaurants)
    })
  }, [])
  

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon name='arrowright'size={24} color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

    <ScrollView
    horizontal
   
    showsHorizontalScrollIndicator={false}
    className="pt-4"
    >
    {restaurants?.map(restaurant => (
      <RestaurantCard
      key={restaurant._id}
      id={restaurant._id}
      imgUrl={restaurant.image}
      title={restaurant.name}
      rating={restaurant.rating}
      genre={restaurant.type?.name}
      address={restaurant.address}
      short_description={restaurant?.short_description}
      dishes={restaurant.dishes}
      long={restaurant.long}
      lat={restaurant.alt}
      />
      ))
    }
    </ScrollView>

    </View>
  )
}

export default FeaturedRow
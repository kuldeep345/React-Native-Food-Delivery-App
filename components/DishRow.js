import { View, Text , TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice'

const DishRow = ({ id, name , description , price , image }) => {
    
    const [isPressed , setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector((state) => selectBasketItemsWithId(state , id))

    const addItemToBasket = ()=>{
        dispatch(addToBasket({ id , name , description , price , image}))
    }

    const removeItemFromBasket = ()=>{
        if(!items.length > 0) return;

        dispatch(removeFromBasket({ id }))
    }

  return (
    <View className={`border border-gray-200 ${isPressed && 'border-b-0'}`}>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} className="bg-white p-4">
      <View className="flex-row">
      <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt-2">
            ₹{price}
        </Text>
      </View>
      <View>
        <Image 
            style={{
                borderWidth:1,
                borderColor:'#F3F3F4'
            }}
            source={{uri:urlFor(image).url()}}
            className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
      </View>
    </TouchableOpacity>
    {
        isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                        <Icon 
                        name="minuscircle" 
                        color={items.length > 0 ? "#00CCBB" : 'gray'} 
                        size={34}
                        />
                    </TouchableOpacity>
                        <Text>{items.length}</Text>
                    <TouchableOpacity onPress={addItemToBasket} >
                        <Icon name="pluscircle" color="#00CCBB" size={34}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    </View>
  ) 
}

export default DishRow
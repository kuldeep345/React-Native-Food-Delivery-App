import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { urlFor } from '../sanity'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: urlFor(imgUrl).url()
                }}
                className="h-36 w-64 rounded-sm"
            />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <Icon name='star' color='green' opacity={0.5} size={22}/>
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text>  • {genre}
                    </Text>
                </View>
                <View className='flex-row items-center space-x-1 pt-1'>
                    <EvilIcon name="location" color="gray" opacity={0.6} size={22}/>
                    <Text className="ext-xs text-gray-500">Nearby • {address}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCard
import { View, Text, SafeAreaView, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'
import FontIcon from 'react-native-vector-icons/Fontisto'
import Simple from 'react-native-vector-icons/SimpleLineIcons'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import client from '../sanity'
import 'react-native-url-polyfill/auto'

const HomeScreen = () => {

  const navigation = useNavigation()
  const [featuredCategory, setFeaturedCategory] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  useEffect(() => {
    client.fetch(`*[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }`
    ).then((data) => {
      setFeaturedCategory(data)
    })
  }, [])


  return (
    <View className="bg-gray-100 flex-1" style={{ paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
      <SafeAreaView className="px-4">
        <View className="flex-row pb-3 items-center space-x-2 ">
          <Image source={{
            uri: 'https://links.papareact.com/wru'
          }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <Icon name='down' size={14} color="#00CCBB" />
            </Text>
          </View>

          <Icon name='user' size={32} color="#00CCBB" />
        </View>

        <View className="flex-row items-center space-x-2 pb-2">
          <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
            <FontIcon name='search' color="gray" size={17} />
            <TextInput
              placeholder='Restuarants and cuisines'
              keyboardType='default'
            />
          </View>
          <Simple name='equalizer' color="#00CCBB" size={20} />
        </View>

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 100
          }}
          className="bg-gray-100">
          <Categories />

          {featuredCategory?.map(category => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}

        </ScrollView>

      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
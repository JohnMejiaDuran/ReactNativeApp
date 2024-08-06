import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Bookmark = () => {
  return (
    <SafeAreaView>
      <Text className="text-red-600 text-center bg-cyan-200 font-pbold">Bookmark</Text>
    </SafeAreaView>
  )
}

export default Bookmark
import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

type listItemType={
  id:number;
  title:string
  price:number
}
export default function App() {
  const [list, setList] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) => {
      return res.json()
    }).then((data) => {
      setList(data)
    })
  }, [])
  return (
    <View style={styles.container}>
      <FlatList 
      data={list} 
      keyExtractor={(listItem:listItemType)=>{
        return listItem.id.toString();
      }}
      renderItem={({item})=>{
        return <Text>
        {item.title}
        {item.price}
      
      </Text>
  }}/>
<StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnContainer: {
    flexDirection: "row"
  },

});

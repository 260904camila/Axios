
import React, { useEffect} from 'react';
import { StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Post } from '@/api/AxiosComponent';


export default function HomeScreen() {

  useEffect(() => {
    fetchPosts()
  })

  async function fetchPosts() {
    const response = await Post.getPosts('posts')
    console.log(response)
   // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //console.log(response)
  }

  async function sendPost() {
   //
    }


  return (
   <SafeAreaView>
   <Button title='Enviar Post'  onPress={() => sendPost()}/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

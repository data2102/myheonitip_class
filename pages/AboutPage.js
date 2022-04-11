import React,{useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';


export default function AboutPage({ navigation, route }) {
  const aboutImage =
    "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4";
  
    useEffect(()=>{
        navigation.setOptions({
            title:"소개 페이지",
            headerStyle: {
                backgroundColor: '#1F266A',
                shadowColor: "#1F266A",
            },
            headerTintColor: "#fff",
        })
    },[])
  
  const link = () => {
        Linking.openURL("https://data05.tistory.com/")
    }
  
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.title}>나만의 리액트앱 만들기</Text>

      <View style={styles.textContainer}>
        <Image
          style={styles.aboutImage}
          source={{ uri: aboutImage }}
          resizeMode={"cover"}
        />
        <Text style={styles.desc1}>기초를 탄탄히! 꾸준히 노력을!</Text>
        <Text style={styles.desc2}>좋은 아이디어 실현을 위해</Text>
        <TouchableOpacity style={styles.button} onPress={() => link()}>
          <Text style={styles.buttonText}>K-Koding 티스토리</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    backgroundColor: "#1f266a",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginTop: 80,
    color: "#fff",
    fontWeight: "700",
    padding: 30,
  },
  textContainer: {
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutImage: {
    width: 150,
    height: 200,
    borderRadius: 30,
  },
  desc1: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 10,
  },
  desc2: {
    fontSize: 15,
    fontWeight: "700",
    padding: 10,
  },
  button: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "700",
  },
});

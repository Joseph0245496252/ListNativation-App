import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList, TouchableOpacity } from 'react-native'
import ArticleItem from '../components/ArticleItem'
import { SafeAreaView } from 'react-native-safe-area-context'

export class ArticleListScreen extends Component {
  List =[
    {
      id:10,
      shortText:"God is good all the time and all the time God is good.",
      image:require('../../assets/rep1.jpg' ), 
      profileimage:require('../../assets/f1.jpeg'),
      profileName:"Joseph",
       profilehr:"* 4 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer" ,
    },

    {
      id:20,
      shortText:"Is all bout Jesus, Jesus is Lord.",
      image:require('../../assets/rep2.jpg' ), 
      profileimage:require('../../assets/f2.jpeg'),
      profileName:"Reppy", 
      profilehr:"* 6 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer" ,
    },

    {
      id:30,
      shortText:"By grace you are save though Faith.",
      image:require('../../assets/rep3.jpg' ), 
      profileimage:require('../../assets/f3.jpeg'),
      profileName:"Asante", 
      profilehr:"* 8 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer"  ,
    },

    {
      id:40,
      shortText:"Justification is by faith in Christ Jesus.",
      image:require('../../assets/rep4.jpg' ), 
      profileimage:require('../../assets/f4.jpeg'),
      profileName:"Purpose", 
      profilehr:"* 10 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer" ,
    },
    {
      id:50,
      shortText:"Salvaion is by Faith in Christ Jesus.",
      image:require('../../assets/rep5.jpg' ), 
      profileimage:require('../../assets/f5.jpeg'),
      profileName:"ReppyPurpose", 
      profilehr:"* 12 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer" ,
    },
    {
      id:60,
      shortText:"Jesus deid for the sin of the world.",
      image:require('../../assets/rep6.jpg' ), 
      profileimage:require('../../assets/f6.jpg'),
      profileName:"JosephReppy", 
      profilehr:"* 14 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer" ,
    },
    {
      id:70,
      shortText:"It is finished (John 19:30).",
      image:require('../../assets/rep7.jpg' ), 
      profileimage:require('../../assets/f7.jpg'),
      profileName:"JoeRep", 
      profilehr:"* 16 min read",
      LongText:"God fearing yong man with hight moral standard // Hardware Engineer // Networking Administrator // Software Developer" ,
    },
  ]
  render() {
    const { navigation } = this.props

    return (
      <SafeAreaView style={styles.container}>
          <FlatList 
          
          data={this.List}
          renderItem={({item})=>{
            return  <ArticleItem 
                          shortText={item.shortText}
                          image={item.image}
                          profileimage={item.profileimage}
                          profileName={item.profileName}
                          profilehr={item.profilehr}
                          LongText={item.LongText}
                          navigation={navigation}
                      />  } }
          keyExtractor={item=>{item.id}}
          />
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffff"
        
    }
})

export default ArticleListScreen

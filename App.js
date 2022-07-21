import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Image,Text, View, FlatList, ScrollView, Dimensions } from 'react-native';
import news_data from './src/news_data.json';
import NewsCard from './src/components/NewsCard';
import news_banner_data from './src/news_banner_data.json';
function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View >

        <ScrollView >
          {
            news_banner_data.map(bannernews=><Image 
              style={styles.banner_image}
              source={{uri:bannernews.imageUrl}}/>)


          }

        </ScrollView>
        <FlatList
          keyExtractor={(item, index) => item.u_id.toString()}
          data={news_data}
          renderItem={renderNews}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9CA'
  },
  banner_image:{
    height:Dimensions.get('window').height/5,
  },
})

export default App;

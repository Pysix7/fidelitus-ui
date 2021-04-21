import React, { Fragment } from 'react';
import { StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Row from '../components/Row';
import Icon from '../components/Icon';
import { Text, View } from '../components/Themed';
import { styleConfigs } from '../configs/styleConfigs';
import { productCategories, products } from '../configs/data';

export default function HomeScreen() {

  const navigation = useNavigation();

  const renderItem = ({ item }: any) => {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Detail", {
            productId: item.id
          });
        }}>
          <View style={styles.listItemContainer}>
            <View style={styles.liRow}>
              <View style={styles.chairImgContainer}>
                <Image source={{ uri: item.img }} style={styles.chairImg} />
              </View>
              <View style={styles.listItemTextContainer}>
                <Text style={styles.listItemTitle} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.listItemTag} numberOfLines={1}>{item.tag}</Text>
                <Row styles={{
                  backgroundColor: styleConfigs.lightestGreyColor,
                }}>
                  <Icon name="star" color={styleConfigs.primaryColor} size={20} style={styles.star} />
                  <Icon name="star" color={styleConfigs.primaryColor} size={20} style={styles.star} />
                  <Icon name="star" color={styleConfigs.primaryColor} size={20} style={styles.star} />
                  <Icon name="star" color={styleConfigs.primaryColor} size={20} style={styles.star} />
                  <Icon name="star" color={styleConfigs.primaryColor} size={20} style={styles.star} />
                </Row>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Fragment>
    )
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Choose Your Best Furniture</Text>
        <Text style={styles.subTitle}>high quality furniture</Text>
      </View>
      <View style={styles.searchBox}>
        <Icon name="search-outline" color={styleConfigs.lightGreyColor} />
        <TextInput placeholder="search.." style={styles.searchInput} />
      </View>
      <Row styles={styles.categoryContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {productCategories.map((item) => (
            <TouchableOpacity key={item}>
              <View style={[styles.category, item === 'Chair' ? styles.activeCategory : null]}>
                <Text
                  style={[styles.categoryText, item === 'Chair' ? styles.activeCategoryText : null]}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Row>
      <View style={styles.flatlistContainer}>
        {(() => {
          let comp = null;
          if (products && products.length > 0) {
            comp = (
              <FlatList
                keyExtractor={(item: any) => `list-item-id-${item.id}`}
                data={products}
                renderItem={renderItem}
              />
            )
          } else {
            comp = (
              <View style={styles.noData}>
                <Text>
                  No Data
              </Text>
              </View>
            )
          }
          return comp;
        })()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: styleConfigs.greyColor,
    paddingHorizontal: 5,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    color: styleConfigs.lightGreyColor,
    paddingHorizontal: 5,
  },
  searchBox: {
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: styleConfigs.lightGreyColor
  },
  searchInput: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 18,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  flatlistContainer: {
    height: '78%',
    marginTop: 10,
    marginBottom: 30,
  },
  liRow: {
    backgroundColor: styleConfigs.lightestGreyColor,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 15,
    paddingHorizontal: 15,
  },
  listItemTextContainer: {
    backgroundColor: styleConfigs.lightestGreyColor,
    padding: 5,
    paddingLeft: 20,
    flex: 1
  },
  listItemContainer: {
    marginVertical: 10,
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: styleConfigs.greyColor,
    // flex: 1,
  },
  listItemTag: {
    paddingVertical: 5,
    fontSize: 14,
    color: styleConfigs.lightGreyColor,
  },
  userText: {
    color: styleConfigs.lightGreyColor,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 14
  },
  noData: {
    alignItems: 'center',
  },
  chairImgContainer: {
    backgroundColor: styleConfigs.lightestGreyColor,
  },
  chairImg: {
    width: 100,
    height: 110,
    borderRadius: 15,
    // resizeMode: 'cover'
  },
  star: { paddingHorizontal: 2 },
  price: {
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: styleConfigs.greyColor,
  },
  categoryContainer: {
    marginVertical: 10,
  },
  category: {
    padding: 10,
    backgroundColor: styleConfigs.lightestGreyColor,
    borderRadius: 30,
    margin: 10,
    width: 80,
  },
  activeCategory: {
    backgroundColor: styleConfigs.primaryColor,
  },
  categoryText: {
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: styleConfigs.greyColor,
  },
  activeCategoryText: {
    color: styleConfigs.whiteColor,
  }
});

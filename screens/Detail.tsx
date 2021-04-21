import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { styleConfigs } from '../configs/styleConfigs';
import { products } from '../configs/data';
import Row from '../components/Row';
import Icon from '../components/Icon';

export default function DetailScreen(props: any) {
  const productID = props.route?.params?.productId;
  const productData = products.find((item: any) => item.id === productID);
  return (
    <View style={styles.container}>
      {productData ? (
        <View style={styles.postContainer}>
          <View style={styles.chairImgContainer}>
            <Image source={{ uri: productData.img }} style={styles.chairImg} />
          </View>
          <Text style={styles.prodName}>{productData.name}</Text>
          <Text style={styles.prodDesc}>{productData.description}</Text>
          <Row styles={styles.colorRow}>
            <Text style={styles.colorText}>Color</Text>
            <Icon name="ellipse" color={styleConfigs.redColor} size={25} style={styles.star} />
            <Icon name="ellipse" color={styleConfigs.greenColor} size={25} style={styles.star} />
            <Icon name="ellipse" color={styleConfigs.blueColor} size={25} style={styles.star} />
          </Row>
          <Row styles={styles.priceCartBtnRow}>
            <Text style={styles.priceText}>${productData.price}</Text>
            <TouchableOpacity>
              <View style={styles.cartBtn}>
                <Text style={styles.cartBtnText}>
                  Cart
                  </Text>
              </View>
            </TouchableOpacity>
          </Row>
        </View>
      ) : (
        <View>
          <Text>
            No Data
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 25,
  },
  postContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  postTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: styleConfigs.primaryColor,
  },
  postBody: {
    fontSize: 24,
    marginVertical: 20,
    color: styleConfigs.lightGreyColor,
  },
  noData: {
    alignItems: 'center',
  },
  chairImgContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    // backgroundColor: styleConfigs.lightestGreyColor,
  },
  chairImg: {
    width: '100%',
    height: 400,
    borderRadius: 15,
    // resizeMode: 'contain'
  },
  prodName: {
    color: styleConfigs.greyColor,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  prodDesc: {
    color: styleConfigs.lightGreyColor,
    paddingBottom: 5,
    fontSize: 20,
    // margin: 10,
  },
  colorRow: {
    marginVertical: 20
  },
  colorText: {
    color: styleConfigs.greyColor,
    paddingBottom: 5,
    fontSize: 18,
    width: 80,
  },
  star: { paddingHorizontal: 2 },
  cartBtn: {
    padding: 10,
    backgroundColor: styleConfigs.primaryColor,
    borderRadius: 30,
    margin: 10,
    width: 120,
  },
  cartBtnText: {
    paddingVertical: 5,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: styleConfigs.whiteColor,
  },
  priceCartBtnRow: {
    justifyContent: 'space-between'
  },
  priceText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    width: 100,
  },
});

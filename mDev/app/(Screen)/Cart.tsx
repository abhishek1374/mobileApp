import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');  // Get screen width and height

const products = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus 37',
    price: 2193,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1568089195-3a8cc4fcf68b?fm=jpg&q=60&w=3000',
  },
  {
    id: 3,
    name: 'Puma Speedcat',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1585090214587-9a1f0c5f1da1?fm=jpg&q=60&w=3000',
  },
];

export default function CartPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <Text>{item.name}</Text>
            <Text>₹{item.price} x {item.quantity}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      <Text style={styles.total}>Total: ₹{totalPrice}</Text>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.05,  // 5% of screen width for padding
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: width * 0.06,  // 6% of screen width for title font size
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    padding: width * 0.03,  // 3% of screen width for padding
    backgroundColor: 'white',
    marginBottom: height * 0.02,  // 2% of screen height for margin
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: width * 0.25,  // 25% of screen width for image size
    height: height * 0.1,  // 10% of screen height for image size
    borderRadius: 10,
    marginRight: width * 0.05,  // 5% of screen width for margin
  },
  productInfo: {
    justifyContent: 'center',
  },
  productName: {
    fontSize: width * 0.04,  // 4% of screen width for product name font size
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: width * 0.035,  // 3.5% of screen width for price font size
    color: 'green',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: height * 0.015,  // 1.5% of screen height for vertical padding
    paddingHorizontal: width * 0.05,  // 5% of screen width for horizontal padding
    borderRadius: 5,
    marginTop: height * 0.01,  // 1% of screen height for margin top
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartItemContainer: {
    padding: width * 0.03,  // 3% of screen width for padding
    backgroundColor: 'white',
    marginBottom: height * 0.02,  // 2% of screen height for margin
    borderRadius: 10,
  },
  removeButton: {
    color: 'red',
    marginTop: height * 0.01,  // 1% of screen height for margin top
  },
  total: {
    fontSize: width * 0.05,  // 5% of screen width for total font size
    fontWeight: 'bold',
    marginTop: height * 0.02,  // 2% of screen height for margin top
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#2196F3',
    paddingVertical: height * 0.02,  // 2% of screen height for padding
    paddingHorizontal: width * 0.2,  // 20% of screen width for padding
    borderRadius: 5,
    marginTop: height * 0.03,  // 3% of screen height for margin top
    alignSelf: 'center',
  },
  checkoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

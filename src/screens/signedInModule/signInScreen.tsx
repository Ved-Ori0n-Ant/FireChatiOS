import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import TextComponent from "../../customComponents/textComponent";
import fieldValidator from "../signUpModule/signUpScreenValidator";
import TextInputComponent from "../../customComponents/textInputComponent";
import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { MainNavigatorType } from "../../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreen = () => {
  const validator = fieldValidator();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigation = useNavigation<NativeStackNavigationProp<MainNavigatorType>>();
  const {
    email,
    setEmail,
    emailError,
    emailValidator,
    password,
    setPassword,
    name,
  } = validator;

  const logInPressed = async () => {
    try {
      await auth().signInWithEmailAndPassword(
        email,
        password
      );
      setErrorMessage("");
      setEmail("");
      setPassword("");
      navigation.navigate('Users Screen')
    } catch (err: any) {
      console.log('Error encountered while log in with user credential', err);
      setErrorMessage(err.message);
    }
  };

    return (
      <SafeAreaView
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24
        }}>
        <View style={styles.homeScreenMainContainer}>
          <TextComponent
            testID="const-text"
            text="Please enter your credentials:"
          />
          <View style={[styles.textInputContainer, {borderBottomWidth: 1}]}>
            <TextInput
              testID="email-input"
              placeholder="Enter your email"
              style={styles.inputText}
              value={email}
              onChangeText={value => {
                setEmail(value);
                emailValidator(value);
              }}
              placeholderTextColor={'#0009'}
            />
          </View>
          {emailError !== '' ? (
            <TextComponent
              text={emailError}
              textStyle={styles.errorText}
              containerStyle={styles.textInputContainer}
            />
          ) : null}
          <View style={[styles.textInputContainer, {borderBottomWidth: 1}]}>
            <TextInput
              testID="password-input"
              placeholder="Enter your password"
              style={styles.inputText}
              secureTextEntry={true}
              value={password}
              onChangeText={value => {
                setPassword(value);
              }}
              placeholderTextColor={'#0009'}
            />
          </View>
          <TouchableOpacity
            accessibilityState={{disabled: false}}
            style={styles.homeScreenNavigationButton}
            onPress={() => {
              logInPressed();
            }}
            testID={'signin-btn'}>
            <Text style={styles.homeScreenNavigationButtonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityState={{disabled: false}}
            testID="signin_with_phone"
            onPress={() => {
              navigation.navigate('Signin Phone');
            }}>
            {/* Signin with phone number */}
            <Text style={styles.signinPhone}>Try another way of signin..</Text>
          </TouchableOpacity>
          <TouchableOpacity
            testID="sign_up_btn"
            accessibilityState={{disabled: false}}
            onPress={() => {
              navigation.navigate('Sign up Page');
            }}>
            <Text style={styles.signupNavigator}>New user? Sign up..</Text>
          </TouchableOpacity>
          <View style={{padding: 13}}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  homeScreenMainContainer: {
    // backgroundColor: "#acacac0a",
    backgroundColor: "#ffe5b4af",
    justifyContent: "center",
    alignItems: "center",
    height: '60%',
    borderRadius: 8,
    padding: 15
  },
  homeScreenNavigationButton: {
    width: 100,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderColor: "black",
    borderWidth: 0.3,
    padding: 3,
    borderRadius: 16,
    backgroundColor: "black",
    marginTop: 14,
  },
  homeScreenNavigationButtonText: {
    padding: 7,
    fontSize: 16,
    color: "white",
    flex: 1,
    alignSelf: "center",
    textDecorationLine: "underline",
  },
  textInputContainer: {
    width: 280,
    marginTop: 9,
    alignSelf: "center",
    // height: 54
  },
  inputText: {
    fontSize: 16,
    height: 35,
    fontWeight: "500",
    padding: 10,
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 10,
    textDecorationLine: 'none'
  },
  signupNavigator: {
    fontSize: 16,
    color: "blue",
    alignSelf: "center",
  },
  signinPhone: {
    fontSize: 14,
    color: "black",
    alignSelf: "center",
    marginBottom: 8,
    // textDecorationLine: 'underline'
  },
});

export default HomeScreen;
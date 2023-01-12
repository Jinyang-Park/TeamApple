import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import styled from "@emotion/native";
import firebase from "../firebase";
import LoginSuccess from "./LoginSuccess";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  userLogin = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("계정과 암호를 입력해주세요.");
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          // console.log(res);
          console.log("로그인 성공");
          this.setState({
            isLoading: false,
            email: "",
            password: "",
          });
          this.props.navigation.navigate("NotTabs", { screen: "LoginSuccess" });
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size='large' color='#9E9E9E' />
        </View>
      );
    }

    return (
      <TouchableWithoutFeedback
        accessible={false}
        onPress={() => Keyboard.dismiss()}
      >
        <SignInContainer>
          <HeaderContainer>
            <HeaderText>
              <Text>동물들의</Text>
            </HeaderText>
            <HeaderText>
              <Text>행복한 시작을 함께 해주세요</Text>
            </HeaderText>
            <HeaderImg>
              <HeaderPic source={require("../assets/mainimg.png")} alt='' />
            </HeaderImg>
          </HeaderContainer>
          <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}
            keyboardVerticalOffset={-90}
            enabled
          >
            <LoginContainer>
              <TextInput
                style={styles.inputStyle}
                placeholder='Email'
                value={this.state.email}
                placeholderTextColor='#fff'
                color='#fff'
                onChangeText={(val) => this.updateInputVal(val, "email")}
              />
              <TextInput
                style={styles.inputStyle}
                placeholder='Password'
                placeholderTextColor='#fff'
                color='#fff'
                value={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, "password")}
                maxLength={15}
                secureTextEntry={true}
              />

              <NextTimeText
                onPress={() =>
                  this.props.navigation.navigate("NotTabs", {
                    screen: "Filter",
                  })
                }
              >
                다음에 할래요
              </NextTimeText>

              <TouchableOpacity
                onPress={() => this.userLogin()}
                style={{
                  width: 100,
                  height: 40,
                  borderRadius: 20,
                  marginTop: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#F19936",
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>로그인</Text>
              </TouchableOpacity>

              <ToSignUpText
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <Text>회원가입 하러 갈래요</Text>
              </ToSignUpText>
            </LoginContainer>
          </KeyboardAvoidingView>
        </SignInContainer>
      </TouchableWithoutFeedback>
    );
  }
}

const SignInContainer = styled.View`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #0c68f2;
`;

const HeaderContainer = styled.View`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  margin-top: 10px;
  text-align: center;
`;
const HeaderImg = styled.View`
  margin-top: 20px;
  width: 200px;
  height: 200px;
`;
const HeaderPic = styled.Image`
  margin-left: -13px;
  width: 120%;
  height: 100%;
`;

const LoginContainer = styled.View`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px;
  margin-top: 30px;
  background-color: #0c68f2;
`;

const NextTimeText = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 5px;
`;

const ToSignUpText = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 25px;
  font-weight: 700;
`;

const styles = StyleSheet.create({
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  avoidingView: {
    flex: 1,
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

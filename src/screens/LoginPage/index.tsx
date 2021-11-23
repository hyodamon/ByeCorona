import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native'

import InputText from '../../components/InputText/index'
import SignUp1 from '../SignUp/SignUp1';

const { width, height } = Dimensions.get('window');
const SC = {
    container: styled.View`
        height : ${height}px;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    introduceText: styled.Text`
        font-family: 'Bold';
        font-size: 24px;
        color : #FFFFFF;
        top : -10%;
        width : ${width * 0.7}px;
    `,
    loginBtn: styled.TouchableOpacity`
        width : ${width * 0.7}px;
        height : 40px;
        background-color: white;
        border-radius:5px;
        margin : 15px;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    loginBtnText: styled.Text`
        font-family: 'Regular';
        font-size : 16px;
        color : #6666FF;
    `,
    signUpBtn: styled.TouchableOpacity`
        width : ${width * 0.7}px;
        height : 40px;
        border: 2px;
        border-color: white;
        border-radius:5px;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    signUpBtnText: styled.Text`
        font-family: 'Regular';
        font-size : 16px;
        color : white;
    `
}
const LoginPage = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#6666FF' }}>

            <SC.container>
                <SC.introduceText>
                    걱정되는{"\n"}코로나19 백신 부작용, {"\n"}쉽게 확인해보세요.
                </SC.introduceText>
                <InputText placeHolder='아이디' type='id'></InputText>
                <InputText placeHolder='비밀번호' type='pw'></InputText>
                <SC.loginBtn onPress={() => {
                    navigation.reset({ routes: [{ name: 'MainPage' }] })
                }}>
                    <SC.loginBtnText>로그인</SC.loginBtnText>
                </SC.loginBtn>
                <SC.signUpBtn onPress={() => {
                    navigation.navigate('SignUp1');
                }}>
                    <SC.signUpBtnText>회원가입</SC.signUpBtnText>
                </SC.signUpBtn>
            </SC.container>
        </SafeAreaView>
    )
}
export default LoginPage
import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

import InputText from '../../components/InputText/index'
import SignUp1 from '../SignUp/SignUp1';

const { width, height } = Dimensions.get('window');
const SC = {
    container: styled.View`
        background-color: #6666FF;
        height : ${height}px;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    introduceText: styled.Text`
        font-family: 'Regular';
        font-size: 24px;
        color : #FFFFFF;
        top : -10%;
        width : ${width * 0.7}px;
    `,
    userName: styled.Text`
        font-family: 'Bold';
        font-size: 24px;
        color : #FFFFFF;
    `,
    longBtn: styled.TouchableOpacity`
        width : ${width * 0.7}px;
        height : 40px;
        background-color: white;
        border-radius:5px;
        margin : 5px;
        display : flex;
        justify-content: center;
        align-items: center;
    `,
    longBtnText: styled.Text`
        font-family: 'Medium';
        font-size : 16px;
        color : #6666FF;
    `,
    logout: styled.TouchableOpacity`
        top: 30%;

    `,
    logoutText: styled.Text`
        font-size : 14px;
        color : #ffffff;
    `
}

const user = {
    name: "양효준"

}
const LoginPage = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#6666FF' }}>
            <SC.container>
                <SC.introduceText>
                    안녕하세요.{"\n"}<SC.userName>{user.name}</SC.userName>님
                </SC.introduceText>
                <SC.longBtn onPress={() => {
                    navigation.navigate('SideEffectPage');
                }}>
                    <SC.longBtnText>부작용 확률</SC.longBtnText>
                </SC.longBtn>
                <SC.longBtn onPress={() => {
                    navigation.navigate('ReportPage');
                }}>
                    <SC.longBtnText>부작용 보고</SC.longBtnText>
                </SC.longBtn>
                <SC.longBtn>
                    <SC.longBtnText>긴급 신고</SC.longBtnText>
                </SC.longBtn>
                <SC.logout onPress={() => {
                    navigation.reset({ routes: [{ name: 'LoginPage' }] })
                }}><SC.logoutText>로그아웃</SC.logoutText></SC.logout>
            </SC.container>
        </SafeAreaView>
    )
}
export default LoginPage
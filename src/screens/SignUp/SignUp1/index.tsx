import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import HeaderBar from '../../../components/HeaderBar';
import SignUpInputForm from '../../../components/SignUpInputForm';
import NextBtn from '../../../components/NextBtn';

const { width, height } = Dimensions.get('window');

const SC = {
    container: styled.View`
        display : flex;
        height : ${height}px;
        align-items: center;
        background-color : white;
    `,
    nextBtn: styled.View`
        display: flex;
        align-items: center;
        position : absolute;
        top : 70%;
    `
}

const SignUp1 = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="회원가입" navigation={navigation}> </HeaderBar>
            <SC.container>
                <SignUpInputForm title="아이디" placeHolder="아이디를 입력해주세요." type="text"></SignUpInputForm>
                <SignUpInputForm title="비밀번호" placeHolder="비밀번호를 입력해주세요." type="pw"></SignUpInputForm>
                <SignUpInputForm title="비밀번호 확인" placeHolder="비밀번호를 한번 더 입력해주세요." type="pw"></SignUpInputForm>
                <SC.nextBtn>
                    <NextBtn navigation={navigation} nextPage="SignUp2"></NextBtn>
                </SC.nextBtn>
            </SC.container>
        </SafeAreaView>
    )
}

export default SignUp1;
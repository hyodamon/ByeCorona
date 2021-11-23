import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import HeaderBar from '../../../components/HeaderBar';
import SignUpInputForm from '../../../components/SignUpInputForm';
import RadioBtnForm from '../../../components/RadioBtnForm';
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

const SignUp2 = ({ navigation }: any) => {

    const sex = ["남자", "여자"]

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="회원가입" navigation={navigation}> </HeaderBar>
            <SC.container>
                <SignUpInputForm title="이름" placeHolder="이름를 입력해주세요." type="text"></SignUpInputForm>
                <SignUpInputForm title="생년월일" placeHolder="YYYY/MM/DD" type="text"></SignUpInputForm>
                <RadioBtnForm title="성별" data={sex}></RadioBtnForm>
                <SC.nextBtn>
                    <NextBtn navigation={navigation} nextPage="SignUp3"></NextBtn>
                </SC.nextBtn>
            </SC.container>

        </SafeAreaView>
    )
}

export default SignUp2;
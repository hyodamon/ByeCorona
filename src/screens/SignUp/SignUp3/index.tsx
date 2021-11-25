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

const SignUp3 = ({ navigation }: any) => {

    const vaccine1 = ["유", "무"]
    const vaccine1type = ["화이자", "모더나", "얀센"]
    const vaccine2 = ["유", "무"]
    const vaccine2type = ["화이자", "모더나", "얀센"]

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="회원가입" navigation={navigation}> </HeaderBar>
            <SC.container>
                <RadioBtnForm title="1차 백신 접종 유무" data={vaccine1}></RadioBtnForm>
                <RadioBtnForm title="1차 백신 종류" data={vaccine1type}></RadioBtnForm>
                <SignUpInputForm title="1차 백신 접종 예정 날짜" placeHolder="YYYY/MM/DD" type="text"></SignUpInputForm>
                <RadioBtnForm title="2차 백신 접종 유무" data={vaccine2}></RadioBtnForm>
                <RadioBtnForm title="2차 백신 종류" data={vaccine2type}></RadioBtnForm>
                <SignUpInputForm title="2차 백신 접종 예정 날짜" placeHolder="YYYY/MM/DD" type="text"></SignUpInputForm>
                <SC.nextBtn>
                    <NextBtn navigation={navigation} nextPage="SignUp4"></NextBtn>
                </SC.nextBtn>
            </SC.container>
        </SafeAreaView>
    )
}

export default SignUp3;
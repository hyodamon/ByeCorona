import React, { useState } from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import HeaderBar from '../../components/HeaderBar';
import RadioBtnForm from '../../components/RadioBtnForm';
import SignUpInputForm from '../../components/SignUpInputForm';
import CompleteBtn from '../../components/CompleteBtn';

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

const ReportPage = ({ navigation }: any) => {

    const headache = ["예", "아니오"];
    const breath = ["예", "아니오"];
    const fever = ["예", "아니오"];
    const cold = ["예", "아니오"];
    const rash = ["예", "아니오"];

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="회원가입" navigation={navigation}> </HeaderBar>
            <SC.container>
                <RadioBtnForm title="두통 또는 편두통이 있었나요?" data={headache}></RadioBtnForm>
                <RadioBtnForm title="호흡에 불편한 점이 있었나요?" data={breath}></RadioBtnForm>
                <RadioBtnForm title="열이 있었나요?" data={fever}></RadioBtnForm>
                <RadioBtnForm title="오한 또는 추위가 있었나요?" data={cold}></RadioBtnForm>
                <RadioBtnForm title="발진 또는 홍반이 있었나요?" data={rash}></RadioBtnForm>
                <SignUpInputForm title="기타 증상을 적어주세요." placeHolder="" type="text"></SignUpInputForm>
                <SC.nextBtn>
                    <CompleteBtn navigation={navigation} nextPage="CompletePage"></CompleteBtn>
                </SC.nextBtn>
            </SC.container>

        </SafeAreaView>
    )
}

export default ReportPage;
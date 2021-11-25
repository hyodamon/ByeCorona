import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import HeaderBar from '../../../components/HeaderBar';
import SignUpInputForm from '../../../components/SignUpInputForm';
import RadioBtnForm from '../../../components/RadioBtnForm';
import CompleteBtn from '../../../components/CompleteBtn';

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

const SignUp4 = ({ navigation }: any) => {

    const dose = ["유", "무"]
    const disease = ["유", "무"]

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="회원가입" navigation={navigation}> </HeaderBar>
            <SC.container>
                <RadioBtnForm title="약 복용 유무" data={dose}></RadioBtnForm>
                <RadioBtnForm title="질병 유무" data={disease}></RadioBtnForm>
                <SC.nextBtn>
                    <CompleteBtn navigation={navigation} nextPage="CompletePage"></CompleteBtn>
                </SC.nextBtn>
            </SC.container>
        </SafeAreaView>
    )
}

export default SignUp4;
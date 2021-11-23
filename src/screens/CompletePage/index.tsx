import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

import CompleteBtn from '../../components/CompleteBtn';

const { width, height } = Dimensions.get('window');

const SC = {
    container: styled.View`
        display : flex;
        height : ${height}px;
        align-items: center;
        justify-content: center;
        background-color : white;
    `,
    nextBtn: styled.View`
        display: flex;
        align-items: center;
        position : absolute;
        top : 70%;
    `,
    thankText: styled.Text`
        font-family : 'Medium';
        font-size : 56px;
    `,
    nameText: styled.Text`
        font-family: 'Medium';
        font-size : 20px;
    `,
    text: styled.Text`
        font-family : 'Regular';
        font-size : 20px;
    `
}

const CompletePage = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <SC.container>
                <FontAwesome name="thumbs-up" size={70} color="#6666FF" />
                <SC.thankText>감사합니다!</SC.thankText>
                <SC.text><SC.nameText>양효준</SC.nameText> 님</SC.text>
                <SC.nextBtn>
                    <CompleteBtn navigation={navigation} nextPage="MainPage"></CompleteBtn>
                </SC.nextBtn>
            </SC.container>
        </SafeAreaView>
    )
}

export default CompletePage;


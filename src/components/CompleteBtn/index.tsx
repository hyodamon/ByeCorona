import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

const SC = {
    container: styled.View`
        display : flex;
        justify-content: center;
        align-items: center;
        height : ${(height - 70) * 0.175}px;
        width : ${width}px;
        background-color : white;
    `,
    nextBtn: styled.TouchableOpacity`
        background-color: #6666FF;
        width : ${width * 0.9}px;
        height : 50px;
        display: flex;
        justify-content: center;
        align-items : center;
        border-radius: 5px;
    `,
    innerText: styled.Text`
        font-family: 'Bold';
        font-size : 20px;
        color : white;
    `
}

interface Props {
    navigation: any;
    nextPage: string;
}

const CompleteBtn = ({ nextPage, navigation }: Props) => {
    return (
        <SC.container>
            <SC.nextBtn onPress={() => {
                navigation.reset({ routes: [{ name: nextPage }] })
            }}>
                <SC.innerText>완료</SC.innerText>
            </SC.nextBtn>
        </SC.container>
    )
}

export default CompleteBtn;
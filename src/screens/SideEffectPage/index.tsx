import React from 'react';
import { Dimensions, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

import HeaderBar from '../../components/HeaderBar';
import SideEffectNavigation from '../../components/SideEffectNavigation'
const { width, height } = Dimensions.get('window');

const SC = {
    container: styled.View`
        display : flex;
        height : ${height}px;
        align-items: center;
        background-color : white;
    `,
    topContainer: styled.View`
        padding : 20px;
    `,
    regularText: styled.Text`
        font-family: 'Regular';
        font-size : 20px;
    `,
    boldText: styled.Text`
        font-family : 'Bold';
        font-size : 20px;
    `,
    br: styled.View`
        color : grey;
        width : ${width}px;
        height : 50px;
    `,
}

const SignUp1 = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <HeaderBar title="부작용 확률" navigation={navigation}> </HeaderBar>
            <SC.container>
                <SC.topContainer>
                    <SC.regularText><SC.boldText>양효준</SC.boldText> 님의 백신 부작용 확률</SC.regularText>
                    <SC.regularText>20대 / 화이자 / 남자</SC.regularText>
                </SC.topContainer>
                <SC.br></SC.br>
                <SideEffectNavigation></SideEffectNavigation>

            </SC.container>
        </SafeAreaView>
    )
}


export default SignUp1;
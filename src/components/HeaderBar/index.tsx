import React, { ReactNode } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styled from 'styled-components/native';
const SC = {
    container: styled.View`
        height : 70px;
        align-items: center;
        flex-direction: row;
        padding : 0 20px;
        justify-content: space-between;
        border-bottom-width: 0.5px;
        border-color : gray;
        background-color : white;
    `,
    storeName: styled.Text`
        font-family: Bold;
        font-size: 24px;
        color : #6666FF;
    `,
}

interface Props {
    children: ReactNode;
    title: string;
    navigation: any;
}

const HeaderBar = ({ children, title, navigation }: Props) => {
    return (
        <SC.container>
            <Ionicons name="arrow-back" size={24} color="gray" onPress={() => { navigation.goBack() }} />
            <SC.storeName>{title}</SC.storeName>
            <View></View>
        </SC.container>
    )
}

export default HeaderBar;

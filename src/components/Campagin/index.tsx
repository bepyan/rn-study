import React from 'react'
import { Button, Text } from 'react-native-elements';
import styled from 'styled-components/native';
import { Container } from '../../atoms/styled';
import { campaginNavigation } from '../../navigation/useNavigation';

export default () => {
    const navigation = campaginNavigation();
    return (
        <Container>
            <Button
                title="내 캠페인"
                type="clear"
                onPress={() => navigation.navigate('MyCampagin')}
            />
            <Button
                title="나만의 캠페인 만들기"
                type="clear"
                onPress={() => navigation.navigate('MakeCampagin')}
            />
            <Button
                title="캠페인 검색하기"
                type="clear"
                onPress={() => navigation.navigate('SearchCampagin')}
            />
            <CampaignList>
                <Text>Recommend Campaign List</Text>
            </CampaignList>
        </Container>
    )
}

const CampaignList = styled.View`
    padding-top: 10%;
`
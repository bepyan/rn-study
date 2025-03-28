import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import { TextArea } from '../../atoms'
import ImgPicker from '../../atoms/ImgPicker'
import { Button, Container } from '../../atoms/styled'
import { modalNavigation } from '../../navigation/useNavigation'

interface Props {

}

const MakePinPointModal = (props: Props) => {
    const modalNav = modalNavigation();
    const [title, setTitle] = useState("")

    return (
        <Container>
            <Input
                onChangeText={(text: string) => setTitle(text)}
                inputStyle={{ textAlign: "center" }}
                placeholder="핀포인트 이름"
            />
            <Button title="위치찾기" onPress={() => console.log('위치 찾기 api 연동')}/>
            <ImgPicker />

            <TextArea placeholder="핀포인트 설명" />

            <Button title="next" onPress={() => modalNav.navigate('MakePinPointQuiz')}/>
        </Container>
    )
}

export default MakePinPointModal

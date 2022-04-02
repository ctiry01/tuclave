import styled from "styled-components";
import {Select} from "../atoms/Select";
import {LenghtSelectPassword, TypeSelectPassword} from "../../data/SelectOptions";
import {Button} from "../atoms/Button";
import {useEffect, useState} from "react";

function generatePassword(length: number, chars: string | null) {

    let charsType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>-_.;|"#{}[]¿?!¡'

    if (chars && chars === 'lettersAndNumbers') {
        charsType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    }

    if (chars && chars === 'letters') {
        charsType = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    }

    if (chars && chars === 'numbers') {
        charsType = '0123456789'
    }

    let res = ''
    for (let i = 0; i < length; i++) {
        res += charsType.charAt(Math.floor(Math.random() * charsType.length));
    }
    return res
}

interface GeneratePasswordBoxProps {
    password: Function
}

export const GeneratePasswordBox = ({password}: GeneratePasswordBoxProps) => {

    const [FuncPasswordLength, setFunctionPasswordLength] = useState<number>(24)
    const [FuncPasswordChars, setFunctionPasswordChars] = useState<string>('fullChars')

    useEffect(() => {
        password(generatePassword(FuncPasswordLength, FuncPasswordChars))
    }, [])

    return (
        <Wrapper>
            <Select result={(e: any) => setFunctionPasswordLength(e)} center options={LenghtSelectPassword}
                    label='Longitud de la contraseña' selected={FuncPasswordLength}/>
            <Select result={(e: any) => setFunctionPasswordChars(e)} center options={TypeSelectPassword}
                    label='Tipo de contraseña (de menos a más segura)' selected={FuncPasswordChars}/>
            <TheButton onClick={() => password(generatePassword(FuncPasswordLength, FuncPasswordChars))}>Generar
                contraseña</TheButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TheButton = styled(Button)`
  margin-top: 1rem;
`
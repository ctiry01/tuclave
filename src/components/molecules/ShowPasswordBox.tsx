import styled from "styled-components";
import {Button} from "../atoms/Button";
import {CardResult} from "../atoms/CardResult";
import {ProgressBar} from "../atoms/ProgressBar";
import {useEffect, useState} from "react";

interface ShowPasswordBoxProps {
    result: string
}


function calculatePasswordSecureLevel(password: string) {

    let res = (password.length * 100) / 24;

    //REGEX for  only numbers
    if (/^[0-9]+$/.test(password)) {
        res -= res * 0.40
    }

    //REGEX for only letters
    if (/^[a-zA-Z]+$/.test(password)) {
        res -= res * 0.30
    }

    //REGEX for only letters and numbers
    if (/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(password)) {
        res -= res * 0.10
    }

    return res.toFixed(0)
}

export const ShowPasswordBox = ({result}: ShowPasswordBoxProps) => {
    const [clipboard, setClipBoard] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setClipBoard(false)
        }, 10000)
    }, [clipboard])

    return (
        <Wrapper>
            <CustomButton bgColor='#3DA453' hoverColor='#37954B' onClick={() => {
                navigator.clipboard.writeText(result).then(() => {
                    setClipBoard(true)
                })
            }}>{clipboard ? '¡Contraseña copiada!' : 'Copiar contraseña al portapapeles'}</CustomButton>
            <CardResult>{result}</CardResult>
            <WrapperProgressbar>
                <TitleProgress>Nivel de seguridad {calculatePasswordSecureLevel(result)}%</TitleProgress>
                <ProgressBar color='#5c9ead' progress={calculatePasswordSecureLevel(result)}/>
            </WrapperProgressbar>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const TitleProgress = styled.p`
  margin: 0;
  padding-bottom: 0.3rem;
`

const CustomButton = styled(Button)`
  margin: 1rem 0;
`

const WrapperProgressbar = styled.div`
  padding-top: 1rem;
`
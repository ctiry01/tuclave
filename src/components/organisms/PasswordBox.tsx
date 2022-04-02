import styled from "styled-components";
import {GeneratePasswordBox} from "../molecules/GeneratePasswordBox";
import {ShowPasswordBox} from "../molecules/ShowPasswordBox";
import {useEffect, useState} from "react";

export const PasswordBox = () => {
    const [password, setPassword] = useState<string>('');

    return (
        <Wrapper>
            <WrapperBox>
                <GeneratePasswordBox password={(e : any) => setPassword(e)}/>
            </WrapperBox>
            <WrapperBox>
                <ShowPasswordBox result={password}/>
            </WrapperBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const WrapperBox = styled.div`
  padding: 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
import styled from "styled-components";

interface SelectProps {
    height?: number
    color?: string
    options: Array<any>
    center?: boolean
    label?: string
    result: Function
    selected?: number | string
}

interface SelectStyles {
    height: number
    color: string
    center: boolean
}

export const Select = ({height = 30, color = '#d90368', options, center = false, label, result, selected}: SelectProps) => {

    return (
        <>
            {label && <Label>{label}</Label>}
            <WrapperSelect height={height} color={color} center={center} onChange={(e) => result(e.target.value)} defaultValue={selected ? selected : ''}>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    )
                })}
            </WrapperSelect>
        </>
    )
}

const WrapperSelect = styled.select<SelectStyles>`
  border: none;
  border-bottom: 1px solid ${({color}) => color};
  width: 100%;
  height: ${({height}) => height}px;
  border-radius: 3px 3px 0 0;
  font-weight: bold;
  color: black;

  > option {
    text-align: ${({center}) => center ? 'center' : 'left'};
  }
`

const Label = styled.label`
  padding: 1rem 0 0.6rem 0;
`
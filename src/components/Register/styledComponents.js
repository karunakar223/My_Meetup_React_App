import styled from 'styled-components/'

export const RegisterContainer = styled.div`
  font-family: 'Roboto';
  height: 87vh;
  display: flex;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 48px;
  font-weight: 700;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`
export const Image = styled.img`
  height: 70%;
  width: 80%;
`
export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Form = styled.form``
export const InputLabel = styled.label`
  color: #64748b;
  font-size: 14px;
  font-weight: 700;
`
export const InputElement = styled.input`
  color: #64748b;
  height: 40px;
  width: 50%;
  border: 2px solid #cbd5e1;
  font-size: 14px;
  font-weight: 600;
  padding: 20px;
  border-radius: 8px;
  outline: none;
  margin-top: 12px;
  margin-bottom: 12px;
`
export const SelectElement = styled.select`
  color: #334155;
  border: 2px solid #cbd5e1;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  outline: none;
  margin-top: 12px;
  margin-bottom: 6px;
  height: 40px;
  width: 50%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OptionElement = styled.option``
export const RegisterButton = styled.button`
  height: 45px;
  width: 140px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ErrorElement = styled.p`
  color: #ff0b37;
  font-size: 14px;
  font-weight: 500;
`

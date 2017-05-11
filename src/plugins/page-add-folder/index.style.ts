import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  flex-grow: 1;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 40px;
  font-size: 16px;
  align-items: center;
  color: #777;
  border-bottom: 1px solid #ddd;
`

export const TitleLeftContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TitleRightContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CloseContainer = styled.div`
  padding: 5px;
  cursor: pointer;
  fill: #999;
  align-items: center;
  &:hover {
    fill: #333;
  }
`

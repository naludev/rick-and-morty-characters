import styled, { css } from 'styled-components'

export const column = css`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`
export const Column = styled.div`${column}`

export const row = css`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`

export const Row = styled.div`${row}`

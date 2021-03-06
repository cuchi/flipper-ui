import React from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children?: React.ReactNode
}

const StyledContent = styled.main`
    flex: 1;
    transition: all 500ms ease;
`

const Content: React.SFC<IProps> = ({ children, padding, margin, style = {}, ...otherProps }) =>
    <StyledContent
        { ...otherProps }
        style={ { padding, margin, ...style } }>
        { children }
    </StyledContent>

export default Content

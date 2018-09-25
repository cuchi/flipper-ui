import MuiTableRow from '@material-ui/core/TableRow'
import React from 'react'
import styled from 'styled-components'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactNode
    selected?: boolean
    hover?: boolean
    border?: boolean
}

interface IRow {
    border?: boolean
}

const StyledRow = styled(MuiTableRow)<IRow>`
    border-color: ${props => props.border ? '#E0E0E0' : 'transparent' } !important;
`

const TableRow: React.SFC<IProps> = ({
    style,
    margin,
    padding,
    children,
    border = false,
    ...otherProps
}) =>
    <StyledRow
        { ...otherProps }
        border={ border }
        style={ { padding, margin, ...style } }>
        { children }
    </StyledRow>

export default TableRow

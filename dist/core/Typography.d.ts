import React from 'react';
import { IDefault } from './Advertise';
interface IProps extends IDefault {
    noWrap?: boolean;
    children?: React.ReactNode;
    variant?: 'display4' | 'display3' | 'display2' | 'display1' | 'headline' | 'title' | 'subheading' | 'body2' | 'body1' | 'caption' | 'button';
    color?: 'default' | 'error' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary';
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}
declare const Typography: React.SFC<IProps>;
export default Typography;

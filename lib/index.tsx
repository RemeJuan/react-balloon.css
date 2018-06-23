/* tslint:disable:max-line-length */
import React, { SFC } from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

const animation = ({ always, message }) => (
  (!always && message) ? css`
    animation-name: fadeIn;
    animation-duration: 0.2s;
  ` : null
);

const top = css`
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 10px);
  transform-origin: top;
`;
const topHover = css`
  transform: translate(-50%, 0);
`;

const bottom = css`
  left: 50%;
  top: 100%;
  transform: translate(-50%, -10px);
`;
const bottomHover = topHover;

const left = css`
  right: 100%;
  top: 50%;
  transform: translate(10px, -50%);
`;
const leftHover = css`
  transform: translate(0, -50%);
`;

const right = css`
  left: 100%;
  top: 50%;
  transform: translate(10px, -50%);
`;
const rightHover = leftHover;

const always = ({ position }) => {
  if (position === 'left' || position === 'right') {
    return css`${leftHover}`;
  }
  return css`${topHover}`;
};

const TooltipWrapper = styled.span`
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  overflow: visible;
  position: relative;

  &:before {
    ${ifProp({ position: 'top' }, css`
      background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(0)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");
      height: 6px;
      width: 18px;
      ${top};
      margin-bottom: 5px;
    `)};

    ${ifProp({ position: 'bottom' }, css`
      background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");
      height: 6px;
      width: 18px;
      ${bottom};
      margin-top: 5px;
    `)};

    ${ifProp({ position: 'left' }, css`
      background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(-90 18 18)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");
      width: 6px;
      height: 18px;
      ${left};
      margin-right: 5px;
    `)};
    ${ifProp({ position: 'right' }, css`
      background: no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba(17, 17, 17, 0.9)%22%20transform%3D%22rotate(90 6 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");
      width: 6px;
      height: 18px;
      ${right};
      margin-left: 5px;
    `)};
    background-size: 100% auto;
    content: " ";
    opacity: ${ifProp('always', 1, 0)};
    transform: translate(-50%,0);
    position: absolute;
    ${ifProp('always', always)}
  }

  &:after {
    ${ifProp({ position: 'top' }, css`
      ${top};
      margin-bottom: 11px;
    `)}
    ${ifProp({ position: 'bottom' }, css`
      ${bottom};
      margin-top: 11px;
    `)}
    ${ifProp({ position: 'left' }, css`
      ${left};
      margin-right: 11px;
    `)}
    ${ifProp({ position: 'right' }, css`
      ${right};
      margin-left: 11px;
    `)}
    background: rgba(17, 17, 17, 0.9);
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    padding: .5em 1em;
    white-space: normal;
    margin-bottom: 11px;
    width: ${ifProp({ length: 'small' }, '80px', ifProp({ length: 'medium' }, '150', ifProp({ length: 'large' }, '260px', ifProp({ length: 'xlarge' }, '380px', '100%'))))};
    opacity: ${ifProp('always', 1, 0)};
    pointer-events: none;
    position: absolute;
    z-index: 10;
    background-size: 100% auto;
    content: "${prop('message')}";
    ${ifProp('always', always)}
  }

  &:hover {
    display: ${ifProp('blockChild', 'block')};

    &:after {
      ${animation};
      opacity: ${ifProp('message', 1, 0)};
      pointer-events: auto;
      ${ifProp({ position: 'top' }, topHover)}
      ${ifProp({ position: 'bottom' }, bottomHover)}
      ${ifProp({ position: 'left' }, leftHover)}
      ${ifProp({ position: 'right' }, rightHover)}
    }

    &:before {
      ${animation};
      opacity: ${ifProp('message', 1, 0)};
      pointer-events: auto;
      ${ifProp({ position: 'top' }, topHover)}
      ${ifProp({ position: 'bottom' }, bottomHover)}
      ${ifProp({ position: 'left' }, leftHover)}
      ${ifProp({ position: 'right' }, rightHover)}
    }
  }
`;
interface IProps {
  children: JSX.Element | JSX.Element[] | Element | Element[];
}

const Tooltip: SFC<IProps> = ({ children, ...rest }) => (
  <TooltipWrapper
    {...rest}
  >
    {children}
  </TooltipWrapper>
);

Tooltip.defaultProps = {
  message: undefined,
  length: 'fit',
  blockChild: false,
  always: false,
  position: 'top',
};

export default Tooltip;

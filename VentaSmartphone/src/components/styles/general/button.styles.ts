import styled from 'styled-components';
import COLORS from '../../../constants/colors/COLORS';

export const IconButton = styled.button`
  position: absolute;
  height: 60px;
  width: 60px;
  border: 0px;
  top: 0px;
  left: 0px;
  background-color: transparent;
`;
export const IconTextButton = styled.button`
  display: grid;
  grid-template-columns: 30% 70%;
  position: absolute;
  height: 60px;
  width: 150px;
  border: 0px;
  background-color: transparent;
  color: white;
  align-items: center;
  justify-items: center;
  top: 10px;
  left: 2px;
`;
type buttonSize = {
  size?: 'small' | 'medium' | 'large';
  mode?: 'danger' | 'success' | 'normal';
};
const buttonSizes = {
  small: { w: 100, h: 60 },
  medium: { w: 190, h: 60 },
  large: { w: 250, h: 60 },
};

export const StyledButton = styled.button<buttonSize>`
  width: ${({ size = 'medium' }) => {
    if (size == 'small') {
      return `${buttonSizes.small.w}px`;
    } else if (size == 'medium') {
      return `${buttonSizes.medium.w}px`;
    } else if (size == 'large') {
      return `${buttonSizes.large.w}px`;
    }
  }};
  height: ${({ size = 'medium' }) => {
    if (size == 'small') {
      return `${buttonSizes.small.h}px`;
    } else if (size == 'medium') {
      return `${buttonSizes.medium.h}px`;
    } else if (size == 'large') {
      return `${buttonSizes.large.h}px`;
    }
  }};
  font-size: 20px;
  background-color: ${({ mode = 'normal' }) => {
    if (mode == 'danger') {
      return COLORS.RED;
    } else if (mode == 'normal') {
      return COLORS.DARK_BLUE;
    } else if (mode == 'success') {
      return COLORS.GREEN;
    }
  }};
  color: ${({ mode = 'normal' }) => {
    if (mode == 'normal') {
      return 'white';
    } else {
      return 'black';
    }
  }};
  align-self: center;
  justify-self: center;
  &:disabled {
    color: white;
    background-color: ${COLORS.GRAY};
  }
`;
export const IconButtonRelative = styled.button`
  border: 0px;
  background-color: transparent;
`;

export const IconTextButtonRelative = styled.button`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 40px;
  width: 170px;
  border: 0px;
  background-color: white;
  border-radius: 1em;
  color: black;
  align-items: center;
  justify-items: center;
  top: 10px;
  left: 2px;
`;
export const StyledFullButton = styled.button<buttonSize>`
  width: 100%;
  height: 100%;
  font-size: 20px;
  background-color: ${({ mode = 'normal' }) => {
    if (mode == 'danger') {
      return COLORS.RED;
    } else if (mode == 'normal') {
      return COLORS.DARK_BLUE_PASTEL;
    } else if (mode == 'success') {
      return COLORS.GREEN;
    }
  }};
  color: ${({ mode = 'normal' }) => {
    if (mode == 'normal') {
      return 'white';
    } else {
      return 'black';
    }
  }};
  align-self: center;
  justify-self: center;
  &:disabled {
    color: white;
    background-color: ${COLORS.GRAY_PASTEL};
  }
`;
export const IconButtonSave = styled.button`
  position: absolute;
  height: 60px;
  width: 60px;
  border: 0px;
  top: 0px;
  right: 0px;
  background-color: transparent;
  color: orange;
  &:disabled {
    color: gray;
  }
`;

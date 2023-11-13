import styled from 'styled-components';
type TextProps = {
  size?: 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  $color?: string;
};
const textSizes = {
  small: 10,
  medium: 20,
  large: 25,
  xl: 30,
  xxl: 35,
};
export const Text = styled.p<TextProps>`
  font-size: ${({ size = 'medium' }) => {
    if (size == 'small') {
      return `${textSizes.small}px`;
    } else if (size == 'large') {
      return `${textSizes.large}px`;
    } else if (size == 'xl') {
      return `${textSizes.xl}px`;
    } else if (size == 'xxl') {
      return `${textSizes.xxl}px`;
    } else {
      return `${textSizes.medium}px`;
    }
  }};
  color: ${({ $color = 'white' }) => {
    return $color;
  }};
`;
export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  color: white;
`;
export const TextInherit = styled.p<TextProps>`
  font-size: ${({ size = 'medium' }) => {
    if (size == 'small') {
      return `${textSizes.small}px`;
    } else if (size == 'large') {
      return `${textSizes.large}px`;
    } else {
      return `${textSizes.medium}px`;
    }
  }};
  color: inherit;
`;

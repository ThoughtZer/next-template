import styled from 'styled-components';

const PrimaryColor = 'blue';

export const Title = styled.h1`
  font-size: 50px;
  color: ${PrimaryColor};
`;

export const EventButton = styled.button`
  font-size: 30px;
  color: ${PrimaryColor};
  border: 1px solid red;
`;

export const MyHeader = styled.header`
  font-size: 20px;
  color: rgba(0, 0, 0, .1);
  line-height: 30px;
  background-image: url("${(props) => props.imgSrc}");
  background-size: cover;
  width: 200px;
  height: 200px;
`;

MyHeader.defaultProps = {
  imgSrc: '',
};

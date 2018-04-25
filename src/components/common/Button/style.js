import styled from 'styled-components';

export const PrimaryButton = styled.button`
  min-width: 100px;
  display: inline-block;
  text-align: center;
  background-color: ${props => props.theme.colorPrimary};
  border: 1px solid ${props => props.theme.colorPrimary};
  color: ${props => props.theme.fontColorInvert};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9em;
  border-radius: 20px;
  border: none;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;

  &.outline {
    background-color: #fff;
    border: 1px solid #3238ff;
    color: #3238ff;
  }

  &.small {
    font-size: 0.8em;
    min-width: 100px;
    line-height: normal;
    height: 26px;
  }

    &.small2 {
    font-size: 0.8em;
    min-width: 60px;
    line-height: normal;
    height: 21px;
  }


  &.text {
    color: #3238ff;
    background: none;
    border: none;
    height: 26px;
    padding: 0;
    min-width: auto;
    line-height: normal;
  }

  &.edit {
    color: #3238ff;
    background: none;
    border: none;
    height: 26px;
    width: 26px;
    padding: 0;
    min-width: auto;
    line-height: normal;
    background: url(/images/edit-icon.png) no-repeat center;
  }

  &.delete {
    background: none;
    border: none;
    height: 26px;
    width: 26px;
    padding: 0;
    min-width: auto;
    line-height: normal;
    background: url(/images/delete-icon.png) no-repeat center;
  }
`;

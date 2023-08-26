import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const CheckboxLabel = styled.label`
  display: inline-block;
  vertical-align: middle;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide the default checkbox visually but remain accessible to screen readers */
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? '#0077ff' : '#fff')};
  border-radius: 4px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const TermsCheckbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <CheckboxLabel>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      I agree to the terms and conditions
    </CheckboxLabel>
  </CheckboxContainer>
);

export default TermsCheckbox;
import { render } from '@testing-library/react';
import App from './App';
import React from "react";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: key => key }),
  withTranslation: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  },
}));

test('renders app', () => {
  render(<App/>);
});

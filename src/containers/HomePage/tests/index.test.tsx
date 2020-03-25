/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import HomePage from '../index';
import { Provider } from 'react-redux';
import * as navigationActions from '../../../store/actions/navigation';
import configureStore from '../../../store/config';

jest.mock('../../../store/actions/navigation');
const renderHomePage = (store: any, props: any) => {
  return {
    ...render(
      <Provider store={store}>
        <HomePage {...props} />
      </Provider>,
    ),
  };
};

describe('Test Init', () => {
  let store: any;
  const mockedgoToNextPage = navigationActions.goToNextPage as jest.Mock;
  const mockedretrieveLastPageState = navigationActions.retrieveLastPageState as jest.Mock;

  beforeAll(() => {
    mockedgoToNextPage.mockImplementation(() => ({ type: '' }));
    mockedretrieveLastPageState.mockImplementation(() => ({ type: '' }));
  });

  beforeEach(() => {
    store = configureStore('test');
    mockedretrieveLastPageState.mockClear();
    mockedgoToNextPage.mockClear();
  });

  afterEach(cleanup);

  it('Should render welcome text', () => {
    const {
      getByText,
      container: { firstChild },
    } = renderHomePage(store, { title: 'Alejandro' });
    expect(getByText('Welcome Home!! Alejandro')).toBeInTheDocument();
    expect(firstChild).toMatchSnapshot();
  });

  it('Should call the redux dispatches', () => {
    const { getByText } = renderHomePage(store, { title: 'Alejandro' });
    fireEvent.click(getByText('Click me'));
    expect(navigationActions.goToNextPage).toHaveBeenCalled;
    expect(navigationActions.retrieveLastPageState).toHaveBeenCalled;
  });
});

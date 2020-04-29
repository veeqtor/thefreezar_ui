// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// import * as React from 'react';
// import { render, cleanup, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';

// // import HomePage from 'modules/views/Home';
// import * as navigationActions from 'store/actions/navigation';
// import configureStore from 'store/config';
// import { lazy } from '@loadable/component';
// import withSuspense, { IWithSuspenseProps } from 'modules/HOC/withSuspense';

// jest.mock('store/actions/navigation');

// const renderHomePage = (store: any, props: any) => {
//   const LazyComponent = lazy(() => import(`modules/views/Home`));

//   const HomePage = withSuspense({ page: 'Home', ...props });
//   return {
//     ...render(
//       <Provider store={store}>
//         <React.Suspense fallback="loading">
//           <LazyComponent {...props} />
//         </React.Suspense>
//       </Provider>,
//     ),
//   };
// };

// describe('HomeContainer Test', () => {
//   let store: any;
//   const mockedgoToNextPage = navigationActions.goToNextPage as jest.Mock;
//   const mockedretrieveLastPageState = navigationActions.retrieveLastPageState as jest.Mock;

//   beforeAll(() => {
//     mockedgoToNextPage.mockImplementation(() => ({ type: '' }));
//     mockedretrieveLastPageState.mockImplementation(() => ({ type: '' }));
//   });

//   beforeEach(() => {
//     store = configureStore('test');
//     mockedretrieveLastPageState.mockClear();
//     mockedgoToNextPage.mockClear();
//   });

//   afterEach(cleanup);

//   it('Should render welcome text', () => {
//     const {
//       getByText,
//       container: { firstChild },
//     } = renderHomePage(store, { title: 'Alejandro' });
//     expect(getByText('Welcome Home!! Alejandro')).toBeInTheDocument();
//     expect(firstChild).toMatchSnapshot();
//   });

//   it('Should call the redux dispatches', () => {
//     const { getByText } = renderHomePage(store, { title: 'Alejandro' });
//     fireEvent.click(getByText('Click me'));
//     expect(navigationActions.goToNextPage).toHaveBeenCalled;
//     expect(navigationActions.retrieveLastPageState).toHaveBeenCalled;
//   });
// });

export default {};

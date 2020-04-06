import configureStore, { history } from 'store/config';

const { NODE_ENV = 'production' } = process.env;

export { history };
export default configureStore(NODE_ENV);

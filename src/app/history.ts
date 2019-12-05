import { createMemoryHistory, createBrowserHistory } from 'history';

type HistoryParams = {
  initialEntries?: any[];
};

export const createHistory = ({ initialEntries = [] }: HistoryParams = {}) => {
  if (initialEntries.length > 0) {
    return createMemoryHistory({ initialEntries });
  }
  return createBrowserHistory();
};

export default createHistory;

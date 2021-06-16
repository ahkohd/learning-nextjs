import { APP_NAME } from 'configs/base';

export const pathToTitle = path => {
  if (path === '/') {
    return 'Nextful by Ahkohd';
  } else {
    const pathChunks = path.replace(/-/g, ' ').split('/');
    const pageTitle = pathChunks[pathChunks.length - 1];

    return `${pageTitle[0].toUpperCase() +
      pageTitle.slice(1, pageTitle.length)} | ${APP_NAME}`;
  }
};

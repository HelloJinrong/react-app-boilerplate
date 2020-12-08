import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('zh-cn');

// eslint-disable-next-line no-console
console.log(11111);

export const getCurrentTime = time => dayjs(time).format('ll');

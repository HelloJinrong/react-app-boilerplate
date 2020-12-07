import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';

import LocalizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(LocalizedFormat);
dayjs.locale('en');

import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getCurrentTime = time => dayjs(time).format('ll');

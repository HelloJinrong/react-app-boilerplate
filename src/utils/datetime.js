import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.locale('zh-cn');

export const getCurrentTime = time => dayjs(time).format('ll');

import { add } from 'date-fns';

export const mockData = new Array(20).fill(0).map((el, i) => ({
  id: i,
  date: add(new Date(), {
    days: i,
  }),
  availabilities: '10:00 AM - 06.00 AM',
}));

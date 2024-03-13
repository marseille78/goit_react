import { formatDistanceStrict } from 'date-fns';
// Локалізацію додаємо за аналогією з formatEventStart.js

export const formatEventDuration = (start, end) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(end));
}

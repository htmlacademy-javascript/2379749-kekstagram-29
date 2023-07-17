function checkMeetingTime(startOfWorkday, endOfWorkday, startOfMeeting, meetingDuration) {
  // Разбиваем строки на отдельные часы и минуты
  const [startOfWorkdayHours, startOfWorkdayMinutes] = startOfWorkday.split(':').map(Number);
  const [endOfWorkdayHours, endOfWorkdayMinutes] = endOfWorkday.split(':').map(Number);
  const [startOfMeetingHours, startOfMeetingMinutes] = startOfMeeting.split(':').map(Number);

  // Рассчитываем общее количество минут для каждой временной метки
  const startOfWorkdayTotalMinutes = startOfWorkdayHours * 60 + startOfWorkdayMinutes;
  const endOfWorkdayTotalMinutes = endOfWorkdayHours * 60 + endOfWorkdayMinutes;
  const startOfMeetingTotalMinutes = startOfMeetingHours * 60 + startOfMeetingMinutes;

  // Рассчитываем время окончания встречи
  const endOfMeetingTotalMinutes = startOfMeetingTotalMinutes + meetingDuration;

  // Проверяем, находится ли начало и окончание встречи в пределах рабочего дня
  const isStartWithinWorkday = startOfMeetingTotalMinutes >= startOfWorkdayTotalMinutes && startOfMeetingTotalMinutes <= endOfWorkdayTotalMinutes;
  const isEndWithinWorkday = endOfMeetingTotalMinutes >= startOfWorkdayTotalMinutes && endOfMeetingTotalMinutes <= endOfWorkdayTotalMinutes;

  return isStartWithinWorkday && isEndWithinWorkday;
}

console.log(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true
console.log(checkMeetingTime('8:0', '10:0', '8:0', 120));     // true
console.log(checkMeetingTime('08:00', '14:30', '14:00', 90)); // false
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90));  // false
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900)); // false

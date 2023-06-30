function generatePhotosArray() {
  const photosArray = Array.from({ length: 25 }, (_, i) => {
    const id = i + 1;
    const url = `photos/${id}.jpg`;
    const description = generateDescription();
    const likes = getRandomNumber(15, 200);
    const comments = generateComments();

    return { id, url, description, likes, comments };
  });

  return photosArray;
}

// Вспомогательная функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Вспомогательная функция для генерации описания фотографии
function generateDescription() {
  const descriptions = [
    'Прекрасный закат на пляже',
    'Осенние краски в горах',
    'Моя любимая кошка',
    'Утренняя чашка кофе',
    'Городская архитектура вечером',
    'Романтическая прогулка по парку',
    'Цветочное море в саду',
    'Панорамный вид на город',
    'Закуска на день рождения',
    'Красивый замок в старом городе'
  ];

  const randomIndex = getRandomNumber(0, descriptions.length - 1);
  return descriptions[randomIndex];
}

// Вспомогательная функция для генерации комментариев к фотографии
function generateComments() {
  const commentsCount = getRandomNumber(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    const comment = generateComment();
    comments.push(comment);
  }

  return comments;
}

// Вспомогательная функция для генерации отдельного комментария
function generateComment() {
  const id = getRandomNumber(1, 1000);
  const avatar = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  const message = generateMessage();
  const name = generateName();

  return { id, avatar, message, name };
}

// Вспомогательная функция для генерации случайного сообщения из списка
function generateMessage() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const randomIndex = getRandomNumber(0, messages.length - 1);
  return messages[randomIndex];
}

// Вспомогательная функция для генерации случайного имени комментатора
function generateName() {
  const names = ['Алексей', 'Екатерина', 'Михаил', 'Ольга', 'Иван', 'Анна'];
  const randomIndex = getRandomNumber(0, names.length - 1);
  return names[randomIndex];
}

// Пример использования
const photos = generatePhotosArray();
console.log(photos);

import fetchData from './http';

export default function getLevel(userId) {
  const response = fetchData(`https://localhost/8000/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}

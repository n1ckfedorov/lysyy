import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import axios from 'axios';

// API URL
const API_URL = 'https://sergiylysyy.com/api/media';

// Получение пути к текущей директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь для сохранения медиа на уровне проекта
const mediaDirectory = path.join(__dirname, '..', 'media');

// Функция для скачивания файла
async function downloadFile(url, dest) {
  const writer = fs.createWriteStream(dest);

  try {
    const response = await axios({
      method: 'GET',
      url,
      responseType: 'stream',
    });

    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', () => resolve());
      writer.on('error', error => reject(error));
    });
  } catch (error) {
    console.error(`Error downloading file from ${url}:`, error.response?.status, error.response?.statusText);
  }
}

// Получаем список медиафайлов
async function fetchMedia() {
  try {
    const response = await axios.get(API_URL);
    return response.data.docs;
  } catch (error) {
    console.error('Error fetching media:', error);
  }
}

// Синхронизируем медиа
async function syncMedia() {
  const media = await fetchMedia();
  if (media && media.length > 0) {
    for (const file of media) {
      const fileUrl = file.url;
      const fileName = file.filename;
      const localPath = path.join(mediaDirectory, fileName); // Сохраняем в папку media на уровне выше

      if (!fs.existsSync(path.dirname(localPath))) {
        fs.mkdirSync(path.dirname(localPath), { recursive: true });
      }

      console.log(`Downloading ${fileName}...`);
      await downloadFile(fileUrl, localPath);
      console.log(`Downloaded ${fileName}`);
    }
  } else {
    console.log('No media found to sync.');
  }
}

// Запуск синхронизации
syncMedia();

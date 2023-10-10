# 1. Сборка на WebPack. Первый урок

1. Установить webpack и webpack-cli
`npm i webpack webpack-cli`

2. Написать config файл для webpack. Файл `webpack.config.js`
Содержимое файла:
```js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js',
    }
};
```

3. В файле package.json определить команды для запуска webpack.
```json
"scripts": {
    "dev": "webpack --mode development",
    "build": "webpack --mode production"
  },
```

4. Написать модульный JS, c импортами, чтобы протестировать работу сборки.

Файл main.js
```js
import num from "./test";
console.log(`Тестирование импорта. Импортировали число - ${num}`);
```

Файл test.js
```js
console.log("Imported module");
export default 110;
```

-------------------------------------------------------------------------------

# 2. Сборка на WebPack. Второй урок

1. Устанавливаем пакет `webpack-dev-server`:
`npm i webpack-dev-server --save-dev`

2. Добавляем настройку `devServer` для сервера в файл с конфигурацией webpack:
```js
devServer: {
    contentBase: './dist'
}
```

Также меняем настройку пути для результирующего файла:
```js
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
},
```

Итоговый вид файла `webpack.config.js`:
```js
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: {
        contentBase: './dist'
    }
};
```

3. Добавляем команду для старта сервера в файл `package.json`:
```json
"start": "webpack-dev-server --mode development --open"
```

4. Запускаем сервер:
`npm run start`

5. Открывается окно браузера с локального сервера.
Вносим изменения в исходный JS скрипты и видим автообновление и пересборку JS. Profit!

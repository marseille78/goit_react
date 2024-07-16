# Module-02

## Пакети

- modern-normalize

- Компоненты-классы: class, extends, constructor(), render()
- События:
  - Встроенные пропсы событий
  - Инлайн колбеки
  - Методы для колбеков в разметку (публичные свойства класса)
  - SyntheticEvent Object и асинхронные операции
- [Внутреннее состояние компонента](http://fecore.net.ua/books/rq7s2k-react/lesson-03/images/class-component.jpg):
  - [Обновение компонента](http://fecore.net.ua/books/rq7s2k-react/lesson-03/images/reactivity.jpg)
  - state в конструкторе
  - state как публичное свойство
- [Изменение состояния](./state-update.png):
  - Запрет на изменение вручную по ссылке
  - Метод setState(update, callback)
  - Как обновляется состояние - передача слайса
  - Изменение состояния от предыдущего. Метод setState(updaterFn, callback)
  - Начальное состояние от props
- [Подъем состояния при композиции (state hoisting, lifting state up)](http://fecore.net.ua/books/rq7s2k-react/lesson-03/#%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%BC-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F-state-hoisting)
  - Методы для колбеков в пропсы детям (публичные свойства класса)
- Выпадающее меню:
  - Тогл элемента
  - Как правильно скрывать и показывать компоненты в React
- Оживляем колорпикер:
  - Храним выбранный цвет
  - Добавляем стиль активного элемента
- Коллекция заметок (работа с массивом):
  - Создание заметки
  - Удаление заметки
  - Вычисляемые данные (derived data)
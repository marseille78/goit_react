# prop-types

**Одно з можливих значень**

```js
optionalEnum: PropTypes.oneOf(['News', 'Photos']),
```

**Вказуємо масив чого**

```js
optionalArrayOf: PropTypes.arrayOf(PropTypes.number)
```

**Опис об'єкта**

```js
optionalObjectWithShape: PropTypes.shape({
    optionalProperty: PropTypes.string,
    requiredProperty: PropTypes.number.isRequired
})
```

**Все, що може бути зарендерено. (children)**

```js
optionalNode: PropTypes.node
```
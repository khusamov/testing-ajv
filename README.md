# testing-ajv
Тестирование https://www.npmjs.com/package/ajv



0) Проверить как ссылаться на внешние схемы из схемы. Это нужно для реализации полиморфных узлов (discriminator).
    Внимание, есть другой модуль, где точно есть ссылки их схемы на схему https://www.npmjs.com/package/jsonschema
1) Проверить как добавлять ключевые слова на примере nullable и discriminator
https://www.npmjs.com/package/ajv
2) придумать способ хранения схем
Например можно пользоваться конвертером https://github.com/chaliy/sequelize-json-schema
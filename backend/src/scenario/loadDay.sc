theme: /

    state: ПоказатьПраздник
        q!: (праздник|праздники)
            $AnyText::anyText
            $weight<-0.8>

        script:
            var dateNumber = findNumberDate($request.query);
            if (dateNumber === 'notMatch') {
              $reactions.transition("/ДатаНеРаспознана");
            } else {
              loadDay(dateNumber, $context);
            }

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: ПоказатьПраздникПоДате
        q!: * (января|февраля|марта|апреля|мая|июня|июля|августа|сентября|октября|ноября|декабря)

        script:
            var dateNumber = findNumberDate('Праздники ' + $request.query);
            if (dateNumber === 'notMatch') {
              $reactions.transition("/ДатаНеРаспознана");
            } else {
              loadDay(dateNumber, $context);
            }

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: Сегодня
        q!: * сегодня *

        script:
            var dateNumber = findNumberDate('Праздники сегодня');
            if (dateNumber === 'notMatch') {
              $reactions.transition("/ДатаНеРаспознана");
            } else {
              loadDay(dateNumber, $context);
            }

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: Завтра
        q!: * завтра *

        script:
            var dateNumber = findNumberDate('Праздники завтра');
            if (dateNumber === 'notMatch') {
              $reactions.transition("/ДатаНеРаспознана");
            } else {
              loadDay(dateNumber, $context);
            }

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: Вчера
        q!: * вчера *

        script:
            var dateNumber = findNumberDate('Праздники вчера');
            if (dateNumber === 'notMatch') {
              $reactions.transition("/ДатаНеРаспознана");
            } else {
              loadDay(dateNumber, $context);
            }

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: ДеньВперёд
        q!: * День вперёд *

        script:
            loadNextDay($context);

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: ДеньНазад
        q!: * День назад *

        script:
            loadPreviousDay($context);

        random:
            a: Загружаю!
            a: Сейчаc посмотрим!
            a: Уже загружаю!
            a: Готово!

    state: ДатаНеРаспознана
        random:
            a: Не могу разобрать дату
            a: Не нахожу такой даты

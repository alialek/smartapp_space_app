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

    state: ДатаНеРаспознана
        random:
            a: Не могу разобрать дату
            a: Не нахожу такой даты

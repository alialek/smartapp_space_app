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
            a: Давай посмотрим!
            a: Давай узнаем!
            a: Не знал, что такие праздники бывают!

    state: ДатаНеРаспознана
        random:
            a: Не могу разобрать дату, попробуйте еще раз.
            a: Не нахожу такой даты, попробуйте еще раз.

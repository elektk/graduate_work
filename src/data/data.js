
const products = [
    {
        'id': 1,
        'name': "Устрицы по рокфеллеровски",
        'description': "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        'price': 2700,
        'weight': '/ 500 г.',
        'img': "1.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 2,
        'name': "Свиные ребрышки на гриле с зеленью",
        'description': "Не следует, однако забывать, что реализация намеченных плановых",
        'price': 1600,
        'weight': '/ 750 г.',
        'img': "2.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 3,
        'name': "Креветки по-королевски в лимонном соке",
        'description': "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
        'price': 1820,
        'weight': '/ 7 шт.',
        'img': "3.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 4,
        'name': "Устрицы по рокфеллеровски",
        'description': "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        'price': 2700,
        'weight': '/ 500 г.',
        'img': "4.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 5,
        'name': "Устрицы по рокфеллеровски",
        'description': "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        'price': 2700,
        'weight': '/ 500 г.',
        'img': "5.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 6,
        'name': "Свиные ребрышки на гриле с зеленью",
        'description': "Не следует, однако забывать, что реализация намеченных плановых",
        'price': 2700,
        'weight': '/ 750 г.',
        'img': "6.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 7,
        'name': "Креветки по-королевски в лимонном соке",
        'description': "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
        'price': 1820,
        'weight': '/ 7 шт.',
        'img': "7.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
    {
        'id': 8,
        'name': "Устрицы по рокфеллеровски",
        'description': "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры",
        'price': 1820,
        'weight': '/ 500 г.',
        'img': "8.png",
        'detailedDescr': 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений',
    },
]


export default products
document.addEventListener('DOMContentLoaded', function() {
    // Пример данных (в реальном проекте замените на запрос к вашему API или базе данных)
    const banknotesData = [
        {
            id: 1,
            country: "Россия",
            denomination: "100 рублей",
            year: "2017",
            series: "Банк России 2017",
            size: "150 × 65 мм",
            material: "Бумага",
            description: "Современная купюра с изображением достопримечательностей Москвы. Основной цвет - оливково-зеленый.",
            images: ["russia_100_2017_1.jpg", "russia_100_2017_2.jpg"],
            isFavorite: false,
            inWishlist: false,
            isPurchased: false
        },
        {
            id: 2,
            country: "США",
            denomination: "1 доллар",
            year: "2017",
            series: "Federal Reserve Note",
            size: "156 × 66 мм",
            material: "Хлопок и лён",
            description: "Классическая купюра с портретом Джорджа Вашингтона. Зеленая печать и серийные номера.",
            images: ["usa_1_2017_1.jpg", "usa_1_2017_2.jpg"],
            isFavorite: true,
            inWishlist: false,
            isPurchased: true
        },
        {
            id: 3,
            country: "Канада",
            denomination: "10 долларов",
            year: "2018",
            series: "Полимерная серия",
            size: "152 × 70 мм",
            material: "Полимер",
            description: "Фиолетовая купюра с портретом Виолы Десмонд, активистки за гражданские права. Содержит прозрачное окно и голографические элементы.",
            images: ["canada_10_2018_1.jpg", "canada_10_2018_2.jpg"],
            isFavorite: false,
            inWishlist: true,
            isPurchased: false
        },
        {
            id: 4,
            country: "Евросоюз",
            denomination: "50 евро",
            year: "2017",
            series: "Европа",
            size: "140 × 77 мм",
            material: "Хлопок",
            description: "Оранжевая купюра с изображением окон и мостов в стиле эпохи Возрождения. Содержит голограмму и защитную нить.",
            images: ["euro_50_2017_1.jpg", "euro_50_2017_2.jpg"],
            isFavorite: true,
            inWishlist: false,
            isPurchased: true
        },
        {
            id: 5,
            country: "Япония",
            denomination: "1000 иен",
            year: "2004",
            series: "Серия E",
            size: "150 × 76 мм",
            material: "Хлопок и бумага",
            description: "Синяя купюра с портретом Хидэё Ногути, известного бактериолога. Водяной знак — сакура.",
            images: ["japan_1000_2004_1.jpg", "japan_1000_2004_2.jpg"],
            isFavorite: false,
            inWishlist: true,
            isPurchased: false
        },
        {
            id: 6,
            country: "Великобритания",
            denomination: "20 фунтов",
            year: "2020",
            series: "Полимерная серия",
            size: "139 × 73 мм",
            material: "Полимер",
            description: "Фиолетово-голубая купюра с портретом художника Уильяма Тёрнера. Содержит прозрачное окно и метку для слабовидящих.",
            images: ["uk_20_2020_1.jpg", "uk_20_2020_2.jpg"],
            isFavorite: true,
            inWishlist: false,
            isPurchased: true
        },
        {
            id: 7,
            country: "Австралия",
            denomination: "5 долларов",
            year: "2016",
            series: "Полимерная серия",
            size: "130 × 65 мм",
            material: "Полимер",
            description: "Розовая купюра с портретом королевы Елизаветы II и изображением здания Парламента. Имеет прозрачное окно в форме эвкалипта.",
            images: ["australia_5_2016_1.jpg", "australia_5_2016_2.jpg"],
            isFavorite: false,
            inWishlist: true,
            isPurchased: false
        },
        {
            id: 8,
            country: "США",
            denomination: "5 долларов",
            year: "2013",
            series: "Federal Reserve Note",
            size: "156 × 66 мм",
            material: "Хлопок и лён",
            description: "Фиолетовые и серые элементы, портрет Авраама Линкольна. На обратной стороне — мемориал Линкольна.",
            images: ["usa_5_2013_1.jpg", "usa_5_2013_2.jpg"],
            isFavorite: false,
            inWishlist: true,
            isPurchased: false
        },
        {
            id: 9,
            country: "США",
            denomination: "20 долларов",
            year: "2017",
            series: "Federal Reserve Note",
            size: "156 × 66 мм",
            material: "Хлопок и лён",
            description: "Купюра с портретом Эндрю Джексона. Защитные элементы: голографическая полоса и цветопеременная краска.",
            images: ["usa_20_2017_1.jpg", "usa_20_2017_2.jpg"],
            isFavorite: true,
            inWishlist: false,
            isPurchased: true
        },
        {
            id: 10,
            country: "Канада",
            denomination: "5 долларов",
            year: "2013",
            series: "Полимерная серия",
            size: "152 × 70 мм",
            material: "Полимер",
            description: "Синяя купюра с портретом сэра Уилфрида Лорье. Прозрачное окно с изображением космического аппарата.",
            images: ["canada_5_2013_1.jpg", "canada_5_2013_2.jpg"],
            isFavorite: false,
            inWishlist: true,
            isPurchased: false
        },
        {
            id: 11,
            country: "Канада",
            denomination: "50 долларов",
            year: "2017",
            series: "Полимерная серия",
            size: "152 × 70 мм",
            material: "Полимер",
            description: "Красная купюра с портретом Уильяма Лайона Макензи Кинга. Содержит голограмму и УФ-элементы.",
            images: ["canada_50_2017_1.jpg", "canada_50_2017_2.jpg"],
            isFavorite: true,
            inWishlist: false,
            isPurchased: true
        },
        {
            id: 12,
            country: "Евросоюз",
            denomination: "20 евро",
            year: "2015",
            series: "Европа",
            size: "133 × 72 мм",
            material: "Хлопок",
            description: "Синяя купюра с архитектурными мотивами в стиле готики. Голограмма и изумрудная печать.",
            images: ["euro_20_2015_1.jpg", "euro_20_2015_2.jpg"],
            isFavorite: false,
            inWishlist: true,
            isPurchased: false
        },
        {
    id: 13,
    country: "Евросоюз",
    denomination: "100 евро",
    year: "2019",
    series: "Европа",
    size: "147 × 77 мм",
    material: "Хлопок",
    description: "Зеленая купюра с элементами барокко и рококо. Содержит голограмму и прозрачное окно.",
    images: ["euro_100_2019_1.jpg", "euro_100_2019_2.jpg"],
    isFavorite: true,
    inWishlist: false,
    isPurchased: true
},
{
    id: 14,
    country: "Япония",
    denomination: "2000 иен",
    year: "2000",
    series: "Серия D",
    size: "154 × 76 мм",
    material: "Хлопок и бумага",
    description: "Редкая купюра с изображением ворот Сюрей (Окинава) и сцены из «Повести о Гэндзи». Водяной знак — дерево.",
    images: ["japan_2000_2000_1.jpg", "japan_2000_2000_2.jpg"],
    isFavorite: false,
    inWishlist: true,
    isPurchased: false
},
{
    id: 15,
    country: "Япония",
    denomination: "5000 иен",
    year: "2004",
    series: "Серия E",
    size: "156 × 76 мм",
    material: "Хлопок и бумага",
    description: "Фиолетовая купюра с портретом Итиё Хигути, писательницы периода Мэйдзи. Защитная полоса с микротекстом.",
    images: ["japan_5000_2004_1.jpg", "japan_5000_2004_2.jpg"],
    isFavorite: true,
    inWishlist: false,
    isPurchased: true
},
{
    id: 16,
    country: "Великобритания",
    denomination: "5 фунтов",
    year: "2016",
    series: "Полимерная серия",
    size: "125 × 65 мм",
    material: "Полимер",
    description: "Голубая купюра с портретом Уинстона Черчилля. Прозрачное окно в форме Биг-Бена.",
    images: ["uk_5_2016_1.jpg", "uk_5_2016_2.jpg"],
    isFavorite: false,
    inWishlist: true,
    isPurchased: false
},
{
    id: 17,
    country: "Великобритания",
    denomination: "50 фунтов",
    year: "2021",
    series: "Полимерная серия",
    size: "146 × 77 мм",
    material: "Полимер",
    description: "Красная купюра с портретом Алана Тьюринга. Содержит голограмму и тактильные метки для слабовидящих.",
    images: ["uk_50_2021_1.jpg", "uk_50_2021_2.jpg"],
    isFavorite: true,
    inWishlist: false,
    isPurchased: true
},
{
    id: 18,
    country: "Австралия",
    denomination: "10 долларов",
    year: "2017",
    series: "Полимерная серия",
    size: "137 × 65 мм",
    material: "Полимер",
    description: "Синяя купюра с портретами поэта Эндрю Бартона «Банджо» Патерсона и предпринимательницы Мэри Рейби. Прозрачное окно с изображением птицы.",
    images: ["australia_10_2017_1.jpg", "australia_10_2017_2.jpg"],
    isFavorite: false,
    inWishlist: true,
    isPurchased: false
},
{
    id: 19,
    country: "Австралия",
    denomination: "50 долларов",
    year: "2018",
    series: "Полимерная серия",
    size: "151 × 65 мм",
    material: "Полимер",
    description: "Желтая купюра с портретами писателя Дэвида Юнайпона и политика Эдит Коуэн. Содержит УФ-элементы и тактильные метки.",
    images: ["australia_50_2018_1.jpg", "australia_50_2018_2.jpg"],
    isFavorite: true,
    inWishlist: false,
    isPurchased: true
},
{
    id: 20,
    country: "Швейцария",
    denomination: "50 франков",
    year: "2016",
    series: "9-я серия",
    size: "137 × 74 мм",
    material: "Хлопок",
    description: "Зеленая купюра с изображением руки, держащей одуванчик. Символизирует ветер и творчество. Одна из самых защищенных в мире.",
    images: ["switzerland_50_2016_1.jpg", "switzerland_50_2016_2.jpg"],
    isFavorite: true,
    inWishlist: false,
    isPurchased: true
},
{
    id: 21,
    country: "Мексика",
    denomination: "100 песо",
    year: "2020",
    series: "Полимерная серия",
    size: "134 × 66 мм",
    material: "Полимер",
    description: "Купюра посвящена биосферному заповеднику. Изображены колибри и кактусы. Прозрачное окно в форме солнца.",
    images: ["mexico_100_2020_1.jpg", "mexico_100_2020_2.jpg"],
    isFavorite: false,
    inWishlist: true,
    isPurchased: false
},
    {
        id: 22,
        country: "Швейцария",
        denomination: "20 франков",
        year: "2017",
        series: "9-я серия",
        size: "130 × 74 мм",
        material: "Хлопок",
        description: "Красная купюра с изображением руки, держащей свет. Символизирует креативность. Голограмма и УФ-элементы.",
        images: ["switzerland_20_2017_1.jpg", "switzerland_20_2017_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 23,
        country: "Швейцария",
        denomination: "100 франков",
        year: "2019",
        series: "9-я серия",
        size: "144 × 74 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением воды и руки. Защитные элементы: 3D-голограмма и микротекст.",
        images: ["switzerland_100_2019_1.jpg", "switzerland_100_2019_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 24,
        country: "Мексика",
        denomination: "20 песо",
        year: "2021",
        series: "Полимерная серия",
        size: "120 × 65 мм",
        material: "Полимер",
        description: "Синяя купюра с изображением орла и кактусов. Прозрачное окно в форме солнца.",
        images: ["mexico_20_2021_1.jpg", "mexico_20_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 25,
        country: "Мексика",
        denomination: "200 песо",
        year: "2022",
        series: "Полимерная серия",
        size: "141 × 66 мм",
        material: "Полимер",
        description: "Зеленая купюра с изображением исторического здания. Содержит голограмму и тактильные метки.",
        images: ["mexico_200_2022_1.jpg", "mexico_200_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 26,
        country: "Норвегия",
        denomination: "50 крон",
        year: "2018",
        series: "Морская тема",
        size: "126 × 70 мм",
        material: "Хлопок",
        description: "Зелено-голубая купюра с изображением маяка. УФ-элементы в виде волн.",
        images: ["norway_50_2018_1.jpg", "norway_50_2018_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 27,
        country: "Норвегия",
        denomination: "100 крон",
        year: "2017",
        series: "Морская тема",
        size: "133 × 70 мм",
        material: "Хлопок",
        description: "Красная купюра с изображением корабля викингов. Голографическая полоса.",
        images: ["norway_100_2017_1.jpg", "norway_100_2017_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 28,
        country: "Норвегия",
        denomination: "200 крон",
        year: "2017",
        series: "Морская тема",
        size: "140 × 70 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением рыбы (трески). Прозрачное окно в форме волны.",
        images: ["norway_200_2017_1.jpg", "norway_200_2017_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 29,
        country: "Южная Корея",
        denomination: "1000 вон",
        year: "2007",
        series: "Серия с историческими личностями",
        size: "136 × 68 мм",
        material: "Хлопок",
        description: "Синяя купюра с портретом философа Ли Хвана. Водяной знак — цветок.",
        images: ["korea_1000_2007_1.jpg", "korea_1000_2007_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 30,
        country: "Южная Корея",
        denomination: "5000 вон",
        year: "2017",
        series: "Серия с историческими личностями",
        size: "142 × 68 мм",
        material: "Хлопок",
        description: "Красно-оранжевая купюра с портретом писателя Ли И. Голограмма и скрытое изображение.",
        images: ["korea_5000_2017_1.jpg", "korea_5000_2017_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 31,
        country: "Южная Корея",
        denomination: "10000 вон",
        year: "2020",
        series: "Серия с историческими личностями",
        size: "148 × 68 мм",
        material: "Хлопок",
        description: "Зеленая купюра с портретом короля Седжона. Содержит тактильные метки для слабовидящих.",
        images: ["korea_10000_2020_1.jpg", "korea_10000_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 32,
        country: "Бразилия",
        denomination: "10 реалов",
        year: "2016",
        series: "Серия с животными",
        size: "140 × 65 мм",
        material: "Полимер",
        description: "Синяя купюра с изображением ягуара. Прозрачное окно в форме созвездия.",
        images: ["brazil_10_2016_1.jpg", "brazil_10_2016_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 33,
        country: "Бразилия",
        denomination: "50 реалов",
        year: "2019",
        series: "Серия с животными",
        size: "149 × 70 мм",
        material: "Полимер",
        description: "Оранжевая купюра с изображением грифа. Голограмма и УФ-элементы.",
        images: ["brazil_50_2019_1.jpg", "brazil_50_2019_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 34,
        country: "Бразилия",
        denomination: "100 реалов",
        year: "2020",
        series: "Серия с животными",
        size: "156 × 70 мм",
        material: "Полимер",
        description: "Голубая купюра с изображением рыбы. Тактильные метки и прозрачное окно.",
        images: ["brazil_100_2020_1.jpg", "brazil_100_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 35,
        country: "Индия",
        denomination: "50 рупий",
        year: "2017",
        series: "Серия Mahatma Gandhi",
        size: "135 × 66 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением Махатмы Ганди. Содержит скрытое изображение номинала.",
        images: ["india_50_2017_1.jpg", "india_50_2017_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 36,
        country: "Индия",
        denomination: "200 рупий",
        year: "2018",
        series: "Серия Mahatma Gandhi",
        size: "146 × 66 мм",
        material: "Хлопок",
        description: "Оранжево-зеленая купюра с изображением Махатмы Ганди. Голографическая полоса.",
        images: ["india_200_2018_1.jpg", "india_200_2018_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 37,
        country: "Индия",
        denomination: "2000 рупий",
        year: "2016",
        series: "Серия Mahatma Gandhi",
        size: "166 × 66 мм",
        material: "Хлопок",
        description: "Розовая купюра с изображением мангового дерева. Содержит УФ-элементы и микротекст.",
        images: ["india_2000_2016_1.jpg", "india_2000_2016_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 38,
        country: "ЮАР",
        denomination: "50 рандов",
        year: "2018",
        series: "Серия с Big Five",
        size: "140 × 70 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением льва. Водяной знак — портрет Нельсона Манделы.",
        images: ["southafrica_50_2018_1.jpg", "southafrica_50_2018_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 39,
        country: "ЮАР",
        denomination: "100 рандов",
        year: "2019",
        series: "Серия с Big Five",
        size: "146 × 70 мм",
        material: "Хлопок",
        description: "Зеленая купюра с изображением буйвола. Голограмма и тактильные метки.",
        images: ["southafrica_100_2019_1.jpg", "southafrica_100_2019_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 40,
        country: "ЮАР",
        denomination: "200 рандов",
        year: "2020",
        series: "Серия с Big Five",
        size: "152 × 70 мм",
        material: "Хлопок",
        description: "Оранжевая купюра с изображением леопарда. Прозрачное окно в форме карты Африки.",
        images: ["southafrica_200_2020_1.jpg", "southafrica_200_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 41,
        country: "Россия",
        denomination: "100 рублей",
        year: "2022",
        series: "Модификация 2017 года",
        size: "150 × 65 мм",
        material: "Хлопок",
        description: "Сине-зелёная купюра с изображением моста во Владивостоке и амурского тигра. Содержит голограмму и микротекст.",
        images: ["russia_100_2022_1.jpg", "russia_100_2022_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 42,
        country: "Россия",
        denomination: "200 рублей",
        year: "2017",
        series: "Крымская серия",
        size: "150 × 65 мм",
        material: "Хлопок",
        description: "Зелёная купюра с изображением памятника затопленным кораблям в Севастополе. Тактильные метки для слабовидящих.",
        images: ["russia_200_2017_1.jpg", "russia_200_2017_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 43,
        country: "Россия",
        denomination: "2000 рублей",
        year: "2017",
        series: "Дальневосточная серия",
        size: "157 × 69 мм",
        material: "Хлопок",
        description: "Синяя купюра с космодромом Восточный и мостом на остров Русский. УФ-защита и скрытые изображения.",
        images: ["russia_2000_2017_1.jpg", "russia_2000_2017_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 44,
        country: "Китай",
        denomination: "5 юаней",
        year: "2020",
        series: "Пятая серия",
        size: "135 × 63 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с портретом Мао Цзедуна. Водяной знак — цветок лотоса.",
        images: ["china_5_2020_1.jpg", "china_5_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 45,
        country: "Китай",
        denomination: "20 юаней",
        year: "2019",
        series: "Пятая серия",
        size: "145 × 70 мм",
        material: "Хлопок",
        description: "Коричневая купюра с изображением реки Янцзы. Голографическая полоса и УФ-элементы.",
        images: ["china_20_2019_1.jpg", "china_20_2019_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 46,
        country: "Китай",
        denomination: "100 юаней",
        year: "2015",
        series: "Пятая серия",
        size: "155 × 77 мм",
        material: "Хлопок",
        description: "Красная купюра с портретом Мао Цзедуна. Одна из самых защищённых в мире — содержит иридисцентную краску.",
        images: ["china_100_2015_1.jpg", "china_100_2015_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 47,
        country: "ОАЭ",
        denomination: "50 дирхамов",
        year: "2021",
        series: "Полимерная серия",
        size: "147 × 62 мм",
        material: "Полимер",
        description: "Фиолетовая купюра с изображением мечети шейха Зайда. Прозрачное окно в форме сокола.",
        images: ["uae_50_2021_1.jpg", "uae_50_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 48,
        country: "ОАЭ",
        denomination: "100 дирхамов",
        year: "2020",
        series: "Полимерная серия",
        size: "152 × 62 мм",
        material: "Полимер",
        description: "Зелёная купюра с изображением небоскрёба Бурдж Халифа. Содержит 3D-голограмму.",
        images: ["uae_100_2020_1.jpg", "uae_100_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 49,
        country: "ОАЭ",
        denomination: "500 дирхамов",
        year: "2011",
        series: "Классическая серия",
        size: "158 × 62 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением сокола — национального символа ОАЭ. Защитная нить с микротекстом.",
        images: ["uae_500_2011_1.jpg", "uae_500_2011_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 50,
        country: "Турция",
        denomination: "10 лир",
        year: "2022",
        series: "Серия с историческими личностями",
        size: "148 × 72 мм",
        material: "Хлопок",
        description: "Красно-оранжевая купюра с портретом математика Джахира. Тактильные метки и УФ-элементы.",
        images: ["turkey_10_2022_1.jpg", "turkey_10_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 51,
        country: "Турция",
        denomination: "50 лир",
        year: "2021",
        series: "Серия с историческими личностями",
        size: "152 × 72 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с портретом архитектора Синана. Голограмма и скрытое изображение.",
        images: ["turkey_50_2021_1.jpg", "turkey_50_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 52,
        country: "Турция",
        denomination: "200 лир",
        year: "2022",
        series: "Серия с историческими личностями",
        size: "160 × 72 мм",
        material: "Хлопок",
        description: "Голубая купюра с портретом поэта Юнуса Эмре. Содержит прозрачное окно и микротекст.",
        images: ["turkey_200_2022_1.jpg", "turkey_200_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 53,
        country: "Сингапур",
        denomination: "5 долларов",
        year: "2020",
        series: "Полимерная серия",
        size: "133 × 66 мм",
        material: "Полимер",
        description: "Зелёная купюра с изображением первого президента Юсофа бин Ишака. Прозрачное окно в форме орхидеи.",
        images: ["singapore_5_2020_1.jpg", "singapore_5_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 54,
        country: "Сингапур",
        denomination: "50 долларов",
        year: "2017",
        series: "Полимерная серия",
        size: "156 × 74 мм",
        material: "Полимер",
        description: "Синяя купюра с изображением национального цветка — орхидеи Ванда. 3D-голограмма и тактильные метки.",
        images: ["singapore_50_2017_1.jpg", "singapore_50_2017_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 55,
        country: "Сингапур",
        denomination: "1000 долларов",
        year: "2014",
        series: "Классическая серия",
        size: "170 × 83 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением порта Сингапура. Одна из самых крупных по номиналу в мире.",
        images: ["singapore_1000_2014_1.jpg", "singapore_1000_2014_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 56,
        country: "Таиланд",
        denomination: "20 бат",
        year: "2022",
        series: "Серия Рама X",
        size: "138 × 72 мм",
        material: "Полимер",
        description: "Зелёная купюра с портретом короля Махи Вачиралонгкорна. Прозрачное окно с изображением храма.",
        images: ["thailand_20_2022_1.jpg", "thailand_20_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 57,
        country: "Таиланд",
        denomination: "100 бат",
        year: "2015",
        series: "Серия Рама IX",
        size: "150 × 72 мм",
        material: "Хлопок",
        description: "Красная купюра с портретом короля Пхумипона Адульядета. Содержит голограмму и УФ-элементы.",
        images: ["thailand_100_2015_1.jpg", "thailand_100_2015_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 58,
        country: "Таиланд",
        denomination: "1000 бат",
        year: "2018",
        series: "Серия Рама X",
        size: "162 × 72 мм",
        material: "Полимер",
        description: "Серая купюра с изображением королевских регалий. Тактильные метки для слабовидящих.",
        images: ["thailand_1000_2018_1.jpg", "thailand_1000_2018_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 59,
        country: "Египет",
        denomination: "10 фунтов",
        year: "2020",
        series: "Новая серия",
        size: "135 × 70 мм",
        material: "Хлопок",
        description: "Розовая купюра с изображением мечети Аль-Рифаи. Содержит прозрачное окно и микротекст.",
        images: ["egypt_10_2020_1.jpg", "egypt_10_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 60,
        country: "Египет",
        denomination: "50 фунтов",
        year: "2021",
        series: "Новая серия",
        size: "145 × 70 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением храма Хатшепсут. Голографическая полоса и УФ-защита.",
        images: ["egypt_50_2021_1.jpg", "egypt_50_2021_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 61,
        country: "Египет",
        denomination: "200 фунтов",
        year: "2022",
        series: "Новая серия",
        size: "155 × 70 мм",
        material: "Хлопок",
        description: "Оливковая купюра с изображением Каирского университета. Содержит тактильные метки.",
        images: ["egypt_200_2022_1.jpg", "egypt_200_2022_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 62,
        country: "Украина",
        denomination: "100 гривен",
        year: "2019",
        series: "Серия с историческими личностями",
        size: "142 × 75 мм",
        material: "Хлопок",
        description: "Жёлто-синяя купюра с портретом Тараса Шевченко. Содержит голограмму и скрытое изображение.",
        images: ["ukraine_100_2019_1.jpg", "ukraine_100_2019_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 63,
        country: "Украина",
        denomination: "200 гривен",
        year: "2021",
        series: "Серия с историческими личностями",
        size: "148 × 75 мм",
        material: "Хлопок",
        description: "Розовая купюра с портретом Леси Украинки. Прозрачное окно в форме голубя.",
        images: ["ukraine_200_2021_1.jpg", "ukraine_200_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 64,
        country: "Украина",
        denomination: "500 гривен",
        year: "2022",
        series: "Серия с историческими личностями",
        size: "154 × 75 мм",
        material: "Хлопок",
        description: "Синяя купюра с портретом Григория Сковороды. Содержит УФ-элементы и микротекст.",
        images: ["ukraine_500_2022_1.jpg", "ukraine_500_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 65,
        country: "Израиль",
        denomination: "20 шекелей",
        year: "2021",
        series: "Новая серия",
        size: "136 × 71 мм",
        material: "Полимер",
        description: "Красная купюра с портретом поэтессы Рахель. Прозрачное окно в форме граната.",
        images: ["israel_20_2021_1.jpg", "israel_20_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 66,
        country: "Израиль",
        denomination: "50 шекелей",
        year: "2014",
        series: "Новая серия",
        size: "140 × 71 мм",
        material: "Полимер",
        description: "Зелёная купюра с портретом поэта Шауля Черниховского. Содержит голограмму.",
        images: ["israel_50_2014_1.jpg", "israel_50_2014_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 67,
        country: "Израиль",
        denomination: "200 шекелей",
        year: "2015",
        series: "Новая серия",
        size: "150 × 71 мм",
        material: "Полимер",
        description: "Синяя купюра с портретом поэта Натана Альтермана. Тактильные метки для слабовидящих.",
        images: ["israel_200_2015_1.jpg", "israel_200_2015_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 68,
        country: "Южная Африка",
        denomination: "50 рандов",
        year: "2022",
        series: "Серия с Big Five",
        size: "140 × 70 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением носорога. Содержит УФ-элементы и микротекст.",
        images: ["southafrica_50_2022_1.jpg", "southafrica_50_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 69,
        country: "Южная Африка",
        denomination: "100 рандов",
        year: "2018",
        series: "Серия с Big Five",
        size: "146 × 70 мм",
        material: "Хлопок",
        description: "Зелёная купюра с изображением буйвола. Голограмма и прозрачное окно.",
        images: ["southafrica_100_2018_1.jpg", "southafrica_100_2018_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 70,
        country: "Южная Африка",
        denomination: "200 рандов",
        year: "2020",
        series: "Серия с Big Five",
        size: "152 × 70 мм",
        material: "Хлопок",
        description: "Оранжевая купюра с изображением леопарда. Содержит тактильные метки.",
        images: ["southafrica_200_2020_1.jpg", "southafrica_200_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 71,
        country: "Аргентина",
        denomination: "100 песо",
        year: "2018",
        series: "Животные Аргентины",
        size: "155 × 65 мм",
        material: "Полимер",
        description: "Синяя купюра с изображением горбатого кита. Прозрачное окно в форме созвездия Южного Креста.",
        images: ["argentina_100_2018_1.jpg", "argentina_100_2018_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 72,
        country: "Аргентина",
        denomination: "500 песо",
        year: "2021",
        series: "Животные Аргентины",
        size: "160 × 65 мм",
        material: "Полимер",
        description: "Фиолетовая купюра с изображением ягуара. Содержит голограмму и УФ-элементы.",
        images: ["argentina_500_2021_1.jpg", "argentina_500_2021_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 73,
        country: "Чили",
        denomination: "5000 песо",
        year: "2019",
        series: "Исторические личности",
        size: "145 × 70 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с портретом поэтессы Габриэлы Мистраль. Содержит тактильные метки.",
        images: ["chile_5000_2019_1.jpg", "chile_5000_2019_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 74,
        country: "Чили",
        denomination: "10000 песо",
        year: "2020",
        series: "Исторические личности",
        size: "150 × 70 мм",
        material: "Хлопок",
        description: "Красная купюра с портретом президента Артуро Алессандри. Голограмма и микротекст.",
        images: ["chile_10000_2020_1.jpg", "chile_10000_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 75,
        country: "Перу",
        denomination: "50 солей",
        year: "2021",
        series: "Культурное наследие",
        size: "140 × 65 мм",
        material: "Полимер",
        description: "Зеленая купюра с изображением Мачу-Пикчу. Прозрачное окно в форме солнца.",
        images: ["peru_50_2021_1.jpg", "peru_50_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 76,
        country: "Перу",
        denomination: "100 солей",
        year: "2022",
        series: "Культурное наследие",
        size: "145 × 65 мм",
        material: "Полимер",
        description: "Оранжевая купюра с изображением храма Кориканча. Содержит голограмму.",
        images: ["peru_100_2022_1.jpg", "peru_100_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 77,
        country: "Колумбия",
        denomination: "2000 песо",
        year: "2016",
        series: "Биоразнообразие",
        size: "130 × 65 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением андского кондора. Водяной знак - портрет поэта Хорхе Исаакса.",
        images: ["colombia_2000_2016_1.jpg", "colombia_2000_2016_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 78,
        country: "Колумбия",
        denomination: "50000 песо",
        year: "2020",
        series: "Биоразнообразие",
        size: "150 × 70 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением орхидеи - национального цветка Колумбии. Содержит УФ-элементы.",
        images: ["colombia_50000_2020_1.jpg", "colombia_50000_2020_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 79,
        country: "Венесуэла",
        denomination: "50000 боливаров",
        year: "2021",
        series: "Национальные герои",
        size: "156 × 66 мм",
        material: "Хлопок",
        description: "Красная купюра с портретом Симона Боливара. Содержит голографическую полосу.",
        images: ["venezuela_50000_2021_1.jpg", "venezuela_50000_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 80,
        country: "Индонезия",
        denomination: "100000 рупий",
        year: "2022",
        series: "Национальные герои",
        size: "151 × 65 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с портретами первых президентов Сукарно и Хатты. Содержит прозрачное окно.",
        images: ["indonesia_100000_2022_1.jpg", "indonesia_100000_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 81,
        country: "Малайзия",
        denomination: "20 ринггит",
        year: "2021",
        series: "Полимерная серия",
        size: "145 × 69 мм",
        material: "Полимер",
        description: "Оранжевая купюра с изображением морских черепах. Прозрачное окно в форме цветка гибискуса.",
        images: ["malaysia_20_2021_1.jpg", "malaysia_20_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 82,
        country: "Малайзия",
        denomination: "50 ринггит",
        year: "2018",
        series: "Полимерная серия",
        size: "145 × 69 мм",
        material: "Полимер",
        description: "Сине-зеленая купюра с изображением пальмового масла - важного экспортного продукта страны.",
        images: ["malaysia_50_2018_1.jpg", "malaysia_50_2018_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 83,
        country: "Филиппины",
        denomination: "50 песо",
        year: "2020",
        series: "Новая серия",
        size: "140 × 66 мм",
        material: "Хлопок",
        description: "Красная купюра с изображением президента Серхио Осменья. Водяной знак - портрет героя революции.",
        images: ["philippines_50_2020_1.jpg", "philippines_50_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 84,
        country: "Филиппины",
        denomination: "1000 песо",
        year: "2022",
        series: "Новая серия",
        size: "160 × 66 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением трех национальных героев. Содержит голограмму и УФ-элементы.",
        images: ["philippines_1000_2022_1.jpg", "philippines_1000_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 85,
        country: "Вьетнам",
        denomination: "100000 донгов",
        year: "2020",
        series: "Полимерная серия",
        size: "144 × 65 мм",
        material: "Полимер",
        description: "Зеленая купюра с изображением Храма литературы в Ханое. Прозрачное окно с портретом Хо Ши Мина.",
        images: ["vietnam_100000_2020_1.jpg", "vietnam_100000_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 86,
        country: "Вьетнам",
        denomination: "500000 донгов",
        year: "2018",
        series: "Полимерная серия",
        size: "152 × 65 мм",
        material: "Полимер",
        description: "Фиолетовая купюра с изображением родного дома Хо Ши Мина. Содержит голограмму.",
        images: ["vietnam_500000_2018_1.jpg", "vietnam_500000_2018_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 87,
        country: "Новая Зеландия",
        denomination: "20 долларов",
        year: "2021",
        series: "Полимерная серия",
        size: "145 × 70 мм",
        material: "Полимер",
        description: "Зеленая купюра с изображением королевы Елизаветы II и птицы киви. Прозрачное окно в форме папоротника.",
        images: ["newzealand_20_2021_1.jpg", "newzealand_20_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 88,
        country: "Новая Зеландия",
        denomination: "50 долларов",
        year: "2016",
        series: "Полимерная серия",
        size: "150 × 70 мм",
        material: "Полимер",
        description: "Фиолетовая купюра с изображением сэра Апирана Нгаты - маорийского лидера. Содержит УФ-элементы.",
        images: ["newzealand_50_2016_1.jpg", "newzealand_50_2016_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 89,
        country: "Пакистан",
        denomination: "50 рупий",
        year: "2021",
        series: "Новая серия",
        size: "137 × 65 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением мечети Бадшахи в Лахоре. Содержит водяной знак - портрет Мухаммада Али Джинны.",
        images: ["pakistan_50_2021_1.jpg", "pakistan_50_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 90,
        country: "Пакистан",
        denomination: "1000 рупий",
        year: "2022",
        series: "Новая серия",
        size: "155 × 65 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением мавзолея Мухаммада Али Джинны в Карачи. Голограмма и микротекст.",
        images: ["pakistan_1000_2022_1.jpg", "pakistan_1000_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 91,
        country: "Саудовская Аравия",
        denomination: "50 риалов",
        year: "2020",
        series: "Пятая серия",
        size: "150 × 68 мм",
        material: "Хлопок",
        description: "Зеленая купюра с изображением короля Абдель Азиза и мечети Аль-Раджихи. Содержит голограмму.",
        images: ["saudiarabia_50_2020_1.jpg", "saudiarabia_50_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 92,
        country: "Саудовская Аравия",
        denomination: "100 риалов",
        year: "2017",
        series: "Пятая серия",
        size: "156 × 68 мм",
        material: "Хлопок",
        description: "Красная купюра с изображением короля Фейсала и здания Центрального банка. УФ-элементы и микротекст.",
        images: ["saudiarabia_100_2017_1.jpg", "saudiarabia_100_2017_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 93,
        country: "Иран",
        denomination: "100000 риалов",
        year: "2021",
        series: "Исторические памятники",
        size: "155 × 67 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением гробницы поэта Фирдоуси в Тусе. Содержит водяной знак - портрет поэта.",
        images: ["iran_100000_2021_1.jpg", "iran_100000_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 94,
        country: "Иран",
        denomination: "500000 риалов",
        year: "2022",
        series: "Исторические памятники",
        size: "160 × 67 мм",
        material: "Хлопок",
        description: "Оранжевая купюра с изображением Персеполя - древней столицы Персии. Голограмма и УФ-элементы.",
        images: ["iran_500000_2022_1.jpg", "iran_500000_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 95,
        country: "Ирак",
        denomination: "10000 динаров",
        year: "2020",
        series: "Культурное наследие",
        size: "150 × 65 мм",
        material: "Хлопок",
        description: "Фиолетовая купюра с изображением древнего зиккурата в Уре. Содержит водяной знак - портрет поэта Аль-Мутанабби.",
        images: ["iraq_10000_2020_1.jpg", "iraq_10000_2020_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 96,
        country: "Ирак",
        denomination: "25000 динаров",
        year: "2021",
        series: "Культурное наследие",
        size: "155 × 65 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением реки Тигр и моста в Багдаде. Голограмма и микротекст.",
        images: ["iraq_25000_2021_1.jpg", "iraq_25000_2021_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 97,
        country: "Казахстан",
        denomination: "5000 тенге",
        year: "2021",
        series: "Современная серия",
        size: "149 × 74 мм",
        material: "Полимер",
        description: "Оранжевая купюра с изображением монумента Астана-Байтерек и картой Казахстана. Прозрачное окно с голограммой.",
        images: ["kazakhstan_5000_2021_1.jpg", "kazakhstan_5000_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 98,
        country: "Казахстан",
        denomination: "20000 тенге",
        year: "2022",
        series: "Современная серия",
        size: "155 × 74 мм",
        material: "Полимер",
        description: "Фиолетовая купюра с изображением здания оперного театра в Астане и нотной грамотой. Содержит УФ-элементы.",
        images: ["kazakhstan_20000_2022_1.jpg", "kazakhstan_20000_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    },
    {
        id: 99,
        country: "Узбекистан",
        denomination: "50000 сум",
        year: "2021",
        series: "Новая серия",
        size: "144 × 69 мм",
        material: "Хлопок",
        description: "Синяя купюра с изображением медресе Шердор в Самарканде. Содержит водяной знак - герб Узбекистана.",
        images: ["uzbekistan_50000_2021_1.jpg", "uzbekistan_50000_2021_2.jpg"],
        isFavorite: false,
        inWishlist: true,
        isPurchased: false
    },
    {
        id: 100,
        country: "Узбекистан",
        denomination: "100000 сум",
        year: "2022",
        series: "Новая серия",
        size: "150 × 69 мм",
        material: "Хлопок",
        description: "Зеленая купюра с изображением мавзолея Амира Тимура в Самарканде. Голограмма и микротекст.",
        images: ["uzbekistan_100000_2022_1.jpg", "uzbekistan_100000_2022_2.jpg"],
        isFavorite: true,
        inWishlist: false,
        isPurchased: true
    }

]
    // Добавьте больше купюр по аналогии
    

    // Элементы DOM
    const banknotesContainer = document.getElementById('banknotes-container');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const countryFilter = document.getElementById('country-filter');
    const denominationFilter = document.getElementById('denomination-filter');
    const yearFilter = document.getElementById('year-filter');
    const favoritesLink = document.getElementById('favorites-link');
    const wishlistLink = document.getElementById('wishlist-link');
    const purchasedLink = document.getElementById('purchased-link');
    const modal = document.getElementById('banknote-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalCountry = document.getElementById('modal-country');
    const modalDenomination = document.getElementById('modal-denomination');
    const modalYear = document.getElementById('modal-year');
    const modalSeries = document.getElementById('modal-series');
    const modalSize = document.getElementById('modal-size');
    const modalMaterial = document.getElementById('modal-material');
    const modalDescription = document.getElementById('modal-description');
    const modalMainImage = document.getElementById('modal-main-image');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    const addToFavoritesBtn = document.getElementById('add-to-favorites');
    const addToWishlistBtn = document.getElementById('add-to-wishlist');
    const markAsPurchasedBtn = document.getElementById('mark-as-purchased');

    let currentBanknoteId = null;
    let currentFilter = 'all'; // 'all', 'favorites', 'wishlist', 'purchased'
    let currentSearchQuery = '';

    // Инициализация приложения
    function init() {
        renderBanknotes(banknotesData);
        setupFilters();
        setupEventListeners();
    }

    // Рендер купюр
    function renderBanknotes(banknotes) {
        banknotesContainer.innerHTML = '';

        const filteredBanknotes = banknotes.filter(banknote => {
            // Применяем текущий фильтр
            if (currentFilter === 'favorites' && !banknote.isFavorite) return false;
            if (currentFilter === 'wishlist' && !banknote.inWishlist) return false;
            if (currentFilter === 'purchased' && !banknote.isPurchased) return false;

            // Применяем поисковый запрос
            if (currentSearchQuery) {
                const searchStr = `${banknote.country} ${banknote.denomination} ${banknote.year} ${banknote.series}`.toLowerCase();
                if (!searchStr.includes(currentSearchQuery.toLowerCase())) return false;
            }

            // Применяем фильтры
            if (countryFilter.value && banknote.country !== countryFilter.value) return false;
            if (denominationFilter.value && banknote.denomination !== denominationFilter.value) return false;
            if (yearFilter.value && banknote.year !== yearFilter.value) return false;

            return true;
        });

        if (filteredBanknotes.length === 0) {
            banknotesContainer.innerHTML = '<p class="no-results">Купюры не найдены. Попробуйте изменить параметры поиска.</p>';
            return;
        }

        filteredBanknotes.forEach(banknote => {
            const banknoteCard = document.createElement('div');
            banknoteCard.className = 'banknote-card';
            banknoteCard.innerHTML = `
                <img src="images/${banknote.images[0]}" alt="${banknote.country} ${banknote.denomination}" class="banknote-image">
                <div class="banknote-info">
                    <h3>${banknote.country} ${banknote.denomination}</h3>
                    <p>${banknote.year}, ${banknote.series}</p>
                    <div class="banknote-actions">
                        <button class="btn-favorite" data-id="${banknote.id}">
                            <i class="${banknote.isFavorite ? 'fas' : 'far'} fa-star"></i>
                        </button>
                        <button class="btn-wishlist" data-id="${banknote.id}">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                        <button class="btn-purchased" data-id="${banknote.id}">
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </div>
                <div class="banknote-badges">
                    ${banknote.isFavorite ? '<span class="badge badge-favorite">Избранное</span>' : ''}
                    ${banknote.inWishlist ? '<span class="badge badge-wishlist">Хочу купить</span>' : ''}
                    ${banknote.isPurchased ? '<span class="badge badge-purchased">Куплено</span>' : ''}
                </div>
            `;
            banknotesContainer.appendChild(banknoteCard);

            // Добавляем обработчик клика на карточку
            banknoteCard.addEventListener('click', (e) => {
                if (!e.target.closest('.banknote-actions')) {
                    openBanknoteModal(banknote.id);
                }
            });
        });

        // Добавляем обработчики для кнопок действий
        document.querySelectorAll('.btn-favorite').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(parseInt(btn.dataset.id));
            });
        });

        document.querySelectorAll('.btn-wishlist').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleWishlist(parseInt(btn.dataset.id));
            });
        });

        document.querySelectorAll('.btn-purchased').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePurchased(parseInt(btn.dataset.id));
            });
        });
    }

    // Настройка фильтров
    function setupFilters() {
        // Получаем уникальные значения для фильтров
        const countries = [...new Set(banknotesData.map(b => b.country))];
        const denominations = [...new Set(banknotesData.map(b => b.denomination))];
        const years = [...new Set(banknotesData.map(b => b.year))];

        // Заполняем фильтр стран
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countryFilter.appendChild(option);
        });

        // Заполняем фильтр номиналов
        denominations.forEach(denomination => {
            const option = document.createElement('option');
            option.value = denomination;
            option.textContent = denomination;
            denominationFilter.appendChild(option);
        });

        // Заполняем фильтр годов
        years.forEach(year => {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });

        // Обработчики изменения фильтров
        countryFilter.addEventListener('change', () => renderBanknotes(banknotesData));
        denominationFilter.addEventListener('change', () => renderBanknotes(banknotesData));
        yearFilter.addEventListener('change', () => renderBanknotes(banknotesData));
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
        // Поиск
        searchBtn.addEventListener('click', () => {
            currentSearchQuery = searchInput.value;
            renderBanknotes(banknotesData);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                currentSearchQuery = searchInput.value;
                renderBanknotes(banknotesData);
            }
        });

        // Фильтры
        document.querySelector('nav ul li a').addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = 'all';
            updateActiveNavLink();
            renderBanknotes(banknotesData);
        });

        favoritesLink.addEventListener('click', (e) => {
           e.preventDefault();
            currentFilter = 'favorites';
            updateActiveNavLink();
            renderBanknotes(banknotesData);
        });

        wishlistLink.addEventListener('click', (e) => {
           e.preventDefault();
            currentFilter = 'wishlist';
            updateActiveNavLink();
            renderBanknotes(banknotesData);
        });

        purchasedLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentFilter = 'purchased';
           updateActiveNavLink();
           renderBanknotes(banknotesData);
        });

        // Модальное окно
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Кнопки в модальном окне
        addToFavoritesBtn.addEventListener('click', () => {
            if (currentBanknoteId) {
                toggleFavorite(currentBanknoteId);
                updateModalButtons(currentBanknoteId);
            }
        });

        addToWishlistBtn.addEventListener('click', () => {
            if (currentBanknoteId) {
                toggleWishlist(currentBanknoteId);
                updateModalButtons(currentBanknoteId);
            }
        });

        markAsPurchasedBtn.addEventListener('click', () => {
            if (currentBanknoteId) {
                togglePurchased(currentBanknoteId);
                updateModalButtons(currentBanknoteId);
            }
        });
    }

    // Обновление активной ссылки в навигации
    function updateActiveNavLink() {
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.classList.remove('active');
        });

        if (currentFilter === 'favorites') {
            favoritesLink.classList.add('active');
        } else if (currentFilter === 'wishlist') {
            wishlistLink.classList.add('active');
        } else if (currentFilter === 'purchased') {
            purchasedLink.classList.add('active');
        } else {
            document.querySelector('nav ul li a').classList.add('active');
        }
    }

    // Открытие модального окна с информацией о купюре
    function openBanknoteModal(id) {
        const banknote = banknotesData.find(b => b.id === id);
        if (!banknote) return;

        currentBanknoteId = id;

        modalTitle.textContent = `${banknote.country} ${banknote.denomination}`;
        modalCountry.textContent = banknote.country;
        modalDenomination.textContent = banknote.denomination;
        modalYear.textContent = banknote.year;
        modalSeries.textContent = banknote.series;
        modalSize.textContent = banknote.size;
        modalMaterial.textContent = banknote.material;
        modalDescription.textContent = banknote.description;

        // Основное изображение
        modalMainImage.src = `images/${banknote.images[0]}`;
        modalMainImage.alt = `${banknote.country} ${banknote.denomination}`;

        // Миниатюры
        thumbnailContainer.innerHTML = '';
        banknote.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = `images/${image}`;
            thumbnail.alt = `${banknote.country} ${banknote.denomination} - фото ${index + 1}`;
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.addEventListener('click', () => {
                modalMainImage.src = `images/${image}`;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            thumbnailContainer.appendChild(thumbnail);
        });

        // Обновляем кнопки
        updateModalButtons(id);

        modal.style.display = 'block';
    }

    // Обновление состояния кнопок в модальном окне
    function updateModalButtons(id) {
        const banknote = banknotesData.find(b => b.id === id);
        if (!banknote) return;

        const favoriteIcon = addToFavoritesBtn.querySelector('i');
        favoriteIcon.className = banknote.isFavorite ? 'fas fa-star' : 'far fa-star';

        const wishlistIcon = addToWishlistBtn.querySelector('i');
        addToWishlistBtn.style.backgroundColor = banknote.inWishlist ? '#2980b9' : '#3498db';

        const purchasedIcon = markAsPurchasedBtn.querySelector('i');
        markAsPurchasedBtn.style.backgroundColor = banknote.isPurchased ? '#27ae60' : '#2ecc71';
    }

    // Переключение избранного
    function toggleFavorite(id) {
        const banknote = banknotesData.find(b => b.id === id);
        if (banknote) {
            banknote.isFavorite = !banknote.isFavorite;
            renderBanknotes(banknotesData);
            
            // В реальном приложении здесь бы сохраняли изменения на сервере
            // saveBanknoteState(banknote);
        }
    }

    // Переключение "Хочу купить"
    function toggleWishlist(id) {
        const banknote = banknotesData.find(b => b.id === id);
        if (banknote) {
            banknote.inWishlist = !banknote.inWishlist;
            renderBanknotes(banknotesData);
            
            // В реальном приложении здесь бы сохраняли изменения на сервере
            // saveBanknoteState(banknote);
        }
    }

    // Переключение "Куплено"
    function togglePurchased(id) {
        const banknote = banknotesData.find(b => b.id === id);
        if (banknote) {
            banknote.isPurchased = !banknote.isPurchased;
            renderBanknotes(banknotesData);
            
            // В реальном приложении здесь бы сохраняли изменения на сервере
            // saveBanknoteState(banknote);
        }
    }

    // Запуск приложения
    init();
});
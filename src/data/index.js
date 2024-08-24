const cities = [
    {
        id:1 ,
        city:"Andijon" ,
        regions:[
            "Andijon",
            "Asaka",
            "Baliqchi",
            "Bo'z",
            "Buloqboshi",
            "Izboskan",
            "Jalaquduq",
            "Qo'rg'ontepa",
            "Marhamat",
            "Oltinko'l",
            "Paxtaobod",
            "Shahrixon",
            "Ulug'nor",
            "Xo'jaobod",
            "Xonobod"
        ]
    }  ,
    {
        id:2 ,
        city:"Buxoro" ,
        regions:[
            "Buxoro",
            "G'ijduvon",
            "Jondor",
            "Kogon",
            "Olot",
            "Peshku",
            "Qorako'l",
            "Qorovulbozor",
            "Romitan",
            "Shofirkon",
            "Vobkent"
        ]
    }  ,
    {
        id:3 ,
        city:"Fargona" ,
        regions:[
            "Bag'dod",
            "Beshariq",
            "Buvayda",
            "Dang'ara",
            "Farg'ona",
            "Furqat",
            "Oltiariq",
            "Quva",
            "Qo'qon",
            "Qo'shtepa",
            "Rishton",
            "So'x",
            "Toshloq",
            "Uchko'prik",
            "O'zbekiston",
            "Yozyovon"
        ]
    }  ,
    {
        id:4 ,
        city:"Namangan" ,
        regions:[
            "Chortoq",
            "Chust",
            "Kosonsoy",
            "Mingbuloq",
            "Namangan",
            "Norin",
            "Pop",
            "To'raqo'rg'on",
            "Uchqo'rg'on",
            "Uychi",
            "Yangiqo'rg'on"
        ]
    }  ,
    {
        id:5 ,
        city:"Jizzax" ,
        regions:[
            "Arnasoy",
            "Baxmal",
            "Do'stlik",
            "Forish",
            "G'allaorol",
            "Sharof Rashidov",
            "Mirzacho'l",
            "Paxtakor",
            "Yangiobod",
            "Zafarobod",
            "Zarbdor"

        ]
    }  ,
    {
        id:6 ,
        city:"Samarqand" ,
        regions:[
            "Bulung'ur",
            "Ishtixon",
            "Jomboy",
            "Kattaqo'rg'on",
            "Narpay",
            "Nurobod",
            "Oqdaryo",
            "Paxtachi",
            "Pastdarg'om",
            "Payariq",
            "Qo'shrabot",
            "Samarqand",
            "Toyloq",
            "Urgut"
        ]
    }  ,
    {
        id:7 ,
        city:"Siradaryo" ,
        regions:[
            "Akalin",
            "Boyovut",
            "Guliston",
            "Mirzaobod",
            "Oqoltin",
            "Sardoba",
            "Sayxunobod",
            "Sirdaryo",
            "Xovos",
            "Yangiyer",
            "Shirin"
        ]
    }  ,
    {
        id:8 ,
        city:"Surxondaryo" ,
        regions:[
            "Angor",
            "Boysun",
            "Denov",
            "Jarqo'rg'on",
            "Muzrabot",
            "Oltinsoy",
            "Qiziriq",
            "Qumqo'rg'on",
            "Sariosiyo",
            "Sherobod",
            "Sho'rchi",
            "Termiz",
            "Uzun"
        ]
    }  ,
    {
        id:9 ,
        city:"Qashqadaryo" ,
        regions:[
            "Chiroqchi",
            "Dehqonobod",
            "G'uzor",
            "Kasbi",
            "Kitob",
            "Koson",
            "Mirishkor",
            "Muborak",
            "Nishon",
            "Qamashi",
            "Qarshi",
            "Shahrisabz",
            "Yakkabog'"
        ]
    }  ,
    {
        id:10 ,
        city:"Toshkent" ,
        regions:[
            "Mirzo Ulug’bek",
            "Chilonzor"  ,
            "Sirg’ali",
            "Yakkasaroy",
            "Mirobod"  ,
            "Uchtepa",
            "Shayxontoxur",
            "Yunusobod"  ,
            "Bektemir",
        ]
    }  ,
    {
        id:11 ,
        city:"Qoraqolpagiston" ,
        regions:[
            "Amudaryo",
            "Beruniy",
            "Chimboy",
            "Ellikqal'a",
            "Kegeyli",
            "Mo'ynoq",
            "Nukus",
            "Qanliko'l",
            "Qo'ng'irot",
            "Qorao'zak",
            "Shumanay",
            "Taxtako'pir",
            "To'rtko'l",
            "Xo'jayli"
        ]
    }  ,
    {
        id:12 ,
        city:"Xorazm" ,
        regions:[
            "Bog'ot",
            "Gurlan",
            "Xiva",
            "Hazorasp",
            "Shovot",
            "Urganch",
            "Yangiariq",
            "Yangibozor",
            "Qo'shko'pir"
        ]
    }  ,
];

const categories = [
    {
         p:"Все" ,
         num:"1678" ,
         title:"мероприятии" ,
         img:"/right-double.svg"
    } ,
    {
        p:"Интеллектуальные шоу" ,
        num:"46" ,
        title:"Все они ждут вас"
    }  ,
    {
        p:"Мастер класс" ,
        num:"78" ,
        title:"По всей напрвалении"
    }   ,
    {
        p:"Тренинги" ,
        num:"78" ,
        title:"тренинги для вас"
    }
]

const trainerCard = [
    {
        id:"1",
        title:"Персонализация маркетинга: как создать персонализированные кампании, которые конвертируют"
    } ,
    {
        id:"2",
        title: "Эффективные стратегии цифрового маркетинга для стартапов"
    } ,
    {
        id:"3",
        title: "Создание и продвижение контент-стратегии: от идеи до реализации"
    } ,
    {
        id:"4",
        title:"Маркетинг в социальных сетях: тенденции и лучшие практики"
    }
]

const articles = [
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
    {
        date:"26 Июня 2024",
        title:"Путеводитель по Саморазвитию: Как Стать Лучшей Версией Себя" ,
        subtitle:"читать далее",
    },
]

export {cities , categories , trainerCard , articles}
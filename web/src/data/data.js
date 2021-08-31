//Бумага - можно
import { ReactComponent as SketchbookIcon } from "../img/icons/paper/sketchbook.svg";
import { ReactComponent as BookIcon } from "../img/icons/paper/book.svg";
import { ReactComponent as MagazineIcon } from "../img/icons/paper/magazine.svg";
import { ReactComponent as OfficepaperIcon } from "../img/icons/paper/officepaper.svg";
import { ReactComponent as NotebookIcon } from "../img/icons/paper/notebook.svg";
import { ReactComponent as CardboardIcon } from "../img/icons/paper/box.svg";
import { ReactComponent as NewspaperIcon } from "../img/icons/paper/file.svg";
//Бумага - нельзя
import { ReactComponent as ReceiptIcon } from "../img/icons/paper/receipt.svg";
import { ReactComponent as PhotopaperIcon } from "../img/icons/paper/photopaper.svg";
import { ReactComponent as DirtypaperIcon } from "../img/icons/paper/dirtypaper.svg";
import { ReactComponent as LaminirIcon } from "../img/icons/paper/laminir-pl.svg";
import { ReactComponent as NapkinsIcon } from "../img/icons/paper/napkins.svg";
import { ReactComponent as PaintingtubeIcon } from "../img/icons/paper/paintingtube.svg";
import { ReactComponent as WallpaperIcon } from "../img/icons/paper/wallpaper.svg";
import { ReactComponent as PergamentIcon } from "../img/icons/paper/pergament.svg";

//Пластик
import { ReactComponent as Plastic1Icon } from "../img/icons/plastic/recycle1.svg";
import { ReactComponent as Plastic2Icon } from "../img/icons/plastic/recycle2.svg";
import { ReactComponent as Plastic3Icon } from "../img/icons/plastic/recycle3.svg";
import { ReactComponent as Plastic4Icon } from "../img/icons/plastic/recycle4.svg";
import { ReactComponent as Plastic5Icon } from "../img/icons/plastic/recycle5.svg";
import { ReactComponent as Plastic6Icon } from "../img/icons/plastic/recycle6.svg";
import { ReactComponent as Plastic7Icon } from "../img/icons/plastic/recycle7.svg";

//Стекло
import { ReactComponent as AutoglassIcon } from "../img/icons/glass/autoglass.svg";
import { ReactComponent as CosmeticsIcon } from "../img/icons/glass/cosmetics.svg";
import { ReactComponent as GlassboyIcon } from "../img/icons/glass/glassboy.svg";
import { ReactComponent as LampIcon } from "../img/icons/glass/lamp.svg"; //Ламопчки
import { ReactComponent as MirrorIcon } from "../img/icons/glass/mirror.svg";
import { ReactComponent as OpticalIcon } from "../img/icons/glass/optical.svg";
import { ReactComponent as PancoverIcon } from "../img/icons/glass/pancover.svg";
import { ReactComponent as PlatesIcon } from "../img/icons/glass/plates.svg";
import { ReactComponent as TaraIcon } from "../img/icons/glass/tara.svg";
import { ReactComponent as VintageIcon } from "../img/icons/glass/vintage.svg";
import { ReactComponent as WindowIcon } from "../img/icons/glass/window.svg";

//Металл
import { ReactComponent as AlumIcon } from "../img/icons/metall/alum.svg";
import { ReactComponent as CapIcon } from "../img/icons/metall/cap.svg";
import { ReactComponent as ConservIcon } from "../img/icons/metall/conserv.svg";
import { ReactComponent as FireIcon } from "../img/icons/metall/Fire.svg"; //Опасные отходы
import { ReactComponent as FoilIcon } from "../img/icons/metall/Foil.svg";
import { ReactComponent as FryingpanIcon } from "../img/icons/metall/Fryingpan.svg";
import { ReactComponent as GascylinderIcon } from "../img/icons/metall/Gascylinder.svg";
import { ReactComponent as SprayIcon } from "../img/icons/metall/Spray.svg"; //Опасные отходы
//import { ReactComponent as TakeawayIcon } from '../img/icons/metall/Takeaway.svg';
import { ReactComponent as TubeIcon } from "../img/icons/metall/Tube.svg";

//Опасные отходы
import { ReactComponent as CableIcon } from "../img/icons/dangerous/Cable.svg";
import { ReactComponent as CartridgeIcon } from "../img/icons/dangerous/Cartridge.svg";
import { ReactComponent as LighterIcon } from "../img/icons/dangerous/Lighter.svg";
import { ReactComponent as MedicineIcon } from "../img/icons/dangerous/Medicine.svg";
import { ReactComponent as TermometerIcon } from "../img/icons/dangerous/Termometer.svg";
import { ReactComponent as TireIcon } from "../img/icons/dangerous/Tire.svg";

//Батарейки
import { ReactComponent as TabletIcon } from "../img/icons/batteries/Tablet.svg";
import { ReactComponent as FingerIcon } from "../img/icons/batteries/Finger.svg";
import { ReactComponent as AccumulatorIcon } from "../img/icons/batteries/Accumulator.svg";

//Одежда
import { ReactComponent as SweaterIcon } from "../img/icons/clothes/Sweater.svg";
import { ReactComponent as BadsweaterIcon } from "../img/icons/clothes/Badsweater.svg";
import { ReactComponent as TightsIcon } from "../img/icons/clothes/Tights.svg";
import { ReactComponent as UnderwearIcon } from "../img/icons/clothes/Underwear.svg";

//Лампочки
import { ReactComponent as LedIcon } from "../img/icons/lamps/Led.svg";
import { ReactComponent as LuminIcon } from "../img/icons/lamps/Lumin.svg"; //Иконка с Study
import { ReactComponent as GalogIcon } from "../img/icons/lamps/Galog.svg";

//Тетрапак
import { ReactComponent as TetrapakIcon } from "../img/icons/tetrapak.svg"; //Иконка с Study
//Иконки фракций
import { ReactComponent as PaperIcon } from "../img/icons/paper.svg";
import { ReactComponent as GlassIcon } from "../img/icons/glass.svg";
import { ReactComponent as MetalIcon } from "../img/icons/metal.svg";
import { ReactComponent as BatteryIcon } from "../img/icons/battery.svg";
import { ReactComponent as ClothesIcon } from "../img/icons/clothes.svg";
import { ReactComponent as DangerousIcon } from "../img/icons/dangerous.svg";
import { ReactComponent as PlasticIcon } from "../img/icons/plastic.svg";

import React from "react";
const data = [
  {
    id: "paper",
    name: "Макулатура",
    icon: <PaperIcon fill="#63b9ba" />,
    bgcolor: "rgba(99,185,186,.12)",
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Журналы",
            icon: <MagazineIcon />,
          },
          {
            name: "Газеты",
            icon: <NewspaperIcon />,
          },
          {
            name: "Книги",
            icon: <BookIcon />,
          },
          {
            name: "Тетради",
            icon: <NotebookIcon />,
          },
          {
            name: "Офисная бумага",
            icon: <OfficepaperIcon />,
          },
          {
            name: "Картон, коробки",
            icon: <CardboardIcon />,
          },
          {
            name: "Рисунки красками",
            icon: <SketchbookIcon />,
          },
        ],
      },
      {
        title: "Что нельзя сдавать",
        type: "scroll",
        content: [
          {
            name: "Обои",
            icon: <WallpaperIcon />,
          },
          {
            name: "Бумага с ламинацией",
            icon: <LaminirIcon />,
          },
          {
            name: "Грязная макулатура",
            icon: <DirtypaperIcon />,
          },
          {
            name: "Пергамент, бумага для выпечки",
            icon: <PergamentIcon />,
          },
          {
            name: "Фотобумага",
            icon: <PhotopaperIcon />,
          },
          {
            name: "Рисунки масляными красками",
            icon: <PaintingtubeIcon />,
          },
          {
            name: "Бумажные полотенца, салфетки",
            icon: <NapkinsIcon />,
          },
          {
            name: "Чеки",
            icon: <ReceiptIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Сортировка макулатуры по видам",
            description:
              "Например, тетради можно складывать в одну стопку, офисную бумагу и черновики - в другую, а газеты - в третью. Это упростит процесс сдачи, сортировки и переработки.",
          },
          {
            name: "Макулатура сухая",
            description: "",
          },
          {
            name: "Проверка на отсутствие скрепок, скобок, пружин",
            description: "",
          },
          {
            name: "На макулатуре отсутствует ламинация",
            description: "",
          },
          {
            name: "Нет пластиковых элементов",
            description: "К ним относятся пленки, файлы",
          },
          {
            name: "Макулатура перевязна и сплющена",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: "glass",
    name: "Стекло",
    bgcolor: "rgba(75,179,75,.12)",
    icon: <GlassIcon fill="#4bb34b" />,
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Стеклотара",
            icon: <TaraIcon />,
          },
          {
            name: "Флаконы из-под косметики",
            icon: <CosmeticsIcon />,
          },
          {
            name: "Стеклобой (принимается не везде)",
            icon: <GlassboyIcon />,
          },
          {
            name: "Листовое (оконное) стекло",
            icon: <WindowIcon />,
          },
        ],
      },
      {
        title: "Что нельзя сдавать",
        type: "scroll",
        content: [
          {
            name: "Керамическая и стеклянная посуда",
            icon: <PlatesIcon />,
          },
          {
            name: "Крышки от сковородок, кастрюль",
            icon: <PancoverIcon />,
          },
          {
            name: "Очки, линзы",
            icon: <OpticalIcon />,
          },
          {
            name: "Автомобильное стекло",
            icon: <AutoglassIcon />,
          },
          {
            name: "Лампочки",
            icon: <LampIcon />,
          },
          {
            name: "Хрусталь",
            icon: <VintageIcon />,
          },
          {
            name: "Зеркала",
            icon: <MirrorIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "На стеклотаре не должно быть бумажных и термоусадочных этикеток, крышек и пробок",
            description: "",
          },
          {
            name: "Стеклотара чистая и сухая",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: "metal",
    name: "Металл",
    bgcolor: "rgba(251,72,132,.12)",
    icon: <MetalIcon fill="#fb4884" />,
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Консервные банки",
            icon: <ConservIcon />,
          },
          {
            name: "Алюминиевые банки из-под напитков",
            icon: <AlumIcon />,
          },
          {
            name: "Крышки из-под стеклянных банок",
            icon: <CapIcon />,
          },
          {
            name: "Предметы с пластиковыми вставками",
            icon: <FryingpanIcon />,
          },
        ],
      },
      {
        title: "Что нельзя сдавать",
        type: "scroll",
        content: [
          {
            name: "Аэрозольные баллончики",
            icon: <SprayIcon />,
          },
          {
            name: "Газовые баллоны",
            icon: <GascylinderIcon />,
          },
          {
            name: "Огнетушители",
            icon: <FireIcon />,
          },
          {
            name: "Фольга",
            icon: <FoilIcon />,
          },
          {
            name: "Тюбики",
            icon: <TubeIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Нет этикеток",
            description: "",
          },
          {
            name: "Металл чистый и сухой",
            description: "",
          },
          {
            name: "По возможности сжат и скомкан",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: "plastics",
    name: "Пластик",
    icon: <PlasticIcon fill="#ffa000" />,
    bgcolor: "rgba(255,160,0,.12)",
    sections: [
      {
        title: "Что можно сдавать",
        type: "list",
        content: [
          {
            icon: <Plastic1Icon></Plastic1Icon>,
            name: "1 — PET(E) или ПЭТ (полиэтилентерефталат)",
            description:
              "Бутылки из под воды, газировок, масла, одноразовая упаковка для продуктов и некоторые виды косметики, баночки из-под шампуней. \n Нельзя использовать повторно! При повторном использовании, особенно под горячие напитки, могут выделиться токсины.",
          },
          {
            icon: <Plastic2Icon />,
            name: "2 — PEHD (HDPE) или ПНД (полиэтилен низкого давления)",
            description:
              "Канистры, крышки для бутылок, флаконы из-под косметики и бытовой химии, тонкие фасовочные пакеты и пакеты-«майки». \n Сам по себе не токсичен, но если нагреть, то выделится токсичный формальдегид.",
          },
          {
            icon: <Plastic4Icon />,
            name: "4 — PELD (LDPE) или ПВД (полиэтилен высокого давления)",
            description:
              "Не шуршащие пластиковые пакеты, воздушно-пузырчатая и пищевая пленка. \n Относительно безопасен, но токсичен при нагревании.",
          },
          {
            icon: <Plastic5Icon />,
            name: "5 — PP и ПП (полипропилен)",
            description:
              "Крышки для бутылок, контейнеры для линз, ведра, стаканчики для йогурта, шуршащая пластиковая упаковка, одноразовая упаковка, пакеты для круп, макарон, печенья. \n Безопасен для здоровья: можно хранить пищу и несильно нагревать.",
          },
          {
            icon: <Plastic6Icon />,
            name: "6 — PS или ПС (полистирол)",
            description:
              "Вспененный полистирол: пенопласт, контейнеры для яиц, подложки под мясо, курицу. \n Обычный полистирол: стаканчики для йогурта, сметаны, упаковки под компакт-диски, одноразовая посуда. \n Токсичны оба вида полистирола.",
          },
        ],
      },

      {
        title: "Что нельзя сдавать",
        type: "list",
        content: [
          {
            icon: <Plastic3Icon />,
            name: "3 — PVC или ПВХ (поливинилхлорид)",
            description:
              "Упаковки тортов, кондитерских изделий, творога, оконные рамы, упаковки из-под таблеток, флаконы и упаковки из-под косметики, игрушки, шторки для душа, коврики для йоги, термоусадочная упаковка. \n Является токсичным! При нагревании может выделить хлор.",
          },
          {
            icon: <Plastic7Icon />,
            name: "7 — O(ther) или ДРУГОЕ (pet/ldpe, с/ldpe, c/pp)",
            description:
              "Упаковки для сыра, кофе, творога, корма для животных, пластиковая многоразовая посуда. \n Так как этот вид — это смесь пластиков, то может быть токсичным, а может и не быть. Лучше избегать.",
          },
        ],
      },

      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Необходимо снять с изделия все бумажные и термоусадочные этикетки, крышки",
            description:
              "Можно не снимать пластиковую приклеенную этикетку — ее делают из того же материала, что и бутылку",
          },
          {
            name: "Пластик должен быть чистый и сухой",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: "tetrapak",
    icon: <TetrapakIcon fill="#4cd964" />,
    name: "Тетрапак",
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Коробки из-под сока, молока, кефира",
            icon: <TetrapakIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Необходимо отогнуть все уголки на упаковке",
            description:
              "Если это пакет, то необходимо надрезать его верхнюю часть, чтобы можно было ополоснуть",
          },
          {
            name: "Коробка или пакет должны быть чистые и сухие",
            description: "",
          },
          {
            name: "По возможности можно сплюснуть коробку и сложить пакет",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: "dangerous",
    name: "Опасные отходы",
    icon: <DangerousIcon fill="#a35f5f" />,
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Ртутные лампы, градусники",
            icon: <TermometerIcon />,
          },
          {
            name: "Электрохлам, провода",
            icon: <CableIcon />,
          },
          {
            name: "Лекарства",
            icon: <MedicineIcon />,
          },
          {
            name: "Аэрозольные баллончики",
            icon: <SprayIcon />,
          },
          {
            name: "Шины",
            icon: <TireIcon />,
          },
          {
            name: "Картриджи",
            icon: <CartridgeIcon />,
          },
          {
            name: "Зажигалки",
            icon: <LighterIcon />,
          },
          {
            name: "Огнетушители",
            icon: <FireIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Необходимо разделить опасные отходы по видам",
            description: "",
          },
        ],
      },
    ],
  },
  {
    id: "battery",
    name: "Батарейки",
    icon: <BatteryIcon fill="#ab9871" />,
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Пальчиковые батарейки",
            icon: <FingerIcon />,
          },
          {
            name: "Батарейки таблетки",
            icon: <TabletIcon />,
          },
          {
            name: "Aккумуляторы",
            icon: <AccumulatorIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Проверка на отсутствие повреждений",
            description: "",
          },
          {
            name: "Использовать отдельный контейнер для батареек",
            description: "",
          },
          {
            name: "Найти и сдать в специальный пункт приема",
            description: "",
          },
        ],
      },
    ],
  },
  // {
  //   id: "newbie",
  //   name: "Советы для начинающих",
  //   sections: [
  //     {
  //       title: "Первые шаги",
  //       type: "checklist",
  //       content: [
  //         {
  //           name: "Начните с малого",
  //           description:
  //             "Ходите в магазин с холщовой сумкой, собирайте крышечки или макулатуру. Помните, что даже самое маленькое действие лучше всякого бездействия. Если покажется, что ваши достижения незначительны, то напоминайте себе, что когда-то вы не делали даже этого.",
  //         },
  //         {
  //           name: "Работайте над собой постепенно",
  //           description:
  //             "Не нужно сразу отказываться от продуктов в неперерабатываемой упаковке или перестать ездить на личном автомобиле. Соотносите экологичный образ жизни и свой уровень возможностей. ",
  //         },
  //         {
  //           name: "Здоровье важнее",
  //           description:
  //             "Если ваш стоматолог говорит, что чистить зубы пищевой содой — это вредно и точно не для вас, то послушайте его. Не стоит рисковать там, где это может плохо на вас сказаться. ",
  //         },
  //         {
  //           name: "Выходите из зоны комфорта медленно, но верно",
  //           description:
  //             'Мы понимаем, что трудно начать вести другой образ жизни по щелчку пальцев. Однако нет ничего невозможного! Старайтесь каждую неделю устраивать себе новый "эко-челлендж", в рамках которого будете вводить новые привычки. Вы удивитесь, на что способны, когда дойдете до конца.',
  //         },
  //         {
  //           name: "Открывайте для себя простой эко-мир",
  //           description:
  //             "Для эко-образа жизни не нужно покупать дополнительную кучу вещей. Забытые баночки из-под варенья — тара для круп, макарон, сахара. Старая футболка — новый экомешочек для хлеба, бывшая штора — фруктовка. Раздел Ашана с продуктами в упаковке — раздел с продуктами без упаковки. Осознанность ваше все!",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Как начать сегодня?",
  //       type: "checklist",
  //       content: [
  //         {
  //           name: "Ковальски, анализ",
  //           description:
  //             "Проанализируйте свои привычки в потреблении и поймите, что именно вы выбрасываете и как от этого можно было бы отказаться. Составьте план для своего эко-челленджа.",
  //         },
  //         {
  //           name: "Нет пластиковым пакетам",
  //           description:
  //             "Начните ходить в магазин с сумкой/шопером/рюкзаком/тканевым мешком/пластиковым пакетом (только если из того самого пакета с пакетами, но не покупайте новый!)",
  //         },
  //         {
  //           name: "Простые действия в быту",
  //           description:
  //             "Выключайте воду, когда чистите зубы. Выбирайте душ, а не ванну. Вытаскивайте лампы и зарядки из розеток, когда не используете их.",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "clothes",
    name: "Одежда",
    icon: <ClothesIcon fill="#e6457a" />,
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Пригодная одежда",
            icon: <SweaterIcon />,
          },
          {
            name: "Ветошь",
            icon: <BadsweaterIcon />,
          },
        ],
      },
      {
        title: "Что нельзя сдавать",
        type: "scroll",
        content: [
          {
            name: "Нижнее белье",
            icon: <UnderwearIcon />,
          },
          {
            name: "Колготки",
            icon: <TightsIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Необходимо определить качество одежды: можно носить или нет? ",
            description:
              "В зависимости от этого одежду нужно сдать для повторного использования или для переработки",
          },
          {
            name: "Если одежда пригодна для носки, то есть несколько вариантов",
            description:
              "— сдать в благотворительные организации (например, в «Свалку» или фонд «Второе дыхание») или пункты приема (например, контейнеры и магазины «Спасибо!») \n— продать или отдать на таких сайтах как Авито, Юла \n— передать кому-то из родственников ",
          },
          {
            name: "Если одежду уже невозможно носить, ее нужно сдать на переработку",
            description:
              "О возможностях переработки можно уточнить в конкретных пунктах приема",
          },
        ],
      },
    ],
  },
  {
    id: "lamps",
    name: "Лампочки",
    icon: <LampIcon fill="#b52dd7" />,
    sections: [
      {
        title: "Что можно сдавать",
        type: "scroll",
        content: [
          {
            name: "Лампы накаливания",
            icon: <LampIcon />,
          },
          {
            name: "Ртутные (люминесцентные) лампы",
            icon: <LuminIcon />,
          },
          {
            name: "Галогенные лампы",
            icon: <GalogIcon />,
          },
          {
            name: "Светодиодные лампы",
            icon: <LedIcon />,
          },
        ],
      },
      {
        title: "Как сдавать",
        type: "checklist",
        content: [
          {
            name: "Проверить целостность лампы",
            description:
              "Если она разбилась — ничего страшного, ее тоже можно утилизировать",
          },
          {
            name: "Сложить лампы в отдельный контейнер",
            description:
              "Можно обернуть тканью, чтобы они не разбились. Ртутные (люминесцентные) лампы стоит упаковать в герметичный пластиковый пакет",
          },
          {
            name: "Сдать в специальный пункт приема",
            description: "",
          },
        ],
      },
    ],
  },
];

export default data;

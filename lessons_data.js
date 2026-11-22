const LESSONS = [
  {
    "id": "m1w1",
    "month": 1,
    "week": 1,
    "title": "Погружение в вайб-кодинг и настройка окружения",
    "duration": "4–5 часов",
    "goal": "Понять, что такое вайб-кодинг, и подготовить рабочее место программиста: редактор кода, терминал, ИИ-ассистент.",
    "theory": [
      {
        "heading": "Что такое вайб-кодинг и почему это не 'читерство'",
        "text": "Вайб-кодинг (vibe coding) — это разработка программ, где человек формулирует задачу на обычном языке, а нейросеть пишет код. Это не значит, что программист не нужен — наоборот, его роль меняется. Раньше программист тратил 80% времени на то, чтобы вспомнить синтаксис и написать код руками, и 20% — на то, чтобы придумать, что нужно сделать. В вайб-кодинге пропорция обратная: ИИ берёт на себя написание кода, а человек отвечает за самое сложное — понять задачу, разбить её на понятные шаги, проверить результат и найти ошибку, если что-то не работает. Хороший вайб-кодер — это не тот, кто лучше всех помнит команды, а тот, кто лучше всех формулирует задачи и critически проверяет результат.",
        "example": "Представь, что ты — архитектор дома, а ИИ — бригада строителей, которая работает очень быстро, но не читает твои мысли. Если ты скажешь строителям просто 'постройте дом', получится что-то непредсказуемое. Если ты дашь чертёж с размерами, материалами и расположением комнат — результат будет именно таким, какой тебе нужен. Промпт для ИИ — это и есть твой чертёж."
      },
      {
        "heading": "Из чего состоит твоё рабочее место программиста",
        "text": "Тебе понадобятся три инструмента, которые будут работать вместе. Первый — редактор кода (мы используем VS Code) — это как текстовый редактор, но заточенный под код: подсвечивает синтаксис, показывает ошибки, умеет запускать программы. Второй — терминал (командная строка) — текстовый способ управлять компьютером: вместо того чтобы кликать мышкой по папкам, ты печатаешь команды. Это важно, потому что именно через терминал запускается код и работает Git (про него — на неделе 3). Третий — AI-ассистент для кода (например, встроенный чат в VS Code, Cursor или Claude) — программа, которой ты описываешь задачу, а она пишет, объясняет и правит код прямо у тебя в редакторе.",
        "example": "Аналогия: VS Code — это твой рабочий стол, терминал — это способ отдавать компьютеру команды голосом (только печатными буквами), а AI-ассистент — это умный помощник, сидящий рядом за столом, который пишет под твою диктовку."
      },
      {
        "heading": "Почему терминал нельзя пропускать, даже если страшно",
        "text": "Многие новички хотят сразу всё делать кнопками и обойти терминал — это ошибка. Терминал даёт тебе понимание того, что реально происходит с твоим кодом: где лежит файл, как он запускается, что происходит, если что-то пошло не так. Когда ты позже будешь работать с Git, с серверами, с деплоем приложений — всё это происходит через терминал. Лучше преодолеть лёгкий дискомфорт сейчас, чем упираться в стену позже.",
        "example": "Команда cd (change directory) — это 'перейти в папку'. Команда ls (list) — 'показать, что есть в этой папке'. Команда mkdir (make directory) — 'создать новую папку'. Всего 3 команды дают тебе полный контроль над навигацией по файлам компьютера."
      },
      {
        "heading": "Python как язык для старта — и почему это не имеет значения на старте",
        "text": "Мы будем использовать Python как основной язык в первых месяцах курса, потому что у него простой и читаемый синтаксис, и под него легко получать качественный код от ИИ. Но важно понимать: в вайб-кодинге выбор языка — это не навык, который ты 'зубришь', а инструмент, который ИИ помогает тебе применять. Если позже понадобится JavaScript для веб-страницы — ты не будешь учить его с нуля месяцами, ты будешь переносить уже усвоенные принципы (переменные, функции, условия) на новый синтаксис с помощью ИИ.",
        "example": "Это похоже на изучение второго иностранного языка: когда ты уже понимаешь грамматику одного языка, второй осваивается значительно быстрее — потому что сама логика мышления уже знакома."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Установи VS Code",
        "instruction": "Зайди на сайт code.visualstudio.com, скачай версию для своей операционной системы (Windows/macOS/Linux) и установи её, как обычную программу — через стандартный установщик с кнопкой 'Далее'.",
        "prompt": null,
        "expected": "После установки у тебя открывается окно VS Code с приветственным экраном.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Скачивание VS Code\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><rect x=\"90\" y=\"16\" width=\"360\" height=\"18\" rx=\"9\" fill=\"#ffffff\" /><text x=\"102\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#374151\" font-weight=\"400\" text-anchor=\"start\">code.visualstudio.com</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"50\" rx=\"0\" fill=\"#0f172a\" /><text x=\"34\" y=\"72\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"18\" fill=\"#ffffff\" font-weight=\"700\" text-anchor=\"start\">Visual Studio Code</text><text x=\"320.0\" y=\"140\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"24\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">Code editing. Redefined.</text><text x=\"320.0\" y=\"168\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#4b5563\" font-weight=\"400\" text-anchor=\"middle\">Бесплатный редактор кода</text><rect x=\"220\" y=\"196\" width=\"200\" height=\"42\" rx=\"6\" fill=\"#2563eb\" /><text x=\"320.0\" y=\"221.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Download for Windows</text><rect x=\"217\" y=\"193\" width=\"206\" height=\"48\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"418\" cy=\"194\" r=\"11\" fill=\"#f59e0b\"/><text x=\"418\" y=\"198.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"320.0\" y=\"266\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#4b5563\" font-weight=\"400\" text-anchor=\"middle\">Кнопка сама подставит вашу систему: Windows, macOS или Linux</text><rect x=\"130\" y=\"286\" width=\"380\" height=\"44\" rx=\"8\" fill=\"#f3f4f6\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"150\" y=\"313\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">2</text><text x=\"170\" y=\"313\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">Откройте скачанный файл → «Далее» → «Установить»</text></svg>",
          "caption": "Нажмите кнопку скачивания (1), затем запустите файл и следуйте установщику (2). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 2,
        "title": "Установи Python",
        "instruction": "Зайди на python.org/downloads и скачай Python для своей системы. На Windows сейчас может предлагаться «Python install manager»: установи его кнопкой Install, затем открой терминал и введи python — он предложит поставить последнюю версию, соглашайся. Если вместо этого откроется классический установщик, ОБЯЗАТЕЛЬНО поставь галочку «Add python.exe to PATH» перед нажатием Install Now — без этого компьютер не будет находить Python через терминал. На macOS просто запусти скачанный установщик.",
        "prompt": null,
        "expected": "Установка прошла без ошибок, галочка Add to PATH была отмечена (для Windows).",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Установка Python в Windows\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#4b5563\" font-weight=\"500\" text-anchor=\"middle\">Установка Python в Windows</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"310\" rx=\"0\" fill=\"#f3f4f6\" /><rect x=\"26\" y=\"54\" width=\"284\" height=\"280\" rx=\"8\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"40\" y=\"80\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">Вариант А: Python install manager</text><text x=\"40\" y=\"102\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#4b5563\" font-weight=\"400\" text-anchor=\"start\">Новый способ, его сейчас предлагает</text><text x=\"40\" y=\"118\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#4b5563\" font-weight=\"400\" text-anchor=\"start\">python.org/downloads для Windows</text><rect x=\"40\" y=\"140\" width=\"120\" height=\"34\" rx=\"6\" fill=\"#2563eb\" /><text x=\"100.0\" y=\"161.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Install</text><rect x=\"37\" y=\"137\" width=\"126\" height=\"40\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"158\" cy=\"138\" r=\"11\" fill=\"#f59e0b\"/><text x=\"158\" y=\"142.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"40\" y=\"206\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">Потом откройте терминал и введите:</text><rect x=\"40\" y=\"216\" width=\"250\" height=\"30\" rx=\"6\" fill=\"#111827\" /><text x=\"52\" y=\"236\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#a7f3d0\" font-weight=\"400\" text-anchor=\"start\">python</text><text x=\"40\" y=\"272\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#4b5563\" font-weight=\"400\" text-anchor=\"start\">Если спросит про установку</text><text x=\"40\" y=\"288\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#4b5563\" font-weight=\"400\" text-anchor=\"start\">последней версии — согласитесь</text><rect x=\"330\" y=\"54\" width=\"284\" height=\"280\" rx=\"8\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"344\" y=\"80\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">Вариант Б: классический установщик</text><rect x=\"344\" y=\"96\" width=\"256\" height=\"40\" rx=\"6\" fill=\"#eff6ff\" stroke=\"#bfdbfe\" stroke-width=\"1\" /><text x=\"356\" y=\"121\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#1d4ed8\" font-weight=\"600\" text-anchor=\"start\">→  Install Now</text><rect x=\"344\" y=\"150\" width=\"256\" height=\"40\" rx=\"6\" fill=\"#f9fafb\" stroke=\"#e5e7eb\" stroke-width=\"1\" /><text x=\"356\" y=\"175\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">→  Customize installation</text><rect x=\"350\" y=\"228\" width=\"16\" height=\"16\" rx=\"3\" fill=\"#2563eb\" /><text x=\"353\" y=\"241\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"700\" text-anchor=\"start\">✓</text><text x=\"374\" y=\"241\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"600\" text-anchor=\"start\">Add python.exe to PATH</text><rect x=\"343\" y=\"221\" width=\"236\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"570\" cy=\"222\" r=\"11\" fill=\"#f59e0b\"/><text x=\"570\" y=\"226.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><rect x=\"341\" y=\"93\" width=\"262\" height=\"46\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"594\" cy=\"94\" r=\"11\" fill=\"#f59e0b\"/><text x=\"594\" y=\"98.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><text x=\"344\" y=\"280\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#b45309\" font-weight=\"600\" text-anchor=\"start\">Сначала поставьте галочку (1),</text><text x=\"344\" y=\"296\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#b45309\" font-weight=\"600\" text-anchor=\"start\">потом нажмите Install Now (2)</text></svg>",
          "caption": "Подойдёт любой из двух вариантов: какой из них вы увидите, зависит от версии на python.org. Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 3,
        "title": "Проверь, что Python установился",
        "instruction": "Открой терминал внутри VS Code: сверху меню Terminal → New Terminal. Введи команду ниже и нажми Enter.",
        "prompt": "python --version",
        "expected": "Терминал должен вывести что-то вроде 'Python 3.12.1'. Если видишь ошибку 'command not found' — Python либо не установлен, либо не добавлен в PATH. На Windows может понадобиться команда 'py --version' вместо 'python --version'.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Открытие терминала в VS Code\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#1e1e1e\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#2d2d2d\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#2d2d2d\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"500\" text-anchor=\"middle\">Visual Studio Code</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"22\" rx=\"0\" fill=\"#252526\" /><text x=\"29\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">File</text><text x=\"71\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Edit</text><text x=\"113\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Selection</text><text x=\"190\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">View</text><text x=\"232\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Go</text><text x=\"260\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Run</text><text x=\"295\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Terminal</text><text x=\"365\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Help</text><rect x=\"10\" y=\"62\" width=\"44\" height=\"288\" rx=\"0\" fill=\"#333333\" /><rect x=\"22\" y=\"80\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"118\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"156\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"194\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"26\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"26\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"288\" y=\"62\" width=\"190\" height=\"64\" rx=\"4\" fill=\"#252526\" stroke=\"#454545\" stroke-width=\"1\" /><rect x=\"292\" y=\"66\" width=\"182\" height=\"24\" rx=\"3\" fill=\"#04395e\" /><text x=\"300\" y=\"83\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"400\" text-anchor=\"start\">New Terminal</text><text x=\"438\" y=\"83\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"end\">Ctrl+`</text><text x=\"300\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Split Terminal</text><rect x=\"285\" y=\"39\" width=\"76\" height=\"24\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"356\" cy=\"40\" r=\"11\" fill=\"#f59e0b\"/><text x=\"356\" y=\"44.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><rect x=\"289\" y=\"63\" width=\"188\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"478\" cy=\"64\" r=\"11\" fill=\"#f59e0b\"/><text x=\"478\" y=\"68.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><rect x=\"54\" y=\"210\" width=\"576\" height=\"140\" rx=\"0\" fill=\"#181818\" stroke=\"#2b2b2b\" stroke-width=\"1\" /><text x=\"66\" y=\"228\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#e5e7eb\" font-weight=\"600\" text-anchor=\"start\">TERMINAL</text><text x=\"66\" y=\"256\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#d4d4d4\" font-weight=\"400\" text-anchor=\"start\">PS C:\\Users\\you&gt; python --version</text><text x=\"66\" y=\"278\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#a7f3d0\" font-weight=\"400\" text-anchor=\"start\">Python 3.x.x</text><rect x=\"59\" y=\"239\" width=\"306\" height=\"50\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"362\" cy=\"240\" r=\"11\" fill=\"#f59e0b\"/><text x=\"362\" y=\"244.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><text x=\"380\" y=\"270\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">← здесь вводите команды</text></svg>",
          "caption": "Меню Terminal (1) → New Terminal (2). Внизу откроется окно, куда вводятся команды (3). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 4,
        "title": "Подключи ИИ-ассистента",
        "instruction": "Если у тебя есть доступ к Cursor (cursor.com) — установи его вместо обычного VS Code, он уже включает AI-ассистента. Если работаешь в обычном VS Code — открой расширение (Extensions, иконка квадратиков слева) и установи расширение 'Claude' или 'GitHub Copilot'. Авторизуйся в нём через свой аккаунт.",
        "prompt": null,
        "expected": "В редакторе появилась боковая панель чата с ИИ, куда можно печатать сообщения.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Установка расширения в VS Code\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#1e1e1e\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#2d2d2d\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#2d2d2d\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"500\" text-anchor=\"middle\">Visual Studio Code — расширения</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"22\" rx=\"0\" fill=\"#252526\" /><text x=\"29\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">File</text><text x=\"71\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Edit</text><text x=\"113\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Selection</text><text x=\"190\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">View</text><text x=\"232\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Go</text><text x=\"260\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Run</text><text x=\"295\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Terminal</text><text x=\"365\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Help</text><rect x=\"10\" y=\"62\" width=\"44\" height=\"288\" rx=\"0\" fill=\"#333333\" /><rect x=\"22\" y=\"80\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"118\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"156\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"194\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"26\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"26\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"19\" y=\"153\" width=\"26\" height=\"26\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"50\" cy=\"152\" r=\"11\" fill=\"#f59e0b\"/><text x=\"50\" y=\"156.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><rect x=\"54\" y=\"62\" width=\"240\" height=\"288\" rx=\"0\" fill=\"#252526\" /><text x=\"66\" y=\"84\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#cccccc\" font-weight=\"600\" text-anchor=\"start\">EXTENSIONS</text><rect x=\"66\" y=\"94\" width=\"216\" height=\"26\" rx=\"4\" fill=\"#3c3c3c\" stroke=\"#007acc\" stroke-width=\"1\" /><text x=\"76\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"400\" text-anchor=\"start\">Claude</text><rect x=\"63\" y=\"91\" width=\"222\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"280\" cy=\"92\" r=\"11\" fill=\"#f59e0b\"/><text x=\"280\" y=\"96.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><rect x=\"66\" y=\"134\" width=\"216\" height=\"70\" rx=\"4\" fill=\"#2a2d2e\" /><rect x=\"76\" y=\"146\" width=\"36\" height=\"36\" rx=\"6\" fill=\"#d97757\" /><text x=\"122\" y=\"160\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"start\">Claude Code</text><text x=\"122\" y=\"178\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\">Anthropic</text><rect x=\"222\" y=\"172\" width=\"50\" height=\"22\" rx=\"6\" fill=\"#0e639c\" /><text x=\"247.0\" y=\"187.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Install</text><rect x=\"219\" y=\"169\" width=\"56\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"278\" cy=\"168\" r=\"11\" fill=\"#f59e0b\"/><text x=\"278\" y=\"172.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><text x=\"320\" y=\"120\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\">Сочетание клавиш:</text><text x=\"320\" y=\"142\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#e5e7eb\" font-weight=\"400\" text-anchor=\"start\">Ctrl+Shift+X (Windows)</text><text x=\"320\" y=\"162\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#e5e7eb\" font-weight=\"400\" text-anchor=\"start\">Cmd+Shift+X (macOS)</text><text x=\"320\" y=\"210\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\">Найдите нужного ассистента</text><text x=\"320\" y=\"228\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\">по названию и нажмите Install</text></svg>",
          "caption": "Иконка расширений слева (1) → поиск по названию (2) → кнопка Install (3). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 5,
        "title": "Создай папку для своего первого проекта через терминал",
        "instruction": "В терминале VS Code введи команды по очереди, нажимая Enter после каждой. Это создаст папку 'course-project' и перейдёт в неё.",
        "prompt": "mkdir course-project\ncd course-project",
        "expected": "После второй команды путь в терминале изменится — в конце строки должно появиться 'course-project', это значит, что ты теперь 'находишься' внутри этой папки."
      },
      {
        "step": 6,
        "title": "Попроси ИИ написать первую программу",
        "instruction": "Открой чат с ИИ-ассистентом в редакторе и отправь промпт ниже. После получения ответа — создай файл hello.py в папке course-project (правой кнопкой по папке в VS Code → New File) и вставь туда код, который дал ИИ.",
        "prompt": "Напиши простую программу на Python, которая выводит в консоль фразу 'Hello, world! Это моя первая программа.' Дай только код, без лишних объяснений, и напиши одно короткое предложение о том, что делает функция print().",
        "expected": "У тебя появился файл hello.py с одной-двумя строчками кода внутри.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Создание файла в VS Code\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#1e1e1e\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#2d2d2d\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#2d2d2d\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"500\" text-anchor=\"middle\">Visual Studio Code — создание файла</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"22\" rx=\"0\" fill=\"#252526\" /><text x=\"29\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">File</text><text x=\"71\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Edit</text><text x=\"113\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Selection</text><text x=\"190\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">View</text><text x=\"232\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Go</text><text x=\"260\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Run</text><text x=\"295\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Terminal</text><text x=\"365\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Help</text><rect x=\"10\" y=\"62\" width=\"44\" height=\"288\" rx=\"0\" fill=\"#333333\" /><rect x=\"22\" y=\"80\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"118\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"156\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"194\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"26\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"26\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"54\" y=\"62\" width=\"220\" height=\"288\" rx=\"0\" fill=\"#252526\" /><text x=\"66\" y=\"84\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#cccccc\" font-weight=\"600\" text-anchor=\"start\">EXPLORER</text><rect x=\"58\" y=\"94\" width=\"140\" height=\"22\" rx=\"3\" fill=\"#37373d\" /><text x=\"66\" y=\"110\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"start\">▾ COURSE-PROJECT</text><rect x=\"55\" y=\"91\" width=\"146\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"202\" cy=\"92\" r=\"11\" fill=\"#f59e0b\"/><text x=\"202\" y=\"96.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"86\" y=\"252\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#e5c07b\" font-weight=\"400\" text-anchor=\"start\">hello.py</text><rect x=\"75\" y=\"235\" width=\"116\" height=\"26\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"194\" cy=\"236\" r=\"11\" fill=\"#f59e0b\"/><text x=\"194\" y=\"240.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><rect x=\"204\" y=\"120\" width=\"160\" height=\"112\" rx=\"6\" fill=\"#252526\" stroke=\"#454545\" stroke-width=\"1\" /><rect x=\"208\" y=\"124\" width=\"152\" height=\"24\" rx=\"3\" fill=\"#04395e\" /><text x=\"218\" y=\"141\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"400\" text-anchor=\"start\">New File...</text><text x=\"218\" y=\"167\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">New Folder...</text><text x=\"218\" y=\"193\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Reveal in Explorer</text><text x=\"218\" y=\"219\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Open in Terminal</text><rect x=\"205\" y=\"121\" width=\"158\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"366\" cy=\"122\" r=\"11\" fill=\"#f59e0b\"/><text x=\"366\" y=\"126.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><text x=\"384\" y=\"140\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">1  Правый клик по папке</text><text x=\"384\" y=\"164\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">2  New File...</text><text x=\"384\" y=\"188\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">3  Имя hello.py и Enter</text></svg>",
          "caption": "Правый клик по папке проекта (1) → New File... (2) → имя файла hello.py (3). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 7,
        "title": "Запусти программу через терминал (не кнопкой!)",
        "instruction": "В терминале введи команду запуска файла. Важно сделать это именно через терминал, а не через зелёную кнопку 'Run' в редакторе — чтобы понять, что происходит на самом деле.",
        "prompt": "python hello.py",
        "expected": "В терминале должна появиться строка 'Hello, world! Это моя первая программа.'",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Запуск программы через терминал\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#1e1e1e\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#2d2d2d\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#2d2d2d\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"500\" text-anchor=\"middle\">Visual Studio Code</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"22\" rx=\"0\" fill=\"#252526\" /><text x=\"29\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">File</text><text x=\"71\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Edit</text><text x=\"113\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Selection</text><text x=\"190\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">View</text><text x=\"232\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Go</text><text x=\"260\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Run</text><text x=\"295\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Terminal</text><text x=\"365\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Help</text><rect x=\"10\" y=\"62\" width=\"44\" height=\"288\" rx=\"0\" fill=\"#333333\" /><rect x=\"22\" y=\"80\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"118\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"156\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"194\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"26\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"26\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"54\" y=\"62\" width=\"576\" height=\"30\" rx=\"0\" fill=\"#252526\" /><text x=\"66\" y=\"82\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"400\" text-anchor=\"start\">hello.py</text><rect x=\"574\" y=\"68\" width=\"28\" height=\"20\" rx=\"4\" fill=\"#2d2d2d\" /><text x=\"588\" y=\"83\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#22c55e\" font-weight=\"700\" text-anchor=\"middle\">▶</text><line x1=\"566\" y1=\"62\" x2=\"610\" y2=\"94\" stroke=\"#ef4444\" stroke-width=\"3\"/><line x1=\"610\" y1=\"62\" x2=\"566\" y2=\"94\" stroke=\"#ef4444\" stroke-width=\"3\"/><text x=\"560\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#f87171\" font-weight=\"600\" text-anchor=\"end\">не эта кнопка</text><text x=\"66\" y=\"130\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#d4d4d4\" font-weight=\"400\" text-anchor=\"start\">print(&quot;Привет, мир!&quot;)</text><rect x=\"54\" y=\"210\" width=\"576\" height=\"140\" rx=\"0\" fill=\"#181818\" stroke=\"#2b2b2b\" stroke-width=\"1\" /><text x=\"66\" y=\"228\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#e5e7eb\" font-weight=\"600\" text-anchor=\"start\">TERMINAL</text><text x=\"66\" y=\"258\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#d4d4d4\" font-weight=\"400\" text-anchor=\"start\">&gt; python hello.py</text><text x=\"66\" y=\"280\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#a7f3d0\" font-weight=\"400\" text-anchor=\"start\">Привет, мир!</text><rect x=\"59\" y=\"241\" width=\"206\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"260\" cy=\"242\" r=\"11\" fill=\"#f59e0b\"/><text x=\"260\" y=\"246.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"290\" y=\"260\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">Введите команду в терминале и нажмите Enter</text><text x=\"290\" y=\"280\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">На macOS может понадобиться python3</text></svg>",
          "caption": "Запускайте программу командой в терминале (1), а не зелёной кнопкой ▶. Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 8,
        "title": "Зафиксируй результат в заметке",
        "instruction": "Открой любой текстовый файл или заметку и запиши три пункта: 1) какие программы ты установил, 2) какие команды терминала ты сегодня использовал и что каждая делает своими словами, 3) что именно вывела твоя программа при запуске.",
        "prompt": null,
        "expected": "У тебя есть короткая письменная заметка-отчёт о первом дне практики — это пригодится, если позже понадобится вспомнить пройденный путь."
      }
    ],
    "test": [
      {
        "q": "В чём главная роль человека в вайб-кодинге?",
        "options": [
          "Запоминать синтаксис языков программирования наизусть",
          "Формулировать задачу, проверять и исправлять результат работы ИИ",
          "Писать весь код полностью самостоятельно, без помощи ИИ",
          "Только нажимать кнопку 'Запустить' и ждать результата"
        ],
        "correct": 1,
        "explain": "Вайб-кодинг переносит фокус с запоминания синтаксиса на постановку задачи и критическую проверку результата. ИИ пишет код, но решения о том, что должно получиться и правильно ли это работает — принимает человек."
      },
      {
        "q": "Зачем нужен терминал, если в редакторе есть кнопка 'Run'?",
        "options": [
          "Терминал не нужен, это просто устаревший способ запуска программ",
          "Терминал даёт понимание того, что реально происходит с кодом, и необходим для Git, серверов и деплоя",
          "Терминал нужен только опытным программистам, новичкам он не требуется",
          "Кнопка 'Run' работает медленнее, чем терминал"
        ],
        "correct": 1,
        "explain": "Кнопка 'Run' скрывает от тебя детали процесса. Терминал — универсальный инструмент, без которого невозможно работать с Git, серверами, облачными сервисами и многими другими задачами, которые встретятся в курсе дальше."
      },
      {
        "q": "Какая команда терминала создаёт новую папку?",
        "options": [
          "cd",
          "ls",
          "mkdir",
          "python"
        ],
        "correct": 2,
        "explain": "mkdir (make directory) создаёт новую папку. cd — переходит в папку, ls — показывает содержимое текущей папки, python — запускает интерпретатор Python или файл с кодом."
      },
      {
        "q": "Почему при установке Python на Windows важно отметить галочку 'Add Python to PATH'?",
        "options": [
          "Это просто декоративная настройка интерфейса",
          "Без этого Python будет работать медленнее",
          "Без этого компьютер не сможет находить команду python через терминал из любой папки",
          "Эта галочка нужна только для установки дополнительных библиотек"
        ],
        "correct": 2,
        "explain": "PATH — это список папок, где операционная система ищет программы по их имени. Если Python не добавлен в PATH, терминал не будет знать, где искать программу python, даже если она установлена."
      },
      {
        "q": "Что из перечисленного — лучший пример качественного промпта для ИИ при написании первой программы?",
        "options": [
          "'Напиши код'",
          "'Сделай что-нибудь на Python'",
          "'Напиши программу на Python, которая выводит в консоль конкретную фразу, и объясни одну используемую функцию'",
          "'Почему Python такой сложный?'"
        ],
        "correct": 2,
        "explain": "Хороший промпт указывает конкретный язык, конкретное действие программы и формат ожидаемого объяснения — это уменьшает неопределённость и даёт предсказуемый результат, как чертёж для строителей из примера теории."
      }
    ],
    "glossary": [
      {
        "term": "Вайб-кодинг",
        "def": "Разработка программ через постановку задач ИИ на естественном языке вместо ручного написания всего кода."
      },
      {
        "term": "Терминал",
        "def": "Текстовый интерфейс для управления компьютером с помощью команд, вместо кликов мышкой."
      },
      {
        "term": "PATH",
        "def": "Список папок, в которых операционная система ищет исполняемые программы по имени."
      },
      {
        "term": "AI-ассистент для кода",
        "def": "Программа (например, встроенный чат в VS Code/Cursor), которая пишет, объясняет и исправляет код по запросу на естественном языке."
      },
      {
        "term": "Интерпретатор Python",
        "def": "Программа, которая читает код на Python построчно и выполняет его."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Редактор VS Code → Установка Python → Первая команда в терминале\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Редактор VS Code</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Установка Python</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Первая команда в</text><text x=\"525.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">терминале</text></svg>"
  },
  {
    "id": "m1w2",
    "month": 1,
    "week": 2,
    "title": "Как правильно ставить задачу ИИ (архитектура + промптинг)",
    "duration": "4–5 часов",
    "goal": "Научиться превращать идею в чёткое техническое задание для ИИ и осмысленно читать результат, понимая базовые строительные блоки программы.",
    "theory": [
      {
        "heading": "Четыре кирпичика, из которых состоит почти любая программа",
        "text": "Не зная синтаксиса, можно понимать логику. Есть всего 4 базовых понятия, которые встречаются в 90% программ. Переменная — это 'коробка с подписью', где хранится значение (число, текст, список). Функция — это 'мини-инструкция с названием', которую можно вызывать много раз, не переписывая код заново. Условие (если...то...иначе) — это точка принятия решения: программа идёт по одному пути или по другому в зависимости от ситуации. Цикл — это повторение одного действия много раз, пока выполняется условие (например, 'пока в списке есть задачи — показывай их одну за другой'). Если ты видишь код и можешь мысленно сказать 'вот тут коробка с данными, вот тут решение, вот тут повторение' — ты уже понимаешь программу на уровне архитектуры, даже не зная синтаксиса языка.",
        "example": "Рецепт торта — это программа: ингредиенты (переменные), отдельные подготовительные действия вроде 'взбить яйца' (функции), 'если тесто жидкое — добавь муки' (условие), 'перемешивай, пока не растворится сахар' (цикл)."
      },
      {
        "heading": "Почему 'напиши мне программу' — плохой промпт",
        "text": "Главная причина разочарования новичков в ИИ — слишком общая формулировка задачи. Когда ты пишешь 'сделай калькулятор', ИИ вынужден сам принимать десятки решений за тебя: какие операции поддерживать, как обрабатывать ошибки, какой у этого будет интерфейс. Он угадывает — и угадывает не всегда так, как тебе нужно. Хороший промпт отвечает на три вопроса заранее: что на входе (какие данные получает программа), что должно происходить (какая логика), что на выходе (что должно получиться в итоге). Чем конкретнее ты отвечаешь на эти три вопроса, тем меньше ИИ угадывает — и тем ближе результат к тому, что тебе действительно нужно с первого раза.",
        "example": "Плохо: 'Сделай калькулятор'. Хорошо: 'Напиши консольную программу на Python, которая: 1) запрашивает у пользователя два числа и знак операции (+, -, *, /), 2) выполняет соответствующее вычисление, 3) выводит результат в формате Результат: X. Если выбрано деление на 0 — вывести сообщение об ошибке вместо вычисления.'"
      },
      {
        "heading": "Декомпозиция: как разбить большую задачу на шаги перед тем, как писать промпт",
        "text": "Любую задачу крупнее 'вывести текст на экран' стоит сначала разложить на шаги на бумаге или в заметке, и только потом переводить в промпт. Это называется декомпозицией. Метод простой: спроси себя 'какие отдельные действия должна выполнить программа, одно за другим?' и запиши их как список глаголов. Потом каждый пункт списка превращается в требование внутри промпта. Декомпозиция экономит часы переписки с ИИ, потому что ты сразу формулируешь задачу полно, а не вспоминаешь недостающие детали через 5 сообщений.",
        "example": "Задача 'калькулятор с историей'разбивается так: 1) получить два числа и операцию, 2) посчитать результат, 3) сохранить операцию и результат в список истории, 4) вывести результат пользователю, 5) дать возможность посмотреть всю историю операций по команде."
      },
      {
        "heading": "Как читать ответ ИИ, а не просто копировать его",
        "text": "Когда ИИ присылает код, не вставляй его сразу и не запускай вслепую. Пройдись по коду и отметь для себя: где объявлены переменные (и что в них хранится), есть ли условия и что они проверяют, есть ли циклы и что они повторяют, есть ли отдельные функции и что каждая из них делает. Если что-то непонятно — это нормальный повод спросить у самого ИИ: 'Объясни построчно, что делает этот код' или 'Почему ты использовал именно эту конструкцию, а не другую?'. Это превращает разработку в обучение, а не в слепое копирование.",
        "example": "Если видишь в коде 'if число == 0: print(\"Ошибка\")' — ты должен понимать: это условие, которое проверяет, равно ли значение переменной 'число' нулю, и если да — выводит сообщение об ошибке."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Декомпозируй задачу на бумаге перед первым промптом",
        "instruction": "В заметке запиши от 4 до 6 отдельных действий, которые должен выполнять консольный калькулятор (от получения ввода до вывода результата). Не открывай ИИ, пока не закончишь этот список.",
        "prompt": null,
        "expected": "Список из 4-6 пунктов, похожий на то, что приведено в примере теории выше."
      },
      {
        "step": 2,
        "title": "Переведи список действий в структурированный промпт",
        "instruction": "Используй список из шага 1, чтобы собрать подробный промпт по структуре 'входные данные → логика → выходные данные → граничные случаи'. Отправь его ИИ.",
        "prompt": "Напиши консольную программу на Python для калькулятора. Входные данные: два числа и символ операции (+, -, *, /), вводимые пользователем через input(). Логика: выполнить соответствующее математическое действие. Выходные данные: вывести результат в формате 'Результат: X'. Граничный случай: если выбрано деление, а второе число равно 0 — вывести 'Ошибка: деление на ноль' вместо вычисления. Дай код с короткими комментариями на русском к каждому значимому блоку.",
        "expected": "ИИ присылает код, который включает input(), условную конструкцию для выбора операции и обработку деления на ноль."
      },
      {
        "step": 3,
        "title": "Прочитай код построчно вслух",
        "instruction": "Создай файл calculator.py, вставь туда код. Прежде чем запускать — пройдись по коду и для каждого значимого блока вслух (или письменно) объясни, что он делает: где переменные, где условие, где вывод результата.",
        "prompt": null,
        "expected": "Ты можешь своими словами описать логику программы, не запуская её."
      },
      {
        "step": 4,
        "title": "Запусти и протестируй 4 сценария",
        "instruction": "Запусти программу через терминал командой ниже. Протестируй: сложение, умножение, деление на обычное число, и деление на 0 — проверь, что ошибка обрабатывается корректно.",
        "prompt": "python calculator.py",
        "expected": "Три обычных операции дают верный результат, а деление на 0 выводит сообщение об ошибке, а не 'падает' с непонятным текстом."
      },
      {
        "step": 5,
        "title": "Доработка №1 — история операций",
        "instruction": "Отправь ИИ уточняющий промпт на добавление функциональности, не переписывая всё с нуля.",
        "prompt": "Дополни этот код (вставь свой текущий код сюда): добавь сохранение каждой выполненной операции в список в формате 'число1 операция число2 = результат'. После каждого вычисления предлагай пользователю либо посчитать снова, либо посмотреть всю историю операций, либо выйти.",
        "expected": "Программа теперь умеет показывать список всех выполненных ранее операций в рамках одного запуска."
      },
      {
        "step": 6,
        "title": "Доработка №2 — улучшение вывода и защита от неверного ввода",
        "instruction": "Отправь второй уточняющий промпт.",
        "prompt": "Улучши вывод программы: округли результаты деления до 2 знаков после запятой. Также добавь проверку — если пользователь ввёл не число, а текст, программа должна вывести понятное сообщение об ошибке, а не завершиться с техническим traceback.",
        "expected": "Программа теперь устойчива к вводу текста вместо чисел и красиво округляет результаты."
      },
      {
        "step": 7,
        "title": "Зафиксируй, что изменилось после каждой итерации",
        "instruction": "В заметке кратко опиши своими словами разницу между версией 1 (базовый калькулятор), версией 2 (с историей) и версией 3 (с защитой от ошибок ввода). Это тренирует навык осмысленного чтения дифференциала изменений.",
        "prompt": null,
        "expected": "Три коротких абзаца с описанием того, что добавилось на каждом шаге."
      }
    ],
    "test": [
      {
        "q": "Что из перечисленного правильно описывает 'условие' в программе?",
        "options": [
          "Повторение одного действия много раз",
          "Коробка с данными, у которой есть имя",
          "Точка принятия решения: один путь выполняется, если условие верно, другой — если нет",
          "Инструкция с названием, которую можно вызывать много раз"
        ],
        "correct": 2,
        "explain": "Условие (if/else) — это именно развилка: программа выбирает один из путей выполнения в зависимости от того, выполняется ли проверяемое условие."
      },
      {
        "q": "Почему промпт 'сделай калькулятор' считается слабым?",
        "options": [
          "Потому что ИИ не умеет делать калькуляторы",
          "Потому что он не отвечает на вопросы о входных данных, логике и выходных данных, и ИИ вынужден угадывать",
          "Потому что калькуляторы — слишком сложная задача для ИИ",
          "Потому что в нём нет слова 'Python'"
        ],
        "correct": 1,
        "explain": "Слабость промпта не в длине, а в неопределённости: без указания входных данных, логики и формата результата ИИ принимает решения за тебя, и они не обязательно совпадут с твоими ожиданиями."
      },
      {
        "q": "В чём смысл декомпозиции задачи перед написанием промпта?",
        "options": [
          "Это чисто формальный шаг, который можно пропустить",
          "Декомпозиция нужна только для сложных программ крупных компаний",
          "Разбивка задачи на отдельные шаги до написания промпта уменьшает количество последующих уточнений и экономит время",
          "Декомпозиция заменяет необходимость читать код"
        ],
        "correct": 2,
        "explain": "Декомпозиция помогает продумать задачу полностью заранее, так что первый промпт уже содержит большинство нужных деталей, а не формируется методом проб и ошибок через множество сообщений."
      },
      {
        "q": "Что нужно сделать с кодом от ИИ ПЕРЕД его запуском, согласно уроку?",
        "options": [
          "Сразу запустить, не читая — ИИ не ошибается",
          "Пройтись по коду и определить, где переменные, условия, циклы и что каждая часть делает",
          "Удалить все комментарии из кода",
          "Перевести код на другой язык программирования"
        ],
        "correct": 1,
        "explain": "Осмысленное чтение кода перед запуском — ключевой навык вайб-кодинга. Это превращает каждое взаимодействие с ИИ в обучение, а не в слепое копирование непонятного текста."
      },
      {
        "q": "В практике урока калькулятор дорабатывался через уточняющие промпты. Почему лучше дорабатывать существующий код, а не просить ИИ 'написать всё заново с новыми функциями'?",
        "options": [
          "Потому что ИИ не может писать длинный код",
          "Потому что это сохраняет уже проверенную рабочую логику и добавляет только нужные изменения, что проще контролировать и понимать",
          "Потому что переписывание с нуля запрещено правилами курса",
          "Разницы нет, оба способа абсолютно одинаковы по результату"
        ],
        "correct": 1,
        "explain": "Итеративная доработка — стандартный рабочий паттерн вайб-кодинга: ты сохраняешь уже протестированную логику и добавляешь изменения точечно, что снижает риск случайно сломать то, что уже работало."
      }
    ],
    "glossary": [
      {
        "term": "Переменная",
        "def": "Именованное хранилище значения (числа, текста, списка и т.д.) в программе."
      },
      {
        "term": "Функция",
        "def": "Именованный блок инструкций, который можно вызывать повторно без переписывания кода."
      },
      {
        "term": "Условие (if/else)",
        "def": "Конструкция, которая выбирает один из путей выполнения программы в зависимости от того, выполняется ли проверка."
      },
      {
        "term": "Цикл",
        "def": "Конструкция, повторяющая действие несколько раз, пока выполняется заданное условие."
      },
      {
        "term": "Декомпозиция задачи",
        "def": "Разбиение крупной задачи на последовательность более простых и конкретных шагов."
      },
      {
        "term": "Граничный случай (edge case)",
        "def": "Нестандартная или экстремальная ситуация на входе программы (например, деление на 0), которую нужно отдельно предусмотреть."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Идея → Задача для ИИ → Проверка результата\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Идея</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Задача для ИИ</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Проверка</text><text x=\"525.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">результата</text></svg>"
  },
  {
    "id": "m1w3",
    "month": 1,
    "week": 3,
    "title": "Git и GitHub — память твоего проекта",
    "duration": "4–5 часов",
    "goal": "Научиться сохранять историю изменений проекта и публиковать код на GitHub, чтобы ничего никогда не терялось.",
    "theory": [
      {
        "heading": "Проблема, которую решает Git",
        "text": "Представь, что ты дорабатываешь калькулятор неделю за неделей. Без системы контроля версий единственный способ 'сохранить версию, которая работала' — это копировать файлы в папки вроде 'calculator_final', 'calculator_final_v2', 'calculator_ДЕЙСТВИТЕЛЬНО_финальная'. Это быстро превращается в хаос: непонятно, какая версия актуальна, что именно изменилось между ними, и как откатиться назад, если новая правка всё сломала. Git — это инструмент, который отслеживает каждое изменение в файлах твоего проекта и сохраняет его как 'снимок' (коммит), к которому всегда можно вернуться. Ты получаешь полную историю проекта без необходимости хранить десятки копий папок.",
        "example": "Git похож на кнопку 'сохранить игру' в видеоигре: ты можешь сохраниться на любом этапе прогресса, а потом вернуться к любому сохранению, если что-то пошло не так в новой попытке."
      },
      {
        "heading": "Разница между Git и GitHub",
        "text": "Это два разных, но связанных понятия, которые новички часто путают. Git — это программа, установленная на твоём компьютере, которая локально отслеживает изменения в файлах. GitHub — это облачный сервис (сайт), где можно хранить копию своего Git-проекта в интернете, делиться им с другими и показывать как часть портфолио. Ты можешь использовать Git без GitHub (только локально на своём компьютере), но для совместной работы, бэкапа в облаке и демонстрации своих проектов тебе нужен именно GitHub.",
        "example": "Git — это твой личный дневник прогресса. GitHub — это как если бы ты выложил этот дневник в публичную библиотеку (или держал в приватной ячейке), чтобы к нему был доступ из любого места, а не только с твоего компьютера."
      },
      {
        "heading": "Основной рабочий цикл: init, add, commit, push",
        "text": "Весь базовый рабочий процесс Git укладывается в четыре команды, которые ты будешь использовать постоянно. 'git init' — превращает обычную папку в Git-репозиторий (включает отслеживание изменений). 'git add' — помечает, какие именно изменённые файлы попадут в следующий 'снимок' (коммит). 'git commit' — создаёт сам снимок с сопроводительным сообщением, описывающим, что изменилось. 'git push' — отправляет твои локальные снимки в облако, на GitHub. Запомни порядок: сначала отмечаешь изменения (add), потом фиксируешь их локально (commit), потом публикуешь в облако (push).",
        "example": "Это как писать отчёт: add — выбрать, какие страницы отчёта готовы к сдаче; commit — подписать и датировать эту версию отчёта; push — отправить её руководителю (в облако GitHub)."
      },
      {
        "heading": "Как писать хорошие commit-сообщения",
        "text": "Commit-сообщение — это короткая подпись к снимку изменений, которая объясняет, ЧТО изменилось и иногда ПОЧЕМУ. Плохое сообщение вроде 'фикс' или 'обновление' бесполезно — через месяц ты не вспомнишь, что именно это значило. Хорошее сообщение конкретно: оно описывает суть изменения в одном коротком предложении, обычно в повелительном наклонении. Если не знаешь, как правильно сформулировать — это отличный повод спросить у ИИ: 'Вот что я изменил в коде (опиши изменения), напиши короткое commit-сообщение по стандартным правилам'.",
        "example": "Плохо: 'фикс'. Хорошо: 'Добавить проверку деления на ноль в калькулятор'. Хорошо: 'Исправить ошибку с округлением результата'."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Установи Git и создай аккаунт на GitHub",
        "instruction": "Если Git не установлен — скачай его с git-scm.com и установи с настройками по умолчанию. Затем зарегистрируйся на github.com (бесплатный аккаунт).",
        "prompt": null,
        "expected": "Команда 'git --version' в терминале показывает номер версии, у тебя есть логин и пароль на GitHub."
      },
      {
        "step": 2,
        "title": "Настрой своё имя и почту для Git (один раз)",
        "instruction": "Введи команды по очереди в терминале, заменив данные на свои. Это нужно, чтобы коммиты подписывались твоим именем.",
        "prompt": "git config --global user.name \"Твоё Имя\"\ngit config --global user.email \"твоя_почта@example.com\"",
        "expected": "Команды выполнились без вывода ошибок (отсутствие ответа в терминале — это нормально и значит успех)."
      },
      {
        "step": 3,
        "title": "Инициализируй репозиторий в папке проекта",
        "instruction": "Перейди в терминале в папку с калькулятором (из урока недели 2) и выполни команду инициализации.",
        "prompt": "cd course-project\ngit init",
        "expected": "Терминал сообщает что-то вроде 'Initialized empty Git repository'."
      },
      {
        "step": 4,
        "title": "Сделай первый коммит",
        "instruction": "Отметь все файлы для отслеживания и создай первый снимок проекта.",
        "prompt": "git add .\ngit commit -m \"Первая версия консольного калькулятора\"",
        "expected": "Терминал показывает список файлов, попавших в коммит, и подтверждение создания коммита."
      },
      {
        "step": 5,
        "title": "Создай репозиторий на GitHub и свяжи его с локальным проектом",
        "instruction": "На github.com нажми New repository, дай ему имя (например course-project), НЕ добавляй README на этом экране (у тебя он появится позже), нажми Create. GitHub покажет тебе команды для связи — выполни их в терминале (замени ссылку на свою, которую покажет GitHub).",
        "prompt": "git remote add origin ССЫЛКА_С_ТВОЕГО_GITHUB\ngit branch -M main\ngit push -u origin main",
        "expected": "После обновления страницы репозитория на GitHub там появляются твои файлы.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Создание репозитория на GitHub\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><rect x=\"90\" y=\"16\" width=\"360\" height=\"18\" rx=\"9\" fill=\"#ffffff\" /><text x=\"102\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#374151\" font-weight=\"400\" text-anchor=\"start\">github.com/new</text><rect x=\"10\" y=\"80\" width=\"620\" height=\"270\" rx=\"0\" fill=\"#ffffff\" /><rect x=\"10\" y=\"40\" width=\"620\" height=\"40\" rx=\"0\" fill=\"#24292f\" /><text x=\"30\" y=\"66\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"15\" fill=\"#ffffff\" font-weight=\"700\" text-anchor=\"start\">GitHub</text><rect x=\"548\" y=\"50\" width=\"30\" height=\"22\" rx=\"6\" fill=\"#24292f\" stroke=\"#6e7681\" stroke-width=\"1\" /><text x=\"563\" y=\"66\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">+ ▾</text><rect x=\"545\" y=\"47\" width=\"36\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"584\" cy=\"48\" r=\"11\" fill=\"#f59e0b\"/><text x=\"584\" y=\"52.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><rect x=\"440\" y=\"82\" width=\"170\" height=\"56\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d0d7de\" stroke-width=\"1\" /><rect x=\"444\" y=\"86\" width=\"162\" height=\"24\" rx=\"4\" fill=\"#ddf4ff\" /><text x=\"454\" y=\"103\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#0969da\" font-weight=\"600\" text-anchor=\"start\">New repository</text><text x=\"454\" y=\"128\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#57606a\" font-weight=\"400\" text-anchor=\"start\">Import repository</text><rect x=\"441\" y=\"83\" width=\"168\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"612\" cy=\"84\" r=\"11\" fill=\"#f59e0b\"/><text x=\"612\" y=\"88.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><text x=\"30\" y=\"110\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"16\" fill=\"#1f2328\" font-weight=\"700\" text-anchor=\"start\">Create a new repository</text><text x=\"30\" y=\"140\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#1f2328\" font-weight=\"600\" text-anchor=\"start\">Repository name *</text><rect x=\"30\" y=\"148\" width=\"250\" height=\"28\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d0d7de\" stroke-width=\"1\" /><text x=\"40\" y=\"167\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#1f2328\" font-weight=\"400\" text-anchor=\"start\">course-project</text><rect x=\"27\" y=\"145\" width=\"256\" height=\"34\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"278\" cy=\"146\" r=\"11\" fill=\"#f59e0b\"/><text x=\"278\" y=\"150.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><text x=\"30\" y=\"202\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#1f2328\" font-weight=\"400\" text-anchor=\"start\">◉ Public    ○ Private</text><text x=\"30\" y=\"236\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#1f2328\" font-weight=\"600\" text-anchor=\"start\">Add README</text><rect x=\"130\" y=\"224\" width=\"40\" height=\"18\" rx=\"9\" fill=\"#d0d7de\" /><circle cx=\"140\" cy=\"233\" r=\"7\" fill=\"#ffffff\"/><text x=\"178\" y=\"238\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#b45309\" font-weight=\"600\" text-anchor=\"start\">Off — оставьте выключенным</text><rect x=\"25\" y=\"219\" width=\"152\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"178\" cy=\"218\" r=\"11\" fill=\"#f59e0b\"/><text x=\"178\" y=\"222.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">4</text><rect x=\"30\" y=\"276\" width=\"170\" height=\"34\" rx=\"6\" fill=\"#1f883d\" /><text x=\"115.0\" y=\"297.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Create repository</text><rect x=\"27\" y=\"273\" width=\"176\" height=\"40\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"198\" cy=\"274\" r=\"11\" fill=\"#f59e0b\"/><text x=\"198\" y=\"278.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">5</text></svg>",
          "caption": "«+» в правом верхнем углу (1) → New repository (2) → имя (3) → README выключен (4) → Create repository (5). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 6,
        "title": "Сделай вторую и третью доработку с отдельными коммитами",
        "instruction": "Внеси любую небольшую правку в код (например, измени текст сообщения при старте программы), сохрани файл, и сделай новый коммит с осмысленным сообщением. Повтори это ещё раз с другой маленькой правкой — у тебя должно получиться минимум 3 коммита суммарно.",
        "prompt": "git add .\ngit commit -m \"Улучшить приветственное сообщение калькулятора\"\ngit push",
        "expected": "На GitHub в разделе Commits видно минимум 3 записи с разными сообщениями и временными метками."
      },
      {
        "step": 7,
        "title": "Попроси ИИ помочь написать README.md",
        "instruction": "Создай файл README.md в папке проекта. Отправь промпт ИИ, вставь результат в файл, затем закоммить и запуш его.",
        "prompt": "Напиши README.md для консольного калькулятора на Python. Включи разделы: что делает программа, какие операции поддерживает, как её запустить (команда python calculator.py), и список известных ограничений (например, работает только с двумя числами за раз).",
        "expected": "На главной странице репозитория на GitHub теперь отображается описание проекта вместо пустой страницы."
      }
    ],
    "test": [
      {
        "q": "В чём ключевое отличие Git от GitHub?",
        "options": [
          "Это два названия одной и той же программы",
          "Git — локальный инструмент отслеживания изменений, GitHub — облачный сервис для хранения и демонстрации Git-репозиториев",
          "GitHub устанавливается на компьютер, а Git работает только в браузере",
          "Git нужен только для Python, а GitHub — для всех остальных языков"
        ],
        "correct": 1,
        "explain": "Git работает локально на твоём компьютере и отслеживает изменения файлов. GitHub — отдельный облачный сервис, который хранит копию твоего Git-репозитория в интернете и даёт доступ другим людям."
      },
      {
        "q": "Расставь в правильном порядке: добавление файлов в коммит, отправка в облако, создание самого снимка изменений.",
        "options": [
          "push → commit → add",
          "add → commit → push",
          "commit → add → push",
          "Порядок не имеет значения"
        ],
        "correct": 1,
        "explain": "Правильный порядок: git add (отметить изменения для коммита) → git commit (зафиксировать снимок локально) → git push (отправить в облако на GitHub)."
      },
      {
        "q": "Какое из commit-сообщений является качественным, согласно принципам урока?",
        "options": [
          "'фикс'",
          "'обновление'",
          "'всякое разное'",
          "'Добавить проверку деления на ноль в калькулятор'"
        ],
        "correct": 3,
        "explain": "Хорошее сообщение конкретно описывает суть сделанного изменения. Абстрактные слова вроде 'фикс' или 'обновление' не несут информации и бесполезны при просмотре истории проекта позже."
      },
      {
        "q": "Для чего нужен файл README.md в репозитории?",
        "options": [
          "Это обязательный технический файл, без которого код не запустится",
          "Он описывает назначение, запуск и ограничения проекта для любого, кто открывает репозиторий",
          "Он автоматически исправляет ошибки в коде",
          "Он нужен только для приватных репозиториев"
        ],
        "correct": 1,
        "explain": "README.md — это 'визитная карточка' проекта: он объясняет человеку (в том числе тебе самому через полгода), что это за проект, как его запустить и какие у него ограничения."
      },
      {
        "q": "Почему важно делать несколько отдельных коммитов, а не один большой в конце работы?",
        "options": [
          "Потому что GitHub ограничивает размер одного коммита",
          "Потому что несколько осмысленных коммитов создают читаемую историю изменений и позволяют точечно откатиться к конкретному этапу работы",
          "Это не имеет значения, один большой коммит полностью равноценен",
          "Потому что иначе Git не будет работать технически"
        ],
        "correct": 1,
        "explain": "Частые осмысленные коммиты создают подробную историю проекта: если что-то ломается, ты можешь точно определить, на каком этапе это произошло, и откатиться именно к нужному моменту, а не ко всему проекту целиком."
      }
    ],
    "glossary": [
      {
        "term": "Git",
        "def": "Программа для локального отслеживания истории изменений файлов проекта."
      },
      {
        "term": "GitHub",
        "def": "Облачный сервис для хранения Git-репозиториев, совместной работы и публикации кода."
      },
      {
        "term": "Репозиторий",
        "def": "Папка проекта, отслеживаемая системой Git (локально) или хранимая на GitHub (в облаке)."
      },
      {
        "term": "Коммит (commit)",
        "def": "Зафиксированный 'снимок' состояния файлов проекта в определённый момент времени, с сопроводительным сообщением."
      },
      {
        "term": "git push",
        "def": "Команда, отправляющая локальные коммиты в удалённый репозиторий (например, на GitHub)."
      },
      {
        "term": "README.md",
        "def": "Файл с описанием проекта на языке Markdown, который GitHub автоматически показывает на главной странице репозитория."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Папка проекта → Commit: снимок → GitHub: копия в сети\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Папка проекта</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Commit: снимок</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">GitHub: копия в</text><text x=\"525.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">сети</text></svg>"
  },
  {
    "id": "m1w4",
    "month": 1,
    "week": 4,
    "title": "Чтение кода и первая отладка",
    "duration": "4–5 часов",
    "goal": "Научиться читать чужой/AI-код построчно, понимать сообщения об ошибках и пройти полный цикл отладки совместно с ИИ.",
    "theory": [
      {
        "heading": "Почему отладка — это 80% реальной работы",
        "text": "У новичков есть иллюзия, что программирование — это в основном написание нового кода. На практике и у опытных разработчиков, и у вайб-кодеров большая часть времени уходит на то, чтобы понять, почему существующий код не работает так, как задумано, и исправить это. Это касается и кода, сгенерированного ИИ: он не идеален и иногда ошибается, особенно если твоя задача была сформулирована нечётко. Поэтому отладка — не признак того, что 'ты делаешь что-то неправильно', а нормальная, предсказуемая часть процесса, которой нужно владеть осознанно.",
        "example": "Даже профессиональные разработчики в среднем тратят больше времени на чтение и исправление существующего кода, чем на написание нового с чистого листа — это общепризнанный факт индустрии, а не исключение для новичков."
      },
      {
        "heading": "Как читать traceback (сообщение об ошибке) в Python",
        "text": "Когда программа на Python 'падает', она выводит traceback — текст, который выглядит пугающе, но на самом деле структурирован и логичен. Самое важное обычно находится в ПОСЛЕДНЕЙ строке: там указан тип ошибки (например, ZeroDivisionError, ValueError, NameError) и короткое описание. Строки выше показывают 'путь', по которому программа дошла до ошибки — какие файлы и какие именно строки были выполнены перед тем, как всё сломалось. Не нужно понимать все строки traceback — начинай читать с конца, с типа ошибки, и двигайся вверх только если нужно понять контекст.",
        "example": "Если ты видишь в конце 'ZeroDivisionError: division by zero' — это прямо говорит: где-то в коде произошло деление на ноль. Тебе не нужно гадать — название ошибки само объясняет суть проблемы."
      },
      {
        "heading": "Рабочий цикл отладки вместе с ИИ",
        "text": "Есть надёжный пошаговый процесс, который работает почти всегда. Шаг 1: воспроизведи ошибку — запусти программу так, чтобы она сломалась тем же образом ещё раз, и убедись, что это не случайность. Шаг 2: скопируй ПОЛНЫЙ текст ошибки (весь traceback, не только последнюю строку) в чат с ИИ вместе с кодом, который её вызвал. Шаг 3: спроси не просто 'исправь', а 'объясни, почему это происходит' — так ты понимаешь причину, а не просто получаешь патч. Шаг 4: внимательно прочитай предложенное исправление и пойми, что именно изменилось и почему это решает проблему. Шаг 5: запусти программу снова и проверь, что ошибка не только исчезла, но и остальная функциональность не сломалась.",
        "example": "Плохой подход: 'не работает, почини'. Хороший подход: 'При запуске этого кода (вставляю код) я получаю эту ошибку (вставляю полный traceback). Объясни, почему это происходит, и предложи исправление'."
      },
      {
        "heading": "Типичные ошибки новичков при отладке с ИИ",
        "text": "Первая ошибка — присылать ИИ только половину сообщения об ошибке или описывать её своими словами вместо копирования точного текста: это лишает ИИ важных деталей. Вторая ошибка — просить 'исправь' без кода, который вызвал проблему: ИИ без контекста не может понять, что сломалось. Третья ошибка — слепо вставлять исправленный код без понимания, что изменилось: если похожая ошибка повторится, ты снова не будешь знать, что делать самостоятельно. Чтение объяснения ИИ — это не лишний шаг, а основная цель всего процесса отладки: ты учишься предсказывать и предотвращать подобные ошибки в будущем.",
        "example": "Если ИИ объяснил, что 'ошибка произошла, потому что переменная ожидала число, а получила текст из input()' — в следующий раз ты сам заметишь потенциальную проблему в похожем коде, даже не обращаясь к ИИ."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Получи 'сломанный' скрипт",
        "instruction": "Попроси ИИ намеренно создать для тебя короткий скрипт на Python с одной конкретной ошибкой, чтобы попрактиковаться в отладке.",
        "prompt": "Напиши для меня короткую программу на Python (10-15 строк), которая запрашивает у пользователя возраст и выводит, через сколько лет ему исполнится 100 лет. Но намеренно вставь в код одну распространённую ошибку (например, работу с типом данных), которую должен научиться находить новичок. Не говори мне, в чём ошибка.",
        "expected": "У тебя есть файл с кодом, который выглядит правдоподобно, но содержит скрытый баг."
      },
      {
        "step": 2,
        "title": "Воспроизведи ошибку",
        "instruction": "Создай файл age.py, вставь туда код, запусти его через терминал и введи любой возраст, когда программа попросит.",
        "prompt": "python age.py",
        "expected": "Программа завершается с ошибкой (traceback) вместо корректного ответа — либо выводит явно неправильный результат."
      },
      {
        "step": 3,
        "title": "Прочитай traceback самостоятельно, прежде чем спрашивать ИИ",
        "instruction": "Найди в тексте ошибки последнюю строку с названием типа ошибки. Запиши в заметке своё предположение: о чём, по-твоему, говорит это сообщение, даже если ты не уверен на 100%.",
        "prompt": null,
        "expected": "У тебя есть письменная гипотеза о причине ошибки, сформулированная ДО обращения к ИИ."
      },
      {
        "step": 4,
        "title": "Отправь ИИ правильно оформленный запрос на отладку",
        "instruction": "Скопируй полностью код и полностью текст ошибки (весь traceback). Отправь по шаблону ниже.",
        "prompt": "При запуске этого кода:\n[вставь сюда полный код файла age.py]\n\nЯ получаю эту ошибку:\n[вставь сюда ПОЛНЫЙ текст traceback]\n\nОбъясни, почему именно это происходит, и предложи исправление с коротким объяснением, что изменилось.",
        "expected": "ИИ даёт объяснение причины (например, 'input() всегда возвращает текст, а не число, поэтому нужно преобразование через int()') и исправленный код."
      },
      {
        "step": 5,
        "title": "Сравни объяснение ИИ со своей гипотезой",
        "instruction": "Сопоставь объяснение ИИ с тем, что ты предположил на шаге 3. Если совпало — отлично, твоя интуиция в чтении ошибок работает. Если не совпало — перечитай объяснение ИИ ещё раз и запиши, в чём была неточность твоей гипотезы.",
        "prompt": null,
        "expected": "Письменное сравнение гипотезы и реального объяснения — ключевой момент обучения на этой неделе."
      },
      {
        "step": 6,
        "title": "Примени исправление и протестируй повторно",
        "instruction": "Вставь исправленный код в файл и запусти снова с тем же вводом, который раньше вызывал ошибку.",
        "prompt": "python age.py",
        "expected": "Программа теперь корректно выводит результат без ошибок."
      },
      {
        "step": 7,
        "title": "Итоговая доработка: объедини весь месяц в одно приложение",
        "instruction": "Возьми свой калькулятор (недели 1-2) и доработай его до небольшого приложения: to-do список или простой квиз (на выбор), с сохранением минимум 3 задач/вопросов. Попроси ИИ помочь спроектировать и написать эту версию, затем самостоятельно найди в ней минимум один баг (протестируй граничные случаи: пустой ввод, несуществующий номер и т.п.) и исправь его по изученному циклу отладки.",
        "prompt": "Доработай мой текущий проект в простой консольный to-do список: добавление задачи, просмотр всех задач, отметка задачи как выполненной, удаление задачи. Данные можно хранить в памяти программы (без сохранения в файл — это будет в следующем месяце). Дай полный код.",
        "expected": "У тебя есть рабочее приложение с базовыми функциями to-do списка."
      },
      {
        "step": 8,
        "title": "Запушь финальную версию месяца на GitHub",
        "instruction": "Сделай коммит с итоговой версией, обнови README.md с помощью ИИ, чтобы оно описывало уже to-do список, а не просто калькулятор, и запушь изменения.",
        "prompt": "git add .\ngit commit -m \"Добавить to-do список, исправить баг с обработкой пустого ввода\"\ngit push",
        "expected": "На GitHub отображается актуальная версия проекта с обновлённым README и чистой историей коммитов за весь месяц."
      }
    ],
    "test": [
      {
        "q": "С какой части traceback лучше всего начинать чтение сообщения об ошибке?",
        "options": [
          "С самой первой строки",
          "С середины сообщения",
          "С последней строки, где указан тип ошибки и короткое описание",
          "Traceback нужно читать только целиком одновременно, иначе не поймёшь"
        ],
        "correct": 2,
        "explain": "Последняя строка traceback обычно содержит тип ошибки (например, ValueError) и краткое описание сути проблемы — это самая информативная часть сообщения для начала диагностики."
      },
      {
        "q": "Какой из запросов к ИИ по отладке составлен правильно, согласно изученному циклу?",
        "options": [
          "'Не работает, почини'",
          "'Выдаёт ошибку где-то'",
          "'При запуске вот этого кода (код приложен) я получаю эту ошибку (полный traceback приложен). Объясни причину и предложи исправление.'",
          "'Напиши код заново'"
        ],
        "correct": 2,
        "explain": "Качественный запрос по отладке включает полный код, полный текст ошибки и явную просьбу объяснить причину, а не просто 'исправить' без понимания."
      },
      {
        "q": "Почему важно читать объяснение ИИ о причине ошибки, а не просто вставлять исправленный код?",
        "options": [
          "Это не важно, достаточно, чтобы код заработал",
          "Понимание причины ошибки позволяет предсказывать и предотвращать похожие ошибки в будущем без помощи ИИ",
          "Объяснение нужно только для составления отчётов",
          "ИИ всегда даёт неверные объяснения, их можно игнорировать"
        ],
        "correct": 1,
        "explain": "Главная цель отладки в этом курсе — не просто получить рабочий код, а развить способность самостоятельно распознавать природу подобных ошибок в дальнейшем."
      },
      {
        "q": "Какая характерная ошибка возникает при попытке использовать результат input() как число без преобразования типа?",
        "options": [
          "SyntaxError",
          "ZeroDivisionError",
          "TypeError или похожая ошибка, связанная с несовместимостью текста и числа в операции",
          "Программа всегда работает корректно без преобразования"
        ],
        "correct": 2,
        "explain": "input() в Python всегда возвращает текст (строку), даже если пользователь ввёл цифры. Если использовать результат напрямую в математической операции без преобразования через int() или float(), возникнет ошибка несовместимости типов."
      },
      {
        "q": "Что из перечисленного — правильное описание итогового мини-проекта месяца 1?",
        "options": [
          "Просто показать ИИ идею приложения, без собственного тестирования",
          "Доработать калькулятор до простого приложения (to-do/квиз), самостоятельно найти и исправить минимум один баг через изученный цикл отладки, и опубликовать итог на GitHub с обновлённым README",
          "Написать приложение с нуля без использования навыков предыдущих недель",
          "Создать приложение, но не публиковать его на GitHub"
        ],
        "correct": 1,
        "explain": "Итоговое задание месяца объединяет все навыки: постановку задачи ИИ, Git/GitHub, чтение кода и цикл отладки — именно это закрепляет связность программы курса."
      }
    ],
    "glossary": [
      {
        "term": "Traceback",
        "def": "Текст сообщения об ошибке в Python, показывающий тип ошибки и путь выполнения кода до момента сбоя."
      },
      {
        "term": "ZeroDivisionError",
        "def": "Ошибка Python, возникающая при попытке разделить число на ноль."
      },
      {
        "term": "TypeError",
        "def": "Ошибка Python, возникающая при попытке выполнить операцию между несовместимыми типами данных (например, текст и число)."
      },
      {
        "term": "Отладка (debugging)",
        "def": "Процесс поиска и исправления причины некорректной работы программы."
      },
      {
        "term": "Воспроизведение ошибки",
        "def": "Повторный запуск программы в тех же условиях, чтобы убедиться, что ошибка стабильно повторяется, а не была случайностью."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Прочитать код → Запустить → Найти причину → Исправить\"><line x1=\"368.6\" y1=\"68.0\" x2=\"419.2\" y2=\"100.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"368.6\" y1=\"130.0\" x2=\"320.0\" y2=\"162.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"269.4\" y1=\"130.0\" x2=\"220.8\" y2=\"100.00000000000001\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"269.4\" y1=\"68.0\" x2=\"320.0\" y2=\"38.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><rect x=\"245.0\" y=\"16.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320.0\" y=\"43.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Прочитать код</text><rect x=\"344.2\" y=\"78.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"419.2\" y=\"105.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Запустить</text><rect x=\"245.0\" y=\"140.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"167.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Найти причину</text><rect x=\"145.8\" y=\"78.00000000000001\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"220.8\" y=\"105.00000000000001\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Исправить</text></svg>"
  },
  {
    "id": "m2w1",
    "month": 2,
    "week": 1,
    "title": "Анатомия хорошего промпта",
    "duration": "4–5 часов",
    "goal": "Освоить универсальную структуру промпта (роль-контекст-задача-формат-ограничения) и научиться превращать хаотичные запросы в чёткие ТЗ.",
    "theory": [
      {
        "heading": "Промпт-инжиниринг — это не магия, а инженерная дисциплина",
        "text": "Многие думают, что существуют 'секретные слова', которые заставляют ИИ работать лучше. На самом деле промпт-инжиниринг — это та же самая инженерия, что и декомпозиция задачи из месяца 1, только применённая системно и осознанно. Хороший промпт — это не удачная случайная формулировка, а результат применения понятной структуры, которую можно повторить для любой задачи. Освоив эту структуру один раз, ты будешь формулировать качественные запросы почти автоматически, вместо того чтобы каждый раз 'интуитивно угадывать', как лучше спросить.",
        "example": "Это как разница между человеком, который готовит 'на глаз' и иногда получает вкусно, а иногда нет, и шеф-поваром, который использует проверенную технологию приготовления — результат предсказуем каждый раз."
      },
      {
        "heading": "Пять элементов структуры промпта: Роль → Контекст → Задача → Формат → Ограничения",
        "text": "РОЛЬ — кем должна 'притвориться' модель (экспертом в какой области, с каким стилем). Это задаёт тон и глубину ответа. КОНТЕКСТ — вся важная информация о ситуации: для кого это, зачем, что уже известно или сделано. ЗАДАЧА — конкретное действие, которое должна выполнить модель, сформулированное как можно точнее. ФОРМАТ — в каком виде должен быть результат (список, таблица, код с комментариями, объём текста). ОГРАНИЧЕНИЯ — что нельзя делать, или особые условия (не используй жаргон, не превышай 100 слов, не предлагай платные решения). Не все пять элементов нужны в каждом промпте, но держать эту структуру в голове — значит не забывать важные детали.",
        "example": "РОЛЬ: 'Ты опытный Python-разработчик'. КОНТЕКСТ: 'Я новичок, делаю консольное приложение для учёта расходов'. ЗАДАЧА: 'Напиши функцию, которая добавляет новую трату в список'. ФОРМАТ: 'Дай код с комментариями на русском'. ОГРАНИЧЕНИЯ: 'Не используй внешние библиотеки, только стандартный Python'."
      },
      {
        "heading": "Почему 'бытовые' промпты дают непредсказуемый результат",
        "text": "Когда мы формулируем просьбы в повседневной жизни, мы полагаемся на общий контекст, который собеседник-человек восстанавливает сам (он видит твоё лицо, знает ситуацию, может переспросить). Нейросеть не видит ничего, кроме текста, который ты напечатал. Фраза 'сделай расчёт красивым' для человека, который видит экран, понятна, но для ИИ 'красивый' — абсолютно неопределённое слово, которое можно интерпретировать десятками способов. Чем более 'бытовая' и расплывчатая формулировка — тем больше вариативность и непредсказуемость результата.",
        "example": "'Сделай отчёт лучше' → ИИ не знает, что значит 'лучше': короче, подробнее, с графиками, более формально? 'Сократи отчёт до 200 слов, оставь только ключевые выводы и убери технические термины' → результат предсказуем."
      },
      {
        "heading": "Итеративность: промпт — это не одноразовый выстрел, а начало диалога",
        "text": "Важно отказаться от ожидания, что правильный промпт с первого раза даст идеальный результат. На практике промпт-инжиниринг — это итеративный процесс: ты формулируешь первый структурированный запрос, получаешь результат, оцениваешь его и уточняешь. Это нормально и даже является лучшей практикой, а не признаком того, что ты 'плохо спросил'. Структура из этого урока снижает количество итераций, но не отменяет их полностью.",
        "example": "Даже профессиональные промпт-инженеры обычно делают 2-4 итерации уточнения для сложных задач — это стандартная рабочая практика, а не исключение."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Собери 5 своих старых хаотичных промптов",
        "instruction": "Вспомни или найди в истории переписки с ИИ (из месяца 1) минимум 5 запросов, которые были сформулированы быстро и нечётко (например, 'сделай калькулятор лучше', 'почини это'). Запиши их в заметку как список.",
        "prompt": null,
        "expected": "Список из 5 реальных промптов, которые ты раньше отправлял без структуры."
      },
      {
        "step": 2,
        "title": "Перепиши каждый промпт по структуре Роль-Контекст-Задача-Формат-Ограничения",
        "instruction": "Для каждого из 5 промптов из шага 1 составь новую версию, явно продумав все 5 элементов структуры (даже если какой-то элемент окажется коротким). Запиши рядом со старой версией.",
        "prompt": "Пример для одного из твоих промптов: Роль: 'Ты опытный Python-наставник для новичков'. Контекст: 'У меня есть консольный калькулятор, вот его код: [вставь код]'. Задача: 'Добавь обработку ситуации, когда пользователь вводит не число, а текст'. Формат: 'Дай только изменённые части кода с пояснением, что изменилось'. Ограничения: 'Не меняй остальную логику программы'.",
        "expected": "5 пар промптов: 'было' и 'стало' по структуре."
      },
      {
        "step": 3,
        "title": "Прогони оба варианта и сравни результаты",
        "instruction": "Отправь ИИ сначала старую (хаотичную) версию промпта, зафиксируй ответ. Затем в новом чате отправь структурированную версию того же запроса, зафиксируй ответ.",
        "prompt": null,
        "expected": "Для каждой из 5 пар у тебя есть два разных ответа ИИ, готовых к сравнению."
      },
      {
        "step": 4,
        "title": "Составь сравнительную таблицу",
        "instruction": "Создай таблицу (можно в заметке или в Google Sheets/Excel) с колонками: Задача / Старый промпт дал / Новый промпт дал / Что конкретно улучшилось. Заполни по всем 5 парам.",
        "prompt": null,
        "expected": "Таблица из 5 строк, наглядно показывающая разницу в качестве и предсказуемости результата."
      },
      {
        "step": 5,
        "title": "Напиши для себя 'универсальный шаблон' на будущее",
        "instruction": "На основе проделанной работы сформулируй короткий шаблон-заготовку промпта, который ты будешь адаптировать для разных задач в будущем.",
        "prompt": "Роль: Ты [кто]. Контекст: [что уже есть/что я делаю]. Задача: [конкретное действие]. Формат ответа: [вид и объём]. Ограничения: [что нельзя/что учесть].",
        "expected": "Готовый шаблон, сохранённый в заметках, который можно использовать как чек-лист перед отправкой любого важного промпта."
      }
    ],
    "test": [
      {
        "q": "Какие пять элементов входят в структуру качественного промпта, изученную в этом уроке?",
        "options": [
          "Имя, Возраст, Цель, Бюджет, Срок",
          "Роль, Контекст, Задача, Формат, Ограничения",
          "Вопрос, Ответ, Проверка, Итог, Вывод",
          "Код, Комментарий, Тест, Ошибка, Исправление"
        ],
        "correct": 1,
        "explain": "Структура Роль-Контекст-Задача-Формат-Ограничения — универсальный каркас, который помогает не забыть важные детали при формулировании запроса к ИИ."
      },
      {
        "q": "Почему фраза 'сделай отчёт лучше' считается слабым промптом?",
        "options": [
          "Потому что ИИ не умеет работать с отчётами",
          "Слово 'лучше' крайне неопределённо и может означать десятки разных вещей для модели, не видящей контекст, который видишь ты",
          "Потому что промпт слишком короткий по количеству слов",
          "Потому что в нём нет упоминания конкретной модели ИИ"
        ],
        "correct": 1,
        "explain": "Нейросеть не видит невербальный контекст, доступный собеседнику-человеку. Расплывчатые оценочные слова без конкретики (лучше, красивее) оставляют слишком много интерпретаций."
      },
      {
        "q": "Что из перечисленного правильно описывает идею итеративности промптинга?",
        "options": [
          "Правильный промпт всегда должен дать идеальный результат с первой попытки, иначе ты сделал что-то неправильно",
          "Уточнение и доработка промпта после первого ответа — нормальная и ожидаемая часть рабочего процесса",
          "Итеративность нужна только для очень сложных промптов, для простых задач она не применяется",
          "Чем больше итераций, тем хуже работает промпт"
        ],
        "correct": 1,
        "explain": "Даже профессионалы промпт-инжиниринга регулярно уточняют первый результат через 2-4 итерации — это рабочая норма, а не признак неудачи."
      },
      {
        "q": "В структуре промпта, какой элемент отвечает за указание того, ЧТО НЕЛЬЗЯ делать или какие особые условия нужно учесть?",
        "options": [
          "Роль",
          "Контекст",
          "Формат",
          "Ограничения"
        ],
        "correct": 3,
        "explain": "Ограничения явно указывают запреты или особые условия (например, 'не используй внешние библиотеки', 'не превышай 100 слов'), сужая пространство возможных ответов модели."
      },
      {
        "q": "Что из перечисленного ближе всего к хорошо структурированному промпту?",
        "options": [
          "'Напиши что-нибудь по теме истории'",
          "'Ты историк, специализирующийся на XX веке. Я готовлю короткую презентацию для школьников. Объясни причины начала Второй мировой войны. Формат: 5 пунктов списком, простым языком, без сложных терминов, не больше 150 слов.'",
          "'История сложная тема, расскажи про неё'",
          "'Дай информацию'"
        ],
        "correct": 1,
        "explain": "Второй вариант явно задаёт роль (историк), контекст (презентация для школьников), задачу (причины войны), формат (5 пунктов, простой язык) и ограничение (до 150 слов) — это пример применения полной структуры."
      }
    ],
    "glossary": [
      {
        "term": "Промпт-инжиниринг",
        "def": "Системный подход к формулированию запросов к нейросети для получения предсказуемого качественного результата."
      },
      {
        "term": "Структура Роль-Контекст-Задача-Формат-Ограничения",
        "def": "Универсальный каркас построения промпта: кто модель, какая ситуация, что сделать, в каком виде, что учесть/запретить."
      },
      {
        "term": "Итеративное уточнение",
        "def": "Процесс последовательного улучшения промпта и результата через несколько раундов диалога с ИИ."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Роль → Контекст → Задача → Формат ответа\"><rect x=\"180\" y=\"28.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320\" y=\"48.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Роль</text><rect x=\"180\" y=\"66.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320\" y=\"86.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Контекст</text><rect x=\"180\" y=\"104.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320\" y=\"124.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Задача</text><rect x=\"180\" y=\"142.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"320\" y=\"162.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Формат ответа</text></svg>"
  },
  {
    "id": "m2w2",
    "month": 2,
    "week": 2,
    "title": "Техники промптинга: few-shot, chain-of-thought, декомпозиция",
    "duration": "4–5 часов",
    "goal": "Освоить три продвинутые техники промптинга и понять, когда какую использовать для сложных задач.",
    "theory": [
      {
        "heading": "Few-shot промптинг: показывай пример вместо описания",
        "text": "Few-shot (англ. 'несколько примеров') — техника, когда вместо подробного словесного описания желаемого формата ты просто даёшь модели 1-3 примера того, как должен выглядеть результат, и просишь сделать так же с новыми данными. Это особенно эффективно, когда формат сложно описать словами, но легко показать. Модель 'считывает' паттерн из примера и воспроизводит его структуру для нового случая.",
        "example": "Вместо 'форматируй дату в читаемом виде' покажи: 'Пример: вход 2024-03-15 → выход 15 марта 2024 года. Теперь сделай то же самое для: 2025-11-02'. Модель поймёт паттерн преобразования без долгого словесного объяснения правил."
      },
      {
        "heading": "Chain-of-thought: просим модель рассуждать по шагам",
        "text": "Chain-of-thought (цепочка рассуждений) — техника, при которой ты просишь модель explicitly показать ход рассуждения перед финальным ответом, а не выдавать результат сразу. Это особенно полезно для задач, где нужна логика в несколько шагов (математика, анализ кода, принятие решения с несколькими факторами). Когда модель 'думает вслух', вероятность логической ошибки снижается, а тебе проще увидеть, на каком шаге рассуждение пошло не туда, если результат всё же неверный.",
        "example": "Вместо 'сколько будет 15% от 340, увеличенное на 20' — попроси: 'Решай по шагам: сначала посчитай 15% от 340, затем увеличь результат на 20%, и на каждом шаге покажи промежуточное значение'."
      },
      {
        "heading": "Декомпозиция через цепочку промптов (prompt chaining)",
        "text": "Если задача слишком объёмна и комплексна для одного запроса, её можно разбить на цепочку отдельных промптов, где результат одного шага становится входом для следующего. Это отличается от chain-of-thought: там модель рассуждает внутри одного ответа, а здесь ты сам управляешь процессом между несколькими отдельными запросами, проверяя и корректируя каждый промежуточный результат. Такой подход даёт тебе больше контроля над сложным процессом и позволяет вовремя заметить и исправить отклонение, не дожидаясь финального результата.",
        "example": "Задача 'создать план мини-сайта' разбивается на цепочку: Промпт 1 — 'предложи структуру страниц сайта' → проверяешь и утверждаешь → Промпт 2 — 'для страницы Главная предложи контентные блоки, учитывая структуру выше' → Промпт 3 — 'напиши текст для первого блока'."
      },
      {
        "heading": "Когда какую технику использовать",
        "text": "Few-shot лучше всего работает, когда важен конкретный формат вывода (структура данных, стиль текста, конкретный паттерн преобразования). Chain-of-thought лучше всего работает для задач с внутренней логикой и несколькими шагами рассуждения внутри одного ответа (расчёты, анализ, многофакторные решения). Декомпозиция через цепочку промптов лучше всего работает для крупных многоэтапных проектов, где важно контролировать и корректировать каждый этап отдельно, а не доверять всё одному большому запросу. Эти техники не взаимоисключающие — их можно комбинировать в рамках одной большой задачи.",
        "example": "Создание приложения: сначала декомпозиция (цепочка промптов по архитектуре), внутри каждого шага для сложной логики — chain-of-thought (рассуждение по шагам), а для форматирования вывода данных — few-shot примеры."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Выбери сложную задачу для экспериментов",
        "instruction": "Возьми задачу: 'Спроектировать структуру простого личного блога' (разделы сайта, что на каждой странице, примерный список статей для старта). Это будет твой тестовый полигон для всех трёх техник.",
        "prompt": null,
        "expected": "Чёткая формулировка задачи, записанная в заметке."
      },
      {
        "step": 2,
        "title": "Способ 1: один большой промпт",
        "instruction": "Отправь задачу ИИ одним большим запросом без разбивки на шаги. Зафиксируй результат.",
        "prompt": "Спроектируй структуру простого личного блога: какие разделы/страницы нужны, что должно быть на главной странице, предложи 5 тематических статей для старта с короткими заголовками.",
        "expected": "Один развёрнутый ответ, который может быть неравномерным по глубине (например, подробный про разделы, но поверхностный про статьи)."
      },
      {
        "step": 3,
        "title": "Способ 2: с few-shot примером",
        "instruction": "Дай модели пример формата, в котором ты хочешь получить список статей, прежде чем просить сгенерировать свой список.",
        "prompt": "Вот пример формата, в котором мне нужны заголовки статей для блога: '1. Как я начал путь в программировании без опыта — личная история для новичков'. Теперь в этом же формате (номер, заголовок, короткое пояснение через тире) предложи 5 заголовков статей для блога про изучение ИИ-инструментов новичками.",
        "expected": "Список статей точно в заданном формате, без отклонений в структуре."
      },
      {
        "step": 4,
        "title": "Способ 3: цепочка из 3-4 промптов",
        "instruction": "Разбей задачу на последовательные промпты, где каждый следующий использует результат предыдущего.",
        "prompt": "Промпт 1: 'Предложи список из 4-5 основных разделов для личного блога новичка в IT, без подробностей, просто список'.\nПромпт 2 (после ответа): 'Для раздела [название из ответа] предложи, какие 3 конкретных подраздела/рубрики там должны быть'.\nПромпт 3: 'Теперь на основе всей этой структуры предложи 5 заголовков первых статей, которые логично закрывают этот раздел'.",
        "expected": "Более связная и продуманная структура, так как каждый шаг строился на предыдущем, уже проверенном тобой результате."
      },
      {
        "step": 5,
        "title": "Chain-of-thought на отдельном примере с расчётом",
        "instruction": "Попробуй технику рассуждения по шагам на задаче с логикой/расчётом, не связанной с блогом — чтобы ощутить разницу в типах задач, где нужна каждая техника.",
        "prompt": "У меня есть список трат за месяц: продукты 12000, транспорт 3000, подписки 1500, непредвиденные 4000. Посчитай, сколько процентов бюджета ушло на подписки, если общий бюджет на месяц был 25000. Решай по шагам, показывая промежуточные вычисления перед финальным ответом.",
        "expected": "Ответ, где видно пошаговое рассуждение (сначала сумма трат, потом процент), а не просто голая финальная цифра."
      },
      {
        "step": 6,
        "title": "Сравни все результаты и зафиксируй выводы",
        "instruction": "Составь короткую таблицу: Техника / Что получилось / Плюсы / Минусы для твоей конкретной задачи с блогом (и отдельно отметь впечатление от chain-of-thought с расчётом).",
        "prompt": null,
        "expected": "Письменный вывод о том, какая техника дала самый управляемый и качественный результат для задачи с несколькими этапами, и почему."
      }
    ],
    "test": [
      {
        "q": "Что из перечисленного — точное описание few-shot промптинга?",
        "options": [
          "Просить модель решить задачу за несколько секунд",
          "Давать модели один-несколько примеров желаемого результата, чтобы она воспроизвела паттерн на новых данных",
          "Отправлять несколько промптов одновременно в разные модели",
          "Ограничивать длину ответа модели несколькими словами"
        ],
        "correct": 1,
        "explain": "Few-shot — техника, в которой вместо словесного описания формата модели показывают конкретные примеры, по аналогии с которыми она строит ответ на новый случай."
      },
      {
        "q": "Для какого типа задач лучше всего подходит техника chain-of-thought?",
        "options": [
          "Для задач с внутренней логикой и несколькими шагами рассуждения (расчёты, многофакторный анализ)",
          "Только для задач, связанных с написанием стихов",
          "Для задач, где формат вывода важнее содержания",
          "Chain-of-thought не влияет на качество ответа"
        ],
        "correct": 0,
        "explain": "Chain-of-thought особенно полезна там, где нужно выстроить логическую цепочку из нескольких шагов — модель, рассуждающая вслух, реже допускает логические ошибки и легче проверяется."
      },
      {
        "q": "Чем декомпозиция через цепочку промптов (prompt chaining) отличается от chain-of-thought?",
        "options": [
          "Это полностью одинаковые техники с разными названиями",
          "В prompt chaining ты сам управляешь несколькими отдельными запросами, проверяя каждый шаг, а chain-of-thought — это рассуждение модели внутри ОДНОГО ответа",
          "Prompt chaining работает только с изображениями",
          "Chain-of-thought требует участия нескольких разных моделей одновременно"
        ],
        "correct": 1,
        "explain": "Prompt chaining — это серия отдельных запросов, где ты контролируешь и корректируешь каждый промежуточный результат. Chain-of-thought — рассуждение модели по шагам внутри одного единственного ответа."
      },
      {
        "q": "В каком случае лучше всего применить именно декомпозицию через цепочку промптов, а не один большой запрос?",
        "options": [
          "Когда задача очень простая и короткая",
          "Когда задача крупная, многоэтапная, и важно контролировать и корректировать каждый этап отдельно",
          "Когда нужен ответ максимально быстро, без промежуточных проверок",
          "Декомпозиция никогда не даёт преимущества по сравнению с одним промптом"
        ],
        "correct": 1,
        "explain": "Декомпозиция через цепочку промптов особенно ценна для крупных проектов: она позволяет вовремя заметить отклонение от нужного результата на промежуточном шаге, а не переделывать всё после получения финального ответа."
      },
      {
        "q": "Могут ли few-shot, chain-of-thought и декомпозиция использоваться совместно в рамках одной большой задачи?",
        "options": [
          "Нет, можно использовать только одну технику за раз",
          "Да, эти техники не взаимоисключающие и часто комбинируются в сложных проектах",
          "Их можно комбинировать только при работе с изображениями",
          "Комбинирование техник всегда ухудшает результат"
        ],
        "correct": 1,
        "explain": "На практике сложные проекты часто используют все три техники вместе: декомпозиция задаёт общую структуру процесса, chain-of-thought помогает с логикой внутри отдельных шагов, а few-shot — с точностью формата вывода."
      }
    ],
    "glossary": [
      {
        "term": "Few-shot промптинг",
        "def": "Техника, при которой модели дают примеры желаемого результата вместо (или в дополнение к) словесного описания."
      },
      {
        "term": "Chain-of-thought (цепочка рассуждений)",
        "def": "Техника, при которой модель просят показать пошаговое рассуждение перед финальным ответом в рамках одного ответа."
      },
      {
        "term": "Prompt chaining (цепочка промптов)",
        "def": "Разбиение сложной задачи на серию последовательных отдельных запросов, где результат одного становится входом для следующего."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Пример (few-shot) → Рассуждение по шагам → Декомпозиция\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Пример (few-shot)</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Рассуждение по</text><text x=\"320.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">шагам</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Декомпозиция</text></svg>"
  },
  {
    "id": "m2w3",
    "month": 2,
    "week": 3,
    "title": "Сравнение моделей: ChatGPT, Claude, Gemini",
    "duration": "4–5 часов",
    "goal": "Понять сильные и слабые стороны разных семейств моделей и научиться осознанно выбирать модель под конкретный тип задачи.",
    "theory": [
      {
        "heading": "Зачем сравнивать модели, если можно выбрать одну и пользоваться ей всегда",
        "text": "Разные семейства нейросетей обучались на разных данных, с разными приоритетами и архитектурными решениями, поэтому они систематически различаются в сильных сторонах. Это не значит, что одна модель 'лучше' другой в абсолютном смысле — они лучше в разных задачах. Профессиональный вайб-кодер не привязывается religиозно к одной модели, а выбирает инструмент под задачу, как плотник выбирает между молотком и отвёрткой, а не пытается молотком закручивать шурупы.",
        "example": "Модель может быть прекрасна в творческом написании текстов, но слабее в точных многошаговых математических рассуждениях — или наоборот. Узнать это можно только через практическое сравнение, а не по рекламным обещаниям."
      },
      {
        "heading": "Общие наблюдаемые тенденции (на момент обучения)",
        "text": "Важно понимать: рынок моделей меняется очень быстро, и через полгода-год конкретные сильные стороны могут измениться с выходом новых версий. Но общий ПРИНЦИП различий остаётся актуальным. Модели семейства Claude (Anthropic) часто отмечают за качественную работу с кодом, точное следование сложным многочастным инструкциям и аккуратность в сложных логических рассуждениях. Модели семейства ChatGPT/GPT (OpenAI) часто ценят за широту применения, богатую экосистему интеграций и сильные результаты в творческих и разговорных задачах. Модели Gemini (Google) часто отличаются большим окном контекста (возможностью обработать очень длинные документы целиком) и глубокой интеграцией с продуктами Google. Твоя задача — не запомнить эти факты навечно, а усвоить привычку: проверять актуальное положение дел самостоятельно и тестировать, а не слепо доверять репутации.",
        "example": "Если тебе нужно проанализировать очень длинный документ (сотни страниц) целиком за один запрос — это сценарий, где большое окно контекста критично важно, и стоит проверить модель, которая славится именно этим."
      },
      {
        "heading": "Как тестировать модели объективно, а не 'на глазок'",
        "text": "Чтобы сравнение было честным, нужно использовать ОДИНАКОВЫЙ промпт для всех моделей, без корректировок между попытками, и оценивать результат по заранее заданным критериям, а не по общему впечатлению 'понравилось/не понравилось'. Критерии могут включать: точность (нет ли фактических ошибок), полноту (отвечено на все части вопроса), формат (соответствует ли запрошенной структуре), практическую применимость (можно ли сразу использовать результат без доработки). Запись результатов тестирования в таблицу — это именно то, что превращает субъективное 'мне больше понравился этот ответ' в воспроизводимый вывод, на который можно опираться в будущем.",
        "example": "Если ты тестируешь генерацию кода, критерий 'запускается без ошибок с первого раза' — объективный и легко проверяемый, в отличие от размытого 'код выглядит хорошо'."
      },
      {
        "heading": "Правило курса: не привязываться к одной модели навечно",
        "text": "Поскольку индустрия ИИ развивается очень быстро, модель, которая была лучшей полгода назад, может отстать от конкурентов сегодня. Хорошая практика — периодически (например, раз в несколько месяцев) повторно тестировать свои типовые задачи на актуальных версиях разных моделей, чтобы не работать по привычке с неоптимальным инструментом. Этот урок дал тебе не окончательный 'рейтинг', а МЕТОД сравнения, который остаётся актуальным независимо от того, какие конкретно модели выйдут в будущем.",
        "example": "Разработчик, который открыт к пересмотру своего инструментария, экономит часы работы в долгосрочной перспективе по сравнению с тем, кто использует только одну модель 'по привычке', не проверяя альтернативы."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Подготовь доступ минимум к двум разным моделям",
        "instruction": "Убедись, что у тебя есть доступ (бесплатный или платный) минимум к двум разным семействам моделей из: ChatGPT, Claude, Gemini. Если нет аккаунта в одной из них — зарегистрируйся на бесплатный тариф.",
        "prompt": null,
        "expected": "Открыты минимум два чата с разными моделями в соседних вкладках браузера."
      },
      {
        "step": 2,
        "title": "Задача 1 (код): напиши функцию и прогони через обе модели",
        "instruction": "Отправь идентичный промпт обеим моделям без каких-либо изменений в формулировке.",
        "prompt": "Напиши функцию на Python, которая принимает список чисел и возвращает отдельно список чётных и список нечётных чисел в виде словаря с ключами 'even' и 'odd'. Добавь обработку случая, если список пустой. Дай код с комментариями.",
        "expected": "Два ответа с кодом, которые можно запустить и сравнить на идентичность поведения и качество комментариев."
      },
      {
        "step": 3,
        "title": "Задача 2 (объяснение концепции простыми словами)",
        "instruction": "Отправь второй идентичный промпт обеим моделям — на объяснение, а не на код.",
        "prompt": "Объясни простыми словами, без технического жаргона, что такое API, как если бы ты объяснял человеку, который вообще не связан с программированием. Используй одну понятную аналогию из повседневной жизни. Не больше 120 слов.",
        "expected": "Два объяснения, которые можно сравнить по простоте языка, точности аналогии и соблюдению лимита слов."
      },
      {
        "step": 4,
        "title": "Задача 3 (брейнсторм/генерация идей)",
        "instruction": "Отправь третий идентичный промпт на творческую генерацию вариантов.",
        "prompt": "Предложи 7 идей мини-проектов для начинающего вайб-кодера, которые можно реализовать за один вечер (2-3 часа) с помощью ИИ-ассистента. Для каждой идеи — одна строка с названием и кратким описанием.",
        "expected": "Два списка идей, которые можно сравнить по оригинальности, реализуемости и разнообразию."
      },
      {
        "step": 5,
        "title": "Запусти код из задачи 1 на практике",
        "instruction": "Не просто читай код — реально запусти оба варианта кода через терминал и проверь на 2-3 тестовых списках чисел, включая пустой список.",
        "prompt": "python test_function.py",
        "expected": "Ты видишь, какой из двух вариантов кода реально работает без ошибок с первого раза на всех тестах, включая пустой список."
      },
      {
        "step": 6,
        "title": "Заполни сравнительную таблицу по критериям",
        "instruction": "Составь таблицу: Задача / Модель А / Модель Б / Какая лучше и почему (по критериям точность, полнота, формат, применимость без доработки).",
        "prompt": null,
        "expected": "Таблица из 3 строк (по одной на задачу) с объективным обоснованным выводом для каждой."
      },
      {
        "step": 7,
        "title": "Сформулируй для себя персональное правило выбора модели",
        "instruction": "На основе результатов таблицы сформулируй короткое правило: 'Для задач типа X я буду использовать модель А, для задач типа Y — модель Б', и сохрани это в заметках как рабочий ориентир (с пометкой, что это актуально на сегодняшнюю дату и стоит периодически перепроверять).",
        "prompt": null,
        "expected": "Личное правило выбора модели, записанное письменно, с датой проверки."
      }
    ],
    "test": [
      {
        "q": "Почему в этом уроке не даётся однозначный 'рейтинг лучшей модели'?",
        "options": [
          "Потому что все модели абсолютно одинаковы по качеству",
          "Потому что модели развиваются очень быстро, и конкретный рейтинг быстро устаревает — важнее усвоить метод сравнения",
          "Потому что сравнение моделей запрещено правилами использования",
          "Потому что это не относится к теме курса"
        ],
        "correct": 1,
        "explain": "Индустрия ИИ меняется очень быстро — модель-лидер может смениться за несколько месяцев. Поэтому курс учит воспроизводимому МЕТОДУ сравнения, который не устареет, а не конкретному списку 'какая модель лучше'."
      },
      {
        "q": "Что делает сравнение моделей объективным, а не субъективным 'на глазок'?",
        "options": [
          "Использование разных промптов для каждой модели, подогнанных под её особенности",
          "Использование идентичного промпта для всех моделей и оценка по заранее заданным конкретным критериям",
          "Опрос друзей, какая модель им больше нравится по названию",
          "Выбор модели по тому, какая компания её выпустила"
        ],
        "correct": 1,
        "explain": "Честное сравнение требует одинаковых условий (идентичный промпт) и конкретных проверяемых критериев (точность, полнота, формат, применимость), а не общего впечатления."
      },
      {
        "q": "Какой из примеров — лучший кандидат для объективного критерия сравнения кода от разных моделей?",
        "options": [
          "'Код выглядит красиво'",
          "'Мне больше понравился стиль'",
          "'Код запускается без ошибок на всех тестовых случаях, включая пустой список'",
          "'Код написан на более популярном языке'"
        ],
        "correct": 2,
        "explain": "Это проверяемый объективный критерий: можно реально запустить код и зафиксировать факт — работает он на всех тестах или нет, в отличие от субъективных оценок 'красиво' или 'понравилось'."
      },
      {
        "q": "Согласно уроку, что лучше всего описывает правильный подход вайб-кодера к выбору модели?",
        "options": [
          "Использовать всегда только одну модель, независимо от типа задачи",
          "Выбирать модель под конкретный тип задачи, как инструмент под работу, и периодически пересматривать выбор",
          "Менять модель каждый день случайным образом",
          "Выбор модели не имеет значения для результата"
        ],
        "correct": 1,
        "explain": "Профессиональный подход — осознанный выбор инструмента под задачу, с готовностью пересматривать этот выбор по мере развития рынка моделей, а не слепая привязанность к одному инструменту."
      },
      {
        "q": "Зачем тестировать идентичный промпт на разных моделях, а не менять формулировку под особенности каждой?",
        "options": [
          "Чтобы сравнение было честным и показывало разницу именно в возможностях моделей, а не в качестве разных формулировок",
          "Потому что менять формулировку технически невозможно",
          "Это не имеет значения для результата сравнения",
          "Чтобы сэкономить время на написании промптов"
        ],
        "correct": 0,
        "explain": "Если промпты для разных моделей отличаются, становится невозможно понять, разница в результате — это разница в возможностях моделей или разница в качестве самих формулировок запроса."
      }
    ],
    "glossary": [
      {
        "term": "Окно контекста",
        "def": "Максимальный объём текста (измеряемый в токенах), который модель может обработать за один запрос, включая вопрос, историю диалога и ответ."
      },
      {
        "term": "Объективный критерий сравнения",
        "def": "Конкретный проверяемый признак качества результата (например, 'запускается без ошибок'), в отличие от субъективного впечатления."
      },
      {
        "term": "Семейство моделей",
        "def": "Линейка нейросетевых моделей одного разработчика (например, GPT от OpenAI, Claude от Anthropic, Gemini от Google)."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Одна задача → Несколько моделей → Сравнение ответов\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Одна задача</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Несколько моделей</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Сравнение ответов</text></svg>"
  },
  {
    "id": "m2w4",
    "month": 2,
    "week": 4,
    "title": "Оценка и итеративное улучшение ответов ИИ",
    "duration": "4–5 часов",
    "goal": "Научиться критически оценивать ответы ИИ по чек-листу, точечно их улучшать и распознавать галлюцинации модели.",
    "theory": [
      {
        "heading": "Чек-лист качества ответа: 4 оси оценки",
        "text": "Чтобы оценка ответа ИИ не была просто 'нравится/не нравится', полезно проверять его по четырём конкретным осям. Точность — нет ли в ответе фактических ошибок или неверных утверждений. Полнота — ответил ли ИИ на ВСЕ части твоего вопроса, а не только на удобную часть. Формат — соответствует ли структура и объём ответа тому, что ты запрашивал. Применимость — можно ли результат использовать сразу, или он требует серьёзной доработки. Проходя по этим 4 осям каждый раз, когда получаешь важный ответ, ты превращаешь смутное чувство 'что-то не так' в конкретное понимание, что именно нужно улучшить следующим промптом.",
        "example": "Ответ может быть идеально полным и точным, но прийти в виде сплошного абзаца, когда тебе нужен был маркированный список — это проблема именно формата, и исправляется она не переделкой содержания, а точечным уточнением формата."
      },
      {
        "heading": "Что такое 'галлюцинация' ИИ и как её заметить",
        "text": "Галлюцинация — ситуация, когда модель уверенно формулирует информацию, которая звучит правдоподобно, но является неточной или полностью выдуманной (ссылка на несуществующий источник, неверная цифра, несуществующая функция в библиотеке программирования). Проблема в том, что галлюцинации обычно звучат так же уверенно и грамотно, как и верные утверждения — различить их 'по тону ответа' невозможно. Признаки, по которым стоит насторожиться: очень конкретные цифры/даты/названия без указания источника, уверенные утверждения о редкой или узкоспециализированной информации, упоминание функций/методов библиотек, которые ты не можешь сразу проверить.",
        "example": "Если ИИ уверенно утверждает, что в библиотеке Python существует метод list.remove_duplicates() — стоит насторожиться и проверить (в данном случае такого метода не существует, это типичный пример галлюцинации)."
      },
      {
        "heading": "Как просить модель проверять себя",
        "text": "Есть рабочие приёмы снижения риска галлюцинаций. Можно явно попросить модель 'указать уровень уверенности в своём ответе' или 'отдельно пометить, какие факты она знает точно, а какие могут требовать проверки'. Для кода — явно попросить 'указать, если в этом коде используются функции, которые стоит проверить в официальной документации'. Это не устраняет риск галлюцинаций полностью (модель может ошибиться даже в самооценке), но существенно снижает вероятность того, что ты примешь выдумку за факт без всякой проверки.",
        "example": "Промпт 'Объясни, как работает X, и отдельно укажи, есть ли в твоём ответе моменты, в которых ты не полностью уверен' заставляет модель явно выделить зоны потенциального риска, вместо того чтобы выдавать всё единым уверенным потоком."
      },
      {
        "heading": "Точечное уточнение вместо 'переделай всё'",
        "text": "Когда ответ не идеален, новичок часто пишет 'переделай всё заново' — это неэффективно, потому что заставляет модель заново угадывать все детали, включая те, что уже были хороши. Правильный подход — указать КОНКРЕТНО, какая именно ось качества (точность/полнота/формат/применимость) не устроила, и попросить исправить именно её, сохранив остальное. Это экономит время и сохраняет уже удачные части ответа.",
        "example": "Вместо 'сделай по-другому' — 'Оставь содержание как есть, но переформатируй это в таблицу из двух колонок' — модель понимает, что менять, а что не трогать."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Попроси ИИ объяснить незнакомую тебе техническую тему",
        "instruction": "Выбери тему, в которой ты пока не эксперт (например, 'что такое база данных' или 'как работает HTTP-запрос'), и попроси объяснение.",
        "prompt": "Объясни простыми словами, что такое база данных и зачем она нужна программе, если данные можно просто хранить в обычном файле. Дай 2-3 примера из повседневных приложений, где используется база данных.",
        "expected": "Развёрнутый ответ с объяснением и примерами."
      },
      {
        "step": 2,
        "title": "Разбери ответ по чек-листу из 4 осей",
        "instruction": "Пройдись по полученному ответу и оцени каждую ось: точность (похоже ли на правду, нет ли противоречий), полнота (ответил ли на обе части вопроса — и 'что это', и 'зачем нужна по сравнению с файлом'), формат (удобно ли читать), применимость (понял бы ты это, если бы видел тему первый раз).",
        "prompt": null,
        "expected": "Письменная оценка по каждой из 4 осей с конкретным замечанием хотя бы по одной слабой стороне."
      },
      {
        "step": 3,
        "title": "Найди минимум одну слабость и сформулируй точечное уточнение",
        "instruction": "Если, например, не хватило конкретности в примерах — попроси именно это, не трогая остальной текст.",
        "prompt": "Это объяснение понятно, но примеры слишком общие. Оставь текст как есть, но замени примеры на 2 конкретных, с названием типа приложения (например, интернет-магазин, мессенджер) и описанием, какие именно данные там хранятся в базе.",
        "expected": "Обновлённый ответ с более конкретными примерами, при этом остальная структура текста сохранена."
      },
      {
        "step": 4,
        "title": "Проверь ответ на потенциальные галлюцинации",
        "instruction": "Попроси модель явно указать уровень уверенности в утверждениях из её собственного ответа.",
        "prompt": "В твоём объяснении выше — есть ли какие-то конкретные факты, цифры или технические детали, в которых ты не полностью уверен и которые стоило бы перепроверить в надёжном источнике? Укажи их явно, если есть.",
        "expected": "Либо модель подтверждает уверенность во всех утверждениях, либо явно выделяет зоны неопределённости — в обоих случаях ты получаешь более осознанную картину надёжности ответа."
      },
      {
        "step": 5,
        "title": "Проведи вторую итерацию уточнения до 'идеального' объяснения",
        "instruction": "Основываясь на всех предыдущих шагах, дай финальный уточняющий промпт, доводящий объяснение до состояния, которым ты действительно доволен.",
        "prompt": "Теперь сократи всё объяснение до 100 слов, оставив только суть и два лучших примера, без потери точности.",
        "expected": "Финальная компактная версия объяснения, прошедшая через 2 итерации уточнения и проверку на галлюцинации."
      },
      {
        "step": 6,
        "title": "Зафиксируй весь путь итераций в заметке",
        "instruction": "Запиши три версии объяснения (исходную, после первого уточнения, финальную) и короткий вывод о том, как пошаговое уточнение по чек-листу помогло улучшить результат, по сравнению с одной попыткой 'идеального' промпта с первого раза.",
        "prompt": null,
        "expected": "Письменная рефлексия, закрепляющая понимание итеративного подхода к оценке качества ответов ИИ."
      }
    ],
    "test": [
      {
        "q": "Какие четыре оси оценки качества ответа ИИ были предложены в этом уроке?",
        "options": [
          "Скорость, цена, длина, популярность",
          "Точность, полнота, формат, применимость",
          "Дружелюбность, креативность, юмор, стиль",
          "Язык, шрифт, цвет, размер"
        ],
        "correct": 1,
        "explain": "Четыре оси — точность (нет ли ошибок), полнота (отвечено на всё), формат (соответствует запрошенному виду), применимость (можно использовать без доработки) — дают конкретную структуру для оценки, вместо расплывчатого впечатления."
      },
      {
        "q": "Что такое 'галлюцинация' ИИ?",
        "options": [
          "Технический сбой, при котором модель перестаёт отвечать",
          "Ситуация, когда модель уверенно формулирует неточную или выдуманную информацию, звучащую правдоподобно",
          "Специальный режим работы модели для творческих задач",
          "Ошибка в коде самой нейросети, которую нельзя исправить"
        ],
        "correct": 1,
        "explain": "Галлюцинация — это уверенно звучащее, но фактически неверное или полностью придуманное утверждение. Опасность в том, что по тону ответа отличить галлюцинацию от верного факта невозможно."
      },
      {
        "q": "Почему 'переделай всё заново' — менее эффективный способ уточнения, чем точечное указание проблемы?",
        "options": [
          "Потому что ИИ физически не может переделать весь ответ",
          "Потому что это заставляет модель заново угадывать все детали, включая те части, что уже были удачными, и тратит время",
          "Потому что это запрещено правилами использования ИИ",
          "Разницы в эффективности нет никакой"
        ],
        "correct": 1,
        "explain": "Точечное уточнение сохраняет уже удачные части ответа и просит исправить конкретно то, что не подошло — это быстрее и предсказуемее, чем полная переработка, где теряется весь предыдущий удачный контекст."
      },
      {
        "q": "Какой признак должен насторожить в ответе ИИ с точки зрения риска галлюцинации?",
        "options": [
          "Простой и понятный язык объяснения",
          "Очень конкретная цифра, дата или название узкоспециализированной функции без указания источника",
          "Короткий и структурированный ответ",
          "Наличие маркированного списка в ответе"
        ],
        "correct": 1,
        "explain": "Излишне конкретные детали (точные цифры, редкие названия функций и т.п.) без указания источника — это типичный сигнал, при котором стоит отдельно проверить достоверность, так как именно такие детали модель иногда 'придумывает' правдоподобно."
      },
      {
        "q": "Какой промпт лучше всего помогает снизить риск того, что ты примешь галлюцинацию за факт?",
        "options": [
          "'Напиши точнее'",
          "'Укажи явно, есть ли в твоём ответе факты или детали, в которых ты не полностью уверен и которые стоит перепроверить'",
          "'Сократи ответ'",
          "'Используй более уверенный тон'"
        ],
        "correct": 1,
        "explain": "Прямая просьба к модели выделить зоны собственной неуверенности — рабочий приём, который не устраняет риск галлюцинаций полностью, но существенно снижает вероятность того, что сомнительная деталь останется незамеченной."
      }
    ],
    "glossary": [
      {
        "term": "Галлюцинация ИИ",
        "def": "Уверенно сформулированное, но фактически неточное или полностью выдуманное утверждение модели."
      },
      {
        "term": "Чек-лист качества ответа (точность/полнота/формат/применимость)",
        "def": "Набор из четырёх конкретных критериев для структурированной оценки ответа нейросети."
      },
      {
        "term": "Точечное уточнение",
        "def": "Запрос на исправление конкретного недостатка ответа с сохранением остальных уже удачных частей, в отличие от полной переделки."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Ответ ИИ → Оценка → Уточнение промпта\"><line x1=\"361.95486002770815\" y1=\"83.5\" x2=\"405.9097200554163\" y2=\"131.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"319.0\" y1=\"130.0\" x2=\"234.0902799445837\" y2=\"131.00000000000003\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"276.04513997229185\" y1=\"83.50000000000001\" x2=\"320.0\" y2=\"38.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><rect x=\"245.0\" y=\"16.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320.0\" y=\"43.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Ответ ИИ</text><rect x=\"330.9097200554163\" y=\"109.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"405.9097200554163\" y=\"136.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Оценка</text><rect x=\"159.0902799445837\" y=\"109.00000000000003\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"234.0902799445837\" y=\"136.00000000000003\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Уточнение промпта</text></svg>"
  },
  {
    "id": "m3w1",
    "month": 3,
    "week": 1,
    "title": "От идеи к ТЗ: декомпозиция приложения до начала кодинга",
    "duration": "4–5 часов",
    "goal": "Научиться проектировать приложение на уровне функций и структуры данных ДО обращения к ИИ за кодом.",
    "theory": [
      {
        "heading": "Почему проектирование важнее кодинга на старте",
        "text": "Самая частая ошибка новичков в вайб-кодинге — сразу просить ИИ 'напиши мне приложение Х' без предварительного продумывания. Проблема в том, что приложение — это не один кусок кода, а система взаимосвязанных частей: данные, которые оно хранит, функции, которые эти данные изменяют, и способ показать результат пользователю. Если не продумать это заранее, ты получишь код, который работает, но архитектурно 'сырой' — и каждое следующее изменение будет требовать переписывания большого куска, потому что изначальная структура не предусматривала развитие. Потратив час на проектирование на бумаге, ты экономишь часы переделок кода в будущем.",
        "example": "Это как строить дом без чертежа: можно начать класть кирпичи сразу, но если забыл предусмотреть место для труб, придётся ломать уже готовую стену. Чертёж (ТЗ) позволяет продумать это заранее, когда исправить ошибку — это просто стереть линию на бумаге, а не ломать стену."
      },
      {
        "heading": "Три вопроса для любого приложения перед кодом",
        "text": "Независимо от сложности приложения, три вопроса помогают построить скелет архитектуры. Первый: какие функции (действия) должно уметь выполнять приложение — составь список глаголов (добавить, удалить, показать, отметить, посчитать). Второй: какие данные нужно хранить для этих действий — и как эти данные связаны между собой (одна задача имеет текст, статус выполнения, возможно, дату). Третий: как пользователь будет взаимодействовать с приложением — что он вводит, что видит в ответ, в каком порядке. Отвечая на эти три вопроса письменно до написания кода, ты фактически создаёшь ТЗ, которое можно сразу передать ИИ.",
        "example": "Для трекера привычек: Функции — добавить привычку, отметить выполнение сегодня, посмотреть статистику за неделю. Данные — название привычки, список дат выполнения. Взаимодействие — пользователь вводит номер пункта меню, видит текстовый список и статистику в консоли."
      },
      {
        "heading": "Архитектурное ТЗ vs 'просто попроси написать'",
        "text": "Архитектурное ТЗ отличается от обычного промпта тем, что оно описывает СТРУКТУРУ приложения целиком, а не одно действие. Вместо 'напиши приложение для списка задач' ты формулируешь: 'вот список функций, вот структура данных для одной задачи, вот как это должно взаимодействовать с пользователем — спроектируй на основе этого архитектуру приложения и предложи, как лучше организовать код'. Это смещает роль ИИ: вместо того, чтобы угадывать структуру за тебя, он помогает её реализовать на основе твоего продуманного плана, а иногда — подсказывает улучшения, которые ты не предусмотрел.",
        "example": "Хороший промпт-ТЗ: 'Я проектирую трекер привычек. Функции: добавить привычку, отметить выполнение, посмотреть статистику. Данные: у привычки есть название и список дат выполнения. Предложи, как лучше организовать структуру данных в Python (список словарей? класс?) и почему, прежде чем переходить к реализации функций'."
      },
      {
        "heading": "Диалог с ИИ о плюсах и минусах архитектурных решений",
        "text": "Один из самых продуктивных способов использовать ИИ на этапе проектирования — не просить готовое решение, а просить сравнение вариантов с объяснением. Это развивает твоё архитектурное мышление быстрее, чем просто получение финального кода, потому что ты видишь логику выбора, а не только результат. Со временем ты начнёшь сам предугадывать, какой вариант лучше, ещё до того, как спросишь ИИ.",
        "example": "Промпт: 'Для хранения списка задач — что лучше использовать: список словарей или список объектов класса Task? Объясни плюсы и минусы каждого варианта для приложения уровня новичка, без избыточной сложности'."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Выбери идею приложения из предложенных вариантов",
        "instruction": "Выбери одну из идей: менеджер задач, трекер привычек, список покупок. На этой неделе мы НЕ пишем код — только проектируем.",
        "prompt": null,
        "expected": "Зафиксированная идея приложения, записанная одной фразой."
      },
      {
        "step": 2,
        "title": "Ответь письменно на три ключевых вопроса",
        "instruction": "В заметке напиши ответы на: какие функции должно выполнять приложение (список глаголов), какие данные нужно хранить и как они связаны, как происходит взаимодействие с пользователем (ввод/вывод).",
        "prompt": null,
        "expected": "Три раздела текста с ответами — черновик будущего архитектурного ТЗ."
      },
      {
        "step": 3,
        "title": "Обсуди с ИИ структуру данных ДО написания функций",
        "instruction": "Отправь промпт, в котором просишь не код, а сравнение вариантов организации данных.",
        "prompt": "Я проектирую [твоё приложение]. Вот функции, которые оно должно уметь: [вставь список из шага 2]. Вот данные, которые нужно хранить: [вставь описание из шага 2]. Предложи 2 варианта организации структуры данных в Python для этого (например, список словарей vs список объектов класса), объясни плюсы и минусы каждого для новичка, и порекомендуй один вариант с обоснованием.",
        "expected": "Развёрнутый ответ с сравнением подходов и рекомендацией, которую ты можешь понять и аргументированно принять или отклонить."
      },
      {
        "step": 4,
        "title": "Зафиксируй выбранную архитектуру в документе",
        "instruction": "На основе ответа ИИ выбери финальный вариант структуры данных (согласись с рекомендацией ИИ или выбери альтернативу, если у тебя есть аргумент) и запиши это как часть ТЗ.",
        "prompt": null,
        "expected": "Решение зафиксировано письменно: 'Данные будут храниться как [конкретная структура], потому что [причина]'."
      },
      {
        "step": 5,
        "title": "Составь полное архитектурное ТЗ документом",
        "instruction": "Собери всё в единый документ с разделами: Название приложения, Функции (списком), Структура данных (с обоснованием выбора), Сценарий взаимодействия с пользователем (пошагово, что видит и вводит пользователь).",
        "prompt": null,
        "expected": "Готовый документ на 1 страницу — твоё первое полноценное архитектурное ТЗ, которое будет использоваться в следующих уроках месяца."
      },
      {
        "step": 6,
        "title": "Попроси ИИ покритиковать твоё ТЗ до начала кодинга",
        "instruction": "Прежде чем переходить к реализации на следующей неделе, попроси ИИ найти слабые места или неучтённые случаи в твоём плане.",
        "prompt": "Вот моё архитектурное ТЗ для приложения: [вставь весь документ из шага 5]. Прежде чем я начну писать код, укажи, какие сценарии использования или граничные случаи я мог не учесть (например, что происходит при пустом вводе, повторяющихся названиях и т.п.), и предложи, что стоит добавить в план.",
        "expected": "Список замечаний от ИИ, который ты можешь либо внести в финальную версию ТЗ, либо осознанно отклонить с пониманием риска."
      }
    ],
    "test": [
      {
        "q": "Почему в этом уроке код не пишется вообще, хотя тема — про приложение?",
        "options": [
          "Потому что писать код на этой неделе технически невозможно",
          "Потому что продумывание архитектуры (функции, данные, взаимодействие) до кода экономит часы переделок в будущем",
          "Потому что ИИ не может писать код для таких приложений",
          "Это ошибка в программе курса"
        ],
        "correct": 1,
        "explain": "Проектирование на бумаге до написания кода — ключевой навык, предотвращающий архитектурно 'сырой' код, который сложно развивать дальше. Час продумывания экономит часы переделок."
      },
      {
        "q": "Какие три вопроса предлагается задать себе перед проектированием любого приложения?",
        "options": [
          "Сколько это будет стоить, когда дедлайн, кто заказчик",
          "Какие функции должно выполнять приложение, какие данные хранить и как они связаны, как происходит взаимодействие с пользователем",
          "Какой язык программирования использовать, какой редактор кода, какая версия Python",
          "Сколько строк кода получится, сколько файлов, сколько функций"
        ],
        "correct": 1,
        "explain": "Эти три вопроса формируют скелет архитектуры приложения независимо от его сложности: функциональность, данные и их связи, способ взаимодействия с пользователем."
      },
      {
        "q": "Чем архитектурное ТЗ отличается от обычного промпта вроде 'напиши приложение для списка задач'?",
        "options": [
          "Архитектурное ТЗ короче обычного промпта",
          "Архитектурное ТЗ описывает структуру приложения целиком (функции, данные, взаимодействие), а не просит угадать всё сразу",
          "Разницы нет, это просто разные названия одного и того же",
          "Архитектурное ТЗ пишется только на английском языке"
        ],
        "correct": 1,
        "explain": "Архитектурное ТЗ заранее определяет структуру, оставляя ИИ задачу реализации на основе продуманного плана, а не угадывания решений за тебя с нуля."
      },
      {
        "q": "Зачем просить ИИ сравнить плюсы и минусы разных архитектурных решений, а не просто дать готовый код?",
        "options": [
          "Это бесполезная трата времени",
          "Это развивает твоё собственное архитектурное мышление и понимание логики выбора, а не только даёт результат",
          "ИИ физически не может дать готовый код без сравнения вариантов",
          "Сравнение вариантов всегда даёт неверный результат"
        ],
        "correct": 1,
        "explain": "Видя логику сравнения вариантов (а не только финальный выбор), ты постепенно учишься самостоятельно предугадывать удачные архитектурные решения, что является частью главной цели курса — понимать архитектуру, а не просто копировать код."
      },
      {
        "q": "Какой из промптов лучше соответствует идее архитектурного ТЗ, изученной в этом уроке?",
        "options": [
          "'Напиши мне трекер привычек'",
          "'Сделай что-то для отслеживания привычек, на твой вкус'",
          "'Я проектирую трекер привычек с функциями [список]. Данные: [структура]. Предложи, как лучше организовать структуру данных в коде и почему, прежде чем переходить к реализации'",
          "'Какой язык программирования лучше для трекера привычек?'"
        ],
        "correct": 2,
        "explain": "Третий вариант явно передаёт продуманные функции и данные, и просит именно архитектурное решение с обоснованием — это и есть суть архитектурного ТЗ, изученного в уроке."
      }
    ],
    "glossary": [
      {
        "term": "Архитектурное ТЗ",
        "def": "Документ, описывающий структуру приложения (функции, данные, взаимодействие с пользователем) до начала написания кода."
      },
      {
        "term": "Структура данных",
        "def": "Способ организации и хранения данных в программе (например, список словарей или объекты класса)."
      },
      {
        "term": "Граничный сценарий использования",
        "def": "Нестандартная ситуация взаимодействия с приложением (пустой ввод, повторяющиеся данные), которую важно предусмотреть заранее."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Функции → Данные → Ввод и вывод\"><rect x=\"180\" y=\"47.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320\" y=\"67.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Функции</text><rect x=\"180\" y=\"85.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320\" y=\"105.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Данные</text><rect x=\"180\" y=\"123.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320\" y=\"143.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ввод и вывод</text></svg>"
  },
  {
    "id": "m3w2",
    "month": 3,
    "week": 2,
    "title": "Работа с данными: списки, словари, JSON, файлы",
    "duration": "4–5 часов",
    "goal": "Понять, как данные хранятся в памяти программы, и научиться сохранять/загружать их из файла в формате JSON.",
    "theory": [
      {
        "heading": "Списки и словари: две базовые 'коробки' для хранения данных",
        "text": "Список (list) — это упорядоченная коллекция значений, к которым можно обращаться по порядковому номеру (индексу). Представь его как пронумерованную полку: первый элемент, второй, третий. Словарь (dict) — это коллекция пар 'ключ-значение', где к данным обращаются не по номеру, а по понятному имени-ключу. Представь его как шкафчик с подписанными ящиками: ты открываешь ящик с подписью 'имя', а не 'ящик номер 3'. На практике эти две структуры комбинируются: часто используется список словарей — упорядоченный набор 'карточек', где каждая карточка (словарь) описывает один объект через понятные подписанные поля.",
        "example": "Список покупок как список: ['молоко', 'хлеб', 'яйца']. Одна задача как словарь: {'название': 'Купить молоко', 'выполнено': False}. Список задач как список словарей: [{'название': 'Купить молоко', 'выполнено': False}, {'название': 'Позвонить врачу', 'выполнено': True}]."
      },
      {
        "heading": "Проблема памяти программы: данные исчезают при закрытии",
        "text": "Пока твоя программа работает, все данные (списки, словари) живут в оперативной памяти компьютера — это быстро, но временно. Как только программа завершается (ты закрываешь терминал или компьютер выключается), эта память очищается, и все несохранённые данные теряются безвозвратно. Это критическая проблема для любого реального приложения: пользователь не будет рад, если его список задач 'обнуляется' при каждом перезапуске. Решение — сохранять данные в файл на диске, который физически остаётся на компьютере между запусками программы.",
        "example": "Это как разница между записью на доске маркером (оперативная память — быстро пишется, но стирается) и записью в блокноте (файл на диске — чуть медленнее, но остаётся надолго)."
      },
      {
        "heading": "JSON: универсальный 'язык' для сохранения структурированных данных",
        "text": "JSON (JavaScript Object Notation) — текстовый формат для представления структурированных данных, который практически идентичен по виду словарям и спискам Python. Его главное преимущество — он одинаково понятен разным языкам программирования и легко читаем человеком глазами, в отличие от многих других форматов хранения данных. Когда твоя программа 'сохраняет' список задач, она на самом деле превращает список словарей Python в текст в формате JSON и записывает этот текст в файл. При загрузке происходит обратный процесс: текст JSON из файла превращается обратно в список словарей, с которыми можно работать в коде.",
        "example": "Список задач [{'название': 'Купить молоко', 'выполнено': False}] в файле .json будет выглядеть практически так же: [{\"название\": \"Купить молоко\", \"выполнено\": false}] — минимальные отличия в синтаксисе, но смысл идентичен."
      },
      {
        "heading": "Что происходит, если файл данных повреждён или отсутствует",
        "text": "Реальные приложения должны предусматривать ситуацию, когда файла с данными ещё не существует (первый запуск программы) или файл повреждён (например, пользователь случайно отредактировал его вручную и сломал структуру). Хорошо спроектированная программа не должна 'падать' с непонятной ошибкой в этих случаях — она должна либо создать новый пустой файл данных, либо вывести понятное сообщение о проблеме. Это прямое применение навыка отладки из месяца 1: предвидеть граничные случаи заранее, а не только реагировать на уже возникшие ошибки.",
        "example": "Хорошая программа при первом запуске, не находя файл задач, создаёт пустой список задач и новый файл, вместо того чтобы выдать пользователю пугающий traceback с FileNotFoundError."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Попроси ИИ объяснить разницу между списком и словарём на твоём конкретном примере",
        "instruction": "Используй архитектурное ТЗ из прошлой недели и попроси объяснение именно на своих данных, а не абстрактное.",
        "prompt": "У меня есть приложение [твоё приложение из недели 1] с данными [структура из твоего ТЗ]. Объясни на этом конкретном примере, как будет выглядеть список словарей для хранения этих данных в Python, и покажи пример с 2-3 реальными записями.",
        "expected": "Конкретный пример кода-структуры данных, применимый именно к твоему проекту, а не абстрактный пример."
      },
      {
        "step": 2,
        "title": "Реализуй базовую структуру данных в коде",
        "instruction": "Создай файл main.py в своём проекте и вставь туда структуру данных, предложенную ИИ, с 2-3 примерами записей для тестирования.",
        "prompt": null,
        "expected": "Файл с переменной (списком словарей), содержащей тестовые данные твоего приложения."
      },
      {
        "step": 3,
        "title": "Попроси ИИ реализовать функцию сохранения в JSON",
        "instruction": "Отправь промпт на реализацию функции сохранения данных в файл.",
        "prompt": "Напиши функцию save_data(data), которая сохраняет список словарей в файл data.json в формате JSON с читаемым форматированием (с отступами). Используй стандартную библиотеку json. Дай код с комментариями на русском.",
        "expected": "Функция save_data, которая при вызове создаёт файл data.json с твоими данными."
      },
      {
        "step": 4,
        "title": "Попроси ИИ реализовать функцию загрузки с обработкой отсутствующего файла",
        "instruction": "Отправь промпт на реализацию загрузки, явно указав граничный случай.",
        "prompt": "Напиши функцию load_data(), которая загружает данные из файла data.json и возвращает список словарей. Если файл не существует (первый запуск программы) — функция должна вернуть пустой список, а не выдавать ошибку.",
        "expected": "Функция load_data, которая корректно работает и при существующем файле, и при его отсутствии."
      },
      {
        "step": 5,
        "title": "Протестируй полный цикл сохранения и загрузки",
        "instruction": "Вызови save_data с тестовыми данными, закрой и перезапусти программу, вызови load_data и выведи результат в консоль, чтобы убедиться, что данные не потерялись.",
        "prompt": "python main.py",
        "expected": "После перезапуска программы данные, сохранённые в предыдущем запуске, корректно загружаются и выводятся."
      },
      {
        "step": 6,
        "title": "Специально сломай файл данных и изучи поведение программы",
        "instruction": "Открой data.json в текстовом редакторе и удали одну случайную закрывающую скобку или кавычку, сломав корректность JSON. Запусти программу снова и посмотри, что произойдёт.",
        "prompt": null,
        "expected": "Программа, скорее всего, выдаст ошибку (например, JSONDecodeError) — это ожидаемый результат эксперимента."
      },
      {
        "step": 7,
        "title": "Попроси ИИ объяснить ошибку и улучшить обработку повреждённого файла",
        "instruction": "Скопируй полученную ошибку (по циклу отладки из месяца 1) и попроси объяснение и улучшение.",
        "prompt": "При запуске программы с повреждённым файлом data.json я получаю эту ошибку: [вставь полный traceback]. Объясни, почему это происходит, и улучши функцию load_data так, чтобы при повреждённом файле она выводила понятное сообщение пользователю и возвращала пустой список вместо падения программы.",
        "expected": "Программа теперь устойчива и к отсутствующему, и к повреждённому файлу данных."
      }
    ],
    "test": [
      {
        "q": "В чём ключевое различие между списком и словарём в Python?",
        "options": [
          "Список и словарь — это два названия одной и той же структуры данных",
          "В списке элементы доступны по порядковому номеру (индексу), в словаре — по именованному ключу",
          "Словарь может хранить только текст, а список — только числа",
          "Список работает быстрее словаря во всех случаях"
        ],
        "correct": 1,
        "explain": "Список — упорядоченная коллекция с доступом по номеру позиции. Словарь — коллекция пар 'ключ-значение' с доступом по понятному имени, а не по номеру."
      },
      {
        "q": "Почему данные, хранящиеся только в оперативной памяти программы, пропадают при закрытии программы?",
        "options": [
          "Это ошибка в самой программе, которую всегда можно избежать без сохранения в файл",
          "Оперативная память временная по своей природе и очищается, когда программа завершает работу",
          "Это происходит только на старых компьютерах",
          "Данные пропадают только если в коде есть ошибка"
        ],
        "correct": 1,
        "explain": "Оперативная память предназначена для быстрой временной работы программы, но она не предназначена для долговременного хранения — для этого нужен файл на диске, который переживает закрытие программы."
      },
      {
        "q": "Что такое JSON в контексте сохранения данных приложения?",
        "options": [
          "Язык программирования, альтернативный Python",
          "Текстовый формат представления структурированных данных, похожий на списки и словари Python, удобный для сохранения в файл",
          "Специальная база данных, встроенная в операционную систему",
          "Способ шифрования паролей"
        ],
        "correct": 1,
        "explain": "JSON — это именно формат представления данных (текстовый), а не язык программирования или база данных. Он удобен тем, что по структуре практически идентичен спискам и словарям Python."
      },
      {
        "q": "Что должна делать хорошо спроектированная функция загрузки данных, если файл с данными ещё не существует (первый запуск программы)?",
        "options": [
          "Обязательно выдать ошибку пользователю и завершить работу",
          "Вернуть пустой список/структуру по умолчанию, а не выдавать непонятную техническую ошибку",
          "Удалить всю программу",
          "Это невозможная ситуация, которую не нужно предусматривать"
        ],
        "correct": 1,
        "explain": "Хорошо спроектированная функция предвидит отсутствие файла при первом запуске и обрабатывает эту ситуацию понятным образом (например, возвращает пустой список), а не падает с техническим traceback."
      },
      {
        "q": "Какая ошибка вероятнее всего возникнет, если файл data.json повреждён (нарушена структура JSON)?",
        "options": [
          "ZeroDivisionError",
          "JSONDecodeError (или аналогичная ошибка разбора JSON)",
          "NameError",
          "Программа никогда не выдаёт ошибку при повреждённом файле"
        ],
        "correct": 1,
        "explain": "При попытке прочитать некорректно сформированный JSON-файл стандартная библиотека json выбрасывает ошибку декодирования (JSONDecodeError), сигнализируя, что текст файла не соответствует правилам формата JSON."
      }
    ],
    "glossary": [
      {
        "term": "Список (list)",
        "def": "Упорядоченная коллекция значений в Python, доступных по порядковому номеру (индексу)."
      },
      {
        "term": "Словарь (dict)",
        "def": "Коллекция пар 'ключ-значение' в Python, где доступ к данным происходит по именованному ключу."
      },
      {
        "term": "JSON",
        "def": "Текстовый формат представления структурированных данных, широко используемый для сохранения и обмена данными между программами."
      },
      {
        "term": "Оперативная память",
        "def": "Временное хранилище данных программы во время её выполнения, очищающееся при завершении программы."
      },
      {
        "term": "JSONDecodeError",
        "def": "Ошибка Python, возникающая при попытке прочитать текст, не соответствующий корректному формату JSON."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Список в памяти → JSON-файл → Загрузка при старте\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Список в памяти</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">JSON-файл</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Загрузка при</text><text x=\"525.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">старте</text></svg>"
  },
  {
    "id": "m3w3",
    "month": 3,
    "week": 3,
    "title": "Структура проекта: модули, функции, разделение логики и интерфейса",
    "duration": "4–5 часов",
    "goal": "Понять, зачем код разбивают на несколько файлов, и научиться читать и обсуждать структуру многофайлового проекта.",
    "theory": [
      {
        "heading": "Почему один гигантский файл — это проблема",
        "text": "Когда всё приложение написано в одном файле на сотни строк, возникают реальные практические проблемы: сложно найти нужный кусок кода среди остальных, сложно понять, какие части кода вообще связаны между собой, и любое изменение рискует случайно задеть что-то не связанное с тем, что ты хотел исправить. Разбиение кода на несколько файлов (модулей) по смысловому принципу — это способ держать 'один файл — одна зона ответственности', что делает код проще для чтения, изменения и отладки, даже если ты сам не помнишь всех деталей реализации.",
        "example": "Это как организация вещей в доме: если все вещи (одежда, посуда, инструменты) лежат в одной огромной коробке, найти нужную — мучение. Если разложить по шкафам с понятным назначением (кухня, спальня, гараж) — найти что угодно становится быстро и предсказуемо."
      },
      {
        "heading": "Модуль — это файл с конкретной зоной ответственности",
        "text": "В Python модуль — это просто файл с кодом (.py), который можно подключить (импортировать) в другой файл. Хорошая практика — выделять отдельный модуль под каждую крупную смысловую зону приложения: например, один файл отвечает только за хранение и загрузку/сохранение данных, другой — только за операции с этими данными (добавление, удаление), третий — за взаимодействие с пользователем (меню, ввод, вывод). Главный файл (часто называемый main.py) обычно просто связывает эти модули между собой, не содержа сложной логики сам.",
        "example": "Для трекера привычек: storage.py (сохранение/загрузка JSON), habits.py (функции добавления привычки, отметки выполнения), main.py (меню, который вызывает функции из habits.py и storage.py в правильном порядке)."
      },
      {
        "heading": "Разделение логики и интерфейса — зачем это нужно",
        "text": "Логика — это то, ЧТО делает программа по сути (посчитать статистику, добавить запись, проверить условие). Интерфейс — это то, КАК это показывается и вводится пользователем (текст в консоли, кнопки, вопросы). Разделяя их по разным функциям или даже файлам, ты получаешь гибкость: если позже захочешь заменить консольный интерфейс на веб-интерфейс (это будет в месяце 4), тебе не придётся переписывать логику работы с данными — она останется прежней, изменится только способ её показа пользователю.",
        "example": "Функция calculate_weekly_stats(habit) считает статистику (логика) и просто возвращает число — она не знает и не должна знать, будет ли это число напечатано в консоли, показано на веб-странице или отправлено в приложение. Функция print_stats(stats) отдельно отвечает только за то, как это выглядит на экране (интерфейс)."
      },
      {
        "heading": "Как читать структуру проекта, сгенерированную ИИ",
        "text": "Когда ИИ предлагает разбить твой проект на несколько файлов, важно не просто согласиться, а убедиться, что ты понимаешь логику разбивки. Задай себе вопрос про каждый файл: 'за что отвечает именно этот файл, и почему именно он'. Если ИИ использует конструкцию import (например, 'from storage import save_data') — это означает, что один файл использует функции, определённые в другом файле. Понимание этих связей — это и есть понимание архитектуры проекта на базовом уровне, без необходимости держать весь код в голове целиком.",
        "example": "Если ты видишь в начале main.py строку 'from storage import save_data, load_data' — это означает: 'главный файл берёт функции save_data и load_data из файла storage.py, чтобы их использовать здесь'."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Попроси ИИ предложить разбивку твоего текущего проекта на модули",
        "instruction": "Используй текущий проект (с одним файлом main.py из прошлой недели) и попроси реорганизацию.",
        "prompt": "Вот мой текущий код в одном файле: [вставь весь код main.py]. Предложи, как разбить этот код на несколько файлов (модулей) по смысловому принципу: отдельно хранение данных, отдельно логика операций с данными, отдельно взаимодействие с пользователем. Объясни, за что будет отвечать каждый новый файл, прежде чем давать код.",
        "expected": "Объяснение предполагаемой структуры файлов (например, storage.py, habits.py, main.py) с описанием зоны ответственности каждого — ДО получения самого кода."
      },
      {
        "step": 2,
        "title": "Создай файлы по предложенной структуре",
        "instruction": "Создай в папке проекта новые файлы в соответствии с предложением ИИ (например storage.py, habits.py — названия зависят от твоего приложения) и попроси ИИ дать финальный код для каждого файла по отдельности.",
        "prompt": "Теперь дай код для каждого из этих файлов по отдельности: сначала storage.py, затем [следующий файл], затем main.py.",
        "expected": "Несколько отдельных файлов с кодом, где main.py заметно короче и проще, чем раньше, потому что основная логика перенесена в другие модули."
      },
      {
        "step": 3,
        "title": "Нарисуй схему связей между файлами",
        "instruction": "В заметке или на бумаге нарисуй простую схему: какие файлы импортируют функции из каких других файлов, стрелками покажи направление связи.",
        "prompt": null,
        "expected": "Визуальная схема, показывающая, что main.py зависит от других модулей, а не наоборот (обычно модули с данными не должны знать про интерфейс)."
      },
      {
        "step": 4,
        "title": "Запусти обновлённую версию и убедись, что всё работает как раньше",
        "instruction": "Запусти главный файл через терминал и проверь, что вся функциональность (сохранение, загрузка, добавление записей) работает идентично версии с одним файлом.",
        "prompt": "python main.py",
        "expected": "Поведение программы идентично версии до реорганизации — изменилась только внутренняя структура файлов, а не видимое поведение."
      },
      {
        "step": 5,
        "title": "Найди в коде, где разделены логика и интерфейс",
        "instruction": "Пройдись по коду и отметь минимум 2 примера: функция, которая только считает/обрабатывает данные (логика) без вывода текста, и функция, которая только показывает результат пользователю (интерфейс) без собственных вычислений.",
        "prompt": null,
        "expected": "Два конкретных примера из твоего реального кода, записанные с пояснением, почему это логика, а почему — интерфейс."
      },
      {
        "step": 6,
        "title": "Своими словами объясни архитектуру проекта (без ИИ)",
        "instruction": "Запиши в заметке 4-5 предложений, объясняющих, за что отвечает каждый файл твоего проекта и как они связаны между собой — без подглядывания в объяснение ИИ, по памяти.",
        "prompt": null,
        "expected": "Самостоятельное объяснение архитектуры проекта, подтверждающее, что ты понимаешь структуру, а не просто скопировал код."
      },
      {
        "step": 7,
        "title": "Закоммить обновлённую структуру на GitHub",
        "instruction": "Сделай коммит с пояснением о реорганизации структуры проекта.",
        "prompt": "git add .\ngit commit -m \"Разбить проект на модули: storage, логика операций, main\"\ngit push",
        "expected": "GitHub показывает новую файловую структуру проекта вместо одного большого файла."
      }
    ],
    "test": [
      {
        "q": "Какая основная проблема возникает, если всё приложение написано в одном гигантском файле?",
        "options": [
          "Программа работает медленнее технически",
          "Сложно найти нужный код, понять связи между частями, и любое изменение рискует случайно задеть не связанную логику",
          "Такой код невозможно запустить",
          "Один файл занимает больше места на диске, чем несколько"
        ],
        "correct": 1,
        "explain": "Проблема не в технической производительности, а в читаемости и поддерживаемости кода: чем больше несвязанного кода в одном месте, тем сложнее ориентироваться и безопасно вносить изменения."
      },
      {
        "q": "Что из перечисленного правильно описывает идею 'один файл — одна зона ответственности'?",
        "options": [
          "Каждый файл должен содержать ровно 10 строк кода",
          "Каждый модуль отвечает за конкретную смысловую область приложения (например, только хранение данных, только логика операций)",
          "Файлы должны называться только на английском языке",
          "В проекте должен быть только один файл максимум"
        ],
        "correct": 1,
        "explain": "Принцип модульности предполагает, что каждый файл сфокусирован на одной конкретной задаче (хранение, логика, интерфейс), что облегчает понимание и изменение кода."
      },
      {
        "q": "В чём разница между 'логикой' и 'интерфейсом' приложения?",
        "options": [
          "Логика — это то, ЧТО делает программа по сути (вычисления, обработка данных), интерфейс — КАК это показывается и вводится пользователем",
          "Логика и интерфейс — это два названия одного и того же понятия",
          "Логика — это только математические операции, интерфейс — всё остальное",
          "Разделение логики и интерфейса не имеет практического смысла"
        ],
        "correct": 0,
        "explain": "Логика отвечает за суть обработки данных, интерфейс — за способ взаимодействия с пользователем. Их разделение позволяет менять один аспект (например, заменить консольный интерфейс на веб) без переписывания другого."
      },
      {
        "q": "Что означает строка кода 'from storage import save_data, load_data' в начале файла main.py?",
        "options": [
          "Файл storage.py удаляется из проекта",
          "Главный файл использует функции save_data и load_data, определённые в файле storage.py",
          "Это команда для установки новой библиотеки",
          "Это синтаксическая ошибка, которую нужно исправить"
        ],
        "correct": 1,
        "explain": "Конструкция import позволяет одному файлу (модулю) использовать функции, определённые в другом файле — это и есть механизм связи между модулями в многофайловом проекте."
      },
      {
        "q": "Почему полезно разделять логику и интерфейс, если планируется позже заменить консольный интерфейс на веб-интерфейс (как в месяце 4)?",
        "options": [
          "Потому что веб-интерфейс вообще не требует логики",
          "Потому что при таком разделении логика работы с данными останется прежней, а переписать придётся только способ её отображения",
          "Разделение логики и интерфейса не влияет на этот процесс никак",
          "Потому что веб-интерфейс можно создать только при объединении логики и интерфейса в одном файле"
        ],
        "correct": 1,
        "explain": "Если логика (обработка данных) отделена от интерфейса (способа показа), смена интерфейса (например, с консольного на веб) требует переписывания только слоя интерфейса, а проверенная логика остаётся без изменений."
      }
    ],
    "glossary": [
      {
        "term": "Модуль",
        "def": "Отдельный файл с кодом (.py в Python), который можно подключить (импортировать) в другой файл программы."
      },
      {
        "term": "import",
        "def": "Конструкция в Python, позволяющая использовать функции или переменные, определённые в другом файле (модуле)."
      },
      {
        "term": "Логика приложения",
        "def": "Часть кода, отвечающая за обработку данных и выполнение действий программы по существу, независимо от способа их отображения."
      },
      {
        "term": "Интерфейс",
        "def": "Часть кода, отвечающая за способ взаимодействия с пользователем: ввод данных и показ результата."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: todo/ →   main.py →   storage.py →   logic.py\"><rect x=\"150\" y=\"20\" width=\"340\" height=\"160\" rx=\"12\" fill=\"#161b25\" stroke=\"#2a3040\" stroke-width=\"2\"/><text x=\"176\" y=\"54\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#fbbf24\">todo/</text><text x=\"176\" y=\"80\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#e8ebf2\">  main.py</text><text x=\"176\" y=\"106\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#e8ebf2\">  storage.py</text><text x=\"176\" y=\"132\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#e8ebf2\">  logic.py</text></svg>"
  },
  {
    "id": "m3w4",
    "month": 3,
    "week": 4,
    "title": "Сборка полноценного мини-приложения целиком",
    "duration": "4–5 часов",
    "goal": "Собрать разрозненные модули в единый рабочий продукт, протестировать его по сценариям и довести до стабильной версии.",
    "theory": [
      {
        "heading": "От набора функций к пользовательскому сценарию (user flow)",
        "text": "До этого момента у тебя были отдельные работающие кусочки: структура данных, сохранение в файл, несколько модулей. Финальный шаг — связать всё это в единый поток использования, который реально проходит пользователь от запуска программы до выхода из неё. Это называется user flow — пошаговый путь взаимодействия: запуск → главное меню → выбор действия → выполнение действия → возврат в меню или выход. Важно не просто иметь работающие функции по отдельности, а убедиться, что переходы между ними логичны и предсказуемы для человека, который пользуется программой впервые.",
        "example": "Пользователь открывает трекер привычек → видит меню с пунктами (1. Добавить привычку, 2. Отметить выполнение, 3. Посмотреть статистику, 4. Выйти) → выбирает пункт → выполняет действие → автоматически возвращается в меню, а не в случайное состояние программы."
      },
      {
        "heading": "Тестирование по заранее составленному списку сценариев",
        "text": "Профессиональный подход к проверке приложения — не 'потыкать и посмотреть, что будет', а заранее составить список конкретных сценариев, которые нужно проверить, и пройти по каждому целенаправленно. Это особенно важно для граничных случаев: что происходит при пустом вводе, при вводе несуществующего номера пункта меню, при вводе текста там, где ожидается число. Такое системное тестирование находит проблемы, которые случайное использование может не заметить, потому что человек интуитивно избегает 'неправильного' ввода, а реальные пользователи его допускают постоянно.",
        "example": "Список сценариев для тестирования to-do приложения: 1) добавить задачу с нормальным текстом, 2) добавить задачу с пустым текстом, 3) отметить выполненной задачу с корректным номером, 4) отметить выполненной задачу с номером, которого не существует (например, 999), 5) попытаться ввести текст вместо номера пункта меню."
      },
      {
        "heading": "Итеративная доработка: находка проблемы → формулировка ТЗ → исправление",
        "text": "Когда тестирование находит проблему, не нужно паниковать или переписывать весь код — применяется тот же цикл, что и в отладке из месяца 1: зафиксировать точный сценарий, который ломает программу, описать его ИИ как конкретную проблему, получить объяснение и исправление, и повторно протестировать именно этот сценарий. Разница с чистой отладкой в том, что здесь речь не об ошибке программы (traceback), а о логической проблеме поведения (например, программа технически не 'падает', но ведёт себя нелогично или непредсказуемо).",
        "example": "Если программа при вводе несуществующего номера задачи не выдаёт traceback, но и не сообщает пользователю ничего внятного (просто тихо ничего не происходит) — это логическая проблема, которую стоит исправить явным сообщением 'Задача с таким номером не найдена'."
      },
      {
        "heading": "Что значит 'приложение готово' на уровне этого месяца",
        "text": "Важно иметь реалистичный критерий завершённости, чтобы не застрять в бесконечном улучшении. На этом этапе курса приложение считается готовым, если: оно проходит весь свой основной пользовательский сценарий без сбоев, данные корректно сохраняются и загружаются между запусками, минимум 5 граничных случаев протестированы и обработаны адекватно (без паники программы и без тихого игнорирования проблемы). Это не означает отсутствие всех возможных недочётов — означает, что продукт стабилен для своего текущего уровня сложности, и можно переходить к следующему этапу курса, не теряя уже достигнутый прогресс.",
        "example": "Трекер привычек месяца 3 не обязан иметь графики или веб-интерфейс (это будет позже) — но обязан надёжно добавлять, сохранять и показывать привычки без падений программы при обычном и нестандартном использовании."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Составь список из 5 тестовых сценариев перед тестированием",
        "instruction": "В заметке запиши 5 конкретных сценариев использования твоего приложения, включая минимум 2 граничных случая (пустой ввод, несуществующий номер, неверный тип данных).",
        "prompt": null,
        "expected": "Письменный список из 5 сценариев, готовый к последовательной проверке."
      },
      {
        "step": 2,
        "title": "Пройди весь основной пользовательский сценарий от запуска до выхода",
        "instruction": "Запусти приложение и пройди весь обычный путь пользователя: добро добавление записи, просмотр списка, отметка/изменение, выход из программы.",
        "prompt": "python main.py",
        "expected": "Основной сценарий работает от начала до конца без сбоев и нелогичных моментов."
      },
      {
        "step": 3,
        "title": "Протестируй все 5 сценариев из списка по очереди",
        "instruction": "Пройди каждый сценарий из шага 1 по отдельности, записывая результат: 'сработало корректно' или 'найдена проблема, в чём именно'.",
        "prompt": null,
        "expected": "Таблица или список с результатами по каждому из 5 сценариев, с явными отметками найденных проблем."
      },
      {
        "step": 4,
        "title": "Сформулируй найденные проблемы как конкретные ТЗ для ИИ",
        "instruction": "Для каждой найденной проблемы напиши точный промпт с описанием сценария и ожидаемого правильного поведения.",
        "prompt": "При вводе несуществующего номера задачи (например, 999) в моей функции отметки выполнения, программа [опиши, что реально происходит]. Исправь так, чтобы при вводе несуществующего номера программа выводила сообщение 'Задача с таким номером не найдена' и возвращала пользователя в главное меню, без падения программы.",
        "expected": "Исправленный код для каждой найденной проблемы, с понятным поведением вместо сбоя или молчаливого игнорирования."
      },
      {
        "step": 5,
        "title": "Повторно протестируй все исправленные сценарии",
        "instruction": "После применения всех исправлений пройди ещё раз все 5 сценариев из списка, чтобы убедиться, что проблемы реально устранены, а не просто скрыты.",
        "prompt": "python main.py",
        "expected": "Все 5 сценариев теперь обрабатываются корректно и предсказуемо."
      },
      {
        "step": 6,
        "title": "Проверь цикл сохранения данных после полного набора действий",
        "instruction": "Выполни несколько разных действий (добавление, изменение, удаление, если есть), закрой программу и перезапусти её, убедившись, что финальное состояние данных корректно сохранилось и загрузилось.",
        "prompt": "python main.py",
        "expected": "Данные после перезапуска полностью соответствуют тому, что было перед закрытием программы."
      },
      {
        "step": 7,
        "title": "Обнови README и сделай финальный коммит месяца",
        "instruction": "Попроси ИИ обновить README с полным описанием функциональности приложения, инструкцией запуска и списком известных ограничений. Сделай финальный коммит и запушь на GitHub.",
        "prompt": "Обнови README.md для моего приложения [название]: добавь полное описание функциональности, инструкцию по запуску (python main.py), структуру файлов проекта с кратким описанием каждого, и раздел 'Известные ограничения' (например, данные хранятся только в JSON-файле, без многопользовательского доступа).",
        "expected": "Обновлённый README.md, после которого делается коммит 'Финальная стабильная версия приложения месяца 3' и push на GitHub."
      }
    ],
    "test": [
      {
        "q": "Что такое user flow (пользовательский сценарий) приложения?",
        "options": [
          "Список переменных, используемых в коде",
          "Пошаговый путь взаимодействия пользователя с программой от запуска до выхода",
          "Техническая документация для разработчиков",
          "Список ошибок, которые может выдать программа"
        ],
        "correct": 1,
        "explain": "User flow — это именно путь реального взаимодействия: какие шаги проходит пользователь, какие решения принимает, что видит на каждом этапе от старта до завершения работы с программой."
      },
      {
        "q": "Почему важно тестировать по заранее составленному списку сценариев, а не просто 'потыкать и посмотреть'?",
        "options": [
          "Потому что так тестировать быстрее",
          "Системное тестирование по списку, включая граничные случаи, находит проблемы, которые случайное использование может не заметить",
          "Это требование, не имеющее практической пользы",
          "Потому что ИИ не понимает других форматов тестирования"
        ],
        "correct": 1,
        "explain": "Люди интуитивно избегают 'неправильного' ввода при случайном тестировании, но реальные пользователи регулярно вводят неожиданные данные — поэтому важно целенаправленно проверять граничные случаи."
      },
      {
        "q": "Какой из примеров — граничный случай, который стоит отдельно протестировать в to-do приложении?",
        "options": [
          "Добавление задачи с обычным текстом",
          "Просмотр списка из одной обычной задачи",
          "Попытка отметить выполненной задачу с номером, которого не существует в списке",
          "Запуск программы в первый раз без каких-либо действий"
        ],
        "correct": 2,
        "explain": "Попытка сослаться на несуществующий номер задачи — классический граничный случай, который может привести либо к ошибке программы, либо к нелогичному молчаливому поведению, если не обработан явно."
      },
      {
        "q": "Чем отличается 'логическая проблема поведения' от классической ошибки (traceback), согласно уроку?",
        "options": [
          "Это полностью одинаковые понятия",
          "Логическая проблема означает, что программа технически не падает, но ведёт себя нелогично или непредсказуемо, без явного сообщения об ошибке",
          "Логическая проблема возникает только в многофайловых проектах",
          "Логические проблемы невозможно исправить с помощью ИИ"
        ],
        "correct": 1,
        "explain": "Traceback — явный технический сбой программы. Логическая проблема — ситуация, когда программа формально 'работает' (не падает), но результат не соответствует ожидаемому или разумному поведению, например, тихо игнорирует некорректный ввод."
      },
      {
        "q": "Какой критерий из перечисленных лучше всего описывает, что приложение 'готово' на уровне месяца 3 курса?",
        "options": [
          "В приложении нет абсолютно никаких возможных недочётов",
          "Приложение имеет веб-интерфейс и графики статистики",
          "Основной сценарий работает без сбоев, данные корректно сохраняются между запусками, минимум 5 граничных случаев протестированы и обработаны адекватно",
          "Приложение написано в одном файле без разбивки на модули"
        ],
        "correct": 2,
        "explain": "Критерий готовности на этом этапе курса — стабильность для текущего уровня сложности (надёжный основной сценарий, сохранение данных, обработка граничных случаев), а не идеальная полнота функциональности или наличие продвинутого интерфейса, который появится позже."
      }
    ],
    "glossary": [
      {
        "term": "User flow (пользовательский сценарий)",
        "def": "Пошаговый путь взаимодействия пользователя с приложением от запуска до завершения работы."
      },
      {
        "term": "Тестовый сценарий",
        "def": "Конкретный заранее сформулированный случай использования приложения, который целенаправленно проверяется на корректность работы."
      },
      {
        "term": "Логическая проблема поведения",
        "def": "Ситуация, когда программа не выдаёт техническую ошибку, но ведёт себя нелогично, непредсказуемо или молчаливо игнорирует некорректную ситуацию."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Модули → Тестовые сценарии → Стабильная версия\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Модули</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Тестовые сценарии</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Стабильная версия</text></svg>"
  },
  {
    "id": "m4w1",
    "month": 4,
    "week": 1,
    "title": "Что такое API и как с ним работать",
    "duration": "4–5 часов",
    "goal": "Понять концепцию API-запроса и научиться получать и разбирать данные из публичного API на практике.",
    "theory": [
      {
        "heading": "API — это 'меню' для общения программ между собой",
        "text": "API (Application Programming Interface, программный интерфейс приложения) — это договорённость о том, как одна программа может запросить данные или действие у другой программы через интернет. Представь ресторан: ты (твоя программа) не идёшь на кухню (чужой сервер) готовить блюдо самостоятельно — ты смотришь в меню (документацию API), выбираешь конкретное блюдо (конкретный запрос) и официант (API) приносит тебе результат. Ты не обязан понимать, как именно устроена кухня внутри — важно только правильно сформулировать заказ по меню.",
        "example": "Сервис погоды имеет API: ты отправляешь запрос 'какая погода в городе Москва' в определённом формате, и получаешь в ответ данные о температуре, не имея доступа к тому, как именно устроены их внутренние метеорологические расчёты."
      },
      {
        "heading": "GET-запрос: самый частый способ получить данные",
        "text": "Среди разных типов запросов к API самый распространённый для получения информации — GET-запрос. Он работает похоже на открытие веб-страницы в браузере: ты отправляешь запрос на определённый адрес (URL), и сервер возвращает данные. Разница в том, что обычная веб-страница возвращает HTML для отображения человеку, а API обычно возвращает данные в формате JSON (тот самый формат, который ты изучал в месяце 3) — машиночитаемый, предназначенный для обработки программой, а не для прямого просмотра человеком.",
        "example": "Запрос на https://api.example.com/weather?city=Moscow — это GET-запрос, где через URL передаётся параметр (город), а в ответ приходит JSON с данными о погоде."
      },
      {
        "heading": "Разбор JSON-ответа: как достать нужные данные из результата",
        "text": "Ответ от API в формате JSON часто содержит много информации, но тебе обычно нужны лишь конкретные значения из этой структуры. Поскольку JSON по структуре — это вложенные списки и словари (как ты изучал в месяце 3), процесс извлечения данных — это обращение к нужным ключам словаря, иногда через несколько уровней вложенности. Это прямое применение навыков работы со словарями: если в ответе API есть структура вроде {'main': {'temp': 15.5}}, то для получения температуры нужно обратиться сначала к ключу 'main', а затем к ключу 'temp' внутри него.",
        "example": "Если ответ API выглядит как {'city': 'Moscow', 'weather': {'temp': 15, 'condition': 'cloudy'}}, то код response['weather']['temp'] даст тебе значение 15, а response['weather']['condition'] — значение 'cloudy'."
      },
      {
        "heading": "Ключи API и лимиты бесплатного использования",
        "text": "Многие API требуют API-ключ — уникальный код, который идентифицирует именно твои запросы (это похоже на пропуск в здание: без него охрана/сервер не пропустит твой запрос). Ключ обычно получают, зарегистрировавшись на сайте сервиса. Бесплатные тарифы почти всегда имеют лимиты (например, не больше 1000 запросов в месяц) — это нормальная практика, и для учебных целей такие лимиты более чем достаточны. Важно сразу привыкнуть к мысли, что API-ключ — это секретная информация, которую нельзя публиковать открыто (подробнее об этом — в следующем уроке).",
        "example": "Сервис openweathermap.org (пример публичного API) даёт бесплатный ключ после регистрации с лимитом порядка 1000 запросов в день — вполне достаточно для учебного и даже небольшого реального проекта."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Выбери бесплатный публичный API и получи ключ (если нужен)",
        "instruction": "Выбери один из простых вариантов: OpenWeatherMap (погода), exchangerate-api.com (курсы валют), или любой другой публичный API без сложной авторизации (например, случайные факты — uselessfacts.jsph.pl, он не требует ключа вообще). Если нужен ключ — зарегистрируйся и получи его.",
        "prompt": null,
        "expected": "У тебя есть рабочий API-ключ (если требуется) или прямой доступ к API без ключа."
      },
      {
        "step": 2,
        "title": "Попроси ИИ написать первый тестовый запрос",
        "instruction": "Отправь промпт с описанием выбранного API и попроси минимальный код для теста.",
        "prompt": "Напиши минимальный скрипт на Python с использованием библиотеки requests, который делает GET-запрос к [название API, укажи ссылку из документации], и просто выводит в консоль весь полученный ответ целиком, без обработки, чтобы я мог увидеть структуру данных.",
        "expected": "Код, который при запуске выводит в консоль 'сырой' JSON-ответ от выбранного API."
      },
      {
        "step": 3,
        "title": "Установи библиотеку requests, если нужно",
        "instruction": "Если при запуске возникает ошибка 'модуль не найден', установи библиотеку через терминал.",
        "prompt": "pip install requests",
        "expected": "Библиотека устанавливается без ошибок, и повторный запуск скрипта проходит успешно."
      },
      {
        "step": 4,
        "title": "Запусти и изучи 'сырой' ответ API",
        "instruction": "Запусти скрипт и внимательно посмотри на структуру полученного JSON — найди вложенные словари и списки, определи, где находятся интересующие тебя значения.",
        "prompt": "python test_api.py",
        "expected": "В консоли отображается весь ответ API, из которого можно визуально определить структуру вложенности."
      },
      {
        "step": 5,
        "title": "Попроси ИИ помочь извлечь 2-3 конкретных значения",
        "instruction": "Покажи ИИ полученную структуру ответа и попроси код для извлечения конкретных полей.",
        "prompt": "Вот структура ответа API, которую я получил: [вставь пример ответа из шага 4]. Напиши код, который извлекает из этого ответа значения [укажи конкретные поля, например 'температура' и 'название города'] и выводит их в читаемом виде, например: 'В городе Москва сейчас 15 градусов'.",
        "expected": "Код, который выводит аккуратное человекочитаемое сообщение вместо технического JSON."
      },
      {
        "step": 6,
        "title": "Протестируй с разными входными параметрами",
        "instruction": "Если API принимает параметры (например, другой город), измени код так, чтобы проверить запрос с 2-3 разными значениями и убедиться, что всё работает стабильно.",
        "prompt": null,
        "expected": "Скрипт корректно работает для разных вводимых значений, подтверждая, что логика извлечения данных универсальна, а не 'подогнана' под один конкретный случай."
      },
      {
        "step": 7,
        "title": "Зафиксируй понимание структуры ответа в заметке",
        "instruction": "Запиши своими словами: как выглядит структура полученного JSON-ответа (какие там есть вложенные словари/списки), и какой именно путь (цепочка ключей) ведёт к нужным тебе данным.",
        "prompt": null,
        "expected": "Письменное объяснение структуры данных API, подтверждающее осмысленное понимание, а не слепое копирование кода."
      }
    ],
    "test": [
      {
        "q": "Что такое API простыми словами?",
        "options": [
          "Язык программирования для создания сайтов",
          "Договорённость о том, как одна программа может запросить данные или действие у другой программы через интернет",
          "База данных, хранящая всю информацию интернета",
          "Визуальный интерфейс сайта, который видит пользователь"
        ],
        "correct": 1,
        "explain": "API — это именно договорённость/интерфейс для общения программ между собой, по аналогии с меню в ресторане: ты делаешь заказ по правилам меню, не вникая в детали работы кухни."
      },
      {
        "q": "В каком формате чаще всего приходит ответ от API, согласно изученному в уроке?",
        "options": [
          "HTML для отображения в браузере",
          "JSON, машиночитаемый формат данных",
          "Обычный текстовый файл .txt",
          "Изображение"
        ],
        "correct": 1,
        "explain": "В отличие от обычной веб-страницы (HTML для человека), API обычно возвращает данные в формате JSON, предназначенном для обработки программой."
      },
      {
        "q": "Если ответ API выглядит как {'main': {'temp': 15.5}}, какой код правильно извлечёт значение температуры?",
        "options": [
          "response['temp']",
          "response['main']['temp']",
          "response.temp.main",
          "response[0]['temp']"
        ],
        "correct": 1,
        "explain": "Поскольку 'temp' находится внутри вложенного словаря с ключом 'main', нужно сначала обратиться к 'main', а затем к 'temp' внутри него: response['main']['temp']."
      },
      {
        "q": "Зачем нужен API-ключ при работе с некоторыми сервисами?",
        "options": [
          "Это просто формальность, не несущая функционального смысла",
          "Он идентифицирует именно твои запросы, по аналогии с пропуском, без которого сервер не пропустит запрос",
          "API-ключ нужен только для платных сервисов без исключений",
          "API-ключ заменяет необходимость писать код вообще"
        ],
        "correct": 1,
        "explain": "API-ключ — уникальный идентификатор запросов конкретного пользователя/приложения, позволяющий сервису отслеживать и ограничивать использование (например, по лимитам бесплатного тарифа)."
      },
      {
        "q": "Почему рекомендуется сначала вывести 'сырой' полный ответ API в консоль, прежде чем писать код извлечения конкретных значений?",
        "options": [
          "Это бесполезный шаг, который можно пропустить",
          "Чтобы визуально увидеть реальную структуру вложенности данных и понять, по какому пути ключей нужно обращаться для извлечения нужных значений",
          "Потому что без этого шага API не будет работать технически",
          "Чтобы замедлить скорость выполнения программы"
        ],
        "correct": 1,
        "explain": "Просмотр полного необработанного ответа API позволяет точно понять структуру данных (вложенные словари и списки) перед написанием кода извлечения конкретных значений, вместо того чтобы угадывать структуру наугад."
      }
    ],
    "glossary": [
      {
        "term": "API (Application Programming Interface)",
        "def": "Программный интерфейс, позволяющий одной программе запрашивать данные или действия у другой программы через интернет."
      },
      {
        "term": "GET-запрос",
        "def": "Тип HTTP-запроса, используемый для получения данных с сервера без их изменения."
      },
      {
        "term": "API-ключ",
        "def": "Уникальный идентификатор, используемый для аутентификации запросов конкретного пользователя или приложения к API."
      },
      {
        "term": "Библиотека requests",
        "def": "Популярная библиотека Python для выполнения HTTP-запросов (в том числе к API) из кода."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Ваша программа → Запрос по адресу API → Ответ в JSON\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ваша программа</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Запрос по адресу</text><text x=\"320.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">API</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ответ в JSON</text></svg>"
  },
  {
    "id": "m4w2",
    "month": 4,
    "week": 2,
    "title": "Секреты и безопасность: переменные окружения, .env, .gitignore",
    "duration": "4–5 часов",
    "goal": "Научиться безопасно хранить API-ключи и пароли, используя переменные окружения, и защищать их от попадания на GitHub.",
    "theory": [
      {
        "heading": "Почему хранить ключи прямо в коде — это опасно",
        "text": "Новичок, получив API-ключ, часто просто вставляет его прямо в код как обычный текст. Проблема возникает, когда этот код попадает на GitHub: любой человек в мире, у которого есть доступ к публичному репозиторию, может увидеть и скопировать этот ключ. Дальше чужой человек может использовать твой ключ от своего имени, что может привести к превышению твоего лимита бесплатных запросов, блокировке ключа, а для платных сервисов — даже к финансовым потерям, если к ключу привязана банковская карта. Это не теоретический риск: автоматические боты постоянно сканируют публичные репозитории именно в поисках случайно оставленных ключей.",
        "example": "Если ты публикуешь на GitHub код с строкой api_key = 'sk-abc123realkey456', этот ключ становится виден всем — даже если ты позже удалишь эту строку, она может остаться в истории коммитов Git, доступной любому."
      },
      {
        "heading": "Переменные окружения: хранение секретов вне кода",
        "text": "Переменная окружения — это значение, которое хранится не в самом файле кода, а в окружении, в котором запускается программа (на уровне операционной системы или в отдельном файле конфигурации). Код обращается к переменной окружения по имени, но само секретное значение физически находится в другом месте, которое не публикуется вместе с кодом. Это разделяет 'логику использования ключа' (которая может быть публичной) от 'самого значения ключа' (которое остаётся приватным).",
        "example": "Вместо api_key = 'sk-abc123realkey456' прямо в коде, пишут api_key = os.environ.get('API_KEY') — и само значение 'sk-abc123realkey456' хранится отдельно, в файле .env, который не публикуется."
      },
      {
        "heading": "Файл .env: практический способ хранения переменных окружения локально",
        "text": "На практике самый частый способ для небольших проектов — создать файл с именем .env в корне проекта, где построчно записываются пары 'ИМЯ_ПЕРЕМЕННОЙ=значение'. Специальная библиотека (например, python-dotenv) читает этот файл и делает значения доступными коду как переменные окружения. Файл .env физически лежит на твоём компьютере, но НЕ должен попадать в Git/GitHub — именно для этого существует механизм .gitignore.",
        "example": "Содержимое файла .env: API_KEY=sk-abc123realkey456 — простая текстовая строка, без кавычек и пробелов вокруг знака равенства."
      },
      {
        "heading": ".gitignore: список файлов, которые Git должен игнорировать",
        "text": ".gitignore — это специальный файл в проекте, где перечисляются имена файлов и папок, которые Git НЕ должен отслеживать и, соответственно, никогда не отправит на GitHub, даже при выполнении git add. Включение файла .env в .gitignore — обязательная практика при работе с любыми секретами. Важно настроить .gitignore ДО первого коммита, содержащего секреты — если ключ уже был закоммичен и запушен хотя бы раз, одного удаления файла недостаточно: ключ остаётся в истории Git и теоретически доступен. В таком случае единственный надёжный способ — считать ключ скомпрометированным и сгенерировать новый.",
        "example": "Типичное содержимое .gitignore для Python-проекта: .env (сам файл с секретами), __pycache__/ (технические файлы Python), venv/ (виртуальное окружение) — каждое имя на отдельной строке."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Установи библиотеку python-dotenv",
        "instruction": "В терминале установи библиотеку для работы с .env файлами.",
        "prompt": "pip install python-dotenv",
        "expected": "Библиотека устанавливается без ошибок."
      },
      {
        "step": 2,
        "title": "Создай файл .env и перенеси туда ключ из прошлой недели",
        "instruction": "Создай файл с именем .env в корне проекта (там же, где main.py) и запиши туда свой API-ключ из урока недели 1 в формате ИМЯ=значение.",
        "prompt": "API_KEY=вставь_сюда_свой_реальный_ключ",
        "expected": "Файл .env создан с одной строкой, содержащей реальный ключ.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Файл .env в проекте\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#1e1e1e\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#2d2d2d\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#2d2d2d\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"500\" text-anchor=\"middle\">Visual Studio Code — файл .env</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"22\" rx=\"0\" fill=\"#252526\" /><text x=\"29\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">File</text><text x=\"71\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Edit</text><text x=\"113\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Selection</text><text x=\"190\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">View</text><text x=\"232\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Go</text><text x=\"260\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Run</text><text x=\"295\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Terminal</text><text x=\"365\" y=\"55\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">Help</text><rect x=\"10\" y=\"62\" width=\"44\" height=\"288\" rx=\"0\" fill=\"#333333\" /><rect x=\"22\" y=\"80\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"118\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"156\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"22\" y=\"194\" width=\"20\" height=\"20\" rx=\"3\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"1.6\" /><rect x=\"26\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"160\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"26\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"34\" y=\"168\" width=\"6\" height=\"6\" rx=\"1\" fill=\"#9ca3af\" /><rect x=\"54\" y=\"62\" width=\"200\" height=\"288\" rx=\"0\" fill=\"#252526\" /><text x=\"66\" y=\"84\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#cccccc\" font-weight=\"600\" text-anchor=\"start\">EXPLORER</text><text x=\"66\" y=\"110\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"start\">▾ MY-PROJECT</text><rect x=\"78\" y=\"120\" width=\"160\" height=\"22\" rx=\"3\" fill=\"#37373d\" /><text x=\"90\" y=\"136\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"400\" text-anchor=\"start\">.env</text><rect x=\"75\" y=\"117\" width=\"166\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"236\" cy=\"118\" r=\"11\" fill=\"#f59e0b\"/><text x=\"236\" y=\"122.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"90\" y=\"162\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#cccccc\" font-weight=\"400\" text-anchor=\"start\">.gitignore</text><text x=\"90\" y=\"186\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#e5c07b\" font-weight=\"400\" text-anchor=\"start\">main.py</text><text x=\"66\" y=\"220\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\">Файл .env лежит рядом</text><text x=\"66\" y=\"236\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\">с main.py, в корне проекта</text><rect x=\"254\" y=\"62\" width=\"376\" height=\"30\" rx=\"0\" fill=\"#2d2d2d\" /><text x=\"266\" y=\"82\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"400\" text-anchor=\"start\">.env</text><text x=\"270\" y=\"122\" font-family=\"Consolas, Menlo, monospace\" font-size=\"12\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">1</text><text x=\"292\" y=\"122\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#ce9178\" font-weight=\"400\" text-anchor=\"start\">API_KEY=ваш_ключ_без_кавычек</text><rect x=\"285\" y=\"103\" width=\"256\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"536\" cy=\"104\" r=\"11\" fill=\"#f59e0b\"/><text x=\"536\" y=\"108.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><text x=\"270\" y=\"180\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">Имя файла начинается с точки: .env</text><text x=\"270\" y=\"202\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">Без пробелов вокруг знака =</text><text x=\"270\" y=\"224\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">Этот файл нельзя загружать на GitHub</text></svg>",
          "caption": "Файл .env создаётся в корне проекта (1), ключ записывается в формате ИМЯ=значение (2). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 3,
        "title": "Попроси ИИ переписать код для использования переменной окружения",
        "instruction": "Отправь промпт с текущим кодом, который использует ключ напрямую, и попроси переделать его.",
        "prompt": "Вот мой текущий код, где API-ключ указан прямо в коде: [вставь код]. Перепиши его так, чтобы ключ загружался из файла .env с помощью библиотеки python-dotenv, вместо того чтобы быть написанным прямо в коде. Объясни, какие строки нужно добавить в начало файла.",
        "expected": "Обновлённый код с использованием load_dotenv() и os.environ.get('API_KEY') вместо ключа, написанного напрямую."
      },
      {
        "step": 4,
        "title": "Запусти и проверь, что всё работает как раньше",
        "instruction": "Запусти скрипт через терминал и убедись, что запрос к API всё ещё работает корректно, несмотря на то что ключ теперь не виден напрямую в коде.",
        "prompt": "python test_api.py",
        "expected": "Программа работает идентично, но при открытии файла с кодом ключ не виден — видна только ссылка на переменную окружения."
      },
      {
        "step": 5,
        "title": "Создай или обнови .gitignore",
        "instruction": "Создай файл .gitignore в корне проекта (если его ещё нет) и добавь туда минимум следующие строки.",
        "prompt": ".env\n__pycache__/\n*.pyc",
        "expected": "Файл .gitignore создан с перечисленными исключениями."
      },
      {
        "step": 6,
        "title": "Проверь через git status, что .env не отслеживается",
        "instruction": "Выполни команду проверки статуса Git и убедись, что файл .env НЕ появляется в списке файлов, готовых к коммиту.",
        "prompt": "git status",
        "expected": "В выводе команды НЕ должно быть упоминания файла .env — только остальные файлы проекта.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Проверка git status\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#1e1e1e\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#2d2d2d\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#2d2d2d\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><text x=\"320.0\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9ca3af\" font-weight=\"500\" text-anchor=\"middle\">Терминал</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"310\" rx=\"0\" fill=\"#181818\" /><text x=\"30\" y=\"70\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#d4d4d4\" font-weight=\"400\" text-anchor=\"start\">&gt; git status</text><text x=\"30\" y=\"96\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#d4d4d4\" font-weight=\"400\" text-anchor=\"start\">On branch main</text><text x=\"30\" y=\"122\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#d4d4d4\" font-weight=\"400\" text-anchor=\"start\">Untracked files:</text><text x=\"60\" y=\"146\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#f87171\" font-weight=\"400\" text-anchor=\"start\">.gitignore</text><text x=\"60\" y=\"170\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#f87171\" font-weight=\"400\" text-anchor=\"start\">main.py</text><rect x=\"53\" y=\"129\" width=\"146\" height=\"50\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"194\" cy=\"130\" r=\"11\" fill=\"#f59e0b\"/><text x=\"194\" y=\"134.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"230\" y=\"158\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#fbbf24\" font-weight=\"600\" text-anchor=\"start\">← .env в списке быть НЕ должно</text><rect x=\"30\" y=\"210\" width=\"580\" height=\"104\" rx=\"8\" fill=\"#1f2937\" stroke=\"#374151\" stroke-width=\"1\" /><text x=\"46\" y=\"236\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#fca5a5\" font-weight=\"600\" text-anchor=\"start\">Если .env появился в списке:</text><text x=\"46\" y=\"260\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#e5e7eb\" font-weight=\"400\" text-anchor=\"start\">1. Проверьте, что в .gitignore есть строка .env</text><text x=\"46\" y=\"282\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#e5e7eb\" font-weight=\"400\" text-anchor=\"start\">2. Проверьте, что .gitignore лежит в корне проекта</text><text x=\"46\" y=\"304\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#e5e7eb\" font-weight=\"400\" text-anchor=\"start\">3. Не делайте commit, пока .env не исчезнет из списка</text></svg>",
          "caption": "После git status файл .env не должен появляться в списке (1). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 7,
        "title": "Спроси ИИ о последствиях случайной публикации ключа",
        "instruction": "Отправь вопрос, чтобы закрепить понимание риска на конкретных последствиях.",
        "prompt": "Объясни, что конкретно может произойти, если я случайно закоммичу и запушу на публичный GitHub-репозиторий файл с настоящим API-ключом внутри кода. Что нужно делать, если это уже произошло?",
        "expected": "Понятное объяснение рисков (неправомерное использование ключа, превышение лимитов, возможные финансовые потери для платных API) и правильных действий (немедленно аннулировать/перегенерировать ключ на сайте сервиса, а не просто удалить строку из кода)."
      },
      {
        "step": 8,
        "title": "Сделай коммит с безопасным кодом",
        "instruction": "Сделай коммит и push обновлённого кода и .gitignore, убедившись, что .env не попал в репозиторий.",
        "prompt": "git add .\ngit commit -m \"Перенести API-ключ в переменные окружения, настроить .gitignore\"\ngit push",
        "expected": "На GitHub виден обновлённый код без .env файла и без ключа, написанного напрямую."
      }
    ],
    "test": [
      {
        "q": "Почему хранение API-ключа прямо в коде, который попадает на GitHub, считается опасной практикой?",
        "options": [
          "Потому что код с ключом работает медленнее",
          "Потому что любой человек с доступом к публичному репозиторию может увидеть и неправомерно использовать этот ключ",
          "Потому что это запрещено техническими ограничениями GitHub",
          "Эта практика совершенно безопасна при любых условиях"
        ],
        "correct": 1,
        "explain": "Ключ, опубликованный в коде на GitHub, становится видимым всем с доступом к репозиторию, что создаёт риск неправомерного использования, превышения лимитов или финансовых потерь."
      },
      {
        "q": "Что такое переменная окружения в контексте хранения секретов?",
        "options": [
          "Переменная, которая хранится прямо в основном файле кода",
          "Значение, хранящееся отдельно от кода (например, в файле .env), к которому код обращается по имени, не раскрывая сам секрет в исходном коде",
          "Специальная функция Python для вывода текста в консоль",
          "Переменная, которая автоматически меняется каждый день"
        ],
        "correct": 1,
        "explain": "Переменная окружения разделяет 'логику использования' значения (которая может быть публичной, в коде) от самого секретного значения (которое хранится отдельно, например в .env)."
      },
      {
        "q": "Какую роль играет файл .gitignore?",
        "options": [
          "Он ускоряет работу Git технически",
          "Он перечисляет файлы и папки, которые Git не должен отслеживать и никогда не отправит на GitHub",
          "Он автоматически шифрует все файлы проекта",
          ".gitignore не имеет практического значения и используется только для порядка"
        ],
        "correct": 1,
        "explain": ".gitignore задаёт список исключений, которые Git полностью игнорирует — файлы из этого списка никогда не попадают в коммиты и, соответственно, никогда не отправляются на GitHub."
      },
      {
        "q": "Что нужно сделать, если ключ УЖЕ был случайно закоммичен и запушен на публичный GitHub хотя бы один раз?",
        "options": [
          "Просто удалить строку с ключом из кода в новом коммите — этого достаточно",
          "Ничего не делать, одноразовая публикация не создаёт риска",
          "Считать ключ скомпрометированным и сгенерировать новый ключ на сайте сервиса, так как старый остаётся в истории Git",
          "Переименовать файл с ключом"
        ],
        "correct": 2,
        "explain": "Даже если удалить строку с ключом в новом коммите, старое значение остаётся доступным в истории коммитов Git. Единственный надёжный способ — считать ключ скомпрометированным и получить новый."
      },
      {
        "q": "Какая команда позволяет проверить, что файл .env не попадёт в следующий коммит?",
        "options": [
          "python main.py",
          "git status",
          "pip install requests",
          "mkdir"
        ],
        "correct": 1,
        "explain": "git status показывает текущий статус файлов относительно Git, включая то, какие файлы отслеживаются и готовы к коммиту — если .gitignore настроен правильно, .env не появится в этом списке."
      }
    ],
    "glossary": [
      {
        "term": "Переменная окружения",
        "def": "Значение, хранящееся отдельно от исходного кода программы (например, в файле .env), к которому код обращается по имени без раскрытия самого секрета в коде."
      },
      {
        "term": ".env файл",
        "def": "Текстовый файл в корне проекта, содержащий пары 'ИМЯ_ПЕРЕМЕННОЙ=значение' для локального хранения секретов."
      },
      {
        "term": ".gitignore",
        "def": "Файл, определяющий список файлов и папок, которые Git должен игнорировать и никогда не включать в коммиты."
      },
      {
        "term": "python-dotenv",
        "def": "Библиотека Python для загрузки переменных окружения из файла .env в программу."
      },
      {
        "term": "Скомпрометированный ключ",
        "def": "Ключ, безопасность которого нарушена (например, стал публично видимым), и который следует считать небезопасным для дальнейшего использования."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: my-project/ →   .env  (ключ, не в Git) →   .gitignore →   main.py\"><rect x=\"150\" y=\"20\" width=\"340\" height=\"160\" rx=\"12\" fill=\"#161b25\" stroke=\"#2a3040\" stroke-width=\"2\"/><text x=\"176\" y=\"54\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#fbbf24\">my-project/</text><text x=\"176\" y=\"80\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#e8ebf2\">  .env  (ключ, не в Git)</text><text x=\"176\" y=\"106\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#e8ebf2\">  .gitignore</text><text x=\"176\" y=\"132\" font-family=\"Consolas, Menlo, monospace\" font-size=\"14\" fill=\"#e8ebf2\">  main.py</text></svg>"
  },
  {
    "id": "m4w3",
    "month": 4,
    "week": 3,
    "title": "Простой веб-интерфейс для своего приложения",
    "duration": "4–5 часов",
    "goal": "Понять разницу между консольным и веб-интерфейсом и обернуть существующую логику приложения в простой визуальный интерфейс на Streamlit.",
    "theory": [
      {
        "heading": "Консоль vs веб-интерфейс: что меняется, а что остаётся прежним",
        "text": "Консольное приложение (как ты делал весь месяц 3) требует от пользователя печатать команды и читать текст в терминале — это нормально для разработчика, но неудобно и непонятно для обычного человека. Веб-интерфейс заменяет текстовый ввод на привычные визуальные элементы: кнопки, поля ввода, списки с галочками, отображаемые в браузере. Критически важная идея этого урока: логика приложения (функции обработки данных, сохранение в файл) остаётся АБСОЛЮТНО той же самой — меняется только способ её показа и взаимодействия. Это прямое применение принципа разделения логики и интерфейса из месяца 3.",
        "example": "Функция add_task(task_name), которая добавляет задачу в список, работает одинаково, вызывается ли она после ввода текста в консоли или после нажатия кнопки 'Добавить' на веб-странице — разница только в том, ЧТО вызывает эту функцию."
      },
      {
        "heading": "Streamlit: самый быстрый способ сделать веб-интерфейс для новичка",
        "text": "Streamlit — это библиотека Python, которая позволяет создавать веб-интерфейсы, используя почти такой же простой код, как обычные консольные программы, без необходимости изучать HTML, CSS и JavaScript с нуля. Вместо print() используется st.write(), вместо input() — st.text_input() или st.button(), и библиотека сама превращает это в полноценную работающую веб-страницу. Это идеальный инструмент для первого знакомства с веб-разработкой, потому что он не требует изучения отдельного 'языка для веба' — ты применяешь уже знакомые концепции Python (функции, переменные, условия) в новом контексте.",
        "example": "Код st.text_input('Введите название задачи') создаёт на веб-странице поле для ввода текста, а st.button('Добавить') — кликабельную кнопку, оба элемента появляются в браузере автоматически, без написания HTML."
      },
      {
        "heading": "Концепция 'перерисовки' страницы в Streamlit",
        "text": "Важная особенность, которая отличается от консольного программирования: в Streamlit при любом взаимодействии пользователя (нажатии кнопки, вводе текста) весь скрипт запускается заново от начала до конца, и страница 'перерисовывается' с новыми данными. Это непривычно для новичка, привыкшего к линейному выполнению консольной программы, но является стандартной моделью работы веб-интерфейсов такого типа. Понимание этой особенности объясняет, почему для сохранения состояния (например, списка задач между нажатиями кнопок) нужны специальные механизмы (st.session_state), а не просто обычные переменные.",
        "example": "Если просто написать tasks = [] в начале скрипта Streamlit, при каждом нажатии любой кнопки этот список будет создаваться заново пустым — нужно использовать st.session_state.tasks, чтобы данные сохранялись между взаимодействиями в рамках одной сессии браузера."
      },
      {
        "heading": "Перенос существующей логики в новый интерфейс — а не переписывание с нуля",
        "text": "Главная задача этой недели — НЕ писать новое приложение, а взять уже работающую логику (функции из модулей месяца 3: добавление, сохранение, загрузка) и подключить её к новому визуальному слою. Это проверка того, насколько хорошо была разделена логика и интерфейс в прошлом месяце: если разделение было сделано правильно, перенос в веб должен быть относительно быстрым, потому что меняется только то, как вызываются уже существующие функции, а не их внутреннее содержание.",
        "example": "Если у тебя есть функция save_data(data) из storage.py, написанная в месяце 3, она может использоваться без изменений и в консольной версии, и в Streamlit-версии приложения — меняется только то, откуда берутся данные для сохранения (ввод из консоли vs ввод из веб-формы)."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Установи Streamlit",
        "instruction": "Установи библиотеку через терминал в папке своего проекта.",
        "prompt": "pip install streamlit",
        "expected": "Библиотека устанавливается без ошибок."
      },
      {
        "step": 2,
        "title": "Запусти простейший тестовый пример Streamlit",
        "instruction": "Попроси ИИ дать минимальный пример, чтобы убедиться, что всё работает технически, прежде чем переносить реальную логику.",
        "prompt": "Напиши минимальный пример приложения Streamlit: заголовок страницы, текстовое поле для ввода имени и кнопка, при нажатии которой выводится приветствие с этим именем.",
        "expected": "Файл app.py с минимальным кодом Streamlit."
      },
      {
        "step": 3,
        "title": "Запусти приложение Streamlit через специальную команду",
        "instruction": "В отличие от обычных скриптов, Streamlit-приложения запускаются особой командой, которая автоматически открывает браузер.",
        "prompt": "streamlit run app.py",
        "expected": "В браузере автоматически открывается страница с заголовком, полем ввода и кнопкой — это подтверждает, что окружение настроено верно."
      },
      {
        "step": 4,
        "title": "Покажи ИИ существующую логику приложения месяца 3",
        "instruction": "Отправь весь существующий код модулей (storage.py и логику операций) и попроси план переноса в Streamlit.",
        "prompt": "Вот моя существующая логика приложения из консольной версии: [вставь код storage.py и модуля с логикой операций]. Я хочу создать веб-интерфейс на Streamlit для этого приложения, используя эти же функции без изменений. Опиши план: какие элементы интерфейса Streamlit (поля ввода, кнопки, списки) понадобятся для каждой функции, прежде чем писать итоговый код.",
        "expected": "План соответствия между существующими функциями и элементами интерфейса Streamlit, до получения итогового кода."
      },
      {
        "step": 5,
        "title": "Получи и внедри итоговый код веб-версии",
        "instruction": "Попроси финальный код приложения, с явным указанием сохранить существующие функции логики без изменений.",
        "prompt": "Теперь напиши полный код app.py для Streamlit-версии моего приложения, используя функции [перечисли их] без изменения их внутренней логики, и используя st.session_state для сохранения данных в рамках сессии. Подключи кнопки для каждого основного действия моего приложения.",
        "expected": "Файл app.py, который визуально показывает интерфейс для твоего реального приложения (не тестового примера), использующий уже существующую логику."
      },
      {
        "step": 6,
        "title": "Протестируй веб-версию на тех же сценариях, что и консольную",
        "instruction": "Запусти streamlit run app.py и пройди те же тестовые сценарии, что ты составлял в месяце 3 (неделя 4): добавление, просмотр, граничные случаи.",
        "prompt": "streamlit run app.py",
        "expected": "Веб-версия ведёт себя логически так же, как консольная (использует ту же логику), но взаимодействие происходит через кнопки и поля вместо текстового ввода."
      },
      {
        "step": 7,
        "title": "Зафиксируй, что изменилось, а что осталось прежним",
        "instruction": "В заметке напиши 3-4 предложения: какие именно функции логики (storage.py и т.д.) остались без изменений, и что конкретно поменялось в способе взаимодействия с приложением.",
        "prompt": null,
        "expected": "Письменное подтверждение понимания принципа разделения логики и интерфейса на практическом примере."
      }
    ],
    "test": [
      {
        "q": "Что принципиально остаётся неизменным при переносе консольного приложения в веб-интерфейс, если логика и интерфейс были правильно разделены ранее?",
        "options": [
          "Весь код приложения нужно писать заново с нуля",
          "Логика обработки данных (функции сохранения, загрузки, вычислений) остаётся прежней, меняется только способ взаимодействия с пользователем",
          "Меняется только язык программирования",
          "Ничего не остаётся неизменным — это два совершенно разных приложения"
        ],
        "correct": 1,
        "explain": "Если логика была правильно отделена от интерфейса (как изучалось в месяце 3), перенос в веб затрагивает только слой взаимодействия с пользователем, а функции обработки данных можно использовать без изменений."
      },
      {
        "q": "Чем Streamlit облегчает создание веб-интерфейса для новичка в программировании?",
        "options": [
          "Он требует предварительного изучения HTML, CSS и JavaScript",
          "Он позволяет создавать веб-интерфейсы, используя привычный синтаксис Python, без необходимости изучать отдельные веб-технологии с нуля",
          "Streamlit работает только с текстовыми интерфейсами, без визуальных элементов",
          "Streamlit заменяет необходимость писать код вообще"
        ],
        "correct": 1,
        "explain": "Streamlit — библиотека Python, которая превращает обычный Python-код в веб-интерфейс, позволяя применять уже знакомые концепции (функции, переменные) без отдельного изучения HTML/CSS/JS."
      },
      {
        "q": "Что происходит в Streamlit при любом взаимодействии пользователя (например, нажатии кнопки)?",
        "options": [
          "Ничего не происходит, пока пользователь не закроет страницу",
          "Весь скрипт запускается заново от начала до конца, и страница 'перерисовывается'",
          "Запускается только та часть кода, которая отвечает за нажатую кнопку, остальной код не выполняется",
          "Streamlit никогда не перезапускает код автоматически"
        ],
        "correct": 1,
        "explain": "Особенность модели работы Streamlit заключается в том, что весь скрипт выполняется повторно при каждом взаимодействии, что отличается от линейного выполнения консольной программы и требует специальных механизмов для сохранения состояния."
      },
      {
        "q": "Зачем нужен st.session_state в приложениях Streamlit?",
        "options": [
          "Для ускорения загрузки страницы",
          "Для сохранения данных (например, списка задач) между повторными запусками скрипта в рамках одной пользовательской сессии",
          "Для подключения внешних API",
          "Для автоматического перевода текста интерфейса"
        ],
        "correct": 1,
        "explain": "Поскольку весь скрипт Streamlit перезапускается при каждом взаимодействии, обычные переменные 'сбрасываются'. st.session_state позволяет сохранять данные между этими перезапусками в рамках сессии пользователя."
      },
      {
        "q": "Какая команда используется для запуска приложения на Streamlit, в отличие от обычного запуска скрипта Python?",
        "options": [
          "python app.py",
          "streamlit run app.py",
          "git push app.py",
          "pip install app.py"
        ],
        "correct": 1,
        "explain": "Streamlit-приложения запускаются специальной командой streamlit run, которая поднимает локальный веб-сервер и автоматически открывает страницу приложения в браузере."
      }
    ],
    "glossary": [
      {
        "term": "Streamlit",
        "def": "Библиотека Python для быстрого создания веб-интерфейсов без необходимости изучать HTML, CSS и JavaScript."
      },
      {
        "term": "st.session_state",
        "def": "Механизм Streamlit для сохранения данных между повторными запусками скрипта в рамках одной сессии пользователя."
      },
      {
        "term": "Веб-интерфейс",
        "def": "Визуальный способ взаимодействия с приложением через браузер (кнопки, поля ввода), в отличие от текстового консольного интерфейса."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Логика → Streamlit-интерфейс → Браузер\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Логика</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\"></text><text x=\"320.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Streamlit-интерфейс</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Браузер</text></svg>"
  },
  {
    "id": "m4w4",
    "month": 4,
    "week": 4,
    "title": "Итоговый проект месяца: веб-приложение + внешний API",
    "duration": "4–5 часов",
    "goal": "Собрать полноценное веб-приложение, интегрирующее внешний API, и опубликовать его в интернете на бесплатном хостинге.",
    "theory": [
      {
        "heading": "Интеграция API в приложение с собственной логикой — не просто 'показ' данных",
        "text": "До этой недели ты либо просто получал данные из API и выводил их (неделя 1), либо работал с собственной логикой приложения без внешних данных (месяц 3). Настоящая ценность появляется, когда внешние данные становятся частью твоей собственной логики: например, не просто показать курс валюты, а сохранить историю запросов пользователя, или не просто показать погоду, а на основе неё дать рекомендацию. Это требует продумывания, как данные из API 'встраиваются' в существующую структуру данных твоего приложения, а не просто выводятся отдельно.",
        "example": "Простой показ курса валюты: 'Курс доллара сегодня: 95 рублей' — это просто отображение API. Собственная логика на основе API: конвертер, который запоминает каждый запрос пользователя в истории с датой и показывает, как менялся выбранный курс за последние запросы."
      },
      {
        "heading": "Обработка ошибок сети — что если внешний сервис не ответил",
        "text": "В отличие от собственных данных (которые ты полностью контролируешь), внешний API — это зависимость, которая может подвести: сервис может быть временно недоступен, интернет-соединение может прерваться, может закончиться лимит бесплатных запросов. Приложение, которое не предусматривает такие ситуации, просто 'падает' с непонятной ошибкой, что выглядит непрофессионально и сбивает пользователя с толку. Правильный подход — оборачивать запрос к API в конструкцию try/except (которую ты, возможно, уже видел в предыдущих уроках при отладке) и показывать пользователю понятное сообщение вроде 'Не удалось получить данные, попробуйте позже' вместо технического traceback.",
        "example": "Вместо того чтобыпозволить программе упасть при отсутствии интернета, код пытается сделать запрос (try), и если это не получается (except), показывает дружелюбное сообщение об ошибке, сохраняя приложение в рабочем состоянии."
      },
      {
        "heading": "Что такое деплой и зачем он нужен",
        "text": "Деплой (deployment) — это процесс размещения твоего приложения на сервере в интернете, чтобы к нему был доступ по постоянной публичной ссылке, а не только на твоём локальном компьютере через localhost. До этого момента все твои приложения работали только у тебя на компьютере — показать их другому человеку означало бы отправить файлы и попросить установить всё то же самое окружение. После деплоя любой человек может открыть ссылку в браузере и воспользоваться приложением без какой-либо установки. Streamlit Community Cloud — бесплатный хостинг, специально созданный для публикации Streamlit-приложений, минимальными усилиями по настройке сервера.",
        "example": "Разница между 'я показал тебе скриншот приложения на своём компьютере' и 'вот ссылка, зайди и попробуй сам прямо сейчас' — это именно разница, которую даёт деплой."
      },
      {
        "heading": "Секреты при деплое: как не повторить ошибку месяца, но в облаке",
        "text": "При публикации приложения на облачном хостинге возникает тот же вопрос безопасности, что и с .env локально: нельзя публиковать API-ключ в коде репозитория. Облачные хостинги (включая Streamlit Community Cloud) предоставляют отдельный механизм для хранения секретов именно в настройках хостинга (а не в коде), который работает похожим образом на .env, но настраивается через веб-интерфейс сервиса, а не через локальный файл. Важно подключить ключ именно через этот механизм хостинга, а не вписывать его в код перед публикацией.",
        "example": "В Streamlit Community Cloud секреты добавляются через раздел 'Secrets' в настройках приложения на сайте, а не через файл .env, который туда не загружается вместе с кодом из GitHub."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Спроектируй объединённую функциональность: собственные данные + API",
        "instruction": "Реши, как именно внешний API будет встроен в твою логику (например: конвертер валют с историей запросов, или трекер привычек с показом погоды для контекста). Запиши короткое архитектурное решение по аналогии с месяцем 3.",
        "prompt": null,
        "expected": "Письменное решение: что именно делает приложение, объединяя собственную логику и внешние данные."
      },
      {
        "step": 2,
        "title": "Попроси ИИ интегрировать вызов API в существующую логику",
        "instruction": "Отправь промпт с описанием желаемой интеграции.",
        "prompt": "У меня есть приложение с такой логикой: [опиши существующую логику]. Я хочу добавить вызов API для [описание, что именно получать из API] и сохранять результат каждого запроса в историю (список словарей с датой и значением), используя существующую функцию save_data(). Предложи, как изменить код, прежде чем давать финальную версию.",
        "expected": "План интеграции перед получением полного кода, с описанием, как новые данные встраиваются в существующую структуру."
      },
      {
        "step": 3,
        "title": "Добавь обработку ошибок сети",
        "instruction": "Попроси явно добавить try/except для вызова API.",
        "prompt": "Добавь обработку ошибок в код запроса к API: если запрос не удался (нет интернета, сервис недоступен, превышен лимит), программа должна показать пользователю понятное сообщение 'Не удалось получить данные, попробуйте позже' вместо падения с ошибкой.",
        "expected": "Код, оборачивающий вызов API в try/except с понятным сообщением при сбое."
      },
      {
        "step": 4,
        "title": "Протестируй обработку ошибок искусственно",
        "instruction": "Временно отключи интернет (или измени URL API на неверный) и проверь, что приложение показывает дружелюбное сообщение, а не падает с traceback. Потом верни корректные настройки.",
        "prompt": "streamlit run app.py",
        "expected": "При сбое соединения приложение показывает понятное сообщение об ошибке и продолжает работать, не вылетая полностью."
      },
      {
        "step": 5,
        "title": "Загрузи финальную версию проекта на GitHub",
        "instruction": "Сделай финальный коммит объединённой веб-версии с интеграцией API, обнови README через ИИ (включая информацию о необходимости API-ключа для запуска) и запушь.",
        "prompt": "git add .\ngit commit -m \"Интегрировать внешний API в веб-приложение с обработкой ошибок сети\"\ngit push",
        "expected": "Актуальный код на GitHub, без .env файла в репозитории (как и в уроке недели 2)."
      },
      {
        "step": 6,
        "title": "Задеплой приложение на Streamlit Community Cloud",
        "instruction": "Зайди на share.streamlit.io, авторизуйся через GitHub, выбери свой репозиторий и файл app.py, нажми Deploy.",
        "prompt": null,
        "expected": "Процесс деплоя запущен, Streamlit Community Cloud начинает устанавливать зависимости и собирать приложение.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Публикация на Streamlit Community Cloud\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><rect x=\"90\" y=\"16\" width=\"360\" height=\"18\" rx=\"9\" fill=\"#ffffff\" /><text x=\"102\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#374151\" font-weight=\"400\" text-anchor=\"start\">share.streamlit.io</text><rect x=\"10\" y=\"80\" width=\"620\" height=\"270\" rx=\"0\" fill=\"#f9fafb\" /><rect x=\"10\" y=\"40\" width=\"620\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#e5e7eb\" stroke-width=\"1\" /><text x=\"30\" y=\"66\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"14\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">Streamlit · My apps</text><rect x=\"508\" y=\"50\" width=\"104\" height=\"26\" rx=\"6\" fill=\"#ff4b4b\" /><text x=\"560.0\" y=\"67.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Create app</text><rect x=\"505\" y=\"47\" width=\"110\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"616\" cy=\"48\" r=\"11\" fill=\"#f59e0b\"/><text x=\"616\" y=\"52.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"30\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"16\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">Deploy an app</text><text x=\"30\" y=\"142\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"start\">Repository</text><rect x=\"30\" y=\"150\" width=\"280\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"40\" y=\"168\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">your-name/my-project</text><rect x=\"27\" y=\"147\" width=\"286\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"308\" cy=\"148\" r=\"11\" fill=\"#f59e0b\"/><text x=\"308\" y=\"152.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><text x=\"30\" y=\"196\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"start\">Branch</text><rect x=\"30\" y=\"204\" width=\"280\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"40\" y=\"222\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">main</text><text x=\"330\" y=\"142\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"start\">Main file path</text><rect x=\"330\" y=\"150\" width=\"270\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"340\" y=\"168\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">app.py</text><rect x=\"327\" y=\"147\" width=\"276\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"598\" cy=\"148\" r=\"11\" fill=\"#f59e0b\"/><text x=\"598\" y=\"152.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><text x=\"330\" y=\"222\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">Advanced settings — здесь же</text><text x=\"330\" y=\"238\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">можно сразу добавить Secrets</text><rect x=\"30\" y=\"270\" width=\"140\" height=\"36\" rx=\"6\" fill=\"#ff4b4b\" /><text x=\"100.0\" y=\"292.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Deploy</text><rect x=\"27\" y=\"267\" width=\"146\" height=\"42\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"168\" cy=\"268\" r=\"11\" fill=\"#f59e0b\"/><text x=\"168\" y=\"272.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">4</text></svg>",
          "caption": "Create app (1) → репозиторий (2) → файл app.py (3) → Deploy (4). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 7,
        "title": "Добавь секретный API-ключ через настройки хостинга",
        "instruction": "В настройках приложения на Streamlit Community Cloud найди раздел Secrets и добавь туда свой API-ключ. Внимание: формат здесь другой, чем в .env. Это формат TOML, поэтому значение пишется в кавычках: API_KEY = \"ваш_ключ\". В коде приложения ключ читается через st.secrets[\"API_KEY\"] (попроси ИИ поправить код, если он читает ключ только из .env).",
        "prompt": null,
        "expected": "Приложение в облаке получает доступ к ключу без того, чтобы он был виден в публичном коде на GitHub.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Секреты в Streamlit Community Cloud\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><rect x=\"90\" y=\"16\" width=\"360\" height=\"18\" rx=\"9\" fill=\"#ffffff\" /><text x=\"102\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#374151\" font-weight=\"400\" text-anchor=\"start\">share.streamlit.io</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"310\" rx=\"0\" fill=\"#f9fafb\" /><text x=\"30\" y=\"70\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"14\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">My apps</text><rect x=\"30\" y=\"84\" width=\"260\" height=\"44\" rx=\"8\" fill=\"#ffffff\" stroke=\"#e5e7eb\" stroke-width=\"1\" /><text x=\"44\" y=\"111\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">my-project · app.py</text><text x=\"270\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"16\" fill=\"#374151\" font-weight=\"700\" text-anchor=\"middle\">⋮</text><rect x=\"255\" y=\"89\" width=\"30\" height=\"34\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"288\" cy=\"88\" r=\"11\" fill=\"#f59e0b\"/><text x=\"288\" y=\"92.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><rect x=\"190\" y=\"132\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"204\" y=\"152\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"600\" text-anchor=\"start\">Settings</text><rect x=\"187\" y=\"129\" width=\"126\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"316\" cy=\"130\" r=\"11\" fill=\"#f59e0b\"/><text x=\"316\" y=\"134.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><rect x=\"330\" y=\"60\" width=\"290\" height=\"270\" rx=\"8\" fill=\"#ffffff\" stroke=\"#e5e7eb\" stroke-width=\"1\" /><text x=\"346\" y=\"86\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"14\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">App settings</text><text x=\"346\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">General</text><rect x=\"400\" y=\"98\" width=\"64\" height=\"22\" rx=\"4\" fill=\"#fee2e2\" /><text x=\"412\" y=\"114\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#b91c1c\" font-weight=\"600\" text-anchor=\"start\">Secrets</text><rect x=\"397\" y=\"95\" width=\"70\" height=\"28\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"470\" cy=\"96\" r=\"11\" fill=\"#f59e0b\"/><text x=\"470\" y=\"100.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><rect x=\"346\" y=\"132\" width=\"258\" height=\"96\" rx=\"6\" fill=\"#111827\" /><text x=\"356\" y=\"160\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#a7f3d0\" font-weight=\"400\" text-anchor=\"start\">API_KEY = &quot;ваш_ключ&quot;</text><text x=\"356\" y=\"184\" font-family=\"Consolas, Menlo, monospace\" font-size=\"11\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\"># формат TOML:</text><text x=\"356\" y=\"202\" font-family=\"Consolas, Menlo, monospace\" font-size=\"11\" fill=\"#9ca3af\" font-weight=\"400\" text-anchor=\"start\"># значение в кавычках</text><rect x=\"343\" y=\"129\" width=\"264\" height=\"102\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"610\" cy=\"130\" r=\"11\" fill=\"#f59e0b\"/><text x=\"610\" y=\"134.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">4</text><rect x=\"346\" y=\"244\" width=\"90\" height=\"30\" rx=\"6\" fill=\"#ff4b4b\" /><text x=\"391.0\" y=\"263.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Save</text><rect x=\"343\" y=\"241\" width=\"96\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"434\" cy=\"242\" r=\"11\" fill=\"#f59e0b\"/><text x=\"434\" y=\"246.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">5</text></svg>",
          "caption": "Меню приложения ⋮ (1) → Settings (2) → Secrets (3) → ключ в формате TOML (4) → Save (5). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 8,
        "title": "Получи рабочую публичную ссылку и протестируй её",
        "instruction": "После завершения деплоя открой полученную публичную ссылку в браузере (в идеале — с другого устройства или в режиме инкогнито) и протестируй основной функционал приложения.",
        "prompt": null,
        "expected": "Рабочее приложение, доступное по постоянной публичной ссылке, без необходимости устанавливать что-либо локально."
      }
    ],
    "test": [
      {
        "q": "Чем интеграция API в собственную логику приложения отличается от простого вывода данных из API?",
        "options": [
          "Это одно и то же, разницы нет",
          "Интеграция включает внешние данные в собственную структуру и логику приложения (например, историю запросов), а не просто показывает их отдельно",
          "Интеграция возможна только с платными API",
          "Интеграция не требует обработки ошибок, в отличие от простого вывода"
        ],
        "correct": 1,
        "explain": "Настоящая интеграция подразумевает, что данные из API становятся частью собственной логики приложения (сохраняются, обрабатываются вместе с другими данными), а не просто выводятся изолированно на экран."
      },
      {
        "q": "Почему важно оборачивать вызов внешнего API в try/except?",
        "options": [
          "Это чисто формальное требование без практического смысла",
          "Внешний сервис может быть недоступен или дать сбой, и без обработки ошибок приложение будет 'падать' с непонятным сообщением вместо дружелюбного предупреждения",
          "try/except ускоряет работу запроса к API",
          "Без try/except API вообще не будет отвечать"
        ],
        "correct": 1,
        "explain": "Внешний API — это зависимость, которая может подвести по причинам, не связанным с твоим кодом (сбой сети, недоступность сервиса). try/except позволяет корректно обработать такие ситуации и показать понятное сообщение вместо технической ошибки."
      },
      {
        "q": "Что такое деплой приложения?",
        "options": [
          "Процесс написания кода приложения",
          "Процесс размещения приложения на сервере в интернете для доступа по постоянной публичной ссылке",
          "Процесс удаления приложения с компьютера",
          "Процесс тестирования приложения локально"
        ],
        "correct": 1,
        "explain": "Деплой — именно публикация приложения на сервере, после которой оно доступно по ссылке в интернете, без необходимости установки у каждого пользователя отдельно."
      },
      {
        "q": "Как правильно хранить API-ключ при деплое на Streamlit Community Cloud, согласно уроку?",
        "options": [
          "Вписать ключ прямо в код перед публикацией на GitHub",
          "Использовать специальный раздел Secrets в настройках хостинга, который не публикуется вместе с кодом из GitHub",
          "Отправить ключ администратору Streamlit по почте",
          "Хранение ключа при деплое не требуется, в отличие от локальной разработки"
        ],
        "correct": 1,
        "explain": "Облачные хостинги предоставляют отдельный механизм хранения секретов (например, раздел Secrets в Streamlit Community Cloud), который работает похоже на .env, но настраивается через веб-интерфейс сервиса, не попадая в публичный код."
      },
      {
        "q": "Что из перечисленного ЛУЧШЕ всего описывает итоговый результат этого урока (и месяца 4 в целом)?",
        "options": [
          "Консольное приложение, работающее только на локальном компьютере",
          "Опубликованное в интернете веб-приложение с собственным интерфейсом, которое использует внешний API, безопасно хранит ключи и обрабатывает ошибки сети",
          "Теоретическое описание архитектуры без реализации",
          "Приложение, доступное только через терминал без графического интерфейса"
        ],
        "correct": 1,
        "explain": "Итоговый артефакт месяца объединяет все навыки месяца: веб-интерфейс (неделя 3), интеграцию и безопасность API (недели 1-2) и публикацию в интернете с обработкой ошибок (неделя 4)."
      }
    ],
    "glossary": [
      {
        "term": "Деплой (deployment)",
        "def": "Процесс размещения приложения на сервере в интернете для доступа по постоянной публичной ссылке."
      },
      {
        "term": "try/except",
        "def": "Конструкция Python для обработки потенциальных ошибок во время выполнения кода без падения всей программы."
      },
      {
        "term": "Streamlit Community Cloud",
        "def": "Бесплатный облачный хостинг, специально предназначенный для публикации Streamlit-приложений."
      },
      {
        "term": "Secrets (хостинга)",
        "def": "Механизм облачного хостинга для хранения секретных значений (ключей, паролей), доступный только самому приложению и не публикуемый вместе с кодом."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Код на GitHub → Streamlit Cloud → Ссылка для всех\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Код на GitHub</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Streamlit Cloud</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ссылка для всех</text></svg>"
  },
  {
    "id": "m5w1",
    "month": 5,
    "week": 1,
    "title": "Токены, контекст, стоимость запросов",
    "duration": "4–5 часов",
    "goal": "Понять, что такое токены и окно контекста, и научиться оценивать объём и примерную стоимость запроса к LLM API до его отправки.",
    "theory": [
      {
        "heading": "Переход от чата к коду: что меняется",
        "text": "До этого момента ты пользовался нейросетями через готовый чат-интерфейс (ChatGPT, Claude, Gemini в браузере). Начиная с этого урока, твоя собственная программа будет напрямую обращаться к модели через LLM API — то есть ты пишешь код, который отправляет запрос модели и получает ответ, без привычного окна чата. Это открывает путь к главной цели курса: интеграции нейросети внутрь своего приложения, что в итоге приведёт к созданию собственного ИИ-агента. Важно понимать: сам принцип общения с моделью (структурированный промпт, итеративность) остаётся тем же, что ты изучал в месяце 2 — меняется только способ отправки запроса: не через окно браузера, а через код.",
        "example": "В чате ты печатаешь вопрос и видишь ответ на экране. В коде ты пишешь, например, так (это пример для Claude): response = client.messages.create(model=\"имя-модели\", max_tokens=1024, messages=[{\"role\": \"user\", \"content\": \"твой вопрос\"}]). Текст ответа лежит в response.content[0].text, и с ним можно делать что угодно дальше в программе — сохранить, обработать, показать по-своему. У OpenAI названия методов немного другие, но идея та же: модель, сообщения, ограничение длины ответа."
      },
      {
        "heading": "Токен — единица измерения текста для модели",
        "text": "Токен — это фрагмент текста, который модель обрабатывает как единицу (часто это не целое слово, а часть слова или несколько символов, в зависимости от языка и конкретной модели). Все ограничения модели (сколько текста она может обработать за раз, сколько стоит запрос) считаются именно в токенах, а не в словах или символах. Для текста на русском языке токенов на единицу текста обычно получается больше, чем для аналогичного текста на английском, из-за особенностей того, как модели обучались разбивать текст. Понимание этого важно практически: твой промпт, история диалога и ответ модели — всё вместе должно укладываться в допустимый лимит токенов модели.",
        "example": "Слово 'программирование' на русском может быть разбито на несколько токенов, в то время как короткое английское слово 'code' может занимать всего один токен — это одна из причин, почему тексты на разных языках 'весят' по-разному в токенах при одинаковом количестве слов."
      },
      {
        "heading": "Окно контекста: предел того, что модель 'видит' за раз",
        "text": "Окно контекста — это максимальное суммарное количество токенов, которое модель может обработать в рамках одного запроса, включая системный промпт, всю историю диалога и генерируемый ответ. Если общий объём превышает этот лимит, происходит одно из двух: запрос просто не будет обработан с ошибкой, либо (в зависимости от реализации) самая старая часть истории диалога 'обрезается' и теряется из виду модели. Это объясняет практическое наблюдение, которое ты, возможно, замечал в обычных чатах: при очень долгом диалоге модель 'забывает' детали, упомянутые в самом начале разговора — они просто вышли за пределы окна контекста.",
        "example": "Если окно контекста модели составляет 128 000 токенов, а твой системный промпт плюс история диалога уже заняли 127 000 токенов — у модели остаётся очень мало 'места' для содержательного ответа, и качество может заметно упасть."
      },
      {
        "heading": "Стоимость запроса: платится за входные и выходные токены отдельно",
        "text": "При использовании LLM API (в отличие от обычного чата с фиксированной подпиской) оплата обычно происходит за каждый обработанный токен, причём входные токены (твой промпт и история) и выходные токены (ответ модели) часто оплачиваются по разным ставкам. Для учебных и небольших прикладных проектов стоимость обычно крайне мала (центы или доли центов за запрос), но при создании реального продукта с большим количеством пользователей это становится значимой статьёй расходов, которую нужно уметь прогнозировать заранее, а не узнавать постфактум по счёту.",
        "example": "Если входные токены стоят условно 3 доллара за миллион токенов, а выходные — 15 долларов за миллион, то длинный промпт с коротким ответом будет стоить иначе, чем короткий промпт с длинным развёрнутым ответом — это важно учитывать при проектировании промптов для продукта, который будет использоваться многократно."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Получи доступ к LLM API",
        "instruction": "Зарегистрируйся в консоли разработчика одного из провайдеров (например, platform.claude.com для Claude API или platform.openai.com для OpenAI API) и получи API-ключ. Сохрани его немедленно в .env по правилам из месяца 4.",
        "prompt": null,
        "expected": "Рабочий API-ключ, сохранённый в файле .env, который добавлен в .gitignore.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Создание API-ключа в Claude Console\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><rect x=\"90\" y=\"16\" width=\"360\" height=\"18\" rx=\"9\" fill=\"#ffffff\" /><text x=\"102\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#374151\" font-weight=\"400\" text-anchor=\"start\">platform.claude.com/settings/keys</text><rect x=\"10\" y=\"40\" width=\"620\" height=\"310\" rx=\"0\" fill=\"#faf9f5\" /><rect x=\"10\" y=\"40\" width=\"150\" height=\"310\" rx=\"0\" fill=\"#f0eee6\" /><text x=\"26\" y=\"70\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#141413\" font-weight=\"700\" text-anchor=\"start\">Claude Console</text><text x=\"26\" y=\"104\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#5e5d59\" font-weight=\"400\" text-anchor=\"start\">Workbench</text><text x=\"26\" y=\"128\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#5e5d59\" font-weight=\"400\" text-anchor=\"start\">Usage</text><text x=\"26\" y=\"152\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#5e5d59\" font-weight=\"400\" text-anchor=\"start\">Settings</text><rect x=\"22\" y=\"162\" width=\"126\" height=\"24\" rx=\"4\" fill=\"#e3dacc\" /><text x=\"36\" y=\"179\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#141413\" font-weight=\"600\" text-anchor=\"start\">API keys</text><rect x=\"19\" y=\"159\" width=\"132\" height=\"30\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"152\" cy=\"160\" r=\"11\" fill=\"#f59e0b\"/><text x=\"152\" y=\"164.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"186\" y=\"74\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"18\" fill=\"#141413\" font-weight=\"700\" text-anchor=\"start\">API keys</text><rect x=\"500\" y=\"56\" width=\"110\" height=\"30\" rx=\"6\" fill=\"#c96442\" /><text x=\"555.0\" y=\"75.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Create key</text><rect x=\"497\" y=\"53\" width=\"116\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"614\" cy=\"54\" r=\"11\" fill=\"#f59e0b\"/><text x=\"614\" y=\"58.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><rect x=\"186\" y=\"110\" width=\"424\" height=\"150\" rx=\"10\" fill=\"#ffffff\" stroke=\"#e8e6dc\" stroke-width=\"1\" /><text x=\"204\" y=\"138\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"14\" fill=\"#141413\" font-weight=\"700\" text-anchor=\"start\">Ваш новый ключ</text><rect x=\"204\" y=\"152\" width=\"310\" height=\"30\" rx=\"6\" fill=\"#f5f4ed\" stroke=\"#e8e6dc\" stroke-width=\"1\" /><text x=\"214\" y=\"172\" font-family=\"Consolas, Menlo, monospace\" font-size=\"13\" fill=\"#141413\" font-weight=\"400\" text-anchor=\"start\">sk-ant-api03-••••••••••••</text><rect x=\"524\" y=\"152\" width=\"70\" height=\"30\" rx=\"6\" fill=\"#141413\" /><text x=\"559.0\" y=\"171.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Copy</text><rect x=\"521\" y=\"149\" width=\"76\" height=\"36\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"598\" cy=\"150\" r=\"11\" fill=\"#f59e0b\"/><text x=\"598\" y=\"154.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><text x=\"204\" y=\"212\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#b45309\" font-weight=\"600\" text-anchor=\"start\">Ключ показывается только один раз.</text><text x=\"204\" y=\"232\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#b45309\" font-weight=\"600\" text-anchor=\"start\">Сразу вставьте его в файл .env</text><text x=\"186\" y=\"296\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#5e5d59\" font-weight=\"400\" text-anchor=\"start\">Адрес: platform.claude.com → Settings → API keys</text></svg>",
          "caption": "Settings → API keys (1) → Create key (2) → Copy (3). Для OpenAI шаги похожи: platform.openai.com → API keys. Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 2,
        "title": "Установи официальную библиотеку для работы с API",
        "instruction": "Установи соответствующую библиотеку Python через терминал.",
        "prompt": "pip install anthropic\n# или, если используешь OpenAI:\npip install openai",
        "expected": "Библиотека устанавливается без ошибок."
      },
      {
        "step": 3,
        "title": "Попроси ИИ написать минимальный скрипт первого запроса к API",
        "instruction": "Отправь промпт с описанием задачи, явно указав использование переменной окружения для ключа.",
        "prompt": "Напиши минимальный скрипт на Python, который отправляет простой текстовый запрос к LLM API (используй библиотеку [anthropic/openai]), загружая API-ключ из переменной окружения через python-dotenv, и выводит текстовый ответ модели в консоль. Промпт для теста: 'Напиши одно предложение о пользе чтения книг'.",
        "expected": "Рабочий скрипт, который при запуске выводит реальный текстовый ответ от модели через API."
      },
      {
        "step": 4,
        "title": "Запусти и проверь первый программный вызов модели",
        "instruction": "Запусти скрипт через терминал.",
        "prompt": "python first_api_call.py",
        "expected": "В консоли появляется ответ модели — впервые полученный программно, а не через окно чата в браузере."
      },
      {
        "step": 5,
        "title": "Попроси ИИ написать функцию подсчёта токенов",
        "instruction": "Отправь промпт на реализацию простого подсчёта приблизительного количества токенов в тексте перед отправкой запроса.",
        "prompt": "Напиши функцию на Python, которая принимает текст и выводит приблизительное количество токенов в нём (можно использовать простую оценку: количество слов умножить на коэффициент, или библиотеку tiktoken, если она подходит). Объясни, почему это приблизительная, а не точная оценка.",
        "expected": "Функция, дающая примерную оценку количества токенов для произвольного текста."
      },
      {
        "step": 6,
        "title": "Протестируй подсчёт на текстах разной длины",
        "instruction": "Прогони функцию подсчёта токенов на трёх текстах: коротком предложении, абзаце из нескольких предложений, и длинном тексте (например, скопируй несколько абзацев статьи). Зафиксируй результаты.",
        "prompt": null,
        "expected": "Таблица: Текст / Примерное количество слов / Примерное количество токенов — наглядно показывающая рост объёма с длиной текста."
      },
      {
        "step": 7,
        "title": "Сравни стоимость запроса на русском и английском языке",
        "instruction": "Возьми один и тот же смысловой текст на русском и переведённую версию на английском (можно попросить перевод у ИИ), посчитай токены для обеих версий и сравни результат.",
        "prompt": null,
        "expected": "Наблюдение, подтверждающее или уточняющее теоретическое утверждение о разнице в токенизации разных языков на конкретном примере."
      }
    ],
    "test": [
      {
        "q": "Что такое токен в контексте работы с LLM API?",
        "options": [
          "Отдельное слово в тексте без исключений",
          "Фрагмент текста (часто часть слова или несколько символов), который модель обрабатывает как единицу измерения",
          "Специальный пароль для доступа к модели",
          "Единица времени ответа модели"
        ],
        "correct": 1,
        "explain": "Токен — это единица измерения объёма текста для модели, которая не всегда совпадает с целым словом — часто это часть слова или несколько символов, в зависимости от языка и конкретной модели."
      },
      {
        "q": "Что происходит, если суммарный объём токенов (промпт + история + ответ) превышает окно контекста модели?",
        "options": [
          "Модель автоматически увеличивает своё окно контекста без ограничений",
          "Запрос не обрабатывается с ошибкой, либо самая старая часть истории диалога теряется из поля видимости модели",
          "Модель работает без каких-либо изменений в качестве ответа",
          "Это невозможная ситуация, которая никогда не происходит на практике"
        ],
        "correct": 1,
        "explain": "Окно контекста — жёсткий лимит. При его превышении запрос может быть отклонён с ошибкой, либо устаревшая часть истории диалога обрезается и становится недоступной модели — это объясняет 'забывание' деталей в долгих чатах."
      },
      {
        "q": "Почему при использовании LLM API важно уметь оценивать количество токенов до отправки запроса?",
        "options": [
          "Это не имеет практического значения",
          "Оплата и ограничения LLM API считаются именно в токенах, поэтому заранее оценённый объём помогает прогнозировать стоимость и избежать превышения лимита контекста",
          "Токены нужны только для подсчёта времени ответа",
          "Эта оценка нужна только разработчикам моделей, а не пользователям API"
        ],
        "correct": 1,
        "explain": "Поскольку и стоимость, и технические ограничения LLM API измеряются в токенах, умение оценивать их объём заранее позволяет прогнозировать расходы и избегать проблем с превышением лимита контекста."
      },
      {
        "q": "Чем работа с LLM API через код принципиально отличается от использования обычного чата в браузере, согласно уроку?",
        "options": [
          "Полностью меняются принципы формулирования промптов",
          "Способ отправки запроса меняется (через код, а не окно чата), но принцип структурированного промпта и итеративности остаётся тем же",
          "В API невозможно использовать системные промпты",
          "LLM API работает только с изображениями, а не с текстом"
        ],
        "correct": 1,
        "explain": "Главное отличие — техническое: запрос отправляется через код вместо браузерного интерфейса. Принципы качественного промптинга, изученные в месяце 2, остаются полностью применимыми."
      },
      {
        "q": "Почему тексты на русском языке часто требуют больше токенов, чем аналогичные по смыслу тексты на английском?",
        "options": [
          "Русский язык технически не поддерживается большинством моделей",
          "Это особенность того, как модели были обучены разбивать текст на токены — для многих моделей русский текст разбивается на токены менее эффективно, чем английский",
          "Это не соответствует действительности, разницы никогда не бывает",
          "Русский язык всегда требует меньше токенов, чем английский"
        ],
        "correct": 1,
        "explain": "Из-за особенностей обучения токенизаторов моделей (часто основанных в первую очередь на английских текстовых корпусах), текст на русском языке при одинаковом смысле нередко разбивается на большее количество токенов, чем эквивалентный текст на английском."
      }
    ],
    "glossary": [
      {
        "term": "Токен",
        "def": "Единица измерения текста, используемая моделью для обработки — часто часть слова или несколько символов, а не целое слово."
      },
      {
        "term": "Окно контекста",
        "def": "Максимальное суммарное количество токенов (промпт + история + ответ), которое модель может обработать за один запрос."
      },
      {
        "term": "LLM API",
        "def": "Программный интерфейс, позволяющий отправлять запросы к большой языковой модели (LLM) напрямую из кода, а не через чат-интерфейс в браузере."
      },
      {
        "term": "Входные/выходные токены",
        "def": "Токены промпта и истории диалога (входные) и токены сгенерированного ответа модели (выходные), часто оплачиваемые по разным ставкам."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Ваш код → Интернет: запрос → Ответ модели\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ваш код</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Интернет: запрос</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ответ модели</text></svg>"
  },
  {
    "id": "m5w2",
    "month": 5,
    "week": 2,
    "title": "Системные промпты, роли, параметры генерации",
    "duration": "4–5 часов",
    "goal": "Понять назначение ролей system/user/assistant в LLM API, научиться задавать поведение модели через системный промпт и управлять температурой генерации.",
    "theory": [
      {
        "heading": "Три роли в структуре запроса к LLM API: system, user, assistant",
        "text": "Когда ты программно общаешься с моделью через API, запрос структурируется не просто как 'один текст', а как список сообщений с явно указанной ролью каждого. Роль 'system' — это 'правила игры', заданные один раз в начале: кем должна быть модель, как себя вести, какие ограничения соблюдать — пользователь обычно не видит этого прямо, это настройка 'за кулисами'. Роль 'user' — это сообщения от пользователя (то, что в обычном чате ты печатаешь в поле ввода). Роль 'assistant' — это предыдущие ответы самой модели, которые передаются обратно при продолжении диалога, чтобы модель 'помнила' контекст разговора. Понимание этой структуры — прямой мост к пониманию того, как будет работать память твоего будущего ИИ-агента.",
        "example": "У OpenAI системный промпт передаётся как сообщение с ролью system в общем списке: [{'role': 'system', 'content': 'Ты дружелюбный помощник по кулинарии'}, {'role': 'user', 'content': 'Что приготовить из курицы?'}]. У Claude он передаётся отдельным параметром: client.messages.create(model=..., max_tokens=1024, system='Ты дружелюбный помощник по кулинарии', messages=[{'role': 'user', 'content': 'Что приготовить из курицы?'}]). Смысл одинаковый: system задаёт характер поведения, user — конкретный вопрос."
      },
      {
        "heading": "Системный промпт — это не просто 'представление', а глубокая настройка поведения",
        "text": "Новички часто воспринимают системный промпт как формальность ('Ты полезный ассистент'), но на практике это один из самых мощных инструментов управления поведением модели. В системном промпте можно задать: стиль общения (формальный/дружеский), ограничения на темы ответов, формат вывода по умолчанию, персонажа/роль эксперта, и даже явные правила вроде 'никогда не давай медицинских советов, вместо этого рекомендуй обратиться к врачу'. Чем конкретнее и детальнее системный промпт, тем предсказуемее и устойчивее ведёт себя модель на протяжении всего диалога, а не только в первом ответе.",
        "example": "Слабый системный промпт: 'Ты помощник'. Сильный системный промпт: 'Ты строгий технический рецензент кода на Python для начинающих. Твоя задача — находить проблемы в коде и объяснять их простыми словами, избегая снисходительного тона. Всегда указывай конкретную строку кода, о которой идёт речь.'"
      },
      {
        "heading": "Температура (temperature): управление креативностью и предсказуемостью",
        "text": "Температура — числовой параметр (обычно от 0 до 1, иногда до 2 в зависимости от API), который влияет на то, насколько 'рискованно' или предсказуемо модель выбирает следующее слово при генерации ответа. Низкая температура (близко к 0) делает ответы более детерминированными, последовательными и предсказуемыми — хорошо подходит для задач, где важна точность и повторяемость (анализ данных, код, факты). Высокая температура (близко к 1 и выше) делает ответы более разнообразными и 'творческими', но также увеличивает риск нелогичных или менее точных формулировок — подходит для творческих задач (брейнсторм, художественные тексты).",
        "example": "При температуре 0 один и тот же вопрос про столицу Франции почти всегда даёт идентичный ответ 'Париж'. При температуре 1 для творческой задачи 'придумай необычное название для кафе' каждый повторный запрос может дать совершенно разные креативные варианты."
      },
      {
        "heading": "Почему эти параметры важны для будущего ИИ-агента",
        "text": "Этот урок — не изолированный технический факт, а фундамент для месяца 6, где ты будешь строить архитектуру ИИ-агентов. Системный промпт — это именно тот механизм, через который задаётся 'личность' и правила поведения будущего агента (например, 'ты агент-помощник по финансам, который всегда уточняет сумму перед выполнением операции'). Температура влияет на то, насколько предсказуемо агент будет принимать решения — для агента, который выполняет конкретные действия (а не просто болтает), обычно предпочтительна более низкая температура, чтобы снизить риск непредсказуемого поведения.",
        "example": "Агент, который должен точно выбирать инструмент для вызова на основе запроса пользователя, скорее всего, будет настроен с низкой температурой, чтобы его решения были стабильными и предсказуемыми при повторении похожих запросов."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Попроси ИИ написать скрипт с явным системным промптом",
        "instruction": "Отправь промпт, в котором явно просишь использовать структуру с ролью system.",
        "prompt": "Напиши скрипт на Python с использованием LLM API (используй библиотеку [anthropic/openai]), где системный промпт задаёт модели роль 'строгий технический рецензент кода на Python для начинающих, который находит проблемы и объясняет их простыми словами'. Пользовательское сообщение: 'Проверь этот код: [вставь любой простой код с небольшим недочётом]'. Выведи ответ модели в консоль.",
        "expected": "Рабочий скрипт, где видно явное разделение системного промпта и пользовательского сообщения в структуре запроса."
      },
      {
        "step": 2,
        "title": "Запусти и проанализируй, как системный промпт влияет на тон ответа",
        "instruction": "Запусти скрипт, затем измени текст системного промпта на противоположный по стилю (например, 'ты дружелюбный наставник, который хвалит прогресс и мягко предлагает улучшения') и запусти снова с тем же пользовательским вопросом.",
        "prompt": "python system_prompt_test.py",
        "expected": "Два явно различающихся по тону ответа на один и тот же вопрос о коде — подтверждение влияния системного промпта на поведение модели."
      },
      {
        "step": 3,
        "title": "Сравни ответы при разной температуре на одном промпте",
        "instruction": "Попроси ИИ модифицировать скрипт так, чтобы можно было легко менять параметр temperature, и прогони один и тот же творческий промпт с температурой 0 и с температурой 1 (если доступно в API), повторив запрос с каждой температурой 2 раза.",
        "prompt": "Измени скрипт так, чтобы параметр temperature можно было легко задавать в начале кода как переменную. Используй промпт 'Придумай необычное название для нового кафе в центре города' сначала с temperature=0, затем с temperature=1. Выведи все ответы с пометкой, при какой температуре они получены.",
        "expected": "При temperature=0 повторные запросы дают очень похожие или идентичные названия, при temperature=1 — заметно более разнообразные варианты при каждом повторе."
      },
      {
        "step": 4,
        "title": "Протестируй низкую температуру на задаче, требующей точности",
        "instruction": "Прогони фактологический вопрос (например, простой расчёт или вопрос с одним верным ответом) при temperature=0 несколько раз и убедись в стабильности результата.",
        "prompt": "Сколько будет 847 умножить на 23? Дай только число.",
        "expected": "При низкой температуре ответ на фактологический вопрос стабилен при повторных запросах."
      },
      {
        "step": 5,
        "title": "Зафиксируй наблюдения о влиянии температуры в заметке",
        "instruction": "Запиши свой вывод: для каких типов задач (из всех протестированных) низкая температура работала лучше, а для каких — высокая, основываясь на реальных наблюдениях, а не только на теории.",
        "prompt": null,
        "expected": "Письменный вывод, связывающий тип задачи (фактологическая/творческая) с оптимальным значением температуры."
      },
      {
        "step": 6,
        "title": "Спроектируй системный промпт для будущего использования",
        "instruction": "Напиши подробный системный промпт для гипотетического помощника на тему, которая тебе интересна (например, помощник по изучению английского языка, помощник по тренировкам), используя принципы из теории: роль, стиль, ограничения, явные правила поведения.",
        "prompt": null,
        "expected": "Развёрнутый системный промпт (5-8 предложений), сохранённый в заметках как шаблон для будущих экспериментов."
      }
    ],
    "test": [
      {
        "q": "За что отвечает роль 'system' в структуре запроса к LLM API?",
        "options": [
          "Это сообщения от пользователя, которые вводятся в чат",
          "Это 'правила игры', заданные один раз — кем должна быть модель и как себя вести, обычно невидимые пользователю напрямую",
          "Это ответы модели из прошлых сообщений диалога",
          "Эта роль не используется в современных LLM API"
        ],
        "correct": 1,
        "explain": "Роль system задаёт общие правила поведения модели на уровне 'настройки за кулисами', в отличие от роли user (сообщения пользователя) и assistant (предыдущие ответы модели)."
      },
      {
        "q": "Почему системный промпт считается мощным инструментом, а не просто формальностью?",
        "options": [
          "Потому что он единственный способ отправить запрос модели",
          "Потому что он позволяет задать устойчивый стиль общения, ограничения и правила поведения модели на протяжении всего диалога, а не только в первом ответе",
          "Системный промпт не влияет на поведение модели существенно",
          "Системный промпт нужен только для указания языка ответа"
        ],
        "correct": 1,
        "explain": "Детально проработанный системный промпт задаёт устойчивое поведение модели (тон, ограничения, правила) на протяжении всего диалога, что делает его одним из самых мощных инструментов управления, а не простой формальностью."
      },
      {
        "q": "Что происходит при использовании ВЫСОКОЙ температуры генерации?",
        "options": [
          "Ответы становятся более предсказуемыми и идентичными при повторных запросах",
          "Ответы становятся более разнообразными и 'творческими', но увеличивается риск менее точных или нелогичных формулировок",
          "Температура не влияет на характер генерируемого текста",
          "Модель начинает отвечать быстрее технически"
        ],
        "correct": 1,
        "explain": "Высокая температура увеличивает вариативность и 'креативность' ответов за счёт меньшей предсказуемости, что подходит для творческих задач, но менее надёжно для задач, требующих точности."
      },
      {
        "q": "Для какого типа задачи предпочтительнее использовать низкую температуру (близко к 0)?",
        "options": [
          "Для придумывания творческих названий или художественных текстов",
          "Для точного расчёта, анализа кода, фактологических вопросов с одним верным ответом",
          "Низкая температура одинаково подходит для всех типов задач без разницы",
          "Низкая температура используется только при отсутствии системного промпта"
        ],
        "correct": 1,
        "explain": "Задачи, требующие точности и повторяемости результата (расчёты, факты, анализ кода), лучше решаются при низкой температуре, которая делает ответы модели более детерминированными и стабильными."
      },
      {
        "q": "Почему этот урок (системные промпты и температура) напрямую связан с будущим созданием ИИ-агента в месяце 6-7 курса?",
        "options": [
          "Никакой связи нет, это отдельная техническая тема",
          "Системный промпт — механизм задания 'личности' и правил поведения агента, а температура влияет на предсказуемость принятия решений агентом, что критично для надёжной работы",
          "ИИ-агенты никогда не используют системные промпты",
          "Связь существует только для творческих агентов, а не для практических"
        ],
        "correct": 1,
        "explain": "Системный промпт и температура — это именно те инструменты, через которые в дальнейшем будет задаваться поведение и предсказуемость решений ИИ-агента, что делает этот урок прямым фундаментом для месяцев 6-7."
      }
    ],
    "glossary": [
      {
        "term": "Роли system/user/assistant",
        "def": "Структурные элементы запроса к LLM API: system задаёт правила поведения модели, user — сообщения пользователя, assistant — предыдущие ответы модели в истории диалога."
      },
      {
        "term": "Системный промпт",
        "def": "Инструкция, задающая общее поведение, стиль и ограничения модели на протяжении всего диалога."
      },
      {
        "term": "Температура (temperature)",
        "def": "Параметр генерации, управляющий степенью случайности/предсказуемости ответа модели — от детерминированных ответов (низкая температура) до разнообразных и творческих (высокая температура)."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: system: правила → user: вопрос → assistant: ответ\"><rect x=\"180\" y=\"47.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320\" y=\"67.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">system: правила</text><rect x=\"180\" y=\"85.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320\" y=\"105.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">user: вопрос</text><rect x=\"180\" y=\"123.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320\" y=\"143.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">assistant: ответ</text></svg>"
  },
  {
    "id": "m5w3",
    "month": 5,
    "week": 3,
    "title": "Структурированный вывод: JSON mode и основы function calling",
    "duration": "4–5 часов",
    "goal": "Научиться получать от модели ответ в строго заданном формате (JSON) и понять базовую концепцию function calling как фундамент будущих ИИ-агентов.",
    "theory": [
      {
        "heading": "Проблема свободного текста для программной обработки",
        "text": "Когда модель отвечает обычным свободным текстом ('Тональность отзыва положительная, ключевые слова: качество, доставка'), это удобно читать человеку, но неудобно обрабатывать в коде: пришлось бы 'парсить' (разбирать) произвольный текст, пытаясь угадать, где именно модель написала тональность, а где ключевые слова — это ненадёжно, потому что формулировка может немного отличаться от запроса к запросу. Структурированный вывод решает эту проблему: ты просишь модель вернуть ответ в строго заданном формате (чаще всего JSON), который код может надёжно и предсказуемо разобрать, используя обычную работу со словарями, изученную в месяце 3.",
        "example": "Вместо текста 'Тональность отзыва положительная, ключевые слова: качество, доставка' — структурированный ответ: {'sentiment': 'positive', 'keywords': ['качество', 'доставка']} — который код может надёжно обработать через response['sentiment'] и response['keywords']."
      },
      {
        "heading": "Как попросить модель вернуть JSON надёжно",
        "text": "Есть два уровня надёжности получения JSON-ответа. Первый, более простой — явно попросить в промпте вернуть ответ строго в формате JSON с конкретной структурой (укажи точные названия полей и их типы). Второй, более надёжный — многие современные API предоставляют специальный параметр или режим ('JSON mode' или 'structured output'), который технически гарантирует, что ответ модели будет валидным JSON, соответствующим заданной схеме, а не просто 'похожим на JSON' текстом, который модель могла случайно немного искажать. Для учебных целей достаточно начать с явного запроса в промпте, но важно знать о существовании более строгих механизмов для серьёзных продуктов.",
        "example": "Промпт: 'Проанализируй этот отзыв и верни результат СТРОГО в формате JSON с полями sentiment (одно из значений: positive, negative, neutral) и keywords (список строк). Не добавляй никакого текста до или после JSON.' — явное указание формата существенно повышает шанс получить корректный структурированный ответ."
      },
      {
        "heading": "Function calling: модель не выполняет код, она 'просит' твою программу это сделать",
        "text": "Это одна из самых важных концепций для понимания будущих ИИ-агентов. Function calling (вызов функций) — механизм, при котором ты описываешь модели список доступных 'инструментов' (функций) с их названиями, назначением и ожидаемыми параметрами. Когда модель решает, что для ответа на вопрос пользователя нужно использовать такой инструмент, она НЕ выполняет код сама (у неё физически нет такой возможности) — она возвращает структурированный ответ вида 'вызови функцию X с такими-то параметрами'. Твоя программа читает этот структурированный ответ, реально выполняет указанную функцию в своём коде, получает результат и отправляет его обратно модели для формирования финального ответа пользователю.",
        "example": "Если у модели есть доступ к 'инструменту' get_weather(city), и пользователь спрашивает 'какая погода в Берлине', модель не угадывает погоду сама (это было бы галлюцинацией) — она возвращает структуру вроде {'tool': 'get_weather', 'params': {'city': 'Berlin'}}, твой код реально вызывает функцию get_weather('Berlin'), получает настоящий результат из API погоды, и передаёт его обратно модели, чтобы она сформулировала финальный ответ на основе реальных данных."
      },
      {
        "heading": "Почему это фундамент для месяца 6 (архитектура агентов)",
        "text": "Структурированный вывод и function calling — это два технических механизма, без которых концепция 'ИИ-агента, который совершает действия' была бы невозможна. Чат-бот без этих механизмов может только разговаривать текстом. Агент с function calling может реально взаимодействовать с внешним миром через код: искать информацию, сохранять данные, выполнять вычисления, вызывать другие системы — именно это будет детально разбираться в месяце 6 на примере построения архитектуры ИИ-агентов.",
        "example": "Разница между чат-ботом 'Я думаю, что сегодня идёт дождь в Москве' (возможная галлюцинация без реальных данных) и агентом, который реально вызывает функцию получения текущей погоды и отвечает на основе настоящих данных — именно это различие и создаёт механизм function calling."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Попроси ИИ написать запрос с явным требованием JSON-формата",
        "instruction": "Отправь промпт на реализацию анализа отзыва с явным требованием структурированного ответа.",
        "prompt": "Напиши скрипт на Python с LLM API, который отправляет запрос с таким промптом: 'Проанализируй этот отзыв: \"Доставка была быстрой, но упаковка повреждена\". Верни результат строго в формате JSON с полями sentiment (positive/negative/neutral/mixed) и keywords (список из 2-3 ключевых слов). Не добавляй никакого текста до или после JSON.' Выведи полученный ответ.",
        "expected": "Ответ модели, который при визуальном просмотре похож на корректный JSON с нужными полями."
      },
      {
        "step": 2,
        "title": "Попроси код для разбора полученного JSON-ответа",
        "instruction": "Получив ответ в виде текста, попроси код для преобразования его в реальный словарь Python и извлечения значений.",
        "prompt": "Теперь добери в код преобразование текстового ответа модели в словарь Python с помощью json.loads(), и выведи отдельно значение sentiment и список keywords, как это делалось при разборе ответов API в месяце 4.",
        "expected": "Рабочий код, который выводит, например: 'Тональность: mixed' и 'Ключевые слова: доставка, повреждена' — полученные программным разбором, а не визуальным чтением текста."
      },
      {
        "step": 3,
        "title": "Протестируй на 3 разных отзывах и проверь стабильность формата",
        "instruction": "Прогони скрипт на трёх разных текстах отзывов (явно положительном, явно отрицательном, смешанном) и убедись, что формат JSON остаётся стабильным во всех случаях.",
        "prompt": "python structured_output.py",
        "expected": "Во всех трёх случаях код успешно разбирает JSON без ошибок — подтверждение, что явное указание формата в промпте работает надёжно для этой задачи."
      },
      {
        "step": 4,
        "title": "Обработай потенциальную ошибку разбора JSON",
        "instruction": "По аналогии с обработкой ошибок из месяца 3-4, добавь try/except на случай, если модель вернёт невалидный JSON (это иногда случается, особенно без специального JSON mode).",
        "prompt": "Добавь обработку ошибок: если json.loads() не может разобрать ответ модели (невалидный JSON), программа должна вывести понятное сообщение об ошибке и, если возможно, попробовать повторить запрос один раз, вместо падения программы.",
        "expected": "Код, устойчивый к редким случаям, когда модель не точно соблюдает запрошенный формат."
      },
      {
        "step": 5,
        "title": "Попроси ИИ объяснить function calling на простом примере без написания кода",
        "instruction": "Прежде чем переходить к реализации в месяце 6, закрепи концептуальное понимание через объяснение на своём примере.",
        "prompt": "Объясни на простом примере с калькулятором: как бы работал function calling, если у модели есть доступ к функции calculate(expression), и пользователь спрашивает 'сколько будет 15 умножить на 7'? Распиши по шагам: что получает модель, что она возвращает, что делает моя программа, что происходит дальше.",
        "expected": "Пошаговое текстовое объяснение цикла function calling, применённое к конкретному понятному примеру."
      },
      {
        "step": 6,
        "title": "Зафиксируй цикл function calling своими словами",
        "instruction": "Нарисуй или запиши схему из 4 шагов: модель решает вызвать функцию → твой код реально выполняет функцию → результат передаётся обратно модели → модель формирует финальный ответ. Это закрепит понимание перед месяцем 6.",
        "prompt": null,
        "expected": "Письменная или визуальная схема цикла function calling, сформулированная самостоятельно."
      }
    ],
    "test": [
      {
        "q": "Почему структурированный вывод (JSON) предпочтительнее свободного текста для программной обработки ответа модели?",
        "options": [
          "Потому что JSON короче по объёму всегда",
          "Потому что JSON можно надёжно и предсказуемо разобрать кодом через работу со словарями, в отличие от произвольного текста, где формулировка может меняться",
          "Потому что модель отвечает быстрее в формате JSON",
          "Разницы в надёжности обработки нет"
        ],
        "correct": 1,
        "explain": "Свободный текст сложно надёжно 'распарсить' программно, так как формулировка может немного отличаться каждый раз. JSON даёт предсказуемую структуру, с которой код может работать стабильно."
      },
      {
        "q": "Что из перечисленного правильно описывает механизм function calling?",
        "options": [
          "Модель сама выполняет код функции внутри себя",
          "Модель возвращает структурированный ответ, 'запрашивающий' вызов конкретной функции с параметрами, а твоя программа реально выполняет эту функцию",
          "Function calling — это просто другое название обычного текстового ответа",
          "Function calling доступен только для функций на языке JavaScript"
        ],
        "correct": 1,
        "explain": "Модель не имеет технической возможности выполнять код напрямую. Она сигнализирует через структурированный ответ, какую функцию и с какими параметрами нужно вызвать — реальное выполнение происходит в коде твоей программы."
      },
      {
        "q": "В примере с погодой из теории, почему важно, что программа реально вызывает функцию get_weather, а не модель 'угадывает' погоду сама?",
        "options": [
          "Потому что модель физически не может сгенерировать текст про погоду",
          "Чтобы получить настоящие актуальные данные вместо возможной галлюцинации (выдуманного, но правдоподобно звучащего значения)",
          "Это не имеет значения для качества ответа",
          "Потому что вызов функции работает быстрее, чем генерация текста"
        ],
        "correct": 1,
        "explain": "Без реального вызова функции модель могла бы 'угадать' правдоподобный, но неверный ответ о погоде (галлюцинация, изученная в месяце 2). Function calling обеспечивает использование настоящих актуальных данных."
      },
      {
        "q": "Какой способ более надёжно гарантирует, что ответ модели будет валидным JSON определённой структуры?",
        "options": [
          "Просто надеяться, что модель поймёт намерение без явных инструкций",
          "Явное указание формата в промпте в сочетании со специальными механизмами API (JSON mode/structured output), если они доступны",
          "Увеличение температуры генерации до максимума",
          "Использование максимально короткого промпта без деталей"
        ],
        "correct": 1,
        "explain": "Явное указание желаемой структуры в промпте повышает вероятность корректного JSON-ответа, а специальные технические механизмы API (JSON mode) дают ещё более строгую гарантию соответствия заданной схеме."
      },
      {
        "q": "Почему этот урок (структурированный вывод и function calling) считается прямым фундаментом для построения ИИ-агентов в следующих месяцах?",
        "options": [
          "Потому что агенты никогда не используют структурированные данные",
          "Потому что без этих механизмов ИИ-агент мог бы только разговаривать текстом, но не мог бы реально взаимодействовать с внешним миром через код (искать данные, выполнять действия)",
          "Эти темы не связаны с созданием агентов напрямую",
          "Потому что структурированный вывод заменяет необходимость в системных промптах"
        ],
        "correct": 1,
        "explain": "Именно function calling даёт агенту способность реально совершать действия через код (а не просто отвечать текстом), а структурированный вывод обеспечивает надёжную передачу данных между моделью и программой — это необходимые технические основы архитектуры агентов."
      }
    ],
    "glossary": [
      {
        "term": "Структурированный вывод (JSON mode)",
        "def": "Механизм получения ответа модели в строго заданном машиночитаемом формате (чаще всего JSON) вместо произвольного текста."
      },
      {
        "term": "Function calling (вызов функций)",
        "def": "Механизм, при котором модель запрашивает вызов конкретной функции с параметрами, а реальное выполнение происходит в коде программы, а не внутри самой модели."
      },
      {
        "term": "Парсинг (разбор) ответа",
        "def": "Процесс извлечения структурированных данных из ответа модели для дальнейшей обработки кодом."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Вопрос → Ответ строго в JSON → Программа читает поля\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Вопрос</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ответ строго в</text><text x=\"320.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">JSON</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Программа читает</text><text x=\"525.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">поля</text></svg>"
  },
  {
    "id": "m5w4",
    "month": 5,
    "week": 4,
    "title": "Итоговый проект: консольный чат-бот с памятью",
    "duration": "4–5 часов",
    "goal": "Собрать консольного чат-бота с собственным системным промптом и памятью в рамках сессии диалога, объединив все навыки месяца.",
    "theory": [
      {
        "heading": "Что значит 'память в рамках сессии' технически",
        "text": "В обычном одиночном запросе к API (как в предыдущих уроках) каждое обращение к модели независимо — модель не 'помнит' предыдущие сообщения, если ты не передал их явно. Чтобы создать иллюзию связного диалога (как в привычных чатах), программа должна самостоятельно накапливать историю сообщений (список словарей с ролями user/assistant, изученными на неделе 2) и передавать ВСЮ эту историю в каждый новый запрос к модели — не только последнее сообщение пользователя. Модель 'запоминает' контекст не потому, что у неё есть собственная долговременная память, а потому что твоя программа каждый раз показывает ей весь предыдущий диалог заново.",
        "example": "Если пользователь на 3-м сообщении спрашивает 'а что ты говорил про это выше?', модель может ответить корректно только потому, что программа отправила ей вместе с этим вопросом полный список всех предыдущих сообщений — 1, 2, и этого 3-го — а не только последний вопрос в изоляции."
      },
      {
        "heading": "Накопление истории: простой список, растущий с каждым сообщением",
        "text": "Технически реализация памяти в рамках сессии — это обычный список (как ты изучал в месяце 3), в который после каждого сообщения пользователя и каждого ответа модели добавляется новый элемент с соответствующей ролью. Перед отправкой следующего запроса этот список целиком передаётся в API. Важно помнить про урок недели 1 этого месяца: чем длиннее диалог, тем больше токенов занимает история, и в какой-то момент (для очень долгих диалогов) можно приблизиться к лимиту окна контекста — для учебного проекта это обычно не критично, но важно знать о существовании этого ограничения.",
        "example": "После трёх обменов сообщениями список истории будет содержать 6 элементов: [user1, assistant1, user2, assistant2, user3, assistant3] — и именно весь этот список отправляется при запросе четвёртого сообщения пользователя."
      },
      {
        "heading": "Системный промпт как способ придать боту характер, а не правки кода",
        "text": "Ключевая практическая идея этой недели — дорабатывать поведение бота через изменение ТЕКСТА системного промпта, а не через изменение логики кода. Если бот отвечает слишком формально, слишком длинно, или уходит от темы — решение чаще всего не в добавлении новых условий if/else в код, а в более точной формулировке системного промпта. Это экономит огромное количество усилий по сравнению с попытками 'программно' контролировать стиль и характер общения вручную — задача, для которой текстовая модель и предназначена лучше, чем жёсткая логика кода.",
        "example": "Если бот отвечает слишком длинно, вместо того чтобы писать код, который обрезает ответ до N символов (что может испортить смысл), эффективнее просто добавить в системный промпт явное 'Отвечай кратко, не больше 3 предложений за раз'."
      },
      {
        "heading": "Тестирование памяти — не просто 'бот отвечает', а 'бот помнит'",
        "text": "Проверка готового чат-бота должна целенаправленно тестировать именно память, а не только общую работоспособность. Это означает: задавать боту вопрос, ответ на который зависит от информации, упомянутой несколькими сообщениями ранее, а не только от последнего вопроса. Если бот даёт релевантный ответ, учитывающий контекст из начала разговора — память работает корректно. Если он отвечает так, будто видит вопрос в полной изоляции — скорее всего, история диалога не передаётся в запрос правильно, и стоит проверить код накопления и отправки истории.",
        "example": "Хороший тест: сказать боту в начале 'Меня зовут Анна, я учу Python', а через 4-5 сообщений спросить 'напомни, как меня зовут и что я изучаю' — корректная память должна дать правильный ответ, используя информацию из самого начала диалога."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Спроектируй характер своего чат-бота",
        "instruction": "Выбери конкретную роль/характер для бота (например, помощник по изучению нового навыка, бот-собеседник на определённую тему, наставник по продуктивности) и напиши для него детальный системный промпт по принципам недели 2.",
        "prompt": null,
        "expected": "Написанный развёрнутый системный промпт (5+ предложений), определяющий характер, стиль и ограничения бота."
      },
      {
        "step": 2,
        "title": "Попроси ИИ спроектировать структуру цикла диалога",
        "instruction": "Отправь промпт с описанием желаемой архитектуры, прежде чем получать итоговый код.",
        "prompt": "Я хочу создать консольного чат-бота на Python с LLM API. Вот системный промпт для его характера: [вставь системный промпт]. Опиши архитектуру: как будет организован список истории сообщений, как будет выглядеть основной цикл (получить ввод пользователя → добавить в историю → отправить запрос с полной историей → получить ответ → добавить ответ в историю → показать пользователю → повторить), прежде чем давать код.",
        "expected": "Описание архитектуры цикла диалога, подтверждающее понимание механизма накопления истории перед написанием кода."
      },
      {
        "step": 3,
        "title": "Получи итоговый код бота и реализуй его",
        "instruction": "Попроси полный код реализации на основе согласованной архитектуры.",
        "prompt": "Теперь напиши полный код консольного чат-бота по этой архитектуре. Пользователь должен мочь вводить сообщения в цикле (используя input()), а для выхода — вводить 'выход' или 'exit'. Выводи ответы бота с явной пометкой, от кого сообщение (Бот: / Ты:).",
        "expected": "Рабочий файл chatbot.py с реализацией полного цикла диалога."
      },
      {
        "step": 4,
        "title": "Запусти бота и протестируй минимум 5 реплик подряд",
        "instruction": "Запусти через терминал и проведи содержательный диалог минимум из 5 обменов сообщениями.",
        "prompt": "python chatbot.py",
        "expected": "Бот отвечает в характере, заданном системным промптом, на протяжении всего диалога."
      },
      {
        "step": 5,
        "title": "Проведи целенаправленный тест памяти",
        "instruction": "В начале диалога сообщи боту конкретный факт о себе (имя, цель, предпочтение), затем задай несколько других вопросов, и через 4-5 сообщений спроси про этот факт напрямую.",
        "prompt": "Пример диалога: 'Меня зовут [имя], я хочу [цель]' → (несколько других сообщений) → 'Напомни, как меня зовут и что я хотел?'",
        "expected": "Бот корректно вспоминает факт, упомянутый в начале диалога — подтверждение, что история передаётся в каждый запрос правильно."
      },
      {
        "step": 6,
        "title": "Доработай характер бота через правки системного промпта",
        "instruction": "Если тон или стиль ответов бота не устраивает (слишком длинные ответы, неподходящий тон) — измени ТОЛЬКО текст системного промпта, не трогая логику кода цикла диалога, и протестируй снова.",
        "prompt": "Отредактируй системный промпт так, чтобы бот отвечал короче (не больше 3 предложений) и с более [нужный тон] характером.",
        "expected": "Заметное изменение стиля ответов бота после правки одного только текста системного промпта, без изменения остальной логики."
      },
      {
        "step": 7,
        "title": "Опубликуй финальную версию на GitHub",
        "instruction": "Создай README (используя .env для ключа согласно правилам месяца 4), сделай финальный коммит и запушь проект.",
        "prompt": "git add .\ngit commit -m \"Собрать консольного чат-бота с системным промптом и памятью сессии\"\ngit push",
        "expected": "Репозиторий на GitHub с рабочим чат-ботом, README и безопасным хранением ключа — итоговый артефакт месяца 5."
      }
    ],
    "test": [
      {
        "q": "Почему модель 'помнит' контекст диалога в чат-боте, хотя по своей природе каждый запрос к API независим?",
        "options": [
          "У модели есть собственная встроенная долговременная память между запросами",
          "Программа самостоятельно накапливает историю сообщений и передаёт её целиком в каждый новый запрос к модели",
          "Память работает благодаря особому параметру 'memory=true' в API",
          "Модель помнит диалог автоматически без каких-либо действий со стороны программы"
        ],
        "correct": 1,
        "explain": "Иллюзия 'памяти' создаётся тем, что программа каждый раз отправляет модели полную историю предыдущих сообщений вместе с новым — сама модель не хранит состояние между отдельными независимыми запросами."
      },
      {
        "q": "Что произойдёт, если программа при каждом новом запросе будет отправлять ТОЛЬКО последнее сообщение пользователя, без истории?",
        "options": [
          "Бот будет работать абсолютно так же, как с полной историей",
          "Бот не сможет корректно отвечать на вопросы, зависящие от контекста более ранних сообщений, так как не получает эту информацию",
          "Это ускорит работу бота без каких-либо недостатков",
          "API автоматически восстановит историю самостоятельно"
        ],
        "correct": 1,
        "explain": "Без передачи истории модель видит только последнее сообщение в полной изоляции и не может учитывать контекст, упомянутый ранее в разговоре — это именно та ситуация, которую проверяет тест памяти из практики урока."
      },
      {
        "q": "Согласно уроку, как лучше всего скорректировать стиль и тон ответов бота (например, сделать их короче)?",
        "options": [
          "Добавить сложную логику кода с условиями, обрезающую текст ответа",
          "Изменить текст системного промпта, явно указав желаемый стиль, вместо правок логики кода",
          "Изменить температуру генерации на максимум",
          "Эти параметры невозможно изменить после создания бота"
        ],
        "correct": 1,
        "explain": "Корректировка поведения через текст системного промпта обычно эффективнее и проще, чем попытки программно контролировать стиль через код — именно для этого текстовая модель хорошо подходит."
      },
      {
        "q": "Какой тест лучше всего проверяет, что память чат-бота реально работает, а не просто создаёт видимость?",
        "options": [
          "Задать боту один простой вопрос и проверить, что он ответил хоть что-то",
          "Сообщить боту конкретный факт в начале диалога, затем через несколько сообщений спросить про этот факт напрямую и проверить, вспомнит ли бот его корректно",
          "Проверить скорость ответа бота",
          "Проверить длину системного промпта"
        ],
        "correct": 1,
        "explain": "Целенаправленная проверка памяти требует именно такого теста: факт в начале диалога, несколько промежуточных сообщений, и прямой вопрос про этот факт позже — это подтверждает, что история действительно передаётся и используется моделью."
      },
      {
        "q": "Что из перечисленного ЛУЧШЕ всего описывает итоговый артефакт месяца 5, собирающий все навыки месяца вместе?",
        "options": [
          "Консольное приложение без использования LLM API",
          "Консольный чат-бот на базе LLM API с собственным системным промптом, памятью в рамках сессии и обработкой структурированных данных, если применимо",
          "Веб-приложение, развёрнутое в облаке",
          "Теоретический документ без практической реализации"
        ],
        "correct": 1,
        "explain": "Итоговый проект объединяет токены/контекст (неделя 1), системный промпт и параметры генерации (неделя 2), структурированный вывод (неделя 3) в реально работающего чат-бота с памятью диалога (неделя 4)."
      }
    ],
    "glossary": [
      {
        "term": "История диалога (conversation history)",
        "def": "Накопленный список предыдущих сообщений пользователя и модели, передаваемый целиком при каждом новом запросе для сохранения контекста."
      },
      {
        "term": "Память в рамках сессии",
        "def": "Способность бота учитывать контекст предыдущих сообщений в рамках текущего запуска программы, реализуемая через накопление и передачу истории диалога."
      },
      {
        "term": "Цикл диалога",
        "def": "Повторяющаяся последовательность: получение ввода пользователя, обновление истории, запрос к модели, получение и отображение ответа."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Сессия 1 → memory.json → Сессия 2\"><rect x=\"40\" y=\"60\" width=\"180\" height=\"80\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"130.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Сессия 1</text><rect x=\"230\" y=\"60\" width=\"180\" height=\"80\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">memory.json</text><rect x=\"420\" y=\"60\" width=\"180\" height=\"80\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"510.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Сессия 2</text><line x1=\"224\" y1=\"100\" x2=\"218\" y2=\"100\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"218,95 226,100 218,105\" fill=\"#9aa3b5\"/><line x1=\"414\" y1=\"100\" x2=\"408\" y2=\"100\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"408,95 416,100 408,105\" fill=\"#9aa3b5\"/><text x=\"320\" y=\"170\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9aa3b5\">сохранили → загрузили в новом запуске</text></svg>"
  },
  {
    "id": "m6w1",
    "month": 6,
    "week": 1,
    "title": "Агент vs чат-бот: цикл восприятие → решение → действие",
    "duration": "4–5 часов",
    "goal": "Понять принципиальную разницу между чат-ботом и ИИ-агентом и научиться распознавать эту разницу в реальных продуктах.",
    "theory": [
      {
        "heading": "Чат-бот отвечает, агент действует",
        "text": "Чат-бот из месяца 5 — это система, которая получает текст и генерирует текст в ответ. Его 'мир' ограничен диалогом: он не может сам ничего проверить, сохранить, вычислить с гарантированной точностью или изменить во внешнем мире — он может только предположить или сослаться на знания, заложенные при обучении (с риском галлюцинации, как изучалось в месяце 2). ИИ-агент — это система, которая способна совершать РЕАЛЬНЫЕ действия во внешнем мире через код: вызывать функции, обращаться к API, читать и записывать файлы, и на основе результатов этих действий принимать дальнейшие решения. Переход от чат-бота к агенту — это переход от 'системы, которая разговаривает' к 'системе, которая выполняет задачи'.",
        "example": "Чат-бот на вопрос 'какая сейчас погода в Берлине' может лишь сослаться на обученные знания (устаревшие и ненадёжные). Агент с доступом к инструменту погоды реально вызывает функцию получения текущей погоды и даёт точный актуальный ответ, основанный на реальных данных, а не предположении."
      },
      {
        "heading": "Базовый цикл работы агента: восприятие → решение → действие → оценка",
        "text": "Любой агент, независимо от сложности, проходит через повторяющийся цикл из нескольких стадий. Восприятие — получение входной информации (вопрос пользователя, результат предыдущего действия, данные из внешнего источника). Решение — анализ ситуации и выбор, что делать дальше: ответить напрямую, или вызвать какой-то инструмент, и если да — какой именно и с какими параметрами (это именно то, что реализуется механизмом function calling из месяца 5). Действие — реальное выполнение выбранного шага (вызов функции, запрос к API). Оценка результата — анализ того, что получилось в результате действия, и решение, достаточно ли этого для ответа пользователю, или нужен ещё один цикл (например, вызов ещё одного инструмента).",
        "example": "Пользователь просит 'узнай курс доллара и посчитай, сколько это будет в рублях за 500 долларов'. Агент: воспринимает запрос → решает, что нужно вызвать инструмент получения курса валют → действует, вызывая этот инструмент → получает курс → оценивает, что теперь нужен ещё один шаг (умножение) → решает вызвать калькулятор → действует → получает финальное число → формирует ответ пользователю."
      },
      {
        "heading": "Почему не каждая задача требует агента",
        "text": "Важно развить трезвое понимание: не любая AI-задача выигрывает от сложности агентной архитектуры. Если задача полностью решается одним текстовым ответом без необходимости во внешних действиях (объяснить концепцию, написать текст, перефразировать) — обычный чат-бот (или даже прямой одиночный запрос) полностью достаточен, и усложнение до агента добавит только лишнюю техническую сложность без реальной пользы. Агент становится необходим именно тогда, когда задача требует взаимодействия с реальными, изменяющимися или специфичными данными, которые нельзя надёжно получить только из обученных знаний модели, или когда задача требует выполнения конкретных операций (сохранение, вычисление, отправка) помимо генерации текста.",
        "example": "'Объясни, что такое инфляция' — отличная задача для простого чат-бота, без необходимости в агенте. 'Проверь мой текущий баланс на счёте и предложи, сколько отложить на сбережения' — задача, требующая агента, способного реально получить актуальные данные о балансе."
      },
      {
        "heading": "Спектр сложности: от простого чат-бота до полноценного автономного агента",
        "text": "Важно понимать, что граница между чат-ботом и агентом — не резкая черта, а спектр. На одном конце — чистый чат-бот без инструментов. Чуть сложнее — чат-бот с одним простым инструментом (например, калькулятором). Ещё сложнее — агент с несколькими инструментами и способностью к многошаговому рассуждению (цепочка из нескольких вызовов инструментов подряд для решения одной задачи). На самом сложном конце — полностью автономные агенты, способные самостоятельно ставить себе промежуточные подзадачи без прямого руководства человеком на каждом шаге. Курс движется по этому спектру постепенно: от простого function calling (месяц 5) к агентам с несколькими инструментами и памятью (этот месяц), к финальному проекту собственного агента (месяцы 7-8).",
        "example": "Голосовой помощник, который только отвечает на общие вопросы — простой чат-бот. Помощник, который может установить таймер (одно простое действие) — агент с одним инструментом. Система, которая самостоятельно бронирует билеты, сверяя даты, цены и твои предпочтения через несколько последовательных шагов — агент с комплексным многошаговым рассуждением."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Выбери 3 знакомых AI-продукта для анализа",
        "instruction": "Выбери 3 продукта, с которыми ты знаком лично: например, голосовой помощник (Siri/Алиса), чат-бот поддержки на сайте, и Claude Code/Cursor (или любой другой AI-ассистент для кода). Запиши их названия.",
        "prompt": null,
        "expected": "Список из 3 конкретных знакомых AI-продуктов."
      },
      {
        "step": 2,
        "title": "Для каждого продукта определи, выполняет ли он реальные действия",
        "instruction": "Для каждого продукта из списка подумай: может ли он реально ЧТО-ТО СДЕЛАТЬ во внешнем мире (сохранить файл, выполнить код, установить напоминание, найти актуальную информацию), или он только генерирует текстовый ответ на основе своих знаний.",
        "prompt": "Вот мой разбор трёх ИИ-продуктов: [вставь список и свои ответы — выполняет ли каждый реальные действия и какие]. Проверь, правильно ли я отличаю «просто отвечает текстом» от «реально что-то делает во внешнем мире». Где я ошибся? Не пиши разбор за меня, только укажи ошибки.",
        "expected": "Для каждого продукта — пометка 'только отвечает текстом' или 'выполняет реальные действия', с конкретным примером действия, если оно есть."
      },
      {
        "step": 3,
        "title": "Попроси ИИ помочь классифицировать твои примеры по циклу восприятие-решение-действие-оценка",
        "instruction": "Отправь описание одного из выбранных продуктов и попроси применить изученный цикл для анализа.",
        "prompt": "Вот описание продукта: [опиши один из своих 3 продуктов и конкретный пример использования]. Проанализируй его по циклу 'восприятие → решение → действие → оценка результата', изученному в контексте ИИ-агентов. Если какой-то этап цикла отсутствует (например, нет реального 'действия') — явно укажи это и объясни, почему это скорее чат-бот, а не полноценный агент.",
        "expected": "Развёрнутый анализ, подтверждающий или корректирующий твою собственную классификацию из шага 2."
      },
      {
        "step": 4,
        "title": "Повтори анализ для оставшихся двух продуктов",
        "instruction": "Проведи такой же анализ для двух других выбранных продуктов из своего списка.",
        "prompt": null,
        "expected": "Три полных анализа (или подтверждённых вручную, или через ИИ), классифицирующих каждый продукт как чат-бот или агент с объяснением."
      },
      {
        "step": 5,
        "title": "Придумай собственный пример задачи для каждого типа системы",
        "instruction": "Придумай и запиши: одну задачу, которая отлично решается обычным чат-ботом без инструментов, и одну задачу, для которой точно нужен агент с реальными действиями (с объяснением, почему именно).",
        "prompt": "Вот две мои задачи: 1) для обычного чат-бота: [задача]; 2) для агента с действиями: [задача]. Проверь, действительно ли первой хватает текстового ответа, а второй нужны инструменты. Если нет — объясни почему.",
        "expected": "Два чётких примера задач с объяснением, демонстрирующие понимание критерия выбора между чат-ботом и агентом."
      },
      {
        "step": 6,
        "title": "Зафиксируй итоговое определение своими словами",
        "instruction": "Без использования ИИ, своими словами, напиши определение: 'ИИ-агент — это...' (2-3 предложения), включающее упоминание реальных действий и цикла принятия решений.",
        "prompt": null,
        "expected": "Самостоятельно сформулированное точное определение, которое будет использоваться как ориентир на протяжении оставшихся уроков курса."
      }
    ],
    "test": [
      {
        "q": "Какая ключевая характеристика отличает ИИ-агента от обычного чат-бота?",
        "options": [
          "Агент всегда отвечает длиннее, чем чат-бот",
          "Агент способен совершать реальные действия во внешнем мире через код (вызов функций, API), а не только генерировать текст",
          "Агент всегда использует более высокую температуру генерации",
          "Разницы между агентом и чат-ботом не существует технически"
        ],
        "correct": 1,
        "explain": "Ключевое различие именно в способности к реальным действиям: агент может взаимодействовать с внешним миром через код, в то время как чат-бот ограничен генерацией текстового ответа."
      },
      {
        "q": "Расставь в правильном порядке базовый цикл работы агента.",
        "options": [
          "Действие → Решение → Восприятие → Оценка",
          "Восприятие → Решение → Действие → Оценка результата",
          "Оценка → Действие → Восприятие → Решение",
          "Порядок этапов цикла не имеет значения"
        ],
        "correct": 1,
        "explain": "Правильный порядок: сначала агент воспринимает входную информацию, затем принимает решение о дальнейших шагах, затем выполняет действие, и затем оценивает результат для принятия следующего решения."
      },
      {
        "q": "Почему не каждая AI-задача требует агентной архитектуры?",
        "options": [
          "Потому что агентная архитектура технически невозможна для большинства задач",
          "Если задача полностью решается одним текстовым ответом без необходимости в реальных действиях, усложнение до агента добавляет лишнюю сложность без реальной пользы",
          "Потому что агенты всегда дают менее точные ответы, чем чат-боты",
          "Агентная архитектура нужна абсолютно всегда, без исключений"
        ],
        "correct": 1,
        "explain": "Для задач, не требующих взаимодействия с внешними данными или выполнения действий (например, объяснение концепции), простой чат-бот или прямой запрос полностью достаточен, и агентная архитектура была бы избыточной."
      },
      {
        "q": "Что из перечисленного — хороший пример задачи, для которой НУЖЕН именно агент, а не простой чат-бот?",
        "options": [
          "'Объясни, что такое фотосинтез'",
          "'Проверь текущий курс валюты и посчитай точную сумму конвертации'",
          "'Напиши короткое поздравление с днём рождения'",
          "'Перефразируй это предложение более формально'"
        ],
        "correct": 1,
        "explain": "Задача с проверкой текущего курса валюты требует реального доступа к актуальным внешним данным через действие (вызов API), что выходит за рамки возможностей простого чат-бота без инструментов."
      },
      {
        "q": "Согласно уроку, граница между чат-ботом и агентом — это резкая чёткая линия или спектр?",
        "options": [
          "Резкая чёткая линия без промежуточных вариантов",
          "Спектр от простого чат-бота без инструментов до сложных автономных агентов с множеством инструментов и многошаговым рассуждением",
          "Чат-боты и агенты — это полностью несвязанные, не сравнимые категории",
          "Агент — это просто другое название для чат-бота"
        ],
        "correct": 1,
        "explain": "Граница представляет собой спектр постепенно нарастающей сложности: от чистого чат-бота, через системы с одним простым инструментом, до агентов с несколькими инструментами и комплексным многошаговым рассуждением."
      }
    ],
    "glossary": [
      {
        "term": "ИИ-агент",
        "def": "Система на основе нейросети, способная совершать реальные действия во внешнем мире через код (вызов функций, API) и принимать решения на основе результатов этих действий."
      },
      {
        "term": "Цикл восприятие-решение-действие-оценка",
        "def": "Базовая повторяющаяся последовательность работы агента: получение информации, выбор действия, его выполнение, анализ результата для следующего шага."
      },
      {
        "term": "Спектр сложности агентных систем",
        "def": "Постепенный переход от простого чат-бота без инструментов к сложным автономным агентам с множеством инструментов и многошаговым рассуждением."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Восприятие → Решение → Действие\"><line x1=\"361.95486002770815\" y1=\"83.5\" x2=\"405.9097200554163\" y2=\"131.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"319.0\" y1=\"130.0\" x2=\"234.0902799445837\" y2=\"131.00000000000003\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"276.04513997229185\" y1=\"83.50000000000001\" x2=\"320.0\" y2=\"38.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><rect x=\"245.0\" y=\"16.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320.0\" y=\"43.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Восприятие</text><rect x=\"330.9097200554163\" y=\"109.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"405.9097200554163\" y=\"136.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Решение</text><rect x=\"159.0902799445837\" y=\"109.00000000000003\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"234.0902799445837\" y=\"136.00000000000003\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Действие</text></svg>"
  },
  {
    "id": "m6w2",
    "month": 6,
    "week": 2,
    "title": "Инструменты и function calling: агент, который умеет действовать",
    "duration": "4–5 часов",
    "goal": "Реализовать работающего агента с хотя бы одним инструментом через function calling и понять, как модель принимает решение о его использовании.",
    "theory": [
      {
        "heading": "От теории function calling (месяц 5) к реальной реализации агента",
        "text": "В месяце 5 ты изучил концепцию function calling теоретически и на примере разбора структурированного ответа. Теперь задача — реализовать это как часть настоящего рабочего агента. Техническая реализация включает три обязательных элемента: описание доступных инструментов (их имена, назначение, ожидаемые параметры — это передаётся модели в специальном формате при каждом запросе), код самих функций-инструментов (реальная логика, которая выполняется в твоей программе), и код 'диспетчера' — логики, которая читает решение модели о вызове инструмента, реально выполняет соответствующую функцию, и передаёт результат обратно модели.",
        "example": "Описание инструмента для Claude выглядит так: {'name': 'calculate', 'description': 'Вычисляет математическое выражение и возвращает число', 'input_schema': {'type': 'object', 'properties': {'expression': {'type': 'string', 'description': 'Выражение, например 2 + 2 * 3'}}, 'required': ['expression']}}. Блок input_schema написан в формате JSON Schema: он говорит модели, какие параметры есть, какого они типа и какие обязательны. У OpenAI то же самое описание называется parameters и использует ту же JSON Schema. Модель читает описание, чтобы понять, когда и с какими данными вызывать функцию."
      },
      {
        "heading": "Как модель решает, вызвать инструмент или ответить напрямую",
        "text": "Модель анализирует вопрос пользователя и сопоставляет его с описаниями доступных инструментов (которые ты заранее предоставил). Если смысл вопроса совпадает с назначением какого-то инструмента — модель возвращает структурированный запрос на его вызов вместо обычного текстового ответа. Если вопрос не требует инструмента (например, общий разговорный вопрос) — модель отвечает обычным текстом, как чат-бот. Качество описания инструмента (насколько понятно и конкретно сформулировано его назначение) напрямую влияет на то, насколько правильно модель решает, когда его использовать — это прямое применение принципов промпт-инжиниринга из месяца 2, только применённое к описанию инструмента, а не к обычному промпту.",
        "example": "Если описание инструмента calculate() сформулировано нечётко ('делает что-то с числами'), модель может не понять, когда именно его применять. Чёткое описание ('выполняет точное математическое вычисление любого арифметического выражения') даёт модели ясный сигнал для правильного решения."
      },
      {
        "heading": "Диспетчер: мост между решением модели и реальным кодом",
        "text": "Диспетчер (иногда называемый 'оркестратором') — часть твоей программы, которая проверяет ответ модели: если это обычный текст — просто показывает его пользователю; если это запрос на вызов инструмента — извлекает название инструмента и параметры, находит соответствующую функцию в коде, реально вызывает её с этими параметрами, получает результат, и формирует новый запрос к модели, включающий этот результат, чтобы модель сформулировала финальный ответ пользователю на основе реальных данных.",
        "example": "Диспетчер получает от модели запрос вида 'вызови calculate с параметром expression=\"847*23\"' → реально выполняет Python-код вычисления (847*23=19481) → отправляет модели новое сообщение: 'результат вычисления: 19481' → модель формулирует финальный ответ пользователю: 'Результат умножения 847 на 23 равен 19481'."
      },
      {
        "heading": "Почему тестирование 'выбора инструмента' так же важно, как тестирование самого инструмента",
        "text": "При работе с агентами важно тестировать не только то, правильно ли РАБОТАЕТ инструмент (это обычное тестирование кода функции), но и то, правильно ли модель РЕШАЕТ, когда его вызывать. Это новый тип тестирования по сравнению с предыдущими месяцами: нужно проверять как запросы, явно требующие инструмент (модель должна его вызвать), так и запросы, не требующие инструмент (модель НЕ должна вызывать его без необходимости), и граничные случаи, где неочевидно, нужен ли инструмент.",
        "example": "Тест 1: 'Сколько будет 15 умножить на 234?' — модель должна вызвать calculate(). Тест 2: 'Привет, как дела?' — модель НЕ должна вызывать calculate(), просто ответить разговорно. Тест 3 (граничный): 'Правда ли, что 15 умножить на 234 равно примерно 3500?' — здесь поведение модели интересно проверить отдельно, так как вопрос неоднозначен."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Спроектируй простой инструмент-калькулятор",
        "instruction": "Реши, какую конкретную функцию будет выполнять твой первый инструмент (рекомендуется начать с простой функции calculate(expression), выполняющей математическое вычисление) и напиши чёткое описание её назначения, как в примере теории.",
        "prompt": null,
        "expected": "Письменное описание инструмента: имя, назначение, ожидаемые параметры."
      },
      {
        "step": 2,
        "title": "Попроси ИИ реализовать саму функцию-инструмент",
        "instruction": "Отправь промпт на реализацию реальной логики функции, отдельно от интеграции с моделью.",
        "prompt": "Напиши функцию на Python calculate(expression), которая принимает строку с математическим выражением (например '847*23') и возвращает результат вычисления. Добавь обработку ошибок для некорректных выражений (например, деление на ноль или синтаксически неверное выражение), по аналогии с обработкой ошибок из предыдущих месяцев.",
        "expected": "Рабочая и протестированная отдельно функция calculate(), не зависящая пока от LLM API."
      },
      {
        "step": 3,
        "title": "Попроси ИИ реализовать интеграцию function calling с моделью",
        "instruction": "Отправь промпт с описанием желаемой интеграции, используя документацию конкретного API (Claude/OpenAI), которую можно попросить ИИ объяснить.",
        "prompt": "Покажи мне, как правильно описать инструмент calculate (функция для математических вычислений, принимающая параметр expression) в формате, который требует [Claude API / OpenAI API], чтобы модель могла решать, когда его вызывать. Затем напиши код диспетчера: если модель решает вызвать calculate, код должен реально выполнить функцию, передать результат обратно модели, и вывести финальный ответ пользователю.",
        "expected": "Рабочий код полного цикла: описание инструмента → запрос модели → проверка решения модели → реальный вызов функции при необходимости → финальный ответ."
      },
      {
        "step": 4,
        "title": "Протестируй явный случай, требующий инструмент",
        "instruction": "Запусти скрипт с вопросом, который явно требует вычисления.",
        "prompt": "python agent_with_tool.py\n# Тестовый вопрос: 'Сколько будет 847 умножить на 23?'",
        "expected": "Модель корректно решает вызвать calculate(), диспетчер выполняет реальное вычисление, и финальный ответ содержит верный результат (19481)."
      },
      {
        "step": 5,
        "title": "Протестируй случай, НЕ требующий инструмент",
        "instruction": "Задай тот же скрипту обычный разговорный вопрос, не связанный с вычислениями, и убедись, что модель отвечает напрямую, без лишнего вызова инструмента.",
        "prompt": "Тестовый вопрос: 'Привет! Как твои дела сегодня?'",
        "expected": "Модель отвечает обычным текстом разговорного характера, без попытки вызвать calculate() там, где это не нужно."
      },
      {
        "step": 6,
        "title": "Протестируй граничный случай и зафиксируй наблюдение",
        "instruction": "Задай вопрос, где не до конца очевидно, нужен ли инструмент (например, вопрос с уже посчитанным числом в тексте), и посмотри, как ведёт себя модель.",
        "prompt": "Тестовый вопрос: 'Правда что 15 умноженное на 234 это примерно 3500?'",
        "expected": "Наблюдение за поведением модели в неоднозначном случае, зафиксированное в заметке, включая твою оценку: было ли решение модели правильным и почему."
      },
      {
        "step": 7,
        "title": "Проверь и улучши описание инструмента, если были ошибки выбора",
        "instruction": "Если на каком-то из тестов модель вела себя неожиданно (не вызвала инструмент, когда нужно, или наоборот), попробуй уточнить текст описания инструмента и повторить тест.",
        "prompt": "Улучши описание инструмента calculate, сделав его более конкретным в указании, для каких именно типов вопросов его нужно вызывать.",
        "expected": "Улучшенное поведение модели в выборе инструмента после уточнения описания — прямая демонстрация влияния качества описания на корректность решений агента."
      }
    ],
    "test": [
      {
        "q": "Какие три обязательных элемента нужны для реализации агента с function calling?",
        "options": [
          "Только код самой функции-инструмента, остальное не требуется",
          "Описание доступных инструментов для модели, код самих функций-инструментов, и код диспетчера, связывающего решение модели с реальным выполнением",
          "Только системный промпт, остальное модель делает автоматически",
          "Только высокая температура генерации"
        ],
        "correct": 1,
        "explain": "Полная реализация требует все три элемента: модель должна знать о доступных инструментах (описание), должна существовать реальная логика их выполнения (функции), и должен быть механизм, связывающий решение модели с реальным вызовом (диспетчер)."
      },
      {
        "q": "Что определяет, насколько правильно модель решает, когда вызывать конкретный инструмент?",
        "options": [
          "Исключительно температура генерации",
          "Качество и конкретность описания назначения инструмента, предоставленного модели",
          "Скорость интернет-соединения",
          "Решение модели о вызове инструмента полностью случайно и не зависит от описания"
        ],
        "correct": 1,
        "explain": "Чёткое и конкретное описание назначения инструмента напрямую помогает модели правильно сопоставлять вопросы пользователя с нужным инструментом — это применение принципов промпт-инжиниринга к описанию инструментов."
      },
      {
        "q": "Какую роль играет 'диспетчер' в архитектуре агента с function calling?",
        "options": [
          "Диспетчер генерирует текстовые ответы вместо модели",
          "Диспетчер проверяет решение модели, реально вызывает соответствующую функцию при необходимости, и передаёт результат обратно модели для финального ответа",
          "Диспетчер хранит историю диалога без какой-либо другой функции",
          "Диспетчер устанавливает библиотеки Python"
        ],
        "correct": 1,
        "explain": "Диспетчер — это именно связующее звено между решением модели (которое не может само выполнять код) и реальным выполнением функции в программе, после чего результат передаётся обратно модели."
      },
      {
        "q": "Почему важно тестировать ТАКЖЕ случаи, когда модель НЕ должна вызывать инструмент?",
        "options": [
          "Это не имеет практического значения, достаточно проверить только случаи вызова",
          "Чтобы убедиться, что модель не вызывает инструмент избыточно в ситуациях, где это не требуется, что подтверждает корректность её решений, а не только работоспособность самого инструмента",
          "Потому что инструменты всегда должны вызываться на каждый запрос без исключений",
          "Такие тесты технически невозможны"
        ],
        "correct": 1,
        "explain": "Тестирование 'отрицательных' случаев (где инструмент не нужен) проверяет качество РЕШЕНИЯ модели о выборе инструмента, что является отдельным и не менее важным аспектом, чем просто проверка работоспособности самой функции."
      },
      {
        "q": "В тестовом примере с вычислением 847*23, что произойдёт, если диспетчер работает корректно?",
        "options": [
          "Модель сама придумает ответ без реального вычисления, с риском ошибки",
          "Модель решит вызвать calculate(), диспетчер реально выполнит вычисление в коде Python, и финальный ответ будет содержать точный верный результат",
          "Программа выдаст ошибку, так как function calling не поддерживает математику",
          "Ответ будет получен без участия модели вообще"
        ],
        "correct": 1,
        "explain": "Корректно работающий диспетчер гарантирует, что результат вычисления получен реальным выполнением кода (а не угадыванием модели), что обеспечивает точность финального ответа."
      }
    ],
    "glossary": [
      {
        "term": "Описание инструмента",
        "def": "Структурированная информация о назначении, имени и параметрах функции, предоставляемая модели для принятия решения о её вызове."
      },
      {
        "term": "Диспетчер (оркестратор)",
        "def": "Часть программы, связывающая решение модели о вызове инструмента с реальным выполнением соответствующей функции в коде."
      },
      {
        "term": "Тестирование выбора инструмента",
        "def": "Проверка корректности решений модели о том, когда следует и когда не следует вызывать доступный инструмент."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Модель выбирает функцию → Программа её вызывает → Результат — модели\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Модель выбирает</text><text x=\"115.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">функцию</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Программа её</text><text x=\"320.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">вызывает</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Результат — модели</text></svg>"
  },
  {
    "id": "m6w3",
    "month": 6,
    "week": 3,
    "title": "Память агента: краткосрочная и долгосрочная",
    "duration": "4–5 часов",
    "goal": "Понять разницу между краткосрочной и долгосрочной памятью агента и реализовать сохранение ключевых фактов между сессиями.",
    "theory": [
      {
        "heading": "Краткосрочная память: то, что ты уже реализовал в месяце 5",
        "text": "Краткосрочная память — это история текущего диалога в рамках одной сессии (одного запуска программы), которую ты уже реализовывал для чат-бота в месяце 5. Она работает отлично для поддержания контекста текущего разговора, но имеет фундаментальное ограничение: как только программа закрывается, вся эта история исчезает, и при следующем запуске агент 'не помнит' ничего из предыдущих сессий — для него каждый новый запуск программы как первая встреча с пользователем.",
        "example": "Если ты вчера рассказал агенту важную деталь о своём проекте, а сегодня снова открыл программу — краткосрочная память месяца 5 не поможет: агент будет вести себя так, будто видит тебя в первый раз, если у него нет механизма долгосрочной памяти."
      },
      {
        "heading": "Долгосрочная память: данные, которые переживают закрытие программы",
        "text": "Долгосрочная память — это механизм сохранения важной информации в постоянное хранилище (файл на диске, база данных), которое агент может прочитать заново при следующем запуске, даже после полного закрытия программы. Это прямое применение навыка сохранения/загрузки JSON из месяца 3, только теперь применённое не к данным обычного приложения (списку задач), а к 'знаниям' агента о пользователе или контексте разговоров. Важное архитектурное решение — что именно считать достаточно важным, чтобы сохранять в долгосрочную память: сохранять весь диалог целиком обычно избыточно и неэффективно, лучше выделять только ключевые факты.",
        "example": "Вместо сохранения всего текста разговора, агент может сохранять структурированные факты вида {'факт': 'пользователя зовут Анна', 'дата': '2026-03-15'}, {'факт': 'пользователь изучает Python с ноля', 'дата': '2026-03-15'} — компактно и предназначено именно для повторного использования в будущих сессиях."
      },
      {
        "heading": "Как агент решает, что сохранять в долгосрочную память",
        "text": "Один из подходов — явно просить саму модель (через системный промпт или отдельный запрос) определить, есть ли в текущем сообщении пользователя информация, достойная сохранения в долгосрочную память (например, личные предпочтения, важные факты, цели), и если да — вернуть эту информацию в структурированном виде (применяя структурированный вывод из месяца 5), которую программа затем сохраняет в файл. Это избавляет от необходимости вручную прописывать правила 'что важно сохранять' в коде — модель сама анализирует смысл сообщения и выделяет значимые факты.",
        "example": "Промпт для модели: 'Проанализируй это сообщение пользователя. Если в нём есть важный факт о пользователе, который стоит запомнить на будущее (имя, цель, предпочтение), верни его в формате JSON {\"важный_факт\": \"...\"}. Если ничего важного для долгосрочного запоминания нет, верни {\"важный_факт\": null}.'"
      },
      {
        "heading": "Когда простого файла JSON недостаточно: введение в векторные базы данных",
        "text": "Для небольшого количества фактов (десятки-сотни записей) простой JSON-файл работает прекрасно. Но когда количество сохранённых фактов вырастает очень сильно (тысячи записей), или когда нужно находить не точное совпадение, а СМЫСЛОВОЕ сходство (например, найти все факты, 'похожие по смыслу' на текущий вопрос, даже если слова не совпадают буквально), простого файла становится недостаточно. Векторная база данных — специализированное хранилище, которое превращает текст в числовые 'векторы', отражающие смысл, и может быстро находить смыслово похожие записи среди огромного количества данных. Для целей этого курса достаточно понимать ЗАЧЕМ это нужно на концептуальном уровне — детальная реализация векторных баз выходит за рамки базового курса, но полезно знать об их существовании и назначении для будущего развития.",
        "example": "Простой JSON отлично находит факт, если ты точно знаешь, что искать 'имя пользователя'. Векторная база данных может найти релевантный факт, даже если текущий вопрос сформулирован совершенно другими словами, но близок по смыслу к сохранённой информации — это особенно важно при большом объёме накопленных знаний агента."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Спроектируй структуру долгосрочной памяти для своего агента",
        "instruction": "Реши, в каком формате будут храниться факты (например, список словарей с полями 'факт' и 'дата') и создай пустой файл memory.json с базовой структурой.",
        "prompt": null,
        "expected": "Файл memory.json с начальной структурой (например, пустой список []), готовый для сохранения фактов."
      },
      {
        "step": 2,
        "title": "Попроси ИИ реализовать функции сохранения и загрузки долгосрочной памяти",
        "instruction": "Отправь промпт на реализацию, явно переиспользуя подход сохранения JSON из месяца 3.",
        "prompt": "Напиши функции save_memory(facts) и load_memory(), которые сохраняют и загружают список фактов в файл memory.json, по аналогии с сохранением данных JSON, которое мы делали ранее. Обработай случай, если файл ещё не существует при первом запуске (вернуть пустой список).",
        "expected": "Рабочие функции для сохранения и загрузки долгосрочной памяти, аналогичные по принципу функциям save_data/load_data из месяца 3."
      },
      {
        "step": 3,
        "title": "Реализуй выделение важных фактов через модель",
        "instruction": "Попроси ИИ реализовать запрос к модели, который определяет, есть ли в сообщении пользователя важный факт для сохранения.",
        "prompt": "Напиши функцию extract_important_fact(user_message), которая отправляет запрос к LLM API с промптом, анализирующим сообщение пользователя на наличие важного факта (имя, цель, предпочтение), и возвращает либо текст факта, либо None, если ничего важного не найдено. Используй структурированный JSON-ответ, как мы делали в месяце 5.",
        "expected": "Функция, которая реально вызывает модель для анализа каждого сообщения на наличие значимой информации."
      },
      {
        "step": 4,
        "title": "Интегрируй долгосрочную память в основной цикл агента",
        "instruction": "Попроси объединить все части: при каждом сообщении пользователя — проверка на важный факт, при его наличии — сохранение в memory.json; при старте программы — загрузка существующей долгосрочной памяти и включение её в системный промпт или начальный контекст.",
        "prompt": "Объедини это в основной цикл агента: при старте программы загружай memory.json и добавляй известные факты в начало системного промпта (например 'Известные факты о пользователе: ...'). При каждом сообщении пользователя — проверяй через extract_important_fact, есть ли новый важный факт, и если да — сохраняй его в memory.json.",
        "expected": "Полный код агента, объединяющий краткосрочную память (история сессии) и долгосрочную память (файл между сессиями)."
      },
      {
        "step": 5,
        "title": "Тест 1: сохрани факт и закрой программу",
        "instruction": "Запусти агента, сообщи ему конкретный факт о себе (имя, цель), и закрой программу полностью.",
        "prompt": "python agent_with_memory.py\n# Сообщение: 'Меня зовут [имя], я хочу выучить [навык] за [срок]'",
        "expected": "После сообщения факт должен появиться в файле memory.json (проверь содержимое файла вручную)."
      },
      {
        "step": 6,
        "title": "Тест 2: перезапусти программу и проверь, 'помнит' ли агент",
        "instruction": "Запусти программу снова (новый процесс, новая сессия) и спроси агента про сохранённый факт без повторного упоминания его в текущей сессии.",
        "prompt": "python agent_with_memory.py\n# Вопрос: 'Напомни, как меня зовут и что я хочу изучить?'",
        "expected": "Агент корректно отвечает, используя факт, сохранённый в ПРЕДЫДУЩЕЙ сессии — это подтверждает, что долгосрочная память реально работает, в отличие от краткосрочной памяти месяца 5."
      },
      {
        "step": 7,
        "title": "Зафиксируй разницу между краткосрочной и долгосрочной памятью на своём примере",
        "instruction": "Запиши своими словами: что произошло бы, если бы ты задал тот же вопрос из шага 6 без реализованной долгосрочной памяти (используя только краткосрочную память из месяца 5), и почему результат отличается.",
        "prompt": null,
        "expected": "Письменное объяснение, демонстрирующее ясное понимание различия двух типов памяти на конкретном практическом примере."
      }
    ],
    "test": [
      {
        "q": "Чем долгосрочная память агента принципиально отличается от краткосрочной памяти (истории диалога из месяца 5)?",
        "options": [
          "Это два названия одного и того же механизма",
          "Долгосрочная память сохраняется в постоянное хранилище (файл/база данных) и переживает закрытие программы, а краткосрочная существует только в рамках текущей сессии",
          "Краткосрочная память работает только с числами, а долгосрочная — только с текстом",
          "Долгосрочная память не требует сохранения в файл"
        ],
        "correct": 1,
        "explain": "Краткосрочная память (история сессии) исчезает при закрытии программы. Долгосрочная память сохраняется в постоянное хранилище и доступна агенту даже после полного перезапуска программы в новой сессии."
      },
      {
        "q": "Почему обычно неэффективно сохранять в долгосрочную память ВЕСЬ текст каждого диалога целиком?",
        "options": [
          "Это технически невозможно сделать",
          "Это избыточно и неэффективно — лучше выделять только ключевые значимые факты, а не весь объём разговорного текста",
          "Долгосрочная память не может хранить текст вообще",
          "Сохранение всего диалога полностью запрещено техническими ограничениями"
        ],
        "correct": 1,
        "explain": "Сохранение полного текста всех диалогов быстро приводит к огромному объёму малоценных данных. Выделение ключевых фактов (имя, цель, предпочтение) более компактно и практично для повторного использования."
      },
      {
        "q": "Какой подход описан в уроке для определения, какую информацию стоит сохранять в долгосрочную память?",
        "options": [
          "Сохранять абсолютно всё без разбора",
          "Просить саму модель проанализировать сообщение и вернуть структурированный ответ о наличии важного факта для сохранения",
          "Сохранять только сообщения длиннее 100 символов",
          "Этот выбор невозможно автоматизировать"
        ],
        "correct": 1,
        "explain": "Подход, изученный в уроке, использует саму модель для анализа смысла сообщения через структурированный запрос, который возвращает либо найденный важный факт, либо указание на его отсутствие."
      },
      {
        "q": "Когда простого JSON-файла становится недостаточно для хранения долгосрочной памяти агента, согласно уроку?",
        "options": [
          "JSON-файл всегда достаточен независимо от объёма данных",
          "При очень большом объёме сохранённых фактов или необходимости находить смыслово похожие записи, а не только точные совпадения",
          "JSON-файл никогда не подходит для хранения памяти агента",
          "Когда агент работает только с числами, а не с текстом"
        ],
        "correct": 1,
        "explain": "Для небольшого количества фактов JSON-файл работает прекрасно, но при большом объёме данных или необходимости смыслового (а не точного) поиска нужны специализированные решения, например векторные базы данных."
      },
      {
        "q": "В тестовом сценарии практики (сообщить факт, закрыть программу, перезапустить и спросить про факт) — что подтверждает успешный результат теста?",
        "options": [
          "Любой ответ агента, даже без упоминания сохранённого факта",
          "Агент корректно вспоминает факт, сохранённый в предыдущей закрытой сессии, что подтверждает реальную работу долгосрочной памяти",
          "Программа выдаёт ошибку при перезапуске",
          "Файл memory.json остаётся пустым после первой сессии"
        ],
        "correct": 1,
        "explain": "Успешный тест долгосрочной памяти требует, чтобы агент корректно использовал информацию, сохранённую в ПРЕДЫДУЩЕЙ, уже закрытой сессии — это принципиально отличается от проверки краткосрочной памяти в рамках одного запуска."
      }
    ],
    "glossary": [
      {
        "term": "Долгосрочная память агента",
        "def": "Механизм сохранения важной информации в постоянное хранилище (файл/база данных), доступной агенту между разными запусками программы."
      },
      {
        "term": "Краткосрочная память агента",
        "def": "История текущего диалога, существующая только в рамках одной сессии (запуска программы) и теряющаяся при её закрытии."
      },
      {
        "term": "Векторная база данных",
        "def": "Специализированное хранилище данных, позволяющее искать информацию по смысловому сходству, а не только по точному совпадению текста."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Важный факт → memory.json → Новый запуск\"><rect x=\"40\" y=\"60\" width=\"180\" height=\"80\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"130.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Важный факт</text><rect x=\"230\" y=\"60\" width=\"180\" height=\"80\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">memory.json</text><rect x=\"420\" y=\"60\" width=\"180\" height=\"80\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"510.0\" y=\"104.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Новый запуск</text><line x1=\"224\" y1=\"100\" x2=\"218\" y2=\"100\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"218,95 226,100 218,105\" fill=\"#9aa3b5\"/><line x1=\"414\" y1=\"100\" x2=\"408\" y2=\"100\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"408,95 416,100 408,105\" fill=\"#9aa3b5\"/><text x=\"320\" y=\"170\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#9aa3b5\">сохранили → загрузили в новом запуске</text></svg>"
  },
  {
    "id": "m6w4",
    "month": 6,
    "week": 4,
    "title": "Планирование действий: пошаговое рассуждение (ReAct-подобный цикл)",
    "duration": "4–5 часов",
    "goal": "Понять паттерн ReAct (рассуждение-действие-наблюдение) и реализовать агента, способного использовать 2 инструмента последовательно для решения одной задачи.",
    "theory": [
      {
        "heading": "Проблема многошаговых задач: одного вызова инструмента не всегда достаточно",
        "text": "Агент из недели 2 умел вызывать ОДИН инструмент для ответа на вопрос. Но многие реальные задачи требуют нескольких последовательных шагов, где результат одного действия становится входом для следующего. Простой пример: 'узнай текущий курс доллара и посчитай, сколько рублей я получу за 200 долларов' — это требует сначала вызвать инструмент получения курса, а затем, используя полученное число, вызвать инструмент расчёта. Агент должен не просто выбрать 'какой инструмент вызвать', а построить план из нескольких шагов и выполнить их в правильном порядке, передавая промежуточные результаты между шагами.",
        "example": "Если агент вызовет только калькулятор без курса валют, он не будет знать, какое число умножать. Если вызовет только инструмент курса валют, он не завершит задачу — расчёт конечной суммы не будет выполнен. Нужна именно последовательность: курс → затем расчёт с использованием результата курса."
      },
      {
        "heading": "ReAct: Reasoning + Acting (рассуждение + действие)",
        "text": "ReAct — широко известный паттерн построения агентов, в котором модель явно чередует два типа шагов в рамках решения одной задачи: Reasoning (рассуждение) — модель explicitly формулирует, что она думает о текущей ситуации и что нужно сделать дальше (это похоже на chain-of-thought из месяца 2, но применённое к планированию действий, а не просто к математике); Acting (действие) — модель вызывает конкретный инструмент на основе этого рассуждения. После каждого действия происходит Observation (наблюдение) — агент получает результат действия и использует его в следующем цикле рассуждения, решая, достаточно ли этого для финального ответа, или нужен ещё один шаг.",
        "example": "Рассуждение: 'Чтобы ответить на вопрос, мне сначала нужно узнать курс доллара'. Действие: вызов get_exchange_rate(). Наблюдение: 'Курс составляет 95 рублей за доллар'. Рассуждение: 'Теперь у меня есть курс, нужно умножить его на 200'. Действие: вызов calculate('95*200'). Наблюдение: '19000'. Рассуждение: 'Теперь у меня достаточно информации для финального ответа'."
      },
      {
        "heading": "Как технически реализуется цикл с несколькими шагами",
        "text": "На уровне кода это означает, что диспетчер (из недели 2) должен работать не как однократная проверка 'вызвать инструмент или нет', а как ЦИКЛ: после каждого вызова инструмента и получения результата, этот результат отправляется обратно модели, и модель снова решает — достаточно ли информации для финального ответа, или нужно вызвать ещё один инструмент. Цикл продолжается, пока модель не решит, что готова дать финальный текстовый ответ без дальнейших вызовов инструментов. Важно предусмотреть ограничение на максимальное количество шагов цикла (например, не больше 5-7), чтобы избежать теоретически возможной ситуации бесконечного цикла вызовов, если что-то пойдёт не так в логике модели.",
        "example": "Код диспетчера в псевдологике: 'повторять до 5 раз: отправить текущий контекст модели → если модель хочет вызвать инструмент, выполнить его и добавить результат в контекст → если модель даёт финальный ответ, завершить цикл и показать его пользователю'."
      },
      {
        "heading": "Прозрачность рассуждения как инструмент отладки агента",
        "text": "Одно из больших практических преимуществ паттерна ReAct — ты можешь ВИДЕТЬ ход рассуждения модели на каждом шаге (если явно просишь её это проговаривать), а не только финальный результат. Это критически важно для отладки агентов: если агент дал неверный финальный ответ, просмотр промежуточных рассуждений и действий помогает точно понять, на каком шаге пошло не так — выбрала ли модель неверный инструмент, или интерпретировала результат неправильно, или сделала ошибку в логике объединения нескольких результатов. Это прямое применение навыка отладки из месяца 1, но примененное к новому, более сложному типу системы.",
        "example": "Если финальный ответ агента о конвертации валюты неверен, просмотр лога рассуждений может показать: 'курс был получен верно (95), но на шаге умножения модель использовала неверное число параметров' — это точно указывает, где искать и исправлять проблему, вместо гадания над всем процессом целиком."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Спроектируй второй инструмент для своего агента",
        "instruction": "К уже существующему инструменту calculate() из недели 2 добавь второй простой инструмент (например, get_exchange_rate(currency) — используя публичный API из месяца 4, или любой другой простой инструмент, логично дополняющий первый).",
        "prompt": null,
        "expected": "Письменное описание второго инструмента: имя, назначение, параметры."
      },
      {
        "step": 2,
        "title": "Попроси ИИ реализовать функцию второго инструмента",
        "instruction": "Отправь промпт на реализацию, переиспользуя навыки работы с API из месяца 4.",
        "prompt": "Напиши функцию get_exchange_rate(currency), которая получает текущий курс валюты через [публичный API из месяца 4], с обработкой ошибок сети по аналогии с тем, что мы делали ранее.",
        "expected": "Рабочая и отдельно протестированная функция второго инструмента."
      },
      {
        "step": 3,
        "title": "Попроси ИИ реализовать цикл диспетчера с несколькими шагами",
        "instruction": "Отправь промпт на реализацию многошагового цикла, явно упомянув паттерн ReAct.",
        "prompt": "У меня есть агент с двумя инструментами: calculate(expression) и get_exchange_rate(currency). Перепиши диспетчер так, чтобы он работал в цикле по паттерну ReAct: после каждого вызова инструмента результат отправляется обратно модели, и она решает, нужен ли ещё один шаг, или можно дать финальный ответ. Ограничь цикл максимум 5 итерациями для безопасности. Выведи в консоль каждый шаг рассуждения и действия модели явно, для отладки.",
        "expected": "Код агента с циклом диспетчера, который может использовать несколько инструментов последовательно, и явно выводит каждый промежуточный шаг в консоль."
      },
      {
        "step": 4,
        "title": "Протестируй многошаговую задачу, требующую оба инструмента",
        "instruction": "Запусти агента с вопросом, требующим последовательного использования обоих инструментов.",
        "prompt": "python multi_tool_agent.py\n# Вопрос: 'Узнай текущий курс доллара к рублю и посчитай, сколько рублей я получу за 200 долларов'",
        "expected": "В консоли видны явные шаги: рассуждение о необходимости курса → вызов get_exchange_rate → наблюдение результата → рассуждение о необходимости расчёта → вызов calculate → финальный верный ответ."
      },
      {
        "step": 5,
        "title": "Проверь, что агент не вызывает лишние шаги для простых вопросов",
        "instruction": "Задай тому же агенту простой вопрос, не требующий ни одного инструмента, и убедись, что он не входит в ненужный многошаговый цикл.",
        "prompt": "Тестовый вопрос: 'Привет, расскажи короткую шутку'",
        "expected": "Агент отвечает напрямую без вызова инструментов и без лишних итераций цикла — подтверждение, что цикл работает эффективно, а не избыточно."
      },
      {
        "step": 6,
        "title": "Намеренно создай сложную ситуацию и изучи лог рассуждений",
        "instruction": "Задай вопрос, который может сбить модель с толку (например, попроси курс валюты, которой не существует в API, или дай противоречивые данные) и изучи, как агент обрабатывает это, используя видимый лог рассуждений для диагностики.",
        "prompt": "Тестовый вопрос: 'Узнай курс несуществующей валюты XYZ и посчитай с ней что-нибудь'",
        "expected": "Лог рассуждений показывает, как агент пытается справиться с ошибкой (например, инструмент возвращает ошибку, и агент должен корректно сообщить об этом, а не зациклиться или дать неверный ответ)."
      },
      {
        "step": 7,
        "title": "Зафиксируй итоговый прототип как основу для месяца 7",
        "instruction": "Сохрани этот прототип агента (с двумя инструментами, памятью из недели 3, и многошаговым циклом из этой недели) как основу для финального проекта курса в следующих двух месяцах. Сделай коммит на GitHub с описанием текущих возможностей.",
        "prompt": "git add .\ngit commit -m \"Реализовать многошаговый агент с двумя инструментами по паттерну ReAct\"\ngit push",
        "expected": "Репозиторий с рабочим прототипом агента — архитектурная основа, которая будет развиваться в финальный проект курса в месяцах 7-8."
      }
    ],
    "test": [
      {
        "q": "Почему агенту с одним инструментом может быть недостаточно для решения некоторых реальных задач?",
        "options": [
          "Один инструмент всегда достаточен для любой задачи",
          "Многие задачи требуют нескольких последовательных шагов, где результат одного действия становится входом для следующего (например, сначала узнать курс, потом посчитать сумму)",
          "Агенты технически не могут иметь больше одного инструмента",
          "Это не связано с количеством инструментов вообще"
        ],
        "correct": 1,
        "explain": "Многошаговые задачи требуют последовательного выполнения нескольких действий, где промежуточный результат одного шага необходим для выполнения следующего — одного инструмента часто недостаточно для такой логики."
      },
      {
        "q": "Что означают три компонента паттерна ReAct?",
        "options": [
          "Regular, Action, Testing",
          "Reasoning (рассуждение) - explicitный ход мысли модели, Acting (действие) - вызов инструмента, Observation (наблюдение) - получение и анализ результата",
          "React — это название конкретной библиотеки JavaScript, не связанное с ИИ-агентами",
          "Request, Action, Completion"
        ],
        "correct": 1,
        "explain": "ReAct объединяет явное рассуждение модели о текущей ситуации, последующее действие (вызов инструмента) и наблюдение результата, которое становится основой для следующего цикла рассуждения."
      },
      {
        "q": "Почему важно ограничивать максимальное количество итераций цикла диспетчера (например, до 5-7)?",
        "options": [
          "Это не имеет никакого практического значения",
          "Чтобы избежать потенциальной ситуации бесконечного цикла вызовов инструментов, если логика модели по какой-то причине не приходит к финальному ответу",
          "Ограничение итераций ускоряет работу модели технически",
          "Такое ограничение требуется только для простых задач с одним инструментом"
        ],
        "correct": 1,
        "explain": "Без ограничения на количество итераций существует риск, что агент застрянет в цикле повторных вызовов инструментов без выхода к финальному ответу — явный лимит защищает от этой ситуации."
      },
      {
        "q": "Какое практическое преимущество даёт явный вывод промежуточных шагов рассуждения агента в консоль, согласно уроку?",
        "options": [
          "Это чисто декоративная функция без практической пользы",
          "Это помогает в отладке: если финальный ответ неверен, просмотр промежуточных шагов точно показывает, на каком этапе возникла проблема",
          "Вывод промежуточных шагов замедляет работу программы без каких-либо плюсов",
          "Это требование, не связанное с качеством работы агента"
        ],
        "correct": 1,
        "explain": "Видимость промежуточных шагов рассуждения и действий — ключевой инструмент отладки агентов, позволяющий точно локализовать источник ошибки в многошаговом процессе, вместо гадания над всей цепочкой целиком."
      },
      {
        "q": "В тестовом сценарии с несуществующей валютой XYZ, что должен ПРАВИЛЬНО сделать хорошо спроектированный агент?",
        "options": [
          "Зациклиться бесконечно, пытаясь получить курс несуществующей валюты",
          "Корректно обработать ошибку от инструмента (валюта не найдена) и сообщить об этом пользователю понятным образом, не давая выдуманный результат",
          "Выдумать правдоподобный, но неверный курс валюты",
          "Полностью прекратить работу программы без какого-либо сообщения"
        ],
        "correct": 1,
        "explain": "Хорошо спроектированный агент должен корректно обработать ошибку от инструмента (например, 'валюта не найдена') через механизм обработки ошибок и явно сообщить об этом, а не зацикливаться или выдумывать неверный результат (что было бы галлюцинацией)."
      }
    ],
    "glossary": [
      {
        "term": "ReAct (Reasoning + Acting)",
        "def": "Паттерн построения агентов, в котором модель явно чередует шаги рассуждения о ситуации и действия (вызов инструментов), анализируя результат каждого шага перед следующим."
      },
      {
        "term": "Observation (наблюдение)",
        "def": "Результат выполненного действия (вызова инструмента), который агент анализирует для принятия решения о следующем шаге."
      },
      {
        "term": "Ограничение итераций цикла",
        "def": "Максимальное количество повторений цикла рассуждение-действие, установленное для защиты от потенциального бесконечного цикла вызовов."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Думаю → Действую → Смотрю результат\"><line x1=\"361.95486002770815\" y1=\"83.5\" x2=\"405.9097200554163\" y2=\"131.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"319.0\" y1=\"130.0\" x2=\"234.0902799445837\" y2=\"131.00000000000003\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"276.04513997229185\" y1=\"83.50000000000001\" x2=\"320.0\" y2=\"38.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><rect x=\"245.0\" y=\"16.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320.0\" y=\"43.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Думаю</text><rect x=\"330.9097200554163\" y=\"109.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"405.9097200554163\" y=\"136.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Действую</text><rect x=\"159.0902799445837\" y=\"109.00000000000003\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"234.0902799445837\" y=\"136.00000000000003\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Смотрю результат</text></svg>"
  },
  {
    "id": "m7w1",
    "month": 7,
    "week": 1,
    "title": "Проектирование архитектуры своего агента",
    "duration": "4–5 часов",
    "goal": "Сформулировать конкретное назначение своего финального агента и составить полное архитектурное ТЗ по аналогии с месяцем 3, но уровнем сложнее.",
    "theory": [
      {
        "heading": "Это кульминация курса — и она начинается не с кода",
        "text": "Ты подошёл к финальному проекту курса — собственному ИИ-агенту. Логично было бы ожидать, что сейчас начнётся интенсивное кодирование, но, в полном соответствии с главным принципом курса, всё начинается с проектирования, как в месяце 3 (неделя 1). Разница лишь в том, что теперь архитектурное ТЗ усложняется: вместо структуры данных и функций обычного приложения, ты проектируешь назначение агента, набор нужных ему инструментов, тип памяти, и ожидаемые сценарии использования. Чем тщательнее сделан этот шаг, тем менее хаотичной будет реализация в следующих трёх неделях.",
        "example": "Пропуск этапа проектирования для агента намного рискованнее, чем для обычного приложения из месяца 3, потому что агент сочетает в себе несколько сложных подсистем одновременно (память, инструменты, цикл рассуждения) — без ясного плана легко потерять контроль над архитектурой на середине реализации."
      },
      {
        "heading": "Выбор назначения агента: конкретная реальная задача, а не абстракция",
        "text": "Хороший финальный проект решает конкретную реальную задачу конкретного пользователя (возможно, тебя самого), а не абстрактную идею 'умного помощника на все случаи жизни'. Чем конкретнее определено назначение, тем проще спроектировать подходящий набор инструментов и память, и тем убедительнее будет финальный результат как для тебя, так и для потенциальных пользователей продукта, если курс будет упакован как образовательный продукт позже. Хорошие кандидаты для финального проекта — агенты с чётко ограниченной, но практически полезной областью применения.",
        "example": "Слабая формулировка: 'Умный помощник, который делает всё'. Сильная формулировка: 'Агент-ассистент по личным финансам, который помогает фиксировать траты голосом/текстом, категоризирует их, и может ответить на вопрос о текущем состоянии бюджета на основе сохранённой истории' — конкретная, ограниченная, но практически ценная задача."
      },
      {
        "heading": "Проектирование набора инструментов под конкретную задачу",
        "text": "Набор инструментов не выбирается произвольно 'потому что это интересно реализовать' — он должен логически следовать из назначения агента. Для каждой функции, которую должен выполнять агент, нужно определить: требует ли она реального действия (инструмента) или может быть реализована чистым рассуждением модели без внешнего вызова. Хорошая практика — не пытаться сразу спроектировать 10 инструментов для полноты, а начать с 2-3 ключевых, которые покрывают основную ценность агента, и расширять список только при реальной необходимости, выявленной в процессе тестирования.",
        "example": "Для агента-ассистента по финансам: инструмент add_expense(amount, category) — сохранение траты, инструмент get_summary(period) — получение сводки трат за период. Пока этого достаточно для базовой ценности, остальные возможные инструменты (прогнозирование, советы по экономии) можно добавить позже, если будет необходимость."
      },
      {
        "heading": "Проектирование типа памяти и ожидаемых сценариев",
        "text": "На основе материала месяца 6 нужно определиться: какая память нужна агенту — только краткосрочная (в рамках одной сессии диалога) или также долгосрочная (сохраняющая информацию между сессиями, что критично для большинства реально полезных личных ассистентов). Также важно прописать 3-5 конкретных ожидаемых сценариев использования (user stories) — типичных диалогов, которые должен уметь поддерживать агент. Эти сценарии станут основой для тестирования в следующих неделях месяца.",
        "example": "Сценарий для финансового агента: 'Пользователь пишет: Потратил 1500 на продукты сегодня → Агент сохраняет трату в категории продукты с суммой 1500 и сегодняшней датой → Агент подтверждает сохранение'. Второй сценарий: 'Пользователь спрашивает: Сколько я потратил на продукты за последнюю неделю? → Агент вызывает инструмент получения сводки → Отвечает конкретной суммой'."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Выбери конкретное назначение своего финального агента",
        "instruction": "Подумай о реальной задаче, которая была бы полезна лично тебе (или типичному новичку, если думаешь о будущем продукте). Примеры направлений: ассистент по личным финансам, помощник по учебным заметкам/конспектам, агент-помощник в подготовке резюме, трекер привычек с умными напоминаниями на основе истории. Сформулируй назначение одним конкретным предложением.",
        "prompt": null,
        "expected": "Одно чёткое предложение, описывающее назначение агента (не абстрактное, а конкретное)."
      },
      {
        "step": 2,
        "title": "Обсуди с ИИ реалистичность и границы задачи",
        "instruction": "Прежде чем проектировать детали, проверь масштаб задачи с ИИ, чтобы избежать выбора слишком амбициозного или слишком тривиального проекта для 2 недель реализации.",
        "prompt": "Я планирую создать ИИ-агента со следующим назначением: [твоя формулировка]. Это мой финальный проект 8-месячного курса по вайб-кодингу, у меня есть примерно 2 недели практики (8-10 часов) на реализацию. Реалистична ли эта задача для такого срока? Если слишком амбициозно — предложи, как сузить scope до реалистичного MVP (минимально жизнеспособной версии).",
        "expected": "Обоснованное мнение от ИИ о реалистичности масштаба, возможно с предложением сузить задачу до MVP — зафиксируй финальное решение по масштабу."
      },
      {
        "step": 3,
        "title": "Спроектируй список необходимых инструментов",
        "instruction": "На основе финального назначения определи 2-3 ключевых инструмента, без которых основная ценность агента не работает. Для каждого — имя, назначение, входные параметры, что возвращает.",
        "prompt": "Для агента с назначением [твоё назначение], какие 2-3 инструмента абсолютно необходимы для базовой ценности, а какие можно отложить на будущее расширение? Предложи конкретные имена функций, их параметры и то, что они должны возвращать.",
        "expected": "Список из 2-3 инструментов с чёткими именами, параметрами и описанием возвращаемого результата."
      },
      {
        "step": 4,
        "title": "Определи тип необходимой памяти",
        "instruction": "Реши, нужна ли твоему агенту только краткосрочная память (диалог в рамках сессии) или также долгосрочная (данные между сессиями) — для большинства персональных ассистентов долгосрочная память критична.",
        "prompt": null,
        "expected": "Письменное решение о типе памяти с кратким обоснованием, почему именно такой тип нужен для данного назначения."
      },
      {
        "step": 5,
        "title": "Напиши 5 конкретных пользовательских сценариев (user stories)",
        "instruction": "Опиши 5 типичных диалогов с агентом от начала до конца: что говорит пользователь, что должен сделать агент, что он должен ответить.",
        "prompt": null,
        "expected": "5 детально описанных сценариев использования, которые будут использоваться для тестирования в неделях 2-4 этого месяца."
      },
      {
        "step": 6,
        "title": "Собери полный документ архитектурного ТЗ",
        "instruction": "Объедини всё в единый документ с разделами: Назначение агента, Инструменты (список с описанием), Тип памяти (с обоснованием), 5 пользовательских сценариев.",
        "prompt": null,
        "expected": "Готовый документ архитектурного ТЗ финального проекта — главный артефакт этой недели, основа для реализации в следующих трёх неделях."
      },
      {
        "step": 7,
        "title": "Попроси ИИ критически оценить готовое ТЗ",
        "instruction": "Как и в месяце 3, попроси финальную критику плана перед переходом к реализации.",
        "prompt": "Вот моё архитектурное ТЗ для финального агента курса: [вставь весь документ]. Прежде чем я начну реализацию, укажи: какие сценарии или технические сложности я мог не предусмотреть, достаточно ли чётко описаны инструменты для их последующей реализации, и реалистична ли эта архитектура для 2-недельной реализации.",
        "expected": "Финальный список замечаний от ИИ, которые ты либо вносишь в документ, либо осознанно откладываешь на будущее расширение проекта."
      }
    ],
    "test": [
      {
        "q": "Почему финальный проект курса (сборка агента) начинается с проектирования, а не с написания кода?",
        "options": [
          "Потому что писать код на этой неделе технически невозможно",
          "Потому что агент сочетает несколько сложных подсистем одновременно (память, инструменты, рассуждение), и без чёткого плана легко потерять контроль над архитектурой при реализации",
          "Это требование не имеет практического смысла для финального проекта",
          "Потому что реализация кода займёт меньше времени, чем планирование"
        ],
        "correct": 1,
        "explain": "Сложность агентной архитектуры (сочетание памяти, инструментов и циклов рассуждения) делает тщательное проектирование особенно важным — хаотичная реализация без плана с высокой вероятностью приведёт к путанице на середине проекта."
      },
      {
        "q": "Какая формулировка назначения финального агента считается более сильной, согласно уроку?",
        "options": [
          "'Умный помощник, который делает всё, что нужно пользователю'",
          "'Агент-ассистент по личным финансам, который фиксирует траты, категоризирует их и отвечает на вопросы о текущем бюджете на основе сохранённой истории'",
          "'ИИ для решения любых задач жизни'",
          "'Продвинутый универсальный бот будущего'"
        ],
        "correct": 1,
        "explain": "Конкретная, ограниченная, но практически ценная формулировка задачи позволяет точно спроектировать нужные инструменты и память, в отличие от абстрактных и неограниченных формулировок."
      },
      {
        "q": "Как должен определяться набор инструментов агента согласно принципам этого урока?",
        "options": [
          "Нужно сразу спроектировать максимально возможное количество инструментов для полноты функциональности",
          "Набор инструментов должен логически следовать из конкретного назначения агента, начиная с 2-3 ключевых инструментов, покрывающих основную ценность",
          "Количество инструментов не имеет значения для архитектуры агента",
          "Инструменты выбираются случайным образом из готового списка"
        ],
        "correct": 1,
        "explain": "Хорошая практика — начинать с минимального набора инструментов (2-3), покрывающих ключевую ценность агента, и расширять его только при реальной необходимости, выявленной в процессе тестирования, а не пытаться сразу охватить всё."
      },
      {
        "q": "Для чего нужны 5 пользовательских сценариев (user stories), составленных на этой неделе?",
        "options": [
          "Это чисто формальное требование без практического применения",
          "Они будут использоваться как основа для тестирования реализованного агента в следующих неделях месяца",
          "Сценарии нужны только для демонстрации курса преподавателю",
          "Пользовательские сценарии заменяют необходимость выбора инструментов"
        ],
        "correct": 1,
        "explain": "Заранее составленные конкретные сценарии использования становятся основой системного тестирования агента в неделях 2-4, по аналогии с составлением тестовых сценариев в месяце 3."
      },
      {
        "q": "Почему важно обсудить с ИИ реалистичность масштаба задачи ДО начала реализации?",
        "options": [
          "Это не имеет значения для успеха проекта",
          "Чтобы избежать выбора слишком амбициозного проекта, который невозможно реализовать за отведённые 2 недели практики, и своевременно сузить задачу до реалистичного MVP",
          "ИИ всегда считает любую задачу нереалистичной",
          "Обсуждение масштаба задачи требуется только для коммерческих проектов"
        ],
        "correct": 1,
        "explain": "Проверка реалистичности масштаба задачи на раннем этапе предотвращает ситуацию, когда проект оказывается слишком амбициозным для отведённого времени, и позволяет своевременно скорректировать scope до реалистичного MVP."
      }
    ],
    "glossary": [
      {
        "term": "MVP (Minimum Viable Product)",
        "def": "Минимально жизнеспособная версия продукта, реализующая основную ценность без избыточной сложности, пригодная для реалистичной реализации в ограниченные сроки."
      },
      {
        "term": "User story (пользовательский сценарий)",
        "def": "Конкретное описание типичного взаимодействия пользователя с продуктом от начала до конца, используемое для проектирования и последующего тестирования."
      },
      {
        "term": "Scope проекта",
        "def": "Границы и объём функциональности, которые планируется реализовать в рамках конкретного проекта и отведённого времени."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Назначение → Инструменты → Память → Характер\"><rect x=\"180\" y=\"28.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320\" y=\"48.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Назначение</text><rect x=\"180\" y=\"66.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320\" y=\"86.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Инструменты</text><rect x=\"180\" y=\"104.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320\" y=\"124.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Память</text><rect x=\"180\" y=\"142.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#fbbf24\" stroke-width=\"2\"/><text x=\"320\" y=\"162.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Характер</text></svg>"
  },
  {
    "id": "m7w2",
    "month": 7,
    "week": 2,
    "title": "Реализация базового цикла агента",
    "duration": "4–5 часов",
    "goal": "Собрать базовую рабочую версию финального агента: системный промпт, краткосрочная память, диалоговый цикл — без инструментов пока.",
    "theory": [
      {
        "heading": "Зачем начинать без инструментов, если цель — агент с действиями",
        "text": "Может показаться нелогичным: цель — агент, который совершает реальные действия, а эта неделя явно откладывает инструменты на потом. Но это осознанная инженерная стратегия — сборка по слоям (layered build). Сначала нужно убедиться, что фундамент работает идеально: правильный системный промпт, корректно работающая память, стабильный диалоговый цикл. Если на этом базовом слое уже есть проблемы, добавление инструментов сверху только усложнит диагностику — ты не будешь понимать, проблема в логике диалога или в логике вызова инструментов. Разделяя сборку на слои, ты на каждом этапе точно знаешь, что именно тестируешь.",
        "example": "Это похоже на строительство: сначала заливается и проверяется фундамент, и только когда он устойчив, начинают класть стены. Если начать класть стены на непроверенном фундаменте, и что-то пойдёт не так — будет неясно, проблема в фундаменте или в кладке."
      },
      {
        "heading": "Перенос системного промпта и памяти из прототипа месяца 6",
        "text": "У тебя уже есть рабочий прототип из месяца 6 с реализованной краткосрочной и долгосрочной памятью, и двумя инструментами. Задача этой недели — не писать всё с нуля, а переиспользовать проверенную архитектуру памяти и диалогового цикла, адаптировав системный промпт под НОВОЕ назначение финального агента из ТЗ недели 1. Это прямое применение принципа итеративной доработки существующего кода, изученного ещё в месяце 1: лучше адаптировать то, что уже работает, чем писать заново и рисковать повторить уже решённые проблемы.",
        "example": "Функции save_memory()/load_memory() из месяца 6 можно использовать практически без изменений — меняется только СОДЕРЖАНИЕ системного промпта (характер и назначение агента) и то, КАКИЕ факты модель выделяет как важные для сохранения, в соответствии с новым назначением агента."
      },
      {
        "heading": "Что значит 'базовая версия без инструментов' практически",
        "text": "На этом этапе агент должен уметь полноценно вести диалог в своём характере (заданном системным промптом из ТЗ), помнить контекст в рамках сессии, и сохранять/загружать долгосрочную память между сессиями — но пока не должен ничего вычислять, искать или сохранять через специальные инструменты (кроме самой долгосрочной памяти, которая технически уже является простым 'встроенным' инструментом). Любой запрос, требующий реального действия (например, 'посчитай мой текущий баланс'), на этом этапе может получить лишь текстовый ответ 'это функция появится позже' или быть обработан в упрощённом виде — это нормально и ожидаемо для этой промежуточной стадии.",
        "example": "Если финальный агент — ассистент по финансам, на этой неделе он должен уметь поддерживать диалог о финансах в целом, помнить, что пользователь говорил ранее, но реальное сохранение и подсчёт трат (инструменты) будет добавлено только на следующей неделе."
      },
      {
        "heading": "Ручное тестирование на 10 запросах как критерий готовности слоя",
        "text": "Прежде чем переходить к следующему слою (инструментам на неделе 3), важно убедиться, что базовый слой действительно стабилен. Критерий для этой недели — минимум 10 разных тестовых запросов, прогнанных вручную, включая проверку памяти (краткосрочной и долгосрочной по отдельности), проверку характера/тона общения (соответствует ли заданному в системном промпте), и пару 'странных' запросов (не по теме, провокационных), чтобы увидеть, как агент реагирует на границы своей роли.",
        "example": "Среди 10 тестовых запросов должно быть минимум: 2-3 запроса на проверку памяти в рамках сессии, 2-3 запроса после перезапуска программы на проверку долгосрочной памяти, 2-3 запроса, проверяющих характер общения, и 2 запроса не по теме, чтобы увидеть реакцию агента на выход за рамки его назначения."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Скопируй рабочий прототип из месяца 6 как основу",
        "instruction": "Создай новую папку проекта для финального агента и перенеси туда файлы прототипа из месяца 6 (диалоговый цикл, функции памяти), которые будут адаптированы.",
        "prompt": null,
        "expected": "Новая папка проекта с базовым кодом, скопированным из рабочего прототипа предыдущего месяца."
      },
      {
        "step": 2,
        "title": "Напиши финальную версию системного промпта по ТЗ недели 1",
        "instruction": "На основе архитектурного ТЗ из недели 1 составь детальный системный промпт (используя принципы из месяца 5, неделя 2): характер, стиль, ограничения, явные правила поведения, специфичные для назначения твоего агента.",
        "prompt": "Вот системный промпт для моего агента: [вставь промпт]. Назначение агента: [одно предложение из ТЗ]. Оцени его: заданы ли характер, стиль, ограничения и правила поведения в спорных случаях? Чего не хватает? Предложи 3 конкретных улучшения, но не переписывай промпт целиком.",
        "expected": "Развёрнутый финальный системный промпт (минимум 6-8 предложений), сохранённый как отдельная переменная/константа в коде."
      },
      {
        "step": 3,
        "title": "Попроси ИИ адаптировать код прототипа под новое назначение",
        "instruction": "Отправь промпт с описанием изменений, которые нужно внести в существующий код.",
        "prompt": "Вот мой рабочий прототип агента из предыдущего месяца: [вставь код диалогового цикла и функций памяти]. Я хочу адаптировать его под новое назначение: [краткое описание из ТЗ]. Замени системный промпт на этот: [вставь новый системный промпт]. Также адаптируй логику извлечения важных фактов для долгосрочной памяти так, чтобы она искала факты, релевантные именно для [назначение агента], например [приведи 1-2 конкретных примера типа факта].",
        "expected": "Адаптированный код базового агента с новым системным промптом и логикой памяти, специфичной для нового назначения."
      },
      {
        "step": 4,
        "title": "Запусти и проведи первичную проверку характера общения",
        "instruction": "Запусти агента и задай 2-3 вопроса, проверяющих, соответствует ли тон и содержание ответов заданному в системном промпте характеру.",
        "prompt": "python final_agent_base.py",
        "expected": "Ответы агента явно отражают характер и стиль, заданные в системном промпте, а не общий нейтральный тон обычного чат-бота."
      },
      {
        "step": 5,
        "title": "Проверь краткосрочную память на 3 запросах",
        "instruction": "В рамках одной сессии сообщи факт, задай пару других вопросов, и спроси про исходный факт — по методике теста памяти из месяца 5.",
        "prompt": null,
        "expected": "Агент корректно использует информацию, упомянутую ранее в текущей сессии."
      },
      {
        "step": 6,
        "title": "Проверь долгосрочную память после перезапуска",
        "instruction": "Сообщи релевантный факт (специфичный для назначения агента), закрой программу, перезапусти, и спроси про этот факт — по методике теста из месяца 6.",
        "prompt": null,
        "expected": "Агент корректно вспоминает факт из предыдущей закрытой сессии."
      },
      {
        "step": 7,
        "title": "Протестируй 2 запроса 'не по теме' и зафиксируй реакцию",
        "instruction": "Задай агенту вопрос, явно выходящий за рамки его назначения (например, финансовому агенту задать вопрос про историю древнего Рима), и посмотри, как он реагирует согласно ограничениям из системного промпта.",
        "prompt": null,
        "expected": "Агент реагирует в соответствии с заданными ограничениями (например, мягко возвращает разговор к своей теме, если это было явно прописано в системном промпте)."
      },
      {
        "step": 8,
        "title": "Составь итоговую таблицу результатов 10 тестов",
        "instruction": "Собери в таблицу результаты минимум 10 тестовых запросов (из шагов 4-7 и дополнительных), с пометкой 'прошёл/не прошёл' и кратким комментарием для каждого.",
        "prompt": "Сделай шаблон таблицы для результатов тестирования агента с колонками: №, запрос, что проверяем (память / характер / вне темы), ожидаемое поведение, фактическое поведение, прошёл / не прошёл, комментарий. Дай его в формате Markdown.",
        "expected": "Таблица из 10 строк, подтверждающая готовность базового слоя агента перед переходом к инструментам на следующей неделе."
      }
    ],
    "test": [
      {
        "q": "Почему стратегия 'сборки по слоям' предполагает сначала реализовать агента без инструментов, а не сразу всё вместе?",
        "options": [
          "Потому что инструменты технически сложнее реализовать, чем диалог",
          "Чтобы убедиться, что базовый слой (память, диалог, характер) работает стабильно, прежде чем добавлять сложность инструментов — это упрощает диагностику проблем",
          "Потому что инструменты не нужны для финального проекта вообще",
          "Эта стратегия не имеет практического смысла"
        ],
        "correct": 1,
        "explain": "Разделение сборки на слои позволяет на каждом этапе точно знать, что тестируется — если проблема возникнет позже при добавлении инструментов, будет ясно, что базовый диалоговый слой уже был проверен и стабилен."
      },
      {
        "q": "Что из прототипа месяца 6 предполагается переиспользовать на этой неделе, согласно уроку?",
        "options": [
          "Абсолютно весь код без единого изменения",
          "Архитектуру памяти (функции сохранения/загрузки) и диалоговый цикл, адаптируя содержание системного промпта под новое назначение",
          "Только интерфейс пользователя, без логики памяти",
          "Ничего из прототипа не переиспользуется, всё пишется с нуля"
        ],
        "correct": 1,
        "explain": "Принцип итеративной доработки предполагает переиспользование уже проверенной архитектуры (память, диалоговый цикл), адаптируя именно содержание (системный промпт, логику выделения важных фактов) под новое назначение агента."
      },
      {
        "q": "Что должен уметь делать агент на этом этапе разработки (базовая версия без инструментов)?",
        "options": [
          "Выполнять любые сложные вычисления и поиск актуальной информации",
          "Вести диалог в заданном характере, помнить контекст сессии и сохранять/загружать долгосрочную память между сессиями, но без специализированных инструментов действия",
          "Ничего, кроме вывода статического текста",
          "Полную функциональность финального продукта, включая все инструменты"
        ],
        "correct": 1,
        "explain": "На этом промежуточном этапе от агента ожидается стабильная работа диалогового слоя и памяти, в то время как специализированные инструменты для реальных действий добавляются на следующей неделе."
      },
      {
        "q": "Зачем в число 10 тестовых запросов включать вопросы 'не по теме' назначения агента?",
        "options": [
          "Это не нужно и не имеет практического значения",
          "Чтобы увидеть, как агент реагирует на выход за рамки своей роли, и проверить соблюдение ограничений, заданных в системном промпте",
          "Вопросы не по теме всегда должны приводить к ошибке программы",
          "Это требуется только для агентов с инструментами, а не для базовой версии"
        ],
        "correct": 1,
        "explain": "Тестирование граничных случаев, выходящих за рамки назначения агента, помогает убедиться, что заданные в системном промпте ограничения реально соблюдаются моделью на практике, а не только в теории."
      },
      {
        "q": "Какой критерий определяет готовность перехода от этой недели к следующей (добавлению инструментов)?",
        "options": [
          "Простое ощущение, что 'вроде всё работает'",
          "Минимум 10 разных тестовых запросов, покрывающих память, характер общения и граничные случаи, прошедшие проверку с зафиксированным результатом",
          "Наличие хотя бы одного успешного запроса без тестирования остальных",
          "Переход к следующей неделе происходит автоматически по календарю, без проверки готовности"
        ],
        "correct": 1,
        "explain": "Системная проверка минимум 10 конкретных тестовых сценариев с зафиксированным результатом — именно тот критерий, который подтверждает стабильность базового слоя перед добавлением дополнительной сложности инструментов."
      }
    ],
    "glossary": [
      {
        "term": "Сборка по слоям (layered build)",
        "def": "Инженерная стратегия поэтапной реализации сложной системы, при которой каждый слой тщательно проверяется перед добавлением следующего уровня сложности."
      },
      {
        "term": "Базовый диалоговый слой",
        "def": "Часть агента, отвечающая за ведение диалога, характер общения и память, без специализированных инструментов действия."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Системный промпт → Краткосрочная память → Диалоговый цикл\"><rect x=\"180\" y=\"47.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320\" y=\"67.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Системный промпт</text><rect x=\"180\" y=\"85.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320\" y=\"105.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Краткосрочная память</text><rect x=\"180\" y=\"123.0\" width=\"280\" height=\"30\" rx=\"8\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"320\" y=\"143.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Диалоговый цикл</text></svg>"
  },
  {
    "id": "m7w3",
    "month": 7,
    "week": 3,
    "title": "Подключение 2-3 реальных инструментов",
    "duration": "4–5 часов",
    "goal": "Реализовать 2-3 инструмента согласно архитектурному ТЗ и протестировать агента на реалистичных сценариях, требующих их самостоятельного выбора.",
    "theory": [
      {
        "heading": "Второй слой сборки: добавление инструментов на проверенный фундамент",
        "text": "Теперь, когда базовый диалоговый слой подтверждён как стабильный (неделя 2), можно добавлять второй слой — реальные инструменты действия, спроектированные в ТЗ недели 1. Это прямое применение техники из месяца 6 (неделя 2 и 4): описание каждого инструмента для модели, реализация самой функции-инструмента, и логика диспетчера, связывающая решение модели с реальным выполнением. Разница в том, что теперь это не учебный пример (калькулятор, курс валют), а инструменты, специфичные для РЕАЛЬНОГО назначения твоего финального агента.",
        "example": "Если на месяце 6 ты тренировался на calculate() и get_exchange_rate(), теперь для финансового агента это могут быть add_expense(amount, category, date) и get_spending_summary(period) — инструменты, спроектированные именно под твою задачу из недели 1."
      },
      {
        "heading": "Реализуй и протестируй инструменты ПО ОТДЕЛЬНОСТИ, прежде чем подключать к модели",
        "text": "Важный практический урок, который снижает количество путаницы при отладке: прежде чем интегрировать инструмент с моделью через function calling, убедись, что сама функция работает правильно в изоляции — вызови её прямо в коде с тестовыми параметрами, без участия модели вообще. Если функция уже работает надёжно сама по себе, при интеграции с моделью единственный источник потенциальных проблем — это логика выбора инструмента и передачи параметров, а не внутренняя логика самой функции. Это ровно тот же принцип разделения ответственности, что применялся при построении модульной структуры в месяце 3.",
        "example": "Перед тем как позволить модели вызывать add_expense() через function calling, вызови add_expense(1500, 'продукты', '2026-03-15') напрямую в коде и убедись, что трата правильно сохраняется в файл — только после этого подключай её к агенту."
      },
      {
        "heading": "Тестирование на РЕАЛИСТИЧНЫХ сценариях, а не искусственных примерах",
        "text": "На этой неделе тестирование должно быть основано на 5 пользовательских сценариях (user stories), написанных в ТЗ недели 1 — это не абстрактные тестовые случаи, а реалистичные формулировки, которые реальный пользователь действительно мог бы написать агенту. Важно тестировать как сценарии, прямо соответствующие ожидаемому использованию инструмента, так и сценарии, где требуется выбрать ПРАВИЛЬНЫЙ инструмент из нескольких доступных, и случаи, где инструмент вообще не нужен (агент должен ответить напрямую).",
        "example": "Реалистичный тест: пользователь пишет не формальным языком 'add_expense amount=1500', а естественно 'Сегодня потратил полторы тысячи на еду' — агент должен сам понять из этой формулировки, что нужно вызвать add_expense с суммой 1500 и категорией продукты/еда."
      },
      {
        "heading": "Естественный язык пользователя vs строгие параметры функции",
        "text": "Одна из главных практических сложностей этой недели — разрыв между тем, как ЕСТЕСТВЕННО формулирует запрос реальный пользователь, и тем, какие ТОЧНЫЕ параметры ожидает функция-инструмент. Модель должна интерпретировать естественный язык и правильно извлечь нужные параметры (сумму, категорию, дату) даже если пользователь не называет их явно в ожидаемом формате. Если тестирование показывает, что модель систематически неправильно извлекает параметры из определённых формулировок, решение обычно не в изменении кода функции, а в улучшении описания инструмента и его параметров (например, явно указать ожидаемый формат даты, или дать примеры категорий трат).",
        "example": "Если пользователь пишет 'потратил немного на кофе утром' без точной суммы, хороший агент должен либо уточнить сумму явным вопросом, либо (если описание инструмента это предусматривает) корректно обработать неопределённость, а не выдумать произвольное число."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Реализуй и протестируй каждый инструмент изолированно",
        "instruction": "Для каждого из 2-3 инструментов из ТЗ недели 1: попроси ИИ реализовать функцию, затем вызови её напрямую в коде с тестовыми параметрами, без участия модели, и убедись в корректности работы.",
        "prompt": "Напиши функцию [имя инструмента из твоего ТЗ]([параметры]), реализующую [описание из ТЗ]. Используй подход сохранения/загрузки данных из месяца 3 и обработку ошибок по аналогии с предыдущими уроками.",
        "expected": "Каждый инструмент работает корректно при прямом вызове с тестовыми данными, до какой-либо интеграции с моделью."
      },
      {
        "step": 2,
        "title": "Интегрируй первый инструмент с моделью через function calling",
        "instruction": "Используя архитектуру диспетчера из месяца 6 (неделя 2 и 4), подключи первый инструмент к агенту, с точным и конкретным описанием его назначения и параметров.",
        "prompt": "Вот функция [имя инструмента]: [код функции]. Опиши этот инструмент для модели в формате, требуемом [Claude/OpenAI API], с максимально конкретным описанием того, когда его следует вызывать и в каком формате ожидаются параметры. Подключи его к диспетчеру моего базового агента.",
        "expected": "Агент с одним работающим инструментом, интегрированным через function calling."
      },
      {
        "step": 3,
        "title": "Протестируй первый инструмент на реалистичном сценарии",
        "instruction": "Используй один из 5 пользовательских сценариев из ТЗ недели 1, сформулированный естественным языком, а не техническим.",
        "prompt": "python final_agent.py\n# Пример реалистичного запроса из твоего сценария 1",
        "expected": "Агент корректно интерпретирует естественный запрос, вызывает нужный инструмент с правильно извлечёнными параметрами."
      },
      {
        "step": 4,
        "title": "Повтори интеграцию и тестирование для оставшихся инструментов",
        "instruction": "Проделай шаги 2-3 для второго (и если есть, третьего) инструмента по отдельности, прежде чем тестировать их совместную работу.",
        "prompt": null,
        "expected": "Все 2-3 инструмента по отдельности корректно интегрированы и протестированы на соответствующих реалистичных сценариях."
      },
      {
        "step": 5,
        "title": "Протестируй сценарий выбора правильного инструмента среди нескольких",
        "instruction": "Задай агенту запрос, который явно требует использования только ОДНОГО конкретного инструмента из нескольких доступных, и убедись, что модель не путает их между собой.",
        "prompt": "python final_agent.py\n# Запрос, явно требующий один конкретный инструмент, не остальные",
        "expected": "Агент корректно выбирает именно нужный инструмент из нескольких доступных, не вызывая остальные без необходимости."
      },
      {
        "step": 6,
        "title": "Протестируй многошаговый сценарий, если применимо по ТЗ",
        "instruction": "Если по твоему архитектурному ТЗ есть сценарий, требующий последовательного использования двух инструментов (аналогично паттерну ReAct из месяца 6, неделя 4) — протестируй его отдельно.",
        "prompt": "python final_agent.py\n# Многошаговый реалистичный запрос из твоего ТЗ",
        "expected": "Агент корректно выполняет последовательность из нескольких шагов для решения одной комплексной задачи."
      },
      {
        "step": 7,
        "title": "Протестируй все оставшиеся user stories из ТЗ недели 1",
        "instruction": "Пройди по всем 5 пользовательским сценариям из архитектурного ТЗ, фиксируя результат каждого (прошёл/не прошёл, с комментарием).",
        "prompt": null,
        "expected": "Таблица из 5 строк с результатами тестирования всех заранее спроектированных пользовательских сценариев."
      },
      {
        "step": 8,
        "title": "Улучши описания инструментов там, где были найдены проблемы",
        "instruction": "Если в каком-то из тестов модель неправильно извлекла параметры или выбрала неверный инструмент, уточни описание соответствующего инструмента и повторно протестируй именно этот сценарий.",
        "prompt": "Улучши описание инструмента [название], сделав более явным формат ожидаемых параметров [укажи конкретную проблему, найденную при тестировании].",
        "expected": "Исправленное и повторно протестированное поведение агента для ранее проблемного сценария."
      }
    ],
    "test": [
      {
        "q": "Почему рекомендуется тестировать каждую функцию-инструмент изолированно, прежде чем подключать её к модели через function calling?",
        "options": [
          "Это не имеет смысла, достаточно сразу тестировать через модель",
          "Если функция работает надёжно сама по себе, то при интеграции с моделью единственный источник проблем — логика выбора инструмента, а не внутренняя логика функции, что облегчает отладку",
          "Изолированное тестирование функций технически невозможно",
          "Это требуется только для сложных инструментов с более чем 3 параметрами"
        ],
        "correct": 1,
        "explain": "Разделение проверки на 'работает ли функция сама по себе' и 'правильно ли модель её выбирает и вызывает' позволяет точно локализовать источник проблемы при отладке, вместо гадания между двумя возможными причинами одновременно."
      },
      {
        "q": "Почему тестирование на этой неделе должно использовать реалистичные формулировки пользователя, а не технические примеры с явными параметрами?",
        "options": [
          "Реалистичные формулировки не важны, технические примеры достаточны для проверки",
          "Потому что реальный пользователь будет формулировать запросы естественным языком, и агент должен уметь извлекать нужные параметры именно из такой естественной речи",
          "Технические формулировки работают быстрее для модели",
          "Реалистичные сценарии нужны только для демонстрации, а не для реального тестирования"
        ],
        "correct": 1,
        "explain": "Реальная ценность агента проверяется именно способностью интерпретировать естественные, не идеально структурированные запросы пользователя — это и есть ключевая сложность, которую нужно тестировать на этом этапе."
      },
      {
        "q": "Что из перечисленного — правильный способ исправить ситуацию, когда модель систематически неправильно извлекает параметры инструмента из определённых формулировок пользователя?",
        "options": [
          "Переписать логику самой функции-инструмента полностью",
          "Улучшить описание инструмента и его параметров, сделав более явным ожидаемый формат, вместо изменения кода функции",
          "Проблему невозможно исправить без полной переработки архитектуры",
          "Увеличить температуру генерации модели"
        ],
        "correct": 1,
        "explain": "Если сама функция работает корректно (проверено изолированным тестированием), а проблема в неправильном извлечении параметров моделью, решение обычно лежит в улучшении описания инструмента, а не в изменении его внутренней логики."
      },
      {
        "q": "Зачем специально тестировать сценарий, где агент должен выбрать ПРАВИЛЬНЫЙ инструмент среди нескольких доступных?",
        "options": [
          "Это не нужно, если каждый инструмент по отдельности уже протестирован",
          "Чтобы убедиться, что модель не путает похожие инструменты между собой и корректно сопоставляет запрос именно с нужным инструментом, а не вызывает все подряд",
          "Такой тест невозможно провести технически",
          "Этот тест нужен только при наличии более 10 инструментов"
        ],
        "correct": 1,
        "explain": "Отдельное тестирование изолированной работы каждого инструмента не гарантирует, что модель правильно выберет нужный именно среди нескольких доступных одновременно — это отдельный аспект, требующий специальной проверки."
      },
      {
        "q": "Какую роль играют 5 пользовательских сценариев (user stories), написанных на неделе 1, в тестировании этой недели?",
        "options": [
          "Они больше не нужны после составления архитектурного ТЗ",
          "Они используются как основа для системного тестирования реализованного агента — проверка каждого сценария на реально работающей системе",
          "User stories нужны только для документации, а не для тестирования",
          "Они заменяют необходимость в изолированном тестировании инструментов"
        ],
        "correct": 1,
        "explain": "Пользовательские сценарии, заранее спроектированные в архитектурном ТЗ, становятся конкретным и проверяемым планом тестирования уже реализованной функциональности агента на этой неделе."
      }
    ],
    "glossary": [
      {
        "term": "Изолированное тестирование функции",
        "def": "Проверка работы функции-инструмента путём прямого вызова с тестовыми параметрами в коде, без участия модели и механизма function calling."
      },
      {
        "term": "Экстракция параметров",
        "def": "Процесс, при котором модель извлекает нужные значения параметров инструмента из естественно сформулированного запроса пользователя."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Инструмент (функция) → Описание для модели → Диспетчер вызова\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Инструмент</text><text x=\"115.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">(функция)</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"100.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Описание для</text><text x=\"320.0\" y=\"118.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">модели</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Диспетчер вызова</text></svg>"
  },
  {
    "id": "m7w4",
    "month": 7,
    "week": 4,
    "title": "Обработка ошибок и отладка цепочек рассуждений",
    "duration": "4–5 часов",
    "goal": "Найти и устранить проблемы в выборе инструментов и обработке ошибок агента через целенаправленное тестирование граничных и провокационных запросов.",
    "theory": [
      {
        "heading": "Отладка агента — это отладка решений, а не только кода",
        "text": "В предыдущих месяцах отладка почти всегда означала поиск технической ошибки (traceback) или логической проблемы в детерминированном коде (месяц 3, неделя 4). У агентов добавляется новый тип проблемы: модель может принять НЕПРАВИЛЬНОЕ РЕШЕНИЕ, даже если весь код технически работает без единой ошибки — выбрать неверный инструмент, неправильно интерпретировать параметры, или дать финальный ответ без достаточных оснований. Этот тип проблемы сложнее диагностировать, потому что программа 'не падает' — она просто ведёт себя не так, как ожидалось, и обнаружить это можно только через целенаправленное тестирование и анализ лога рассуждений (из месяца 6, неделя 4).",
        "example": "Traceback явно укажет на строку кода, где произошла ошибка. Но если агент решил не вызывать нужный инструмент, хотя должен был, — программа отработает 'успешно' с точки зрения кода, но результат будет неверным, и для диагностики нужно анализировать именно решение модели, а не искать синтаксическую ошибку."
      },
      {
        "heading": "Виды граничных и провокационных запросов для тестирования агента",
        "text": "Чтобы найти слабые места агента, тестирование должно включать не только 'нормальные' запросы (месяц 7, неделя 3), но и специально сложные случаи. Неоднозначные запросы — где неясно, какой инструмент (если вообще какой-то) нужно вызвать. Запросы с отсутствующими данными — где пользователь не указал нужный параметр явно (например, не назвал сумму траты). Провокационные запросы — попытки заставить агента выйти за рамки своего назначения или дать неподобающий ответ. Запросы с конфликтующей информацией — где новое сообщение противоречит ранее сохранённому факту в памяти, и важно проверить, как агент это разрешает.",
        "example": "Для финансового агента: неоднозначный запрос — 'как у меня дела с деньгами?' (неясно, нужна ли сводка трат или что-то другое); с отсутствующими данными — 'я потратил денег на еду' (без указания суммы); провокационный — попытка попросить агента дать финансовый совет, выходящий за рамки его заявленных ограничений в системном промпте."
      },
      {
        "heading": "Обработка ошибок инструментов: что если инструмент 'ломается' или возвращает пустоту",
        "text": "Помимо проблем с решениями модели, важно предусмотреть технические сбои самих инструментов: файл данных повреждён (как в месяце 3), внешний API недоступен (как в месяце 4), или запрошенные данные просто отсутствуют (например, запрос сводки трат за период, в котором не было ни одной записи). Хорошо спроектированный агент должен не просто технически не падать в этих ситуациях, а дать модели достаточно информации об ошибке, чтобы она могла сформулировать понятный, человечный ответ пользователю вместо технического сообщения об ошибке или, что хуже, выдуманного правдоподобного, но неверного результата.",
        "example": "Если get_spending_summary() вызывается для периода без единой сохранённой траты, функция должна вернуть явный сигнал 'нет данных за этот период', а не пустой список без объяснения — чтобы модель могла ответить человечно: 'За этот период у меня нет сохранённых трат, возможно, вы ещё не добавляли записи'."
      },
      {
        "heading": "Журнал отладки: системная документация найденных проблем",
        "text": "Профессиональная практика при отладке сложной системы — не исправлять проблемы 'по памяти', а вести структурированный журнал: конкретный сценарий, который выявил проблему → гипотеза о причине (часто подтверждаемая через анализ лога рассуждений) → примененное исправление → результат повторного теста. Это не просто формальность — такой журнал помогает увидеть системные паттерны (например, если несколько разных проблем решаются похожим способом — улучшением описания инструментов — это сигнал, что описания в целом нуждаются в более тщательной проработке), и может стать частью документации финального продукта.",
        "example": "Запись в журнале: 'Сценарий: пользователь написал траты без суммы → Гипотеза: инструмент add_expense требует обязательный параметр amount, модель пытается угадать число → Исправление: добавлено явное правило в системный промпт — если сумма не указана, агент должен переспросить, а не угадывать → Результат повторного теста: агент теперь корректно задаёт уточняющий вопрос'."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Составь 5 сложных/граничных тестовых запросов",
        "instruction": "На основе теории составь 5 запросов для своего агента: минимум один неоднозначный, один с отсутствующими данными, один провокационный, и один с потенциально конфликтующей информацией относительно сохранённой памяти.",
        "prompt": "Вот 5 сложных тестовых запросов для моего агента [назначение]: [вставь список]. Проверь, покрывают ли они категории: неоднозначный запрос, запрос без нужных данных, провокационный запрос, конфликт с памятью. Какой категории не хватает и какой запрос можно добавить?",
        "expected": "Письменный список из 5 продуманных сложных тестовых сценариев, специфичных для назначения твоего агента."
      },
      {
        "step": 2,
        "title": "Прогони первый сложный сценарий и изучи лог рассуждений",
        "instruction": "Запусти агента с первым сложным запросом, внимательно отслеживая промежуточные шаги рассуждения и действия (если лог включён, как в месяце 6).",
        "prompt": "python final_agent.py\n# Первый сложный сценарий из твоего списка",
        "expected": "Либо агент справляется корректно, либо выявляется конкретная проблема в выборе инструмента или интерпретации запроса, видимая в логе рассуждений."
      },
      {
        "step": 3,
        "title": "Если найдена проблема — сформулируй гипотезу причины",
        "instruction": "На основе лога рассуждений (или отсутствия ожидаемого поведения) сформулируй письменную гипотезу: почему, по-твоему, агент повёл себя неправильно.",
        "prompt": null,
        "expected": "Письменная гипотеза о причине проблемы, сформулированная до обращения к ИИ за решением (по аналогии с циклом отладки из месяца 1)."
      },
      {
        "step": 4,
        "title": "Попроси ИИ помочь с исправлением на основе гипотезы",
        "instruction": "Отправь описание сценария, своей гипотезы, и попроси проверить гипотезу и предложить исправление.",
        "prompt": "При запросе '[вставь сложный сценарий]' мой агент сделал [опиши, что реально произошло]. Моя гипотеза: [твоя гипотеза]. Проверь, верна ли эта гипотеза, и предложи исправление — это может быть изменение системного промпта, улучшение описания инструмента, или добавление явной обработки этого случая в код.",
        "expected": "Подтверждение или уточнение гипотезы от ИИ, вместе с конкретным предложением исправления."
      },
      {
        "step": 5,
        "title": "Примени исправление и повторно протестируй именно этот сценарий",
        "instruction": "Внеси предложенное исправление и прогони ТОТ ЖЕ запрос снова, чтобы подтвердить, что проблема реально устранена.",
        "prompt": "python final_agent.py\n# Тот же сложный сценарий после исправления",
        "expected": "Агент теперь обрабатывает ранее проблемный сценарий корректно."
      },
      {
        "step": 6,
        "title": "Повтори цикл диагностики для оставшихся 4 сложных сценариев",
        "instruction": "Проделай шаги 2-5 для оставшихся сценариев из списка, фиксируя каждый найденный баг и его исправление в журнале отладки.",
        "prompt": null,
        "expected": "Журнал отладки минимум с 3 записями (сценарий → гипотеза → исправление → результат), охватывающий найденные и устранённые проблемы."
      },
      {
        "step": 7,
        "title": "Протестируй обработку технического сбоя инструмента искусственно",
        "instruction": "По аналогии с месяцем 3-4, искусственно вызови сбой инструмента (например, временно переименуй файл данных или укажи неверный путь) и проверь, что агент даёт понятный ответ, а не падает технически или выдумывает результат.",
        "prompt": null,
        "expected": "Агент корректно сообщает об отсутствии данных или технической проблеме, не выдумывая правдоподобный, но неверный ответ."
      },
      {
        "step": 8,
        "title": "Собери журнал отладки в финальный документ",
        "instruction": "Оформи все найденные и исправленные проблемы в документ журнала отладки с минимум 3 полными записями — это станет частью документации финального проекта в месяце 8.",
        "prompt": "Вот мои заметки по отладке агента: [вставь заметки]. Оформи их в журнал отладки, где у каждой записи есть: сценарий, гипотеза причины, исправление, результат повторного теста. Ничего не добавляй от себя — если данных не хватает, отметь это.",
        "expected": "Готовый документ журнала отладки, демонстрирующий системный процесс поиска и устранения проблем агента."
      }
    ],
    "test": [
      {
        "q": "Чем отладка 'неправильного решения' агента отличается от отладки обычной технической ошибки (traceback)?",
        "options": [
          "Это полностью одинаковые по характеру проблемы",
          "Неправильное решение модели не вызывает технического сбоя программы — код работает 'успешно', но результат не соответствует ожиданиям, что сложнее диагностировать без анализа лога рассуждений",
          "Неправильные решения модели всегда вызывают traceback",
          "Отладка решений модели невозможна в принципе"
        ],
        "correct": 1,
        "explain": "В отличие от технической ошибки, которая явно прерывает выполнение программы, неправильное решение модели (например, выбор неверного инструмента) не вызывает сбоя кода — проблема обнаруживается только через анализ результата и лога промежуточных рассуждений."
      },
      {
        "q": "Что из перечисленного — пример провокационного тестового запроса для агента?",
        "options": [
          "Обычный запрос, прямо соответствующий назначению агента",
          "Попытка заставить агента выйти за рамки заявленного назначения или дать неподобающий ответ, нарушающий ограничения системного промпта",
          "Запрос с чётко указанными всеми необходимыми параметрами",
          "Технический вопрос о коде самого агента"
        ],
        "correct": 1,
        "explain": "Провокационные запросы специально проверяют устойчивость агента к попыткам выйти за рамки его назначения или нарушить заданные в системном промпте ограничения поведения."
      },
      {
        "q": "Что должен сделать хорошо спроектированный агент, если запрошенные данные отсутствуют (например, сводка за период без единой записи)?",
        "options": [
          "Выдумать правдоподобный, но неверный результат",
          "Получить явный сигнал об отсутствии данных от инструмента и сформулировать понятный человечный ответ, объясняющий ситуацию пользователю",
          "Завершить программу с технической ошибкой",
          "Игнорировать запрос без какого-либо ответа"
        ],
        "correct": 1,
        "explain": "Корректная обработка отсутствия данных предполагает явный сигнал от инструмента, который модель использует для формулирования честного, понятного ответа, вместо выдумывания результата или технического сбоя."
      },
      {
        "q": "Какова структура записи в журнале отладки, рекомендованная в этом уроке?",
        "options": [
          "Просто список исправленных файлов без деталей",
          "Конкретный сценарий, выявивший проблему → гипотеза о причине → примененное исправление → результат повторного теста",
          "Только финальный код без описания процесса",
          "Список всех возможных проблем без привязки к конкретным тестам"
        ],
        "correct": 1,
        "explain": "Структурированная запись журнала отладки (сценарий → гипотеза → исправление → результат) позволяет системно документировать процесс диагностики и решения проблем, а не просто фиксировать финальный результат."
      },
      {
        "q": "Почему важно формулировать собственную гипотезу о причине проблемы ДО обращения к ИИ за решением, согласно практике урока?",
        "options": [
          "Это не имеет значения, можно сразу просить ИИ решить проблему без гипотезы",
          "Формулирование собственной гипотезы тренирует навык диагностики и позволяет сравнить своё понимание с объяснением ИИ, углубляя понимание системы",
          "ИИ не может работать без предварительной гипотезы пользователя",
          "Гипотеза всегда должна быть неверной для эффективного обучения"
        ],
        "correct": 1,
        "explain": "Это прямое применение принципа из цикла отладки месяца 1: собственная гипотеза, сформулированная заранее, помогает развивать навык самостоятельной диагностики и даёт возможность сравнить своё понимание с объяснением ИИ."
      }
    ],
    "glossary": [
      {
        "term": "Неправильное решение агента",
        "def": "Ситуация, при которой модель выбирает неверный инструмент или неправильно интерпретирует запрос, не вызывая технического сбоя программы, но давая неверный результат."
      },
      {
        "term": "Журнал отладки",
        "def": "Структурированный документ, фиксирующий найденные проблемы системы в формате: сценарий → гипотеза причины → исправление → результат повторного теста."
      },
      {
        "term": "Провокационный тестовый запрос",
        "def": "Запрос, специально сформулированный для проверки устойчивости агента к попыткам выйти за рамки его назначения или заданных ограничений поведения."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Сложный сценарий → Лог рассуждений → Исправление\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Сложный сценарий</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Лог рассуждений</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Исправление</text></svg>"
  },
  {
    "id": "m8w1",
    "month": 8,
    "week": 1,
    "title": "Тестирование агента на реальных кейсах",
    "duration": "4–5 часов",
    "goal": "Провести системное тестирование готового агента, включая слепое тестирование сторонним человеком, и собрать структурированную обратную связь.",
    "theory": [
      {
        "heading": "Почему собственное тестирование создателя недостаточно",
        "text": "К этому моменту ты уже многократно тестировал своего агента (месяц 7), но у тестирования создателем есть фундаментальное ограничение: ты знаешь, как 'правильно' формулировать запросы, потому что сам проектировал систему, и неосознанно избегаешь формулировок, которые могли бы её сломать. Реальные пользователи не знают внутреннего устройства агента и будут задавать вопросы так, как им удобно и привычно — часто совершенно не так, как ты ожидал при проектировании. Слепое тестирование сторонним человеком — единственный способ увидеть продукт глазами реального пользователя, без искажения, вызванного твоим собственным знанием системы.",
        "example": "Ты, зная, что агент принимает траты в формате 'сумма + категория', будешь интуитивно формулировать запросы именно так. Посторонний человек может написать 'я сегодня проел много денег' — совершенно иначе, и это реалистичная проверка устойчивости твоей системы к естественной речи."
      },
      {
        "heading": "Как правильно организовать слепое тестирование",
        "text": "Эффективное слепое тестирование требует минимальной подготовки тестировщика: дай человеку только общее представление о назначении агента (одно предложение, без деталей реализации) и попроси использовать его для решения реальной или вымышленной, но правдоподобной задачи, соответствующей назначению. Важно НЕ стоять рядом и не подсказывать во время теста — именно моменты, когда тестировщик 'застревает' или получает неожиданный результат, являются самой ценной информацией. После теста — попроси его описать своими словами, что было неясно, неудобно или неожиданно.",
        "example": "Правильная инструкция тестировщику: 'Вот агент, который помогает фиксировать расходы и отвечать на вопросы о бюджете — попробуй пообщаться с ним, как будто действительно хочешь записать свои сегодняшние траты и узнать, сколько потратил на эту неделю'. Неправильно: детально объяснять, как агент работает внутри, перед тестом."
      },
      {
        "heading": "Фиксация обратной связи: конкретные моменты, а не общие впечатления",
        "text": "Сразу после наблюдения или беседы с тестировщиком важно записать КОНКРЕТНЫЕ моменты, а не общее впечатление вроде 'в целом неплохо'. Это означает фиксацию точного запроса, который вызвал затруднение, точного момента, где пользователь не понял, что делать дальше, или точного ответа агента, который показался неуместным или неточным. Общие впечатления сложно превратить в конкретные доработки — конкретные зафиксированные моменты превращаются в точные промпты для улучшения, как ты уже делал в цикле отладки месяца 1 и месяца 7.",
        "example": "Плохая запись обратной связи: 'тестировщику не очень понравилось'. Хорошая запись: 'Тестировщик написал Потратил немного на кофе, агент сразу записал трату с суммой 0, вместо того чтобы переспросить точную сумму — это застало тестировщика врасплох, он не понял, что произошло'."
      },
      {
        "heading": "Критерии реалистичного набора из 10 тестовых сценариев",
        "text": "Прежде чем привлекать сторонних тестировщиков, полезно составить собственный список из 10 реалистичных сценариев, которые покрывают: основной 'счастливый путь' использования (несколько вариантов), граничные случаи, уже протестированные в месяце 7, и совершенно новые формулировки, которые ты раньше не рассматривал. Такой список служит двум целям: он структурирует твоё собственное финальное тестирование перед привлечением людей, и он может быть предложен тестировщикам как отправная точка (без прямого показа формулировок, а как общее описание задач, которые стоит попробовать решить).",
        "example": "Список из 10 сценариев может включать: 3 варианта основного использования разными словами, 3 граничных случая с неполной информацией, 2 провокационных запроса, и 2 сценария, использующих долгосрочную память после перезапуска."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Составь список из 10 реалистичных тестовых сценариев",
        "instruction": "На основе всего пройденного курса (user stories из месяца 7, граничные случаи, провокационные запросы) составь финальный список из 10 конкретных сценариев для тестирования готового агента.",
        "prompt": "Вот мой список из 10 тестовых сценариев для агента [назначение]: [вставь список]. Проверь, есть ли в нём: основное использование разными словами, граничные случаи с неполными данными, провокационные запросы, сценарии с памятью после перезапуска. Что пропущено?",
        "expected": "Письменный список из 10 сценариев, охватывающих разные аспекты функциональности агента."
      },
      {
        "step": 2,
        "title": "Пройди весь список самостоятельно и зафиксируй результаты",
        "instruction": "Прогони все 10 сценариев через своего агента, записывая результат каждого (прошёл корректно / есть проблема, с описанием).",
        "prompt": "python final_agent.py",
        "expected": "Полная таблица результатов собственного тестирования по всем 10 сценариям, выявляющая любые оставшиеся проблемы перед привлечением сторонних людей."
      },
      {
        "step": 3,
        "title": "Исправь явные проблемы, найденные на этапе самостоятельного тестирования",
        "instruction": "Если самостоятельное тестирование выявило явные проблемы, исправь их по циклу отладки месяца 7 ДО привлечения сторонних тестировщиков — не трать их время на уже известные тебе баги.",
        "prompt": null,
        "expected": "Обновлённая версия агента без явных известных проблем, готовая для внешнего тестирования."
      },
      {
        "step": 4,
        "title": "Найди 1-2 человек для слепого тестирования",
        "instruction": "Попроси друга, коллегу или родственника протестировать агента. Дай только общее описание назначения (одно предложение), без деталей реализации.",
        "prompt": null,
        "expected": "Минимум 1 реальный человек, готовый протестировать твоего агента без твоих подсказок во время процесса."
      },
      {
        "step": 5,
        "title": "Проведи слепое тестирование, наблюдая, но не подсказывая",
        "instruction": "Дай тестировщику поработать с агентом самостоятельно. Наблюдай молча (если это происходит у тебя на глазах) и записывай моменты затруднений, не вмешиваясь, кроме явных технических сбоев программы.",
        "prompt": null,
        "expected": "Записанные конкретные моменты наблюдения: где тестировщик застрял, что его удивило, какие формулировки он использовал."
      },
      {
        "step": 6,
        "title": "Возьми структурированное интервью после теста",
        "instruction": "После завершения теста задай тестировщику конкретные вопросы: что было неясно, какой ответ агента показался неожиданным или неуместным, чего, на его взгляд, не хватает.",
        "prompt": "Примерные вопросы для интервью: 'Был ли момент, когда ты не понимал, что писать агенту дальше?', 'Какой ответ агента показался тебе неожиданным или неточным?', 'Если бы ты пользовался этим регулярно, чего бы тебе не хватало?'",
        "expected": "Записанные конкретные ответы тестировщика на структурированные вопросы, дополняющие твои собственные наблюдения."
      },
      {
        "step": 7,
        "title": "Повтори слепое тестирование со вторым человеком, если возможно",
        "instruction": "Если есть возможность — повтори тестирование с другим человеком, чтобы увидеть, повторяются ли найденные проблемы или появляются новые.",
        "prompt": null,
        "expected": "Второй набор наблюдений, который либо подтверждает найденные ранее проблемы, либо выявляет новые."
      },
      {
        "step": 8,
        "title": "Составь итоговый список приоритизированных проблем",
        "instruction": "Объедини все найденные проблемы в единый список, отсортированный по важности — это будет основой для доработки на следующей неделе.",
        "prompt": "Вот все проблемы, найденные при тестировании моего агента: [вставь список с пометкой, сколько тестировщиков столкнулись с каждой]. Помоги отсортировать их по двум критериям: насколько сильно проблема мешает основной задаче агента и как часто она встречается. Выдели 3 самые важные и объясни выбор.",
        "expected": "Приоритизированный список проблем, готовый к использованию в уроке следующей недели."
      }
    ],
    "test": [
      {
        "q": "Почему собственное тестирование создателя агента недостаточно для полноценной оценки продукта?",
        "options": [
          "Собственное тестирование вообще не нужно проводить",
          "Создатель неосознанно избегает формулировок, которые могли бы сломать систему, потому что знает её внутреннее устройство, в отличие от реального пользователя",
          "Собственное тестирование всегда даёт более точные результаты, чем слепое",
          "Разницы между собственным и слепым тестированием не существует"
        ],
        "correct": 1,
        "explain": "Знание внутреннего устройства системы неосознанно влияет на то, как создатель формулирует тестовые запросы — он интуитивно избегает проблемных формулировок, которые реальный пользователь использует естественным образом."
      },
      {
        "q": "Что из перечисленного — правильный подход к организации слепого тестирования?",
        "options": [
          "Детально объяснить тестировщику внутреннее устройство агента перед началом теста",
          "Дать общее представление о назначении агента (одно предложение) и не подсказывать во время процесса тестирования",
          "Стоять рядом и направлять каждый шаг тестировщика",
          "Попросить тестировщика использовать только заранее подготовленные тобой формулировки"
        ],
        "correct": 1,
        "explain": "Минимальная подготовка тестировщика и отсутствие подсказок во время процесса позволяют увидеть продукт глазами реального пользователя, без искажения результатов твоим вмешательством."
      },
      {
        "q": "Почему важно фиксировать конкретные моменты обратной связи, а не общие впечатления типа 'в целом неплохо'?",
        "options": [
          "Общие впечатления достаточны для улучшения продукта",
          "Конкретные зафиксированные моменты можно превратить в точные промпты для доработки, в отличие от расплывчатых общих впечатлений",
          "Фиксация обратной связи не имеет практического значения",
          "Общие впечатления дают больше информации, чем конкретные детали"
        ],
        "correct": 1,
        "explain": "Конкретные детали напрямую превращаются в точные ТЗ для исправления, в то время как общие впечатления сложно использовать практически."
      },
      {
        "q": "Что следует сделать с явными проблемами, найденными на этапе собственного тестирования, ДО привлечения сторонних тестировщиков?",
        "options": [
          "Оставить их для обнаружения сторонними тестировщиками",
          "Исправить известные проблемы заранее, чтобы не тратить ограниченное время сторонних тестировщиков на уже известные баги",
          "Эти проблемы не имеют значения для процесса тестирования",
          "Удалить соответствующую функциональность полностью"
        ],
        "correct": 1,
        "explain": "Исправление уже известных проблем перед привлечением людей позволяет использовать их время для обнаружения НОВЫХ проблем, которые ты сам не заметил."
      },
      {
        "q": "Какова цель составления итогового приоритизированного списка проблем в конце этой недели?",
        "options": [
          "Этот список не имеет практического применения в дальнейшем",
          "Он становится основой для целенаправленной доработки агента на следующей неделе курса",
          "Список нужен только для отчётности, без влияния на дальнейшую работу",
          "Приоритизация проблем не имеет значения, все проблемы равнозначны"
        ],
        "correct": 1,
        "explain": "Приоритизированный список найденных проблем — прямая подготовка к следующему уроку курса, где именно самые критичные из этих проблем будут целенаправленно исправлены."
      }
    ],
    "glossary": [
      {
        "term": "Слепое тестирование",
        "def": "Тестирование продукта сторонним человеком без подсказок и детального объяснения внутреннего устройства, позволяющее увидеть продукт глазами реального пользователя."
      },
      {
        "term": "Структурированная обратная связь",
        "def": "Конкретные, детальные наблюдения о проблемах использования продукта, зафиксированные с точными формулировками, в отличие от общих расплывчатых впечатлений."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Свой тест → Слепой тест → Список проблем\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Свой тест</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Слепой тест</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Список проблем</text></svg>"
  },
  {
    "id": "m8w2",
    "month": 8,
    "week": 2,
    "title": "Улучшение промптов и логики по итогам тестов",
    "duration": "4–5 часов",
    "goal": "Устранить 3 самые критичные проблемы, найденные при тестировании, через точечную доработку промптов и логики, с повторной проверкой результата.",
    "theory": [
      {
        "heading": "Приоритизация: почему нельзя (и не нужно) исправлять всё одновременно",
        "text": "После недели тестирования у тебя, скорее всего, накопился список из множества найденных проблем разной степени значимости. Попытка исправить абсолютно всё одновременно — распространённая ошибка, которая приводит к путанице: сложно понять, какое именно изменение привело к улучшению или, наоборот, случайно что-то сломало, если правится сразу много всего. Профессиональный подход — явно приоритизировать проблемы по критичности и частоте, и работать с ограниченным числом самых важных проблем за один цикл улучшений.",
        "example": "Критическая проблема: агент систематически неправильно сохраняет сумму трат при неформальных формулировках. Менее критическая: агент не поддерживает один редкий формат даты, указанный только одним тестировщиком."
      },
      {
        "heading": "Доработка через улучшение промптов — предпочтительный первый шаг",
        "text": "Большинство проблем поведения агента эффективнее решаются через уточнение системного промпта или описания инструмента, а не через переписывание логики кода. Это быстрее, безопаснее и легче протестировать итеративно. К изменению логики кода стоит переходить только тогда, когда проблема явно техническая.",
        "example": "Если агент систематически не уточняет сумму при неполных запросах — решение не в изменении кода, а в добавлении правила в системный промпт: 'Если сумма не указана, всегда переспрашивай'."
      },
      {
        "heading": "Повторное тестирование ТЕХ ЖЕ сценариев для подтверждения улучшения",
        "text": "После каждого исправления нужно повторно протестировать именно тот сценарий, который выявил проблему, а не просто 'в целом попробовать что-то новое'. Без этого шага невозможно с уверенностью сказать, что проблема реально устранена.",
        "example": "Если проблема была выявлена запросом 'Потратил немного на кофе' без суммы, после исправления нужно прогнать РОВНО ЭТОТ запрос снова."
      },
      {
        "heading": "Риск регрессии: проверка, что исправление не сломало что-то другое",
        "text": "Когда ты меняешь системный промпт для решения одной проблемы, существует риск, что это повлияет на другую, ранее работавшую функциональность — это называется регрессией. После изменения полезно прогнать несколько ранее успешных тестов.",
        "example": "Добавление правила 'всегда переспрашивай сумму' может сделать агента излишне придирчивым даже когда сумма указана ясно, но в непривычном формате."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Приоритизируй список проблем из недели 1",
        "instruction": "Возьми итоговый список проблем из прошлой недели и ранжируй их по критичности и частоте. Выбери 3 самые приоритетные.",
        "prompt": null,
        "expected": "Явно выбранные 3 самые критичные проблемы с обоснованием."
      },
      {
        "step": 2,
        "title": "Для проблемы №1: определи, это проблема промпта или логики кода",
        "instruction": "Проанализируй первую приоритетную проблему и реши, лучше ли её решать через промпт или код.",
        "prompt": "Вот проблема, найденная при тестировании: [описание и сценарий]. Это проблема в интерпретации модели, которую лучше решить через промпт, или техническая проблема кода? Предложи исправление.",
        "expected": "Чёткое решение о типе исправления с конкретным предложением от ИИ."
      },
      {
        "step": 3,
        "title": "Внеси исправление для проблемы №1",
        "instruction": "Примени предложенное исправление.",
        "prompt": null,
        "expected": "Обновлённая версия агента с внесённым точечным исправлением."
      },
      {
        "step": 4,
        "title": "Повторно протестируй ТОЧНО ТОТ ЖЕ сценарий",
        "instruction": "Используй именно ту формулировку, которая изначально привела к обнаружению проблемы.",
        "prompt": "python final_agent.py\n# Тот же проблемный запрос",
        "expected": "Подтверждённое улучшение: проблема больше не воспроизводится."
      },
      {
        "step": 5,
        "title": "Проверь на регрессию: прогони 3-4 ранее успешных теста",
        "instruction": "Убедись, что изменение не сломало ранее работавшую функциональность.",
        "prompt": "python final_agent.py\n# 3-4 ранее успешных сценария",
        "expected": "Подтверждение, что ранее работавшая функциональность осталась корректной."
      },
      {
        "step": 6,
        "title": "Повтори цикл для проблем №2 и №3",
        "instruction": "Проделай тот же процесс для оставшихся двух приоритетных проблем.",
        "prompt": null,
        "expected": "Все 3 проблемы исправлены, с подтверждённым результатом и проверкой на регрессию."
      },
      {
        "step": 7,
        "title": "Документируй весь цикл улучшений",
        "instruction": "Запиши для каждой проблемы: исходную проблему, тип исправления, изменение, результат теста, результат проверки на регрессию.",
        "prompt": null,
        "expected": "Структурированная документация цикла улучшений."
      }
    ],
    "test": [
      {
        "q": "Почему не рекомендуется пытаться исправить абсолютно все найденные проблемы одновременно?",
        "options": [
          "Потому что это требует слишком много времени",
          "Исправление множества проблем одновременно затрудняет понимание, какое изменение привело к улучшению или что-то сломало",
          "Исправление нескольких проблем одновременно технически невозможно",
          "Все проблемы нужно исправлять одновременно для эффективности"
        ],
        "correct": 1,
        "explain": "При одновременном исправлении множества проблем теряется ясность причинно-следственной связи между изменением и его эффектом."
      },
      {
        "q": "Какой тип исправления обычно предпочтительнее для проблем, связанных с интерпретацией запроса моделью?",
        "options": [
          "Полное переписывание всей архитектуры агента",
          "Уточнение системного промпта или описания инструмента, а не изменение логики кода",
          "Увеличение температуры генерации до максимума",
          "Удаление проблемного инструмента полностью"
        ],
        "correct": 1,
        "explain": "Для проблем, связанных с решениями модели, уточнение текста промпта — более быстрый и безопасный способ исправления."
      },
      {
        "q": "Почему важно повторно протестировать именно ТОТ ЖЕ сценарий, который выявил проблему?",
        "options": [
          "Это не имеет значения",
          "Только точное повторение исходного сценария даёт доказательное подтверждение, что проблема устранена",
          "Повторное тестирование технически невозможно",
          "Достаточно субъективного ощущения улучшения"
        ],
        "correct": 1,
        "explain": "Без точного повторения исходного сценария невозможно доказательно подтвердить устранение конкретной проблемы."
      },
      {
        "q": "Что такое 'регрессия' в контексте доработки агента?",
        "options": [
          "Процесс, при котором агент становится умнее с каждым исправлением",
          "Ситуация, когда исправление одной проблемы случайно нарушает другую, ранее корректно работавшую функциональность",
          "Техническая ошибка, не связанная с изменениями",
          "Специальный параметр настройки температуры"
        ],
        "correct": 1,
        "explain": "Регрессия — ситуация, при которой изменение непреднамеренно ломает ранее работавшую функциональность."
      },
      {
        "q": "Какие два критерия используются для приоритизации найденных проблем?",
        "options": [
          "Только субъективное предпочтение разработчика",
          "Критичность влияния на продукт и частота возникновения проблемы",
          "Только сложность технической реализации",
          "Только алфавитный порядок названий"
        ],
        "correct": 1,
        "explain": "Приоритизация на основе критичности и частоты позволяет сфокусироваться на действительно важных исправлениях."
      }
    ],
    "glossary": [
      {
        "term": "Приоритизация проблем",
        "def": "Процесс ранжирования найденных проблем по критичности и частоте для определения порядка их исправления."
      },
      {
        "term": "Регрессия",
        "def": "Ситуация, при которой исправление одной проблемы непреднамеренно нарушает ранее корректно работавшую функциональность системы."
      },
      {
        "term": "Целевое повторное тестирование",
        "def": "Проверка точно того же сценария, который выявил проблему, после внесения исправления."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Найти проблему → Поправить промпт → Повторить тест\"><line x1=\"361.95486002770815\" y1=\"83.5\" x2=\"405.9097200554163\" y2=\"131.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"319.0\" y1=\"130.0\" x2=\"234.0902799445837\" y2=\"131.00000000000003\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><line x1=\"276.04513997229185\" y1=\"83.50000000000001\" x2=\"320.0\" y2=\"38.0\" stroke=\"#9aa3b5\" stroke-width=\"2\" stroke-dasharray=\"4 4\"/><rect x=\"245.0\" y=\"16.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"320.0\" y=\"43.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Найти проблему</text><rect x=\"330.9097200554163\" y=\"109.0\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"405.9097200554163\" y=\"136.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Поправить промпт</text><rect x=\"159.0902799445837\" y=\"109.00000000000003\" width=\"150\" height=\"44\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"234.0902799445837\" y=\"136.00000000000003\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#e8ebf2\">Повторить тест</text></svg>"
  },
  {
    "id": "m8w3",
    "month": 8,
    "week": 3,
    "title": "Деплой агента и документация проекта",
    "duration": "4–5 часов",
    "goal": "Развернуть агента в доступном виде и написать полноценную техническую документацию проекта с честным описанием ограничений.",
    "theory": [
      {
        "heading": "Деплой агента: от консольного скрипта к доступному продукту",
        "text": "Деплой агента может быть организован по-разному. Если агент — консольное приложение, минимальный уровень деплоя — обеспечить запуск одной командой после клонирования репозитория. Более продвинутый уровень — обернуть агента в веб-интерфейс (как в месяце 4) и опубликовать по ссылке.",
        "example": "Минимальный деплой: клонировать репозиторий, pip install -r requirements.txt, создать .env по инструкции, запустить 'python agent.py'. Продвинутый: тот же агент в Streamlit, доступный по постоянной ссылке."
      },
      {
        "heading": "Файл requirements.txt: фиксация используемых библиотек",
        "text": "Чтобы кто-либо мог легко воссоздать рабочее окружение, важно зафиксировать список всех используемых библиотек в requirements.txt. Это позволяет установить все зависимости одной командой.",
        "example": "Типичный requirements.txt: anthropic, python-dotenv, streamlit, requests — каждая библиотека на отдельной строке."
      },
      {
        "heading": "Структура полноценной технической документации (README)",
        "text": "README финального проекта должен включать: описание назначения, архитектуру, инструкцию по установке и запуску, примеры использования (реальные диалоги), и раздел известных ограничений.",
        "example": "Раздел примеров: 'Пользователь: Потратил 1500 на продукты → Агент: Записал трату 1500 руб. в категории Продукты'."
      },
      {
        "heading": "Честность в описании ограничений — признак профессионализма",
        "text": "Явное и честное описание того, что агент НЕ умеет делать — признак зрелого профессионального подхода. Пользователь, знающий об ограничениях заранее, не будет разочарован на практике.",
        "example": "Честный раздел: 'Данные хранятся в локальном JSON без поддержки нескольких пользователей одновременно. Инструмент курса валют зависит от доступности внешнего API.'"
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Создай файл requirements.txt",
        "instruction": "Зафиксируй все используемые внешние библиотеки проекта в отдельном файле.",
        "prompt": "pip freeze > requirements.txt",
        "expected": "Файл requirements.txt со списком всех нужных библиотек."
      },
      {
        "step": 2,
        "title": "Протестируй установку с нуля в чистом окружении",
        "instruction": "Создай новое виртуальное окружение и попробуй установить все зависимости только через requirements.txt.",
        "prompt": "python -m venv test_env\npip install -r requirements.txt",
        "expected": "Успешная установка всех зависимостей без ошибок в чистом окружении."
      },
      {
        "step": 3,
        "title": "Выбери уровень деплоя, соответствующий твоей цели",
        "instruction": "Реши: достаточно ли удобного локального запуска, или стоит дополнительно опубликовать веб-версию по ссылке.",
        "prompt": null,
        "expected": "Явное решение об уровне деплоя с обоснованием."
      },
      {
        "step": 4,
        "title": "Если выбран веб-деплой — реализуй и опубликуй",
        "instruction": "По аналогии с месяцем 4, оберни агента в Streamlit и задеплой на Streamlit Community Cloud.",
        "prompt": null,
        "expected": "Рабочая публичная ссылка на агента, если выбран этот уровень.",
        "image": {
          "svg": "<svg viewBox=\"0 0 640 360\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Публикация на Streamlit Community Cloud\"><rect x=\"0\" y=\"0\" width=\"640\" height=\"360\" rx=\"14\" fill=\"#0f1115\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"340\" rx=\"10\" fill=\"#ffffff\" stroke=\"#374151\" stroke-width=\"1\" /><rect x=\"10\" y=\"10\" width=\"620\" height=\"30\" rx=\"10\" fill=\"#e5e7eb\" /><rect x=\"10\" y=\"30\" width=\"620\" height=\"10\" rx=\"0\" fill=\"#e5e7eb\" /><circle cx=\"28\" cy=\"25\" r=\"5\" fill=\"#ef4444\"/><circle cx=\"44\" cy=\"25\" r=\"5\" fill=\"#f59e0b\"/><circle cx=\"60\" cy=\"25\" r=\"5\" fill=\"#22c55e\"/><rect x=\"90\" y=\"16\" width=\"360\" height=\"18\" rx=\"9\" fill=\"#ffffff\" /><text x=\"102\" y=\"29\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"11\" fill=\"#374151\" font-weight=\"400\" text-anchor=\"start\">share.streamlit.io</text><rect x=\"10\" y=\"80\" width=\"620\" height=\"270\" rx=\"0\" fill=\"#f9fafb\" /><rect x=\"10\" y=\"40\" width=\"620\" height=\"40\" rx=\"0\" fill=\"#ffffff\" stroke=\"#e5e7eb\" stroke-width=\"1\" /><text x=\"30\" y=\"66\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"14\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">Streamlit · My apps</text><rect x=\"508\" y=\"50\" width=\"104\" height=\"26\" rx=\"6\" fill=\"#ff4b4b\" /><text x=\"560.0\" y=\"67.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Create app</text><rect x=\"505\" y=\"47\" width=\"110\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"616\" cy=\"48\" r=\"11\" fill=\"#f59e0b\"/><text x=\"616\" y=\"52.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">1</text><text x=\"30\" y=\"112\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"16\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"start\">Deploy an app</text><text x=\"30\" y=\"142\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"start\">Repository</text><rect x=\"30\" y=\"150\" width=\"280\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"40\" y=\"168\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">your-name/my-project</text><rect x=\"27\" y=\"147\" width=\"286\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"308\" cy=\"148\" r=\"11\" fill=\"#f59e0b\"/><text x=\"308\" y=\"152.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">2</text><text x=\"30\" y=\"196\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"start\">Branch</text><rect x=\"30\" y=\"204\" width=\"280\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"40\" y=\"222\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">main</text><text x=\"330\" y=\"142\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#374151\" font-weight=\"600\" text-anchor=\"start\">Main file path</text><rect x=\"330\" y=\"150\" width=\"270\" height=\"26\" rx=\"6\" fill=\"#ffffff\" stroke=\"#d1d5db\" stroke-width=\"1\" /><text x=\"340\" y=\"168\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#111827\" font-weight=\"400\" text-anchor=\"start\">app.py</text><rect x=\"327\" y=\"147\" width=\"276\" height=\"32\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"598\" cy=\"148\" r=\"11\" fill=\"#f59e0b\"/><text x=\"598\" y=\"152.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">3</text><text x=\"330\" y=\"222\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">Advanced settings — здесь же</text><text x=\"330\" y=\"238\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"12\" fill=\"#6b7280\" font-weight=\"400\" text-anchor=\"start\">можно сразу добавить Secrets</text><rect x=\"30\" y=\"270\" width=\"140\" height=\"36\" rx=\"6\" fill=\"#ff4b4b\" /><text x=\"100.0\" y=\"292.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#ffffff\" font-weight=\"600\" text-anchor=\"middle\">Deploy</text><rect x=\"27\" y=\"267\" width=\"146\" height=\"42\" rx=\"6\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"3\" /><circle cx=\"168\" cy=\"268\" r=\"11\" fill=\"#f59e0b\"/><text x=\"168\" y=\"272.5\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" fill=\"#111827\" font-weight=\"700\" text-anchor=\"middle\">4</text></svg>",
          "caption": "Публикация та же, что в месяце 4: Create app (1) → репозиторий (2) → файл (3) → Deploy (4). Это схема: в вашей версии программы вид может немного отличаться."
        }
      },
      {
        "step": 5,
        "title": "Собери минимум 3 реальных примера диалогов для документации",
        "instruction": "Запусти агента и запиши 3 реальных успешных диалога, включая пример использования долгосрочной памяти.",
        "prompt": null,
        "expected": "3 реальных скопированных диалога, готовых для README."
      },
      {
        "step": 6,
        "title": "Попроси ИИ помочь составить полную структуру README",
        "instruction": "Отправь промпт со всей информацией о проекте.",
        "prompt": "Напиши полный README.md для моего финального проекта — ИИ-агента с назначением: [описание]. Включи разделы: описание, архитектура, инструкция установки, примеры использования, известные ограничения.",
        "expected": "Развёрнутый черновик README.md."
      },
      {
        "step": 7,
        "title": "Напиши честный раздел ограничений самостоятельно",
        "instruction": "На основе опыта тестирования напиши честный список известных ограничений проекта.",
        "prompt": null,
        "expected": "Конкретный раздел 'Известные ограничения' с минимум 3-4 пунктами."
      },
      {
        "step": 8,
        "title": "Финализируй README и опубликуй весь проект на GitHub",
        "instruction": "Собери всё в итоговый документ, сделай финальный коммит и запушь.",
        "prompt": "git add .\ngit commit -m \"Финальная документация и деплой финального проекта курса\"\ngit push",
        "expected": "Полностью задокументированный репозиторий финального проекта на GitHub."
      }
    ],
    "test": [
      {
        "q": "Зачем нужен файл requirements.txt для финального проекта?",
        "options": [
          "Это чисто формальное требование без практической пользы",
          "Он позволяет легко воссоздать рабочее окружение, устанавливая все нужные библиотеки одной командой",
          "requirements.txt заменяет необходимость писать код функций",
          "Этот файл нужен только для деплоя на Streamlit Community Cloud"
        ],
        "correct": 1,
        "explain": "requirements.txt фиксирует список всех внешних библиотек, что позволяет легко воспроизвести рабочее окружение."
      },
      {
        "q": "Какой уровень деплоя считается минимально приемлемым для финального проекта?",
        "options": [
          "Полное отсутствие какой-либо документации по запуску",
          "Возможность запустить проект одной простой командой после клонирования, без сложной ручной настройки",
          "Обязательное развёртывание на платном облачном сервере",
          "Деплой не требуется вообще"
        ],
        "correct": 1,
        "explain": "Минимальный уровень деплоя подразумевает удобный запуск по понятной инструкции."
      },
      {
        "q": "Почему честное описание ограничений считается признаком профессионализма?",
        "options": [
          "Это требование формальных стандартов",
          "Это предотвращает разочарование пользователя и демонстрирует зрелое понимание проекта",
          "Без описания ограничений проект не будет работать технически",
          "Честное описание ограничений не имеет значения"
        ],
        "correct": 1,
        "explain": "Явное указание ограничений помогает пользователю понимать границы применимости продукта."
      },
      {
        "q": "Что должно входить в раздел 'Примеры использования' README финального проекта?",
        "options": [
          "Абстрактное описание возможностей без примеров",
          "Реальные скопированные диалоги, демонстрирующие ключевую функциональность",
          "Список всех переменных в коде",
          "Полный текст всех промптов разработки"
        ],
        "correct": 1,
        "explain": "Конкретные реальные примеры намного убедительнее демонстрируют функциональность, чем абстрактное описание."
      },
      {
        "q": "Зачем тестировать установку requirements.txt в чистом виртуальном окружении?",
        "options": [
          "Это не имеет практического смысла",
          "Чтобы убедиться, что список зависимостей полный и проект можно воспроизвести на другом компьютере",
          "Чистое окружение ускоряет работу агента",
          "Это требуется только для веб-приложений"
        ],
        "correct": 1,
        "explain": "Тестирование в чистом окружении надёжно проверяет полноту и корректность requirements.txt."
      }
    ],
    "glossary": [
      {
        "term": "requirements.txt",
        "def": "Файл со списком всех внешних библиотек, необходимых для запуска проекта."
      },
      {
        "term": "Виртуальное окружение (venv)",
        "def": "Изолированное окружение Python, используемое для тестирования установки зависимостей проекта в чистых условиях."
      },
      {
        "term": "Раздел известных ограничений",
        "def": "Часть документации, честно описывающая, что продукт не умеет делать."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: requirements.txt → README → Публикация\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">requirements.txt</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">README</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Публикация</text></svg>"
  },
  {
    "id": "m8w4",
    "month": 8,
    "week": 4,
    "title": "Итоговая презентация и упаковка курса как продукта",
    "duration": "4–5 часов",
    "goal": "Подготовить структурированную презентацию финального проекта и провести рефлексию по всему курсу с черновым планом его упаковки как образовательного продукта.",
    "theory": [
      {
        "heading": "Зачем нужна презентация, если проект уже готов и задокументирован",
        "text": "README — документация для того, кто хочет запустить проект самостоятельно. Презентация — другой жанр: быстро и убедительно передать суть и ценность проекта человеку, который видит его впервые.",
        "example": "README отвечает на вопрос 'как это установить'. Презентация отвечает на вопрос 'почему это должно быть интересно'."
      },
      {
        "heading": "Структура презентации: проблема → решение → архитектура → демо → ограничения",
        "text": "Проблема — какую трудность решает агент. Решение — как агент решает её на высоком уровне. Архитектура — короткий обзор технических решений. Демо — живая демонстрация. Ограничения — честное признание нереализованного.",
        "example": "Проблема — 'людям сложно следить за мелкими тратами'. Решение — 'агент, которому можно написать о трате обычным языком'. Демо — живой диалог. Ограничения — 'работает только локально для одного пользователя'."
      },
      {
        "heading": "Рефлексия — это инструмент консолидации обучения",
        "text": "Структурированная рефлексия превращает разрозненный опыт в чёткое применимое знание. Это особенно важно для превращения личного опыта в качественный образовательный продукт для других.",
        "example": "Если месяц 6 дался сложнее остальных из-за обилия абстрактных концепций — это ценный инсайт для будущей версии курса."
      },
      {
        "heading": "От личного прохождения к продукту: что меняется при упаковке курса",
        "text": "Личное прохождение подтверждает, что путь работает для тебя. Упаковка в продукт требует учёта разного темпа учеников, более явного объяснения интуитивно понятных для автора мест, и механизма обратной связи от реальных учеников.",
        "example": "То, что для тебя очевидно после месяца 5, может быть камнем преткновения для нового ученика."
      }
    ],
    "practice": [
      {
        "step": 1,
        "title": "Структурируй презентацию по заданной схеме",
        "instruction": "Напиши тезисы по разделам: Проблема, Решение, Архитектура, Демо, Ограничения.",
        "prompt": null,
        "expected": "Структурированный план презентации на 5 коротких разделов."
      },
      {
        "step": 2,
        "title": "Подготовь сценарий живого демо",
        "instruction": "Выбери 2-3 конкретных диалога, наиболее ярко демонстрирующих ценность агента, включая пример использования памяти.",
        "prompt": null,
        "expected": "Подготовленный сценарий демонстрации с конкретными запросами."
      },
      {
        "step": 3,
        "title": "Попроси ИИ помочь отшлифовать текст презентации",
        "instruction": "Отправь черновик тезисов и попроси обратную связь на ясность.",
        "prompt": "Вот тезисы моей презентации: [вставь черновик]. Проверь, достаточно ли ясно объяснена проблема и ценность, нет ли жаргона, предложи улучшения.",
        "expected": "Улучшенная версия тезисов презентации."
      },
      {
        "step": 4,
        "title": "Проведи презентацию",
        "instruction": "Произнеси всю презентацию целиком, включая живое демо, с хронометражем 5-10 минут.",
        "prompt": null,
        "expected": "Проведённая презентация, зафиксированная по времени."
      },
      {
        "step": 5,
        "title": "Напиши рефлексию: 3 главных инсайта за весь курс",
        "instruction": "Запиши 3 конкретных инсайта, изменивших твоё понимание программирования или работы с ИИ.",
        "prompt": null,
        "expected": "3 письменных инсайта, сформулированных конкретно."
      },
      {
        "step": 6,
        "title": "Напиши рефлексию: 3 момента, которые дались сложнее всего",
        "instruction": "Честно определи 3 конкретных момента курса, которые потребовали больше всего усилий.",
        "prompt": null,
        "expected": "3 конкретных честных пункта о сложностях."
      },
      {
        "step": 7,
        "title": "Составь черновой план упаковки курса как продукта",
        "instruction": "На основе рефлексии набросай план того, что стоит доработать при упаковке курса для других учеников.",
        "prompt": "На основе этой рефлексии: [инсайты и сложности], предложи черновой план из 5-7 пунктов доработки курса как продукта.",
        "expected": "Черновой план из нескольких конкретных пунктов."
      },
      {
        "step": 8,
        "title": "Собери финальный архив всего, что было сделано за курс",
        "instruction": "Убедись, что все проекты курса организованы и доступны — твоё итоговое портфолио.",
        "prompt": null,
        "expected": "Организованное портфолио из всех проектов курса."
      }
    ],
    "test": [
      {
        "q": "Чем презентация проекта отличается от README-документации?",
        "options": [
          "Это полностью одинаковые по назначению документы",
          "README объясняет, как технически установить проект, презентация передаёт суть и ценность широкой аудитории",
          "Презентация заменяет необходимость писать README",
          "Презентация нужна только для коммерческих проектов"
        ],
        "correct": 1,
        "explain": "README и презентация решают разные задачи: техническая инструкция против убедительной передачи ценности."
      },
      {
        "q": "Какая структура презентации технического проекта рекомендуется в этом уроке?",
        "options": [
          "Только техническое описание кода",
          "Проблема → Решение → Архитектура → Демо → Ограничения",
          "Список использованных библиотек",
          "Финансовые показатели проекта"
        ],
        "correct": 1,
        "explain": "Эта структура логически проводит слушателя от проблемы к решению и честной оценке ограничений."
      },
      {
        "q": "Почему структурированная рефлексия по итогам курса считается важным шагом?",
        "options": [
          "Рефлексия не имеет практической ценности",
          "Она превращает опыт в чёткое знание и важна для упаковки курса как продукта для других",
          "Рефлексия нужна только для оценки преподавателем",
          "Рефлексия заменяет презентацию"
        ],
        "correct": 1,
        "explain": "Честная рефлексия помогает улучшить понимание материала и является основой качественной упаковки курса."
      },
      {
        "q": "В чём ключевая разница между личным прохождением курса и готовностью курса как продукта?",
        "options": [
          "Разницы не существует",
          "Упаковка в продукт требует учёта разного темпа учеников и объяснения интуитивно понятных для автора мест",
          "Личное прохождение всегда менее ценно",
          "Продукт требует только изменения оформления"
        ],
        "correct": 1,
        "explain": "Упаковка в продукт требует дополнительных шагов, выходящих за рамки одного личного прохождения."
      },
      {
        "q": "Зачем выбирать для демо диалоги, включающие пример использования памяти агента?",
        "options": [
          "Память не важна для демонстрации",
          "Чтобы показать одну из ключевых возможностей, отличающих агента от простого чат-бота",
          "Демонстрация памяти технически невозможна",
          "Это требование не связано с содержанием курса"
        ],
        "correct": 1,
        "explain": "Демонстрация памяти наглядно показывает ключевую возможность, изученную в месяце 6 и реализованную в финальном проекте."
      }
    ],
    "glossary": [
      {
        "term": "Структура презентации проекта",
        "def": "Проблема → Решение → Архитектура → Демо → Ограничения — стандартная схема рассказа о техническом проекте."
      },
      {
        "term": "Структурированная рефлексия",
        "def": "Осмысленный анализ пройденного пути обучения с выделением конкретных инсайтов и трудностей."
      }
    ],
    "cover": "<svg viewBox=\"0 0 640 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Схема урока: Проблема → Демо → Ограничения\"><rect x=\"30.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#6ee7b7\" stroke-width=\"2\"/><text x=\"115.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Проблема</text><line x1=\"203.5\" y1=\"105\" x2=\"223.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"223.5,100 231.5,105 223.5,110\" fill=\"#9aa3b5\"/><rect x=\"235.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#60a5fa\" stroke-width=\"2\"/><text x=\"320.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Демо</text><line x1=\"408.5\" y1=\"105\" x2=\"428.5\" y2=\"105\" stroke=\"#9aa3b5\" stroke-width=\"2\"/><polygon points=\"428.5,100 436.5,105 428.5,110\" fill=\"#9aa3b5\"/><rect x=\"440.5\" y=\"70\" width=\"169\" height=\"70\" rx=\"12\" fill=\"#161b25\" stroke=\"#a78bfa\" stroke-width=\"2\"/><text x=\"525.0\" y=\"109.0\" text-anchor=\"middle\" font-family=\"Segoe UI, Arial, sans-serif\" font-size=\"13\" font-weight=\"600\" fill=\"#e8ebf2\">Ограничения</text></svg>"
  }
];

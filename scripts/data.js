export const DATA = [
    // первая глава
    [
        // подглава 1.1
        [
            // 1.1.1
            {
                title: "Общие сведения о системе счисления",
                text_html: `Системы счисления могут быть:
                позиционными (двоичная, десятичная, восьмеричная);
                непозиционными (римская, древнеегипетская, вавилонская).
                В позиционных системах счисления значение числа зависит от положения цифры в записи числа. Например, числа 45 и 54 имеют разное значение, т. к. положение цифр в этом числе разное. В первом случае 4 — это количество десятков, а во втором — единиц.
                Преимуществом позиционных систем счисления является лёгкость выполнения арифметических операций, единые правила записи чисел.
                В непозиционных системах счисления значение числа не зависит от положения цифр в числе. Например, в римской системе счисления приняты следующие обозначения: I — 1, V — 5, X — 10, L — 50, C — 100, D — 500, M —1000. Независимо от того, на каком месте в числе стоит цифра, она своё значение не поменяет.
                Существует несколько правил образования чисел в римской системе счисления.
                Значение числа складывается из суммы его цифр. Например: XXI=10+10+1=21, LXII=50+10+2=62.
                Слева от большей цифры может стоять меньшая, тогда она будет вычитаться из большей. Например: IX=10−1=9.                
                Левая цифра может быть меньше правой только на 1 порядок. Например, перед V может стоять только I, перед L и C — только X, перед D и M — только C.
                Непозиционные системы счисления практически не используются, потому что числа слишком объёмные, с ними тяжело проводить арифметические действия. Использование римской системы счисления можно встретить в учебниках по истории или литературе.`,
                linkToVideo: 'https://www.youtube.com/embed/WXLuKZ105NA',
                tasks: [
                    ["К какой системе счисления относится десятичная система - к позиционной или непозиционной?", ['К непозиционной?', 'К позиционной']],
                    ["Запишите в десятичной системе счисления римское число XXXIV", [""]]
                    ["Запишите в десятичной системе счисления римское число XCVIII",[""]]
                    ['Запишите в римской системе счисления десятичное число 19',["CX","XIX","XXIIVX","CCCLVI","C","XXI","D","LXII","LXIIII","XVII"]]
                    ["Имеются позиционные записи десятичных чисел:",["7 * 102 + 5 * 101 + 4 * 100 + 7 * 10-1 +3 * 10-2."]]
                ],
                answer: ["2", "34", "118", "2", "664"]
            }, 
            // 1.1.2
            {
                title:"Двоичная сисетма счисления",
                text_html:`Любое число позиционной системы счисления можно представить в свёрнутой форме и развёрнутой. Со свёрнутой формой ты встречаешься постоянно, но совсем не задумываешься, как получаешь развёрнутую форму числа, умножая каждую цифру числа на её вес. Рассмотрим подробнее развёрнутую форму числа.
                Развёрнутая форма числа — это сумма произведений цифр числа на основание этой системы счисления с соответствующей степенью.
                Представим десятичное число 123,45 в развёрнутом виде.
                1) Для этого необходимо пронумеровать разряды. Разряд единиц — 0, десятков — 1 и т. д.
                122130,4−15−2.
                2) Теперь будем умножать каждую цифру числа на основание системы счисления в степени, соответствующей разряду.
                Свёрнутая форма числа
                Развёрнутая форма числа
                123,45	
                1×102+2×101+3×100+4×10−1+5×10−2
                Правило перевода любого числа позиционной системы счисления в десятичную.
                1. Сделать развёрнутую запись числа.
                2. Вычислить получившуюся сумму.
                Правило перевода из десятичной системы счисления в любую позиционную систему счисления.
                1. Разделить число на основание новой системы счисления нацело. Остаток записать.
                2. Получившееся частное опять разделить на основание новой системы счисления. Остаток записать.
                3. Повторять пункт 2 до тех пор, пока в частном не получится 0.
                4. Собрать число из последовательности остатков, записанных в обратном порядке.
                Последнее правило удобнее реализовать, выполняя деление в столбик.
                Двоичная система счисления
                Основание: 2.
                Алфавит: 0, 1.
                Переведём двоичное число 11010,112 в десятичную систему счисления. 
                1. Запишем развёрнутую форму числа.
                1413021100,1−11−22=1×24+1×23+0×22+1×21+0×20+1×2−1+1×2−2. 
                2. Вычислим.
                1×24+1×23+0×22+1×21+0×20+1×2−1+1×2−2==16+8+0+2+0+0,5+0,25=26,75.
                3. Запишем ответ. Нижний индекс обозначает основание системы счисления, в которой записано число.
                11010,112=26,7510.
                Переведём число 124 в двоичную систему счисления.
                1. Разделим число 124 на 2 — основание новой системы счисления.
                2. Далее будем делить получившиеся частные на 2 до тех пор, пока не получится ноль.
                Скриншот 03-09-2021 00_25_49.jpg
                Рис. 1. Двоичная система счисления
                3. Соберём остатки от деления в обратном порядке и получим двоичное число.
                12410=11111002.`,
                linkToVideo:'https://www.youtube.com/watch?v=NIPeCMjpi3Q&t=1s',
                tasks:[
                    ["Основанием двоичной системы счисления является число:",['1','2','8','10']]
                    ["Перевод целой части числа из десятичной системы счисления в двоичную осуществляется:",['путем последовательного деления частных с получением остатков в виде 0 и 1','путем последовательно умножения основания двоичной системы счисления на каждую цифру двоичного числа','по таблице']]
                    ["Для перевода двоичного числа в десятичную систему разряды нумеруют:",['Начиная с нуля слева направо','Начиная с нуля справа налево','Начиная с единицы слева направо','Начиная с единицы справа налево']]
                    ["После числа 111 в двоичном ряду идет число:",['11','100','112','1000']]
                    ["Десятичное число 21 в двоичной системе счисления равно:",['10011','10101','11010','11101']]
                ],
                answer:["2","путем последовательного деления частных с получением остатков в виде 0 и 1","Начиная с нуля справа налево","1000","10101"] 
            }
        ],
        // подглава 1.2
        [],
        // подглава 1.3
        []
    ],
    // вторая глава
    [],
    // третья глава
     []
]
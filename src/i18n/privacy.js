const p = (text) => ({ type: 'p', text });
const ul = (items) => ({ type: 'ul', items });

export const privacyPolicy = {
  pl: {
    heading: 'Polityka prywatności',
    title: 'Polityka prywatności',
    intro: 'Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.',
    sections: [
      {
        heading: '1. Informacje ogólne',
        blocks: [
          p('Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: polid.pl'),
          p('Operatorem serwisu oraz Administratorem danych osobowych jest: POLID s.c. Jarosławiec 194, 22-424 Sitno'),
          p('Adres kontaktowy poczty elektronicznej operatora: biuro@polid.pl'),
          p('Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.'),
          p('Serwis wykorzystuje dane osobowe w następujących celach:'),
          ul(['Obsługa zapytań przez formularz', 'Realizacja zamówionych usług']),
          p('Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:'),
          ul([
            'Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.',
            'Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).',
          ]),
        ],
      },
      {
        heading: '2. Wybrane metody ochrony danych stosowane przez Operatora',
        blocks: [
          p('Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.'),
          p('W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.'),
          p('Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.'),
        ],
      },
      {
        heading: '3. Hosting',
        blocks: [
          p('Serwis jest hostowany (technicznie utrzymywany) na serwera operatora: dhosting'),
        ],
      },
      {
        heading: '4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych',
        blocks: [
          p('W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:'),
          ul([
            'osoby upoważnione przez nas, pracownicy i współpracownicy, którzy muszą mieć dostęp do danych osobowych w celu wykonywania swoich obowiązków,',
            'firma hostingowa,',
            'firmy obsługująca mailingi,',
            'firmy obsługująca komunikaty SMS,',
            'firmy, z którymi Administrator współpracuje w zakresie marketingu własnego,',
            'kurierzy,',
            'ubezpieczyciele,',
            'kancelarie prawne i windykatorzy,',
            'banki,',
            'operatorzy płatności,',
            'organy publiczne.',
          ]),
          p('Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.'),
          p('Przysługuje Ci prawo żądania od Administratora:'),
          ul(['dostępu do danych osobowych Ciebie dotyczących,', 'ich sprostowania,', 'usunięcia,', 'ograniczenia przetwarzania,', 'oraz przenoszenia danych.']),
          p('Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.'),
          p('Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.'),
          p('Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.'),
          p('W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.'),
          p('Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.'),
        ],
      },
      {
        heading: '5. Informacje w formularzach',
        blocks: [
          p('Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.'),
          p('Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).'),
          p('Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.'),
          p('Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.'),
        ],
      },
      {
        heading: '6. Logi Administratora',
        blocks: [
          p('Informacje o zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.'),
        ],
      },
      {
        heading: '7. Istotne techniki marketingowe',
        blocks: [
          p('Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/'),
          p('Operator korzysta z piksela Facebooka. Ta technologia powoduje, że serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych, wobec których sam jest administratorem, Operator nie przekazuje od siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.'),
        ],
      },
      {
        heading: '8. Informacja o plikach cookies',
        blocks: [
          p('Serwis korzysta z plików cookies.'),
          p('Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.'),
          p('Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.'),
          p('Pliki cookies wykorzystywane są w następujących celach:'),
          ul([
            'utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;',
            'realizacji celów określonych powyżej w części „Istotne techniki marketingowe”.',
          ]),
          p('W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.'),
          p('Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.'),
          p('Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.'),
          p('Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).'),
        ],
      },
      {
        heading: '9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?',
        blocks: [
          p('Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.'),
          p('W celu zarządzania ustawieniami cookies wybierz przeglądarkę internetową, której używasz, i postępuj zgodnie z instrukcjami producenta:'),
          ul(['Edge', 'Internet Explorer', 'Chrome', 'Safari', 'Firefox', 'Opera']),
          p('Urządzenia mobilne:'),
          ul(['Android', 'Safari (iOS)', 'Windows Phone']),
        ],
      },
    ],
  },

  en: {
    heading: 'Privacy Policy',
    title: 'Privacy Policy',
    intro: 'This privacy policy describes how we process information about you, including personal data and cookies.',
    sections: [
      {
        heading: '1. General information',
        blocks: [
          p('This policy applies to the website operating at: polid.pl'),
          p('The operator of the website and the Controller of personal data is: POLID s.c., Jarosławiec 194, 22-424 Sitno'),
          p('Contact email address of the operator: biuro@polid.pl'),
          p('The Operator is the Controller of your personal data with respect to data you provide voluntarily on the website.'),
          p('The website uses personal data for the following purposes:'),
          ul(['Handling enquiries submitted through the contact form', 'Fulfilling ordered services']),
          p('The website gathers information about users and their behaviour in the following ways:'),
          ul([
            'Through data voluntarily entered in forms, which is stored in the Operator’s systems.',
            'By saving cookie files on end devices.',
          ]),
        ],
      },
      {
        heading: '2. Selected data protection methods used by the Operator',
        blocks: [
          p('Login points and areas where personal data is entered are protected at the transmission layer (SSL certificate). This means personal data and login credentials entered on the site are encrypted on the user’s device and can only be read on the destination server.'),
          p('To protect data, the Operator regularly performs backups.'),
          p('A key element of data protection is the regular update of all software used by the Operator to process personal data, in particular regular updates of software components.'),
        ],
      },
      {
        heading: '3. Hosting',
        blocks: [
          p('The website is hosted (technically maintained) on the Operator’s server provider: dhosting'),
        ],
      },
      {
        heading: '4. Your rights and additional information on the use of data',
        blocks: [
          p('In certain situations the Controller has the right to transfer your personal data to other recipients, if necessary to perform a contract concluded with you or to fulfil obligations resting on the Controller. This applies to the following groups of recipients:'),
          ul([
            'persons authorised by us, employees and collaborators who need access to personal data to perform their duties,',
            'the hosting company,',
            'companies handling mailings,',
            'companies handling SMS messages,',
            'companies the Controller cooperates with for its own marketing purposes,',
            'couriers,',
            'insurers,',
            'law firms and debt collectors,',
            'banks,',
            'payment operators,',
            'public authorities.',
          ]),
          p('Your personal data is processed by the Controller for no longer than is necessary to carry out related activities specified in separate regulations (e.g. accounting regulations). Marketing data will not be processed for longer than 3 years.'),
          p('You have the right to request from the Controller:'),
          ul(['access to your personal data,', 'rectification of it,', 'erasure,', 'restriction of processing,', 'and data portability.']),
          p('You have the right to object to the processing referred to above where personal data is processed to pursue the Controller’s legitimate interests, including profiling, except where there are valid, legally justified grounds for processing that override your interests, rights and freedoms, in particular the establishment, exercise or defence of legal claims.'),
          p('You have the right to lodge a complaint against the Controller’s actions with the President of the Personal Data Protection Office, ul. Stawki 2, 00-193 Warsaw, Poland.'),
          p('Providing personal data is voluntary, but necessary for the operation of the website.'),
          p('You may be subject to automated decision-making, including profiling, for the purposes of providing services under a concluded contract and for the Controller’s direct marketing.'),
          p('Personal data is not transferred to third countries within the meaning of data protection regulations. This means we do not send it outside the European Union.'),
        ],
      },
      {
        heading: '5. Information in forms',
        blocks: [
          p('The website collects information voluntarily provided by the user, including personal data, where it is provided.'),
          p('The website may record connection parameters (timestamp, IP address).'),
          p('In some cases the website may save information linking form data to the e-mail address of the user completing the form. In that case the user’s e-mail address appears within the URL of the page containing the form.'),
          p('Data provided in a form is processed for the purpose resulting from the function of that specific form, e.g. to handle a service request or business enquiry, register for services, etc. The context and description of each form clearly explains its purpose.'),
        ],
      },
      {
        heading: '6. Operator logs',
        blocks: [
          p('Information about user behaviour on the website may be logged. This data is used to administer the website.'),
        ],
      },
      {
        heading: '7. Key marketing techniques',
        blocks: [
          p('The Operator uses statistical traffic analysis through Google Analytics (Google Inc., based in the USA). The Operator does not transfer personal data to the provider of this service, only anonymised information. The service relies on cookies stored on the user’s end device. Users can review and edit information about their preferences gathered by the Google advertising network using this tool: https://www.google.com/ads/preferences/'),
          p('The Operator uses the Facebook pixel. This technology means the Facebook service (Facebook Inc., based in the USA) knows that a person registered with it is using the website. This is based on data for which Facebook itself is the controller; the Operator does not transfer any additional personal data to Facebook. The service relies on cookies stored on the user’s end device.'),
        ],
      },
      {
        heading: '8. Information about cookies',
        blocks: [
          p('The website uses cookies.'),
          p('Cookies are IT data, in particular text files, stored on the User’s end device and intended for use with the website’s pages. Cookies usually contain the name of the website they originate from, their storage time on the end device, and a unique number.'),
          p('The entity placing cookies on the User’s end device and accessing them is the website operator.'),
          p('Cookies are used for the following purposes:'),
          ul([
            'maintaining the User’s session on the website (after logging in), so the user does not need to re-enter their login and password on every subpage of the website;',
            'achieving the purposes described above in the "Key marketing techniques" section.',
          ]),
          p('The website uses two main types of cookies: "session" cookies and "persistent" cookies. Session cookies are temporary files stored on the User’s end device until logout, leaving the website, or closing the browser. Persistent cookies are stored on the User’s end device for the period specified in the cookie’s parameters or until deleted by the User.'),
          p('Web browsing software (a web browser) usually allows cookies to be stored on the User’s end device by default. Users of the website can change their settings in this regard. The web browser allows cookies to be deleted. It is also possible to automatically block cookies. Detailed information on this subject is available in the help section or documentation of your web browser.'),
          p('Restricting the use of cookies may affect some of the functionalities available on the website’s pages.'),
          p('Cookies placed on the User’s end device may also be used by entities cooperating with the website operator, in particular: Google (Google Inc., based in the USA), Facebook (Facebook Inc., based in the USA), Twitter (Twitter Inc., based in the USA).'),
        ],
      },
      {
        heading: '9. Managing cookies – how to give and withdraw consent in practice',
        blocks: [
          p('If the user does not want to receive cookies, they can change their browser settings. Please note that disabling cookies necessary for authentication, security, and maintaining user preferences may make it difficult, and in extreme cases impossible, to use the website.'),
          p('To manage cookie settings, choose the web browser you use and follow the manufacturer’s instructions:'),
          ul(['Edge', 'Internet Explorer', 'Chrome', 'Safari', 'Firefox', 'Opera']),
          p('Mobile devices:'),
          ul(['Android', 'Safari (iOS)', 'Windows Phone']),
        ],
      },
    ],
  },

  ru: {
    heading: 'Политика конфиденциальности',
    title: 'Политика конфиденциальности',
    intro: 'Настоящая политика конфиденциальности описывает правила обработки нами информации о вас, включая персональные данные и файлы cookie.',
    sections: [
      {
        heading: '1. Общая информация',
        blocks: [
          p('Настоящая политика касается сайта, работающего по адресу: polid.pl'),
          p('Оператором сайта и Администратором персональных данных является: POLID s.c., Jarosławiec 194, 22-424 Sitno'),
          p('Контактный адрес электронной почты оператора: biuro@polid.pl'),
          p('Оператор является Администратором ваших персональных данных в отношении данных, добровольно предоставленных на сайте.'),
          p('Сайт использует персональные данные в следующих целях:'),
          ul(['Обработка запросов через форму', 'Выполнение заказанных услуг']),
          p('Сайт собирает информацию о пользователях и их поведении следующими способами:'),
          ul([
            'Через добровольно введённые в формах данные, которые попадают в системы Оператора.',
            'Путём сохранения файлов cookie на конечных устройствах.',
          ]),
        ],
      },
      {
        heading: '2. Избранные методы защиты данных, применяемые Оператором',
        blocks: [
          p('Места входа и ввода персональных данных защищены на уровне передачи данных (SSL-сертификат). Благодаря этому персональные данные и данные для входа, введённые на сайте, шифруются на компьютере пользователя и могут быть расшифрованы только на целевом сервере.'),
          p('Для защиты данных Оператор регулярно выполняет резервное копирование.'),
          p('Важным элементом защиты данных является регулярное обновление всего программного обеспечения, используемого Оператором для обработки персональных данных.'),
        ],
      },
      {
        heading: '3. Хостинг',
        blocks: [
          p('Сайт размещён (технически обслуживается) на сервере поставщика Оператора: dhosting'),
        ],
      },
      {
        heading: '4. Ваши права и дополнительная информация об использовании данных',
        blocks: [
          p('В определённых ситуациях Администратор вправе передавать ваши персональные данные другим получателям, если это необходимо для исполнения заключённого с вами договора или выполнения обязанностей, возложенных на Администратора. Это касается следующих групп получателей:'),
          ul([
            'уполномоченные нами сотрудники и партнёры, которым необходим доступ к персональным данным для выполнения своих обязанностей,',
            'хостинг-компания,',
            'компании, обслуживающие рассылки,',
            'компании, обслуживающие SMS-сообщения,',
            'компании, с которыми Администратор сотрудничает в области собственного маркетинга,',
            'курьеры,',
            'страховщики,',
            'юридические фирмы и коллекторы,',
            'банки,',
            'платёжные операторы,',
            'государственные органы.',
          ]),
          p('Ваши персональные данные обрабатываются Администратором не дольше, чем это необходимо для выполнения связанных с ними действий, определённых отдельными нормативными актами (например, о ведении бухгалтерии). Данные для маркетинга не будут обрабатываться дольше 3 лет.'),
          p('Вы вправе требовать от Администратора:'),
          ul(['доступа к вашим персональным данным,', 'их исправления,', 'удаления,', 'ограничения обработки,', 'а также переноса данных.']),
          p('Вы имеете право на возражение против обработки ваших персональных данных для целей, вытекающих из законных интересов Администратора, включая профилирование, за исключением случаев, когда существуют важные законные основания для обработки, превалирующие над вашими интересами, правами и свободами, в частности для установления, осуществления или защиты правовых требований.'),
          p('На действия Администратора можно подать жалобу Председателю Управления по охране персональных данных, ul. Stawki 2, 00-193 Warszawa.'),
          p('Предоставление персональных данных добровольно, но необходимо для работы сайта.'),
          p('В отношении вас могут применяться действия, связанные с автоматизированным принятием решений, включая профилирование, в целях оказания услуг по договору и для прямого маркетинга Администратора.'),
          p('Персональные данные не передаются в третьи страны по смыслу законодательства о защите персональных данных. Это означает, что мы не отправляем их за пределы Европейского союза.'),
        ],
      },
      {
        heading: '5. Информация в формах',
        blocks: [
          p('Сайт собирает информацию, добровольно предоставленную пользователем, включая персональные данные, если они были предоставлены.'),
          p('Сайт может сохранять информацию о параметрах соединения (время, IP-адрес).'),
          p('В некоторых случаях сайт может сохранить информацию, помогающую связать данные формы с адресом электронной почты пользователя. В этом случае адрес электронной почты появляется внутри URL-адреса страницы с формой.'),
          p('Данные, указанные в форме, обрабатываются в целях, соответствующих функции конкретной формы, например для обработки сервисного запроса или коммерческого обращения, регистрации услуг и т.д. Контекст и описание формы всегда понятно объясняют, для чего она предназначена.'),
        ],
      },
      {
        heading: '6. Журналы Администратора',
        blocks: [
          p('Информация о поведении пользователей на сайте может регистрироваться. Эти данные используются для администрирования сайтом.'),
        ],
      },
      {
        heading: '7. Основные маркетинговые технологии',
        blocks: [
          p('Оператор использует статистический анализ трафика через Google Analytics (Google Inc., США). Оператор не передаёт провайдеру этой услуги персональные данные, а только обезличенную информацию. Сервис использует файлы cookie на конечном устройстве пользователя. Информацию о предпочтениях, собираемую рекламной сетью Google, можно просмотреть и отредактировать здесь: https://www.google.com/ads/preferences/'),
          p('Оператор использует пиксель Facebook. Благодаря этой технологии Facebook (Facebook Inc., США) узнаёт, что зарегистрированный в нём пользователь посещает сайт. При этом используются данные, для которых администратором является сам Facebook; Оператор не передаёт Facebook никаких дополнительных персональных данных. Сервис использует файлы cookie на конечном устройстве пользователя.'),
        ],
      },
      {
        heading: '8. Информация о файлах cookie',
        blocks: [
          p('Сайт использует файлы cookie.'),
          p('Файлы cookie — это IT-данные, в частности текстовые файлы, хранящиеся на конечном устройстве пользователя и предназначенные для использования сайта. Обычно они содержат название сайта-источника, время хранения на устройстве и уникальный номер.'),
          p('Субъектом, размещающим файлы cookie на конечном устройстве пользователя и получающим к ним доступ, является оператор сайта.'),
          p('Файлы cookie используются в следующих целях:'),
          ul([
            'поддержание сессии пользователя (после входа), благодаря чему не нужно повторно вводить логин и пароль на каждой странице;',
            'реализация целей, указанных выше в разделе «Основные маркетинговые технологии».',
          ]),
          p('На сайте используются два основных типа файлов cookie: «сессионные» и «постоянные». Сессионные cookie — временные файлы, хранящиеся на устройстве до выхода, ухода с сайта или закрытия браузера. Постоянные cookie хранятся на устройстве в течение времени, указанного в их параметрах, или до их удаления пользователем.'),
          p('Браузер обычно по умолчанию разрешает хранение файлов cookie. Пользователи могут изменить эти настройки. Браузер позволяет удалять файлы cookie, а также автоматически блокировать их. Подробности смотрите в справке или документации вашего браузера.'),
          p('Ограничение использования файлов cookie может повлиять на некоторые функции сайта.'),
          p('Файлы cookie на устройстве пользователя могут также использоваться партнёрами оператора сайта, в частности: Google (Google Inc., США), Facebook (Facebook Inc., США), Twitter (Twitter Inc., США).'),
        ],
      },
      {
        heading: '9. Управление файлами cookie — как на практике давать и отзывать согласие',
        blocks: [
          p('Если пользователь не хочет получать файлы cookie, он может изменить настройки браузера. Обратите внимание: отключение файлов cookie, необходимых для аутентификации, безопасности и сохранения предпочтений, может затруднить, а в крайних случаях сделать невозможным использование сайта.'),
          p('Чтобы управлять настройками cookie, выберите свой браузер и следуйте инструкциям производителя:'),
          ul(['Edge', 'Internet Explorer', 'Chrome', 'Safari', 'Firefox', 'Opera']),
          p('Мобильные устройства:'),
          ul(['Android', 'Safari (iOS)', 'Windows Phone']),
        ],
      },
    ],
  },

  uk: {
    heading: 'Політика конфіденційності',
    title: 'Політика конфіденційності',
    intro: 'Ця політика конфіденційності описує правила обробки нами інформації про вас, включно особисті дані та файли cookie.',
    sections: [
      {
        heading: '1. Загальна інформація',
        blocks: [
          p('Ця політика стосується сайту, що працює за адресою: polid.pl'),
          p('Оператором сайту та Контролером персональних даних є: POLID s.c., Jarosławiec 194, 22-424 Sitno'),
          p('Контактна адреса електронної пошти оператора: biuro@polid.pl'),
          p('Оператор є Контролером ваших персональних даних щодо даних, добровільно наданих на сайті.'),
          p('Сайт використовує особисті дані з такими цілями:'),
          ul(['Обробка запитів через форму', 'Виконання замовлених послуг']),
          p('Сайт збирає інформацію про користувачів та їхню поведінку таким чином:'),
          ul([
            'Через дані, добровільно введені в формах, які потрапляють до систем Оператора.',
            'Шляхом збереження файлів cookie на кінцевих пристроях.',
          ]),
        ],
      },
      {
        heading: '2. Обрані методи захисту даних, які застосовує Оператор',
        blocks: [
          p('Місця входу та введення особистих даних захищені на рівні передачі даних (SSL-сертифікат). Завдяки цьому особисті дані та дані для входу, введені на сайті, шифруються на компʼютері користувача та можуть бути зчитані лише на цільовому сервері.'),
          p('Для захисту даних Оператор регулярно робить резервні копії.'),
          p('Важливим елементом захисту даних є регулярне оновлення всього програмного забезпечення, яке використовує Оператор для обробки персональних даних.'),
        ],
      },
      {
        heading: '3. Гостинг',
        blocks: [
          p('Сайт розміщено (технічно обслуговується) на сервері постачальника Оператора: dhosting'),
        ],
      },
      {
        heading: '4. Ваші права та додаткова інформація про використання даних',
        blocks: [
          p('У певних ситуаціях Контролер має право передавати ваші особисті дані іншим отримувачам, якщо це необхідно для виконання укладеного з вами договору або виконання обовʼязків, покладених на Контролера. Це стосується таких груп отримувачів:'),
          ul([
            'уповноважені нами працівники та партнери, які повинні мати доступ до особистих даних для виконання своїх обовʼязків,',
            'хостинг-компанія,',
            'компанії, що обслуговують розсилки,',
            'компанії, що обслуговують SMS-повідомлення,',
            'компанії, з якими Контролер співпрацює у сфері власного маркетингу,',
            'курʼєри,',
            'страховики,',
            'юридичні фірми та колектори,',
            'банки,',
            'платіжні оператори,',
            'державні органи.',
          ]),
          p('Ваші особисті дані обробляються Контролером не довше, ніж це необхідно для виконання повʼязаних з ними дій, визначених окремими нормативними актами (наприклад, про ведення бухгалтерії). Дані для маркетингу не оброблятимуться довше 3 років.'),
          p('Ви маєте право вимагати від Контролера:'),
          ul(['доступу до ваших особистих даних,', 'їх виправлення,', 'видалення,', 'обмеження обробки,', 'а також перенесення даних.']),
          p('Ви маєте право на заперечення проти обробки ваших особистих даних для цілей, що випливають з законних інтересів Контролера, включно профілювання, окрім випадків, коли існують вагомі законні підстави для обробки, що переважають ваші інтереси, права та свободи, зокрема для встановлення, здійснення або захисту правових вимог.'),
          p('На дії Контролера можна подати скаргу до Голови Управління з питань захисту персональних даних, ul. Stawki 2, 00-193 Warszawa.'),
          p('Надання особистих даних є добровільним, але необхідним для роботи сайту.'),
          p('Щодо вас можуть здійснюватися дії, що полягають на автоматизованому прийнятті рішень, включно профілювання, з метою надання послуг за укладеним договором та для прямого маркетингу Контролера.'),
          p('Особисті дані не передаються до третіх країн у розумінні законодавства про захист персональних даних. Це означає, що ми не надсилаємо їх за межі Європейського Союзу.'),
        ],
      },
      {
        heading: '5. Інформація в формах',
        blocks: [
          p('Сайт збирає інформацію, добровільно надану користувачем, включно особисті дані, якщо вони були надані.'),
          p('Сайт може зберігати інформацію про параметри зʼєднання (час, IP-адреса).'),
          p('У деяких випадках сайт може зберігти інформацію, що допомагає повʼязати дані форми з адресою електронної пошти користувача, який заповнює форму. У такому випадку адреса електронної пошти користувача зʼявляється всередині URL-адреси сторінки з формою.'),
          p('Дані, вказані у формі, обробляються з метою, яка випливає з функції конкретної форми, наприклад для обробки сервісного запиту чи комерційного звернення, реєстрації послуг тощо. Контекст і опис форми завжди зрозуміло пояснюють, для чого вона призначена.'),
        ],
      },
      {
        heading: '6. Журнали Оператора',
        blocks: [
          p('Інформація про поведінку користувачів на сайті може реєструватися. Ці дані використовуються для адміністрування сайтом.'),
        ],
      },
      {
        heading: '7. Основні маркетингові технології',
        blocks: [
          p('Оператор використовує статистичний аналіз трафіку через Google Analytics (Google Inc., США). Оператор не передає провайдеру цієї послуги особисті дані, а лише знеособлену інформацію. Сервіс використовує файли cookie на кінцевому пристрої користувача. Щодо інформації про вподобання, зібраної рекламною мережею Google, користувач може переглянути та відредагувати її за допомогою: https://www.google.com/ads/preferences/'),
          p('Оператор використовує піксель Facebook. Ця технологія означає, що Facebook (Facebook Inc., США) дізнається, що зареєстрована в ньому особа користується сайтом. Це базується на даних, щодо яких адміністратором є сам Facebook; Оператор не передає Facebook жодних додаткових особистих даних. Сервіс використовує файли cookie на кінцевому пристрої користувача.'),
        ],
      },
      {
        heading: '8. Інформація про файли cookie',
        blocks: [
          p('Сайт використовує файли cookie.'),
          p('Файли cookie — це IT-дані, зокрема текстові файли, які зберігаються на кінцевому пристрої користувача та призначені для використання сайту. Зазвичай вони містять назву сайту-джерела, час зберігання на пристрої та унікальний номер.'),
          p('Субʼєктом, який розміщує файли cookie на кінцевому пристрої користувача та отримує до них доступ, є оператор сайту.'),
          p('Файли cookie використовуються з такими цілями:'),
          ul([
            'підтримання сесії користувача (після входу), завдяки чому не потрібно повторно вводити логін і пароль на кожній сторінці;',
            'реалізація цілей, визначених вище в розділі «Основні маркетингові технології».',
          ]),
          p('На сайті використовуються два основні типи файлів cookie: «сесійні» та «постійні». Сесійні cookie — тимчасові файли, які зберігаються на пристрої до виходу, залишення сайту або закриття браузера. Постійні cookie зберігаються на пристрої протягом часу, визначеного в їхніх параметрах, або до їх видалення користувачем.'),
          p('Браузер зазвичай за замовчуванням дозволяє зберігання файлів cookie. Користувачі можуть змінити ці налаштування. Браузер дозволяє видаляти файли cookie, а також автоматично блокувати їх. Детальніша інформація — у довідці або документації вашого браузера.'),
          p('Обмеження використання файлів cookie може вплинути на деякі функції сайту.'),
          p('Файли cookie на пристрої користувача можуть також використовуватися партнерами оператора сайту, зокрема: Google (Google Inc., США), Facebook (Facebook Inc., США), Twitter (Twitter Inc., США).'),
        ],
      },
      {
        heading: '9. Керування файлами cookie — як на практиці надавати та відкликати згоду',
        blocks: [
          p('Якщо користувач не хоче отримувати файли cookie, він може змінити налаштування браузера. Звертаємо увагу: відключення файлів cookie, необхідних для автентифікації, безпеки та збереження вподобань, може ускладнити, а в окремих випадках унеможливити користування сайтом.'),
          p('Щоб керувати налаштуваннями cookie, оберіть свій браузер і дотримуйтесь інструкцій виробника:'),
          ul(['Edge', 'Internet Explorer', 'Chrome', 'Safari', 'Firefox', 'Opera']),
          p('Мобільні пристрої:'),
          ul(['Android', 'Safari (iOS)', 'Windows Phone']),
        ],
      },
    ],
  },
};

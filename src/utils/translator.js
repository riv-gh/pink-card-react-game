const translations = [
  {
    en: 'en',
    ru: 'ru',
    ua: 'ua',
    es: 'es',
    fr: 'fr',
  },
  {
    en: 'Continue',
    ru: 'Продолжить',
    ua: 'Продовжити',
    es: 'Continuar',
    fr: 'Continue',
  },
  {
    en: 'New Game',
    ru: 'Новая игра',
    ua: 'Нова гра',
    es: 'Juego nuevo',
    fr: 'Nouveau jeu',
  },
  {
    en: 'Options',
    ru: 'Опции',
    ua: 'Опції',
    es: 'Opciones',
    fr: 'Choix',
  },
  {
    en: 'Results',
    ru: 'Результаты',
    ua: 'Результати',
    es: 'Resultados',
    fr: 'Résultats',
  },
  {
    en: 'Menu',
    ru: 'Меню',
    ua: 'Меню',
    es: 'Menú',
    fr: 'Menu',
  },
  {
    en: 'Language',
    ru: 'Язык [Language]',
    ua: 'Мова [Language]',
    es: 'Idioma [Language]',
    fr: 'Langue [Language]',
  },

  {
    en: 'Moves',
    ru: 'Ходы',
    ua: 'Ходи',
    es: 'Movimientos',
    fr: 'Coups',
  },
  {
    en: 'Rate Us',
    ru: 'Поставить оценку',
    ua: 'Оцінити гру',
    es: 'Nos califique',
    fr: 'Évaluez nous',
  },
  {
    en: 'Game Page',
    ru: 'Страница игры',  
    ua: 'Сторінка гри',
    es: 'Página del juego',
    fr: 'Page du jeu',
  },
  {
    en: 'My GitHub',
    ru: 'Мой GitHub',
    ua: 'Мій GitHub',
    es: 'Mi GitHub',
    fr: 'Mon GitHub',
  },
  {
    ru: 'Поставить оценку',
    ua: 'Оцінити гру',
    es: 'Nos califique',
    fr: 'Évaluez nous',
  },
  {
    en: 'Our Apps',
    ru: 'Наши приложения',
    ua: 'Наші застосунки',
    es: 'Nuestras aplicaciones',
    fr: 'Nos applications',
  },
  {
    en: 'Play Again',
    ru: 'Играть снова',
    ua: 'Грати знову',
    es: 'Juega de nuevo',
    fr: 'Rejouer',
  },
  {
    en: 'Share',
    ru: 'Поделиться',
    ua: 'Поділитися',
    es: 'Compartir',
    fr: 'Partager',
  },
  {
    en: 'Сontinue or New Game?',
    ru: 'Продолжить или заново?',
    ua: 'Продовжити чи наново?',
    es: '¿Continuar o juego nuevo?',
    fr: 'Continuer ou Nouvelle partie',
  },
  {
    en: 'Update Avalible!',
    ru: 'Доступно обновление!',
    ua: 'Доступне оновлення!',
    es: '¡Actualización disponible!',
    fr: 'Mise à jour disponible!',
  },
  {
    en: 'Update now',
    ru: 'Обновить сейчас',
    ua: 'Оновити зараз',
    es: 'Actualizar ahora',
    fr: 'Mettez à jour maintenant',
  },
  {
    en: 'Next time',
    ru: 'Позже',
    ua: 'Пізніше',
    es: 'Luego',
    fr: 'Plus tard',
  },

]

// const to_translate = []

export const translator = (text, to, from='en') => {
  try {
    // if (['gb','us'].indexOf(from)!=-1) { from = 'en' }
    const translation = translations.find(word => word[from] === text)[to]
    return translation ? translation : text
  }
  catch (exc) {
    console.warn('translator', {text, to, from})
    // to_translate.push(text)
    // console.log(to_translate.join('\n'))
  }
  return text
}

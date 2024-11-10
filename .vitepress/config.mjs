import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-code/',
  lang: 'ru-RU',
  title: "Код",
  srcDir: './src',
  outDir: './docs',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Показать детали',
                resetButtonTitle: 'Сбросить',
                backButtonTitle: 'Назад',
                noResultsText: 'Не найдено',
                footer: {
                  selectText: 'Перейти',
                  selectKeyAriaLabel: 'Выбрать',
                  navigateText: 'Навигация',
                  navigateUpKeyAriaLabel: 'Вверх',
                  navigateDownKeyAriaLabel: 'Вниз',
                  closeText: 'Закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: 'Темы',
        items: [
          { text: 'Frontend', link: '/frontend' },
          { text: 'Python', link: '/python' }
        ]
      }
    ],
  }
})

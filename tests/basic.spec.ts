import { expect, test, type Page } from '@playwright/test';
import translations, { type TLocales } from '../src/lib/translations'


test.describe.configure({ mode: 'parallel' })

let language: TLocales = 'en'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  language = await page.getByTestId('language').inputValue() as TLocales
});

test.describe('translations', () => {
  console.log(language)

  test('translated name', async ({ page }) => {
    await expect(page.getByTestId('name')).toContainText(translations[language].name)
  })

  test('translated skill header', async ({ page }) => {
    await expect(page.getByTestId('skills')).toContainText(translations[language]['skills.title'])
  })

  test('change language and verify', async ({ page }) => {
    const selected = await page.getByTestId('language').selectOption(language === 'en' ? 'ru' : 'en') as Array<TLocales>
    language = selected[0]

    await expect(page.getByTestId('skills')).toContainText(translations[language]['skills.title'])
    await expect(page.getByTestId('name')).toContainText(translations[language].name)

  })

})


test.describe('navigating', () => {

  test('go to skills', async ({ page }) => {
    await page.click('[data-testid="skills-nav"]')
    const header = page.locator('[data-testid="skills"]')
    await header.waitFor({ state: 'visible' })

    await expect(page.getByTestId('skills')).toBeInViewport()
  })
  test('go to experience', async ({ page }) => {
    await page.click('[data-testid="experience-nav"]')
    const header = page.locator('[data-testid="experience"]')
    await header.waitFor({ state: 'visible' })

    await expect(page.getByTestId('experience')).toBeInViewport()
  })

})


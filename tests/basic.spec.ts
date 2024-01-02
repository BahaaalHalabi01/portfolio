import { expect, test, type Page } from '@playwright/test';
import translations, { type TLocales } from '../src/lib/translations'


test.describe.configure({ mode: 'parallel' })

let language: TLocales = 'en'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  language = await page.getByTestId('language').inputValue() as TLocales
});

test.describe('translations', () => {

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


test.describe('interactions', () => {

  test('go to skills', async ({ page }) => {
    await page.getByTestId("skills-nav").click()
    const header = page.getByTestId("skills")
    await header.waitFor()
    await expect(header).toBeInViewport()

  })
  test('go to experience', async ({ page }) => {
    await page.getByTestId("experience-nav").click()
    const header = page.getByTestId('experience')
    await header.waitFor()
    await expect(header).toBeInViewport()

  })

  test('should open and close a  skill', async ({ page }) => {

    await page.click('[data-testid="experience-nav"]')
    const header = page.getByTestId('experience')
    await header.waitFor()

    const accordion = page.getByTestId(/accordion-*/).first()
    await accordion.getByTestId('label').click()

    await expect(accordion.getByRole('group')).toHaveClass(/opacity-100/)
    await accordion.getByTestId('label').click()
    await expect(accordion.getByRole('group')).toHaveClass(/opacity-0/)

  })


})


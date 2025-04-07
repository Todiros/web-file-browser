/* eslint-disable testing-library/prefer-screen-queries */
// sidebar.spec.ts
import { test, expect } from '@playwright/test'

test.describe('expands and renders subdirectories in sidebar', () => {
	test('expands and renders top level directories', async ({
		page,
	}) => {
		await page.goto('http://localhost:3000')

		// assets
		await page.getByTestId('folder-assets').click()
		await expect(page.getByTestId('folder-images')).toBeVisible()

		// folderMain
		await page.getByTestId('folder-folderMain').click()
		await expect(
			page.getByTestId('folder-folderSub')
		).toBeVisible()

		// folder1
		await page.getByTestId('folder-folder1').click()
		await expect(page.getByTestId('folder-folder2')).toBeVisible()
	})

	test('expands and renders 2 level deep directories', async ({
		page,
	}) => {
		await page.goto('http://localhost:3000')

		// misc
		await page.getByTestId('folder-misc').click()
		await expect(
			page.getByTestId('folder-reference')
		).toBeVisible()
		await page.getByTestId('folder-reference').click()
		await expect(page.getByTestId('folder-docs')).toBeVisible()

		// data
		await page.getByTestId('folder-data').click()
		await expect(page.getByTestId('folder-archives')).toBeVisible()
		await page.getByTestId('folder-archives').click()
		await expect(page.getByTestId('folder-year2024')).toBeVisible()
	})

	test('expands and renders 4 level deep directories', async ({
		page,
	}) => {
		await page.goto('http://localhost:3000')

		// folderMain
		await page.getByTestId('folder-folderMain').click()
		await page.getByTestId('folder-folderSub').click()
		await page.getByTestId('folder-folderSub2').click()
		await page.getByTestId('folder-folderSub3').click()

		await expect(
			page.getByTestId('folder-folderSub4')
		).toBeVisible()
	})
})

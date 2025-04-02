import type { Config } from 'jest'

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/tests'],
	testMatch: ['**/*.test.ts?(x)'],
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	// Ignore the e2e directory
	modulePathIgnorePatterns: ['<rootDir>/e2e'],
	// Optional: Coverage configuration
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/*.d.ts',
		'!src/index.tsx',
	],
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov'],
}

export default config

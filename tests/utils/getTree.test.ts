import { expect, test } from '@jest/globals'
import getTree from '../../src/utils/getTree'

test('builds a nested tree from file paths', () => {
	const paths = [
		'root/logs/debug_log.txt',
		'root/logs/2024/server_status.txt',
		'root/logs/2024/access_log.txt',
		'root/logs/2023/system_health.txt',
		'root/logs/2023/security_breach.txt',
		'root/logs/errors/fatal_errors.txt',
		'root/logs/errors/debugging_notes.txt',
		'root/configs/setup_guide.txt',
		'root/configs/profiles/account_info.txt',
		'root/configs/profiles/user1/preferences.txt',
		'root/configs/profiles/user1/activity_log.txt',
		'root/configs/profiles/user2/saved_sessions.txt',
		'root/configs/profiles/user2/error_history.txt',
		'root/scripts/init_script.txt',
	]
	const tree = getTree(paths)
	expect(tree).toMatchSnapshot()
})

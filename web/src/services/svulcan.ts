import { Issues as ModelIssues, Issue as ModelIssue } from '@/model/Issues.ts';

export default class VulcanSrv {
	private baseUrl = '';

	constructor(baseUrl: string = 'http://localhost:3000/api') {
		this.baseUrl = baseUrl;
	}

	public async findings(tags: string[]): Promise<ModelIssue[]> {
		try {
			const tagsStr = tags.reduce((acc: string, curr: string): string => acc + ';' + curr, '');
			const url = `${this.baseUrl}/findings?tags=${tagsStr}`;
			const resp = await fetch(url);
			return resp.json();
		} catch (err) {
			throw err;
		}
	}
}

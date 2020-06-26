import { Issues as ModelIssues, Issue as ModelIssue } from '@/model/Issues.ts'

const apiPath = "api"

export default class VulcanSrv {

    private baseUrl = "";

    constructor(baseUrl: string = "http://localhost:3000/") {
        this.baseUrl = baseUrl;

    }
    private apiUrl(): string {
        return `${this.baseUrl}${apiPath}`
    }
    public async issues(tags: string[]): Promise<ModelIssue[]> {
        try {
            const tagsStr = tags.reduce((acc: string, curr: string): string => acc + ";" + curr, "");
            const url = `${this.apiUrl()}/issues/?tags=${tagsStr}`;
            const resp = await fetch(url);
            return resp.json()
        } catch (err) {
            throw err;
        }

    }
}

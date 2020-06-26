export interface IIssue {
    target: string;
    summary: string;
    score?: number;
    description?: string;
}

class Issue implements IIssue {
    public target: string;
    public summary: string;
    public score?: number;
    description?: string;

    constructor(summaryOrIssue: string | IIssue, description?: string, target?: string, score?: number) {
        if (typeof summaryOrIssue === 'string') {
            this.summary = summaryOrIssue;
            this.description = description || '';
            this.score = score || 0.0;
        } else {
            this.target = summaryOrIssue.target;
            this.summary = summaryOrIssue.summary;
            this.description = summaryOrIssue.description;
            this.score = summaryOrIssue.score;

        }
    }
}

export default Issue;

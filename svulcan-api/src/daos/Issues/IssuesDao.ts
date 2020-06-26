import Issue, { IIssue } from '../../entities/Issues';


export interface IIssuesDao {
    get: (tags: string[]) => Promise<Issue[] | null>;

}

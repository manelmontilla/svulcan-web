import jsonfile from 'jsonfile';
import { IIssue } from '../../entities/Issues'
export class MockDaoMock {
    public issues: IIssue[] = [];

    private readonly dbFilePath = 'src/daos/MockDb/MockDb.json';

    protected async openDb(): Promise<any> {
        // Hack load also the entities here.
        const db = await jsonfile.readFile(this.dbFilePath);
        this.issues = db.issues;
        return db
    }

    protected saveDb(db: any): Promise<any> {
        return jsonfile.writeFile(this.dbFilePath, db);
    }
}

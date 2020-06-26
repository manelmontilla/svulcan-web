import Issue, { IIssue } from '../../entities/Issues';
import { MockDaoMock } from '../MockDb/MockDao.mock';
import { IIssuesDao } from './IssuesDao';


class IssuesDao extends MockDaoMock implements IIssuesDao {


    public async get(tags: string[]): Promise<IIssue[] | null> {
        try {
            const db = await super.openDb();
            // By now return all the issues;
            console.log(db.issues);
            return db.issues
        } catch (err) {
            throw err;
        }
    }


}

export default IssuesDao;

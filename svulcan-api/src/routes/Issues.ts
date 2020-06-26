import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { paramMissingError } from '../shared/constants';
import IssuesDao from '../daos/Issues/IssuesDao.mock';

// Init shared
const router = Router();
const issuesDao = new IssuesDao();


/******************************************************************************
 *                      Get All Users - "GET /api/issues/t"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    // todo read tags from request.
    const issues = await issuesDao.get([])
    return res.status(OK).json(issues);
});

export default router

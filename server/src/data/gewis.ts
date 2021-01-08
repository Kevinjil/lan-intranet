import { Request } from "express";

const LIDNR_HEADER = 'X-Lidnr'

/**
 * Tries to extract the lidnr from the request headers.
 * @param req The express request from which to extract the lidnr.
 * @returns The lidnr when it exists and is integer, and -1 otherwise.
 */
export function getLidnr(req: Request) {
    // TODO: alternative source for lidnr in development environment.
    let lidnr = -1;
    if (req.header(LIDNR_HEADER) !== undefined) {
        const str = req.header(LIDNR_HEADER);
        try {
            lidnr = parseInt(str);
        } catch (error) {
            console.log(error);
        }
    }
    return lidnr;
}
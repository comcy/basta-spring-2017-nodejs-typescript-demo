import {BillPojo} from '../models/bill';
import {databaseProvider} from '../database/index';

export class BillService {
    public async create(customerId, bill: BillPojo): Promise<BillPojo> {
        return;
    }

    public async remove(id): Promise<void> {
        const bill = await (await databaseProvider.get()).Bill.findByPrimary(id);
        await bill.destroy();
    }
}

export const billService = new BillService();

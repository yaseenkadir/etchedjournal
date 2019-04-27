import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { TestUtils } from '../utils/test-utils.spec';

import { JournalsService } from './journals.service';
import { JournalEntity } from './models/journal-entity';
import { Schema } from './models/schema';
import createJournalEntity = TestUtils.createJournalEntity;

describe('JournalsService', () => {
    let injector: TestBed;
    let service: JournalsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [JournalsService],
        });
        injector = getTestBed();
        service = injector.get(JournalsService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        // Verify that there aren't any outstanding requests
        httpMock.verify();
    });

    it('create journal', () => {
        const createJournalReq = { keyPairId: 'kpId', content: 'content', schema: Schema.V1_0 };
        service.createJournal(createJournalReq).subscribe((result: JournalEntity) => {
            expect(result.id).toEqual('jId');
            expect(result.content).toEqual('ciphertext');
        });

        const journal = createJournalEntity({ id: 'jId' });

        const req = httpMock.expectOne(`${environment.API_URL}/journals`);
        expect(req.request.method).toEqual('POST');
        req.flush(journal);
    });

    it('get journals', () => {
        service.getJournals().subscribe((journals: JournalEntity[]) => {
            expect(journals.length).toEqual(1);
            expect(journals[0].id).toEqual('jId');
            expect(journals[0].content).toEqual('ciphertext');
        });

        const journal: JournalEntity = createJournalEntity({ id: 'jId' });

        const req = httpMock.expectOne(`${environment.API_URL}/journals`);
        expect(req.request.method).toEqual('GET');
        req.flush([journal]);
    });
});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { JournalEntity } from '../models/journal-entity';
import { OwnerType } from '../models/owner-type';

import { JournalsService } from './journals.service';

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
        service.createJournal('kpId', 'content')
            .subscribe((result: JournalEntity) => {
                expect(result.id).toEqual('entryId');
                expect(result.content).toEqual('base64Content');
                expect(result.timestamp).toEqual(1);
                expect(result.owner).toEqual('user');
                expect(result.ownerType).toEqual(OwnerType.USER);
                expect(result.keyPairId).toEqual('kpId');
            });

        const journal: JournalEntity = {
            id: 'entryId',
            content: 'base64Content',
            timestamp: 1,
            owner: 'user',
            // Declaring string `as OwnerType` because the API returns it as a string
            ownerType: 'USER' as OwnerType,
            keyPairId: 'kpId',
        };

        const req = httpMock.expectOne(`${environment.API_URL}/journals`);
        expect(req.request.method).toEqual('POST');
        req.flush(journal);
    });

    it('get journals', () => {
        service.getJournals()
            .subscribe((journals: JournalEntity[]) => {
                expect(journals.length).toEqual(1);
                expect(journals[0].id).toEqual('entryId');
                expect(journals[0].content).toEqual('base64Content');
                expect(journals[0].timestamp).toEqual(1);
                expect(journals[0].owner).toEqual('user');
                expect(journals[0].ownerType).toEqual(OwnerType.USER);
                expect(journals[0].keyPairId).toEqual('kpId');
            });

        const journal: JournalEntity = {
            id: 'entryId',
            content: 'base64Content',
            timestamp: 1,
            owner: 'user',
            // Declaring string `as OwnerType` because the API returns it as a string
            ownerType: 'USER' as OwnerType,
            keyPairId: 'kpId',
        };

        const req = httpMock.expectOne(`${environment.API_URL}/journals`);
        expect(req.request.method).toEqual('GET');
        req.flush([journal]);
    });
});
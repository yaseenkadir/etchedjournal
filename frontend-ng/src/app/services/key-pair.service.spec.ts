import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { CreateKeyPairRequest } from './dtos/create-key-pair-request';
import { KeyPairService } from './key-pair.service';
import { KeyPairEntity } from './models/key-pair-entity';
import { OwnerType } from './models/owner-type';

describe('KeyPairService', () => {
    let injector: TestBed;
    let service: KeyPairService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [KeyPairService],
        });
        injector = getTestBed();
        service = injector.get(KeyPairService);
        httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
        // Verify that there aren't any outstanding requests
        httpMock.verify();
    });

    it('createKeyPair', () => {
        const req: CreateKeyPairRequest = {
            publicKey: 'pubKey',
            privateKey: 'privKey',
            salt: 'salt',
            iterations: 10,
        };
        service.createKeyPair(req).subscribe(keyPair => {
            expect(keyPair.id).toEqual('id');
            expect(keyPair.owner).toEqual('owner');
            expect(keyPair.ownerType).toEqual('USER');
            expect(keyPair.privateKey).toEqual('privKey');
            expect(keyPair.publicKey).toEqual('pubKey');
            expect(keyPair.created).toEqual(1);
            expect(keyPair.salt).toEqual('salt');
            expect(keyPair.iterations).toEqual(10);
        });

        const mockKeyPair: KeyPairEntity = {
            id: 'id',
            owner: 'owner',
            ownerType: OwnerType.USER,
            privateKey: 'privKey',
            publicKey: 'pubKey',
            created: 1,
            salt: 'salt',
            iterations: 10,
            version: 1,
        };

        const mockReq = httpMock.expectOne(`${environment.API_URL}/keypairs`);
        expect(mockReq.request.method).toEqual('POST');
        mockReq.flush(mockKeyPair);
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorContainerComponent } from './editor-container.component';
import { EtchedApiService } from '../../services/etched-api.service';
import { EntryTitleComponent } from './entry-title/entry-title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { EncrypterService } from '../../services/encrypter.service';

describe('EditorContainerComponent', () => {
    let component: EditorContainerComponent;
    let fixture: ComponentFixture<EditorContainerComponent>;
    let etchedApiSpy: any;
    let encrypterSpy: any;
    let encrypterService: EncrypterService;

    beforeEach(async(() => {
        etchedApiSpy = jasmine.createSpyObj('EtchedApiService', ['getUser']);
        // By default getUser should return null
        etchedApiSpy.getUser.and.returnValue(null);

        encrypterSpy = jasmine.createSpyObj('Encrypter', ['encrypt']);

        encrypterService = new EncrypterService();
        encrypterService.encrypter = encrypterSpy;

        TestBed.configureTestingModule({
            declarations: [
                EditorContainerComponent,
                EntryTitleComponent,
                EntryEditorComponent,
            ],
            providers: [
                {provide: EtchedApiService, useValue: etchedApiSpy},
                {provide: EncrypterService, useValue: encrypterService},
            ],
            imports: [ReactiveFormsModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditorContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
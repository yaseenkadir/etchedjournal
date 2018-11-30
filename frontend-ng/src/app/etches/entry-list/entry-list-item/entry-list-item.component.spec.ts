import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryListItemComponent } from './entry-list-item.component';
import { OwnerType } from '../../../models/owner-type';
import { RouterTestingModule } from '@angular/router/testing';
import { TestUtils } from '../../../utils/test-utils.spec';

describe('EntryListItemComponent', () => {
    let component: EntryListItemComponent;
    let fixture: ComponentFixture<EntryListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntryListItemComponent],
            imports: [
                RouterTestingModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntryListItemComponent);
        component = fixture.componentInstance;

        component.entry = {
            content: 'Title of the entry',
            timestamp: 1000,
            owner: 'owner',
            ownerType: OwnerType.USER,
            id: 'abcdef',
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('displays title', () => {
        const heading = TestUtils.queryExpectOne(fixture.debugElement, 'h4');
        expect(heading.nativeElement.innerText).toEqual('Title of the entry');
    });

    it('title is a link to entry', () => {
        const anchor = TestUtils.queryExpectOne(fixture.debugElement, 'h4 a');
        expect(anchor.nativeElement.getAttribute('href')).toEqual('/entries/abcdef');
    });

    it('displays timestamp as a string', () => {
        const timestampStr = TestUtils.queryExpectOne(fixture.debugElement, '.subtitle');
        expect(timestampStr.nativeElement.innerText).toEqual(component.timestampStr);

        // Verify that the timestamp string matches the timestamp of the entry
        const d = new Date(component.timestampStr);
        expect(d.getTime()).toEqual(1000);
    });
});
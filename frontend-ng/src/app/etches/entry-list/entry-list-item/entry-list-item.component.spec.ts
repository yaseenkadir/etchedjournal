import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { EntryV1 } from '../../../models/entry/entry-v1';
import { TestUtils } from '../../../utils/test-utils.spec';
import { EntryListItemComponent } from './entry-list-item.component';

describe('EntryListItemComponent', () => {
    let component: EntryListItemComponent;
    let fixture: ComponentFixture<EntryListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EntryListItemComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EntryListItemComponent);
        component = fixture.componentInstance;

        component.entity = TestUtils.createEntryEntity({ id: 'abcdef' });
        component.entry = new EntryV1({ content: 'Title of the entry', created: 1000 });
        fixture.detectChanges();
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

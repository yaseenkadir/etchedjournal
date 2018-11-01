import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nonWhitespaceValidator } from '../../../user/form-utils';

@Component({
    selector: 'app-entry-title',
    templateUrl: './entry-title.component.html',
    styleUrls: ['./entry-title.component.css']
})
export class EntryTitleComponent implements OnInit {

    /** title of entry */
    @Input()
    title?: string;

    @Output()
    titleEmitter: EventEmitter<string>;

    /** the title is currently being edited */
    isEditing: boolean;

    titleForm: FormGroup;

    TITLE_MIN_LENGTH = 1;
    TITLE_MAX_LENGTH = 100;

    constructor(private fb: FormBuilder) {
        if (this.title === undefined) {
            // title may be provided if entry already exists
            // if it doesn't we just use the current time as the title
            this.title = new Date().toString();
        }
        this.titleEmitter = new EventEmitter();
        this.titleForm = this.fb.group({
            title: ['', Validators.compose([
                Validators.required,
                Validators.minLength(this.TITLE_MIN_LENGTH),
                Validators.maxLength(this.TITLE_MAX_LENGTH),
                nonWhitespaceValidator,
            ])],
        });
    }

    ngOnInit() {
        // Emit the first title otherwise it will be undefined
        this.titleEmitter.emit(this.title);
    }

    toggleEdit(update: boolean = false) {
        if (this.isEditing) {
            // If were were in edit mode, save the title value from the form
            if (update) {
                this.title = this.titleForm.controls.title.value.trim();
                this.titleEmitter.emit(this.title);
            }
        } else {
            // If we were not in edit mode, update the form to display the current title
            this.titleForm.patchValue({title: this.title});
        }

        this.isEditing = !this.isEditing;
    }
}

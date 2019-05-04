import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'editable-text',
    templateUrl: './editable-text.component.html',
    styleUrls: ['./editable-text.component.css'],
})
export class EditableText implements OnInit {
    /** Callback to return the edited text */
    @Output()
    public onSave: EventEmitter<string> = new EventEmitter();

    /** Default value for text */
    @Input()
    public text: string;

    /** Optional - display text as a routerlink */
    @Input()
    public link?: string;

    public editing: boolean = false;
    private editingText: string = '';

    ngOnInit(): void {
        if (this.text === undefined || this.text === null) {
            throw new Error('Text is required');
        }
    }

    public edit() {
        this.editing = true;
    }

    public onKeyUp(event: KeyboardEvent) {
        if (event.key === 'Enter' && this.editingText != '') {
            this.finishEditing();
        }
    }

    public onInput(event: TextEvent) {
        this.editingText = (<HTMLInputElement>event.target).value.trim();
    }

    public onBlur() {
        if (this.editingText != '') {
            this.finishEditing();
        }
        this.editing = false;
    }

    private finishEditing() {
        if (this.text !== this.editingText) {
            // Only emit the change if the text has changed
            this.onSave.emit(this.editingText);
        }
        this.text = this.editingText;
        this.editing = false;
    }
}

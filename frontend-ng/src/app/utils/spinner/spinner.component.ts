import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
    /** Specify text to display below spinner */
    @Input() public text: string;
}

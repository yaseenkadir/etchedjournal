import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterRequest } from '../../services/dtos/register-request';
import { PASSWORD_VALIDATORS, USERNAME_VALIDATORS } from '../form-utils';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    public registerForm = this.fb.group({
        username: ['', USERNAME_VALIDATORS],
        password: ['', PASSWORD_VALIDATORS],
        // email: ['', EMAIL_VALIDATORS],
    });

    @Output()
    public registerEmitter: EventEmitter<RegisterRequest> = new EventEmitter();

    /**
     * Boolean indicating that the previous register attempt failed because the username was taken
     */
    @Input()
    public usernameTaken?: boolean;

    /**
     * The username a user attempted to register with previously. MUST be supplied if
     * usernameTaken is supplied.
     */
    @Input()
    public username?: string;

    constructor(private fb: FormBuilder) {}

    public ngOnInit() {
        if (this.usernameTaken && this.username) {
            this.registerForm.controls.username.setValue(this.username);
        }
    }

    public onSubmit() {
        const { username, password } = this.registerForm.value;
        // if (email === undefined || email.trim() === '') {
        //     console.info('Registering without an email');
        //     email = null;
        // }
        // TODO: Allow optional emails

        const registerRequest: RegisterRequest = {
            username,
            password,
            email: null,
        };
        this.registerEmitter.emit(registerRequest);
    }
}

import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
export const ModelAuth = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
});

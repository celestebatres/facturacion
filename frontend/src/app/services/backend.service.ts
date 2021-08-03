import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BE_API = environment.urlBackend;

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
}

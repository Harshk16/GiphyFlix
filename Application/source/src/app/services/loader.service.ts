import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  constructor() {}

  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}

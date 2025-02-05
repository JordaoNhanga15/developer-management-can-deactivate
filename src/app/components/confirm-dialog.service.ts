import { Injectable } from '@angular/core';
import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private confirmationService: ConfirmationService) {}

  confirm(message: string): Observable<boolean> {
    const result = new Subject<boolean>();

    this.confirmationService.confirm({
      message: message,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim', // Tradução do botão "Yes"
      rejectLabel: 'Não', // Tradução do botão "No"
      accept: () => {
        result.next(true);
        result.complete();
      },
      reject: (type: ConfirmEventType) => {
        result.next(false);
        result.complete();
      },
    });

    return result.asObservable();
  }
}

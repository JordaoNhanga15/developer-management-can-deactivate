import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnComponentDeactivate } from '../can-deactivate.guard';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { ConfirmDialogService } from '../confirm-dialog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './form-angular.component.html',
  styleUrls: ['./form-angular.component.scss'],
})
export class FormularioComponent implements OnInit, OnComponentDeactivate {
  form: FormGroup;
  desenvolvedores = [
    {
      nome: 'Acidiney Dias',
      especialidade: 'Mobile Developer',
      status: 'Disponível',
      tecnologias: ['Flutter', 'Dart', 'Firebase'],
      projetosParticipantes: [
        {
          nome: 'Projeto E',
          foto: 'https://media.licdn.com/dms/image/v2/D4D03AQHmWJscua2Kqw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1676573382195?e=1744243200&v=beta&t=YQVNLfHAJsIuQdqV8zJOm9EjSKwlKiGotQ2LCrhV7Ac',
        },
      ],
      extraProjetos: 2,
      localizacao: 'Lisboa, Portugal',
      portfolio: 'www.acidineydias.dev',
      foto: 'https://media.licdn.com/dms/image/v2/D4D03AQHmWJscua2Kqw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1676573382195?e=1744243200&v=beta&t=YQVNLfHAJsIuQdqV8zJOm9EjSKwlKiGotQ2LCrhV7Ac',
    },
    {
      nome: 'Ernesto Maria',
      especialidade: 'DevOps Engineer',
      status: 'Ocupado',
      tecnologias: ['Docker', 'Kubernetes', 'AWS'],
      projetosParticipantes: [
        {
          nome: 'Projeto F',
          foto: 'https://media.licdn.com/dms/image/v2/C4E03AQG5WhCFlU0uEA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1630584475062?e=1744243200&v=beta&t=jYkIkc4P8tAJg6WcLVVmEQzMdiSCB6E_SIuNTRIrjWQ',
        },
      ],
      extraProjetos: 4,
      localizacao: 'Manitoba, Canada',
      portfolio: 'www.ernestomaria.dev',
      foto: 'https://media.licdn.com/dms/image/v2/C4E03AQG5WhCFlU0uEA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1630584475062?e=1744243200&v=beta&t=jYkIkc4P8tAJg6WcLVVmEQzMdiSCB6E_SIuNTRIrjWQ',
    },
    {
      nome: 'Amelion Jorge',
      especialidade: 'Fullstack Developer',
      status: 'Disponível',
      tecnologias: ['Java', 'Spring Boot', 'Angular'],
      projetosParticipantes: [
        {
          nome: 'Projeto D',
          foto: 'https://media.licdn.com/dms/image/v2/C4E03AQHYw9sJV6Wejg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1591957768915?e=1744243200&v=beta&t=yXELNXXe5fv1ONDP7iquqUbHDrAGZhLv6JZDX-x9w7c',
        },
      ],
      extraProjetos: 3,
      localizacao: 'Luanda, Angola',
      portfolio: 'www.amelionjorge.dev',
      foto: 'https://media.licdn.com/dms/image/v2/C4E03AQHYw9sJV6Wejg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1591957768915?e=1744243200&v=beta&t=yXELNXXe5fv1ONDP7iquqUbHDrAGZhLv6JZDX-x9w7c',
    },
  ];

  constructor(private confirmDialogService: ConfirmDialogService) {}

  ngOnInit() {
    this.form = new FormGroup({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      especialidade: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });
  }

  salvar() {
    this.form.markAsPristine();
  }

  addDeveloper() {
    if (this.form.valid) {
      this.desenvolvedores.push(this.form.value);
      this.form.reset();
      this.form.markAsPristine();
    }
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> | UrlTree {
    if (this.form.dirty) {
      return this.confirmDialogService.confirm(
        'As alterações no formulário não foram salvas e serão descartadas, deseja prosseguir?'
      );
    } else {
      return true;
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.form.dirty) {
      const message =
        'Caro utilizador, a modal está aberta. Tem certeza que deseja sair?';
      $event.returnValue = message;
      return message;
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}

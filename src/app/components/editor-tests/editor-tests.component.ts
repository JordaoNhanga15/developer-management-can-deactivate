import {Component, OnInit, ViewChild} from '@angular/core';
import {Editor} from 'primeng/editor';

@Component({
  selector: 'app-editor-tests',
  templateUrl: './editor-tests.component.html',
  styleUrls: ['./editor-tests.component.css']
})
export class EditorTestsComponent implements OnInit {

  @ViewChild(Editor)
  editor: Editor;

  text: string;

  unformattedText: string;

  constructor() { }

  ngOnInit(): void {
  }

  displayUnformattedText(): void {
    if (this.editor) {
      this.unformattedText = this.editor.getQuill().getText();
    }
  }

}

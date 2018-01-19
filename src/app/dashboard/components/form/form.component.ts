import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data : any = {
    name: '',
    title:''
  }


   //這邊設定提交後要幹嘛，目前只是 Console.log 出資料而已
   submitForm(form: any): void{
    console.log('Form Data: ');
    console.log(form);
  }

}

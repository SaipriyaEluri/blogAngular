import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiserviceService } from '../../Services/apiservice.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
  encapsulation: ViewEncapsulation.None,

})

export class CreatePostComponent {
 

 
  // editordoc = jsonDoc;
  editor!: Editor;

  postForm!:FormGroup;

  constructor(private fb: FormBuilder, private service:ApiserviceService) {
    this.postForm = this.fb.group({
      title : ['',Validators.required],
      content : ['',Validators.required]
    })
  }

  ngOnInit(){
    // this.editor = new Editor();
  }

  public Editor = ClassicEditor;

  onSubmit(){
    if(this.postForm.valid){
      this.service.createPost(this.postForm.value).subscribe((res) => {
        console.log(res,'post============');

      })
    }
  }

  // form = new FormGroup({
  //   editorContent: new FormControl(
  //     { value: jsonDoc, disabled: false },
  //     Validators.required()
  //   ),
  // });

  // get doc(): AbstractControl {
  //   return this.form.get('editorContent');
  // }

  // toolbar: Toolbar = [
  //   ['bold', 'italic'],
  //   ['underline', 'strike'],
  //   ['code', 'blockquote'],
  //   ['ordered_list', 'bullet_list'],
  //   [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
  //   ['link', 'image'],
  //   ['text_color', 'background_color'],
  //   ['align_left', 'align_center', 'align_right', 'align_justify'],
  // ];
  
  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }

  // created(event: any) {
  //   // tslint:disable-next-line:no-console
  //   console.log(event)
  // }

  // focus($event: any) {
  //   // tslint:disable-next-line:no-console
  //   console.log('focus', $event)
  //   this.focused = true
  //   this.blured = false
  // }

  // blur($event: any) {
  //   // tslint:disable-next-line:no-console
  //   console.log('blur', $event)
  //   this.focused = false
  //   this.blured = true
  // }

  // quillModules = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  //     ['blockquote', 'code-block'],

  //     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  //     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  //     [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  //     [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  //     [{ 'direction': 'rtl' }],                          // text direction

  //     [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  //     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  //     [{ 'font': [] }],
  //     [{ 'align': [] }],

  //     ['clean'],                                         // remove formatting button

  //     ['link', 'image', 'video']                         // link and image, video
  //   ]
  // };

  // formats = [
  //   "header",
  //   "bold",
  //   "italic",
  //   "underline",
  //   "strike",
  //   "blockquote",
  //   "list",
  //   "bullet",
  //   "link",
  //   "image"
  // ];



}

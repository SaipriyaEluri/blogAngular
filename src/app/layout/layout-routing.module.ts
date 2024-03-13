import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../Views/dashboard/dashboard.component';
import { PostsComponent } from '../Views/posts/posts.component';
import { CreatePostComponent } from '../Views/create-post/create-post.component';
import { CommentsComponent } from '../Views/comments/comments.component';

const routes: Routes = [
  {path:'', component:LayoutComponent,
    children:[
      {path:'',redirectTo:'/create-post',pathMatch:'full'},
      {path:'dashboard', component:DashboardComponent},
      {path:'create-post',component:CreatePostComponent},
      {path:'posts',component:PostsComponent},
      {path:'comments', component:CommentsComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '../Views/dashboard/dashboard.component';
import { PostsComponent } from '../Views/posts/posts.component';
import { CreatePostComponent } from '../Views/create-post/create-post.component';
import { CommentsComponent } from '../Views/comments/comments.component';
import { AuthGuard } from '../Services/auth.guard';

const routes: Routes = [
  {path:'', component:LayoutComponent,
    children:[
      {path:'',redirectTo:'/create-post',pathMatch:'full'},
      {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
      {path:'create-post',component:CreatePostComponent,canActivate:[AuthGuard]},
      {path:'posts',component:PostsComponent,canActivate:[AuthGuard]},
      {path:'comments', component:CommentsComponent,canActivate:[AuthGuard]},
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CsServiceService {
 public blog:any={};
 public courseList:any={}
  constructor( private http:HttpClient, private router:Router) { }

  setObjLatestBlog(data):Observable<any>{
    return  this.blog=data;
  }
  getObjLatestBlog():Observable<any>{
    return this.blog;
  }

  login(data):Observable<any>{
  return this.http.post(environment.loginUrl, data)
  }
  Signup(data):Observable<any>{
    return this.http.post(environment.signupUrl, data)
    }


  bookList():Observable<any>{
    return this.http.get(environment.bookList);
  }
  contactUs(data):Observable<any>{
    return this.http.post(environment.contactUs, data)
  }
  getBlogsList():Observable<any>{
  return this.http.get(environment.blogsList);
  }
  createBlogs(blog):Observable<any>{
    return this.http.post(environment.createBlogs, blog);
    }
  updateBlogs(blog):Observable<any>{
      return this.http.post(environment.editBlogs, blog);
    }
  addComment(id, data):Observable<any>{
    return this.http.post(environment.addComment+'/'+id+'/comments', data)
  }
  getComment(id):Observable<any>{
    return this.http.get(environment.addComment+'/'+id+'/comments')
  }
  getCourses():Observable<any>{
    return this.http.get(environment.coursesUrl);
  }
  getCourseIdBasedCourseList(data):Observable<any>{
  return this.http.get(environment.coursesUrl+"/"+data.id)
  }
  postListData(data){
  this.courseList=data;
  }
  getListData(){
    return this.courseList;
  }
  freeVideos():Observable<any>{
   return this.http.get(environment.freeVideoUrl);
  }
  setToken(token: string, type) {
      localStorage.setItem('token', token);
      localStorage.setItem('user_type', type);
    }
  
    getToken() {
      return localStorage.getItem('token');
    }
    getUserType() {
      return localStorage.getItem('user_type');
    }
    subscribeCourse(id):Observable<any>{
     return this.http.post(environment.coursesUrl+'/'+id+'/enroll', {course_id:id})
    }
  
    deleteToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('user_type');
    }
  
    getUserPayload() {
      var token = this.getToken();
      if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
        return null;
    }
  
    isLoggedIn() {
      var userPayload = this.getUserPayload();
      if (userPayload)
        return userPayload.exp > Date.now() / 1000;
      else
        return false;
    }
}

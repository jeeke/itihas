// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  loginUrl:"https://itihas.herokuapp.com/api/login",
  signupUrl:"https://itihas.herokuapp.com/api/signup",
  bookList:"https://itihas.herokuapp.com/books",
  contactUs:"https://itihas.herokuapp.com/api/contact-us",
  blogsList:"https://itihas.herokuapp.com/blogs",
  createBlogs:"https://itihas.herokuapp.com/blogs/new",
  editBlogs:"https://itihas.herokuapp.com/blogs/edit",
  addComment:"https://itihas.herokuapp.com/blogs",
  coursesUrl:"https://itihas.herokuapp.com/courses",
  razorPayKey:"rzp_test_RUpmgSgMUlsx94",
  freeVideoUrl:"https://itihas.herokuapp.com/courses/free_videos"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

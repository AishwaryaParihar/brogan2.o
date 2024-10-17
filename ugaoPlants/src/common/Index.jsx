

const backendDomin = 'http://localhost:8087'
const SummaryApi = {
  signUP: {
    URL: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    url: `${backendDomin}/api/signin`,
    method: "post",
  },
  current_user : {
    url : `${backendDomin}/api/user-details`,
    method : "get"
  },
  logout_user : {
    url : `${backendDomin}/api/userLogout`,
    method : "get"
  },
  allUser : {
    url : `${backendDomin}/api/all-user`,
    method : "get"
  },
  updateUser : {
    url : `${backendDomin}/api/update-user`,
    method : "post"
  },
  uploadProduct : {
    url : `${backendDomin}/api/upload-product`,
    method : "post"
  },
  allProduct : {
    url : `${backendDomin}/api/get-product`,
    method : 'get'
  },
  updateProduct : {
    url : `${backendDomin}/api/update-product`,
    method : 'post'
  },
  categoryProduct : {
    url : `${backendDomin}/api/get-categoryProduct`,
    method : 'get'
  },
  categoryWiseProduct : {
    url : `${backendDomin}/api/category-product`,
    method : 'post'
  },
  productDetails : {
    url : `${backendDomin}/api/product-details`,
    method : 'post'
  },
  addToCartProduct : {
    url : `${backendDomin}/api/addtoCart`,
    method : 'post'
  },
  addToCartProductCount : {
    url :`${backendDomin}/api/countAddToCartProduct`,
    method : 'get'
  },
  addToCartProductView : {
    url : `${backendDomin}/api/view-card-product`,
    method : 'get'
  },
  updateCartProduct : {
    url : `${backendDomin}/api/update-cart-product`,
    method : 'post'
  },
  deleteCartProduct : {
    url : `${backendDomin}/api/delete-cart-product`,
    method : 'post'
  },
  searchProduct : {
    url : `${backendDomin}/api/search`,
    method : 'get'
  },
  filterProduct : {
    url : `${backendDomin}/api/filter-product`,
    method : 'post'
  },
  contactus : {
    url : `${backendDomin}/api/contact-us`,
    method: 'post'
  },
  contactusDetail:{
    url : `${backendDomin}/api/contact-details`,
    method: 'get'
  },
 
  updateAboutDetails: {
    url: `${backendDomin}/api/about-imageuplode/66a9fbd216fd1f2fb0b16482`,
    method: "PUT"
  },
  aboutImage:{
    url:`${backendDomin}/api/about-imageuplode/66a9fbd216fd1f2fb0b16482`,
    method:'post'
  }
};

export default SummaryApi;

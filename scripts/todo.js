import { baseurl } from "./baseUrl.js";
import { logout } from "./logout.js";

logout();

let userdata = JSON.parse(localStorage.getItem("logindata"));
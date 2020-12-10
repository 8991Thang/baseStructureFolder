export const checkStatusResponRedirectRouter = () => {
  alert("Token Expired Error");
  window.location.href = "http://localhost:3000/login";
  return;
};

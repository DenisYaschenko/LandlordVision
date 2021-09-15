export default function authHeader() {
  const storageItem = localStorage.getItem("user");
  let user = {
    accessToken: "",
  };
  if (storageItem) {
    user = JSON.parse(storageItem);
  }

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  }
  return {};
}

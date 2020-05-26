import jwt from "jsonwebtoken";

const db = window.localStorage;

export const newSession = () => {
  const token = jwt.sign(
    { admin: "password" },
    "longestpasswordinhistoryofpasswords",
    { expiresIn: "24h" }
  );
  db.setItem("adminAuth", token);
  window.location = "/admin";
};

export const checkSession = () => {
  const chkDB = db.getItem("adminAuth");
  if (chkDB === null) window.location = "/admin/login";
};

export const logout = () => {
  db.removeItem("adminAuth");
  window.location = "/admin/login";
};

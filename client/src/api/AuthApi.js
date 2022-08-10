import client from "./client";

// 로그인
export const login = async ({ userId, password }) => {
  return await client.post("/v1/common/login", {
    id: userId,
    password: password,
  });
};

export const save = async ({ formData }) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.post("/v1/member/fields/cud", formData, {
    "Content-type": "multipart/form-data",
    Authorization: sToken,
  });
};

// 회원가입
export const register = async ({
  userName,
  userId,
  password,
  emailId,
  emailDomain,
  validPeriod,
}) => {
  return await client.post("/v1/member", {
    name: userName,
    id: userId,
    password: password,
    email: emailId + "@" + emailDomain,
    expirationDate: validPeriod,
  });
};
// 로그아웃
export const logout = async ({ userId, password }) =>
  await client.get("/v1/member/" + userId);
// client.post('/v1/member/'+userId);

export const retireMember = async ({ userId, state }) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.put(
    "/v1/member",
    { id: userId, state: state },
    { Authorization: sToken }
  );
};

export const existMember = async ({ userId, password }) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.get(
    "/v1/member/exists?id=" + userId + "&password=" + password,
    { Authorization: sToken }
  );
};

export const updatePassword = async ({ userId, curPassword, newPassword }) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.put(
    "/v1/member/password",
    {
      id: userId,
      password: curPassword,
      newPassword: newPassword,
      confirmPassword: newPassword,
    },
    { Authorization: sToken }
  );
};

export const updateUser = async ({
  userName,
  userId,
  emailId,
  emailDomain,
  validPeriod,
}) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.put(
    "/v1/member",
    {
      name: userName,
      id: userId,
      email: emailId + "@" + emailDomain,
      expirationDate: validPeriod,
    },
    { Authorization: sToken }
  );
};

export const findPassword = async ({ userId, userName, email }) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.post(
    "/v1/member/password",
    { id: userId, name: userName, email: email },
    { Authorization: sToken }
  );
};

export const findId = async ({ userName, email }) => {
  let sToken = localStorage.getItem("Authorization");
  return await client.get("/v1/member?name=" + userName + "&email=" + email, {
    Authorization: sToken,
  });
};

export const search = async ({ userId }) => {
  // return await client.get('/v1/member/'+userId);
  let sToken = localStorage.getItem("Authorization");
  return await client.get("/v1/member/preview/" + userId, {
    Authorization: sToken,
  });
  //
};

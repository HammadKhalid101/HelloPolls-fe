import $ from 'jquery';

const apiURL = process.env.REACT_APP_RAILS_API_URL

// login will take in a user object as an argument
export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: `${apiURL}/api/login`,
    data: { user },
  });
};

// signup will take in a user object as an argument
export const signup = (user) => {
  // debugger
    return $.ajax({
      method: "POST",
      url: `${process.env.REACT_APP_RAILS_API_URL}/api/users`,
      data: { user },
    });
  };

  // logged_in will take in a user object as an argument
  export const logged_in = (user) => {
    return $.ajax({
      method: "POST",
      url: `${apiURL}/api/logged_in`,
      data: { user },
    });
  };

  // logout will not accept any arguments
  export const logout = () => {
    return $.ajax({
      method: "POST",
      url: `${apiURL}/api/logout`,
    });
  };

export type IUserAccountChangePassword = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

// ----------------------------------------------------------------------

export type IUserAccountNotificationSettings = {
  activityComments: boolean;
  activityAnswers: boolean;
  activityFollows: boolean;
  applicationNews: boolean;
  applicationProduct: boolean;
  applicationBlog: boolean;
};

 // -----------------------------------------------------------------------

 export type IUserSocialLink = {
  facebookLink: string;
  githubLink?: string;
  linkedinLink: string;
  twitterLink: string;
};
# Harte Code Starter

Still under construction
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tina Login

- Go to `/hcadmin`
- click sign in
- Add Test username and password is in env. file
  ```
    #editor login
    EDITOR_USERNAME=Hartecode
    EDITOR_PASSWORD=TEST
  ```
- create the Hartecode editor in the data/editors director. In side the editors.json
  ```
    {
      "users": [
        {
          "id": 1,
          "userName": "Hartecode",
          "firstName": "Sean",
          "lastName": "Harte"
        }
      ]
    }
  ```
- Once logged in you can go to edit mode

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Set up environment file

```
# OAuth App Credentials from GitHub
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# The path to your repository in GitHub
REPO_FULL_NAME=Hartecode/harte-code-starter

# The base branch that new changes and forks are created from. Defaults to 'main'.
BASE_BRANCH=main

# The signing key used for token encryption
# This can be run in your terminal to generate a key: openssl rand -base64 32
SIGNING_KEY=
```

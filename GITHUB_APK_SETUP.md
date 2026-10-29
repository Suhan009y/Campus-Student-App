# GitHub + Android APK setup

## Important architecture note
This repository is a React/TypeScript web app, not a Flutter project. The workflow creates a Capacitor Android WebView wrapper that loads your **deployed HTTPS website**. It does not convert this project into native Flutter, and the APK requires internet access and a reachable deployed site. This is a prototype/debug APK workflow, not a Play Store release-signing workflow.

## 1. Push to GitHub (Windows PowerShell)
1. Extract this project to a normal folder, for example `C:\Projects\CampusCompanion`.
2. Create an **empty private repository** on GitHub. Do not initialize it with a README, license, or `.gitignore`.
3. Open PowerShell in the extracted project folder and run:

```powershell
git init -b main
git status
git add .
git status
git commit -m "Initial commit - Campus Companion"
git remote add origin https://github.com/Suhan009y/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-REPOSITORY` with the repository name you created. If Git asks you to authenticate, complete the GitHub browser sign-in flow or use GitHub CLI. Never paste a password or token into chat.

Review `git status` before committing. `.gitignore` excludes `.grok/`, local environment files, dependencies, generated Android files, and binaries. This source archive includes a preview-only auth credential in `src/lib/auth/preview.ts`; keep the repository private unless you first review/remove/rotate any credentials and confirm you are permitted to publish all source files.

## 2. Deploy the web app
The APK wrapper needs the app to be deployed at a public HTTPS URL. A local address such as `localhost` will not work on your phone. This repository uses TanStack Start/server-side routes, so do not assume it can be hosted as a static GitHub Pages site. Deploy it to a compatible server platform and verify its routes work before building the APK.

## 3. Configure the URL in GitHub
In the repository, open **Settings → Secrets and variables → Actions → Variables → New repository variable**.
- Name: `APP_WEB_URL`
- Value: your public HTTPS app URL, for example `https://your-app.example.com`

The URL is public configuration, not a secret. Never put passwords, API keys, or database credentials in this variable.

## 4. Run the APK workflow
After pushing `.github/workflows/build-android-apk.yml`, open **Actions → Build Android APK → Run workflow**. If you have not set the `APP_WEB_URL` repository variable, enter the deployed HTTPS URL in the workflow input. Wait for the run to finish, open the run's **Artifacts** section, and download `campus-companion-debug-apk`. Extract the ZIP artifact to get `app-debug.apk`.

A new APK artifact is also built on each push to `main`, once `APP_WEB_URL` is configured. The workflow produces an unsigned debug APK for testing, not a signed production release.

## 5. If the workflow fails
Open the failed workflow run and copy the first actual error from the failed step. Do not share secrets, access tokens, or database URLs.

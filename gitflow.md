# Git flow

Branch for production releases: **main**

Branch for 'next release' development: **develop**

Branch for features: **feature/...**

Branch for releases: **release/vX.X.X**

---

*Branch protection rule*:
- Require a pull request before merging on **main** branch

---

*git flow steps*:
- Create a feature branch **feature/...** from **develop** branch (for example feature/login)
- Checkout to this new branch and commit on it
- Finish up a feature :
  - Merges it into **develop**
  - Removes the feature branch

- Switched to a new branch **release/vX.X.X** (for example release/v1.0.1)
- Finish up a release:
  - Tags it with its name
  - Create a pull request for **release/vX.X.X** on Github to merge this branch into **main** branch
  - Back-merges the release into **develop**
  - Removes the release branch

![git flow](./images/gitflow.drawio.png)

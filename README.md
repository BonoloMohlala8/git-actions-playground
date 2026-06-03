# gh-actions-lab

A hands-on GitHub Actions study repo for the GH-200 certification.

## How to use this repo

Each workflow file is a lesson. They run in order and each one teaches a specific exam concept. **Don't just read them — run them, then tweak them.**

### Setup (do this once)

1. Create a new repo on GitHub called `gh-actions-lab`
2. Clone it to your machine: `git clone https://github.com/YOUR_USERNAME/gh-actions-lab.git`
3. Copy all these files into that folder
4. Push everything: `git add . && git commit -m "initial setup" && git push`
5. Go to your repo on GitHub → click the **Actions** tab

That's it. The workflows are ready.

---

## The workflows

| File | Concept | How to trigger |
|------|---------|----------------|
| `01-basic-ci.yml` | Triggers, jobs, steps, `run` vs `uses` | Push anything to main |
| `02-artifacts.yml` | Upload/download artifacts, job dependencies | Actions tab → Run workflow |
| `03-matrix.yml` | Matrix builds, fail-fast, include/exclude | Actions tab → Run workflow |
| `04-contexts.yml` | github context, step outputs, GITHUB_OUTPUT, job outputs | Actions tab → Run workflow |
| `05-reusable.yml` | Calling reusable workflows, inputs, secrets, outputs | Actions tab → Run workflow |
| `06-concurrency.yml` | Concurrency groups, cancel-in-progress, environments | Actions tab → Run workflow |
| `07-composite-action.yml` | Composite actions, action.yml structure | Actions tab → Run workflow |

---

## The method — do this for every workflow

1. **Read** the workflow file top to bottom (comments explain everything)
2. **Run** it — go to Actions tab → select the workflow → click "Run workflow"
3. **Watch** the logs — expand each step and read the output
4. **Do the task** — each file has a "YOUR TASK AFTER IT RUNS" section
5. **Break it on purpose** — change something, see what error you get, fix it

Breaking things on purpose is the fastest way to learn. An error message in the Actions tab tells you exactly what went wrong — that's real learning, not reading about what *could* go wrong.

---

## Key concepts this repo covers (all on the GH-200 exam)

- **`run` vs `uses`** — shell command vs calling a pre-built action
- **Artifacts vs cache** — artifacts = files to keep; cache = speed up installs
- **What persists where** — step outputs (`$GITHUB_OUTPUT`), env vars (`$GITHUB_ENV`), job outputs (`outputs:`), needs context
- **Matrix builds** — parallel jobs from combinations, include/exclude, fail-fast
- **Reusable workflows** — `workflow_call`, inputs, secrets, outputs, `secrets: inherit`
- **Composite actions** — `action.yml`, `runs: using: composite`, local vs published
- **Concurrency** — groups, `cancel-in-progress: true` vs `false`
- **Contexts** — `github`, `steps`, `needs`, `env`, `secrets`, `runner`
- **Environments** — protection rules, required reviewers, environment secrets

---

## After you've run all 7 workflows

Go back to the Udemy practice exams. You'll notice the questions that were confusing before now make sense because you've *seen* the concepts in action, not just read about them.

Good luck on the GH-200 resit. You've got this.

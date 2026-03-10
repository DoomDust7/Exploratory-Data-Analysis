# Habermann Cancer Survival — EDA Dashboard

An interactive web dashboard for exploratory data analysis of post-operative survival outcomes in breast cancer patients, built on top of the [Habermann Survival Dataset](https://archive.ics.uci.edu/dataset/43/haberman+s+survival) from the UCI Machine Learning Repository.

This project is a redesign of an ML Summer Project Jupyter notebook — converting static Python charts into a fully interactive, live web experience.

---

## Dataset

| Feature | Description | Range |
|---|---|---|
| `age` | Patient age at time of surgery | 30 – 83 |
| `year` | Year of operation | 1958 – 1969 |
| `nodes` | Number of positive axillary lymph nodes | 0 – 52 |
| `survival` | 1 = survived ≥5 years, 2 = died within 5 years | 1 or 2 |

- **306** total patient records
- **225** survived 5+ years (73.5%)
- **81** died within 5 years (26.5%)

---

## Key Findings

- **Lymph node count** is the strongest single predictor of survival — 86% of patients with 0 positive nodes survived
- **Patients under 40** had near-universal survival rates
- **10+ positive nodes** correlates with dramatically higher mortality
- The dataset has a **73.5/26.5 class imbalance** that any downstream model must account for
- Post-1965 operations show modest improvement, reflecting advances in 1960s surgical care

---

## Features

- **Hero section** with project summary and smooth-scroll navigation
- **Dataset Overview** — 6 stat cards, survival donut chart, feature reference table
- **Interactive Visualizations** — togglable bar charts across Age, Operation Year, and Lymph Node groups; survival rate area chart
- **Key Findings** — color-coded insight cards (positive indicators vs. risk factors) with summary stats
- **About section** with tech stack

---

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Recharts](https://recharts.org/) for data visualizations
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Inter](https://rsms.me/inter/) font via Google Fonts

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Original Notebook

The original EDA was performed in a Jupyter notebook (`ML Summer Project (Habermann Data Analysis).ipynb`) using Python, pandas, matplotlib, and seaborn — exploring PDF and CDF distributions across all four dataset features.

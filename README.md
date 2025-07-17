# 🧩 Gengarlax UI — Design System

A small component library built with React, Radix UI, Stitches, and TurboRepo. The goal of this project was to explore the architecture of a scalable and customizable design system, along with publishing packages to npm and documenting components using Storybook.

## 📚 Documentation

You can explore the components via our live [Storybook](https://ithauront.github.io/design-system/).


## 📦 Packages

* [@gengarlax-ui/react](https://www.npmjs.com/package/@gengarlax-ui/react): Core component library
* [@gengarlax-ui/tokens](https://www.npmjs.com/package/@gengarlax-ui/tokens): Design tokens used across the system

## 📥 Installation

Install the components in your project via npm:

```bash
npm install @gengarlax-ui/tokens @gengarlax-ui/react

```

## 🛠️ Technologies

  *  Monorepo with TurboRepo

  *  Stitches for CSS-in-JS styling

  *  Radix UI Primitives

  *  Storybook for component documentation (published via GitHub Pages)

## ✨ Features

   * Component styling using tokens (colors, spacing, radii)

   * Custom animations and state handling via Radix

   * Visual documentation with live previews

   * Published to npm for easy reuse across projects


## 🚀 What I Learned

* How to structure a **monorepo** using TurboRepo and workspaces
* How to build and publish **reusable components** to npm
* Creating a **design token system** to ensure consistency in spacing, colors and typography
* Leveraging **Radix UI Primitives** for accessible component bases
* Customizing Radix styles with **Stitches** and creating a theme system
* Writing and documenting components in **Storybook**
* Publishing the documentation to **GitHub Pages**
* Handling build and release pipelines with **Changesets**
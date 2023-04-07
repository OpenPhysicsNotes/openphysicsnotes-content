---
title: Quick Start

related_articles:
    - title: MD syntax
      url: ../md_syntax
    - title: Writing SVG images
      url: ../svg
---

# Quick Start

I want to try to edit this website, but I don't know where to start. What should I do?

First of all, this is not completely immediate, you have to install a couple of things, but it's not that complicated, probably much easier than installing and configuring la LaTeX distribution!

::: note
Once you are ready to start, you can follow the [MD syntax](../md_syntax) article to learn how to write the content of the website.
:::

::: note
In the future, we will try to make it even easier with a zero-configuration Overleaf-like collaborative web app based on VS Code, but for now, this is the standard procedure.
:::

## Install Node.js

<!-- copilot -->
You need to install [Node.js](https://nodejs.org/en/). This is a Javascript runtime environment that allows you to run Javascript code on your computer. It also comes with a package manager called `npm` that allows you to install Javascript packages.

## Download the source code

The easiest way to download the source code is to use `git`, this is even simpler if you have [GitHub Desktop](https://desktop.github.com/) installed.

Pull the content of the [server](https://github.com/OpenPhysicsNotes/openphysicsnotes-server) and the [content](https://github.com/OpenPhysicsNotes/openphysicsnotes-content) repositories into two adjacent folders, you will end up with something like this:

```
├─ openphysicsnotes-server/
|   └─ ...
└─ openphysicsnotes-content
    └─ ...
```

## Install the dependencies

Open a terminal in the `openphysicsnotes-server` folder and run `npm install`. This will install all the dependencies of the server.

## Run the server

Run `npm start` in the `openphysicsnotes-server` folder to start the server. It will automatically rebuild the website when you make changes to the content.

On the terminal, the local address of the website will be displayed, usually it is [`http://localhost:8080/`](http://localhost:8080/), you can now open it on your favorite browser.

::: warning
if no error is displayed in the terminal, but the website is loaded by the browser, to change the port, you can use the `PORT` environment variable by writing a `.env` file (see [`example.env`](https://github.com/OpenPhysicsNotes/openphysicsnotes-server/blob/main/example.env)) or by specifying it in the terminal, for example: `PORT=3001 npm start`
:::

## Edit the content

Now you can edit the content of the website, for example, you can edit the file `openphysicsnotes-content/docs/quickstart/index.md` and save it, the website will be automatically rebuilt and you will see the changes in your browser.

::: tip
If you want to edit the content of the website using a graphical interface, you can use [Visual Studio Code](https://code.visualstudio.com/), it is a free and open source editor that has a lot of useful features, including a built-in terminal and a built-in Git client.

You can place an instance of Visual Studio Code on the left side of the screen and the browser on the right side, so you can see the changes you make in real time!
#[sample setup](./sample_setup.png)
:::


## Commit your changes

When you are satisfied with your changes, you can commit them to the repository. If you are using GitHub Desktop, you can do this by clicking on the `Commit to main` button, then on the `Push origin` button.

::: note
You are likely not to be a collaborator of the repository, so you will have to fork the repository, make your changes and then create a pull request.

This system also ensures that all the changes are reviewed before being merged into the main branch. Note that we do not do any censorship on the content, but we do not want to publish content that is not well written or that is not relevant to the website please follow the [contribution guidelines](../contributing).
:::

:::: warning
Any content that is "bigger" than "a small image" and/or it is not easily versionable (for example, a video or a pdf) should be uploaded using our custom [Drive](#) application.

::: warning
This might change in the future, but for now, this is the best solution we have found to avoid relying on the [LFS system](https://git-lfs.github.com/) of Git where the resources are limited.
:::
::::

## Get in touch with anyone

If you have any question, you want to partecipate to some discussion or you just want to say hi, you can join our [Matrix Room](https://matrix.to/#/#openphysicsnotes:matrix.org) :hugs:.

If you want to have a more formal discussion, you can use the [discussion](https://github.com/OpenPhysicsNotes/openphysicsnotes-content/discussions) section of the repository. If you want to report a bug or suggest a new feature, you can open an [issue](https://github.com/OpenPhysicsNotes/openphysicsnotes-content/issues) on the repository.

## Make this website Great! :smile:

Thank you for your interest in this project, we hope you will enjoy it and that you will contribute to it! :heart:
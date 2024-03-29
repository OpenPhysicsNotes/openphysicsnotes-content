---
# At the beginning of articles, you can use
# a meta section, written in YAML, to specify some
# metadata.
# This section is delimited by three dashes: "---"
# and must be placed at the exact beginning of the file.

# the title page, you should specify this
title: Open Physics Notes

# TODO use ?!?!?!?!?
#slug: home

# the page subject (optional)
subject: open physics notes

# the description of the page (optional)
description: OpenPhysicsNotes, an open source physics notes collection

# TODO
# (optional)
#class: article

# use this to specify the language of the content
# default (i.e. if you leave it empty) is english ("en")
language: en

# some page keywords (optional)
keywords: [
  open physics notes,
  OpenPhysicsNotes,
  open source,
  physics,
  math,
  notes,
]

# use this to list some related articles or pages
# (optional)
related_articles:
    # note: you can use both "url" and "href", they have the same effect
    - title: Cheatsheet
      url: ./cheatsheet/
    - title: Quantum Mechanics
      href: ./study_plans/df.unipi/courses/QM

# use this to change the default favicon image
#favicon: /logo.png

# you cna use "image" to specify a page image that will be used by socials and search engines
# (optional)
#image: /logo.png

# OpenGraph related:
# - you can use "og:title", "og:image", etc. to specify OpenGraph related data, see example below "other meta tags"
# - some meta tags are automatically generated from other page data, for example,
#  "og:title" is generated from "title", "og:description" is generated from "description" and "og:image" is generated from "image"
# - see https://ogp.me/ and https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML?retiredLocale=it
# the same applies to other types of social, for exaple "twitter:title" is generated from "title" and "twitter:description" is generated from "description"

# other meta tags (optional)
#meta:
#  "og:pippo": "pluto"

# see:
# https://www.w3schools.com/tags/att_meta_http_equiv.asp
# https://stackoverflow.com/questions/36333978/error-permission-denied-to-access-property-document
# additional_head_content: <META HTTP-EQUIV="Access-Control-Allow-Origin" CONTENT="http://paolini.github.io">
---

![aaa](/drive/blob/now/b.png)
`![cool-image](/drive/blob/now/b.png)`{.language-md}

<iframe style="width:100%; height:20em;" src="/drive/blob/now/study_plans/df.unipi/courses/AQM/lecture_notes/prof_alessandro_vichi/PIQM_lecture_notes.pdf"></iframe>

`<iframe style="width:100%; height:20em;" src="/drive/blob/now/study_plans/df.unipi/courses/AQM/lecture_notes/prof_alessandro_vichi/PIQM_lecture_notes.pdf"></iframe>`{.language-html}

<details>
<summary>
Bolle di sapone
</summary>
<iframe style="width:100%; height:20em;" src="https://paolini.github.io/jsbubble/" id="bubble-iframe"></iframe>
</details>
<script>
  console.log("ciao");
  /**
 * @type {HTMLIFrameElement | null}
 */
let iframe = document.getElementById('bubble-iframe');
console.log(iframe)
iframe.onload = () => {
  console.log("iframe loaded");
	/**
	 * @type {HTMLCanvasElement | null}
	 */
	let canvas = iframe.contentWindow.document.getElementById("canvas");
  console.log(canvas)
  console.log(iframe.contentWindow.document.body.innerHTML)
	if (canvas) {
		let ratio = canvas.width / canvas.height;
		// 100% width, keep ratio
		canvas.style.width = "100%";
		canvas.style.aspectRatio = ratio;
    console.log("Done");
	}
}
iframe.contentWindow.onload();
</script>

<iframe src="/drive/blob/now/tsconfig.json" width="100%" style="box-sizing: border-box; background:white;"></iframe>

[tsconfig.json](/drive/blob/now/tsconfig.json)

# Open Physics Notes

![a](./img/logo.png)

> An open source physics notes collection.

## Aims

This project is aimed to provide a common way of **sharing notes**, *lessons* and *exercises* for **physics**, **math** or any **other** discipline.

::: warning
In the future, other websites like this could be created for different disciplines, either with other names and/or administrated by different people. For example `math.*.org`, `openpathsnotes.org`, `philosophy.*.org`, etc.
:::

Out there there are a lots of students managed shared folders with free notes, pdf and other awesome content :hugs:. For example, at UniPi we have:
 - [studentifisicapisa.altervista.org](http://studentifisicapisa.altervista.org/cartella-mega/?doing_wp_cron=1652290811.6795101165771484375000)
 - [Mega Folder](https://mega.nz/#F!uJsACb7Z!CgzObPGHkau7CNd3LcKjOw)
 - other internal drives with not-so-legal content i cannot post

So we came with the idea of a unified place to share content. Not by writing separate PDFs (hard to collaborate with) but a more dynamic website so that it is easier to collaborate, create notes for a courses, make alternative note courses it you don't like the existing ones, etc.  
We will also provide a simple Mega/Drive-like sharing system for additional content and large files so that Mega folders would not be needed anymore.

<!-- TODO sharing system -->

Note that this website **is not** a *encyclopedia*, use [WikipediA](wikipedia.org) for that. Anyway we hope to add a wikipedia style app to organize theorems and useful equations in the future!

## Study Plans

[study plans](./study_plans/)

## Work in progress

## Contributing

See our [GitHub repository](https://github.com/OpenPhysicsNotes/openphysicsnotes).

Different ways to contribute:
 - **edit a page**: you can edit a page on our github repository or you can follow the [edit link](#edit-link) at the bottom of the page
 - **add new pages/content** in the same way
 - **open an issue** on our repo for questions, suggestions,or report problems
 - use **GitHub Discussions** for more unrestricted discussions
 - let us know if you want to **open a similar website** so that we can collaborate
 - **[donate](#donating) us** so that we can maintain this project

a ciao a tutti quanti

### donating

Running the server has some 

https://www.paypal.com/paypalme/LucaCiucci99

<lc-figure>
<img src="./img/logo.png" alt="logo" slot="graphics" />
<span slot="caption">caption</span>
</lc-figure>

aaa
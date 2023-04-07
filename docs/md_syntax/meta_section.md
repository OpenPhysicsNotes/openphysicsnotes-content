---
title: Meta Section @ Documentation @ Open Physics Notes
---

# Meta Section

Whe writing a markdown page, you don't have all the control you would have using a plain HTML page. [openphysicsnotes.org](//openphysicsnotes.org) provides a simple way to add additional information to the page, for example the **title**, **keyword**s, **author**s, etc. .

To archive this, we use a [YAML](//yaml.org) formatted **meta section**, that may look something like:

<pre class="skip-1st-line"><code>
---
<code-attribute>title</code-attribute>: <code-string>"Short Title"</code-string>
<code-attribute>subject</code-attribute>: <code-string>"example page"</code-string>
<code-attribute>related_articles</code-attribute>:
    - <code-attribute>title</code-attribute>: <code-string>Another article</code-string>
      <code-attribute>url</code-attribute>: <code-string>./article_1.md</code-string>
    - <code-attribute>title</code-attribute>: <code-string>Another article 2</code-string>
      <code-attribute>url</code-attribute>: <code-string>./article_2.md</code-string>
---

<code-comment>&lt;!-- From now on, you can use the usual markdown syntax --&gt;</code-comment>

<span class="hljs-section"># This is a title</span>

The rest of the article...
</code></pre>

This is a very common solution, for example the [MDN](//developer.mozilla.org/en) is build in this way!

## Options:

### `title`
This is the string displayed on the top of the browser tab, it is equivalent to: `<title>...</title>`{.language-html} in HTML.

```yaml
title: your title here
```

### `subject`
The page subject

```yaml
subject: your subject here
```

::: todo
Implement
:::

### `description`
The description of the page

```yaml
description: OpenPhysicsNotes, an open source physics notes collection
```

### `language`
This is the language of the article, it is used to specify the language of the article, for example, if you are writing an article in Italian, you should use `it` as language.

```yaml
# use this to specify the language of the content
# default (i.e. if you leave it empty) is english ("en")
language: en
```

### `keywords`
A list of keywords, used by search engines to index the page.

```yaml
# some page keywords (optional)
keywords: [
  open physics notes,
  OpenPhysicsNotes,
  open source,
  physics,
  math,
  notes,
]
```

### `related_articles`
A list of related articles, used to link to other articles.

```yaml
# use this to list some related articles or pages
# (optional)
related_articles:
    # note: you can use both "url" and "href", they have the same effect
    - title: Cheatsheet
      url: ./cheatsheet/
    - title: Quantum Mechanics
      href: ./QM/
```

### `author`
The author of the page

```yaml
# use this to specify the author of the page
# (optional)
author: Your Name
```

### `date`
The date of the page

```yaml
# use this to specify the date of the page
# (optional)
date: 2020-01-01
```

### `last_modified`
The last modified date of the page

```yaml
# use this to specify the last modified date of the page
# (optional)
last_modified: 2020-01-01
```

::: todo
`toc` table of content?
:::

### `favicon`
The favicon of the page

```yaml
# use this to change the default favicon image
favicon: /logo.png
```

### `image`

```yaml
# you cna use "image" to specify a page image that will be used by socials and search engines
# (optional)
image: /logo.png
```

### Other OpenGraph related

```yaml
# OpenGraph related:
# - you can use "og:title", "og:image", etc. to specify OpenGraph related data, see example below "other meta tags"
# - some meta tags are automatically generated from other page data, for example,
#  "og:title" is generated from "title", "og:description" is generated from "description" and "og:image" is generated from "image"
# - see https://ogp.me/ and https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML?retiredLocale=it
# the same applies to other types of social, for exaple "twitter:title" is generated from "title" and "twitter:description" is generated from "description"
```

::: todo
suggested by copilot:
````md
### Other meta tags

```yaml
# you can use "meta" to specify other meta tags, for example:
meta:
    - name: "viewport"
      content: "width=device-width, initial-scale=1.0"
    - name: "theme-color"
      content: "#ffffff"
```
````
:::

### `additional_head_content`

```yaml
additional_head_content: <META HTTP-EQUIV="Access-Control-Allow-Origin" CONTENT="http://paolini.github.io">
```

::: todo
see:  
https://www.w3schools.com/tags/att_meta_http_equiv.asp

https://stackoverflow.com/questions/36333978/

error-permission-denied-to-access-property-document
:::
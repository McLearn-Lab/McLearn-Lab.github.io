---
title: "News"
layout: textlay
excerpt: "Allan Lab at Leiden University."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>
    <span style="font-size: 1.2em;"><em><b>{{ article.date }}</b></em></span><br>
    {{ article.headline }}{% if article.link %}<br><a href="{{article.link}}">{{article.link_text}}</a>{% endif %}
    {% if article.link2 %}<a href="{{article.link2}}">{{article.link2_text}}</a>{% endif %}
</p>
{% endfor %}

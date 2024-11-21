# McLearn Lab website

This is the website of our academic research group at CMU

We used the Allan Lab template to make this.
https://www.allanlab.org/aboutwebsite.html

# Editing instructions

# 1: Clone repository 
First, you will need to clone this repository. 
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

# 2: Install dependencies
todo

# 3: Launch development server 
`jekyll serve` 

click link in terminal

# 4: Edit
Edit _data/* to edit the content and corresponding images (todo flesh out these instructions)
Refresh to see changes

# 5: Package for deployment
`jekyll build`
packages your site into _site with correct links

# 6: Deploy
`scp -r _site/* YOUR_USER@linux.gp.cs.cmu.edu:../bmclaren/www/mclearnlab`

& enter your password

Securely copies (scp) recursively (-r) packaged site (_site/*) to the mcLearnlab directory in Bruce's cs.cmu space (YOUR_USER@linux.gp.cs.cmu.edu:../bmclaren/www/mclearnlab)

# 7 update github

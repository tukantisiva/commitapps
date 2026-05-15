const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const contentDir = path.join(__dirname, '..', 'src', 'content', 'blog');

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function getTodayDate() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

console.log("🚀 Commitapps Blog Post Generator\n");

rl.question('Post Title: ', (title) => {
  if (!title) {
    console.error('❌ Title is required.');
    process.exit(1);
  }

  const slug = generateSlug(title);
  const date = getTodayDate();
  
  rl.question(`Author (Default: Siva): `, (authorInput) => {
    const author = authorInput.trim() || 'Siva';
    
rl.question('Excerpt (Short description): ', (excerpt) => {
      rl.question('Is this a draft? (y/N): ', (isDraftInput) => {
        const isDraft = isDraftInput.toLowerCase() === 'y';
        
        const content = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
author: "${author}"
draft: ${isDraft}
---

Write your Markdown/MDX content here...

## Section Title

Here is a list:
- Point one
- Point two

\`\`\`tsx
// Code blocks are automatically formatted beautifully!
console.log("Hello Commitapps");
\`\`\`
`;

        const filePath = path.join(contentDir, `${slug}.mdx`);
        
        if (fs.existsSync(filePath)) {
          console.error(`\n❌ Error: A post with slug "${slug}" already exists!`);
          process.exit(1);
        }

        fs.writeFileSync(filePath, content, 'utf-8');
        
        console.log(`\n✅ Success! New post created at:`);
        console.log(`📂 src/content/blog/${slug}.mdx`);
        if (isDraft) {
          console.log(`⚠️ This post is marked as a DRAFT. It will only be visible when running 'npm run dev' locally.`);
        }
        console.log(`\nStart writing and run 'npm run dev' to preview.`);
        
        process.exit(0);
      });
    });
  });
});

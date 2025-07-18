import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string) {
  try {
    const files = fs.readdirSync(dir);
    return files.filter((file) => {
      const filePath = path.join(dir, file);
      return path.extname(file) === ".mdx" && fs.existsSync(filePath);
    });
  } catch (error) {
    console.warn(`Error reading directory ${dir}:`, error);
    return [];
  }
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  const posts = [];
  
  console.log('Found MDX files:', mdxFiles); // Debug log
  
  for (const file of mdxFiles) {
    try {
      let slug = path.basename(file, path.extname(file));
      console.log('Processing file:', file, 'with slug:', slug); // Debug log
      let { metadata, source } = await getPost(slug);
      posts.push({
        metadata,
        slug,
        source,
      });
    } catch (error) {
      console.warn(`Failed to load blog post ${file}:`, error);
      // Skip this file and continue with others
    }
  }
  
  return posts;
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

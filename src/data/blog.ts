import fs from "fs";
import matter from "gray-matter";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type BlogPost = {
  metadata: Metadata;
  slug: string;
  source: string;
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
  // Simple markdown to HTML conversion for now
  return markdown.replace(/\n/g, '<br>');
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const content = await markdownToHTML(rawContent);
  
  // Type assertion for metadata
  const metadata: Metadata = {
    title: data.title || "",
    publishedAt: data.publishedAt || "",
    summary: data.summary || "",
    image: data.image,
  };
  
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string): Promise<BlogPost[]> {
  let mdxFiles = getMDXFiles(dir);
  const posts: BlogPost[] = [];
  
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

export async function getBlogPosts(): Promise<BlogPost[]> {
  return getAllPosts(path.join(process.cwd(), "content"));
}

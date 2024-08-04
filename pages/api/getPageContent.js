import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  // Extract the slug from the query parameters
  const { slug } = req.query;

  // Construct the path to the Markdown file
  const filePath = path.join(process.cwd(), 'events', `${slug}.md`);

  try {
    // Read the Markdown file content
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse the file content using gray-matter
    const matterResult = matter(fileContent);

    // Send the parsed content back to the client
    res.status(200).json({ content: matterResult.content });
  } catch (error) {
    // Handle errors, e.g., file not found
    res.status(500).json({ error: 'File not found' });
  }
}
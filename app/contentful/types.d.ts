import { Asset, RichTextContent } from "contentful";

export interface ContentfulBlogPost {
  blogPostTitle: string;
  blogPostSplash: Asset;
  blogPostSlug: string;
  blogPostExcerpt: string;
  bodyRichText: RichTextContent;
  isVisibleInProduction: boolean;
  blogPostKeywords: string;
}

export interface ContentfulQuote {
  quoteDescription: string;
  author: string;
}

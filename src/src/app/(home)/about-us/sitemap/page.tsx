import React from 'react';
import Sitemaps from '../../../../../public/assets/sitemaps';
import Link from 'next/link';

// Define the types for the Sitemap items
interface SitemapItem {
  title: string;
  children?: SitemapItem[];
}

const renderList = (items: SitemapItem[]) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={index} className="list-group-item">
          <Link href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
            {item.title}
          </Link>
          {item.children && item.children.length > 0 && (
            <div className="ms-4">{renderList(item.children)}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

const Page = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Sitemap</h2>
      {renderList(Sitemaps as SitemapItem[])}
    </div>
  );
};

export default Page;

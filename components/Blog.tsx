
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';

export const Blog: React.FC = () => {
  return (
    <div className="bg-architectural min-h-screen">
      <section className="bg-gradient-dark pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 blueprint-overlay opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-montserrat font-black text-6xl text-white mb-6">Blog & Resources</h1>
          <p className="text-steel-grey text-lg max-w-2xl mx-auto">Insights into the future of structural engineering and construction tech.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all group border border-blueprint overflow-hidden flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-safety-orange font-roboto font-bold text-[10px] uppercase tracking-widest">{post.category}</span>
                    <span className="text-steel-grey text-[10px]">{post.date}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-obsidian mb-4 group-hover:text-safety-orange transition-colors">{post.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed mb-6 opacity-75">{post.desc}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-blueprint mt-auto">
                    <div className="flex items-center gap-2 text-steel-grey text-xs">
                      <Clock className="w-4 h-4" /> {post.readTime}
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-safety-orange font-roboto font-black text-xs uppercase tracking-widest flex items-center gap-1 group/link">
                      Read More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


import { Frame, Ruler, FileText, Home, PenTool, Building2, Shield } from 'lucide-react';

export interface Service {
  id: string;
  number: string;
  tag: string;
  title: string;
  category: 'detailing' | 'residential' | 'commercial';
  desc: string;
  longContent: string;
  icon: any;
  features: string[];
  image: string;
  specs: Record<string, string>;
  highlights: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'steel-timber-framing',
    number: '01',
    tag: 'Core Service',
    category: 'detailing',
    title: 'Steel & Timber Framing',
    desc: 'Build-ready shop drawings using Vertex BD for residential and commercial framing projects.',
    longContent: 'Our specialized detailing team utilizes Vertex BD to create millimetric-precise framing models. We focus on ensuring that every stud, track, and nogging is perfectly placed to facilitate rapid on-site assembly.',
    icon: Frame,
    features: ['3D Framing Models', 'CNC-Ready Data', 'Material Schedules', 'Assembly Sheets'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    highlights: ['+/- 0.5mm precision', 'Direct CNC integration', 'Full material take-offs'],
    specs: { 'Software': 'Vertex BD', 'Standards': 'AS/NZS 4600', 'Turnaround': '3-5 Days' }
  },
  {
    id: 'structural-steel-detailing',
    number: '02',
    tag: 'Core Service',
    category: 'detailing',
    title: 'Structural Steel',
    desc: 'Complex connection detailing and GA drawings for industrial and commercial steel structures.',
    longContent: 'We provide comprehensive structural steel detailing services, covering everything from portal frames to complex high-rise connections.',
    icon: Ruler,
    features: ['Connection Details', 'Welding Specs', 'Shop Sheets', 'BOM'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
    highlights: ['Clash detection', 'Optimized weld design', 'Sequence planning'],
    specs: { 'Software': 'Tekla / AutoCAD', 'Standards': 'AS 4100', 'Deliverables': 'Shop Drawings' }
  },
  {
    id: 'full-documentation',
    number: '03',
    tag: 'Core Service',
    category: 'detailing',
    title: 'Full Documentation',
    desc: 'End-to-end documentation sets for council approvals, site teams, and fabrication.',
    longContent: 'Our full technical packages bridge the gap between architectural concept and on-site reality.',
    icon: FileText,
    features: ['Council Compliance', 'Installation Manuals', 'Markups', 'As-Built Docs'],
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    highlights: ['98% approval rate', 'Integrated BIM', 'Clear site guides'],
    specs: { 'Compliance': 'Local Council Ready', 'Accuracy': '100%', 'Service': 'Full Lifecycle' }
  }
];

export const PROJECTS = [
  {
    id: 1,
    category: 'residential',
    title: 'Modern Family Home - Melbourne',
    meta: 'Steel & Timber Framing | 2024',
    desc: 'Complete structural steel and timber framing documentation for a 4-bedroom modern home.',
    specs: ['Workshop drawings: 45 sheets', 'Truss layouts: 12 configs', 'Software: Vertex BD'],
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Childcare Centre - Sydney',
    meta: 'Structural Steel Detailing | 2023',
    desc: 'Detailed structural steel documentation for a 2-story facility including connection details.',
    specs: ['Steel tonnage: 45t', 'Connections: 120+', 'Software: Endurocadd'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    category: 'steel',
    title: 'Industrial Warehouse - Adelaide',
    meta: 'Structural Steel | 2023',
    desc: 'Heavy industrial steel detailing for a 5,000 sqm logistics warehouse.',
    specs: ['Tonnage: 120t', 'Compliance: AS 4100', 'Complexity: High'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800'
  }
];

export const BLOG_POSTS = [
  {
    id: 'timber-vs-steel-framing',
    category: 'Industry Insights',
    date: 'Feb 10, 2026',
    readTime: '7 min read',
    title: 'Timber vs. Steel Framing: Which Is Right?',
    desc: 'A detailed comparison covering cost, durability, and performance to help you decide.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    tags: ['Framing', 'Timber', 'Steel']
  },
  {
    id: 'prefabrication',
    category: 'Trends',
    date: 'Feb 03, 2026',
    readTime: '6 min read',
    title: 'The Future of Prefabrication',
    desc: 'How off-site manufacturing is transforming construction timelines and quality.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800',
    tags: ['Prefab', 'Innovation']
  }
];

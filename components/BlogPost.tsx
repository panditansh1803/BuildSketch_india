import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ChevronLeft, Share2, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

interface PostContent {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  heroImage: string;
  authorInitials: string;
  authorName: string;
  authorRole: string;
  tags: string[];
  toc: { id: string; label: string }[];
  content: React.ReactNode;
}

const allPosts: Record<string, PostContent> = {

  /* ─────────────────────────────────────────────────────────
     1. TIMBER VS STEEL FRAMING
  ───────────────────────────────────────────────────────── */
  'timber-vs-steel-framing': {
    id: 'timber-vs-steel-framing',
    title: 'Timber vs. Steel Framing: Which Is Right for Your Project?',
    category: 'Industry Insights',
    date: 'February 10, 2026',
    readTime: '7 min read',
    heroImage: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1600',
    authorInitials: 'BS',
    authorName: 'BuildSketch India',
    authorRole: 'Senior Designer',
    tags: ['Framing', 'Timber', 'Steel'],
    toc: [
      { id: 'intro', label: 'Introduction' },
      { id: 'timber', label: 'Timber Framing' },
      { id: 'steel', label: 'Steel Framing' },
      { id: 'comparison', label: 'Side-by-Side Comparison' },
      { id: 'verdict', label: 'Which Should You Choose?' },
    ],
    content: (
      <>
        <h2 id="intro">Introduction</h2>
        <p>
          Choosing between timber and steel framing is one of the most consequential decisions made at the start of any construction project. Both materials have proven track records, loyal advocates, and specific conditions under which they shine. Understanding the trade-offs between them — in terms of cost, structural performance, construction speed, sustainability, and maintenance — is essential for designers, builders, and project owners alike.
        </p>
        <p>
          At BuildSketch India, we work with both timber and steel framing systems daily. This guide draws on real-world project experience to give you a balanced, honest comparison.
        </p>

        <h2 id="timber">Timber Framing: The Traditional Choice</h2>
        <p>
          Timber has been the backbone of residential construction for centuries. In modern building, engineered timber products like LVL (Laminated Veneer Lumber), GLB (Glulam Beams), and prefabricated timber wall frames have significantly improved its performance profile.
        </p>
        <h3>Advantages of Timber Framing</h3>
        <ul>
          <li><strong>Cost-effective for residential builds:</strong> Timber is generally cheaper to source and fabricate for standard residential projects, particularly single and double-storey homes.</li>
          <li><strong>Ease of on-site modification:</strong> Carpenters can cut, adjust, and modify timber frames on site with basic tools, making it flexible for complex or irregular designs.</li>
          <li><strong>Thermal performance:</strong> Timber is a natural insulator. Timber-framed walls require less supplementary insulation to meet energy efficiency standards.</li>
          <li><strong>Sustainability:</strong> Responsibly sourced timber is one of the few truly renewable structural materials. Its carbon sequestration properties make it attractive for green building projects.</li>
          <li><strong>Lightweight:</strong> Timber reduces dead loads on foundations, which can lower footing costs in straightforward residential applications.</li>
        </ul>
        <h3>Limitations of Timber Framing</h3>
        <ul>
          <li>Susceptible to moisture, termite damage, and rot if not properly treated and detailed.</li>
          <li>Dimensional inconsistency in natural timber can cause issues with precision detailing.</li>
          <li>Limited in spanning capability compared to steel without additional support members.</li>
          <li>Fire performance requires specific treatment or cladding to meet building codes.</li>
        </ul>

        <div className="bg-blueprint p-8 rounded-3xl my-10 border-l-8 border-safety-orange">
          <strong className="block text-obsidian text-lg mb-2">Key Insight:</strong>
          <p className="m-0 text-sm">For standard residential builds up to two storeys, timber framing typically delivers the best cost-to-performance ratio. Beyond that, or in cyclonic and high-wind regions, steel becomes increasingly competitive.</p>
        </div>

        <h2 id="steel">Steel Framing: The Modern Performer</h2>
        <p>
          Cold-formed steel (CFS) framing has grown rapidly as a preferred material for residential and light commercial construction. Its precision, durability, and design flexibility make it a compelling alternative to timber in many scenarios.
        </p>
        <h3>Advantages of Steel Framing</h3>
        <ul>
          <li><strong>Dimensional precision:</strong> Steel members are manufactured to exact tolerances, making them ideal for modular and prefabricated construction where every millimetre counts.</li>
          <li><strong>Strength-to-weight ratio:</strong> Steel offers superior structural performance for its weight, enabling longer spans and open-plan layouts without intermediate columns.</li>
          <li><strong>Termite and rot resistance:</strong> Steel is impervious to termites, fungal decay, and moisture-related deterioration — a significant advantage in tropical and coastal regions.</li>
          <li><strong>Cyclonic performance:</strong> In high-wind regions, steel framing systems are engineered to resist extreme loads and are often the preferred or mandated solution.</li>
          <li><strong>Design flexibility:</strong> Complex roof geometries, large openings, and irregular layouts are all more easily achieved with steel framing.</li>
          <li><strong>Fire resistance:</strong> When properly detailed and protected, steel performs well in fire scenarios and can be rated to meet commercial fire codes.</li>
        </ul>
        <h3>Limitations of Steel Framing</h3>
        <ul>
          <li>Higher upfront material cost compared to timber in standard residential applications.</li>
          <li>Requires specialist trades for installation — not all carpenters are trained in steel framing systems.</li>
          <li>Thermal bridging through steel studs can reduce wall insulation performance if not carefully detailed.</li>
          <li>Requires corrosion protection in highly corrosive environments.</li>
        </ul>

        <h2 id="comparison">Side-by-Side Comparison</h2>
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-obsidian text-white">
                <th className="p-4 text-left font-montserrat font-bold text-xs uppercase tracking-widest">Factor</th>
                <th className="p-4 text-left font-montserrat font-bold text-xs uppercase tracking-widest">Timber</th>
                <th className="p-4 text-left font-montserrat font-bold text-xs uppercase tracking-widest">Steel</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Material Cost', 'Lower', 'Higher'],
                ['Construction Speed', 'Moderate', 'Fast'],
                ['Precision', 'Moderate', 'High'],
                ['Spanning Capability', 'Limited', 'Excellent'],
                ['Termite Resistance', 'Requires Treatment', 'Naturally Resistant'],
                ['Thermal Performance', 'Good', 'Needs Detailing'],
                ['Sustainability', 'Renewable', 'Recyclable'],
                ['Design Flexibility', 'Good', 'Excellent'],
              ].map(([factor, timber, steel], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blueprint/50'}>
                  <td className="p-4 font-bold text-obsidian border-b border-blueprint">{factor}</td>
                  <td className="p-4 text-charcoal border-b border-blueprint">{timber}</td>
                  <td className="p-4 text-charcoal border-b border-blueprint">{steel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="verdict">Which Should You Choose?</h2>
        <p>
          The answer depends entirely on your project's specific requirements. Here is a practical guide:
        </p>
        <ul>
          <li><strong>Choose timber</strong> if you are building a standard residential home in a benign climate, have a tighter budget, and prefer traditional construction methods.</li>
          <li><strong>Choose steel</strong> if your project is in a cyclonic or coastal region, requires long spans or complex geometry, demands high precision for prefabrication, or is in a termite-prone area.</li>
          <li><strong>Consider a hybrid approach</strong> — many of the best modern builds use steel for primary structure and specific load-bearing elements, while using timber for internal walls and roof framing where appropriate.</li>
        </ul>
        <p>
          At BuildSketch India, our designers are experienced in detailing both systems and can advise on the most efficient structural solution for your specific brief.
        </p>
      </>
    )
  },

  /* ─────────────────────────────────────────────────────────
     2. PREFABRICATION
  ───────────────────────────────────────────────────────── */
  'prefabrication': {
    id: 'prefabrication',
    title: 'Prefabrication in Modern Construction: The Future Is Already Here',
    category: 'Trends & Innovation',
    date: 'February 3, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1600',
    authorInitials: 'BS',
    authorName: 'BuildSketch India',
    authorRole: 'Senior Designer',
    tags: ['Prefab', 'Innovation', 'Modular'],
    toc: [
      { id: 'intro', label: 'What Is Prefabrication?' },
      { id: 'benefits', label: 'Key Benefits' },
      { id: 'detailing', label: 'Role of Detailing' },
      { id: 'types', label: 'Types of Prefab Systems' },
      { id: 'future', label: 'The Future in India' },
    ],
    content: (
      <>
        <h2 id="intro">What Is Prefabrication?</h2>
        <p>
          Prefabrication — or prefab — refers to the practice of manufacturing structural components off-site in a controlled factory environment, then transporting them to the construction site for rapid assembly. This method contrasts with traditional stick-built construction where materials are cut and assembled entirely on site.
        </p>
        <p>
          What was once considered a niche or low-cost approach is now recognised globally as one of the most efficient methods of delivering high-quality construction. From residential modular homes to large-scale commercial and industrial buildings, prefabrication is redefining what is possible in construction.
        </p>

        <h2 id="benefits">Key Benefits of Prefabrication</h2>
        <h3>1. Dramatically Reduced Construction Time</h3>
        <p>
          Because prefabricated components are manufactured while site preparation and foundation work occurs simultaneously, overall project timelines can be reduced by 30 to 50 percent compared to traditional construction. For commercial developments, this translates directly into earlier return on investment.
        </p>
        <h3>2. Higher Quality and Consistency</h3>
        <p>
          Factory-controlled manufacturing eliminates the variability introduced by on-site weather conditions, variable trade quality, and material handling. Every component is produced to exact specifications using precision machinery, resulting in consistently higher build quality.
        </p>
        <h3>3. Reduced Material Waste</h3>
        <p>
          Traditional construction generates significant material waste from on-site cutting, off-cuts, and packaging. Prefabrication uses optimised cutting schedules generated directly from detailed structural models, reducing waste by up to 80 percent in some applications.
        </p>
        <h3>4. Improved Site Safety</h3>
        <p>
          With less work happening at height and in exposed conditions on site, prefabrication significantly reduces the risk of workplace accidents. The controlled factory environment is far safer than an active construction site.
        </p>
        <h3>5. Cost Predictability</h3>
        <p>
          Factory manufacturing enables accurate cost estimation and significantly reduces the risk of cost blowouts from on-site delays, rework, and material wastage.
        </p>

        <div className="bg-blueprint p-8 rounded-3xl my-10 border-l-8 border-safety-orange">
          <strong className="block text-obsidian text-lg mb-2">Did You Know?</strong>
          <p className="m-0 text-sm">Prefabricated buildings can be assembled on site up to 50% faster than traditional builds, significantly reducing labour costs and site disruption in urban environments.</p>
        </div>

        <h2 id="detailing">The Critical Role of Structural Detailing</h2>
        <p>
          Prefabrication is only as good as the detailing behind it. Because components are manufactured remotely and must fit together precisely on site without modification, the quality of structural documentation is absolutely critical.
        </p>
        <p>
          This is where specialist structural detailing teams like BuildSketch India become essential. Every panel, truss, cassette, and connection must be modelled in 3D, checked for clashes and tolerance, and output as CNC-ready manufacturing data before a single component is produced. Any error in the documentation propagates directly into manufactured components — with costly consequences.
        </p>
        <p>
          Using tools like <strong>Vertex BD</strong> and <strong>MiTek Sapphire</strong>, our designers create complete prefabrication packages that include wall frame panels, floor cassettes, roof trusses, and connection details — all coordinated in a single 3D environment to eliminate clashes and ensure perfect site assembly.
        </p>

        <h2 id="types">Types of Prefabrication Systems</h2>
        <ul>
          <li><strong>Panelised Systems:</strong> Wall frames, floor cassettes, and roof panels manufactured as flat components and assembled on site. The most common form of prefabrication in residential construction.</li>
          <li><strong>Modular/Volumetric Construction:</strong> Three-dimensional modules — complete rooms or building sections — manufactured off-site and craned into position. Used extensively in hotels, student accommodation, and healthcare.</li>
          <li><strong>Pre-cast Concrete:</strong> Structural concrete elements including walls, columns, beams, and slabs manufactured in a precast yard.</li>
          <li><strong>Structural Steel Kits:</strong> Portal frames, mezzanines, and shed kits manufactured from CNC-cut steel and bolted together on site.</li>
        </ul>

        <h2 id="future">The Future of Prefabrication in India</h2>
        <p>
          India is at an inflection point. With a rapidly growing urban population, an acute housing shortage, and ambitious infrastructure targets under initiatives like PM Awas Yojana and Smart Cities Mission, the construction industry is under immense pressure to deliver more, faster, and at lower cost.
        </p>
        <p>
          Prefabrication addresses all three of these challenges simultaneously. Government policy is increasingly supportive, with provisions for modular construction now embedded in key procurement frameworks. As awareness of the benefits grows among developers and builders, adoption is accelerating — particularly in industrial, logistics, and affordable housing sectors.
        </p>
        <p>
          BuildSketch India is positioned at the forefront of this transformation — providing the precision detailing documentation that makes prefabrication possible at scale.
        </p>
      </>
    )
  },

  /* ─────────────────────────────────────────────────────────
     3. VERTEX BD STEEL FRAMING
  ───────────────────────────────────────────────────────── */
  'vertex-bd-steel-framing': {
    id: 'vertex-bd-steel-framing',
    title: 'Vertex BD for Steel Framing: A Complete Overview',
    category: 'Software & Tools',
    date: 'January 25, 2026',
    readTime: '5 min read',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=1600',
    authorInitials: 'BS',
    authorName: 'BuildSketch India',
    authorRole: 'Senior Designer',
    tags: ['Vertex BD', 'Software', 'Steel'],
    toc: [
      { id: 'intro', label: 'What Is Vertex BD?' },
      { id: 'capabilities', label: 'Steel Framing Capabilities' },
      { id: 'workflow', label: 'Typical Workflow' },
      { id: 'outputs', label: 'Outputs & Deliverables' },
      { id: 'why', label: 'Why We Use Vertex BD' },
    ],
    content: (
      <>
        <h2 id="intro">What Is Vertex BD?</h2>
        <p>
          Vertex BD is a purpose-built Building Designer software developed by Vertex Systems, widely regarded as one of the most powerful tools available for light-gauge steel and timber framing design and documentation. Unlike general-purpose CAD software, Vertex BD is built from the ground up to handle the specific requirements of prefabricated framing — from initial design through to CNC-ready manufacturing output.
        </p>
        <p>
          At BuildSketch India, Vertex BD is one of our primary platforms for residential and light commercial framing projects. Its combination of intelligent 3D modelling, automated detailing, and direct CNC integration makes it uniquely suited to the demands of modern prefabricated construction.
        </p>

        <h2 id="capabilities">Steel Framing Capabilities in Vertex BD</h2>
        <h3>Intelligent 3D Model Creation</h3>
        <p>
          Vertex BD allows designers to build a complete 3D structural model of a building's framing system — including walls, floors, roofs, and trusses — within a single, coordinated environment. The software understands the geometry of the building and automatically populates framing members according to predefined design rules and spacing requirements.
        </p>
        <h3>Cold-Formed Steel Member Design</h3>
        <p>
          The software includes a comprehensive library of cold-formed steel sections, compliant with international standards. Members are automatically sized and positioned, with the software flagging any members that do not meet structural requirements. This significantly reduces design errors and speeds up the documentation process.
        </p>
        <h3>Automatic Connection and Fastener Detailing</h3>
        <p>
          One of Vertex BD's most powerful features for steel framing is its ability to automatically generate connection details and fastener schedules. Based on the structural model, the software determines appropriate connection types, screw patterns, and hold-down locations — producing detailed, code-compliant connection drawings without manual drafting.
        </p>
        <h3>Clash Detection</h3>
        <p>
          Vertex BD automatically detects clashes between structural members, services, and other building elements. This is particularly valuable in prefabricated construction where clashes discovered on site are extremely costly to resolve.
        </p>

        <div className="bg-blueprint p-8 rounded-3xl my-10 border-l-8 border-safety-orange">
          <strong className="block text-obsidian text-lg mb-2">Designer's Note:</strong>
          <p className="m-0 text-sm">The time saving with Vertex BD over manual CAD drafting is substantial. A wall frame that might take hours to detail manually can be produced in minutes — with far fewer errors and automatic code compliance checks built in.</p>
        </div>

        <h2 id="workflow">Typical Vertex BD Workflow for Steel Framing</h2>
        <ul>
          <li><strong>Step 1 — Import architectural plans:</strong> PDF, DWG, or IFC files are imported as reference geometry.</li>
          <li><strong>Step 2 — Define building zones:</strong> Walls, floors, and roof planes are defined, and the software generates initial framing layouts automatically.</li>
          <li><strong>Step 3 — Refine the model:</strong> Designers review and adjust member spacing, openings, lintels, and connections to suit specific design requirements.</li>
          <li><strong>Step 4 — Structural checks:</strong> Automated structural analysis checks member adequacy against selected design standards.</li>
          <li><strong>Step 5 — Generate outputs:</strong> Shop drawings, material schedules, and CNC data files are generated directly from the model.</li>
        </ul>

        <h2 id="outputs">Outputs and Deliverables</h2>
        <p>
          Vertex BD produces a comprehensive set of deliverables from a single model, including:
        </p>
        <ul>
          <li>Dimensioned wall frame drawings with stud, track, and nogging schedules</li>
          <li>Floor cassette layouts and assembly drawings</li>
          <li>Roof truss layout plans and individual truss details</li>
          <li>Connection and fastener schedules</li>
          <li>Material take-off and bill of materials</li>
          <li>CNC manufacturing files (DXF, DSTV) for automated fabrication</li>
          <li>IFC models for BIM coordination</li>
        </ul>

        <h2 id="why">Why BuildSketch India Uses Vertex BD</h2>
        <p>
          We chose Vertex BD as our primary framing platform because it delivers unmatched speed and accuracy for light-gauge steel framing projects. The automated detailing capabilities allow our designers to focus on design quality rather than repetitive drafting tasks, and the direct CNC output eliminates an entire manual data translation step that was historically a source of errors.
        </p>
        <p>
          The result is faster turnaround times, fewer RFIs during fabrication, and a consistently higher standard of documentation that our clients rely on for error-free manufacturing.
        </p>
      </>
    )
  },

  /* ─────────────────────────────────────────────────────────
     4. WHY ANALYSE ARCHITECTURE PLANS
  ───────────────────────────────────────────────────────── */
  'why-analyse-architecture-plans': {
    id: 'why-analyse-architecture-plans',
    title: 'Why It Is Important to Analyse Architecture Plans Before Detailing',
    category: 'Design & Planning',
    date: 'January 15, 2026',
    readTime: '6 min read',
    heroImage: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600',
    authorInitials: 'BS',
    authorName: 'BuildSketch India',
    authorRole: 'Senior Designer',
    tags: ['Planning', 'Architecture', 'Detailing'],
    toc: [
      { id: 'intro', label: 'Why This Step Matters' },
      { id: 'risks', label: 'Risks of Skipping Analysis' },
      { id: 'what-to-check', label: 'What to Check in Plans' },
      { id: 'process', label: 'Our Analysis Process' },
      { id: 'conclusion', label: 'Conclusion' },
    ],
    content: (
      <>
        <h2 id="intro">Why This Step Matters More Than Most Realise</h2>
        <p>
          In structural detailing, there is a temptation — often driven by tight deadlines and client pressure — to begin drawing as soon as architectural plans arrive. This is one of the most common and costly mistakes made in the detailing workflow.
        </p>
        <p>
          Architectural plans are design documents. They communicate the intended spatial arrangement, aesthetics, and functional layout of a building. They are not — and are not intended to be — structural documents. The gap between what an architect has drawn and what can actually be built structurally is often significant, and it is the job of the structural designer to identify and resolve these discrepancies before a single structural line is drawn.
        </p>
        <p>
          A thorough upfront analysis of architectural plans is not overhead — it is the foundation of efficient, accurate, and conflict-free structural detailing.
        </p>

        <h2 id="risks">The Risks of Skipping Plan Analysis</h2>
        <h3>Rework and Wasted Effort</h3>
        <p>
          Discovering a fundamental conflict between the architectural design and the structural system mid-way through a detailing package means scrapping and redoing work. This is extremely costly in both time and money — and entirely preventable.
        </p>
        <h3>Coordination Failures on Site</h3>
        <p>
          Structural drawings that have not been properly coordinated with architectural plans lead to on-site conflicts — walls that do not align, openings that do not fit, roof lines that cannot be framed as shown. These issues cause construction delays, disputes, and expensive variations.
        </p>
        <h3>Non-Compliance with Building Codes</h3>
        <p>
          Architectural plans may include elements that, when translated into a structural system, do not comply with building codes. Identifying these early — before documentation is completed — allows them to be resolved in the design stage rather than during council assessment or, worse, during construction.
        </p>
        <h3>Client Dissatisfaction</h3>
        <p>
          Nothing damages a professional relationship faster than delivering documentation that requires significant revision because of issues that could have been identified at the outset.
        </p>

        <div className="bg-blueprint p-8 rounded-3xl my-10 border-l-8 border-safety-orange">
          <strong className="block text-obsidian text-lg mb-2">Industry Rule of Thumb:</strong>
          <p className="m-0 text-sm">One hour spent analysing architectural plans before detailing saves an average of five to ten hours of rework later. The upstream investment in plan analysis always pays for itself many times over.</p>
        </div>

        <h2 id="what-to-check">What to Check in Architectural Plans</h2>
        <h3>Dimensional Consistency</h3>
        <p>Check that dimensions add up correctly across all plan views, elevations, and sections. Inconsistent dimensions between drawings are extremely common and must be resolved before structural detailing begins.</p>
        <h3>Load Path Clarity</h3>
        <p>Trace the load path from roof to foundation. Identify how loads from the roof and upper floors transfer through walls, columns, and beams to the foundations. Any breaks or ambiguities in the load path are red flags that need to be resolved with the architect or engineer.</p>
        <h3>Openings and Spans</h3>
        <p>Large openings — for bi-fold doors, large windows, and open-plan living areas — require careful structural consideration. Confirm that appropriate lintels, portal frames, or transfer structures have been anticipated in the architectural design.</p>
        <h3>Roof Geometry</h3>
        <p>Complex roof forms — multiple ridgelines, valleys, dormer windows, and changes in pitch — create challenging framing conditions. Identify these early and confirm they are achievable with the selected framing system.</p>
        <h3>Existing Structure (for Renovations)</h3>
        <p>For projects involving existing buildings, verify that as-built conditions are accurately reflected in the architectural plans. Discrepancies between as-built and as-drawn conditions are among the most common sources of on-site surprises.</p>

        <h2 id="process">Our Analysis Process at BuildSketch India</h2>
        <p>
          Before commencing any detailing package, our design team conducts a systematic plan review that includes:
        </p>
        <ul>
          <li>Cross-checking all dimensions for consistency across plans, elevations, and sections</li>
          <li>Identifying and logging all coordination issues and ambiguities</li>
          <li>Preparing a Requests for Information (RFI) log to resolve outstanding issues before work begins</li>
          <li>Confirming the structural system to be used and its compatibility with the architectural design</li>
          <li>Checking compliance with relevant building codes and standards</li>
        </ul>
        <p>
          This process takes time upfront, but it consistently results in faster overall project delivery, fewer revisions, and a smoother construction process for our clients.
        </p>

        <h2 id="conclusion">Conclusion</h2>
        <p>
          Structural detailing is a precision discipline. The quality of your output is fundamentally constrained by the quality of your input. Investing the time to thoroughly analyse architectural plans before drawing a single structural line is not a luxury — it is a professional obligation that every serious detailing practice must uphold.
        </p>
        <p>
          At BuildSketch India, plan analysis is an integral part of every project we take on. It is one of the reasons our documentation consistently achieves first-pass approval and our clients return to us project after project.
        </p>
      </>
    )
  },

  /* ─────────────────────────────────────────────────────────
     5. WHY STEEL FRAMING IN INDIA
  ───────────────────────────────────────────────────────── */
  'why-steel-framing-india': {
    id: 'why-steel-framing-india',
    title: 'Why Steel Framing Is the Future of Construction in India',
    category: 'Industry Insights',
    date: 'January 5, 2026',
    readTime: '8 min read',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1600',
    authorInitials: 'BS',
    authorName: 'BuildSketch India',
    authorRole: 'Senior Designer',
    tags: ['India', 'Steel', 'Construction'],
    toc: [
      { id: 'intro', label: 'The Indian Construction Boom' },
      { id: 'challenges', label: 'Current Challenges' },
      { id: 'why-steel', label: 'Why Steel Is the Answer' },
      { id: 'applications', label: 'Key Applications in India' },
      { id: 'adoption', label: 'Growing Adoption' },
      { id: 'conclusion', label: 'The Road Ahead' },
    ],
    content: (
      <>
        <h2 id="intro">The Indian Construction Boom</h2>
        <p>
          India is in the middle of one of the largest construction booms in human history. With a population exceeding 1.4 billion, rapid urbanisation, and government ambitions to build 20 million affordable homes, 100 smart cities, and tens of thousands of kilometres of new roads and infrastructure, the construction industry is under pressure to perform at a scale and speed it has never previously achieved.
        </p>
        <p>
          Traditional brick-and-mortar construction — the dominant method in India for centuries — struggles to meet these demands. It is labour-intensive, slow, highly sensitive to weather, difficult to quality-control at scale, and generates enormous quantities of waste. The industry is searching for alternatives, and steel framing is emerging as one of the most compelling solutions.
        </p>

        <h2 id="challenges">Current Challenges in Indian Construction</h2>
        <h3>Speed</h3>
        <p>Traditional construction methods in India typically deliver residential projects at a pace of one to two floors per month under favourable conditions. For a country that needs millions of homes and commercial spaces urgently, this pace is insufficient.</p>
        <h3>Quality Consistency</h3>
        <p>Highly variable on-site labour quality leads to inconsistent build quality. Structural deficiencies, poor finishing, and non-compliance with building codes are persistent problems in the sector.</p>
        <h3>Material Waste</h3>
        <p>Conventional construction generates enormous material waste — both from over-ordering and from on-site damage and cutting. In an industry operating on thin margins, this waste represents a significant financial drain.</p>
        <h3>Seismic and Wind Resilience</h3>
        <p>Large parts of India sit in seismic zones III, IV, and V, and coastal regions face significant cyclonic wind loads. Traditional masonry construction has performed poorly in major seismic events, with devastating consequences for communities.</p>

        <div className="bg-blueprint p-8 rounded-3xl my-10 border-l-8 border-safety-orange">
          <strong className="block text-obsidian text-lg mb-2">Did You Know?</strong>
          <p className="m-0 text-sm">India is the second-largest producer of steel in the world. Domestic steel availability at competitive prices makes steel framing increasingly viable for a wide range of construction applications across the country.</p>
        </div>

        <h2 id="why-steel">Why Steel Framing Is the Answer</h2>
        <h3>Speed of Construction</h3>
        <p>
          Light-gauge steel framing systems can be prefabricated off-site and assembled on site at speeds three to four times faster than conventional masonry construction. A structure that would take four to six months with traditional methods can be weather-tight in four to six weeks with steel framing.
        </p>
        <h3>Superior Structural Performance</h3>
        <p>
          Steel's high strength-to-weight ratio and ductility make it an inherently superior material for seismic and wind-resistant construction. Properly detailed steel framing systems perform dramatically better than masonry in earthquake and cyclone events, protecting lives and minimising structural damage.
        </p>
        <h3>Precision and Quality Control</h3>
        <p>
          Steel framing components are manufactured in controlled factory environments to exact tolerances. This eliminates the quality variability inherent in on-site labour-intensive construction, delivering a consistently higher quality result.
        </p>
        <h3>Reduced Waste and Sustainability</h3>
        <p>
          Steel is 100 percent recyclable and retains its structural properties through multiple recycling cycles. Precision manufacturing from digital models minimises material waste. At end-of-life, steel buildings can be completely deconstructed and materials recovered — a major advantage over masonry demolition waste.
        </p>
        <h3>Design Flexibility</h3>
        <p>
          Steel framing enables longer spans, larger open-plan spaces, and more complex architectural forms than masonry construction — all without the need for intrusive intermediate columns. This is increasingly important as Indian residential and commercial buyers demand modern, open-plan living and working environments.
        </p>

        <h2 id="applications">Key Applications in India</h2>
        <ul>
          <li><strong>Affordable Housing:</strong> Government-backed affordable housing schemes are increasingly specifying steel framing for rapid, cost-effective delivery.</li>
          <li><strong>Industrial and Logistics:</strong> The rapid growth of e-commerce and manufacturing is driving massive demand for industrial sheds and logistics warehouses — almost universally built with steel portal frames.</li>
          <li><strong>Commercial and Retail:</strong> Steel framing is the standard for modern commercial construction, enabling the large column-free floor plates demanded by office and retail tenants.</li>
          <li><strong>Disaster-Resilient Housing:</strong> In seismically active and cyclone-prone regions, steel framing is increasingly specified for its superior life-safety performance.</li>
          <li><strong>Healthcare and Education:</strong> Critical facilities requiring rapid construction and structural resilience are natural candidates for steel framing systems.</li>
        </ul>

        <h2 id="adoption">Growing Adoption and Government Support</h2>
        <p>
          Adoption of steel framing in India is accelerating. The Steel Authority of India (SAIL) and Tata Steel have both invested heavily in promoting light-gauge steel framing systems for residential construction. The Bureau of Indian Standards has updated and expanded its standards for cold-formed steel structures. And government housing agencies are actively evaluating and piloting steel framing systems for large-scale affordable housing delivery.
        </p>
        <p>
          The ecosystem of trained fabricators, erectors, and designers is growing rapidly — and as awareness and skills accumulate, the pace of adoption will only increase.
        </p>

        <h2 id="conclusion">The Road Ahead</h2>
        <p>
          India's construction industry is at a pivotal moment. The pressure to build faster, better, more sustainably, and at greater scale than ever before is creating the conditions for a fundamental shift in how structures are built. Steel framing — supported by precision structural detailing — is central to that shift.
        </p>
        <p>
          At BuildSketch India, we are proud to be part of this transformation. Our structural detailing services support designers, fabricators, and builders working across India's rapidly evolving construction landscape — delivering the precision documentation that makes steel framing projects possible at scale.
        </p>
        <p>
          The future of Indian construction will be faster, lighter, stronger, and more precise. And it will be built in steel.
        </p>
      </>
    )
  }
};

/* ─── Related posts helper ─── */
const getRelated = (currentId: string) =>
  Object.values(allPosts)
    .filter(p => p.id !== currentId)
    .slice(0, 3);

export const BlogPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? allPosts[postId] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-architectural flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-montserrat font-black text-4xl text-obsidian mb-4">Article Not Found</h1>
        <p className="text-charcoal mb-8">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 px-8 py-4 bg-safety-orange text-white font-montserrat font-black text-xs uppercase tracking-widest rounded-xl shadow-lg hover:-translate-y-1 transition-all">
          Back to Blog <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const related = getRelated(post.id);

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO ── */}
      <div className="relative h-[70vh] min-h-[500px] flex items-end">
        <img
          src={post.heroImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-safety-orange font-roboto font-bold text-xs uppercase tracking-widest mb-8 group">
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
          <span className="block text-safety-orange font-roboto font-bold text-xs uppercase tracking-[4px] mb-4">
            {post.category}
          </span>
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-8 max-w-4xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-8 border-t border-white/20 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center text-white font-black text-sm">
                {post.authorInitials}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{post.authorName}</p>
                <p className="text-steel-grey text-xs">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-steel-grey text-xs">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-steel-grey text-xs">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1fr,300px] gap-16">

          {/* Article body */}
          <article className="prose prose-lg max-w-none
            prose-headings:font-montserrat prose-headings:font-black prose-headings:text-obsidian
            prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
            prose-p:font-inter prose-p:text-charcoal prose-p:leading-relaxed prose-p:mb-6
            prose-ul:space-y-3 prose-li:text-charcoal prose-li:font-inter
            prose-strong:text-obsidian
            prose-table:rounded-2xl prose-table:overflow-hidden">
            {post.content}
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-32 space-y-8">

              {/* Table of Contents */}
              <div className="bg-architectural p-8 rounded-3xl border border-blueprint">
                <h4 className="font-montserrat font-bold text-obsidian text-xs uppercase tracking-widest mb-6 pb-4 border-b border-blueprint">
                  Table of Contents
                </h4>
                <ul className="space-y-4">
                  {post.toc.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm font-inter text-charcoal hover:text-safety-orange transition-colors flex items-center gap-2 group"
                      >
                        <div className="w-1 h-1 bg-safety-orange rounded-full group-hover:w-2 transition-all flex-shrink-0"></div>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-white p-8 rounded-3xl border border-blueprint">
                <h4 className="font-montserrat font-bold text-obsidian text-xs uppercase tracking-widest mb-6">
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-blueprint px-4 py-2 rounded-full text-[10px] font-bold text-steel-navy uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="bg-steel-navy p-8 rounded-3xl text-white">
                <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest mb-6">
                  Share This Article
                </h4>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Linkedin, Share2].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-safety-orange transition-colors">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-safety-orange p-8 rounded-3xl text-white">
                <h4 className="font-montserrat font-black text-sm uppercase tracking-widest mb-4">
                  Need a Detailing Quote?
                </h4>
                <p className="text-white/80 text-xs leading-relaxed mb-6">
                  Our designers are ready to help with your next project.
                </p>
                <Link to="/contact" className="block text-center bg-white text-safety-orange font-montserrat font-black text-xs uppercase tracking-widest py-3 rounded-xl hover:bg-obsidian hover:text-white transition-all">
                  Contact Us
                </Link>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ── */}
      <section className="bg-blueprint py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-montserrat font-black text-3xl text-obsidian mb-12">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map(relPost => (
              <div key={relPost.id} className="bg-white p-6 rounded-3xl shadow-sm border border-blueprint hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="h-44 bg-architectural rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={relPost.heroImage}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={relPost.title}
                  />
                </div>
                <span className="text-safety-orange text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  {relPost.category}
                </span>
                <h4 className="font-montserrat font-bold text-base mb-4 text-obsidian group-hover:text-safety-orange transition-colors leading-snug">
                  {relPost.title}
                </h4>
                <Link
                  to={`/blog/${relPost.id}`}
                  className="text-safety-orange font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/link"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
export type ProductCategory = 'Fryers' | 'Cutting' | 'Forming' | 'Processing' | 'Automation' | 'Conveyors'

export interface ProductSpecRow {
  model: string
  capacity: string
  oilCapacity?: string
  power: string
  [key: string]: string | undefined
}

export interface ProductSpecTable {
  columns: string[]
  rows: string[][]
  note?: string
}

export interface ProductProcessStep {
  step: string
  description?: string
}

/** Hero quick-spec row: "Capacity: 70–250 kg/hr" */
export interface ProductHeroSpec {
  label: string
  value: string
}

/** Highlighted metric shown beside the overview, e.g. "250 kg/hr" / "Maximum listed capacity" */
export interface ProductMetric {
  value: string
  label: string
}

/** Card with a title and supporting line — used for features and benefits */
export interface ProductCardItem {
  title: string
  description: string
}

export interface ProductDetails {
  tagline: string
  /** Section 2 headline, e.g. "Industrial Frying Built for Continuous Production" */
  overviewHeadline?: string
  overview: string
  /** Hero right-column quick specs */
  heroSpecs?: ProductHeroSpec[]
  /** Section 2 metric tiles */
  keyMetrics?: ProductMetric[]
  keyFeatures: string[]
  /** Richer feature cards (preferred over keyFeatures when present) */
  featureCards?: ProductCardItem[]
  applications: string[]
  workingProcess: ProductProcessStep[]
  specTable?: ProductSpecTable
  models?: string[]
  construction?: string[]
  performanceBenefits?: string[]
  /** Section 7 — "Why choose this machine?" operational benefits */
  whyChoose?: ProductCardItem[]
  optionalAttachments?: string[]
  performancePositioning?: string
  /** Section 8 CTA copy */
  ctaHeadline?: string
  ctaSubtext?: string
  brochureUrl?: string
  videoUrl?: string
  datasheetUrl?: string
}

export interface Product {
  slug: string
  image: string
  title: string
  category: ProductCategory
  shortDescription: string
  overview: string
  highlights: string[]
  applications: string[]
  details?: ProductDetails
}

export const PRODUCT_CATEGORIES = ['All', 'Fryers', 'Cutting', 'Forming', 'Processing', 'Automation', 'Conveyors'] as const

type ProductFilter = (typeof PRODUCT_CATEGORIES)[number]

type ProductSeed = {
  image: string
  title: string
  category: ProductCategory
  shortDescription?: string
  overview?: string
  highlights?: string[]
  applications?: string[]
  details?: Partial<ProductDetails>
}

const CATEGORY_CONTENT: Record<
  ProductCategory,
  {
    shortDescription: (title: string) => string
    overview: (title: string) => string
    highlights: string[]
    applications: string[]
  }
> = {
  Fryers: {
    shortDescription: (title) => `${title} built for uniform frying, higher throughput and operator-friendly control.`,
    overview: (title) => `${title} is designed for snack manufacturers who need consistent frying quality, dependable heating performance and easy day-to-day production handling.`,
    highlights: ['Food-grade construction', 'Consistent heat distribution', 'Production-friendly design'],
    applications: ['Potato chips', 'Banana chips', 'Namkeen and snack lines'],
  },
  Cutting: {
    shortDescription: (title) => `${title} developed for accurate cutting, clean output and repeatable production quality.`,
    overview: (title) => `${title} helps manufacturers maintain product consistency with smooth operation, dependable cutting accuracy and scalable output support.`,
    highlights: ['Servo-driven precision', 'Consistent product sizing', 'Easy maintenance access'],
    applications: ['Sweet cutting', 'Snack forming lines', 'Continuous processing setups'],
  },
  Forming: {
    shortDescription: (title) => `${title} engineered for stable forming performance and reliable product shaping.`,
    overview: (title) => `${title} supports efficient production with robust forming capability, operator convenience and compatibility with high-volume food manufacturing workflows.`,
    highlights: ['Stable forming system', 'Production-ready build quality', 'Flexible output handling'],
    applications: ['Extruded snacks', 'Dough-based products', 'Specialty shaped items'],
  },
  Processing: {
    shortDescription: (title) => `${title} created for dependable food processing performance with smooth workflow integration.`,
    overview: (title) => `${title} is suited for plants that require consistent process control, sturdy construction and practical support for everyday manufacturing.`,
    highlights: ['Process consistency', 'Robust industrial design', 'Operator-friendly workflow'],
    applications: ['Snack processing', 'Traditional foods', 'Batch and semi-automatic operations'],
  },
  Automation: {
    shortDescription: (title) => `${title} designed to streamline handling, improve repeatability and support efficient automated production.`,
    overview: (title) => `${title} helps modern manufacturing teams improve productivity with dependable automation, better material handling and integration-ready operation.`,
    highlights: ['Improved handling accuracy', 'Reliable automation support', 'Production line integration'],
    applications: ['Pick and place operations', 'Packaging support', 'Automated transfer workflows'],
  },
  Conveyors: {
    shortDescription: (title) => `${title} engineered for reliable material handling, smooth product transfer and seamless production line integration.`,
    overview: (title) => `${title} is designed for efficient material transport in food processing facilities, providing smooth operation, durable construction and flexible configuration options.`,
    highlights: ['Robust conveyor construction', 'Smooth product transfer', 'Flexible line integration'],
    applications: ['Product transfer lines', 'Packaging operations', 'Multi-stage processing'],
  },
}

const PRODUCT_SEEDS: ProductSeed[] = [
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/Continous%20fryer%20Line%20Process.png',
    title: 'Continuous Fryer Line',
    category: 'Fryers',
    shortDescription: 'Continuous Frying. Consistent Quality. High-Volume Production.',
    overview:
      'The Continuous Fryer Machinery is designed for continuous frying applications in snack and food-processing production lines. The system supports controlled feeding, submersion frying, discharge, de-oiling and cooling for continuous production, delivering high efficiency, energy saving, stainless-steel construction and consistent performance.',
    details: {
      tagline: 'Continuous frying engineered for consistent quality and high-volume production.',
      overviewHeadline: 'Industrial Frying Built for Continuous Production',
      overview:
        'The Continuous Fryer Machinery is designed for continuous frying applications in snack and food-processing production lines. The system supports controlled feeding, submersion frying, discharge, de-oiling and cooling for continuous production. It is engineered around high efficiency, energy saving, stainless-steel construction and consistent performance.',
      heroSpecs: [
        { label: 'Capacity', value: '70–250 kg/hr' },
        { label: 'Construction', value: 'SS 304 / SS 316' },
        { label: 'Operation', value: 'Continuous' },
        { label: 'Heating', value: 'Diesel / Gas options' },
        { label: 'Models', value: 'HLT-100 to HLT-140' },
      ],
      keyMetrics: [
        { value: '250 kg/hr', label: 'Maximum listed capacity' },
        { value: 'SS 304 / 316', label: 'Food-grade construction option' },
        { value: 'Continuous', label: 'Production operation' },
        { value: '5 Models', label: 'Multiple capacity configurations' },
      ],
      featureCards: [
        { title: 'Custom Engineered', description: 'Built around specific production requirements.' },
        { title: 'Food-Grade Construction', description: 'SS 304 / SS 316 options.' },
        { title: 'High Efficiency', description: 'Designed for consistent production.' },
        { title: 'Energy Saving', description: 'Optimised running cost.' },
        { title: 'Low Maintenance', description: 'Built for continuous operation.' },
        { title: 'Consistent Output', description: 'Controlled process for repeatable results.' },
      ],
      whyChoose: [
        { title: 'Higher Throughput', description: 'Continuous production compared with batch frying.' },
        { title: 'Consistent Processing', description: 'Controlled and repeatable frying workflow.' },
        { title: 'Flexible Configuration', description: 'Multiple capacity models from 70 to 250 kg/hr.' },
        { title: 'Food-Grade Construction', description: 'SS 304 / SS 316 construction options.' },
        { title: 'Reduced Manual Dependency', description: 'Designed around automated process stages.' },
      ],
      ctaHeadline: 'Planning a New Food Production Line?',
      ctaSubtext:
        'Tell us your required product, production capacity and automation level — our engineers will recommend the right configuration.',
      keyFeatures: [
        'Custom engineered for specific production requirements',
        'SS 304 / SS 316 construction options',
        'High-efficiency operation',
        'Consistent frying performance',
        'Low-maintenance design',
        'Optimised energy consumption',
        'Continuous production workflow',
      ],
      applications: [
        'Chakli',
        'Murukku',
        'Kodubale',
        'Andhra Murukku',
        'Chakodi',
        'Spring Roll',
        'Nuggets',
        'Samosa',
        'Bonda',
        'Medu Vada',
        'Nippattu',
        'Thattai',
        'Sev products',
      ],
      workingProcess: [
        { step: 'Feeding', description: 'Controlled and uniform product feeding into the line' },
        { step: 'Submersion', description: 'Product submerged for even frying' },
        { step: 'Frying Zone', description: 'Consistent temperature-controlled frying' },
        { step: 'Discharge & De-oiling', description: 'Product discharge with excess oil removal' },
        { step: 'Cooling', description: 'Final cooling for consistent quality' },
      ],
      specTable: {
        columns: ['Model', 'Capacity', 'Oil Capacity', 'Power'],
        rows: [
          ['HLT-100', '70 kg/hr', '250–300 L', '6 HP'],
          ['HLT-110', '100 kg/hr', '400–420 L', '6 HP'],
          ['HLT-120', '150 kg/hr', '450–530 L', '8.5 HP'],
          ['HLT-130', '200 kg/hr', '650–750 L', '8.5 HP'],
          ['HLT-140', '250 kg/hr', '800–900 L', '11 HP'],
        ],
        note: 'Diesel / gas heating media supported. Heating-media consumption figures available on request.',
      },
      models: ['HLT-100', 'HLT-110', 'HLT-120', 'HLT-130', 'HLT-140'],
      construction: [
        'Stainless steel SS 304 construction (standard)',
        'SS 316 construction available on request',
        'Food-grade contact surfaces',
        'Robust industrial-grade frame',
      ],
      performanceBenefits: [
        'Consistent frying quality across every batch',
        'Optimised energy consumption',
        'High-volume continuous throughput',
        'Reduced operator intervention',
        'Low maintenance and easy cleaning',
      ],
      optionalAttachments: [
        'Diesel or gas heating media',
        'Automated feeding system',
        'Product-specific mesh and conveyor configurations',
        'De-oiling and cooling extensions',
      ],
      performancePositioning: 'Build for Performance. Engineered for Excellence.',
    },
  },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/Continous%20fryer%20Line%20Process-02.png', title: 'Fryer Line Process II', category: 'Fryers' },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/Continous%20fryer%20Line%20Process-03.png', title: 'Fryer Line Process III', category: 'Fryers' },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/continus%20fryer-02.png', title: 'Continuous Fryer', category: 'Fryers' },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/circular%20batch%20fryer-with%20bhoondi.png',
    title: 'Circular Batch Fryer',
    category: 'Fryers',
    shortDescription: 'Compact circular batch fryer for controlled frying, discharge and de-oiling operations.',
    overview:
      'The Circular Batch Fryer is a compact batch frying system designed for snack products requiring controlled frying, discharge and de-oiling operations. The brochure provides multiple capacity and diameter configurations.',
    details: {
      tagline: 'Efficient Batch Frying for Versatile Snack Production',
      overview:
        'The Circular Batch Fryer is a compact batch frying system designed for snack products requiring controlled frying, discharge and de-oiling operations. Available in multiple capacity and diameter configurations to suit small and medium scale production.',
      keyFeatures: [
        'Compact circular design for uniform frying',
        'Multiple capacity and diameter configurations',
        'Controlled discharge and de-oiling for improved product quality',
        'Operator-friendly controls and easy maintenance',
      ],
      applications: [
        'Fryums',
        'Moong Dhal',
        'Cornflake & Avalakki',
        'Masala Peanuts',
        'Nippattu',
      ],
      workingProcess: [
        { step: 'Frying', description: 'Product is fried in the circular tank under controlled conditions' },
        { step: 'Discharge', description: 'Processed product is discharged from the tank' },
        { step: 'De-oiling', description: 'Excess oil is removed before cooling and packing' },
      ],
      specTable: {
        columns: ['Model', 'Capacity', 'Diameter', 'Oil Capacity', 'Power'],
        rows: [
          ['HLT-100', '60 kg/hr', '32"', '100–130 L', '3 HP'],
          ['HLT-110', '80 kg/hr', '36"', '120–150 L', '4 HP'],
          ['HLT-120', '100 kg/hr', '42"', '150–180 L', '4 HP'],
          ['HLT-130', '120 kg/hr', '48"', '180–220 L', '6 HP'],
        ],
      },
      models: ['HLT-100', 'HLT-110', 'HLT-120', 'HLT-130'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/rectangular%20batch%20fryer-02.png',
    title: 'Rectangular Batch Fryer',
    category: 'Fryers',
    shortDescription: 'Reliable Batch Frying for Consistent Snack Production.',
    overview:
      'The Rectangular Batch Fryer is designed for batch-based frying operations with controlled oil heating, product loading and frying. It is suitable for small to medium-scale snack production where controlled batch processing is required.',
    details: {
      tagline: 'Reliable Batch Frying for Consistent Snack Production',
      overview:
        'The Rectangular Batch Fryer is designed for batch-based frying operations with controlled oil heating, product loading and frying. It is suitable for small to medium-scale snack production where controlled batch processing is required.',
      keyFeatures: [
        'Controlled oil heating for uniform frying',
        'SS 304 / SS 316 construction options',
        'Ideal for small to medium-scale production',
        'Consistent batch frying performance',
        'Low-maintenance, operator-friendly design',
        'Robust rectangular tank build',
      ],
      applications: [
        'Chips',
        'Namkeen',
        'Snacks',
        'Fried savouries',
        'Traditional fried items',
      ],
      workingProcess: [
        { step: 'Oil Heating', description: 'Controlled heating of frying oil to set temperature' },
        { step: 'Product Loading', description: 'Batch loading of product into the fryer' },
        { step: 'Frying Process', description: 'Consistent batch frying for uniform output' },
      ],
      specTable: {
        columns: ['Model', 'Capacity', 'Oil Capacity', 'Power'],
        rows: [
          ['HLT-100', '60 kg/hr', '100–130 L', '3 HP'],
          ['HLT-110', '80 kg/hr', '120–180 L', '4 HP'],
          ['HLT-120', '100 kg/hr', '200–250 L', '4 HP'],
          ['HLT-130', '120 kg/hr', '250–300 L', '6 HP'],
        ],
      },
      models: ['HLT-100', 'HLT-110', 'HLT-120', 'HLT-130'],
      construction: [
        'Stainless steel SS 304 construction (standard)',
        'SS 316 construction available on request',
        'Food-grade contact surfaces',
        'Sturdy rectangular tank design',
      ],
      performanceBenefits: [
        'Consistent frying quality per batch',
        'Reliable controlled heating',
        'Suited for small to medium production volumes',
        'Easy to operate and maintain',
      ],
      performancePositioning: 'Performance You Can Trust. Quality You Can Depend On.',
    },
  },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/extruder.png', title: 'Extruder Machine', category: 'Forming' },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/RING%20MASTERR.png',
    title: 'Ring Master',
    category: 'Forming',
    shortDescription: 'Automated forming machine for high-volume shaped snack production with multi-head configurations.',
    overview:
      'The Ring Master is designed for automated forming and delivery of shaped snack products. The machine workflow includes filling, dough placement, forming and product delivery, supporting multiple head configurations for different throughput requirements.',
    details: {
      tagline: 'Automated Forming for High-Volume Snack Production',
      overview:
        'The Ring Master is designed for automated forming and delivery of shaped snack products. The machine workflow includes filling, dough placement, forming and product delivery.',
      keyFeatures: [
        'Multi-head forming options to scale throughput',
        'Accurate filling and dough placement for consistent shapes',
        'Robust, food-grade construction with easy cleaning access',
        'Operator-friendly controls and quick changeover between shapes',
      ],
      applications: [
        'Kodubale',
        'Andhra Murukku',
        'Ribbon',
        'Star Murukku',
        'Masala Stick',
        'Chakodi',
      ],
      workingProcess: [
        { step: 'Put in Filling', description: 'Filling material is loaded into the hopper' },
        { step: 'Put in Dough', description: 'Dough is fed and positioned for forming' },
        { step: 'Forming', description: 'Multi-head forming produces the desired shape' },
        { step: 'Delivering', description: 'Formed pieces are delivered to downstream handling or packaging' },
      ],
      specTable: {
        columns: ['Model', 'Capacity', 'Power'],
        rows: [
          ['2 Head', '30 kg/hr', '5 HP'],
          ['3 Head', '40 kg/hr', '5 HP'],
          ['4 Head', '60 kg/hr', '6 HP'],
          ['6 Head', '80 kg/hr', '6 HP'],
          ['8 Head', '100–120 kg/hr', '6 HP'],
          ['12 Head', '200 kg/hr', '9 HP'],
        ],
        note: 'Source brochure shows the above configurations. The 6-head capacity is difficult to read in the extracted text — please verify the 6-head capacity with the manufacturer before publishing.',
      },
      models: ['2 Head', '3 Head', '4 Head', '6 Head', '8 Head', '12 Head'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/RING%20MASTERR.png',
    title: 'Encrusting Machine',
    category: 'Forming',
    shortDescription: 'Automated encrusting system integrating filling, forming and delivery for filled products.',
    overview:
      'The Encrusting Machine is intended for automated production of filled and shaped food products. The system integrates filling, dough feeding, forming and product delivery to produce consistent stuffed and shaped items at scale.',
    details: {
      tagline: 'Automated Filling, Forming and Product Delivery',
      overview:
        'The Encrusting Machine is intended for automated production of filled and shaped food products. The system integrates filling, dough feeding, forming and product delivery.',
      keyFeatures: [
        'Integrated filling and dough feed for accurate portioning',
        'Encrusting/forming unit for consistent product shapes',
        'Robust food-grade construction with easy access for cleaning',
        'Adjustable settings for varied product sizes and fillings',
      ],
      applications: [
        'Kaju Katli',
        'Anjeer Khajir Roll',
        'Stuffed Parota',
        'Cookies',
        'Momos',
        'Holige',
      ],
      workingProcess: [
        { step: 'Put in Filling', description: 'Filling is loaded into the hopper and portioned' },
        { step: 'Put in Dough', description: 'Dough is fed and positioned around the filling' },
        { step: 'Forming', description: 'Encrusting/forming mechanism shapes and seals the product' },
        { step: 'Delivering', description: 'Finished pieces are delivered to downstream handling or packaging' },
      ],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Model', 'HLT-100'],
          ['Capacity', 'Not specified in brochure'],
          ['Output', 'Not specified in brochure'],
          ['Power', 'Not specified in brochure'],
        ],
        note: 'Brochure lists the HLT-100 model; detailed capacity/output/power were not provided.',
      },
      models: ['HLT-100'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/sheeting%20machine.png',
    title: 'Sheeting, Oil Spray & Dusting Unit',
    category: 'Forming',
    shortDescription: 'Integrated sheeting, hot pressing, oil spray and dust removal system for flat-product preparation.',
    overview:
      'The Sheeting, Oil Spray & Dusting Unit combines sheeting, hot pressing, oil spraying and dust removal in an integrated production workflow. It is designed for automated preparation of flat food products.',
    details: {
      tagline: 'Integrated Sheeting and Surface-Preparation System',
      overview:
        'The Sheeting, Oil Spray & Dusting Unit combines sheeting, hot pressing, oil spraying and dust removal in an integrated production workflow. It is designed for automated preparation of flat food products.',
      keyFeatures: [
        'Combined sheeting and hot-pressing for uniform thickness',
        'Integrated oil spray system for surface treatment',
        'Dust removal stage to ensure clean finished surfaces',
        'Modular multi-head configurations to scale throughput',
      ],
      applications: ['Parota', 'Tatte Nippattu', 'Akki Rotti', 'Ragi Rotti', 'Chapati', 'Holige'],
      workingProcess: [
        { step: 'Sheeting', description: 'Dough is sheeted to the required thickness' },
        { step: 'Hot Pressing', description: 'Sheeted pieces are hot pressed for uniformity' },
        { step: 'Oil Spraying', description: 'Surface oil spray applied as required' },
        { step: 'Dust Removing', description: 'Dust removal ensures a clean surface before downstream processing' },
      ],
      specTable: {
        columns: ['Model', 'Configuration', 'Capacity', 'Power'],
        rows: [
          ['CSOD-2', '2 Head', '30 pieces/min', '12 kW'],
          ['CSOD-4', '4 Head', '60 pieces/min', '20 kW'],
          ['CSOD-6', '6 Head', '90 pieces/min', '28 kW'],
        ],
        note: 'Configurations and capacities taken from brochure — verify with manufacturer for production planning.',
      },
      models: ['CSOD-2', 'CSOD-4', 'CSOD-6'],
    },
  },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/ball%20divider.png', title: 'Ball Divider', category: 'Forming' },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/double%20stage%20servo%20based.png',
    title: 'Double Stage Servo Cutter',
    category: 'Cutting',
    shortDescription: 'Two-stage servo cutter combining horizontal and vertical cutting for precise dimensions.',
    overview:
      'The Double Stage Servo Cutter is designed for automated food-product cutting involving horizontal and vertical cutting stages to achieve consistent final dimensions across a variety of confectionery and snack products.',
    details: {
      tagline: 'Two-Stage Precision Cutting for Uniform Output',
      overview:
        'The Double Stage Servo Cutter is designed for automated food-product cutting involving horizontal and vertical cutting stages to achieve consistent final dimensions.',
      keyFeatures: [
        'Dual-stage cutting (horizontal + vertical) for precise dimensions',
        'Servo-driven axes for repeatable accuracy',
        'Adjustable cutting parameters for product-specific sizing',
        'Hygienic construction and easy access for cleaning',
      ],
      applications: ['Kaju Katli', 'Soan Cake / Papdi', 'Anjeer Khajir Roll'],
      workingProcess: [
        { step: 'Horizontal Cutting', description: 'Initial horizontal cuts to set length or slab thickness' },
        { step: 'Vertical Cutting', description: 'Secondary vertical cuts to define final width/shape' },
        { step: 'Uniform Output', description: 'Consistent pieces delivered for packaging or further processing' },
      ],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Models', 'HLT-100 / HLT-110 / HLT-120 / HLT-130'],
          ['Capacity', 'Not specified in brochure'],
          ['Diameter', 'Not specified in brochure'],
          ['Oil Capacity', 'Not specified in brochure'],
          ['Power', 'Not specified in brochure'],
        ],
        note: 'Brochure lists models but detailed capacity/diameter/power entries were not provided.',
      },
      models: ['HLT-100', 'HLT-110', 'HLT-120', 'HLT-130'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/Sweet%20cutting_Single%20stage%20servo%20based.png',
    title: 'Single Stage Servo Cutter',
    category: 'Cutting',
    shortDescription: 'Automated horizontal cutting system delivering precise, repeatable product sizing.',
    overview:
      'The Single Stage Servo Cutter is designed for automated horizontal cutting of prepared food products. Its workflow consists of precise feeding followed by horizontal cutting to produce uniform output suitable for confectionery and sweet products.',
    details: {
      tagline: 'Precision Cutting for Consistent Product Size',
      overview:
        'The Single Stage Servo Cutter is designed for automated horizontal cutting of prepared food products. Its workflow consists of feeding followed by horizontal cutting and uniform output.',
      keyFeatures: [
        'Servo-driven horizontal cutting for accurate and repeatable cuts',
        'Adjustable stroke and cutting speed',
        'Compact, hygienic construction with easy maintenance access',
        'Operator-friendly controls and quick changeover',
      ],
      applications: ['Mysore Pak', 'Coconut Burfi', 'Halwa'],
      workingProcess: [
        { step: 'Feeding', description: 'Prepared product is fed uniformly into the cutter' },
        { step: 'Horizontal Cutting', description: 'Servo-driven cutter performs precise horizontal cuts' },
        { step: 'Uniform Output', description: 'Cut pieces are delivered with consistent size and finish' },
      ],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Models', 'HLT-100 / HLT-110 / HLT-120 / HLT-130'],
          ['Capacity', 'Not specified in brochure'],
          ['Power', 'Not specified in brochure'],
          ['Oil Capacity', 'Not specified in brochure'],
        ],
        note: 'Brochure lists model numbers but detailed capacity/power entries were not provided.',
      },
      models: ['HLT-100', 'HLT-110', 'HLT-120', 'HLT-130'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/hot%20press%20with%20oven.png',
    title: 'Hot Press with Oven',
    category: 'Processing',
    shortDescription: 'Integrated pressing and baking line combining hot press and oven for continuous production.',
    overview:
      'The Hot Press with Oven integrates transfer, oven baking, multi-layer baking and product collection into a continuous production process. The brochure specifies a gas oven based on requirement.',
    details: {
      tagline: 'Integrated Pressing and Baking for Continuous Production',
      overview:
        'The Hot Press with Oven integrates transfer, oven baking, multi-layer baking and product collection into a continuous production process. The brochure specifies a gas oven based on requirement.',
      keyFeatures: [
        'Integrated transfer and oven baking for continuous flow',
        'Multi-layer baking capability for higher throughput',
        'Gas oven option available based on customer requirements',
        'Robust collection and cooling arrangements for consistent output',
      ],
      applications: ['Chapati', 'Tatte Nippattu'],
      workingProcess: [
        { step: 'Transfer to Oven', description: 'Pressed pieces are transferred into the oven' },
        { step: 'Oven Baking', description: 'Items are baked in a controlled oven environment' },
        { step: 'Multi-Layer Baking', description: 'Optional multi-layer baking for increased throughput' },
        { step: 'Collecting', description: 'Finished pieces are collected and prepared for downstream handling' },
      ],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Model', 'COV-1'],
          ['Fuel', 'Gas oven based on requirement'],
          ['Output', '40–60 pieces/min'],
          ['Power', '28 kW'],
        ],
        note: 'Fuel type: gas oven (configured per requirement). Verify oven configuration with manufacturer.',
      },
      models: ['COV-1'],
    },
  },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/hot%20press.png', title: 'Hot Press', category: 'Processing' },
  {
    // TODO: replace with a dedicated 'automatic hot press.png' photo when available
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/hot%20press.png',
    title: 'Automatic Hot Press',
    category: 'Processing',
    shortDescription: 'Automated hot pressing system for consistent flat-product production and oven-ready transfer.',
    overview:
      'The Automatic Hot Press is designed for automated feeding, positioning and hot pressing of prepared dough portions before transfer to an oven or subsequent processing stage.',
    details: {
      tagline: 'Automated Hot Pressing for Consistent Flat-Product Production',
      overview:
        'The Automatic Hot Press is designed for automated feeding, positioning and hot pressing of prepared dough portions before transfer to an oven or subsequent processing stage.',
      keyFeatures: [
        'Automated feeding and accurate positioning for repeatable pressing',
        'Uniform heating and pressing for consistent product thickness',
        'Multiple head configurations to match throughput requirements',
        'Robust construction with easy maintenance and cleaning access',
      ],
      applications: ['Parota', 'Holige', 'Akki Rotti', 'Ragi Rotti'],
      workingProcess: [
        { step: 'Feeding', description: 'Prepared dough portions are fed into the press' },
        { step: 'Positioning', description: 'Portions are positioned accurately for pressing' },
        { step: 'Hot Pressing', description: 'Uniform hot pressing to required thickness' },
        { step: 'Transfer to Oven', description: 'Pressed pieces are transferred to oven or downstream processing' },
      ],
      specTable: {
        columns: ['Model', 'Heads', 'Capacity', 'Power'],
        rows: [
          ['CHT-2', '2 Head', '24 pieces/min', '12 kW'],
          ['CHT-4', '4 Head', '32 pieces/min', '20 kW'],
          ['CHT-6', '6 Head', '48 pieces/min', '28 kW'],
        ],
        note: 'Model/heads/capacity and power values taken from brochure; verify with manufacturer if needed.',
      },
      models: ['CHT-2', 'CHT-4', 'CHT-6'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/Masala%20Peanut%20mc.png',
    title: 'Masala Peanut Machine',
    category: 'Processing',
    shortDescription: 'Seasoning and coating solutions for peanut snack production.',
    overview:
      'The Masala Peanut Machine provides seasoning, coating and roasting support as part of peanut snack processing lines.',
    details: {
      tagline: 'Automated Coating for Consistent Peanut Snack Production',
      overviewHeadline: 'Coated Peanut Processing Built for Repeatable Output',
      overview:
        'The Masala / Coated Peanuts Machine is a dedicated system for coated peanut processing within the ready-to-fry machinery range. It provides seasoning, coating and roasting support as part of peanut snack processing lines.',
      heroSpecs: [
        { label: 'Application', value: 'Masala / coated peanuts' },
        { label: 'Operation', value: 'Automated coating' },
        { label: 'Construction', value: 'Food-grade stainless steel' },
        { label: 'Specifications', value: 'On request' },
      ],
      keyMetrics: [
        { value: 'Automated', label: 'Coating operation' },
        { value: 'Food-Grade', label: 'Contact surfaces' },
        { value: 'Custom', label: 'Configured to production need' },
        { value: 'Ready-to-Fry', label: 'Machinery range' },
      ],
      keyFeatures: [
        'Even and repeatable spice/batter application',
        'Robust food-grade construction',
        'Operator-friendly controls',
        'Consistent coating thickness',
        'Easy cleaning and maintenance access',
        'Integrates with downstream frying lines',
      ],
      featureCards: [
        { title: 'Even Coating', description: 'Uniform spice and batter application.' },
        { title: 'Food-Grade Build', description: 'Stainless steel contact surfaces.' },
        { title: 'Simple Operation', description: 'Operator-friendly control layout.' },
        { title: 'Consistent Output', description: 'Repeatable coating results per batch.' },
        { title: 'Easy Maintenance', description: 'Accessible for cleaning between runs.' },
        { title: 'Line Compatible', description: 'Feeds directly into frying equipment.' },
      ],
      applications: ['Masala Peanuts', 'Coated Peanuts'],
      workingProcess: [
        { step: 'Feeding', description: 'Raw peanuts are loaded into the machine' },
        { step: 'Coating', description: 'Batter and masala coating is applied evenly' },
        { step: 'Discharge', description: 'Coated peanuts are discharged ready for frying' },
      ],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Model', 'Not specified in brochure'],
          ['Capacity', 'Not specified in brochure'],
          ['Power', 'Not specified in brochure'],
          ['Construction', 'Food-grade stainless steel'],
        ],
        note: 'The brochure does not provide readable technical specifications for this machine. Please contact us for exact configuration details.',
      },
      whyChoose: [
        { title: 'Consistent Coating', description: 'Repeatable coverage across every batch.' },
        { title: 'Reduced Manual Work', description: 'Automates a labour-intensive stage.' },
        { title: 'Food-Grade Construction', description: 'Stainless steel product-contact surfaces.' },
        { title: 'Line Ready', description: 'Designed to feed continuous frying systems.' },
      ],
      models: [],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/MOONG%20DHAL.png',
    title: 'Moong Dhal Machine',
    category: 'Processing',
    shortDescription: 'Dedicated machine for automated Moong Dhal processing.',
    overview:
      'The Moong Dhal Machine is presented as a dedicated machine within the snack-processing range and is shown alongside other snack-production equipment.',
    details: {
      tagline: 'Automated Processing for Consistent Moong Dhal Production',
      overview:
        'The Moong Dhal Machine is presented as a dedicated machine within the snack-processing range and is shown alongside other snack-production equipment.',
      keyFeatures: ['Designed for moong dhal processing', 'Food-grade construction', 'Reliable operation'],
      applications: ['Moong Dhal'],
      workingProcess: [],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Capacity', 'Not specified'],
          ['Power', 'Not specified'],
          ['Model', 'Not specified'],
        ],
        note: 'The brochure does not provide readable technical specifications for this machine.',
      },
      models: [],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/KHARA%20BHOONDI.png',
    title: 'Khara Bhoondi Machine',
    category: 'Processing',
    shortDescription: 'Dedicated machine for automated Khara Boondi production.',
    overview:
      'The brochure presents a dedicated Khara Boondi Machine for automated snack production. The machine is shown as part of the manufacturer\'s supporting machinery range.',
    details: {
      tagline: 'Precision Forming for Consistent Boondi Production',
      overview:
        'The brochure presents a dedicated Khara Boondi Machine for automated snack production. The machine is shown as part of the manufacturer\'s supporting machinery range.',
      keyFeatures: ['Designed for Khara Boondi production', 'Food-grade construction', 'Operator-friendly design'],
      applications: ['Khara Boondi'],
      workingProcess: [],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Capacity', 'Not specified'],
          ['Power', 'Not specified'],
          ['Model', 'Not specified'],
          ['Construction', 'Not specified'],
        ],
        note: 'The brochure does not provide readable technical specifications for this machine.',
      },
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/Nippattu%20mc.png',
    title: 'Nippattu Machine',
    category: 'Processing',
    shortDescription: 'Automated Nippattu production machine providing consistent forming and output.',
    overview:
      'The Nippattu Machine is shown as a dedicated automated machine for Nippattu production, forming part of the manufacturer\'s snack-processing equipment range.',
    details: {
      tagline: 'Automated Nippattu Production with Consistent Forming',
      overview:
        'The Nippattu Machine is shown as a dedicated automated machine for Nippattu production, forming part of the manufacturer\'s snack-processing equipment range.',
      keyFeatures: ['Automated forming for Nippattu', 'Robust food-grade construction', 'Easy maintenance access'],
      applications: ['Nippattu'],
      workingProcess: [],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Capacity', 'Not specified'],
          ['Power', 'Not specified'],
          ['Model', 'Not specified'],
        ],
        note: 'The brochure does not provide readable technical specifications for this machine.',
      },
    },
  },
  { image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/seedai%20machine.png', title: 'Seedai Machine', category: 'Processing' },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/gulab%20jamun.png',
    title: 'Gulab Jamun Machine',
    category: 'Processing',
    shortDescription: 'Automated forming and delivery system for consistent sweet production.',
    overview:
      'The Gulab Jamun Machine is designed for automated forming and delivery of uniform sweet products. The brochure highlights a compact automated production workflow.',
    details: {
      tagline: 'Automated Forming for Consistent Sweet Production',
      overview:
        'The Gulab Jamun Machine is designed for automated forming and delivery of uniform sweet products. The brochure highlights a compact automated production workflow.',
      keyFeatures: [
        'Compact automated forming and delivery',
        'Adjustable portioning for varied product sizes',
        'Hygienic food-grade construction with easy maintenance',
        'Suitable for a range of sweet products and high-repeatability production',
      ],
      applications: ['Gulab Jamun', 'Rasgulla', 'Peda'],
      workingProcess: [
        { step: 'Put in Filling', description: 'Filling loaded and portioned when applicable' },
        { step: 'Put in Dough', description: 'Dough fed and prepared for forming' },
        { step: 'Forming', description: 'Machine forms uniform sweet pieces' },
        { step: 'Delivering', description: 'Finished pieces delivered for cooling or packing' },
      ],
      specTable: {
        columns: ['Model', 'Product Size', 'Output', 'Power'],
        rows: [
          ['HLT-100', '30–180 grams', '40–180 pieces/min', '5 HP'],
        ],
      },
      models: ['HLT-100'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machinery/pick%20%26%20place1.png',
    title: 'Pick & Place System',
    category: 'Automation',
    shortDescription: 'Automated product handling and transfer for high-efficiency packaging lines.',
    overview:
      'The Pick & Place Machine is designed for automated product handling and transfer within packaging or production lines. The system handles placement, positioning, filling, capping and pick-and-place operations for packaged and containerised products.',
    details: {
      tagline: 'Automated Product Handling for High-Efficiency Packaging Lines',
      overviewHeadline: 'Automated Handling Built for Packaging Lines',
      overview:
        'The Pick & Place Machine is designed for automated product handling and transfer within packaging or production lines. The documented line shows products moving through placement, positioning, filling, capping and pick-and-place operations, and transfer into cartons.',
      heroSpecs: [
        { label: 'Function', value: 'Pick, place & transfer' },
        { label: 'Operation', value: 'Automated / continuous' },
        { label: 'Line Integration', value: 'Packaging & carton transfer' },
        { label: 'Specifications', value: 'On request' },
      ],
      keyMetrics: [
        { value: '5 Stages', label: 'Placing to pick & place' },
        { value: 'Automated', label: 'Product handling operation' },
        { value: 'Line-Ready', label: 'Packaging line integration' },
        { value: 'Custom', label: 'Engineered to line requirements' },
      ],
      keyFeatures: [
        'Automated product handling and transfer',
        'Integrates with existing packaging lines',
        'Consistent placement and positioning accuracy',
        'Supports filling and capping stages',
        'Reduces manual handling dependency',
        'Carton transfer and collation support',
      ],
      featureCards: [
        { title: 'Automated Handling', description: 'Removes repetitive manual transfer work.' },
        { title: 'Accurate Positioning', description: 'Repeatable placement for downstream stages.' },
        { title: 'Line Integration', description: 'Fits into existing packaging workflows.' },
        { title: 'Filling & Capping', description: 'Supports containerised product operations.' },
        { title: 'Carton Transfer', description: 'Transfers finished products into cartons.' },
        { title: 'Custom Engineered', description: 'Configured to the customer production line.' },
      ],
      applications: [
        'Packaged product handling',
        'Containerised product transfer',
        'Carton loading',
        'Packaging line automation',
      ],
      workingProcess: [
        { step: 'Placing', description: 'Products are placed into the handling system' },
        { step: 'Positioning', description: 'Products are aligned and positioned accurately' },
        { step: 'Filling', description: 'Containers are filled as required' },
        { step: 'Capping', description: 'Filled containers are capped and sealed' },
        { step: 'Pick & Place', description: 'Finished products are picked and transferred into cartons' },
      ],
      specTable: {
        columns: ['Specification', 'Value'],
        rows: [
          ['Model', 'Not specified in brochure'],
          ['Capacity', 'Not specified in brochure'],
          ['Power', 'Not specified in brochure'],
          ['Dimensions', 'Not specified in brochure'],
        ],
        note: 'The brochure does not provide readable capacity, power, dimensions or model specifications for this machine. Configuration is engineered to the customer line.',
      },
      whyChoose: [
        { title: 'Reduced Manual Dependency', description: 'Automates repetitive handling and transfer tasks.' },
        { title: 'Consistent Handling', description: 'Repeatable placement and positioning accuracy.' },
        { title: 'Line Efficiency', description: 'Keeps packaging lines running continuously.' },
        { title: 'Flexible Integration', description: 'Configured around existing production equipment.' },
      ],
      optionalAttachments: [
        'Custom end-of-arm tooling',
        'Vision-assisted positioning',
        'Conveyor and collation extensions',
        'Carton erecting and sealing integration',
      ],
    },
  },
  // New Machines from CFT_Machineries_2_compressed folder
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/ball%20divider.png',
    title: 'Ball Divider',
    category: 'Processing',
    shortDescription: 'Automated dough ball dividing system for consistent portioning and uniform product sizing.',
    overview:
      'The Ball Divider is designed for automated dough dividing operations, ensuring consistent portioning and uniform ball sizing for bakery and confectionery production lines.',
    details: {
      tagline: 'Precision Dividing for Consistent Dough Portions',
      keyFeatures: [
        'Automated dough dividing for uniform portions',
        'Adjustable portion sizes for different products',
        'Food-grade stainless steel construction',
        'High-speed operation for increased throughput',
        'Easy to clean and maintain',
        'Consistent ball weight and size',
      ],
      applications: ['Bread production', 'Bun manufacturing', 'Pastry preparation', 'Sweet making', 'Dough-based snacks'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/COLD%20PRESS%20MACHINE.png',
    title: 'Cold Press Machine',
    category: 'Processing',
    shortDescription: 'Cold press oil extraction system for pure, chemical-free oil production with maximum nutrient retention.',
    overview:
      'The Cold Press Machine is engineered for oil extraction from seeds and nuts without heat, preserving natural nutrients, flavor, and aroma for premium quality oil production.',
    details: {
      tagline: 'Pure Oil Extraction with Maximum Nutrient Retention',
      keyFeatures: [
        'Cold press technology for nutrient preservation',
        'Chemical-free extraction process',
        'Multiple seed and nut compatibility',
        'High oil extraction efficiency',
        'Food-grade SS construction',
        'Easy operation and maintenance',
      ],
      applications: [
        'Coconut oil production',
        'Groundnut oil extraction',
        'Sesame oil processing',
        'Sunflower oil production',
        'Premium oil manufacturing',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/Dough%20mixer-1.png',
    title: 'Dough Mixer',
    category: 'Processing',
    shortDescription: 'Industrial dough mixing system for uniform mixing, consistent texture, and optimized production workflow.',
    overview:
      'The Dough Mixer is a high-capacity mixing system designed for bakery and snack production lines, delivering uniform mixing, consistent dough texture, and reliable batch-to-batch performance.',
    details: {
      tagline: 'Industrial Mixing for Consistent Dough Quality',
      keyFeatures: [
        'High-capacity mixing bowl for industrial production',
        'Variable speed control for different dough types',
        'Robust mixing mechanism for uniform consistency',
        'Stainless steel construction for food safety',
        'Overload protection and safety features',
        'Easy cleaning and maintenance access',
      ],
      applications: ['Bread dough', 'Chapati dough', 'Pizza base preparation', 'Biscuit dough', 'Snack dough mixing'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/medu%20vada-1.png',
    title: 'Medu Vada Machine',
    category: 'Forming',
    shortDescription: 'Automated medu vada forming machine for consistent shape, size, and high-volume production.',
    overview:
      'The Medu Vada Machine is designed for automated forming of traditional South Indian medu vada with consistent hole formation, uniform sizing, and high-speed production capability.',
    details: {
      tagline: 'Traditional Taste with Modern Automation',
      keyFeatures: [
        'Automated vada forming with consistent hole shape',
        'Adjustable size and thickness settings',
        'High-speed production for commercial kitchens',
        'Food-grade construction with easy cleaning',
        'Uniform product quality batch after batch',
        'Reduced manual labor and improved hygiene',
      ],
      applications: ['Medu vada production', 'Quick service restaurants', 'Hotel kitchens', 'Catering operations', 'Snack manufacturing'],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/MURUKKU%20MC.png',
    title: 'Murukku Machine',
    category: 'Forming',
    shortDescription: 'Automated murukku forming machine for traditional spiral shapes with consistent quality and high throughput.',
    overview:
      'The Murukku Machine is engineered for automated production of traditional South Indian murukku with perfect spiral formation, consistent thickness, and high-volume output capability.',
    details: {
      tagline: 'Authentic Murukku Formation at Industrial Scale',
      keyFeatures: [
        'Automated spiral forming for traditional murukku shapes',
        'Multiple die options for different murukku varieties',
        'Consistent product weight and size',
        'High-speed continuous operation',
        'Food-grade SS construction',
        'Easy die changeover for product variety',
      ],
      applications: [
        'Murukku production',
        'Chakli manufacturing',
        'Traditional snack lines',
        'Festival season production',
        'Export quality murukku',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/parota%20slicer1.png',
    title: 'Parota Slicer',
    category: 'Cutting',
    shortDescription: 'Precision parota slicing machine for uniform strips, consistent sizing, and hygienic food processing.',
    overview:
      'The Parota Slicer is designed for automated slicing of parotas and flatbreads into uniform strips, ensuring consistent product quality, reduced manual handling, and improved production efficiency.',
    details: {
      tagline: 'Precision Slicing for Uniform Parota Strips',
      keyFeatures: [
        'Automated slicing for consistent strip width',
        'Adjustable cutting size for different products',
        'High-speed operation with minimal product waste',
        'Stainless steel cutting blades for clean cuts',
        'Food-grade construction for hygiene',
        'Easy blade maintenance and replacement',
      ],
      applications: [
        'Parota kothu preparation',
        'Restaurant kitchen operations',
        'Catering services',
        'Cloud kitchens',
        'Ready-to-cook product preparation',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/servo%20based%20ultrasonic%20cutter1.png',
    title: 'Servo-Based Ultrasonic Cutter',
    category: 'Cutting',
    shortDescription: 'Advanced ultrasonic cutting technology for clean cuts, minimal waste, and precise product portioning.',
    overview:
      'The Servo-Based Ultrasonic Cutter combines servo precision with ultrasonic cutting technology for clean, accurate cuts on soft and sticky products without deformation or compression.',
    details: {
      tagline: 'Precision Ultrasonic Technology for Perfect Cuts',
      keyFeatures: [
        'Ultrasonic cutting for clean, deformation-free cuts',
        'Servo-driven precision for accurate positioning',
        'Minimal product waste and blade sticking',
        'Suitable for soft, sticky, and delicate products',
        'High-speed cutting with consistent quality',
        'Easy cleaning and blade maintenance',
      ],
      applications: [
        'Cake and pastry cutting',
        'Sweet and confectionery portioning',
        'Cheese and soft food slicing',
        'Layered product cutting',
        'Bakery production lines',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/somosa%20sheeting1.png',
    title: 'Samosa Sheeting Machine',
    category: 'Processing',
    shortDescription: 'Automated dough sheeting system for uniform samosa sheets with consistent thickness and quality.',
    overview:
      'The Samosa Sheeting Machine is designed for automated production of uniform samosa sheets with precise thickness control, consistent quality, and high-volume production capability.',
    details: {
      tagline: 'Uniform Sheeting for Perfect Samosas Every Time',
      keyFeatures: [
        'Automated dough sheeting with precise thickness control',
        'Consistent sheet dimensions for uniform samosas',
        'Adjustable thickness settings for different products',
        'Food-grade stainless steel rollers',
        'High production capacity with continuous operation',
        'Easy operation and maintenance',
      ],
      applications: [
        'Samosa production',
        'Spring roll sheets',
        'Pastry sheet preparation',
        'Empanada manufacturing',
        'Traditional snack production',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/Stamping%20mc1.png',
    title: 'Stamping Machine',
    category: 'Forming',
    shortDescription: 'Automated stamping system for consistent product shapes, uniform sizing, and high-speed production.',
    overview:
      'The Stamping Machine is engineered for automated stamping and cutting operations, delivering consistent product shapes, uniform sizing, and high-speed throughput for various food products.',
    details: {
      tagline: 'Precision Stamping for Consistent Product Shapes',
      keyFeatures: [
        'Automated stamping with consistent product shapes',
        'Multiple die options for different product varieties',
        'High-speed operation for increased productivity',
        'Uniform product dimensions and weight',
        'Food-grade construction with easy die changeover',
        'Minimal product waste and efficient operation',
      ],
      applications: [
        'Biscuit stamping',
        'Cookie production',
        'Sweet forming',
        'Snack shaping',
        'Dough-based product manufacturing',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/sweet%20making-02.png',
    title: 'Sweet Making Machine',
    category: 'Processing',
    shortDescription: 'Automated sweet production system for traditional Indian sweets with consistent quality and high output.',
    overview:
      'The Sweet Making Machine is designed for automated production of traditional Indian sweets, providing consistent quality, uniform sizing, and high-volume manufacturing capability.',
    details: {
      tagline: 'Traditional Sweets with Modern Automation',
      keyFeatures: [
        'Automated sweet forming and production',
        'Consistent product weight and size',
        'Multiple sweet varieties production capability',
        'Food-grade stainless steel construction',
        'High production capacity for commercial operations',
        'Easy operation and cleaning',
      ],
      applications: [
        'Barfi production',
        'Laddu manufacturing',
        'Peda making',
        'Milk-based sweets',
        'Traditional confectionery',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/Thattai1.png',
    title: 'Thattai Machine',
    category: 'Forming',
    shortDescription: 'Automated thattai forming machine for traditional South Indian crackers with consistent shape and thickness.',
    overview:
      'The Thattai Machine is engineered for automated production of traditional South Indian thattai crackers with consistent circular shape, uniform thickness, and high-volume output.',
    details: {
      tagline: 'Traditional Thattai Production at Industrial Scale',
      keyFeatures: [
        'Automated forming for consistent circular shapes',
        'Uniform thickness control across all products',
        'High-speed production for commercial operations',
        'Adjustable size settings for different variants',
        'Food-grade construction with easy maintenance',
        'Consistent product quality batch after batch',
      ],
      applications: [
        'Thattai production',
        'Nippattu manufacturing',
        'Traditional snack lines',
        'Festival season production',
        'Export quality snacks',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/CFT_Machineries_2_compressed/TORTILLA%20MC.png',
    title: 'Tortilla Machine',
    category: 'Processing',
    shortDescription: 'Automated tortilla production system for consistent quality, uniform sizing, and high-volume output.',
    overview:
      'The Tortilla Machine is designed for automated production of tortillas and flatbreads with precise thickness control, consistent circular shape, and high-speed manufacturing capability.',
    details: {
      tagline: 'Perfect Tortillas with Every Production Run',
      keyFeatures: [
        'Automated dough pressing and forming',
        'Consistent tortilla diameter and thickness',
        'Integrated heating for cooking process',
        'High production capacity for commercial operations',
        'Food-grade stainless steel construction',
        'Easy operation and minimal training required',
      ],
      applications: [
        'Tortilla production',
        'Flatbread manufacturing',
        'Wrap production',
        'Quick service restaurants',
        'Food service operations',
      ],
    },
  },
  // Conveyors from conveyors_compressed folder
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/chain%20conyeor.png',
    title: 'Chain Conveyor',
    category: 'Conveyors',
    shortDescription: 'Heavy-duty chain conveyor system for robust material handling and reliable product transport.',
    overview:
      'The Chain Conveyor is designed for heavy-duty material handling in food processing lines, providing reliable transport for products requiring sturdy conveying systems with continuous operation capability.',
    details: {
      tagline: 'Heavy-Duty Material Handling for Industrial Production',
      keyFeatures: [
        'Robust chain-driven conveying system',
        'High load capacity for heavy products',
        'Durable construction for continuous operation',
        'Stainless steel construction options',
        'Easy maintenance and chain tensioning',
        'Flexible length configurations',
      ],
      applications: [
        'Heavy product transport',
        'Industrial food processing',
        'Multi-stage production lines',
        'Packaging operations',
        'Inter-floor material transfer',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/flat%20conveyor.png',
    title: 'Flat Belt Conveyor',
    category: 'Conveyors',
    shortDescription: 'Versatile flat belt conveyor for smooth product transport and flexible line integration.',
    overview:
      'The Flat Belt Conveyor is a versatile material handling solution designed for smooth product transport in food processing facilities, offering reliable operation, easy cleaning, and seamless integration with existing equipment.',
    details: {
      tagline: 'Smooth and Reliable Product Transport',
      keyFeatures: [
        'Food-grade belt material for safe product contact',
        'Variable speed control for process flexibility',
        'Easy belt removal for cleaning',
        'Adjustable height and length options',
        'Smooth product handling without damage',
        'Compatible with various product types',
      ],
      applications: [
        'Product transfer between stages',
        'Inspection and sorting lines',
        'Packaging operations',
        'Bakery and confectionery lines',
        'General material handling',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/modular%20conveyor.png',
    title: 'Modular Conveyor',
    category: 'Conveyors',
    shortDescription: 'Modular belt conveyor system for flexible configuration and easy maintenance.',
    overview:
      'The Modular Conveyor features interlocking plastic belt modules for flexible configuration, easy cleaning, and long service life in food processing environments.',
    details: {
      tagline: 'Flexible Configuration with Easy Maintenance',
      keyFeatures: [
        'Interlocking modular belt design',
        'Easy damaged-section replacement',
        'Superior drainage and cleaning access',
        'High chemical and temperature resistance',
        'Flexible curve and incline configurations',
        'Long service life with minimal maintenance',
      ],
      applications: [
        'Food processing lines',
        'Bakery and snack production',
        'Packaging and filling operations',
        'Inspection and quality control',
        'Multi-directional product flow',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/motorised%20roller.png',
    title: 'Motorized Roller Conveyor',
    category: 'Conveyors',
    shortDescription: 'Motorized roller system for efficient carton and box handling with smooth product flow.',
    overview:
      'The Motorized Roller Conveyor provides efficient handling of cartons, boxes, and packaged products with smooth roller-driven transport and reliable performance for packaging operations.',
    details: {
      tagline: 'Efficient Handling for Packaged Products',
      keyFeatures: [
        'Motorized rollers for consistent product movement',
        'Low friction surface for smooth flow',
        'Suitable for cartons and packaged goods',
        'Adjustable speed control',
        'Robust construction for continuous operation',
        'Easy integration with automation systems',
      ],
      applications: [
        'Packaging line transport',
        'Carton conveying systems',
        'Warehouse distribution',
        'Sorting and accumulation',
        'End-of-line operations',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/roller.png',
    title: 'Gravity Roller Conveyor',
    category: 'Conveyors',
    shortDescription: 'Non-powered gravity roller system for efficient manual and gravity-assisted product movement.',
    overview:
      'The Gravity Roller Conveyor is a cost-effective, non-powered conveying solution for manual handling areas, providing smooth roller-assisted product movement without electrical power requirements.',
    details: {
      tagline: 'Cost-Effective Manual Handling Solution',
      keyFeatures: [
        'Non-powered gravity-assisted movement',
        'Low initial and operating costs',
        'Smooth roller surface for easy product flow',
        'Durable steel or stainless steel construction',
        'Flexible length and width configurations',
        'Easy installation and maintenance',
      ],
      applications: [
        'Manual packing stations',
        'Loading and unloading areas',
        'Storage and warehouse operations',
        'Inspection and quality control zones',
        'Inter-department product transfer',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/screw%20type%20coneyor.png',
    title: 'Screw Conveyor',
    category: 'Conveyors',
    shortDescription: 'Enclosed screw conveyor for bulk material handling and powder transport applications.',
    overview:
      'The Screw Conveyor is designed for efficient bulk material handling, providing enclosed transport of powders, granules, and semi-solid products with minimal dust and contamination.',
    details: {
      tagline: 'Enclosed Bulk Material Transport',
      keyFeatures: [
        'Enclosed design for dust-free operation',
        'Suitable for powders and granular materials',
        'Stainless steel construction for food safety',
        'Multiple inlet and outlet configurations',
        'Variable speed control for flow rate adjustment',
        'Easy maintenance and cleaning access',
      ],
      applications: [
        'Flour and powder handling',
        'Grain and spice transport',
        'Ingredient feeding systems',
        'Waste removal operations',
        'Bulk material transfer',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/table%20top%20chain%20coneyor.png',
    title: 'Table Top Chain Conveyor',
    category: 'Conveyors',
    shortDescription: 'Hygienic table top chain conveyor for food-grade product handling with easy cleaning.',
    overview:
      'The Table Top Chain Conveyor features a flat, food-grade chain surface ideal for direct product contact in food processing lines, offering hygienic design, easy cleaning, and reliable operation.',
    details: {
      tagline: 'Hygienic Design for Food-Grade Applications',
      keyFeatures: [
        'Food-grade plastic or stainless steel chain',
        'Flat surface for stable product support',
        'Easy cleaning and sanitation access',
        'Low friction for smooth product movement',
        'Suitable for wet and dry environments',
        'Flexible curve and straight configurations',
      ],
      applications: [
        'Food processing lines',
        'Bottling and filling operations',
        'Baking and cooking lines',
        'Inspection and labeling stations',
        'Direct product contact conveying',
      ],
    },
  },
  {
    image: 'https://wsbbiybajpomynnjbcpk.supabase.co/storage/v1/object/public/CFT_Machinery/conveyors_compressed/z%20type%20coneyor.png',
    title: 'Z-Type Conveyor',
    category: 'Conveyors',
    shortDescription: 'Vertical Z-type bucket conveyor for space-efficient elevation of bulk materials.',
    overview:
      'The Z-Type Conveyor is designed for vertical material elevation in compact spaces, featuring a Z-shaped configuration with bucket carriers for efficient bulk material transport between different floor levels.',
    details: {
      tagline: 'Space-Efficient Vertical Material Elevation',
      keyFeatures: [
        'Compact Z-shaped design for space saving',
        'Gentle product handling to minimize damage',
        'Food-grade buckets and construction',
        'Multiple height configurations available',
        'Enclosed design for hygiene and safety',
        'Low maintenance with easy access points',
      ],
      applications: [
        'Inter-floor product transfer',
        'Bulk material elevation',
        'Ingredient feeding systems',
        'Packaging line integration',
        'Space-constrained production facilities',
      ],
    },
  },
]

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const CATEGORY_WHY_CHOOSE: Record<ProductCategory, ProductCardItem[]> = {
  Fryers: [
    { title: 'Consistent Processing', description: 'Controlled and repeatable frying workflow.' },
    { title: 'Food-Grade Construction', description: 'SS 304 / SS 316 construction options.' },
    { title: 'Flexible Configuration', description: 'Multiple capacity models to match output targets.' },
    { title: 'Reduced Manual Dependency', description: 'Designed around automated process stages.' },
  ],
  Cutting: [
    { title: 'Repeatable Accuracy', description: 'Servo-driven motion for consistent dimensions.' },
    { title: 'Reduced Product Waste', description: 'Precise cutting minimises off-spec pieces.' },
    { title: 'Quick Changeover', description: 'Adjustable parameters for different products.' },
    { title: 'Hygienic Construction', description: 'Food-grade surfaces with easy cleaning access.' },
  ],
  Forming: [
    { title: 'Uniform Product Shape', description: 'Controlled forming for repeatable output.' },
    { title: 'Scalable Throughput', description: 'Multi-head configurations to match demand.' },
    { title: 'Reduced Manual Dependency', description: 'Automates a labour-intensive stage.' },
    { title: 'Food-Grade Construction', description: 'Stainless steel product-contact surfaces.' },
  ],
  Processing: [
    { title: 'Process Consistency', description: 'Controlled stages for repeatable results.' },
    { title: 'Robust Industrial Build', description: 'Engineered for continuous shift operation.' },
    { title: 'Operator-Friendly', description: 'Simple controls and accessible maintenance points.' },
    { title: 'Line Integration', description: 'Fits into upstream and downstream equipment.' },
  ],
  Automation: [
    { title: 'Higher Line Efficiency', description: 'Keeps production moving without manual gaps.' },
    { title: 'Consistent Handling', description: 'Repeatable placement and transfer accuracy.' },
    { title: 'Reduced Manual Dependency', description: 'Automates repetitive handling tasks.' },
    { title: 'Flexible Integration', description: 'Configured around existing production lines.' },
  ],
  Conveyors: [
    { title: 'Reliable Material Handling', description: 'Smooth and continuous product transport.' },
    { title: 'Flexible Configuration', description: 'Customizable lengths and widths for your line.' },
    { title: 'Low Maintenance', description: 'Durable construction for long-term operation.' },
    { title: 'Seamless Integration', description: 'Connects easily with existing equipment.' },
  ],
}

const DEFAULT_CONSTRUCTION = [
  'Stainless steel SS 304 construction (standard)',
  'SS 316 construction available on request',
  'Food-grade product-contact surfaces',
  'Robust industrial-grade frame and finish',
]

const DEFAULT_ATTACHMENTS = [
  'Custom capacity and configuration on request',
  'Product-specific tooling and change parts',
  'Infeed / outfeed conveyor extensions',
  'Control panel and automation upgrades',
]

const CATEGORY_PROCESS: Record<ProductCategory, ProductProcessStep[]> = {
  Fryers: [
    { step: 'Feeding', description: 'Product is loaded into the frying system' },
    { step: 'Frying', description: 'Temperature-controlled frying for uniform results' },
    { step: 'Discharge & De-oiling', description: 'Product discharge with excess oil removal' },
    { step: 'Cooling', description: 'Final cooling before packing' },
  ],
  Cutting: [
    { step: 'Feeding', description: 'Prepared product is fed into the cutter' },
    { step: 'Cutting', description: 'Servo-driven cutting to the set dimensions' },
    { step: 'Uniform Output', description: 'Consistent pieces delivered downstream' },
  ],
  Forming: [
    { step: 'Dough Feeding', description: 'Dough is loaded and fed into the forming unit' },
    { step: 'Forming', description: 'Product is shaped to the required profile' },
    { step: 'Delivering', description: 'Formed pieces delivered for frying or packing' },
  ],
  Processing: [
    { step: 'Feeding', description: 'Raw material is loaded into the machine' },
    { step: 'Processing', description: 'Controlled processing stage for consistent output' },
    { step: 'Discharge', description: 'Finished product discharged for the next stage' },
  ],
  Automation: [
    { step: 'Infeed', description: 'Products enter the automated handling system' },
    { step: 'Positioning', description: 'Products are aligned and positioned accurately' },
    { step: 'Transfer', description: 'Products are transferred to the next line stage' },
  ],
  Conveyors: [
    { step: 'Loading', description: 'Products are loaded onto the conveyor system' },
    { step: 'Transport', description: 'Smooth and controlled material movement' },
    { step: 'Transfer', description: 'Products delivered to the next processing stage' },
  ],
}

/** Turn a plain feature string into a titled card so every product can render feature cards. */
function toFeatureCards(features: string[]): ProductCardItem[] {
  return features.map((feature) => {
    const [head, ...rest] = feature.split(/ — | - |: /)
    return rest.length > 0
      ? { title: head.trim(), description: rest.join(' ').trim() }
      : { title: feature, description: '' }
  })
}

/** Ensure every product exposes all 13 sections of the page structure. */
function buildDetails(product: ProductSeed, resolved: Omit<Product, 'details'>): ProductDetails {
  const base: ProductDetails = {
    tagline: resolved.shortDescription,
    overview: resolved.overview,
    keyFeatures: resolved.highlights,
    applications: resolved.applications,
    workingProcess: [],
    ...product.details,
  }

  const models = base.models && base.models.length > 0 ? base.models : undefined
  const capacityRow = base.specTable?.rows.find((row) => /capacity/i.test(row[0]))
  const capacityColumnIndex = base.specTable?.columns.findIndex((col) => /capacity/i.test(col)) ?? -1

  const heroSpecs =
    base.heroSpecs ??
    ([
      models ? { label: 'Models', value: models.join(' / ') } : null,
      capacityRow ? { label: 'Capacity', value: capacityRow[1] } : null,
      { label: 'Category', value: resolved.category },
      { label: 'Construction', value: 'SS 304 / SS 316 options' },
      { label: 'Customization', value: 'Available on request' },
    ].filter(Boolean) as ProductHeroSpec[])

  const keyMetrics =
    base.keyMetrics ??
    ([
      models ? { value: `${models.length} ${models.length === 1 ? 'Model' : 'Models'}`, label: 'Available configurations' } : null,
      capacityColumnIndex > 0 && base.specTable
        ? {
            value: base.specTable.rows[base.specTable.rows.length - 1][capacityColumnIndex],
            label: 'Maximum listed capacity',
          }
        : null,
      { value: 'SS 304 / 316', label: 'Food-grade construction option' },
      { value: base.applications.length > 0 ? `${base.applications.length}+` : 'Multiple', label: 'Products handled' },
    ].filter(Boolean) as ProductMetric[])

  const specTable: ProductSpecTable =
    base.specTable ?? {
      columns: ['Specification', 'Value'],
      rows: [
        ['Model', 'Available on request'],
        ['Capacity', 'Configured to requirement'],
        ['Power', 'Available on request'],
        ['Construction', 'SS 304 / SS 316 options'],
      ],
      note: 'Detailed specifications for this machine are shared on enquiry and configured to your production requirement.',
    }

  return {
    ...base,
    overviewHeadline: base.overviewHeadline ?? `${resolved.title} Built for Consistent Production`,
    heroSpecs,
    keyMetrics,
    specTable,
    workingProcess:
      base.workingProcess && base.workingProcess.length > 0 ? base.workingProcess : CATEGORY_PROCESS[resolved.category],
    featureCards: base.featureCards ?? toFeatureCards(base.keyFeatures),
    construction: base.construction ?? DEFAULT_CONSTRUCTION,
    performanceBenefits:
      base.performanceBenefits ??
      (base.whyChoose ?? CATEGORY_WHY_CHOOSE[resolved.category]).map((item) => `${item.title} — ${item.description}`),
    whyChoose: base.whyChoose ?? CATEGORY_WHY_CHOOSE[resolved.category],
    optionalAttachments: base.optionalAttachments ?? DEFAULT_ATTACHMENTS,
    ctaHeadline: base.ctaHeadline ?? 'Planning a New Food Production Line?',
    ctaSubtext:
      base.ctaSubtext ??
      'Tell us your required product, production capacity and automation level — our engineers will recommend the right configuration.',
  }
}

export const PRODUCTS: Product[] = PRODUCT_SEEDS.map((product) => {
  const defaults = CATEGORY_CONTENT[product.category]

  const resolved = {
    slug: slugify(product.title),
    image: product.image,
    title: product.title,
    category: product.category,
    shortDescription: product.shortDescription ?? defaults.shortDescription(product.title),
    overview: product.overview ?? defaults.overview(product.title),
    highlights: product.highlights ?? defaults.highlights,
    applications: product.applications ?? defaults.applications,
  }

  return {
    ...resolved,
    details: buildDetails(product, resolved),
  }
})

/**
 * Dev-only guard: warn if a local product image is not present in /public.
 * Remote images are checked by the browser and image loader instead.
 */
if (process.env.NODE_ENV !== 'production' && typeof window === 'undefined') {
  Promise.all([import('node:fs'), import('node:path')])
    .then(([fs, path]) => {
      const missing = PRODUCTS.filter(
        (product) =>
          !/^https?:\/\//i.test(product.image) &&
          !fs.existsSync(path.join(process.cwd(), 'public', product.image))
      )

      if (missing.length > 0) {
        console.warn(
          `\n[products] ${missing.length} product image(s) missing from /public:\n` +
            missing.map((p) => `  - ${p.title}: ${p.image}`).join('\n') +
            '\n'
        )
      }
    })
    .catch(() => {
      /* filesystem check is best-effort only */
    })
}

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: ProductFilter) {
  return category === 'All' ? PRODUCTS : PRODUCTS.filter((product) => product.category === category)
}

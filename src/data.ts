import { Product, Category, FeatureCard } from './types';

export const CATEGORIES: Category[] = [
    {
        id: 'laboratory-supplies',
        name: 'Laboratory Supplies',
        description: 'High-precision certified reference materials, calibrated standards, and label components.',
        imageUrl: '/images/categories/laboratory-supplies.jpg',
        longDescription: 'Our laboratory supplies are engineered to protect assay fidelity and guarantee analytical traceability. We partner with Geostats to deliver certified reference standards, customized product batch coding, and heavy-duty dust and moisture proof sample packaging directly from our regional supply lines.'
    },
    {
        id: 'ppe',
        name: 'PPE',
        description: 'Premium personal protective equipment, safety headwear, breathing apparatus, and technical garments.',
        imageUrl: '/images/categories/ppe.jpg',
        longDescription: 'Deep mining and industrial worksites require elite lines of physical defense. We supply high-grade certified safety helmets complete with visor screens, specialized steel toe boots, high-visibility reflective clothing, double filter respirators, and extreme grip latex coated gloves.'
    },
    {
        id: 'field-clothes',
        name: 'Field Clothes',
        description: 'Sturdy, tactical-grade survival pants, canvas apparel, and terrain-ready garments.',
        imageUrl: '/images/categories/field-clothes.jpg',
        longDescription: 'Comfort and mechanical resilience are critical during long campaigns and severe heat drills. Our collection of field clothes offers surveyors and technicians maximum heat ventilation, reinforced knee armor, heavy cargo utility enclosures, and tear-resistant material structures.'
    }
];

export const PRODUCTS: Product[] = [
    // Laboratory Supplies
    {
        id: 'field-crm-calib',
        name: 'Certified Reference Materials (CRM)',
        category: 'laboratory-supplies',
        brand: 'GEOSTATS',
        description: 'For accurate geochemical and assay laboratory calibration during multi-site drilling workflows.',
        imageUrl: '/images/products/CRM-removebg-preview.png',
        specifications: [
            'STANDARD: Certified Benchmark CRM',
            'WEIGHT: 100g vacuum protective pouch',
            'PREPARATION: Double blended fine powder',
            'AUDIT: Multi-lab verified analysis standard'
        ],
        features: [
            'Assures pristine baseline accuracy for local lab analyzers and XRF devices',
            'Packaged in durable moisture-proof bags for extended safekeeping'
        ],
        price: 210,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'lab-geostats-crm',
        name: 'GEOSTATS (Certified Benchmarks)',
        category: 'laboratory-supplies',
        brand: 'GEOSTATS',
        description: 'Geostats produces certified benchmarks (CRMs) for assay analysis, ICP-OES, ICP-MS, and XRF. The matrices are as close as possible to the real ores and products of the site.',
        imageUrl: '/images/products/geostat-removebg-preview.png',
        specifications: [
            'METHODS SUITED: ICP-OES / ICP-MS / XRF / Fire Assay support',
            'ORIGIN DESIGN: Direct match matrices to natural ore mines',
            'SEAL TYPE: Triple air-tight foil nitrogen sealed packages',
            'ACCURACY: Rigorous standard deviation certification reports'
        ],
        features: [
            'Essential for precise laboratory diagnostic calibration before drilling begins',
            'Guarantees repeatable, certified scientific benchmarks'
        ],
        price: 180,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'lab-geostats-labelling',
        name: 'GEOSTATS (Labelling)',
        category: 'laboratory-supplies',
        brand: 'GEOSTATS',
        description: 'Labelling of individual packets with product code. Labels are removable so they can be removed from the packet and attached to sampling logs and logs files.',
        imageUrl: '/images/products/geostat label-removebg-preview.png',
        specifications: [
            'CODE INDEX: Removable UV laser product barcode prints',
            'ADHESIVE: Special peel adhesive leaves zero paper residues',
            'INTEGRATION: Formatted to fit standard geological logsheets',
            'COMPATIBILITY: Perfect fit on Geostats foil samples'
        ],
        features: [
            'Removable tags reduce recording transcript errors in active mine labs',
            'Maintains clean database traceability from remote site to final assay results'
        ],
        price: 45,
        isFeatured: false,
        inStock: true
    },

    // PPE
    {
        id: 'ppe-safety-boots',
        name: 'Safety Boots',
        category: 'ppe',
        brand: 'HEAVY TREAD',
        description: 'The boots are made of black leather with double stitching and a padded tongue. Engineered with heavy protective toecaps.',
        imageUrl: '/images/products/boot1-removebg-preview.png',
        specifications: [
            'LEATHER: Dynamic thick split black leather',
            'STITCHING: Heavy-duty industrial double stitching',
            'TONGUE: Cushioned thick padded tongue safety',
            'TOECAP: 200 Joules steel impact armor'
        ],
        features: [
            'Oil and acid proof outer traction sole avoids slick drilling deck slides',
            'Padded lining absorbs joint shock under rigorous exploration marches'
        ],
        price: 95,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'ppe-pitbull-shoes',
        name: 'Pitbull Safety shoes',
        category: 'ppe',
        brand: 'PITBULL',
        description: 'high-quality 3d air mesh for better comfort, high quality suede leather upper, quick release metal eyelets, moulded mounting pad for comfort, steel toecap resistant upto 200j, eva midsole, slip resistant outsole, extra protection for heel safety, flexible heat resistant pu outsole, non-marking outsole, extra leather toe protection, air-cooled memory foam insole for better comfort and extra cushioning.',
        imageUrl: '/images/products/boot2-removebg-preview.png',
        specifications: [
            'UPPER: High quality suede leather & 3D air mesh',
            'TOECAP: Toughened metal toe armor resistant to 200J',
            'INSOLE: Air-cooled memory foam therapeutic padding',
            'OUTSOLE: Flexible heat resistant PU non-marking tread'
        ],
        features: [
            'Equipped with quick release metal eyelets and molded mounting pads',
            'EVA midsole cushions step impact, combined with slip-resistant outer protection for ultimate heel safety'
        ],
        price: 115,
        isFeatured: true,
        inStock: true
    },
    {
        id: 'ppe-dust-mask-respirator',
        name: 'Dust Mask & Respirator',
        category: 'ppe',
        brand: 'DRÄGER',
        description: 'Provides protection against particulates, gases, and vapors when used with approved filters and cartridges.',
        imageUrl: '/images/products/dust-removebg-preview.png',
        specifications: [
            'FILTERS: Dual particle and chemical canister slots',
            'MATERIAL: High skin-grade hypoallergenic silicone',
            'VALVE: One-way cooling exhalation valve',
            'STANDARDS: Certified EN140 & NIOSH standard'
        ],
        features: [
            'Ergonomic contour design eliminates high pressure bridge pinching',
            'Maintains perfect airtight seals under heavy sweat and dust environments'
        ],
        price: 45,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'ppe-worker-gloves',
        name: 'Gloves',
        category: 'ppe',
        brand: 'LATEXGARD',
        description: '7 Gauge Terry Thickness Liner with Black Latex Foam Half Coated Winter Safety Work Gloves.',
        imageUrl: '/images/products/glove_-removebg-preview.png',
        specifications: [
            'LINER: 7 Gauge Terry Thickness thermal liner',
            'COATING: Black Latex Foam half coated grip shape',
            'DEFENSE: Thermal wind and aggregate cut resistant',
            'WRIST: Seamless high-elastic knit wrist'
        ],
        features: [
            'Half coat latex provides excellent breathability while shielding fingers completely',
            'Crinkled latex foam delivers unbeatable grip on wet rock samples and drill shafts'
        ],
        price: 18,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'ppe-eye-goggles',
        name: 'Eye Protection Goggles',
        category: 'ppe',
        brand: 'MSA SAFETY',
        description: 'Safety plastic acrylic construction glasses for protection in various work environments, Safety plastic acrylic construction glasses.',
        imageUrl: '/images/products/eye-removebg-preview.png',
        specifications: [
            'MATERIAL: Strong safety plastic acrylic construct',
            'RATING: ANSI Z87.1 High impact resistance standard',
            'BAND: Soft flex PVC frame with elastic headband',
            'SHIELD: Anti-Scratch anti-fog visual coating'
        ],
        features: [
            'Guarantees perfect splash and particulate proof orbital eye defense',
            'Vented frame design avoids lens condense during underground operations'
        ],
        price: 12,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'ppe-hivis-cotton-tape',
        name: 'Hi-Visibility Two Tone Cotton With Tape',
        category: 'ppe',
        brand: 'KING GEAR',
        description: '100% Cotton, 50mm reflective tape in H-configuration, suitable for light industrial wash. Left chest pocket with pencil & ruler partition, Mobile phone pocket, reinforced pocket lining and two side pockets. Utility pocket & elasticized back waist.',
        imageUrl: '/images/products/two_tone_-removebg-preview.png',
        specifications: [
            'MATERIAL: 100% Cotton industrial grade',
            'TAPE WIDTH: 50mm reflective silver striping',
            'CONFIGURATION: Classic H-Configuration layout',
            'UTILITY: Left chest pocket with partitions'
        ],
        features: [
            'Built with mobile phone slots and reinforced lining for severe daily wear',
            'Elasticized back waist allows maximum fit and torso rotation comfort'
        ],
        price: 54,
        isFeatured: true,
        inStock: true
    },
    {
        id: 'ppe-safety-vest',
        name: 'Safety vest',
        category: 'ppe',
        brand: 'PROTECTR',
        description: 'Multi-pocket, High visibility safety vest, Yellow, 160 grams, Breathable & comfort and lightweight.',
        imageUrl: '/images/products/tshirt-removebg-preview.png',
        specifications: [
            'FORMAT: Multi-pocket visual vest',
            'COLOR: Fluorescent safety Yellow',
            'WEIGHT: 160 grams ultralight mesh',
            'VENTILATION: Full porous air-mesh'
        ],
        features: [
            'Tear-away heavy zip guarantees safe release under machine pulley traps',
            'Holds multiple notebook spaces, compass loops and identification card sleeves'
        ],
        price: 15,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'ppe-safety-pants',
        name: 'Safety pants',
        category: 'ppe',
        brand: 'SAFEME',
        description: 'Safety reflective pants, High visible trousers, Breathable & elastic polyester for drilling site safety.',
        imageUrl: '/images/products/pants-removebg-preview.png',
        specifications: [
            'FORMAT: Professional high vis safety trousers',
            'MATERIAL: Premium breathable elastic polyester',
            'REFLECTORS: ANSI Grade 2 vertical silver tapes',
            'POCKETS: Multi-functional ruler and instrument sockets'
        ],
        features: [
            'Reinforced knee lining protects against rough mine gravel grazes',
            'Comfort-fit elastic waistband lets surveyors bend and climb with absolute ease'
        ],
        price: 34,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'ppe-reflective-shirt',
        name: 'Reflective Shirt',
        category: 'ppe',
        brand: 'SAFEME',
        description: 'Safety reflective shirt, High visible long sleeve, Breathable & elastic polyester built for hot mine quarries.',
        imageUrl: '/images/products/shirt-removebg-preview.png',
        specifications: [
            'STYLE: Long Sleeve High Visibility',
            'MATERIAL: Breathable & elastic polyester',
            'REFLECTIVITY: 50mm double ring bands',
            'SAFETY STANDARD: EN ISO 20471'
        ],
        features: [
            'Sweat wicking micro mesh fiber handles temperatures up to 50 degrees Celsius',
            'High wash-cycle resistance maintains fluorescent pigment shine and structure'
        ],
        price: 28,
        isFeatured: false,
        inStock: true
    },
    {
        id: 'msa-safety-helmet',
        name: 'Safety Helmet',
        category: 'ppe',
        brand: 'MSA SAFETY',
        description: 'Excellent head protection made from high-density polyethylene (HDPE) complete with high-noise ear defenders and integrated anti-fog face visor.',
        imageUrl: '/images/products/helmet_-removebg-preview.png',
        specifications: [
            'SHELL: High density HDPE',
            'DEFENDERS: Certified high-noise cut range',
            'VISOR: Anti-fog clear polymer shield',
            'STANDARDS: EN 397 ANSI Z89 / ISEA'
        ],
        features: [
            'Maintains total impact resistance under scorching dry desert weather campaigns',
            'Double strap crown adjustment locks secure alignment during active worksite jumps'
        ],
        price: 65,
        isFeatured: true,
        inStock: true
    },

    // Field Clothes
    {
        id: 'field-cargo-pants',
        name: 'Cargo pants',
        category: 'field-clothes',
        brand: 'QUARTZITE',
        description: 'Ultra-rugged mechanical ripstop canvas cargo pants, double-reinforced knees with integrated tool pockets, designed specifically for geological field mapping and harsh survival conditions.',
        imageUrl: '/images/products/cargo_pants_-removebg-preview.png',
        specifications: [
            'MATERIAL: 100% heavy-duty Ripstop Cotton Canvas',
            'POCKET COUNT: 10 tactical pockets with quick-flap closures',
            'STITCHING: Triple-lock heavy nylon thread alignment',
            'REINFORCEMENT: Double-layer knee & seat seatings'
        ],
        features: [
            'Resists severe desert brush scratches and high-angle aggregate abrasions',
            'Integrated tool loops and deep coin/map expansion pockets',
            'Breathable, UV-protective weave prevents thermal locking on hot operations'
        ],
        price: 65,
        isFeatured: true,
        inStock: true
    }
];

export const FEATURE_CARDS: FeatureCard[] = [
    
    {
        title: 'MEA COVERAGE',
        description: 'Expertise in navigating the complex logistics of delivering to remote sites across the Middle East & Africa.',
        iconName: 'Globe'
    },
    {
        title: 'TECHNICAL EXPERTISE',
        description: 'Our team understands geology and mining, ensuring you get the exact right tool for your specific application.',
        iconName: 'Zap'
    },
    {
        title: 'DUBAI HUB ADVANTAGE',
        description: 'Strategic warehousing in the UAE allows for rapid deployment and efficient supply chain management.',
        iconName: 'MapPin'
    },
    {
        title: 'QUALITY GUARANTEE',
        description: 'Every instrument and tool meets rigorous international standards for accuracy and durability.',
        iconName: 'CheckCircle'
    },
    {
        title: 'FIELD-TESTED GEAR',
        description: 'We only supply equipment that has been proven to withstand the harshest environmental conditions.',
        iconName: 'HardHat'
    }
];

export const TRUSTED_BRANDS = [
    'Dräger',
    'MSA Safety',
    'Safeme',
    'King Gear',
    'Estwing',
    'Geostats'
];
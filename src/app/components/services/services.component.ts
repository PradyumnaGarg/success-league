import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  finalData = [
    {
      serviceId: '1',
      serviceName: 'LEGAL, REGULATORY & COMPLIANCE',
      imagePath: 'assets/img/new/Attorneys.jpeg',
      paragraphs: [
        "We advise and assist clients on the establishment of operations in the India across all corporate structures with special focus on handholding services to Start-ups. This involves obtaining all registrations, licenses and approvals and meeting all legal requirements for commencing their operations.",
        "Our due diligence process provides a detailed review of a target business from a financial and commercial perspective, adding value by focusing on the key issues likely to affect the decision to proceed with the acquisition and those factors which affect the price."
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            'All Corporate matters under Companies Act, 2013, Indian Partnership Act, 1932, Limited Liability Partnership Act, 2008.',
            'Advising on the legal framework for the proposed business activity, as well as on the preferred vehicle or structure for the investment, including the establishment of branches, sidiaries, representative offices and regional headquarters.',
            'Advising on and obtaining special registrations for Start-ups to avail of tax and other incentives.',
            'Preparing, negotiating and reviewing contracts for various corporate and commercial transactions that may arise from the clients business.',
            'Corporate Law Assurance',
            'Corporate Compliance Management',
            'Due Diligence- Legal, Financial and Commercial for Mergers & Acquisitions and Corporate Restructuring',
            'Forex Law Assurance',
            'Joint Venture, Share Purchase and Acquisition',
            'Agreements',
            'Commercial Agreements',
            'Review and assistance in documentation from regulatory viewpoint',
            'Mapping of regulatory processes',
            'Regulatory compliances for Corporate Laws, Securities Laws, Capital Market, Foreign Exchange Management Act, Competition Law and Intellectual Property.'

          ]
        },
        {
          title: 'Litigation, Arbitration & Dispute Resolution',
          paragraphs: [
            'Our Dispute Resolution Practice Group (DRPG) provides strategic dispute analysis and practical advice on realistic assessments of the outcomes and potential costs. We help you to make nformed decisions consistent with your commercial objectives.The Firm has a strong Litigation & Arbitration Group consisting of lawyers with significant experience in handling dispute esolution in diverse jurisdictions.',
            'We help our clients in all fields ranging from civil and criminal litigation and focus on all types of litigation instituted and prosecuted within India. Our lawyers help the clients select the best and most suitable strategy while taking into account the complexities and merits of each matter on customized parameters. Our lawyers are acknowledged as some of the leading Indian  practitioners in dispute resolution.',
            'The Dispute Resolution group entertains matters predominantly in most of the Courts in India, including District Courts, Tribunals, Commissions, Forums, High Courts and the Supreme Court of India.'
          ],
          list: [
            'International and domestic Commercial Arbitration',
            ' Construction Arbitration',
            ' Corporate disputes, including shareholders ‘actions and other inter-corporate and Intra-corporate disputes',
            ' Partnership and Joint Venture controversies',
            ' International Trade disputes',
            ' Banking and Finance disputes',
            ' Distribution Agreement disputes',
            ' Insurance and Reinsurance actions',
            ' Restraint of Trade',
            ' Intellectual Property actions',
            ' Construction Disputes',
            ' Professional Negligence',
            ' Contract and Property disputes',
            ' Enforcement of Foreign Judgments and Multijurisdictional Conflicts',
            ' Tort Claims',
            ' Administrative, Tax and Customs Litigation',
            ' Corporate Rehabilitation and Insolvency',
            ' Infringement of Intellectual Property Rights',
            ' Constitutional Matters',
            ' Matrimonial Disputes/ Divorce',
            ' Service Matters',
          ] 
        },
        {
          title: 'Employment & Service Matters',
          paragraphs: [
            'Employment law is a broad area of law that covers the relationship between the Employer and the employees, unions and employers, that is, management. The lawyers of the firm have been representing various employers in fields of labour disputes, union relations and wage & hour laws, compensation and retrenchment related disputes before the administrative, Judicial and Quasi judicial authorities and Tribunals',
            'The professionals of the firm counsel the clients in each and every area of labour and employment law, and have been providing support in all aspects of employment and labour affairs, and regularly provide legal advice and represent various institutions, real estate developers, hotel chains, pharmaceutical companies towards the employment related affairs, Trade Unions and mployment related litigation.',
            'Success League helps employers arrive at sound and mutually beneficial employment policies, leveraging the deep knowledge of the dynamics of Indian labour laws and practices in consonance with and internationally accepted norms and policies.'
          ],
          list: [
            ' General Employment Law Advice',
            ' Employment Contract Review and Development',
            ' Workmens Compensation',
            ' Employee Benefits',
            ' Executive Compensation and Transfer',
            ' Collective Employment Termination',
            ' Collective Bargaining Agreements',
            ' Discrimination and Sexual Harassment Law Advice',
            ' Trade Union Recognition procedures',
            ' Expat & Immigration-related matters',
            ' Drafting Non-Disclosure Agreements, Confidentiality Agreements, Non-compete Agreements'
          ]
        },
        {
          title: 'Representations and Settlement ',
          paragraphs: [],
          list: [
            ' Ministry of Corporate Affairs',
            ' Stock Exchanges, Securities and Exchange Board of India (SEBI),', 
            ' Securities Appellate Tribunal (SAT)',
            ' Competition Commission of India (CCI)',
            ' Reserve Bank of India (RBI), Invest India, Enforcement Directorate (ED)',
            ' District Courts, Company Law Board (CLB), Tribunals, High Courts and Supreme Court',
            ' Tax Authorities including Commissioner (Appeals) and ITAT',
            ' Registrar and Intellectual Property Appellate Board',
            ' The National Consumer Dispute Redressal Commission (NCDRC)',
            ' The State Dispute Redressal Commissions',
            ' District Consumer Dispute Redressal Forums',
            ' Police Department',
          ]
        }
      ]
    },
    {
      serviceId: '2',
      serviceName: 'REAL ESTATE',
      imagePath: 'assets/img/new/2.jpeg',
      paragraphs: [
        "The Firm has been advising to its clients on acquiring or disposing of real estate, creating a tax efficient investment vehicle, or strategizing a development project. The firm shall endeavour to advise you no matter you are an investor, financier, owner, occupier or developer. The Group also provides strategic legal advice to Builders, Developers, Infrastructure Development Companies, Property Owners and Government Undertakings on various issues relating to real estate transactions. The firm shall also provide services for due diligence and comprehensive documentation and multiple clients have particularly valued our support in dispute resolution."
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            'Real Estate Investment Trusts (REIT)',
            'Matters pertaining to Real Estate Regulation & Development Act (RERA)',
            'Residential & Commercial Real Estate',
            'Retail Spaces, Shopping Malls, Multiplexes',
            'Hotels & Hospitality Properties',
            'Industrial Properties',
            'Conducting due diligence investigation in a residential, commercial or industrial real estate transaction and verifying title deeds, conducting title search/title inquiry of properties all over India',
            'Rendering service to clients to receive various approvals/permission/licenses from authorities concerned',
            'Drafting of Construction Contracts, Joint Development Agreements',
            'Grant/ Assignment of leasing / licensing of commercial and residential properties ',
            'Advising on Real Estate Projects like townships, SEZ, Technology Parks Hotels & Tourism Projects ',
            'Exposition services for registration of properties at sub-registrar offices.',
            'Provision and representation in Real estate related litigation before all the forums- Supreme Court of India, High Courts, NCLT, NCDRC as well as Stamp Collectors including major property transaction disputes, Enfranchisement, Possession, Tenancy, Insolvency, Stamp Duty evasion, Specific Performance of the Contract, etc.',
            'Advise on the Alternative means to resolve property disputes.',
            'Drafting and review of maintenance agreement, service agreement, amenities agreement, escrow agreement, builder agreement, engineering, procurement & construction contracts, management and operations agreement, master purchase agreement, bank guarantee, franchise agreement, etc.	',
            'Drafting and Registration of special and general power of attorney, family settlement, partition deed, mortgage deed, gift, will, ect.',
          ]
        },
        {
          title: 'RERA Compliance',
          paragraphs: [],
          list: [
            ' Advising Promoters and Developers on the various compliances under the RERA (including Waterfall Provisions)',
            ' Registration of projects with RERA authorities',
            ' Registration of Real Estate Agents',
            ' Managing fund and Audit of Financials in accordance with Section 4(2)(1)(D) of the Act',
            ' Issuing certificate of withdrawal for Specific Bank Account under RERA.',
            ' Handling legal litigation and representing client in RERA and Appellate Tribunal',
            ' Drafting & reviewing Brochure, Allotment Letter, Agreement to Sale and Sale Deed',
            ' Filing Quarterly updates with RERA',
            ' Consultancy relating to RERA compliances',
          ] 
        },
        {
          title: 'Real Estate Investment Trusts (REITs)',
          paragraphs: [],
          list: [
            ' Tax Counselling and efficient transaction structuring',
            ' Ongoing company representation, corporate and securities counselling',
            ' Corporate governance, regulatory and compliance matters',
            ' Conversions of existing corporations and partnerships into REITs',
          ]
        },
      ]
    },
    {
      serviceId: '3',
      serviceName: 'FAMILY GOVERNANCE, TRUST, ESTATE & SUCCESSION PLANNING',
      imagePath: 'assets/img/new/3.jpg',
      paragraphs: [
        "Family Governance, Trust, Estate & Succession Planning entails ensuring the best management of your estate, properties and underlying/ associated assets so as to derive maximum returns/ benefits not only during the client's lifetime but also transfer the same to intergenerational levels.",
        "Success League Business Solutions leverages its expertise in onshore Trust, Estate & Succession Planning services to the best advantage of its clients. We have the necessary competence to provide highly customized, personalized and structured solutions to address the complex needs of High Net Worth Families, Family Businesses and Ultra-High Net Worth Individuals in India.",
        "Our bouquet of services includes effective trust, estate, succession planning, family enterprise consulting, escrow and custodial services"
      ],
      list:[

      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            ' Intergenerational Wealth Transfer, Succession Planning, Creation of Trusts, Trust Management',
            ' Drafting of trust deeds and other auxiliary documents',
            ' Registration of trust deeds',
            ' International Trust Structures, Cross Border Estate Planning, Maintenance of Dependents ',
            ' Management of trust as trustee or managing trustee',
            ' Drafting, registration and safe custody of Wills.',
            ' Obtaining letter of administration and probate from the court',
            ' Advising on the roles of Wills, Powers of Attorney, Living Wills and Probate in a wealth transfer plan',
            ' Providing succession planning for small business and identify the appropriate solution for each unique situation',
            ' Providing advisory support to clients on trust planning & business succession planning',
            ' Identifying assets of the testator',
            ' Smooth administration of the trust',
            ' Creating trusts for minors, differently-abled & persons with special needs',
            ' Providing a transparent structure that will support the objectives of the family well into the future',
            ' Philanthropy, Foundation Management & Charitable Planning',
            ' Family governance structure & interpretation of family dynamics for effective succession',
            ' Seamless transmission of assets with minimum administrative hassle',
            ' Securing the interests of the beneficiaries',
            ' Family Governance: Family constitution development, family meetings, and next-generation planning.',
            ' Networking and Access: Access to exclusive events, networking opportunities, and deal flow.',
            ' Education and Family Dynamics: Family education, leadership development, and conflict resolution.',
            ' Digital Asset Management: Management and protection of digital assets such as Non-Fungible Tokens, Security Tokens, Virtual Brand Logos, Central Bank Digital Currencies, Infographics, Stable coins, Whitepaper PDFs and Digital Art.',
            ' Legal & Regulatory Opinion regarding Ownership & Possession of Exotic Luxury/Leisure Assets including Artworks, Artifacts/ Sculptures, Numismatics, Luxury Watches, Vintage Wines, Rare Books, Antique Cars, Private Jets, Yachts etc.',
          ]
        }
      ]
    },
    {
      serviceId: '4',
      serviceName: 'INTERNATIONAL BUSINESS',
      imagePath: 'assets/img/new/International Business.jpeg',
      paragraphs: [
        "Globalisation has transformed the way businesses operate. It has sped up global integration of business collaborations, joint ventures and supply sourcing too by removing trade barriers. There is also a change in the preferences of customers due to the possibility of getting any goods or services from foreign countries.",
        "As companies grow in their domestic segments, their commercial interests cannot be confined to their home markets alone. For most business enterprises in their growth stage, international expansion is crucial to the development of new markets, expansion of their consumer base alongwith opportunities to attract big partners and investors. Success League Business Solutions (SLBS) offers  a full kaleidoscope of services for comprehensive support of business abroad."
      ],
      list: [
        "Success League collaborates with Investment Facilitation Agencies and Business Chambers & prepares for matchmaking of foreign companies with their Indian counterparts for investment, technology transfer and trade.",
        "We regularly coordinate with overseas investment promotion agencies operating in India about business prospects for Indian industrialists & businesses in overseas markets.",
        "By means of diligent communication, we strive continuously to increase awareness on the part of foreign investors, industrialists, service providers and technology suppliers about business conditions, policy & procedures about FDI in selected regions and priority sectors of India.",
        "We facilitate to provide expert advice and information regarding forms of cooperation, such as joint ventures, subcontracting, licensing and any other form of transfer of technology/ resources to India.",
        "Success League also provides services like Customs Litigation, Customs Valuation & Costing, Export- Import Documentation alongwith facilitating International Trade Finance, ( Pre-Shipment as well as Post-Shipment), to its clients.",
        "Specialization in International Chamber of Commerce (ICC) Rules on Documentary Credits (UCP 600)",
        "All related litigation dealing with disputes under Letters of Credit and Demand Guarantee, Bank-to-Bank Reimbursement (URR-525), Rules relating to Collection (URC 522), International Standby Practices (ISP 98) and Trading terms and conditions (INCOTERMS).",
        "All services under Export-Import under Foreign Trade (Development & Regulation) Act of 1992 & The Marine Products Export Development Authority Act, 1972",
      ],
    },
    {
      serviceId: '5',
      serviceName: 'START-UPS MENTORING- LEGAL & INSTITUTIONAL',
      imagePath: 'assets/img/new/Startup Mentoring- Legal & Institutional.jpeg',
      paragraphs: [
        "With the spread of COVID-19, the world is facing an unprecedented economic and health crisis. Many global leaders and economists view COVID-19 as “the  gravest challenge since World War II.” On March 16, 2020 the G7 leaders issued a joint statement “acknowledging that the COVID-19 pandemic is a human tragedy and a global health crisis, which also poses major risks for the world economy.",
        "As the world has become tightly connected into a global society, the problems of one country can also greatly impact other countries through various  global chains. Under these circumstances, it will be helpful to share information on the rigorous epidemiological investigation using ICT, and  pan-governmental cooperation at national, provincial and city levels.",
        "As the pandemic is unfolding in ways completely different from past economic crises, we need unprecedented economic countermeasures. Under such circumstances, corporates should divert production to production plants with less disruption to the supply chain & workforce, update budget allocations to suit need transformation and recovery rate, offer loans & cash payments to suppliers to prevent production halt, redeploy sales effort to online for B2C & B2B and offer paid leaves to employees and other support staff. ",
        "They should reconsider policy measures w-r-t reimagining business possibilities, identifying behaviour shifts and considering inorganic moves. Moreover, they should re-strategize FY 2023-24 by building agile scenario-based plans, re-configuring workforce to deal with uncertainty, rationalize costs for resilience & explore M&A and other Corporate Restructuring moves.",
        "The Govt. of India has steadfastly risen to the occasion and introduced programmes like 'Vocal for Local' and ‘Aatmnirbhar Bharat' to give tremendous boost to indigenous production and encouraging new entrepreneurs, technocrats and edupreneurs to start new ventures for generating employment opportunities as well as aid the Indian economy to reach a new high and resuscitate the India growth story.",
        "In 2021, many Indian Start-ups proudly entered the prestigious 'Unicorn Club',namely Flipkart Moglix, BharatPe, CoinDCX, upGrad, Groww, BlackBuck, Droom, OfBusiness, Meesho and Zetwork & successfully demonstrated that Indian business and digital fraternity can stand upto any challenge posed by unprecedented circumstances impacting global business environment.",
        "At Success League, we won't share just our experience with you. Over the course of years, we have developed strong networks in different fields of business across varied sectors. Through Startup mentoring, we can help you envisage your short as well as long-term goals & objectives and act as a conduit between you and different agencies. We can open up networking opportunities for you in competitor analysis, demand estimation and market research amongst host of others",
      ],
      subService: [
        {
          title: 'Our Overall Handholding Approach',
          paragraphs: [],
          list: [
            ' Provide pertinent, positive support and constructive feedback.',
            ' Guide you on how to be efficient and effective with your resources, especially time and money.',
            ' Be practical in approach and focused on solutions to issues as they arise.',
            ' Providing a safe and confidential engagement.',
          ]
        },
        {
          title: 'Stage 1 – Introduction',
          paragraphs: [],
          list: [
            ' Getting to know you and your business idea. Where have you been, where are you now, where do you want to get to? ',
            ' What issues are you facing?',
            ' Understanding your target audience, competitors, market.',
            ' Drafting a plan and setting achievable goals and action points.',
            ' How can we assist you?',
          ] 
        },
        {
          title: 'Stage 2 – Orientation',
          paragraphs: [],
          list: [
            ' Detailed S.W.O.T. Analysis.',
            ' In-depth Market Research Considerations.',
            ' Establishing Key Performance Indicators.',
            ' Understanding your customers segments',
          ] 
        },
        {
          title: 'Stage 3 – Conception ',
          paragraphs: [],
          list: [
          ' Consider challenges and risks.',
          ' Removing Barriers to Success.',
          ' What are the areas of change anticipated over the next three to five years?',
          ' Financing your Venture through the Best Investment Vehicle.',
          ' Marketing Strategy Defined and Outlined.',
          ] 
        },
        {
          title: 'Start-Up Services ',
          paragraphs: [
            "Start-Up Services may be further categorized under Core Services and Third- Party Outsourced Services, where we work in collaboration with our professional service partners in some areas.",
          ],
          list: [] 
        },
        {
          title: 'CORE Services',
          paragraphs: [      
          ],
          list: [
            ' Investor Pitch Creation',
            ' Startup Financing',
            ' Legal , Regulatory & Compliance Issues',
            ' Intellectual Property ',
            ' Imparting Effective Communication Skills.',
            ' Leadership Development for the Promoters/ Core Team.',
            ' Networking with appropriate Government Agencies, Professionals and Organizations.',
            ' Preparation before interacting with Statutory Agencies/ Venture Capital Funds / Angel Investors/ Seed Financing Institutions/ Banks for Bridge Loans.',
            ' Access to Start-Up Ecosystem.',
            ' Forging Professional Relationships with other Entrepreneurs / Startups.',
            ' Developing Flexibility, Knack of Diversification, Adaptability to Change and Perseverance.',
            ' Identifying New Opportunities & Having an Eye for Commercialisation.',
            ' Problem- Solving through Sharpening your Curiosity and Recognizing / unearthing new problems & challenges and search for potential niche opportunities.',
            ' Spotting Trends and availing First-Movers Advantage.',
          ] 
        },
        {
          title: 'LEGAL COVERAGE Under Start-Up Mentoring',
          paragraphs: [  
            "Ensuring Due Diligence and Compliance under the following: -"    
          ],
          list: [
            ' Start-Up India Initiative undertaken by the Govt. Of India',
            ' Business Structure Formation under Companies Act, 2013, Indian Partnership Act, 1932, Limited Liability Partnership Act, 2008.',
            ' Licencing of Business under Goods and Services Tax Act, 2017 and Shops and Establishments Act, 1953.',
          ],
        },
        {
          title: '',
          paragraphs: [
            "Matters relating to Personnel and Labour under the following statutes: -"      
          ],
          list: [
            ' The Industrial Disputes Act, 1947',
            ' The Trade Unit Act, 1926',
            ' The Inter-State Migrant Workmen (Regulation of Employment and Service) Act, 1979',
            ' The Payment of Gratuity Act, 1972',
            ' The Employees’ Provident Funds and Miscellaneous Provisions Act, 1952',
            ' The Employees’ State Insurance Act, 1948',
            ' Building and Other Constructions Workers’ (Regulation of Employment and Conditions of Service) Act, 1996',
            ' The Industrial Employment (Standing Orders) Act, 1946',
            ' The Contract Labour (Regulation and Abolition) Act, 1970',
          ] 
        },
      ],
  
    },
    {
      serviceId: '6',
      serviceName: 'TECHNICAL SERVICES CONSULTANCY FOR START-UPS-THIRD-PARTY OUTSOURCED SERVICES',
      imagePath: 'assets/img/new/Outsourced-Start-Up Technical.jpg',
      paragraphs: [
        "As a result of rise of 'Disruptive Thinking', the rate of development of innovation in technology development has seen an unprecedented escalation. The industry has been revolutionized in many aspects to solve problems or offer a better alternative to the currently existing solutions.",
        "A start-up's innovation trigger is the fulfilment of an unmet need or an unaddressed problem in the market by creating a new product or service. This role underlines a start-ups primary function in the market, which aims to meet the needs of diverse consumers in different ways.",
        "More often than not, a start up's progress is hindered by the lack/ absence of experienced and distinguished technical services consultancy primarily in the development of Prototype and MVP, thereby jeopardizing the entire commercial production process.",
        "Success League Business Solutions offers technical services consultancy by means of its professional collaborators on an outsourced basis in all the following key areas: -",
      ],
      list:[
        ' Business Idea Generation ',
        ' Concept Refinement ',
        ' Identifying Scope for Further Innovation ',
        ' Prefeasibility Studies, Feasibility Reports, Detailed Project Reports',
        ' Sector- specific Project Management Consultancy services ',
        ' Asset Valuation, TEV (Techno- Economic Viability), LIE (Lender’s Independent Engineer’s) Report for Banks/ FIs, PE, VC.',
        ' Due Diligence & Project Specific Studies',
        ' Project Implementation Monitoring, Evaluation & Reports',
        ' Technology Selection, Evaluation & Transfer',
        ' Environmental Impact Assessment',
        ' Social Impact Assessment',
        ' IT & Software Development',
      ],
      subService: [
        {
          title: '',
          paragraphs: ["Besides, we also provide the following ‘Commercial Promotion’ services to our entrepreneurial clients: -"],
          list: [
            ' Business Strategy',
            ' Market Research',
            ' Preparing a "Value Proposition"',
            ' Marketing & Brand Positioning',
            ' Comprehensive Digital Marketing Bouquet',
          ]
        },
      ]
    },
    {
      serviceId: '7',
      serviceName: 'START-UP FINANCING/ FUND RAISING/ INVESTMENT FACILITATION',
      imagePath: 'assets/img/new/Startup Funding.jpeg',
      paragraphs: [],
      subService: [
        {
          title: 'What is a Start-Up Entity',
          paragraphs: [
            "A Startup is a new & young company founded by one or more entrepreneurs to develop a unique product/ service idea which employs a relatively novel technologyand commercialise it successfully.",
            "As per Gazette notification dated May 23, 2017, an entity shall be considered as a Startup:",
            "a) If it is incorporated as a private limited company (as defined in the Companies Act, 2013) or registered as a partnership firm (registered under section 59 of the Partnership Act, 1932) or a limited liability partnership (under the Limited Liability Partnership Act, 2008) in India; and",
            "b) Up to seven years from the date of its incorporation/ registration; however, in the case of Startups in the biotechnology sector, the period shall be up to ten years from the date of its incorporation/ registration; and",
            "c) If its turnover for any of the financial years since incorporation/ registration has not exceeded Rupees 25 crores; and",
            "d) If it is working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of employment generation or wealth creation.",
            "Provided that any such entity formed by splitting up or reconstruction of a businessalready in existence shall not be considered a 'Startup'.",
            "Further, The Manual for Procurement of Consultancy and other Services, 2017 considers “an entity as Start-up up to a period of 10 years vis-à-vis 5 years and turnover threshold has been revised from INR 25 crores to INR 100 crores. Furthermore, an entity recognised as Start-up by DPIIT is eligible for benefit granted under Procurement purposes as against the requirement of obtaining eligible business certificate by the Inter-Ministerial Board.",
            "Success League assists the upcoming Start-Ups with availing all the financial and non-financial benefits offered under Start-Up India flagship program launched by the Govt. of India, namely:-",
          ],
          list: [
            ' Startup India Seed Fund Scheme (SISFS)',
            ' Fund of Funds for Startups (FFS)',
            ' Section 80-IAC: Income Tax exemption for 3 out of 10 years',
            ' Section 79: Carry forward and set off of losses',
            ' Startups are provided with an 80% rebate in filing of patents vis-a-vis other companies, bringing down the cost from INR 8,000 to INR 1,600.',
            ' 50% rebate is also provided in filing of trademarks vis-a-vis other companies decreasing the cost from INR 10,000 to INR 5,000.',
            ' A DPIIT recognized startup is eligible for exemption from the provisions of section 56(2) (vii b) of the Income Tax Act.',
            ' The Finance Bill 2022 provided that the surcharge on the long-term capital gain is capped at 15% for unlisted companies from existing 37% for high income group. This announcement will effectively reduce the tax rate from 28.5% to 23.9%.',
          ]
        },
        {
          title: '',
          paragraphs: [
            "Additionally, Success League helps Start-ups for successfully meeting their financial requirements at every stage of funding by facilitating them to explore various avenues of funding & investment (Private as well as Government) at respective stages of their life cycle. The Mechanics of Financing under various stages are explained hereafter.",
          ],
          list: [] 
        },
        {
          title: 'Start-Up Funding',
          paragraphs: [
            "Startup funding is the process of searching and identifying investors who can finance an entrepreneur’s novel venture and transform his idea and vision into reality i.e. product or service, and later result into revenue generation. With more than 73,000 startups, India is the home to the third largest startup ecosystem in the world. Indian startups managed to raise funds to the tune of $19 Billion in 2022.",
            "Considering the various stages of growth through which a startup would undergo, the sources of funding may differ. E.g. a startup may have to go through the developmental process of sunrise, expansion, product development or it may decide to scale up its inventory and office space.",
            "In the overall commercial scenario, investors fund a startup in the hope of gaining alarge amount of profit, and depending upon the nature of investment (debt or equity), they may also impact the running of the business by participating in the decision-making process.",
            "Usually, investors look for the primary factors involved in the funding process, namely-",
          ],
          list: [
            ' Differential Offering & Value Proposition',
            ' Management and Team',
            ' Market Potential & Demand Estimation', 
            ' Scalability and Sustainability',
            ' Customers and Suppliers',
            ' Competitive Landscape',
            ' Financial Appraisal',
            ' Marketing Avenues',
            ' Exit Options',
          ]
        },
        {
          title: 'Stages of Funding',
          paragraphs: [
            "The most appropriate criteria of deciding the stage of startup funding involves the determination of time-scale and ascertainment of risk-perception associated with the product/ service. The stages of funding broadly fall into two categories:",
            "(a) Early Stage and",
            "(b) Later Stage",
          ],
          list: []
        },
        {
          title: 'Early Stage Financing:',
          paragraphs: [
            "This stage includes-",
            "(i) Pre- Seed Funding/ Ideation ",
            "(ii) Seed Funding/ Validation ",
            "(iii) Sunrise/ Early Traction, Series-A or First-Round Financing ",
            "(iv) Scaling, Series-B, or Second-Round Financing",
          ],
          list: []
        },

        {
          title: '1. Pre- Seed Funding/ Ideation:',
          paragraphs: [
            "This is the preliminary stage where the entrepreneur is trying to bring his idea to life. It is principally an ‘applied research’ phase where the promoter tries to transform his idea from a pre-commercialisation project case expected to develop into a prototype which may not necessarily result into a business launch. Here, the primary risk is ‘Marketability’, i.e. whether the idea is viable and whether it or another similar idea has been commercialised before or not?",
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            "This stage requires minimal amount of funding and involves fewer complexities and documentation and sources are very limited and informal channels are available to raise funds. Funding sources at this point consist of Self-financing (Bootstrapping), Family & Friends, grants from pitching events, Awards from Business Plan conception competitions etc.",
          ],
          list: []
        },
        {
          title: '2. Seed Funding/ Validation',
          paragraphs: [
            "This stage involves the transformation of business idea research project into a prototype that could be used for product testing and market trials on a selected and limited potential customer base that could further enable commercialisation on a wider scale. At this stage, the entrepreneur has to hire a competent team, conduct thorough market research alongwith field trials and bring mentors onboard. It must also be ensured that technology being used matches the market opportunities.",
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            "Funds raised at this stage are used essentially for meeting marketing and product development related expenditures. The risk perception of investment at this stage is extremely high. Funding sources at this stage consist of Angel Investors, Crowd funding, business incubators and accelerators, Government Loan Schemes, Collateral-free Debt by Government Agencies.",
          ],
          list: []
        },
        {
          title: '3. Sunrise/ Early Traction, Series-A or First-Round Financing',
          paragraphs: [
            "This is the post market launch stage where commercial manufacturing has actually commenced and the startup’s products are available to the customers. The essence of this stage is that the product/service is being commercialised for the first time. The product may be Greenfield based on a relatively new or high technology and new business in which the entrepreneur has good knowledge and working experience.",
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            "Funds raised at this stage are used primarily for product development, expanding the customer base (App Downloads in case of Services) improving your brand credibility by launching novel offerings and tapping new markets by expanding geographical footprints. The risk perception at this stage is very high.", 
            "Funding sources at this stage consist of Venture Capital Funds, Venture Debt Funds and Non-Banking Finance Companies (NBFC). Angel Investors may also participate at this stage but tend to have a diminished influence.",
            "Partly because of the equity dilution clause and partly due to the unviability of the low amount of equity investment, the involvement of Venture Capital Funds at this stage may generally be relatively low. Therefore, some start-ups may approach for Bank Loans as their product/ service starts to gain traction.",
          ],
          list: []
        },
        {
          title: '4. Scaling, Series-B, or Second-Round Financing',
          paragraphs: [
            "When a business reaches Series B stage, it becomes evident that the startup is now stable, product is marketed right, and the customers are actually buying the product or service. In the light of new consumers and rapidly increasing revenues, further infusion of funds becomes necessary to enhance marketing strategies & channels and form teams as per the business need and add new employees.",
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            "Funds raised at this stage are used primarily for meeting Working Capital requirements, in paying salaries, hiring more staff, improving the infrastructure and establishing it as a major market player. Funding sources at this stage consist of Venture Capital Funds, Private Equity Firms and Alternative Investment Funds (AIF). Venture Capital Funds provide larger funds at this stage than at other earlystage financing.",
          ],
          list: []
        },

        {
          title: 'Later Stage Financing-',
          paragraphs: [
            "This stage of startup funding involves established businesses which require additional financial support but cannot take recourse to public issues of capital. It includes-",
            "(i) Growth, Series-C, or Third-Round Financing, Mezzanine/ Development Capital",
            "(ii) Expansion, Series-D, or Fourth-Round Financing, Bridge Capital",
            "(iii) Initial Public Offering (IPO)/ Going Public/ Floatation",
          ],
          list: []
        },
        {
          title: '5. . Growth, Series-C, or Third-Round Financing, Mezzanine/ Development Capital',
          paragraphs: [
            "Series C funding is meant for a company which is well on its way to the growth path and often interested in expanding broadly. It may be easier to find investors at this stage, as they trust the startup to succeed. In other words, it is the financing of established businesses which have overcome the extremely high-risk early stage and have recorded profits steadily for a few years. At this stage, the start-up experiences a fast rate of market growth with increasing revenues, and has crossed the BreakEven point.",
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            "The development finance stage has a time-frame of one to three years and falls in the medium risk category. Funds raised at this stage are used primarily for meeting expenditure related to building new products, reaching new markets, acquiring underperforming startups in the same industry, purchase of new equipment/plant, expansion of marketing and distribution facilities, re-finance of existing debt, penetration into new regions and induction of new management.",
            "Funding sources at this stage consist of Venture Capital Funds, Private Equity Firms and Alternative Investment Funds (AIF).",
          ],
          list: []
        },
        {
          title: '6. Expansion, Series-D, or Fourth-Round Financing, Bridge Capital',
          paragraphs: [
            "If a startup finds a potentially lucrative opportunity or a market segment that has come up surprisingly and was not factored in its earlier business plans or has fallen short of achieving the market goals in the previous stage, it may decide to raise more funds in the Series D round to address such issues. In a way, it represents the last round of financing before a planned exit.",
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            "Funding at this stage ‘bridges’ the financial gap between this phase and the IPO. This financing involves low risk perception and a time-frame of one to three years. Startups use such finance to expand business by way of growth of their own productive asset or by the acquisition of other firms/assets of other firms. Funding sources at this stage consist of Venture Capital Funds, Private Equity Firms and usually in the form of a loan or equity investment to provide financing for a relatively short time period until the issuer can complete a longer term financing such as a public offering or a new investment round. These loans are paid back with proceeds from the IPO.",
          ],
          list: []
        },
        {
          title: '7. Initial Public Offering (IPO)/ Going Public/ Floatation',
          paragraphs: [
            "An IPO consists of the sale of shares to the public by a Startup for the first time. It happens only when a company has an established customer base and stable revenues. Prior to an IPO, companies are considered to be privately held. An IPO issue means that a company's ownership is transforming from private to public—i.e., ‘going public’. This is also the first time that a company tries to raise funds directly from the public on a public platform such as a stock exchange.",
            "Only startups with a proven track record of profitability and growth can sell stock to the general public and list on the stock exchange. Funds raised from an IPO are used to pay off debts and fund growth initiatives.",
            "The merits of a public issue are liquidity of investments through listing on stock exchanges, higher price of securities compared to private placement and raise their public profile, image and credibility with public, customers & financial institutions.",
          ],
          list: []
        },
        {
          title: 'Alternative Investment Fund (AIF)',
          paragraphs: [
            "An Alternative Investment Fund may be in the form of Private Equity Fund, Angel Investor Fund, Social Venture Fund, SME Fund etc. They comprise an important source of financing a Start-up at later stages. Alternative Investment Funds are governed by SEBI Alternative Investment Funds regulation, 2012.",
            "Alternative Investment Fund (AIF) means any fund established/incorporated in India in the form of a trust/company/limited liability partnership/ body corporate which is (i) a privately pooled investment vehicle and collects funds from Indian/foreign investors for investing in accordance with a defined investment policy for the benefit of its investors, and (ii) not covered under the mutual fund/other regulations of the SEBI to regulate fund management activities.",
            "The AIFs can seek registration in one of the three categories: I, II or III.", 

          ],
          list: []
        },

        {
          title: 'I. Category I AIF:',
          paragraphs: [
            "They are funds which invest in start-up or early stage ventures/social ventures/small and medium enterprises (SMEs)/infrastructure/other sectors or areas which the Government/regulators consider as socially/economically desirable and would include Venture Capital Funds, SME Funds, Social Venture Funds, Infrastructure Funds and such other specified alternative investment funds.",
          ],
          list: []
        },
        {
          title: 'II. Category II AIF: ',
          paragraphs: [
            "They are funds which do not fall under Category I and III and which do not undertake leverage or borrowing other than to meet day-to-day operational requirements. Funds such as Private Equity Funds/Debt Funds for which no specific incentives or concessions are given by the Government or any other regulator are included in this category.",
          ],
          list: []
        },
        {
          title: 'III. Category III AIF:',
          paragraphs: [
            "They are funds which employ diverse or complex trading strategies and may employ leverage including through investment in listed or unlisted derivatives. Funds such as Hedge Funds or Funds which trade with a view to make short-term returns or such other funds which are open-ended and for which no specific incentives or concessions are given by the Government or any other regulator are included in this category.",
          ],
          list: []
        },
        {
          title: 'Government of India Financing Initiatives',
          paragraphs: [],
          list: []
        },
        {
          title: 'I. Fund of Funds for Start-Ups (FFS)',
          paragraphs: [
            "To provide equity funding support for development and growth of innovation driven enterprises, the government has set aside a corpus fund of INR 10,000 Crores managed by Small Industries Development Bank of India (SIDBI). The fund is in the nature of Fund of Funds, which means that the government participates in the capital of SEBI registered Venture Capital Funds, who invest twice the amount in start-ups. The flow of funds is Government > SIDBI > Venture Capitals > Startups.",
            "FFS has not only made capital available for start-ups at early stage, seed stage and growth stage but also played a catalytic role in terms of facilitating raising of domestic capital, reducing dependence on foreign capital and encouraging home grown and new venture capital funds. ",
            "FFS does not invest directly in start-ups, but participate in the capital of Alternative Investment Funds registered with SEBI. It contributes to the corpus of AIFs for investing in equity and equity linked instruments of various start-ups at early stage, seed stage and growth stage.",
            "All AIFs registered under SEBI AIF Regulations, 2012 (Category I and II) are eligible under FFS. Collectively, the AIFs supported by FFS have a target corpus of over Rs. 48,000 crores. Among the prominent AIFs of leading start-up investment firms supported under FFS are Chiratae Ventures, India Quotient, Blume Ventures, IvyCap, Waterbridge, Omnivore, Aavishkaar, JM Financial, Fireside Ventures, and more.",
          ],
          list: []
        },
        {
          title: 'II. Start-Up India Seed Fund Scheme (SISFS)',
          paragraphs: [
            "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry is initiating Startup India Seed Fund Scheme (SISFS) with an outlay of INR 945 Crores. The scheme was announced by Hon’ble Prime Minister during Startup India International Summit “Prarambh” on 16th January 2021.",
            "Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization.", "This would enable these start-ups to graduate to a level where they will be able to raise investments from angel investors or venture capitalists or seek loans from commercial banks or financial institutions. The target of the scheme is to disburse the Seed Fund to 3,600 start-ups through 300 incubators across India.",
          ],
          list: []
        },
        {
          title: 'Startup Fund Raising Process',
          paragraphs: [
            "1. Formulate the Business Plan",
            "2. Conducting a Proof of Concept",
            "3. Development of Minimum Viable Product (MVP) followed by a Prototype",
            "4. Assessing Funding Requirements (includes Startup Valuation)",
            "5. Preparation of a Compelling Pitch deck",
            "6. Finding the Correct Mentor",
            "7. Identifying potential Investors through Industry Research & access to Ecosystem ",
            "8. Ascertaining the best Investment Avenue",
            "9. Perusing the Investment Readiness of the Investor",
            "10. Approaching the Investors",
            "11. Due Diligence by Investor’s Project Evaluation/ Appraisal Team",
            "12. Preparation of Term Sheet and subsequent Negotiations",
            "13. Legal Closing & Documentation",
            "14. Fund Transfer", 
          ],
          list: []
        },
        {
          title: 'Documents required for Startup Fund-raising',
          paragraphs: [
            "1. Business Plan",
            "2. Financial Statements",
            "3. Pitch Deck",
            "4. Legal Documents",
            "5. Market Research Report",
            "6. Team Bios",
            "7. Due Diligence Reports",
            "8. Marketing Strategy",
            "9. Fund Utilization Strategy",
            "10. Term Sheet",
          ],
          list: []
        },
        {
          title: 'Sources of Funding',
          paragraphs: [],
          list: []
        },
        {
          title: '1. Self- Financing/ Bootstrapping',
          paragraphs: [
            "Bootstrapping means growing the business with no outside investment. It means relying on your savings and revenue to operate and expand. Most founders resort to bootstrapping, which means utilising their savings as there is no external constraint or dilution of control. This would save the entrepreneur from any debt and wouldn't cost him his equity either since the entire idea will be facilitated by his own resources.",
            "The promoter has to conduct a thorough inventory of his assets which include savings accounts, equity in real estate, retirement accounts, vehicles, recreational equipment and collections. He may decide to sell some assets for cash or to use them as collateral for a loan. Investments may be used as a resource. ",
          ],
          list: []
        },
        {
          title: '2. Family and Friends',
          paragraphs: [
            "After self-financing, perhaps the second most popular source for startups before seed-funding stage is composed of family, friends and relatives. This is because many times, the promoters’ own resource may not suffice for the capital that he needs. The primary benefit of this source of investment is that there is an inherent level of trust between the entrepreneurs and the investors.", 
            "People with whom the promoter has close relationships know his reliability and level of competence. The major drawback is that if the family members or friends think that lending money gives them right to ‘meddle’ and if the business fails, the issue of paying the money back can be a problem, putting the entire personal relationship at peril.",
          ],
          list: []
        },

        {
          title: '3. Grants from Pitching Events, Awards from Business Plan Conception Competitions',
          paragraphs: [
            "There are a number of organizations or platforms which host business events. A startup can consider being a part of such business challenges or competitions to raise funds where the host institutes or organisations provide prize money, grants, or financial benefits. Even though the amount of money may not be generally large, it is usually enough at the ideation stage.",
          ],
          list: []
        },
        {
          title: '4. Crowd Funding ',
          paragraphs: [
            "These are platforms where entrepreneurs can raise money from a large group of people. Crowd funding platforms are hosted on online web portals that facilitate and streamline project promotion and the raising of capital.", 
            "Crowd funding portals allow promoters to raise money in the form of donations, whereby donors/ contributors do not enjoy any ownership or participation in the said business. Here, one thing must be kept in mind that most individuals donate to facilitate the development of things they care about, to support the causes they espouse. Its major benefits includeobtaining proof of concept, getting free PR and obtaining feedback from potential customers",
          ],
          list: []
        },
        {
          title: '5. Business Incubators and Accelerators ',
          paragraphs: [
            "An incubator is an organisation that offers assistance to startup entrepreneurs in the form of office space, training, and management and all other required resources under one roof. They provide mentoring, funding and networking opportunities. This can result in seed investment and can build the foundation for a longer business arrangement.",
            "An accelerator is an institution that provides help to a startup to grow over a three-to four-month period, and is therefore a shorter arrangement than that of an incubator. It is a process of rapid, intense and immersive learning & education aimed at accelerating the growth of a startup. It provides mentorship and capital in return for equity.",
          ],
          list: []
        },
        {
          title: '6. Non-Banking Finance Companies (NBFC)  ',
          paragraphs: [
            "NBFCs generally offer their investments in the form of debt for enabling startups to meet their working capital requirements. This is done after the analysis of early traction of the startup in order to justify its revenues so as to validate its ability to finance the interest payment obligations. Some entrepreneurs might prefer debt over equity as debt funding does not dilute the promoter’s equity stake.",
          ],
          list: []
        },
        {
          title: '7. Government Loan Schemes ',
          paragraphs: [
            "The Govt. of India has launched a few debt schemes to provide collateral-free debt to budding entrepreneurs to assist them in getting low cost capital easily. Primary among these are the Startup India Seed Fund Scheme and SIDBI Fund of Funds. Other major schemes include- SAMRIDH scheme, ASPIRE (A Scheme for Promotion of Innovation, Rural Industries and Entrepreneurship), Pradhan Mantri Mudra Yojana (PMMY), Atal Innovation Mission (AIM), Multiplier Grants Scheme (MGS), Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE ), Credit Linked Capital Subsidy for Technology Upgradation (CLCSS), and IREDA-NCEF Refinance Scheme.",
            ],
          list: []
        },
        {
          title: '8. Angel Investors',
          paragraphs: [
            "Angel investors are High Net Worth individuals who invest in startup businesses, normally in the early stages. They invest their money into high-potential startups in return for equity. Angel investors fill the gap between friends and family, and more formal venture capital funds.", 
            "As per SEBI (Alternative Investment Funds Regulations 2012), an Angel Investor means any person who proposes to invest in an angel fund and satisfies one of the following conditions: ",
            "(a) An individual investor who has",
            "(1) Tangible assets of at least `2 crores excluding value of his principal residence; and",
            "(2)(i) Early stage investment experience (i.e. prior experience in investing in start-up/ emerging/early-stage ventures); ",
            "(ii) Serial entrepreneur (i.e. a person who has promoted/ co-promoted more than one start-up venture);",
            "(iii) Is a senior management professional with at least 10 years of experience;",
            "b) A body corporate with a net worth of atleast 10 crores;",
            "(c) An AIF registered under SEBI regulations as VCF.",

          ],
          list: []
        },
        {
          title: '9. Venture Capital Funds (VCF) ',
          paragraphs: [
            "Once a startup has gained significant market traction, and experienced good growth in revenue, it may approach Venture Capital Funds to raise funds for further scaling. Venture Capital is essentially equity finance in relatively new startups when it is fairly quite early to go public for raising funds. However, it is not always in the form of equity. It can also be in the form of debt.",
            "As per SEBI (Alternative Investment Fund Regulations 2012), a Venture capital fund means an alternative investment fund which invests primarily in unlisted securities of start-ups, emerging/early-stage venture capital undertakings mainly involved in new products/services, technology / intellectual property right based activities/a new business model”. It is classified under ‘Category I AIF’.",
            "Venture Capital Undertaking means “a domestic company which is (i) not listed on a recognised stock exchange in India at the time of making investment; and (ii) engaged in the business for providing services, production/manufacture of article/things and does not include the following activities/sectors: (1) non-banking financial companies; (2) gold financing; (3) activities not permitted under industrial policy of Government of India; and (4) any other activity which may be specified by the SEBI in consultation with the Government of India from time to time.",
            
            ],
          list: []
        },
        {
          title: '10. Private Equity Funds (PE)',
          paragraphs: [
            "Private Equity is a form of finance where firms make equity investments in private companies that have not yet gone public i.e. whose shared are not traded on the  stock market. In a private equity deal, an investor buys a stake in a private company with the hope of ultimately realising an increase in the value of that stake.",
            "As per SEBI (Alternative Investment Fund Regulations 2012), a Private Equity Fund means an AIF which invests primarily in equity/equity linked instruments (i.e. instruments convertible into equity/preference shares, share warrants, compulsorily/optionally convertible debentures) or partnership interests of investee companies (i.e. companies/SPVs/limited partnership/body corporate in which an AIF makes an investment) according to the stated objectives of the fund. It is classified under ‘Category II AIF’.",
          ],
          list: []
        },
        {
          title: 'LEGAL COVERAGE Under Start-Up Financing',
          paragraphs: [
            "Due Diligence and Compliance Under-",
          ],
          list: [
            ' Regulation of Foreign Investments under regulations for foreign venture capital investors (FVCI), Schedule 6 of the foreign exchange management act (FEMA), 2000.',
            ' Business Contract Management under Indian contract act, 1872.',
            ' Startup Financing- Due Diligence under SEBI (Venture Capital Funds) Regulations 1996.',
            ' Startup Financing- Compliance under SEBI Alternative Investment Funds Regulations, 2012',
            ' Startup Financing- Compliance for ensuring eligibility under Start-Up India ',
            ' Seed Fund Scheme (SISFS).',
          ]
        },
      ]
    },
    {
      serviceId: '8',
      serviceName: 'INTELLECTUAL PROPERTY',
      imagePath: 'assets/img/new/Intellectual Property.jpeg',
      paragraphs: [
        "Our innovative approaches encompass all aspects of intellectual property protection.Combining insightful advice and innovative tools, we help clients in obtaining, defending, enforcing, and exploiting intellectual property rights, including Copyrights, Trademarks and Patents. We offer seamless service on a range of matters, from counselling on registrability, conducting trademark searches,registration and maintenance, to commercialization, protection and enforcement. ",
        "We also understand that effective protection of path-breaking technologies and successful litigation of patent disputes are critical aspects of today’s increasingly competitive business environment. The professionals and the firm have represented several international clients to provide Trademark Prosecution services in India.",
        "The Intellectual Property (IP) practice group contains several diverse individuals with scientific and non scientific backgrounds to facilitate Patent Filing and Prosecution. The firm also has attorneys who have extensive experience in the litigation of intellectual property conflicts especially for Trademark and Copyright Infringement and Passing Off. Besides the aforesaid, the firm has been advising and counselling towards negotiating and drafting a variety of license, assignment and sale agreements.",
        "Equipped with in-depth knowledge of local IP laws and commercial practices drawn from our extensive on-the-ground experience in the market, our lawyers & professionals deliver specialist advice in specific areas of intellectual property law such as IP litigation and enforcement actions. ",
        "The firm also offers similar services for other Intellectual property rights like Trademarks, Copyrights, and Industrial Designs. We have got special expertise in the areas of Registration of Trademark/Service mark, advising and counselling on Trade Secret, Registration of Copyright, Filing of Patent Application, Registration of Design and Geographical Indications.",
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            ' Patent Drafting ',
            ' Patent Application Preparation',
            ' Patent Writing',
            ' Patent Prosecution &Patent Litigation ',
            ' Licensing and Franchising ',
            ' Technology Transfer',
            ' IP Prosecution',
            ' General IP Advisory',
            ' Prior Art Searches',
            ' Trademark Registration & Portfolio Management',
            ' Trademark/Trade Dress Litigation',
            ' Anti-piracy/Anti-counterfeiting',
            ' Commercial/Non-contentious IP',
            ' IP Audit and Due Diligence',
            ' Customs Recordation of IP Rights',
            ' IP Arbitration',
          ]
        },
        {
          title: 'LEGAL COVERAGE Under Intellectual Property Rights',
          paragraphs: [
            "Ensuring Compliance under various laws governing Intellectual Property Rights in India, namely: -",
          ],
          list: [
            ' Trade Marks Act, 1999',
            ' The Patents Act, 1970 (amended in 2005)',
            ' The Copyright Act, 1957',
            ' The Designs Act, 2000',
            ' The Geographical Indication of Goods (Registration and Protection) Act, 1999',
            ' The Protection of Plant Varieties and Farmers Rights Act, 2001',
            ' The Information Technology Act, 2000',
            ' The Biological Diversity Act, 2002 ',
            ' The Semi-conductor Integrated Circuits Layout-Design Act, 2000',
            ' Trade Secret and Confidential Information',
          ] 
        },
      ]
    },
    {
      serviceId: '9',
      serviceName: 'MEDIA & ENTERTAINMENT',
      imagePath: 'assets/img/new/Media & Promotion.jpeg',
      paragraphs: [
        "The Indian Media & Entertainment industry has witnessed an exponential surge over the past three decades with multiple national as well as foreign players entering the scene. As far as electronic media is concerned, it has garnered the lion’s share of growth with channels in spheres as diverse as entertainment, news, movies, sports, spirituality spanning over the entire landscape of the subcontinent in all languages.",
        "This has provided a major boost to allied sectors like- Motion Pictures, Talent Hunts, Reality Shows, Celebrity Management, Brand Endorsements, Entertainment & OTT Apps and Digital Music etc.",
        "The publishing sector, too, is not far behind with media houses floating newspapers in novel categories as- Business, Glamour & Entertainment, and Lifestyle & Page 3 Social Circle Gossips besides a number of news portals coming up alongwith a host of edutainment Social Media Platforms.",
        "The Public Relations, Outdoor Advertising, Integrated Marketing Communications and Digital Media agencies are also on the rise due to the increase in people’s disposable income and entry of overseas players into Indian consumer goods market segment.",
        "The Media & Entertainment industry relies primarily on talented performing artists, technological finesse, financial muscle and celebrity charisma, the possibilities of market dominance and manipulation through unfair means in this lucrative sector cannot be ruled out altogether.",
        
      ],
      subService: [
        {
          title: '',
          paragraphs: [
            'Success League Business Solutions provides State-of-the art legal advisory and know-how to industry operators in the below mentioned segments:-'
          ],
          list: [
            ' Production, distribution and licensing agreements for films, TV series and TV reality shows.',
            ' Advising on procuring film financing.',
            ' Content development and acquisition.',
            ' Protecting and managing IP/Brands for current and future valuation.',
            ' Forging co-branding relationships and ensuing issue of sharing royalty payments.',
            ' Agreements relating to broadcasting rights, audio visual rights exhibition,territorial distribution, satellite, OTT, digital and overseas rights.',
            ' Joint ventures between International and national media companies for publishing specialised local editions of sectoral journals & magazines and getting approvals from the Registrar of Newspapers for the same.',
            ' Negotiations with the Ministry of Information and Broadcasting for granting approvals for foreign direct investment in production, publication, digital and distribution ventures.',
            ' Contracts with celebrities regarding product endorsements, sponsorships, brand promotion and digital advertising.',
            ' Privacy and data protection.',
            ' Adherence to DTH guidelines, uplinking and downlinking of foreign channels, use of frequencies, wireless telegraph licensing and interference issues, operation and control of earth stations.',
          ]
        },
        {
          title: 'LEGAL COVERAGE FOR Protection of Society from Deceptive and Misleading Media and Advertising under Various Laws and Regulations',
          paragraphs: [
            'Protection of Society from Deceptive, Misleading, or False Advertising and Marketing Campaigns under different laws and statutes in India, namely: -'
          ],
          list: [] 
        },
        {
          title: 'LEGAL COVERAGE under Media and Entertainment',
          paragraphs: [],
          list: [
            ' The Press Council Act 1978',
            ' Cable Television Network Rules, 1994',
            ' Code for Commercial Advertising on Doordarshan and All India Radio',
            ' Electronic Media Monitoring Centre (EMMC)',
            ' Cinematograph Act, 1952',
            ' Norms for Journalist Conduct issued by the Press Council of India',
            ' Code of Conduct of the News Broadcasters Association',
            ' Press and Registration of Books Act, 1867',
            ' Indian Telegraph Act, 1885 including Amendment Acts of 2003 and 2006',
            ' Indian Wireless Telegraphy Act, 1933',
            ' Vernacular Press Act, 1878',
            ' Telecom Regulatory Authority of India Act, 1997',
          ]
        },
      ]
    },
    {
      serviceId: '10',
      serviceName: 'BRAND PROMOTION (MARKETING & ADVERTISING) THIRD-PARTY/ OUTSOURCED SERVICES',
      imagePath: 'assets/img/new/Outsourced-Branding.jpeg',
      paragraphs: [
        "Success League provides integrated branding services from conducting initial brand research to uncover key insights into your brand, to developing a brand strategy which clearly defines your brand's unique characteristics, values and attributes, to bringing your brand to life through logo, visual identity and collateral and launching your new or updated brand to employees and the market.",
        "We are ably supported in all our professional endeavours by our collaborations and trusted long standing productive relationships with major News Channels alongwith leading Trade & Business Newspapers & Magazines and premier Public Relations & Corporate Communication agencies. ",
        "We will facilitate exclusive media interaction of our clients with top three to fivemainline and financial news channels & newspapers to generate meaningful and positive messaging of their brands. The interaction will focus on milestones achieved by their company, future roadmap, challenges, new strategies etc. Our Services offered constitute the following:-",
        ],
        list:[
          ' Production of Television Commercials (TVCs), Documentaries, Impact Features & Radio Jingles',
          ' Brand Identity Review',
          ' Brand Projection Strategy',
          ' Brand Positioning', 
          ' Brand Portfolio Analysis',
          ' Customer Value Proposition',
          ' Engagement with Stakeholders (Clients, Prospects, Peer Fraternity, Reference Groups, Industry Experts and Researchers)',
          ' Brand Logo & Copywriting',
          ' Digital & Graphic Design',
          ' Brand Identity Development - Design & Collaterals',
          ' Relationship Building Programs and Events',
          ' Social Engagements including appropriate alignments with organizations and Social Interest Groups',
          ' Business Network Management',
          ' Media Strategy Interactions for building Third Party Credibility',
          ' Web Presence Optimization',
        ],
      subService: [
        {
          title: 'Media FAM Services',
          paragraphs: [
            'We would be pleased to facilitate a Media Familiarization tour may be organized with at least three prominent publications consisting of regional, electronic and online. Journalists will be taken to company premises as well as company’s manufacturing unit, if required, to analyse the work done by client’s company.',
          ],
          list: [
            
          ]
        },
        {
          title: 'Media Roundtables',
          paragraphs: [
            'Success League will facilitate to organise a media roundtable with select publications including regional, mainlines and financials to sustain the brand buzz and generate positive conversation. This entry by invitation only roundtable over lunch will go a long way to help in building good media contacts at the ground level.',
          ],
          list: [] 
        },
        {
          title: 'Speakership Opportunities',
          paragraphs: [
            'We will facilitate to explore speakership opportunity for our clients at leading national and regional events to create meaningful conversation about the brand. B2B events focusing on digitisation, infrastructure, real estate etc. to be tapped.',
          ],
          list: [
          ]
        },

        {
          title: 'Participation in Thought Leadership Forums',
          paragraphs: [
            'We will facilitate to highlight the client’s brand’s unique offering in context with Indian markets and make a blueprint to pave a way ahead through Op-ed articles to create impactful conversation. ',
          ],
          list: [
          ]
        },
        {
          title: 'Social Media Promotion',
          paragraphs: [
            'To leverage the power of Facebook, Twitter, Instagram, LinkedIn and YouTube to enhance and rejuvenate brand image.',
          ],
          list: [
          ]
        },
        {
          title: 'Digital Marketing',
          paragraphs: [
            'Services to be provided include Search Engine Optimisation, Blog Writing & Feedback Management, Newsletters (designing, content layout), Online Content Production (stories & videos) for geo-targeting in multiple languages, E-Mail Marketing (designing of flyers, brochures) alongwith Development of Mobile App.',
          ],
          list: [
          ]
        },
        {
          title: 'LEGAL COVERAGE Under Marketing and Advertising',
          paragraphs: [
            
          ],
          list: [
            ' Consumer Protection Act, 1986',
            ' Cable Television Networks (Regulation) Act, 1995',
            ' Cable Television Network Rules, 1994',
            ' Indecent Representation of Women (Prohibition) Act, 1986',
            ' Young Persons (Harmful Publications) Act, 1956',
            ' Emblems and Names (Prevention of Improper Use) Act, 1950',
            ' Drugs and Magical Remedies (Objectionable Advertisements) Act, 1954',
            ' The Prize Chits and Money Circulation Schemes (Banning) Act, 1978',
            ' Drugs and Cosmetic Act, 1940',
            ' The Food Safety and Standards Act, 2006',
            ' Securities and Exchange Board of India (Prohibition of Fraudulent and Unfair Trade Practices Relating to Securities Market) Regulations, 2003',
            ' Competition Act, 2002',
            ' Prevention of Misuse of Social Media under Information Technology Act, 2000 and Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2022.',

          ]
        },
      ]
    },
    {
      serviceId: '11',
      serviceName: 'OVERSEAS IMMIGRATION ASSISTANCE',
      imagePath: 'assets/img/new/Overseas Immigration Assistance.jpeg',
      paragraphs: [
        "Today, most aspiring professionals are passionate about global mobility. Every successful entrepreneur or CXO has been an expat, remote worker, digital nomad, Erasmus student for at least for a brief period in his/ her life. Global Mobility facilitates not only in educational or occupational arenas, but it also ushers multiculturism. We at Success League Business Solutions (SLBS) have the experience, expertise, and global network to help navigate complex immigration processes."
        ],
        list:[
          ' Visa applications: help individuals with all aspects of the visa application process, from choosing the right visa category to completing the application forms and gathering the required documentation.',
          ' Immigration paperwork: immigration paperwork, such as green card applications, citizenship applications, and work permit applications.',
          ' Legal advice: Immigration on all matters related to immigration law, including eligibility requirements, deportation proceedings, and appeals.',
          ' Other related services: job placement assistance, language classes, and cultural orientation.',
          ' Assistance with the application and filing of Overseas Citizenship of India (OCI) cards or converting Person of Indian Origin (PIO) cards to OCI.',
          ' Procuring, legalizing and apostilling documents, including birth and marriage certificates, educational degrees, corporate documents and letters for use in work permit or visa cases.',
        ],
        subService: [
        {
          title: 'Types of Immigration Law',
          paragraphs: [
            'There are many different types of immigration law, each with its own set of rules and regulations. Success League will provide services related to some of the most common types of immigration laws including:-', 
          ],
          list: [
            'Family-based Immigration: This type of immigration covers visas forspouses, children, and parents of Indian citizens and permanent residents.',
            ' Employment-based Immigration: This type of immigration covers visas for workers who have been offered jobs overseas.',
            ' Refugee and Asylum Law: This type of immigration covers visas for people who have been persecuted in their home countries and need protection elsewhere in other countries.',
            ' Naturalisation Law: This type of immigration covers the process of becoming a foreign citizen.',
            
          ]
        },
        {
          title: 'Immigration Services for Businesses',
          paragraphs: [
            'Immigration services for businesses can include assistance with a variety of tasks,such as:',
          ],
          list: [
            ' Sponsoring Foreign Workers: Businesses can sponsor foreign workers for a variety of work visas, such as H-1B visas for skilled workers and L-1 visas for intracompany transferees.',
            ' Immigration lawyers can help businesses with the sponsorship process and ensure that they are in compliance with all applicable laws and regulations.',
            ' Obtaining Business Visas: Businesses may also need to obtain business visas for their employees in order to travel to other countries for business purposes. ',
            ' Immigration lawyers can help businesses with the business visa application process and ensure that their employees are able to travel freely for business.',
            ' Compliance: Immigration lawyers can help businesses to comply with applicable immigration laws and regulations. This includes ensuring that their employees have the proper work visas and that they are following all of the requirements for sponsoring foreign workers.',
            ' Other Related Services: Immigration lawyers may also offer other related services to businesses, such as assistance with global mobility programs, mergers and acquisitions, and immigration audits.',
          ] 
        },
      ]
    },
    {
      serviceId: '12',
      serviceName: 'SUSTAINABILITY COMPLIANCE FOR CORPORATES SUSTAINABILITY DEVELOPMENT GOALS (SDG)',
      imagePath: 'assets/img/new/Sustainable Development Goals (SDG) Compliance.jpeg',
      paragraphs: [
        'It has been observed that adhering to the rule of law fosters fairness, justice, and accountability, providing a solid foundation for social, economic, and environmental advancement. It facilitates the effective implementation of sustainable development policies and regulations. The 2030 Agenda for Sustainable Development, adopted by all United Nations members in 2015, created 17 world Sustainable Development Goals. They were created with the aim of "peace and prosperity for people and the planet" – while tackling climate change and working to preserve oceans and forests.',
        'They provide a global framework for legal fraternity to assist their corporate clients in achieving sustainable development and to increase access to justice for individuals, corporations and communities endeavouring to accomplish a clean and green ecological ecosystem.',
      ],
      list:[
        'Green Power Purchase Agreements and clean technology',
        ' Decarbonisation and energy transition strategies',
        ' Carbon pricing regimes, emissions trading, carbon credits, carbon offset assets, carbon border adjustments and carbon capture utilization or storage projects.',
        ' Incorporation of environmental policies in financing strategies, investment decisions and purchase agreements',
        ' Review of the available sources of financing for the sustainable investments, to include an indication of the evaluation criteria, the time horizon, the level of support and a description of the application process.',
        ' Regulatory tracking and compliance',
        ' Supervisory requirements, disclosure and reporting obligations',
        ' Calculation of green asset and investment ratios',
        ' Market communication on ESG products',
        ' Qualification of green loans, green bonds, social bonds, sustainable derivatives, structured products and sustainability funds',
        ' Low-carbon benchmarks',
        ' Carbon reporting, carbon trading and guidance on steps to reach net-zero carbon emissions', 
        ' Task Force on Climate Related Financial Disclosures (TCFD) Reporting.',
      ],
    },
    {
      serviceId: '13',
      serviceName: 'COMPETITION & FAIR TRADE PRACTICES',
      imagePath: 'assets/img/new/Competition & Fair Trade Practices.jpeg',
      paragraphs: [
        'In any industry, fair competition is critical for the growth and success of businesses. Fair competition is crucial for any business to flourish in the marketplace. When competition is fair, it encourages businesses to innovate and improve their products and services to stay ahead of their competitors. It also helps to ensure that consumers get the best value for their money. However, when the competition is not fair, it can lead to negative consequences for both consumers and businesses. ',
        'When a large conglomerate dominates the market, it can use its muscle to choke competition and prevent new businesses from entering the market. This can harm innovation, R&D and ultimately lead to a stagnant economy. Fair competition cultivates consumer trust in the market, as it ensures that businesses are competing based on their merits and not through unfair practices. To ensure fair competition, anti-trust laws are in place.',
        'Success League Business Solutions (SLBS) provides a wide array of services in this significant and crucial domain.',
      ],
      list:[
        ' Advice on the drafting of contracts to ensure competition law compliance',
        ' Competition law issues associated with joint ventures',
        ' Advice on claims of abuse of a dominant position',
        ' Day-to-day competition law compliance',
        ' Competition law implications of trade associations',
        ' Streamlining of policies on commercial models, business structures and pricing',
        ' Assisting in anti-cartel investigations',
        ' Consultancy on drafting anti-monopoly, non-cartel business agreements, joint ventures and collaborations, marketing, bid-rigging and Intellectual Property licences.',
        ' Drafting comprehensive antitrust policies.',
        ' Legal audits and review of non-compete agreements, non-disclosure agreements, franchise agreements and employment agreements to identify potential antitrust issues.',
        ' Representation before The Competition Commission of India',
        ' Combination Filings related litigation support.',
        ' Assistance in cases of and issues related to Dawn Raid',
      ],
    },
    {
      serviceId: '14',
      serviceName: 'CYBER LAWS & FINTECH',
      imagePath: 'assets/img/new/Cyberlaw & Fintech.jpeg',
      paragraphs: [
        'Cyber security ensured by means of cyber laws in Fintech enables in preventing Data & Identity Thefts, Data Leaks, Application Breaches, Cloud Security Risks, Spoofing, Phishing alongwith Malware & Ransom-ware attacks. We, at Success League Business Solutions (SLBS) are expert and experienced providers of the concerned legal services.'
      ],
      list:[
        ' All issues relating to Payment & Settlements Systems Act 2007 (PSS Act) and PSS Regulations 2008',
        ' All issues relating to Information Technology Act, 2000',
        ' All issues pertaining to Digital Personal Data Protection Act, 2023',
        ' The General Data Protection Regulation 2016/679 of the European Union',
        ' Related Reserve Bank of India Regulations for the Financial Sector ',
        ' Legal Framework governing Fin Tech Space',
        ' Mitigation of Security Risks Facade by Fin Tech ',
        ' Regulatory Provisions for Fin Tech Compliance',
        ' Anti-Money Laundering',
        ' Consultancy for Data Protection',
        ' Minting of Non- Fungible Tokens',
        ' Cyber Security Compliance and Litigation ',
        ' Breach Response, Litigation and Enforcement Actions',
        ' Government Enforcement, Investigations and Examinations',
        ' Regulatory Requirements & Opinions',
      ],
    },
    {
      serviceId: '15',
      serviceName: 'SECURITISATION SERVICES',
      imagePath: 'assets/img/new/Securitization.jpg',
      paragraphs: [
        'Securitisation is a financial process which involves pooling of multiple illiquid assets and selling them to a Special Purpose Vehicle (generally an Asset Reconstruction Company), which converts them into tradable collateral financial securities.',
        'The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) aims to empower banks as secured creditors to take possession and sell the securities without the intervention of court/tribunal, thus eliminating the litigation costs completely while reducing the amounts of stressed loans to a large extent.',
        'All legal services related to Securitisation and Asset Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI).',
      ],
      list:[
        ' Representing and advising asset reconstruction companies (ARCs), investors and distress asset stabilisation funds in matters relating to conducting legal due diligence.',
        ' Representing and advising asset reconstruction companies and non banking financial institutions in matters relating to completion of registration formalities pertaining to legal assignment of debt transactions. ',
        ' Advising investors, asset reconstruction companies, distress asset stabilisation funds, financial institutions and operational creditors in matters pertaining to drafting and finalisation of legal notices for recovery of money. ',
        ' Rendering advice in matters relating to enforcement of security actions and formulation of recovery strategies available to financial creditors under the legal, regulatory and policy framework, including the Recovery of Debts Due to Banks and Financial Institutions Act, 1993 and the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002.',
      ],
    },
    {
      serviceId: '16',
      serviceName: 'TRANSACTIONAL SERVICES FOR CORPORATE RESTRUCTURINGS, MERGERS & ACQUISITIONS, JOINT VENTURES',
      imagePath: 'assets/img/new/Corporate Restructuring.jpeg',
      paragraphs: [
        'Success League Business Solutions (SLBS) provides cutting-edge legal consultancy services in both operational and financial corporate restructurings to enable our clients to easily navigate through the statutory and regulatory nitty-gritty’s of the entire process and emerge as a novel and dynamic organisation in its best shape.',
      ],
      list:[
        ' Ring-fencing of all Legal & Regulatory Statutes dealing with Corporate Restructuring & Reorganization',
        ' Mergers & Acquisitions',
        ' Insolvency and Bankruptcy Code, 2016',
        ' Business Alliances: Joint Ventures, Partnerships, Strategic Alliances, and Licensing',
        ' Alternative Exit and Restructuring Strategies: Divestitures, Spin-offs, Carveouts, Split-Ups, and Split-Offs',
        ' Amalgamations & Takeovers',
        ' Deal Structuring',
        ' Due Diligence',
        ' Negotiating Key provisions in the Agreement',
        ' Takeover Defences',
        ' Reverse Mergers',
        ' Disinvestment of Public Sector Undertakings (PSUs)',
        ' Merger of Partnership firm with a Company',
        ' Demerger and Schemes of Arrangement',
        ' Reduction of Share Capital and Buy-Back of Shares',
        ' Employee Stock Options (ESOPs)',
        ' M&As and Foreign Direct Investments',
        ' Corporate Governance Mechanisms in M&As',
        ' Reduction of Capital',
        ' Minority Buyout',
        ' Disinvestment of PSUs',
        ' Hiving off Business',
        ' Power of Tribunal to Enforce Compromise or Arrangement',
        ' Amalgamation of Section 8 Companies',
        ' Advisory on all provisions under Compromises, Arrangements and Amalgamations under Companies Act, 2013',
        ' Advisory on all provisions under Companies (Compromises, Arrangements and Amalgamations) Rules, 2016',
        ' Relevant provisions of Competition Act, 2002',
        ' Relevant provisions of Income Tax Act, 1961',
        ' Advisory on all provisions under Securities and Exchange Board of India (Substantial Acquisition of Shares and Takeovers) Regulations, 2011',
      ],
    },
    {
      serviceId: '17',
      serviceName: 'ENVIRONMENTAL, SOCIAL & GOVERNANCE (ESG) COMPLIANCE SERVICES',
      imagePath: 'assets/img/new/ESG Compliance.jpeg',
      paragraphs: [
        'We at Success League Business Solutions (SLBS) provide counsel to listed corporations on all compliance issues regarding Responsible Investment, Green Finance, SEBI BRSR Guidelines, environmental legal requirements, Corporate Social Responsibility, Business Ethics, Corporate Governance and a multitude of subject matters concerning stakeholders’ welfare.',
        'Comprehensive Compliance under Global ESG Framework-',
      ],
      list:[ 
        ' GRI (Global Reporting Initiative)',
        ' CDP (Carbon Disclosure Project)',
        ' TCFD (Task Force on Climate Related Financial Disclosures) Reporting',
        ' SASB ( Sustainability Accounting Standards Board) ',
        ' WDI (The Workforce Disclosure Initiative)',
        ' CDSB (The Climate Disclosure Standards Board)',
        ' WEFSCM (World Economic Forum Stakeholder Capitalism Metrics)',
        ' Securities & Exchange Board of India Business Responsibility & Sustainability Report (BRSR)',

      ],
      subService: [
        {
          paragraphs: ['Advisory for Best ESG Practices to be adopted in Corporate Framework under-'],
          title: 'Environment',
          list: [
            'Carbon Footprint Reduction',
            'Circular Economy and Waste Mitigation',
            'Sustainable Energy Adoption',
            'Balancing Short-term Profitability with Long-term Sustainability',
            'Sustainable Finance',
            'Impact Investing',
            'Issuing Green Bonds and Social Bonds',
            'ESG Integration in Investment Decisions',

          ]
        },
        {
          title: 'Social',
          paragraphs: [],
          list: [
            ' Assessing Social Impacts & Stakeholders Engagement',
            ' Corporate Social Responsibility Initiatives',
            ' Inclusive Business Practices & Diversity at Workplace',
            ' Prevention of Sexual Harassment at Workplace',
            ' Labour Standards & Employee Welfare',
            ' Fair Trade and Responsible Sourcing',

          ]
        },
        {
          title: 'Governance',
          paragraphs: [],
          list: [
            ' Importance of transparency in Corporate Governance',
            ' Ethical Business Practices and Code of Conduct',
            ' Preventing Corruption and Bribery',
            ' Corporate Governance Structures and Board Diversity',
            ' Integrating Sustainability and ESG into Business Strategy ',
            ' Government Incentives and Regulations for Sustainable Practices',
            ' Embedding Sustainability in Organizational Culture',
          ]
        },
      ],  
    },
    {
      serviceId: '18',
      serviceName: 'PARA LEGAL SERVICES FOR BANKING & INSURANCE',
      imagePath: 'assets/img/new/Banking & Insurance.jpeg',
      paragraphs: [
        'Success League Business Solutions (SLBS) provides legal advisory services in the following domains:-',
      ],
      list:[ 
        ' Dishonour of Cheques',
        ' Banking Loans to individuals',
        ' Loans to MSME & Other corporate entities',
        ' Loan against Property (LAP)',
        ' Loan against Shares (LAS)',
        ' Issues relating to Letters of Credit, Bank and Performance Guarantees',
        ' Equity & Commodity Broking through third-party broking',
        ' General & Life Insurance Broking through third-party broking',
      ],
    },
    {
      serviceId: '19',
      serviceName: 'VALUATION SERVICES (OUTSOURCED) PROVIDED BY SUCCESS LEAGUE BUSINESS SOLUTIONS BY MEANS OF THIRD-PARTY PROFESSIONALS',
      imagePath: 'assets/img/new/Outsourced-Valuation.jpeg',
      paragraphs: [
        'Success League Business Solutions (SLBS) provides legal advisory services in the following domains:-',
      ],
      list:[ ],
      subService: [
        {
          title: 'Start-Ups',
          list: [
            ' Pre-Money Valuation',
            ' Post-Money Valuation',
            ' Venture Capital Method', 
            ' Berkus Method',
            ' Scorecard Valuation Method',
            ' Risk Factor Summation Method',
            ' Cost-to-Duplicate Method', 
            ' Discounted Cash Flow Method', 
            ' Valuation By Stage Method', 
            ' Comparable Method', 
            ' First Chicago Method', 
            ' Startup Valuation Revenue Multiple Method',

          ]
        },
        {
          title: 'Business & Business Interests',
          paragraphs: [],
          list: [
            ' Business (Purchase & Sale) & Equity Valuation',
            ' Valuation of Start-up / IPO / REIT / M&A, Leveraged, Management Buyout Valuation', 
            ' Valuation of ESOPs and Sweat Equity', 
            ' Valuation for Tax, Capital Gain, Transfer Pricing', 
            ' Valuation for Financial Reporting, Fairness Opinion, Purchase Price Allocation (PPA) for M&A, Reverse Merger', 
            ' Determination of Swap Ratio under Merger and Demerger', 
            ' Valuation of Inventory / Stocks and Debentures / Receivables', 
            ' Litigation and Dispute Support', 

          ]
        },
        {
          title: 'Intangible Assets & Intellectual Property',
          paragraphs: [],
          list: [
            ' Valuation of Brands, Goodwill, Trademark, Copyright, Patents ',
            ' Valuation for Financial Reporting, Fairness Opinion, Purchase Price Allocation (PPA) for (M&A) ',
            ' Impairment Studies of Intangible Assets', 
            ' Carried Interest Valuation',
            ' Designs, Licenses Software and IT Products, Databases',
            ' Technological Know-how',
            ' Engineering Drawings & Industrial Designs',
            ' Customer Contracts & Relationship',
            ' Distribution Rights & Network',
            ' Franchises and Licensing Agreements',
            ' Non-Compete Agreements',
            ' Trade Secrets',
            ' Trade Names',
            ' Service Marks',
            ' Internet Domain Names',
            ' Plays, Ballets, Books, and Photographs',
            ' Licensing and Royalty Agreements',
            ' Advertising',
          ]
        },

        {
          title: 'Financial',
          paragraphs: [],
          list: [
              ' Valuation of Financial Securities, Instruments & Derivatives',
              ' Valuation for M&A Transaction, under Insolvency & Bankruptcy Code ',
              ' Fairness Opinions',
              ' Financial Reporting under Indian GAAP, IFRS & US GAAP',
              ' Goodwill Impairment',
              ' Valuation for Property & Casualty Insurance',
          ]
        },
        {
          title: 'Immovable/ Movable Assets (Infrastructure & Real Estate)',
          paragraphs: [],
          list: [
            ' Valuation of Land, Building Residential / Commercial / Industrial Estates ',
            ' Valuation of Infrastructure Assets, Expressways / Toll Ways & Specialized Assets ',
            ' Valuation for Capital Gain Tax, Stamp Duty, Litigation & Dispute', 
            ' Impairment Studies for Financial Reporting, PPA, Cash Generating Units ',
            ' Mines, Mineral Advisory and Valuation', 
            ' Valuation under Insolvency & Bankruptcy Code (IBC) ',
            ' Movable Assets (Plant & Machinery)', 
            ' Valuation of Industrial Assets and Plant & Machinery', 
            ' Valuation of Infrastructure Assets & Specialized Assets, Power Plants ',
            ' Fairness Opinion, Purchase Price Allocation for M&A',
            ' Impairment Studies for Financial Reporting, Cash Generating Units ',
            ' Hazardous Land Fills',
            ' IT Parks',
            ' Hotel & Hospitality Properties',
            ' Telecom and Communication Infrastructure',
            ' Airport and Aviation Infrastructure',
            ' Railway line and Railway Infrastructure',
            ' Ports, Harbours',
          ]
        },
        {
          title: 'Valuation for Compliances',
          paragraphs: [],
          list: [
            ' International Financial Reporting Standards (IFRS)',
            ' International Accounting Standards (IAS)',
            ' Indian Accounting Standards (Ind AS)',
            ' Income Tax',
            ' Foreign Exchange Management Act (FEMA)',
            ' Reserve Bank of India (RBI)',
            ' Securities & Exchange Board of India (SEBI)',
            ' Transfer Pricing',
          ]
        },
        {
          title: 'Valuation for Court Cases',
          paragraphs: [],
          list: [
            ' Liquidation',
            ' Contractual Disputes',
            ' Ownership Disputes',
            ' Dissenting & Oppressive Shareholders Cases',
            ' Divorce Cases',
            ' Expert Witnessing',

          ]
        },
        {
          title: 'Valuation for Environment',
          paragraphs: [],
          list: [
            ' Contingent Environmental Valuation',
            ' Environmental Management Systems and Environmental Auditing',
            ' Environmental Impact Assessment (EIA)',
            ' Impact Prediction, Evaluation and Mitigation',
            ' Strategic Environmental Assessment (SEA)',
            ' Waste Audits and Pollution Prevention Assessments',
            ' Liability Audits and Site Assessment',
            ' Life Cycle Assessment (LCA)',
            ' Environmental Management System Standards: ISO 14000, ISO 14001',
            ' Social Impact Assessment (SIA)',		
          ]
        },
      ],
    },
    {
      serviceId: '20',
      serviceName: 'ART, MUSIC, FASHION & SPORTS',
      paragraphs: [],
      list:[ ],
      subService: [
        {
          title: 'ART WORKS',
          paragraphs:[
            "As a land of diverse culture, ethnicity, topography and religions, India has an extremely rich heritage and pool of art, cultural property and heritage. Whether it is a transaction between a craftsmen and an exporter of handicrafts, a freelance artist with an online art marketplace, a collector or seller with a buyer, directly or through agallery or an art dealer, at each stage, the stakeholders are required to adhere with Indian laws, which also includes execution of written instruments, deeds and documents.",
            "The personality and economic rights of artists in their works and the transfer of these rights to subsequent possessors raise a number of issues relating to intellectual property rights. Art law is a multi-disciplinary practice in India and thus requires careful consideration of the subject matter, in light of the applicable laws.",
            "The guiding principles of various international treaties and conventions to which India is a contracting party have helped India develop a robust legal regime for protecting the roprietary and related rights in various art forms.",
            "While the value of art comes from the intangible creation of the mind, the fixation of art to a tangible medium brings it under regulation by statutes such as the Transfer of Property Act, 1882 (TPA) and the Sale of Goods Act, 1930 (SGA). TPA is the generallegislation governing rights and transfers in tangible private immovable property. The Act recognises three basic rights: the rights to (1) use, (2) possess and (3) alienate,within the bundle of positive rights statutorily guaranteed to the proprietor of an immovable property.",
            "Barring a few exceptional circumstances, artwork such as statues and murals qualify as immovable property under law, can be sold, leased, licensed, mortgaged and gifted only through a registered document, by paying the applicable stamp duty. Sale of movable art forms, on the other hand, is governed by the SGA, which allows transfer or conveyance of an artwork by mere delivery of possession of the work, supported by a proof of intention to transfer.",
            "The aged arts and articles of historical and national importance are protected through the Antiquities and Art Treasures Act, 1972. The act makes it mandatory to seek government authorisation while transferring antiquities and art treasures as defined under the Act.",
            "'Antiquity' includes art, craft and literature that is aged over 100 years and manuscripts from over 75 years of existence. Any such article can be sold only after obtaining the statutory non-transferrable licence issued by the Director General of the Archaeological Survey of India. Art treasures, on the other hand, are non-antique articles that have national importance. Such articles, including art and those of aesthetic value, are from time to time identified by the Indian government and the list is published in the Gazette of India. The special treatment of antiquities and art treasures can be gauged from the interplay of other laws such as the Customs Tariff laws, which have classified, for the purpose of imposition of import duty, antiques and collectibles such as pieces of historical interest in addition to works of art.",
            "While the commonly known visual art forms and work of craftsmanship such as painting, engraving, sculpture, photography and works of architecture are under the category of 'artistic work', the lesser-known literary art, digital art and the derivative works like music and films are treated as separate and independent form of copyrightable works. The right to claim resale royalty is limited to only painting,sculpture and drawing of values exceeding 10,000 rupees and does not pertain to art of any value and even other art forms such as photographs.",
            "For any work, including artistic works, to be protected under the Copyright Act, it must be an original work expressed in some tangible form. A work is considered original and thus is protected under the Copyright Act if it has resulted from a modicum of creativity, skill and judgment of the author. The exercise of skill and judgment should not be 'trivial'.",
            "Applied arts, on the other hand, is largely the subject matter of industrial designs and trademarks (trade dress). The Designs Act, 2002 protects any novel and aesthetic feature, shape or pattern that is applied on any article through an industrial process.",
            "Another aspect of applied arts could be seen in the case of artistic logos and trade dress (shape of packaging), which are protectable subject matters under the Trademarks Act, 1999. The art, which is treated as a community property or as a national treasure, receives a distinguished treatment under Indian laws. The Geographical Indication Act, 2002 (the GI Law) and the Rules made thereunder protect the larger community interest relating to indigenous goods from misappropriation and deception.",
            "Success League Business Solutions offers a wide gamut of services regarding Work of Art: -",
          ],
          list: [
            ' General Principles [The Artist as Creator]: The ‘Author’ and the Creative Process',
            ' Protection & Enforcement of Intellectual Property',
            ' Problematic Issues in Art',
            ' Copyright and the Internet: The Virtual Art Museum',
            ' The Licensing and Management of Created Works',
            ' Copyright and Architectural Expression',
            ' Copyright and Dimensional Arts',
            ' Trademarks and Applied Arts',
            ' The Designs Act, 2002 and Applied Arts',
            ' Resale Right',
            
          ],
          imagePath: 'assets/img/new/Art.jpeg',
        },
        {
          title: 'MUSIC',
          paragraphs: [
            "A 'Musical Work' means a work consisting of music and includes any graphical notation of such work but does not include any words or any action intended to be sung, spoken or performed with the music. A musical work need not be written down to enjoy copyright protection. The composer of the musical work is the first owner.",
            "Music is protected under the copyright law in India. However, there are certain other aspects of music, like remix music, downloading, streaming of music etc. which are relatively new. Therefore, as the music industry is growing, both in size and reach, it is imperative to be aware of its legal implications.",
            "In India, musical works are protected under the Copyright Act 1957, which recognises music as a form of artistic expression deserving of legal rights and safeguards. The Act covers various aspects of musical works, including melodies, lyrics,arrangements, and sound recordings.",
            "Musical Works include Song Albums, Melodies, Chorales, Anthems, Newly Composed Hymns/ Spiritual Music, Lullabies, Opera and other Audio Compositions.",
            "Copyright in musical works grants creators the power to control and monetise their creations, fostering creativity, incentivising artistic endeavours, and safeguarding the economic interests of musicians and other stakeholders.",
            "According to the Indian Performing Rights Society vs. Eastern Indian Motion Pictures Association [AIR1977 SC 1443], the Hon’ble Supreme Court clarified that in a musical work, copyright does not solely pertain to the tune, singing, voice, or performance quality.",
          ],
          list: [
            ' It pertains to the melody or harmony expressed in a written or graphic form.',
            ' Sound Recording, as defined in Section 2(xx), refers to the recording of sounds that can be reproduced, irrespective of the medium or method used.',
            ' A Sound Recording Copyright encompasses the collection of sounds captured in a tangible medium, such as phonograph discs, tapes, cassettes, or digital formats.',
            ' A graphical representation of music that is recorded to produce audible sounds is considered a Sound Recording.',
            ' The producer is considered an author of sound recording whereas the composer is considered an author of musical work.',

          ],
          imagePath: 'assets/img/new/Music.jpeg',
        },
        {
          title: '',
          paragraphs: [
            "Success League Business Solutions provides all the Intellectual Property Rights Services pertaining to Musical Works in India. We take care of our clients' creations' 'Genuineness and Originality' and ensure they are not tempered with. We manage and secure our clients’ “Exclusive Creative Ownership” in the following domains-",
          ],
          list: [
            ' Reproduce the Work',
            ' Issuing copies of the work to the public',
            ' Perform the work in public',
            ' Communicating the work to the public',
            ' Making Cinematography Film or Sound Recording in respect of the work',
            ' Making any translation of the work',
            ' Making any adaptation of the work',
            ' Publishing and Licensing of Music',
            ' Downloading and Streaming',
            ' Live Performances',
            ' Remix Songs and Music',
            ' Playing of Music at Commercial Places and Venues',

          ]
        },

        {
          title: 'FASHION',
          paragraphs: [
            "Fashion Law as a concept is new. Fashion law, as can otherwise be referred to as 'apparel law', is an evolving area of legal arena, covering the legal issues with regard to every aspect of a garment. Right from the conception of the idea to design a  particular garment, to getting it stitched into clothing materials, styling and obtaining brand protection on it, legal assistance is needful at every step in order to ensure smooth flow of the work and avoid undesirable complications for the future.",
            "The fashion industry across the globe has witnessed significant growth with new markets in China, India and Africa. With the increase in fashion sense around the globe and with significant competition, brands have become very careful when it comes to protecting their vital Intellectual Property.",
            "Success League Business Solutions provides consultancy regarding licensing, assignment and franchisee agreements in the fashion industry. We also work for the process of IP protection in the fashion industry. We further undertake various redressal mechanisms like anti-piracy and anti-counterfeiting actions, infringemet suits etc. to safeguard the commercial interests of our clients. Our Services include the following: -",

          ],
          list: [
              ' Fashion Law and IP Protection',
              ' Fashion Negotiations',
              ' Fashion Law and Commercial Law',
              ' Fashion Shows and Presentations',
              ' Fashion Law and Crimes',
              ' Redressal Mechanism',
              ' Drafting of Fashion Agreements',
          ],
          imagePath: 'assets/img/new/Fashion.jpeg',
        },
        
        {
          title: 'SPORTS',
          paragraphs: [
            "Sports is a very delicate sensibility, an emotion. Every person has an innate urge to play and win. Sports is all about using physical and mental ability to triumph and rise.Sports, apart from serving as a means to improve the physical health and fitness of a person also helps to sharpen a person’s intellect and to help him strengthen his concentration. At its highest level, sport becomes a powerful social phenomenon that unites communities cutting across barriers and fosters international cultural exchange and friendship.",
            "Modern sports are often multi-billion dollars’ ventures, with global spectators– with numerous brands hogging the limelight and countless commodities being marketed and sold. With the steady growth and expansion of the sports industry, the capability of traditional models of governance of sports activities to deal with contemporary issues needs to be reviewed under the legal lens.",
            "The Services provided by SLBS are a step in that very direction: -",
          ],
          list: [
            ' Role of the State in Sports Governance',
            ' Image, Player and Media Rights',
            ' Anti-Corruption Rules in Sports',
            ' Gender Discrimination in Sports',
            ' Doping in Sports',
            ' Sports as Business',
            ' Betting in Sports',
            ' Sports Broadcasting',
            ' Labour and Contractual issues in Sports',
            ' Violence in Sports and Sports Injuries',
            ' Taxation and Sports',
            ' Sports Dispute Resolution',
            ' Sports Contracts Drafting',
            ' Unilateral Extension Clauses in Player Contracts',
          ],
          imagePath: 'assets/img/new/Sports.jpeg',
        },
      ],
    },
    {
      serviceId: '21',
      serviceName: 'FUND RAISING (PRE & POST IPO) AND LOAN SYNDICATION',
      imagePath: 'assets/img/new/IPO.jpeg',
      paragraphs: [
          "An Initial Public Offering (IPO) consists of the sale of shares to the public by a Startup for the first time. It happens only when a company has an established customer base and stable revenues. Prior to an IPO, companies are considered to be privately held. An IPO issue means that a company's ownership is transforming from private to public—i.e., ‘going public’. This is also the first time that a company tries to raise funds directly from the public on a public platform such as a stock exchange.",
          "Only start-ups with a proven track record of profitability and growth can sell stock to  the general public and list on the stock exchange. Funds raised from an IPO are used to pay off debts and fund growth initiatives.",
          "Success League Business Solutions offers a kaleidoscope of services w-r-t Fund Raising (Pre & Pro IPO): -",
      ],
      list:[ ],
      subService: [
        {
          title: 'Pre IPO',
          paragraphs:[],
          list: [
            ' Evaluation of IPO considerations, assessing why to access public funds',
            ' Formulate IPO Calendar and Responsibility Matrix',
            ' Review of compliances required under Securities and Exchange Board of India’s (SEBI), Issue of Capital and Disclosure Requirements Regulations (ICDR) and LODR Regulations (Listing Obligations and Disclosure Requirements)',
            ' Assist management to be IPO ready',
            ' Perform diagnostic and gap assessment of financial statements, accounting policies and corporate governance',
            ' Determine the right timing considering market conditions, investor sentiment and the company"s own financial performance',
            ' Develop the right team consisting of experienced Investment & Merchant Bankers, Accountants, Underwriters, Public Relations, Investor Relations firms',
            ' Helping the entity deliver a compelling message highlighting the company"s strengths, growth potential and unique value proposition',
            " Due Diligence thorough review of the company's financial statements, operations, legal and regulatory compliance, and other factors that could impact the success of the IPO ",
            " Drafting and reviewing the prospectus providing information about the company's business, financial performance, risks and other relevant information for potential investors.",
            " Ensuring strong corporate governance practices for transparency, accountability and effective risk management. This includes having an independent board of directors, clear policies and procedures and a commitment to ethical behaviour.",
            " Compliance with all applicable laws and regulations, including securities laws, tax laws and labour laws.",
            " ESOP advisory and implementation assistance",

          ]
        },
        {
          title: 'Post IPO',
          paragraphs: [
          ],
          list: [
            " Helping companies formulate strong investor relations policy to communicate with potential investors and maintain relationships with existing investors post IPO. This includes engaging with investors through regular communications and providing timely and accurate information about the company's performance and prospects.",
            " Preparation and presentation of quarterly financial results",
            " Compliance support in regulatory & tax reporting and filings",
            " Internal audits and ongoing reviews of corporate governance policies",
            " Assisting management in monitoring the use of IPO proceeds as per the prospectus",
            " Related Party Transactions review",
          ]
        },
        {
          title: 'Loan Syndication',
          paragraphs: [
            "Success League Business Solutions provide tailored corporate advisory services and facilitate fund raising and loan syndication for corporates by leveraging the inputs gathered from our vast, diversified and rich experience of investment banking, project appraisal, documentation and syndication in providing customized andcomprehensive end to end financial solutions.",
            "We advise our clients on the optimal capital structure depending on the company’s cash flows, growth prospects, industry-specific issues, and nature of assets. We share strong professional relationships with banks & financial institutions and through our strong business network, we help our client corporations to leverage on debt as an instrument to raise capital for diverse purposes like Working Capital, Expansion, Fund Structuring for Acquisitions along with Term/ Corporate/ Project Loan.",
            "SLBS services in Debt & Loan Syndication include:-",
          ],
          list: [
            " Preliminary Consultation",
            " Drafting Loan Proposal",
            " Coordination with Banks & Financial Institutions for Due Diligence",
            " Negotiation with Bank Officials for Loan Terms",
            " Assistance in Documentation",
            " Follow up for Approval",
            " Getting Sanction Letter",
            " Completion of Legal Formalities for Disbursement of Credit Facilities",

          ]
        },
      ],
    },

    {
      serviceId: '22',
      serviceName: 'ALTERNATIVE & TECH INVESTMENTS',
      imagePath: 'assets/img/new/Alternative Investment.jpeg',
      title:'ALTERNATIVE INVESTMENTS',
      paragraphs: [
          "An Alternative Investment is commonly regarded as an investment in any asset that is not simply a long position in any of the traditional investments. Alternative investments can be investments in tangible assets such as vintage cars or rare stamps. Additionally, they can be investments in financial assets too such as private equity, hedge funds and sovereign wealth funds. Moreover, they can constitute intangible assets too such as non- fungible tokens, digital art and security tokens",
          "More often than not, Alternative Investments are generally specific to High Net Worth Individuals (HNWIs), Very High Net Worth Individuals (VHNWIs) and Ultra High Net Worth Individuals (UHNWIs). ",
          "High Net Worth Individuals (HNWIs) may be classified as ones who possess financial assets worth at least $1 million (INR 5 Crores). Individuals who have a net worth of $5 million (INR 5-25 Crores) are known as Very High Net Worth Individuals (VHNWIs). Finally, Ultra High Net Worth Individuals (UHNWIs) are defined as individuals with a net worth of $30 million (Over INR 25 Crores) and above. ",
          "However, with the introduction of Collective Investment Vehicles and Pooled Investment Avenues, it has become comparatively easier for investors in lesser income groups also to tap the investment potential present in the Alternative Investments Markets. Success League Business Solutions provides deft advisory services regarding the following Alternative Investments avenues to its prospective investor clients: -",
         
      ],
      list:[ ],
      subService: [
        {
          title: 'A. Financial Assets',
          paragraphs:[],
          list: [
            ' Private Equity- Venture Capital & Angel Investing',
            ' Private Debt- Debt Capital Market (DCM), Middle Market, Asset-Based Lending (ABL), Mezzanine Debt, Distressed Debt',
            ' Hedge Funds',
            ' Managed Futures',
            ' Structured Products- Collateralized Debt Obligations, Credit Derivatives, Credit Default Swaps, Equity Linked Structured Products',
            ' Pension Funds',
            ' Government Securities',
            ' Sovereign Wealth Funds',

          ]
        },
        {
          title: 'B. Real/Tangible Assets',
          paragraphs: [
          ],
          list: [
            "Commodities",
            "Natural Resources- Land, Timberland, Farmland",
            "Real Estate",
            " Commercial & Development Infrastructure- IT Parks, MICE Establishments, Hospitality Properties, Hotels",
          ]
        },
        {
          title: 'C. Collectibles',
          paragraphs: [
       
          ],
          list: [
            " Arts & Artefacts",
            " Sculptures",
            " Numismatics & Coins",
            " Vintage Wines",
            " Old Stamps",
            " Rare Books",
            " Classic Cars",
            " Rare Vintage Comic Books from Iconic Superhero Series",

          ]
        },
        {
          title: 'D. Luxury/ Leisure/ Passion Assets',
          paragraphs: [
       
          ],
          list: [
            " Luxury Watches",
            " Private Jets",
            " Yachts",
            " Meteorites- Extra-terrestrial Rocks that have fallen to earth, such as Meteorites, Asteroids and Lunar Samples",
            " Musical Instruments- Iconic instruments like Guitars & Saxophones owned by famous musicians are highly sought after. Stradivarius String Instruments, Paul Reed Smith and Gibson Guitars, Vintage Fender Stratocasters",
            " Sneakers- Popular Sportswear Brand Models linked with Filmstars, famous Athletes or Historical Events acquire a Cult Status & an Iconic Cultural Value.",
            " Luxury Handbags- Hermes Birkin and Kelly bags",
            " Lego Sets Investing",

          ]
        },
        {
          title: 'E. Intangible/ Digital Assets',
          paragraphs: [
       
          ],
          list: [
            " Non-Fungible Tokens (NFTs)",
            " Security Tokens",
            " Numismatics & Coins",
            " Virtual Brand Logos",
            " Central Bank Digital Currencies (CBDC)",
            " Infographics",
            " Stable coins",
            " Whitepaper PDFs",
            " Digital Art",
            " Retro Video Games alongwith Sealed Copies from the 8-bit and 16-bit era primarily Mario, Zelda, Mega Man and Sonic Releases.",
            " Patents",
            " Trademarks",
            " Domain Names",
            " Royalties on Books & Songs",
            " Digital Information Content providing Unique Rights/ Copyrights over Digital Courses",
            " Proprietary Business Models",

          ]
        },
        {
          title: 'TECH INVESTING',
          paragraphs: [
            "We live in times with record low interest rates combined with an inflationary environment. This results in an ongoing devaluation of our cash holdings. Technological innovation and socio-economic megatrends hold great potential for investors and in this decade there will be more value creation than in the last 50 years.",
            "Technology is no longer an option but a fundamental requirement for businesses looking to thrive in today’s dynamic and competitive environment. It empowers companies to lower costs, enhance productivity, expand market reach, improve customer engagement, make data-driven decisions, and maintain a competitive edge.",
            "The rationale behind why investors are being increasingly attracted to the tech sector may be summarised below: -",
            "First, the potential for high growth & consequent high returns is phenomenal. Many technology companies have experienced exponential growth, providing substantial profits to their investors",
            "Second, technology and innovation are constantly pushing the boundaries of productivity and cost-effectiveness leading to disruptive advancements that can transform entire industrial landscape. This continuous evolution offers immense opportunities for those investing early in such emerging technologies.",
            "Furthermore, the tech sector often leads the market in R&D and innovation, resenting unique investment opportunities not available in other sectors.",
            "Considering all such factors, requirements and industry dynamics, Success League Business Solutions leverages its broad industry professional networking across diverse sectors to assist the upcoming tech investors by providing the most dexterous investment recommendations w-r-t the following investment avenues available in the tech investment arena: -",

          ],
          list: [
            " Software as a Service (SaaS)",
            " Banking as a Service (BaaS)",
            " Data Farms",
            " Web/ Cloud Server Platforms",
            " Exponential Technologies- Internet of Things (IoT), Interface of Things, 3D Printing, Virtual Reality (VR)",
            " Blockchain and Crypto Assets",
            " Artificial Intelligence (AI)",
            " Digital Platforms",
            " Edge Computing",
            " Climate Tech- Energy, Mobility, Buildings, Agriculture, Industry",
            " Circular Economy",
            " Quantum Computing",
            " Semiconductors",
            " Nanotechnology",
            " Space Technology",
            " Biotechnology & Genetic Engineering",
            " Robotics",
            " Autonomous Driving Vehicles",
            " Digital Payment Infrastructure, FinTech",
            " Non- Invasive Surgical technologies & Genetic Medicines",

          ]
        },
      ],
    },
    
  ]

  serviceToShow: any;

  ngOnInit(): void {
    this.route.params.subscribe(({serviceId}) => {
      console.log(serviceId)
      this.serviceToShow = this.finalData.find(sId => sId.serviceId == serviceId);
    })
  }


}

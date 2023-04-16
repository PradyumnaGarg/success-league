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
      paragraphs: ['We advise and assist clients on the establishment of operations in the India across all corporate structures with special focus on handholding services to Start-ups. This involves obtaining all registrations, licenses and approvals and meeting all legal requirements for commencing their operations.', 'Our due diligence process provides a detailed review of a target business from a financial and commercial perspective, adding value by focusing on the key issues likely to affect the decision to proceed with the acquisition and those factors which affect the price.'],
      list: [
        'Advising on the legal framework for the proposed business activity, as well as on the preferred vehicle or structure for the investment, including the establishment of branches, subsidiaries, representative offices and regional headquarters.', 'Advising on and obtaining special registrations for Start-ups to avail of tax and other incentives.', 'Preparing, negotiating and reviewing contracts for various corporate and commercial transactions that may arise from the client’s business.', 'Corporate Law Assurance', 'Corporate Compliance Management', 'Due Diligence- Legal, Financial and Commercial for Mergers & Acquisitions and Corporate Restructuring', 'Forex Law Assurance', 'Joint Venture, Share Purchase and Acquisition', 'Agreements',
        'Commercial Agreements',
        'Review and assistance in documentation from regulatory viewpoint',
        'Mapping of regulatory processes',
        'Regulatory compliances for Corporate Laws, Securities Laws, Capital Market, Foreign Exchange Management Act, Competition Law and Intellectual Property.'
      ],
      subService: [
        {
          title: 'Litigation, Arbitration & Dispute Resolution',
          paragraph: ['Our Dispute Resolution Practice Group (DRPG) provides strategic dispute analysis and practical advice on realistic assessments of the outcomes and potential costs. We help you to make informed decisions consistent with your commercial objectives. The Firm has a strong Litigation & Arbitration Group consisting of lawyers with significant experience in handling dispute resolution in diverse jurisdictions.',
          'We help our clients in all fields ranging from civil and criminal litigation and focus on all types of litigation instituted and prosecuted within India. Our lawyers help the clients select the best and most suitable strategy while taking into account the complexities and merits of each matter on customized parameters. Our lawyers are acknowledged as some of the leading Indian practitioners in dispute resolution.',
          'The Dispute Resolution group entertains matters predominantly in most of the Courts in India, including District Courts, Tribunals, Commissions, Forums, High Courts and the Supreme Court of India.'
        ],
        list: [
          'International and domestic Commercial Arbitration',
          'Construction Arbitration',
          'Corporate disputes, including shareholders ‘actions and other inter-corporate and Intra-corporate disputes Partnership and Joint Venture controversies',
          'International Trade disputes',
          'Banking and Finance disputes',
          'Distribution Agreement disputes',
          'Insurance and Reinsurance actions',
          'Restraint of Trade',
          'Intellectual Property actions',
          'Construction Disputes',
          'Professional Negligence',
          'Contract and Property disputes',
          'Enforcement of Foreign Judgments and Multijurisdictional Conflicts',
          'Tort Claims',
          'Administrative, Tax and Customs Litigation',
          'Corporate Rehabilitation and Insolvency',
          'Infringement of Intellectual Property Rights',
          'Constitutional Matters',
          'Matrimonial Disputes',
          'Service Matters',
        ]
        },    {
          title: 'Employment & Service Matters',
          paragraphs: [
            'Employment law is a broad area of law that covers the relationship between the Employer and the employees, unions and employers, that is, management. The lawyers of the firm have been representing various employers in fields of labour disputes, union relations and wage & hour laws, compensation and retrenchment related disputes before the administrative, Judicial and Quasi judicial authorities and Tribunals.',
            'The professionals of the firm counsel the clients in each and every area of labour and employment law, and have been providing support in all aspects of employment and labour affairs, and regularly provide legal advice and represent various institutions, real estate developers, hotel chains, pharmaceutical companies towards the employment related affairs, Trade Unions and Employment related litigation.',
            'Success League helps employers arrive at sound and mutually beneficial employment policies, leveraging the deep knowledge of the dynamics of Indian labour laws and practices in consonance with and internationally accepted norms and policies.'
          ],
          list: [
            'General Employment Law Advice',
            'Employment Contract Review and Development',
            'Workmen’s Compensation',
            'Employee Benefits',
            'Executive Compensation and Transfer',
            'Collective Employment Termination',
            'Collective Bargaining Agreements',
            'Discrimination and Sexual Harassment Law Advice',
            'Trade Union Recognition procedures',
            'Expat & Immigration-related matters',
            'Drafting Non-Disclosure Agreements, Confidentiality Agreements, Non-compete Agreements'
          ]
        },
        {
          title: 'Representations and Settlement',
          paragraphs: [],
          list: [
            'Ministry of Corporate Affairs',
            'Stock Exchanges, Securities and Exchange Board of India , Securities Appellate Tribunal',
            'Competition Commission of India',
            'Reserve Bank of India, Invest India, Foreign Investment Promotion Board and Enforcement Directorate',
            'District Courts, Company Law Board, Tribunals, High Courts and Supreme Court',
            'Tax Authorities including Commissioner (Appeals) and ITAT',
            'Registrar and Intellectual Property Appellate Board',
            'The National Consumer Dispute Redressal Commission (NCDRC)',
            'The State Dispute Redressal Commissions',
            'District Consumer Dispute Redressal Forums',
            'Police Department',
          ]
        },
        {
          title: 'Banking, Para Financial & Insurance',
          paragraphs: [
            'Our banking & finance team offers keen insight into providing practical and innovative solutions to your banking and insurance (General & Life Insurance segment) issues.'
          ],
          list: [
            'Dishonour of Cheques',
            'Banking Loans to individuals and',
            'Loans to MSME & Other corporate entities',
            'Loan against Property (LAP)',
            'Loan against Shares (LAS)',
            'Issues relating to Letters of Credit, Bank and Performance Guarantees',
            'Proceedings under the Securitization and Reconstruction of Financial Interest and Enforcement of Security Interest Act, 2002 (SARFAESI)',
            'Equity & Commodity Broking through third-party broking',
            'General & Life Insurance Broking through third-party broking',
          ]
        },
        {
          title: 'Real Estate',
          paragraphs: ['The Firm has been advising to its clients on acquiring or disposing of real estate, creating a tax efficient investment vehicle, or strategizing a development project. The firm shall endeavour to advise you no matter you are an investor, financier, owner, occupier or developer. The Group also provides strategic legal advice to Builders, Developers, Infrastructure Development Companies, Property Owners and Government Undertakings on various issues relating to real estate transactions. The firm shall also provide services for due diligence and comprehensive documentation and multiple clients have particularly valued our support in dispute resolution.'],
          list:  ["Real Estate Investment Trusts (REIT)", "Matters pertaining to Real Estate Regulation & Development Act (RERA)", "Residential & Commercial Real Estate", "Retail Spaces, Shopping Malls, Multiplexes", "Hotels & Hospitality Properties", "Industrial Properties"]
        },
        {
          title: 'International Business/ Foreign Trade',
          paragraphs: [],
          list: ["Success League collaborates with Investment Facilitation Agencies and Business Chambers & prepares for matchmaking of foreign companies with their Indian counterparts for investment, technology transfer and trade.", "We regularly coordinate with overseas investment promotion agencies operating in India about business prospects for Indian industrialists & businesses in overseas markets.", "By means of diligent communication, we strive continuously to increase awareness on the part of foreign investors, industrialists, service providers and technology suppliers about business conditions, policy & procedures about FDI in selected regions and priority sectors of India.", "We facilitate to provide expert advice and information regarding forms of cooperation, such as joint ventures, subcontracting, licensing and any other form of transfer of technology/ resources to India.", "Success League also provides services like Customs Litigation, Customs Valuation & Costing, Export- Import Documentation alongwith facilitating International Trade Finance to its clients.", "All services under Export-Import under Foreign Trade (Development & Regulation) Act of 1992 & The Marine Products Export Development Authority Act, 1972"]
        },
        {
          title: 'LEGAL COVERAGE Under Statutory, Regulatory & Compliance',
          paragraphs: [],
          list: ["All Corporate matters under Companies Act, 2013, Indian Partnership Act, 1932, Limited Liability Partnership Act, 2008", "Litigation, Arbitration & Dispute Resolution", "Employment & Service Matters", "Representations and Settlement", "Para Financial Services (Banking & Insurance in the nature of Third-party Sub-Broking)", "Securitisation Services- Compliance of Proceedings under the Securitization and Reconstruction of Financial Interest and Enforcement of Security Interest Act, 2002 (SARFAESI)", "Overseas Immigration Assistance", "Export-Import under Foreign Trade (Development & Regulation) Act of 1992, The Marine Products Export Development Authority Act, 1972 and India's Export Import (EXIM) Policy", "Real Estate including Matters pertaining to Real Estate Regulation & Development Act (RERA), 2016"]
        },
      ]
    },
    {
      serviceId: '2',
      serviceName: 'START-UPS MENTORING AND FUNDING SERVICES',
      paragraphs: [
        'With the spread of COVID-19, the world is facing an unprecedented economic and health crisis. Many global leaders and economists view COVID-19 as “the gravest challenge since World War II.” On March 16, 2020 the G7 leaders issued a joint statement “acknowledging that the COVID-19 pandemic is a human tragedy and a global health crisis, which also poses major risks for the world economy.”',
        'As the world has become tightly connected into a global society, the problems of one country can also greatly impact other countries through various global chains. Under these circumstances, it will be helpful to share information on the rigorous epidemiological investigation using ICT, and pan-governmental cooperation at national, provincial and city levels.',
        'As the pandemic is unfolding in ways completely different from past economic crises, we need unprecedented economic countermeasures. Under such circumstances, corporates should divert production to production plants with less disruption to the supply chain & workforce, update budget allocations to suit need transformation and recovery rate, offer loans & cash payments to suppliers to prevent production halt,  redeploy sales effort to online for B2C & B2B and offer paid leaves to employees and other support staff.',
        'They should reconsider policy measures w-r-t reimagining business possibilities, identifying behaviour shifts and considering inorganic moves. Moreover, they should re-strategize FY 2023-24 by building agile scenario-based plans, re-configuring workforce to deal with uncertainty, rationalize costs for resilience & explore M&A and other Corporate Restructuring moves.',
        'The Govt. of India has steadfastly risen to the occasion and introduced programmes like ‘Vocal for Local’ and ‘Aatmnirbhar Bharat’ to give tremendous boost to indigenous production and encouraging new entrepreneurs, technocrats and edupreneurs to start new ventures for generating employment opportunities as well as aid the Indian economy to reach a new high and resuscitate the India growth story.',
        'In 2021, many Indian Start-ups proudly entered the prestigious ‘Unicorn Club’, namely Flipkart Moglix, BharatPe, CoinDCX, upGrad, Groww, BlackBuck, Droom, OfBusiness, Meesho and Zetwork & successfully demonstrated that Indian business and digital fraternity can stand upto any challenge posed by unprecedented circumstances impacting global business environment.',
        'At Success League, we won’t share just our experience with you. Over the course of years, we have developed strong networks in different fields of business across varied sectors. Through Startup mentoring, we can help you envisage your short as well as long-term goals & objectives and act as a conduit between you and different agencies. We can open up networking opportunities for you in competitor analysis, demand estimation and market research amongst host of others.'
      ],
      subService: [
        {
          title: 'Our Overall Handholding Approach',
          list: [
            'Provide pertinent, positive support and constructive feedback.',
            'Guide you on how to be efficient and effective with your resources, especially time and money.',
            'Be practical in approach and focused on solutions to issues as they arise.',
            'Providing a safe and confidential engagement.'
          ],
          paragraphs: []
        },
        {
          title: 'Stage 1 - Introduction',
          list: [
            'Getting to know you and your business idea. Where have you been, where are you now, where do you want to get to?', 
            'What issues are you facing?',
            'Understanding your target audience, competitors, market.',
            'Drafting a plan and setting achievable goals and action points.',
            'How can we assist you?'
          ],
          paragraphs: []
        },
        {
          title: 'Stage 2 - Orientation',
          list: [
            'Detailed S.W.O.T. Analysis.',
            'In-depth Market Research Considerations.',
            'Establishing Key Performance Indicators.',
            'Understanding your customers segments'
          ],
          paragraphs: []
        },
        {
          title: 'Stage 3 - Conception',
          list: [
            'Consider challenges and risks.',
            'Removing Barriers to Success.',
            'What are the areas of change anticipated over the next three to five years?',
            'Financing your Venture through the Best Investment Vehicle.',
            'Marketing Strategy Defined and Outlined.',
          ],
          paragraphs: []
        },
        {
          title: 'Start-Up Services',
          paragraphs: [
            'Start-Up Services may be further categorized under Institutionalized and Soft-Skill Services, where we work in collaboration with our professional service partners in some areas.'
          ],
          list: []
        },
        {
          title: 'Institutionalized Services',
          paragraphs: [],
          list: [
            'Business Idea Generation and Feasibility',
            'Concept Refinement',
            'Identifying Scope for Further Innovation', 
            'Business Strategy',
            'Market Research',
            'Investor Pitch Creation',
            'Financing',
            'Legal , Regulatory & Compliance Issues',
            'Intellectual Property',
            'Preparing a "Value Proposition"',
            'Marketing & Brand Positioning',
            'IT & Software Development',
            'Comprehensive Digital Marketing Bouquet'
          ]
        },
        {
          title: 'Soft Skill Services',
          paragraphs: [],
          list: [
            'Imparting Effective Communication Skills.',
            'Leadership Development for the Promoters/ Core Team.',
            'Networking with appropriate Government Agencies, Professionals and Organizations.',
            'Preparation before interacting with Statutory Agencies/ Venture Capital Funds / Angel Investors/ Seed Financing Institutions/ Banks for Bridge Loans.',
            'Access to Start-Up Ecosystem.',
            'Forging Professional Relationships with other Entrepreneurs / Startups.',
            'Developing Flexibility, Knack of Diversification, Adaptability to Change and Perseverance.',
            'Identifying New Opportunities & ‘Having an Eye for Commercialisation’.',
            'Problem- Solving through Sharpening your Curiosity and Recognizing / unearthing new problems & challenges and search for potential niche opportunities.',
            'Spotting Trends and availing ‘First-Mover’s Advantage’.'
          ]
        }
      ]
    },
    {
      serviceId: '3',
      serviceName: 'START-UP FINANCING/ FUND RAISING/ INVESTMENT FACILITATION',
      paragraphs: [],
      subService: [
        {
          title: 'What is a Start-Up Entity',
          paragraphs: [
            'As per Gazette notification dated May 23, 2017, an entity shall be considered as a Startup:'
          ],
          list: [
            'If it is incorporated as a private limited company (as defined in the Companies Act, 2013) or registered as a partnership firm (registered under section 59 of the Partnership Act, 1932) or a limited liability partnership (under the Limited Liability Partnership Act, 2008) in India; and',
            'Up to seven years from the date of its incorporation/ registration; however, in the case of Startups in the biotechnology sector, the period shall be up to ten years from the date of its incorporation/ registration; and',
            'If its turnover for any of the financial years since incorporation/ registration has not exceeded Rupees 25 crores; and',
            'If it is working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of  employment generation or wealth creation.'
          ]
        },
        {
          title: '',
          paragraphs: [
            'Provided that any such entity formed by splitting up or reconstruction of a business already in existence shall not be considered a ‘Startup’.',
            'Further, The Manual for Procurement of Consultancy and other Services, 2017 considers “an entity as Start-up up to a period of 10 years vis-à-vis 5 years and turnover threshold has been revised from INR 25 crores to INR 100 crores”. Furthermore, an entity recognised as Start-up by DPIIT is eligible for benefit granted under Procurement purposes as against the requirement of obtaining eligible business certificate by the Inter-Ministerial Board.',
            'Success League assists the upcoming Start-Ups with availing all the financial and non-financial benefits offered under Start-Up India flagship program launched by the Govt. of India, namely:- '
          ],
          list: [
            'Startup India Seed Fund Scheme (SISFS)',
            'Fund of Funds for Startups (FFS)',
            'Section 80-IAC: Income Tax exemption for 3 out of 10 years',
            'Section 79: Carry forward and set off of losses',
            'Startups are provided with an 80% rebate in filing of patents vis-a-vis other companies, bringing down the cost from INR 8,000 to INR 1,600.',
            '50% rebate is also provided in filing of trademarks vis-a-vis other companies decreasing the cost from INR 10,000 to INR 5,000.',
            'A DPIIT recognized startup is eligible for exemption from the provisions of section 56(2) (vii b) of the Income Tax Act.',
            'The Finance Bill 2022 provided that the surcharge on the long-term capital gain is capped at 15% for unlisted companies from existing 37% for high income group. This announcement will effectively reduce the tax rate from 28.5% to 23.9%.'
          ]
        },
        {
          title: '',
          paragraphs: [
            'Additionally, Success League helps Start-ups for successfully meeting their financial requirements at every stage of funding by facilitating them to explore various avenues of funding & investment (Private as well as Government) at respective stages of their life cycle. The Mechanics of Financing under various stages are explained hereafter.'
          ],
          list: []
        },
        {
          title: 'Start-Up Funding',
          paragraphs: [
            'Startup funding is the process of searching and identifying investors who can finance an entrepreneur’s novel venture and transform his idea and vision into reality i.e. product or service, and later result into revenue generation. With more than 73,000 startups, India is the home to the third largest startup ecosystem in the world. Indian startups managed to raise funds to the tune of $19 Billion in 2022.',
            'Considering the various stages of growth through which a startup would undergo, the sources of funding may differ. E.g. a startup may have to go through the developmental process of sunrise, expansion, product development or it may decide to scale up its inventory and office space.',
            'In the overall commercial scenario, investors fund a startup in the hope of gaining a large amount of profit, and depending upon the nature of investment (debt or equity), they may also impact the running of the business by participating in the decision-making process. Usually, investors look for the primary factors involved in the funding process, namely-'
          ],
          list: [
            'Differential Offering & Value Proposition',
            'Management and Team',
            'Market Potential & Demand Estimation', 
            'Scalability and Sustainability',
            'Customers and Suppliers',
            'Competitive Landscape',
            'Financial Appraisal',
            'Marketing Avenues',
            'Exit Options'
          ]
        },
        {
          title: 'Startup Fund Raising Process',
          paragraphs: [],
          list: [
            'Conducting a Proof of Concept and development of Prototype',
            'Assessing Funding Requirements',
            'Preparation of Pitch deck',
            'Finding the Correct Mentor',
            'Seeking Investors through Industry Research & access to Ecosystem' ,
            'Identifying the best Investment Avenue',
            'Perusing the Investment Readiness',
            'Approaching the Investors.',
            'Due Diligence by Investor’s Project Evaluation/ Appraisal Team',
            'Preparation of Term Sheet and subsequent Negotiations',
            'Legal Closing & Documentation',
            'Fund Transfer'
          ]
        },
      ]
    },
    {
      serviceId: '5',
      serviceName: 'INTELLECTUAL PROPERTY',
      paragraphs: [
        'Our innovative approaches encompass all aspects of intellectual property protection. Combining insightful advice and innovative tools, we help clients in obtaining, defending, enforcing, and exploiting intellectual property rights, including Copyrights, Trademarks and Patents. We offer seamless service on a range of matters, from counselling on registrability, conducting trademark searches, registration and maintenance, to commercialization, protection and enforcement.',
        'We also understand that effective protection of path-breaking technologies and successful litigation of patent disputes are critical aspects of today’s increasingly competitive business environment. The professionals and the firm have represented several international clients to provide Trademark Prosecution services in India.',
        'The Intellectual Property (IP) practice group contains several diverse individuals with scientific and non scientific backgrounds to facilitate Patent Filing and Prosecution. The firm also has attorneys who have extensive experience in the litigation of intellectual property conflicts especially for Trademark and Copyright Infringement and Passing Off. Besides the aforesaid, the firm has been advising and counselling towards negotiating and drafting a variety of license, assignment and sale agreements.',
        'Equipped with in-depth knowledge of local IP laws and commercial practices drawn from our extensive on-the-ground experience in the market, our lawyers & professionals deliver specialist advice in specific areas of intellectual property law such as IP litigation and enforcement actions.',
        'The firm also offers similar services for other Intellectual property rights like Trademarks, Copyrights, and Industrial Designs. We have got special expertise in the areas of Registration of Trademark/Service mark, advising and counselling on Trade Secret, Registration of Copyright, Filing of Patent Application, Registration of Design and Geographical Indications.'
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            'Patent Drafting', 
            'Patent Application Preparation',
            'Patent Writing',
            'Patent Prosecution &Patent Litigation', 
            'Licensing and Franchising',
            'Technology Transfer',
            'IP Prosecution',
            'General IP Advisory',
            'Prior Art Searches',
            'Trademark Registration & Portfolio Management',
            'Trademark/Trade Dress Litigation',
            'Anti-piracy/Anti-counterfeiting',
            'Commercial/Non-contentious IP',
            'IP Audit and Due Diligence',
            'Customs Recordation of IP Rights',
            'IP Arbitration'
          ]
        },
        {
          title: 'LEGAL COVERAGE Under Intellectual Property Rights',
          paragraphs: [
            'Ensuring Compliance under various laws governing Intellectual Property Rights in India, namely: -'
          ],
          list: [
            'Trade Marks Act, 1999',
            'The Patents Act, 1970 (amended in 2005)',
            'The Copyright Act, 1957',
            'The Designs Act, 2000',
            'The Geographical Indication of Goods (Registration and Protection) Act, 1999',
            'The Protection of Plant Varieties and Farmers Rights Act, 2001',
            'The Information Technology Act, 2000'
          ] 

        }
      ]
    },
    {
      serviceId: '4',
      serviceName: 'BRAND PROMOTION',
      paragraphs: [
        "Success League provides integrated branding services from conducting initial brand research to uncover key insights into your brand, to developing a brand strategy which clearly defines your brand's unique characteristics, values and attributes, to bringing your brand to life through logo, visual identity and collateral and launching your new or updated brand to employees and the market.",
        "We are ably supported in all our professional endeavours by our collaborations and trusted long standing productive relationships with major News Channels alongwith leading Trade & Business Newspapers & Magazines and premier Public Relations & Corporate Communication agencies.",
        "We will facilitate exclusive media interaction of our clients with top three to five mainline and financial news channels & newspapers to generate meaningful and positive messaging of their brands. The interaction will focus on milestones achieved by their company, future roadmap, challenges, new strategies etc. Our Services offered constitute the following: -",
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            'Production of Television Commercials (TVCs), Documentaries, Impact Features & Radio Jingles',
            'Brand Identity Review',
            'Brand Projection Strategy',
            'Brand Positioning',
            'Brand Portfolio Analysis',
            'Customer Value Proposition',
            'Engagement with Stakeholders (Clients, Prospects, Peer Fraternity, Reference Groups, Industry Experts and Researchers)',
            'Brand Logo & Copywriting',
            'Digital & Graphic Design',
            'Brand Identity Development - Design & Collaterals',
            'Relationship Building Programs and Events',
            'Social Engagements including appropriate alignments with organizations and Social Interest Groups',
            'Business Network Management',
            'Media Strategy Interactions for building Third Party Credibility',
            'Web Presence Optimization'
          ]
        },
        {
          title: 'Media FAM Services',
          paragraphs: [
            'We would be pleased to facilitate a Media Familiarization tour may be organized with at least three prominent publications consisting of regional, electronic and online. Journalists will be taken to company premises as well as company’s manufacturing unit, if required, to analyse the work done by client’s company.'
          ],
          list: []
        },
        {
          title: 'Media Roundtables',
          paragraphs: [
            'Success League will facilitate to organise a media roundtable with select publications including regional, mainlines and financials to sustain the brand buzz and generate positive conversation. This entry by invitation only roundtable over lunch will go a long way to help in building good media contacts at the ground level.'
          ],
          list: []
        },
        {
          title: 'Speakership Opportunities',
          paragraphs: [
            'We will facilitate to explore speakership opportunity for our clients at leading national and regional events to create meaningful conversation about the brand. B2B events focusing on digitisation, infrastructure, real estate etc. to be tapped.'
          ],
          list: []
        },
        {
          title: 'Participation in Thought Leadership Forums',
          paragraphs: [
            'We will facilitate to highlight the client’s brand’s unique offering in context with Indian markets and make a blueprint to pave a way ahead through Op-ed articles to create impactful conversation.'
          ],
          list: []
        },
        {
          title: 'Social Media Promotion',
          paragraphs: [
            'To leverage the power of Facebook, Twitter, Instagram, LinkedIn and YouTube to enhance and rejuvenate brand image.'
          ],
          list: []
        },
        {
          title: 'Digital Marketing',
          paragraphs: [
            'Services to be provided include Search Engine Optimisation, Blog Writing & Feedback Management, Newsletters (designing, content layout), Online Content Production (stories & videos) for geo-targeting in multiple languages, E-Mail Marketing (designing of flyers, brochures) alongwith Development of Mobile App.'
          ],
          list: []
        },
        {
          title: '',
          paragraphs: [
            "LEGAL COVERAGE FOR Protection of Society from Deceptive and Misleading Media and Advertising under Various Laws and Regulations Protection of Society from Deceptive, Misleading, or False Advertising and Marketing Campaigns under different laws and statutes in India, namely: -"
          ],
          list: []
        },
        {
          title: 'Laws Governing Media and Entertainment',
          paragraphs: [],
          list: [
            'The Press Council Act 1978',
            'Cable Television Network Rules, 1994',
            'Code for Commercial Advertising on Doordarshan and All India Radio',
            'Electronic Media Monitoring Centre (EMMC)',
            'Cinematograph Act, 1952',
            'Norms for Journalist Conduct issued by the Press Council of India',
            'Code of Conduct of the News Broadcasters Association',
            'Press and Registration of Books Act, 1867',
            'Indian Telegraph Act, 1885 including Amendment Acts of 2003 and 2006',
            'Indian Wireless Telegraphy Act, 1933',
            'Vernacular Press Act, 1878',
            'Telecom Regulatory Authority of India Act, 1997'
          ]
        },
        {
          title: 'Laws Governing Marketing and Advertising',
          paragraphs: [],
          list: [
            'Consumer Protection Act, 1986',
            'Cable Television Networks (Regulation) Act, 1995',
            'Cable Television Network Rules, 1994',
            'Indecent Representation of Women (Prohibition) Act, 1986',
            'Young Persons (Harmful Publications) Act, 1956',
            'Emblems and Names (Prevention of Improper Use) Act, 1950',
            'Drugs and Magical Remedies (Objectionable Advertisements) Act, 1954',
            'The Prize Chits and Money Circulation Schemes (Banning) Act, 1978',
            'Drugs and Cosmetic Act, 1940',
            'The Food Safety and Standards Act, 2006',
            'Securities and Exchange Board of India (Prohibition of Fraudulent and Unfair Trade Practices Relating to Securities Market) Regulations, 2003',
            'Monopolies and Restrictive Trade Practices Act, 1969',
            'Competition Act, 2002',
            'Prevention of Misuse of Social Media under Information Technology Act, 2000 and Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2022.'
          ]
        }
      ]
    }
  ]

  serviceToShow: any;

  ngOnInit(): void {
    this.route.params.subscribe(({serviceId}) => {
      console.log(serviceId)
      this.serviceToShow = this.finalData.find(sId => sId.serviceId == serviceId);
    })
  }


}
